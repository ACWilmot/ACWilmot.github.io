
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, Student } from '@/types/userTypes';

export const useTeacherActions = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  const getStudents = async (): Promise<Student[]> => {
    if (!user || user.role !== 'teacher' || !user.students) {
      return [];
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .in('id', user.students);

      if (error) {
        console.error('Error fetching students:', error);
        toast.error("Failed to fetch students");
        return [];
      }

      return data as Student[] || [];
    } catch (error) {
      console.error('Error fetching students:', error);
      toast.error("Failed to fetch students");
      return [];
    }
  };

  const addStudent = async (studentId: string): Promise<boolean> => {
    if (!user || user.role !== 'teacher') {
      return false;
    }

    try {
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
