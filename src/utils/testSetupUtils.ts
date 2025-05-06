
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

export const setupTestStudentTeacherRelationship = async () => {
  try {
    // First, get the teacher and student IDs
    const { data: teacherData, error: teacherError } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', 'teacher@example.com')
      .single();
    
    if (teacherError) throw teacherError;
    
    const { data: studentData, error: studentError } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', 'student@example.com')
      .single();
    
    if (studentError) throw studentError;
    
    // Get the teacher's class (or create one if it doesn't exist)
    const { data: classData, error: classError } = await supabase
      .from('classes')
      .select('id')
      .eq('teacher_id', teacherData.id)
      .maybeSingle();
    
    let classId;
    
    if (classError) throw classError;
    
    if (classData) {
      classId = classData.id;
    } else {
      // Create a class for the teacher
      const { data: newClassData, error: newClassError } = await supabase
        .from('classes')
        .insert({
          name: 'Test Class',
          description: 'A class for testing',
          teacher_id: teacherData.id,
          class_code: Math.random().toString(36).substring(2, 7).toUpperCase() // Generate a random code
        })
        .select()
        .single();
      
      if (newClassError) throw newClassError;
      classId = newClassData.id;
    }
    
    // Add the student to the class
    const { error: enrollmentError } = await supabase
      .from('class_enrollments')
      .insert({
        class_id: classId,
        student_id: studentData.id
      });
    
    if (enrollmentError) throw enrollmentError;
    
    return true;
  } catch (error) {
    console.error('Error setting up student-teacher relationship:', error);
    throw error;
  }
};
