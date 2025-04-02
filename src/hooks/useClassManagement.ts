
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, Student, Class, ClassWithStudentCount, ClassEnrollment } from '@/types/userTypes';

export const useClassManagement = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  // Get all classes for the current teacher
  const getClasses = async (): Promise<ClassWithStudentCount[]> => {
    if (!user || user.role !== 'teacher') {
      console.log("Unable to fetch classes: User is not logged in or not a teacher");
      return [];
    }

    try {
      console.log("Fetching classes for teacher:", user.id);
      
      // Query classes created by this teacher
      const { data: classes, error } = await supabase
        .from('classes')
        .select('id, name, description, created_at, teacher_id')
        .eq('teacher_id', user.id);
      
      if (error) {
        console.error('Error fetching classes:', error);
        return [];
      }
      
      console.log("Fetched classes:", classes);
      
      if (!classes || classes.length === 0) {
        return [];
      }
      
      // For each class, get the count of enrolled students
      const classesWithStudentCount: ClassWithStudentCount[] = await Promise.all(
        classes.map(async (classItem) => {
          const { count, error: countError } = await supabase
            .from('class_enrollments')
            .select('*', { count: 'exact', head: true })
            .eq('class_id', classItem.id);
          
          if (countError) {
            console.error('Error counting students in class:', countError);
            return { ...classItem, student_count: 0 };
          }
          
          return { ...classItem, student_count: count || 0 };
        })
      );
      
      return classesWithStudentCount;
    } catch (error) {
      console.error('Error fetching classes:', error);
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
      const { data, error } = await supabase
        .from('classes')
        .insert([
          { name, description, teacher_id: user.id }
        ])
        .select('id')
        .single();

      if (error) {
        console.error('Error creating class:', error);
        toast.error("Failed to create class");
        return null;
      }
      
      toast.success("Class created successfully");
      return data.id;
    } catch (error) {
      console.error('Error creating class:', error);
      toast.error("Failed to create class");
      return null;
    }
  };

  // Add a student to a class
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
      
      // Check if the student is already enrolled in this class
      const { data: existingEnrollment, error: checkError } = await supabase
        .from('class_enrollments')
        .select('id')
        .eq('class_id', classId)
        .eq('student_id', studentId)
        .single();
        
      if (!checkError && existingEnrollment) {
        toast.info("Student is already enrolled in this class");
        return true;
      }
      
      // Add the student to the class
      const { error: enrollError } = await supabase
        .from('class_enrollments')
        .insert([
          { class_id: classId, student_id: studentId }
        ]);

      if (enrollError) {
        console.error('Error adding student to class:', enrollError);
        toast.error("Failed to add student to class");
        return false;
      }

      toast.success("Student added to class successfully");
      return true;
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
      const { error } = await supabase
        .from('class_enrollments')
        .delete()
        .eq('class_id', classId)
        .eq('student_id', studentId);

      if (error) {
        console.error('Error removing student from class:', error);
        toast.error("Failed to remove student from class");
        return false;
      }
      
      toast.success("Student removed from class successfully");
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
      
      // First get the student IDs from enrollments
      const { data: enrollments, error: enrollmentsError } = await supabase
        .from('class_enrollments')
        .select('student_id')
        .eq('class_id', classId);
      
      if (enrollmentsError || !enrollments || enrollments.length === 0) {
        console.error('Error fetching enrollments or no students enrolled:', enrollmentsError || 'No enrollments found');
        return [];
      }
      
      const studentIds = enrollments.map(enrollment => enrollment.student_id);
      
      // Then get the profile data for these students
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, name, Email, email, progress')
        .in('id', studentIds);
      
      if (profilesError || !profiles) {
        console.error('Error fetching student profiles:', profilesError || 'No profiles found');
        return [];
      }
      
      // Initialize default progress structure
      const defaultProgress = {
        maths: { completed: 0, correct: 0, lastAttempted: null },
        english: { completed: 0, correct: 0, lastAttempted: null },
        verbal: { completed: 0, correct: 0, lastAttempted: null },
        nonVerbal: { completed: 0, correct: 0, lastAttempted: null }
      };
      
      // Transform data to Student type
      const students: Student[] = profiles.map(profile => {
        // Ensure progress is properly handled
        let progressData = defaultProgress;
        
        if (profile.progress && typeof profile.progress === 'object') {
          progressData = {
            maths: {
              completed: profile.progress.maths?.completed || 0,
              correct: profile.progress.maths?.correct || 0,
              lastAttempted: profile.progress.maths?.lastAttempted || null
            },
            english: {
              completed: profile.progress.english?.completed || 0,
              correct: profile.progress.english?.correct || 0,
              lastAttempted: profile.progress.english?.lastAttempted || null
            },
            verbal: {
              completed: profile.progress.verbal?.completed || 0,
              correct: profile.progress.verbal?.correct || 0,
              lastAttempted: profile.progress.verbal?.lastAttempted || null
            },
            nonVerbal: {
              completed: profile.progress.nonVerbal?.completed || 0,
              correct: profile.progress.nonVerbal?.correct || 0,
              lastAttempted: profile.progress.nonVerbal?.lastAttempted || null
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
      
      console.log("Transformed student data:", students);
      return students;
    } catch (error) {
      console.error('Error fetching class students:', error);
      toast.error("Failed to fetch class students");
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
