
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, Student } from '@/types/userTypes';

export const useStudentManagement = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  const getStudents = async (): Promise<Student[]> => {
    if (!user || user.role !== 'teacher' || !user.students || user.students.length === 0) {
      return [];
    }

    try {
      // Filter out any non-UUID values (like email addresses) that might be in the students array
      const validStudentIds = user.students.filter(id => 
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
      );
      
      if (validStudentIds.length === 0) {
        console.log("No valid student IDs found");
        return [];
      }
      
      console.log("Fetching students with valid IDs:", validStudentIds);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .in('id', validStudentIds);

      if (error) {
        console.error('Error fetching students:', error);
        toast.error("Failed to fetch students");
        return [];
      }

      console.log("Fetched students:", data);
      return data as unknown as Student[] || [];
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
