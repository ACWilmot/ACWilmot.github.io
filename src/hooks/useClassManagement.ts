import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useClassManagement = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('classes')
          .select('*');
        if (error) throw error;
        setClasses(data);
      } catch (error) {
        setError(error);
        toast.error('Failed to fetch classes');
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const insertClasses = async (classesData: any[]) => {
    try {
      const classesWithCode = classesData.map(classData => ({
        ...classData,
        class_code: Math.random().toString(36).substring(2, 7).toUpperCase() // Generate a random code
      }));
      
      const { data, error } = await supabase
        .from('classes')
        .insert(classesWithCode);
        
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error inserting classes:', error);
      throw error;
    }
  };

  const deleteClass = async (classId: string) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('classes')
        .delete()
        .eq('id', classId);
      if (error) throw error;
      setClasses(prevClasses => prevClasses.filter(c => c.id !== classId));
      toast.success('Class deleted successfully');
    } catch (error) {
      setError(error);
      toast.error('Failed to delete class');
    } finally {
      setLoading(false);
    }
  };

  return {
    classes,
    loading,
    error,
    insertClasses,
    deleteClass,
  };
};
