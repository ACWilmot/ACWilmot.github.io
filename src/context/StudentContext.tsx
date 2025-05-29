import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { StudentProfile, StudentProgress, UserProgress, TimesTableProgress } from '@/types/userTypes';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface StudentContextType {
  selectedStudentId: string | null;
  setSelectedStudentId: (studentId: string | null) => void;
  selectedStudent: StudentProfile | null;
  studentProgress: { [subject: string]: StudentProgress } | null;
  isLoadingStudentProgress: boolean;
  refreshStudentProgress: () => Promise<void>;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [studentProgress, setStudentProgress] = useState<{ [subject: string]: StudentProgress } | null>(null);
  const [isLoadingStudentProgress, setIsLoadingStudentProgress] = useState(false);

  useEffect(() => {
    if (selectedStudentId) {
      fetchSelectedStudent();
      fetchStudentProgress();
    } else {
      setSelectedStudent(null);
      setStudentProgress(null);
    }
  }, [selectedStudentId]);

  const fetchSelectedStudent = async () => {
    if (!selectedStudentId) return;

    try {
      const { data, error } = await supabase
        .from('student_profiles')
        .select('*')
        .eq('id', selectedStudentId)
        .single();

      if (error) {
        console.error('Error fetching student:', error);
        return;
      }

      setSelectedStudent(data);
    } catch (error) {
      console.error('Error fetching student:', error);
    }
  };

  const fetchStudentProgress = async () => {
    if (!selectedStudentId) return;

    setIsLoadingStudentProgress(true);
    try {
      const { data, error } = await supabase
        .from('student_progress')
        .select('*')
        .eq('student_profile_id', selectedStudentId);

      if (error) {
        console.error('Error fetching student progress:', error);
        toast.error('Failed to load student progress');
        return;
      }

      // Convert array to object keyed by subject with proper type casting
      const progressBySubject: { [subject: string]: StudentProgress } = {};
      (data || []).forEach(progress => {
        progressBySubject[progress.subject] = {
          ...progress,
          progress: progress.progress as UserProgress,
          times_tables_progress: Array.isArray(progress.times_tables_progress) 
            ? progress.times_tables_progress as TimesTableProgress[]
            : undefined
        };
      });

      setStudentProgress(progressBySubject);
    } catch (error) {
      console.error('Error fetching student progress:', error);
      toast.error('Failed to load student progress');
    } finally {
      setIsLoadingStudentProgress(false);
    }
  };

  const refreshStudentProgress = async () => {
    await fetchStudentProgress();
  };

  return (
    <StudentContext.Provider
      value={{
        selectedStudentId,
        setSelectedStudentId,
        selectedStudent,
        studentProgress,
        isLoadingStudentProgress,
        refreshStudentProgress,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = (): StudentContextType => {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};
