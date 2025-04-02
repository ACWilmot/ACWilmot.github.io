
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, Student, UserProgress } from '@/types/userTypes';
import { Json } from '@/integrations/supabase/types';
import { getResetSubjects } from '@/utils/progressUtils';

export const useStudentManagement = (user: Profile | null, setUser: (user: Profile | null) => void) => {
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
        let progressData = getResetSubjects(); // Use the new helper function
        
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

  const addStudent = async (studentEmail: string): Promise<boolean> => {
    if (!user || user.role !== 'teacher') {
      return false;
    }

    try {
      console.log("Looking up student with email:", studentEmail);
      
      // Use our edge function to safely look up users by email
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
      
      // Get current students array or initialize empty array
      // Filter to ensure we only have valid UUIDs in the array
      let currentStudents = [...(user.students || [])];
      // Remove any non-UUID values that might be in the array
      currentStudents = currentStudents.filter(id => 
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
      );
      
      if (currentStudents.includes(studentId)) {
        toast.info("Student is already in your class");
        return true;
      }
      
      // Add the student ID to the array
      currentStudents.push(studentId);
      
      // Update the teacher's profile with the new students array
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ students: currentStudents })
        .eq('id', user.id);

      if (updateError) {
        console.error('Error adding student:', updateError);
        toast.error("Failed to add student");
        return false;
      }

      // Update local state
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
      // Make sure we're only working with valid UUIDs
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

      // Update local state
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
