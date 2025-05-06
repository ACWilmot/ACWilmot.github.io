
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

export const TeacherProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const { user, isAuthenticated, userRole } = useAuth();
  const [classes, setClasses] = useState<ClassWithStudentCount[]>([]);
  const [selectedClass, setSelectedClass] = useState<ClassWithStudentCount | null>(null);
  const [students, setStudents] = useState<StudentWithProgress[]>([]);
  const [homeworks, setHomeworks] = useState<HomeworkWithAttempts[]>([]);
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
      if (userRole === 'teacher') {
        // Get classes created by this teacher
        const { data, error } = await supabase
          .from('classes')
          .select(`
            id,
            name,
            description,
            teacher_id,
            class_code,
            created_at,
            class_enrollments (count)
          `)
          .eq('teacher_id', user?.id);
        
        if (error) throw error;
        
        const classesWithCount = data.map(c => ({
          ...c,
          student_count: c.class_enrollments[0].count
        })) as ClassWithStudentCount[];
        
        setClasses(classesWithCount);
      } else if (userRole === 'student') {
        // Get classes this student is enrolled in
        const { data, error } = await supabase
          .from('class_enrollments')
          .select(`
            class:classes (
              id,
              name,
              description,
              teacher_id,
              class_code,
              created_at,
              class_enrollments (count)
            )
          `)
          .eq('student_id', user?.id);
        
        if (error) throw error;
        
        const studentClasses = data.map(enrollment => ({
          ...enrollment.class,
          student_count: enrollment.class.class_enrollments[0].count
        })) as ClassWithStudentCount[];
        
        setClasses(studentClasses);
      }
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
      // Get enrollments with student profiles
      const { data, error } = await supabase
        .from('class_enrollments')
        .select(`
          id,
          enrolled_at,
          student:profiles!class_enrollments_student_id_fkey (
            id,
            name,
            email,
            role,
            progress
          )
        `)
        .eq('class_id', selectedClass.id);
      
      if (error) throw error;
      
      const studentList = data.map(item => ({
        ...item.student,
        enrollment_id: item.id,
        enrolled_at: item.enrolled_at,
      })) as StudentWithProgress[];
      
      setStudents(studentList);
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
      // Get homework assignments for this class
      const { data: homeworkData, error: homeworkError } = await supabase
        .from('homework_assignments')
        .select('*')
        .eq('class_id', selectedClass.id);
      
      if (homeworkError) throw homeworkError;
      
      // Get attempts for these homeworks
      const homeworkIds = homeworkData.map(hw => hw.id);
      
      const { data: attemptsData, error: attemptsError } = await supabase
        .from('homework_attempts')
        .select('*')
        .in('homework_id', homeworkIds);
      
      if (attemptsError) throw attemptsError;
      
      // Combine the data
      const homeworksWithAttempts = homeworkData.map(homework => {
        const attempts = attemptsData.filter(attempt => attempt.homework_id === homework.id);
        const completedAttempts = attempts.filter(attempt => attempt.completed);
        
        // Calculate stats
        const completionRate = attempts.length > 0 ? 
          (completedAttempts.length / attempts.length) * 100 : 0;
        
        const scores = completedAttempts
          .map(attempt => attempt.score)
          .filter(score => score !== null) as number[];
        
        const averageScore = scores.length > 0 ? 
          scores.reduce((sum, score) => sum + score, 0) / scores.length : null;
        
        return {
          ...homework,
          attempts,
          completion_rate: completionRate,
          average_score: averageScore
        };
      }) as HomeworkWithAttempts[];
      
      setHomeworks(homeworksWithAttempts);
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
      const { data, error } = await supabase
        .from('classes')
        .insert([{ name, description, teacher_id: user!.id }])
        .select('*')
        .single();
      
      if (error) throw error;
      
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
      // Find the class with this code
      const { data: classData, error: classError } = await supabase
        .from('classes')
        .select('id')
        .eq('class_code', code)
        .single();
      
      if (classError) {
        if (classError.message.includes('No rows found')) {
          toast.error('Invalid class code');
        } else {
          throw classError;
        }
        return false;
      }
      
      // Check if already enrolled
      const { data: existingEnrollment, error: checkError } = await supabase
        .from('class_enrollments')
        .select('id')
        .eq('class_id', classData.id)
        .eq('student_id', user!.id)
        .maybeSingle();
      
      if (checkError) throw checkError;
      
      if (existingEnrollment) {
        toast.info('You are already enrolled in this class');
        return true;
      }
      
      // Create enrollment
      const { error: enrollError } = await supabase
        .from('class_enrollments')
        .insert([{ class_id: classData.id, student_id: user!.id }]);
      
      if (enrollError) throw enrollError;
      
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
      // Find the student by email
      const { data: studentData, error: studentError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .maybeSingle();
      
      if (studentError) throw studentError;
      
      if (!studentData) {
        toast.error(`No user found with email ${email}`);
        return false;
      }
      
      // Check if already enrolled
      const { data: existingEnrollment, error: checkError } = await supabase
        .from('class_enrollments')
        .select('id')
        .eq('class_id', selectedClass.id)
        .eq('student_id', studentData.id)
        .maybeSingle();
      
      if (checkError) throw checkError;
      
      if (existingEnrollment) {
        toast.info('This student is already enrolled in the class');
        return true;
      }
      
      // Create enrollment
      const { error: enrollError } = await supabase
        .from('class_enrollments')
        .insert([{ class_id: selectedClass.id, student_id: studentData.id }]);
      
      if (enrollError) throw enrollError;
      
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
      const { error } = await supabase
        .from('class_enrollments')
        .delete()
        .eq('class_id', selectedClass.id)
        .eq('student_id', studentId);
      
      if (error) throw error;
      
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
      const { error } = await supabase
        .from('homework_assignments')
        .insert([{ ...homework, class_id: selectedClass.id }]);
      
      if (error) throw error;
      
      toast.success('Homework assignment created');
      await refreshHomeworks();
      
      // Create attempts for all students in the class
      const { data: enrollments, error: enrollError } = await supabase
        .from('class_enrollments')
        .select('student_id')
        .eq('class_id', selectedClass.id);
      
      if (enrollError) throw enrollError;
      
      // Get the ID of the newly created homework
      const { data: newHomework, error: fetchError } = await supabase
        .from('homework_assignments')
        .select('id')
        .eq('class_id', selectedClass.id)
        .order('assigned_at', { ascending: false })
        .limit(1)
        .single();
      
      if (fetchError) throw fetchError;
      
      // Create attempt records for each student
      const attempts = enrollments.map(enrollment => ({
        homework_id: newHomework.id,
        student_id: enrollment.student_id,
        completed: false
      }));
      
      const { error: attemptsError } = await supabase
        .from('homework_attempts')
        .insert(attempts);
      
      if (attemptsError) throw attemptsError;
      
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
      const { error } = await supabase
        .from('homework_attempts')
        .update({ 
          completed: false,
          score: null,
          correct_answers: null,
          started_at: null,
          completed_at: null,
          reset_at: new Date().toISOString(),
          answers: null
        })
        .eq('id', attemptId);
      
      if (error) throw error;
      
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
      // Get all homework assignments for classes the student is enrolled in
      const { data: enrollments, error: enrollError } = await supabase
        .from('class_enrollments')
        .select('class_id')
        .eq('student_id', user!.id);
      
      if (enrollError) throw enrollError;
      
      if (!enrollments.length) return [];
      
      const classIds = enrollments.map(e => e.class_id);
      
      // Get all homework assignments for these classes
      const { data: homeworkData, error: homeworkError } = await supabase
        .from('homework_assignments')
        .select('*')
        .in('class_id', classIds);
      
      if (homeworkError) throw homeworkError;
      
      // Get the student's attempts for these homeworks
      const homeworkIds = homeworkData.map(hw => hw.id);
      
      const { data: attemptsData, error: attemptsError } = await supabase
        .from('homework_attempts')
        .select('*')
        .in('homework_id', homeworkIds)
        .eq('student_id', user!.id);
      
      if (attemptsError) throw attemptsError;
      
      // Combine the data
      const homeworksWithAttempts = homeworkData.map(homework => {
        const attempts = attemptsData.filter(attempt => attempt.homework_id === homework.id);
        
        return {
          ...homework,
          attempts,
          completion_rate: 0,
          average_score: null
        };
      }) as HomeworkWithAttempts[];
      
      return homeworksWithAttempts;
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
