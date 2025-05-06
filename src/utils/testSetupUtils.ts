import { supabase } from '@/integrations/supabase/client';

export const createTestClass = async (teacherId: string, name: string, description: string) => {
  try {
    // Class needs to have class_code property as it's required by the DB schema
    const { data, error } = await supabase
      .from('classes')
      .insert({
        name,
        description,
        teacher_id: teacherId,
        class_code: Math.random().toString(36).substring(2, 7).toUpperCase() // Generate a random code
      });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating test class:', error);
    throw error;
  }
};
