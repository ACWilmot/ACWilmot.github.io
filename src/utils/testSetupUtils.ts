
import { supabase } from '@/integrations/supabase/client';

// Add this utility function to add Student1 to Teacher1's class for testing purposes
export async function setupTestStudentTeacherRelationship(): Promise<void> {
  try {
    // Use edge functions to safely get users by email
    const { data: teacherData, error: teacherError } = await supabase.functions.invoke('get-user-by-email', {
      body: { email: 'teacher@example.com' }
    });
    
    if (teacherError || !teacherData) {
      console.error('Could not find teacher@example.com:', teacherError || 'No data returned');
      return;
    }
    
    const { data: studentData, error: studentError } = await supabase.functions.invoke('get-user-by-email', {
      body: { email: 'student@example.com' }
    });
    
    if (studentError || !studentData) {
      console.error('Could not find student@example.com:', studentError || 'No data returned');
      return;
    }
    
    const teacherId = teacherData.id;
    const studentId = studentData.id;
    
    if (!teacherId || !studentId) {
      console.error('Could not find teacher or student IDs');
      return;
    }
    
    // Get teacher profile
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select()
      .eq('id', teacherId)
      .single();
      
    if (profileError || !profileData) {
      console.error('Could not find teacher profile:', profileError || 'No profile found');
      return;
    }
    
    // Add Student to Teacher's students array if not already there
    const students = [...(profileData.students || [])];
    if (!students.includes(studentId)) {
      students.push(studentId);
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ students })
        .eq('id', profileData.id);
        
      if (updateError) {
        console.error('Failed to update Teacher with Student:', updateError);
        return;
      }
      
      console.log('Successfully added Student to Teacher\'s class');
    } else {
      console.log('Student is already in Teacher\'s class');
    }
  } catch (error) {
    console.error('Error setting up test relationship:', error);
  }
}
