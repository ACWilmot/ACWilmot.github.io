
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, Student, Class, ClassWithStudentCount } from '@/types/userTypes';
import { getResetSubjects } from '@/utils/progressUtils';

export const useClassManagement = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  // Get all classes for the current teacher
  const getClasses = async (): Promise<ClassWithStudentCount[]> => {
    if (!user || user.role !== 'teacher') {
      console.log("Unable to fetch classes: User is not logged in or not a teacher", { user });
      return [];
    }

    try {
      console.log("Fetching classes for teacher ID:", user.id);
      
      // Use the RPC function to get classes with student count
      const { data, error } = await supabase
        .rpc('get_teacher_classes', {
          teacher_id_param: user.id
        });
      
      if (error) {
        console.error('Error fetching classes with RPC:', error);
        toast.error("Failed to fetch classes: " + error.message);
        return [];
      }
      
      console.log("Fetched classes:", data);
      
      if (!data || data.length === 0) {
        console.log("No classes found for teacher:", user.id);
        return [];
      }
      
      return data as ClassWithStudentCount[];
    } catch (error) {
      console.error('Exception when fetching classes:', error);
      toast.error("Failed to fetch classes");
      return [];
    }
  };

  // Create a new class
  const createClass = async (name: string, description?: string): Promise<string | null> => {
    if (!user || user.role !== 'teacher') {
      toast.error("You must be logged in as a teacher to create a class");
      return null;
    }

    try {
      console.log("Creating class:", { name, description, teacherId: user.id });
      
      const { data, error } = await supabase
        .from('classes')
        .insert([
          { name, description, teacher_id: user.id }
        ])
        .select('id')
        .single();

      if (error) {
        console.error('Error creating class:', error);
        toast.error("Failed to create class: " + error.message);
        return null;
      }
      
      console.log("Class created successfully:", data);
      toast.success("Class created successfully");
      return data.id;
    } catch (error) {
      console.error('Error creating class:', error);
      toast.error("Failed to create class");
      return null;
    }
  };

  // Add a student to a class - with our new model, this will replace any existing class enrollment
  const addStudentToClass = async (classId: string, studentEmail: string): Promise<boolean> => {
    if (!user || user.role !== 'teacher') {
      toast.error("You must be logged in as a teacher to add students");
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
      
      try {
        // Check if the student is already enrolled in any class
        const { data: existingEnrollment, error: checkError } = await supabase
          .from('class_enrollments')
          .select('id, class_id')
          .eq('student_id', studentId)
          .maybeSingle();
          
        if (checkError) {
          console.error('Error checking existing enrollment:', checkError);
          toast.error("Failed to check student's enrollment status: " + checkError.message);
          return false;
        }
        
        // If student is already enrolled in this class, just return true
        if (existingEnrollment && existingEnrollment.class_id === classId) {
          toast.info("Student is already enrolled in this class");
          return true;
        }
        
        // If student is enrolled in another class, we need to delete that enrollment first
        if (existingEnrollment) {
          console.log("Student is currently enrolled in class:", existingEnrollment.class_id);
          console.log("Moving student to new class:", classId);
          
          const { error: deleteError } = await supabase
            .from('class_enrollments')
            .delete()
            .eq('id', existingEnrollment.id);
            
          if (deleteError) {
            console.error('Error removing student from previous class:', deleteError);
            toast.error("Failed to move student to new class: " + deleteError.message);
            return false;
          }
        }
        
        // Add the student to the new class
        const { error: enrollError } = await supabase
          .from('class_enrollments')
          .insert([
            { class_id: classId, student_id: studentId }
          ]);

        if (enrollError) {
          console.error('Error adding student to class:', enrollError);
          toast.error("Failed to add student to class: " + enrollError.message);
          return false;
        }

        console.log("Student added to class successfully");
        toast.success("Student added to class successfully");
        return true;
      } catch (enrollmentError) {
        console.error('Error in enrollment process:', enrollmentError);
        toast.error("Failed to enroll student due to a system error");
        return false;
      }
    } catch (error) {
      console.error('Error adding student to class:', error);
      toast.error("Failed to add student to class");
      return false;
    }
  };

  // Remove a student from a class
  const removeStudentFromClass = async (classId: string, studentId: string): Promise<boolean> => {
    if (!user || user.role !== 'teacher') {
      toast.error("You must be logged in as a teacher to remove students");
      return false;
    }

    try {
      console.log(`Removing student ${studentId} from class ${classId}`);
      
      // Delete the enrollment
      const { error } = await supabase
        .from('class_enrollments')
        .delete()
        .eq('class_id', classId)
        .eq('student_id', studentId);

      if (error) {
        console.error('Error removing student from class:', error);
        toast.error("Failed to remove student from class: " + error.message);
        return false;
      }
      
      console.log("Student removed from class successfully");
      toast.success("Student removed from class");
      return true;
    } catch (error) {
      console.error('Error removing student from class:', error);
      toast.error("Failed to remove student from class");
      return false;
    }
  };

  // Get students in a specific class
  const getClassStudents = async (classId: string): Promise<Student[]> => {
    if (!user || user.role !== 'teacher') {
      console.log("Unable to fetch class students: User is not logged in or not a teacher");
      return [];
    }

    try {
      console.log("Fetching students for class:", classId);
      
      // Get the student IDs from enrollments
      const { data: enrollments, error: enrollmentsError } = await supabase
        .from('class_enrollments')
        .select('student_id')
        .eq('class_id', classId);
      
      if (enrollmentsError) {
        console.error('Error fetching enrollments:', enrollmentsError);
        toast.error("Failed to fetch students: " + enrollmentsError.message);
        return [];
      }
      
      console.log("Class enrollments:", enrollments);
      
      if (!enrollments || enrollments.length === 0) {
        console.log("No students enrolled in this class");
        return [];
      }
      
      const studentIds = enrollments.map(enrollment => enrollment.student_id);
      
      console.log("Student IDs from enrollments:", studentIds);
      
      // Then get the profile data for these students
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, name, Email, email, progress')
        .in('id', studentIds);
      
      if (profilesError) {
        console.error('Error fetching student profiles:', profilesError);
        toast.error("Failed to fetch student information: " + profilesError.message);
        return [];
      }
      
      if (!profiles || profiles.length === 0) {
        console.log("No student profiles found for enrolled students");
        return [];
      }
      
      console.log("Raw student profiles:", profiles);
      
      // Transform data to Student type with robust error handling
      const students: Student[] = profiles.map(profile => {
        // Ensure progress is properly handled with careful type checking
        let progressData = getResetSubjects(); // Use the helper function
        
        try {
          if (profile.progress && 
              typeof profile.progress === 'object' && 
              !Array.isArray(profile.progress)) {
            
            // Safely cast and access progress data with fallbacks
            const progressObj = profile.progress as Record<string, any>;
            
            // Process each subject with safe access patterns
            Object.keys(progressData).forEach(subject => {
              if (progressObj[subject]) {
                progressData[subject] = {
                  completed: typeof progressObj[subject].completed === 'number' ? progressObj[subject].completed : 0,
                  correct: typeof progressObj[subject].correct === 'number' ? progressObj[subject].correct : 0,
                  lastAttempted: progressObj[subject].lastAttempted || null
                };
              }
            });
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
      
      console.log("Transformed student data:", students);
      return students;
    } catch (error) {
      console.error('Error fetching class students:', error);
      toast.error("Failed to fetch students");
      return [];
    }
  };

  return {
    getClasses,
    createClass,
    addStudentToClass,
    removeStudentFromClass,
    getClassStudents
  };
};
