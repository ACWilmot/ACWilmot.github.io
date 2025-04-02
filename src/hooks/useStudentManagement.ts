import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, Student, UserProgress } from '@/types/userTypes';
import { Json } from '@/integrations/supabase/types';

export const useStudentManagement = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  const getStudents = async (): Promise<Student[]> => {
    if (!user || user.role !== 'teacher' || !user.students) {
      console.log("Unable to fetch students: Missing user data, invalid role, or no students array");
      return [];
    }

    try {
      const validStudentIds = user.students.filter(id => 
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
      );
      
      if (validStudentIds.length === 0) {
        console.log("No valid student IDs found");
        return [];
      }
      
      console.log("Fetching students with valid IDs:", validStudentIds);
      
      const defaultProgress = {
        maths: { completed: 0, correct: 0, lastAttempted: null },
        english: { completed: 0, correct: 0, lastAttempted: null },
        verbal: { completed: 0, correct: 0, lastAttempted: null },
        nonVerbal: { completed: 0, correct: 0, lastAttempted: null }
      };
      
      console.log("Executing Supabase query to fetch students with IDs:", validStudentIds);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('id, name, Email, progress')
        .in('id', validStudentIds);
      
      if (error) {
        console.error('Error fetching student profiles:', error);
        return [];
      }
      
      console.log("Fetched raw student profiles:", data);
      
      if (!data || data.length === 0) {
        console.log("No student profiles found in database for the provided IDs");
        const { data: idCheck, error: idCheckError } = await supabase
          .from('profiles')
          .select('id')
          .in('id', validStudentIds);
        
        if (idCheckError) {
          console.error('Error checking if student IDs exist:', idCheckError);
        } else {
          console.log("ID check results:", idCheck);
          if (idCheck.length === 0) {
            console.log("None of the student IDs exist in the profiles table");
          } else {
            console.log(`Found ${idCheck.length} out of ${validStudentIds.length} IDs in profiles table`);
          }
        }
        return [];
      }
      
      const studentData: Student[] = data.map(profile => {
        let progressData: Student['progress'] = defaultProgress;
        
        if (profile.progress && typeof profile.progress === 'object' && !Array.isArray(profile.progress)) {
          const progress = profile.progress as {
            maths?: { completed?: number; correct?: number; lastAttempted?: string | null };
            english?: { completed?: number; correct?: number; lastAttempted?: string | null };
            verbal?: { completed?: number; correct?: number; lastAttempted?: string | null };
            nonVerbal?: { completed?: number; correct?: number; lastAttempted?: string | null };
          };
          
          progressData = {
            maths: {
              completed: progress.maths?.completed || 0,
              correct: progress.maths?.correct || 0,
              lastAttempted: progress.maths?.lastAttempted || null
            },
            english: {
              completed: progress.english?.completed || 0,
              correct: progress.english?.correct || 0,
              lastAttempted: progress.english?.lastAttempted || null
            },
            verbal: {
              completed: progress.verbal?.completed || 0,
              correct: progress.verbal?.correct || 0,
              lastAttempted: progress.verbal?.lastAttempted || null
            },
            nonVerbal: {
              completed: progress.nonVerbal?.completed || 0,
              correct: progress.nonVerbal?.correct || 0,
              lastAttempted: progress.nonVerbal?.lastAttempted || null
            }
          };
        }
        
        return {
          id: profile.id,
          name: profile.name || 'Unknown Student',
          email: profile.Email || profile.email || 'No Email',
          progress: progressData
        };
      });
      
      console.log("Transformed student data:", studentData);
      return studentData;
    } catch (error) {
      console.error('Error fetching students:', error);
      toast.error("Failed to fetch students");
      return [];
    }
  };

  const addStudent = async (studentEmail: string): Promise<boolean> => {
    if (!user || user.role !== 'teacher') {
      return false;
    }

    try {
      console.log("Looking up student with email:", studentEmail);
      
      const { data: userData, error: userError } = await supabase.functions.invoke('get-user-by-email', {
        body: { email: studentEmail }
      });
      
      if (userError || !userData) {
        console.error('Error finding student:', userError || 'No user data returned');
        toast.error("Student not found. Please check the email address.");
        return false;
      }
      
      const studentId = userData.id;
      
      if (!studentId) {
        console.error('Student ID not found for email:', studentEmail);
        toast.error("Student not found. Please check the email address.");
        return false;
      }
      
      console.log("Found student ID:", studentId, "for email:", studentEmail);
      
      let currentStudents = [...(user.students || [])];
      currentStudents = currentStudents.filter(id => 
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
      );
      
      if (currentStudents.includes(studentId)) {
        toast.info("Student is already in your class");
        return true;
      }
      
      currentStudents.push(studentId);
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ students: currentStudents })
        .eq('id', user.id);

      if (updateError) {
        console.error('Error adding student:', updateError);
        toast.error("Failed to add student");
        return false;
      }

      setUser({
        ...user,
        students: currentStudents
      });
      
      toast.success("Student added successfully");
      return true;
    } catch (error) {
      console.error('Error adding student:', error);
      toast.error("Failed to add student");
      return false;
    }
  };

  const removeStudent = async (studentId: string): Promise<boolean> => {
    if (!user || user.role !== 'teacher' || !user.students) {
      return false;
    }

    try {
      const validStudents = user.students.filter(id => 
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
      );
      
      const students = validStudents.filter(id => id !== studentId);
      
      const { error } = await supabase
        .from('profiles')
        .update({ students })
        .eq('id', user.id);

      if (error) {
        console.error('Error removing student:', error);
        toast.error("Failed to remove student");
        return false;
      }

      setUser({
        ...user,
        students
      });
      
      toast.success("Student removed successfully");
      return true;
    } catch (error) {
      console.error('Error removing student:', error);
      toast.error("Failed to remove student");
      return false;
    }
  };

  return {
    getStudents,
    addStudent,
    removeStudent
  };
};
