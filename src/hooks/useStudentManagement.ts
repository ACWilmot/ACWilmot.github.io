
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, Student } from '@/types/userTypes';

export const useStudentManagement = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  const getStudents = async (): Promise<Student[]> => {
    if (!user || user.role !== 'teacher' || !user.students || user.students.length === 0) {
      return [];
    }

    try {
      console.log("Fetching students with IDs:", user.students);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .in('id', user.students);

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
      // First fetch the student profile based on email
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', studentEmail) // Using email field to find the student
        .maybeSingle();
      
      if (userError) {
        console.error('Error finding student:', userError);
        toast.error("Error searching for student");
        return false;
      }
      
      if (!userData) {
        console.error('Student not found with email:', studentEmail);
        toast.error("Student not found. Please check the email address.");
        return false;
      }
      
      const studentId = userData.id;
      console.log("Found student ID:", studentId, "for email:", studentEmail);
      
      // Get current students array or initialize empty array
      const students = [...(user.students || [])];
      
      if (!students.includes(studentId)) {
        students.push(studentId);
        
        // Update the profile with the new students array
        const { error } = await supabase
          .from('profiles')
          .update({ students })
          .eq('id', user.id);

        if (error) {
          console.error('Error adding student:', error);
          toast.error("Failed to add student");
          return false;
        }

        // Update local state
        setUser({
          ...user,
          students
        });
        
        toast.success("Student added successfully");
        return true;
      }
      
      toast.info("Student is already in your class");
      return true; // Student already in list
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
      const students = user.students.filter(id => id !== studentId);
      
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
