
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';
import { 
  Class, 
  ClassEnrollment, 
  HomeworkAssignment, 
  HomeworkAttempt, 
  StudentWithProgress,
  ClassWithStudentCount,
  HomeworkWithAttempts
} from '@/types/teacherTypes';
import { Profile } from '@/types/userTypes';

interface TeacherContextType {
  classes: ClassWithStudentCount[];
  selectedClass: ClassWithStudentCount | null;
  students: StudentWithProgress[];
  homeworks: HomeworkWithAttempts[];
  isLoading: boolean;
  setSelectedClass: (classData: ClassWithStudentCount | null) => void;
  refreshClasses: () => Promise<void>;
  refreshStudents: () => Promise<void>;
  refreshHomeworks: () => Promise<void>;
  createClass: (name: string, description?: string) => Promise<boolean>;
  joinClassByCode: (code: string) => Promise<boolean>;
  enrollStudent: (email: string) => Promise<boolean>;
  removeStudent: (studentId: string) => Promise<boolean>;
  createHomework: (homework: Omit<HomeworkAssignment, 'id' | 'class_id' | 'assigned_at'>) => Promise<boolean>;
  resetHomeworkAttempt: (attemptId: string) => Promise<boolean>;
  getStudentHomeworks: () => Promise<HomeworkWithAttempts[]>;
}

const TeacherContext = createContext<TeacherContextType | undefined>(undefined);

// Mock data for development until tables are created
const MOCK_HOMEWORKS: HomeworkWithAttempts[] = [
  {
    id: '1',
    class_id: '1',
    title: 'Math Homework 1',
    description: 'Practice basic algebra',
    subject: 'maths',
    difficulty: 'medium',
    question_count: 10,
    assigned_at: new Date().toISOString(),
    due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    attempts: [
      {
        id: '1',
        homework_id: '1',
        student_id: '1',
        completed: true,
        score: 80,
        correct_answers: 8,
        started_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
        reset_at: null,
        answers: null
      }
    ],
    completion_rate: 100,
    average_score: 80
  }
];

export const TeacherProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const { user, isAuthenticated, userRole } = useAuth();
  const [classes, setClasses] = useState<ClassWithStudentCount[]>([]);
  const [selectedClass, setSelectedClass] = useState<ClassWithStudentCount | null>(null);
  const [students, setStudents] = useState<StudentWithProgress[]>([]);
  const [homeworks, setHomeworks] = useState<HomeworkWithAttempts[]>(MOCK_HOMEWORKS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch classes on initial load or when user auth changes
  useEffect(() => {
    if (isAuthenticated) {
      refreshClasses();
    }
  }, [isAuthenticated, userRole]);

  // Fetch students and homework when selected class changes
  useEffect(() => {
    if (selectedClass) {
      refreshStudents();
      refreshHomeworks();
    } else {
      setStudents([]);
      setHomeworks([]);
    }
  }, [selectedClass]);

  const refreshClasses = async () => {
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    try {
      // Using mock data until we have the tables
      const mockClass: ClassWithStudentCount = {
        id: '1',
        name: 'Test Class',
        description: 'This is a test class',
        teacher_id: user?.id || '',
        class_code: '12345',
        created_at: new Date().toISOString(),
        student_count: 3
      };
      
      setClasses([mockClass]);
    } catch (err) {
      console.error('Error fetching classes:', err);
      toast.error('Failed to load classes');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshStudents = async () => {
    if (!selectedClass || !isAuthenticated || userRole !== 'teacher') return;
    
    setIsLoading(true);
    try {
      // Mock student data
      const mockStudents: StudentWithProgress[] = [
        {
          id: '1',
          name: 'Student 1',
          email: 'student1@example.com',
          role: 'student',
          progress: {
            maths: { completed: 10, correct: 8, lastAttempted: new Date().toISOString() },
            english: { completed: 5, correct: 4, lastAttempted: new Date().toISOString() },
            verbal: { completed: 3, correct: 2, lastAttempted: new Date().toISOString() },
            nonVerbal: { completed: 7, correct: 6, lastAttempted: new Date().toISOString() }
          },
          enrollment_id: '1',
          enrolled_at: new Date().toISOString()
        }
      ];
      
      setStudents(mockStudents);
    } catch (err) {
      console.error('Error fetching students:', err);
      toast.error('Failed to load students');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshHomeworks = async () => {
    if (!selectedClass || !isAuthenticated) return;
    
    setIsLoading(true);
    try {
      // Use mock data from above
      setHomeworks(MOCK_HOMEWORKS);
    } catch (err) {
      console.error('Error fetching homeworks:', err);
      toast.error('Failed to load homework assignments');
    } finally {
      setIsLoading(false);
    }
  };

  const createClass = async (name: string, description?: string): Promise<boolean> => {
    if (!isAuthenticated || userRole !== 'teacher') {
      toast.error('You must be logged in as a teacher to create a class');
      return false;
    }
    
    try {
      // Mock creating a class
      toast.success('Class created successfully');
      await refreshClasses();
      return true;
    } catch (err) {
      console.error('Error creating class:', err);
      toast.error('Failed to create class');
      return false;
    }
  };

  const joinClassByCode = async (code: string): Promise<boolean> => {
    if (!isAuthenticated || userRole !== 'student') {
      toast.error('You must be logged in as a student to join a class');
      return false;
    }
    
    if (!code || code.length !== 5) {
      toast.error('Please enter a valid 5-digit class code');
      return false;
    }
    
    try {
      // Mock joining a class
      toast.success('Successfully joined the class');
      await refreshClasses();
      return true;
    } catch (err) {
      console.error('Error joining class:', err);
      toast.error('Failed to join class');
      return false;
    }
  };

  const enrollStudent = async (email: string): Promise<boolean> => {
    if (!selectedClass || !isAuthenticated || userRole !== 'teacher') {
      toast.error('You must be logged in as a teacher to add students');
      return false;
    }
    
    try {
      // Mock enrolling a student
      toast.success('Student added to class successfully');
      await refreshStudents();
      return true;
    } catch (err) {
      console.error('Error enrolling student:', err);
      toast.error('Failed to add student to class');
      return false;
    }
  };

  const removeStudent = async (studentId: string): Promise<boolean> => {
    if (!selectedClass || !isAuthenticated || userRole !== 'teacher') {
      toast.error('You must be logged in as a teacher to remove students');
      return false;
    }
    
    try {
      // Mock removing a student
      toast.success('Student removed from class');
      await refreshStudents();
      return true;
    } catch (err) {
      console.error('Error removing student:', err);
      toast.error('Failed to remove student from class');
      return false;
    }
  };

  const createHomework = async (homework: Omit<HomeworkAssignment, 'id' | 'class_id' | 'assigned_at'>): Promise<boolean> => {
    if (!selectedClass || !isAuthenticated || userRole !== 'teacher') {
      toast.error('You must be logged in as a teacher to create homework');
      return false;
    }
    
    try {
      // Mock creating homework
      toast.success('Homework assignment created');
      await refreshHomeworks();
      return true;
    } catch (err) {
      console.error('Error creating homework:', err);
      toast.error('Failed to create homework assignment');
      return false;
    }
  };

  const resetHomeworkAttempt = async (attemptId: string): Promise<boolean> => {
    if (!isAuthenticated || userRole !== 'teacher') {
      toast.error('You must be logged in as a teacher to reset homework');
      return false;
    }
    
    try {
      // Mock resetting homework attempt
      toast.success('Homework attempt reset successfully');
      await refreshHomeworks();
      return true;
    } catch (err) {
      console.error('Error resetting homework attempt:', err);
      toast.error('Failed to reset homework attempt');
      return false;
    }
  };

  const getStudentHomeworks = async (): Promise<HomeworkWithAttempts[]> => {
    if (!isAuthenticated || userRole !== 'student') {
      toast.error('You must be logged in as a student');
      return [];
    }
    
    try {
      // Return mock homework data
      return MOCK_HOMEWORKS;
    } catch (err) {
      console.error('Error fetching student homeworks:', err);
      toast.error('Failed to load homework assignments');
      return [];
    }
  };

  return (
    <TeacherContext.Provider value={{
      classes,
      selectedClass,
      students,
      homeworks,
      isLoading,
      setSelectedClass,
      refreshClasses,
      refreshStudents,
      refreshHomeworks,
      createClass,
      joinClassByCode,
      enrollStudent,
      removeStudent,
      createHomework,
      resetHomeworkAttempt,
      getStudentHomeworks
    }}>
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeacher = () => {
  const context = useContext(TeacherContext);
  if (context === undefined) {
    throw new Error('useTeacher must be used within a TeacherProvider');
  }
  return context;
};
