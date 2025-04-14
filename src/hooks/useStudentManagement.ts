
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, Student } from '@/types/userTypes';
import { getResetSubjects } from '@/utils/progressUtils';

export const useStudentManagement = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  // Get all student profiles for the system 
  // (useful for admin functions or initial testing, not directly tied to classes)
  const getStudents = async (): Promise<Student[]> => {
    if (!user || user.role !== 'teacher') {
      console.log("Unable to fetch students: User is not logged in or not a teacher");
      return [];
    }

    try {
      console.log("Fetching all users with role 'student'");
      
      // Query all profiles with role = 'student'
      const { data, error } = await supabase
        .from('profiles')
        .select('id, name, Email, email, progress')
        .eq('role', 'student');
      
      if (error) {
        console.error('Error fetching student profiles:', error);
        return [];
      }
      
      console.log("Fetched student profiles:", data);
      
      if (!data || data.length === 0) {
        console.log("No student profiles found in database with role 'student'");
        return [];
      }
      
      // Transform data to Student type with proper null checks
      const studentData: Student[] = data.map(profile => {
        // Ensure progress is properly handled with careful type checking
        let progressData = getResetSubjects(); // Use the helper function
        
        try {
          if (profile.progress && 
              typeof profile.progress === 'object' && 
              !Array.isArray(profile.progress)) {
            
            // Safely cast and access progress data with fallbacks
            const progressObj = profile.progress as Record<string, any>;
            
            // Process each subject with safe access patterns
            if (progressObj.maths) {
              progressData.maths = {
                completed: typeof progressObj.maths.completed === 'number' ? progressObj.maths.completed : 0,
                correct: typeof progressObj.maths.correct === 'number' ? progressObj.maths.correct : 0,
                lastAttempted: progressObj.maths.lastAttempted || null
              };
            }
            
            if (progressObj.english) {
              progressData.english = {
                completed: typeof progressObj.english.completed === 'number' ? progressObj.english.completed : 0,
                correct: typeof progressObj.english.correct === 'number' ? progressObj.english.correct : 0,
                lastAttempted: progressObj.english.lastAttempted || null
              };
            }
            
            if (progressObj.verbal) {
              progressData.verbal = {
                completed: typeof progressObj.verbal.completed === 'number' ? progressObj.verbal.completed : 0,
                correct: typeof progressObj.verbal.correct === 'number' ? progressObj.verbal.correct : 0,
                lastAttempted: progressObj.verbal.lastAttempted || null
              };
            }
            
            if (progressObj.nonVerbal) {
              progressData.nonVerbal = {
                completed: typeof progressObj.nonVerbal.completed === 'number' ? progressObj.nonVerbal.completed : 0,
                correct: typeof progressObj.nonVerbal.correct === 'number' ? progressObj.nonVerbal.correct : 0,
                lastAttempted: progressObj.nonVerbal.lastAttempted || null
              };
            }
          }
        } catch (error) {
          console.error('Error processing student progress data:', error);
          // We already initialized with default progress above
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

  // Get the class information for a specific student
  const getStudentClass = async (studentId: string) => {
    try {
      const { data, error } = await supabase
        .from('class_enrollments')
        .select('class_id')
        .eq('student_id', studentId)
        .maybeSingle();
        
      if (error) {
        console.error('Error fetching student class:', error);
        return null;
      }
      
      if (!data) {
        return null;
      }
      
      // Get the class details
      const { data: classData, error: classError } = await supabase
        .from('classes')
        .select('id, name, description, teacher_id')
        .eq('id', data.class_id)
        .single();
        
      if (classError) {
        console.error('Error fetching class details:', classError);
        return null;
      }
      
      return classData;
    } catch (error) {
      console.error('Error in getStudentClass:', error);
      return null;
    }
  };

  return {
    getStudents,
    getStudentClass
  };
};
