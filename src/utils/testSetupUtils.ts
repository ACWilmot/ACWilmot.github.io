
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { getResetSubjects } from './progressUtils';

// Function to create a test class with students for demonstration purposes
export async function createTestClass(): Promise<void> {
  try {
    // Find teacher with email teacher@example.com
    const { data: teacherData, error: teacherError } = await supabase.functions.invoke('get-user-by-email', {
      body: { email: 'teacher@example.com' }
    });
    
    if (teacherError || !teacherData) {
      console.error('Could not find teacher@example.com:', teacherError || 'No data returned');
      toast.error('Teacher account not found. Please create a teacher@example.com account first.');
      return;
    }
    
    const teacherId = teacherData.id;
    
    if (!teacherId) {
      toast.error('Teacher account not found');
      return;
    }
    
    // Create a new class
    const { data: classData, error: classError } = await supabase
      .from('classes')
      .insert({
        name: 'Example Class',
        description: 'A demo class with sample students',
        teacher_id: teacherId
      })
      .select('id')
      .single();
      
    if (classError || !classData) {
      console.error('Failed to create class:', classError);
      toast.error('Failed to create example class');
      return;
    }
    
    const classId = classData.id;
    toast.success('Created example class');
    
    // We'll add the demo students one by one
    for (let i = 1; i <= 10; i++) {
      const studentEmail = `student${i}@exampleclass.com`;
      const studentName = `Student ${i}`;
      
      // Try to create a student account through Supabase Auth
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: studentEmail,
        password: 'password',
        options: {
          data: {
            name: studentName,
            role: 'student'
          }
        }
      });
      
      if (signUpError) {
        console.error(`Failed to create student account ${i}:`, signUpError);
        continue; // Try the next student
      }
      
      const studentId = signUpData.user?.id;
      
      if (!studentId) {
        console.error(`No ID returned for student ${i}`);
        continue;
      }
      
      console.log(`Created student account: ${studentEmail} with ID: ${studentId}`);
      
      // Set up progress data for this student
      const progressData = getResetSubjects();
      progressData.maths = {
        completed: i * 3,
        correct: i * 2,
        lastAttempted: new Date().toISOString().split('T')[0]
      };
      progressData.verbal = {
        completed: i + 5,
        correct: i + 3,
        lastAttempted: new Date().toISOString().split('T')[0]
      };
      progressData.english = {
        completed: i + 4,
        correct: i + 1,
        lastAttempted: new Date().toISOString().split('T')[0]
      };
      
      // Update the student's profile with progress data
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ 
          progress: progressData,
          name: studentName,
          role: 'student'
        })
        .eq('id', studentId);
        
      if (profileError) {
        console.error(`Failed to update profile for student ${i}:`, profileError);
      }
      
      // Enroll the student in the class
      const { error: enrollError } = await supabase
        .from('class_enrollments')
        .insert({
          class_id: classId,
          student_id: studentId
        });
        
      if (enrollError) {
        console.error(`Failed to enroll student ${i} in class:`, enrollError);
      }
    }
    
    // Update the teacher's profile to include these students
    const { data: enrollmentsData, error: enrollmentsError } = await supabase
      .from('class_enrollments')
      .select('student_id')
      .eq('class_id', classId);
      
    if (enrollmentsError || !enrollmentsData) {
      console.error('Failed to fetch enrollments:', enrollmentsError);
    } else {
      const studentIds = enrollmentsData.map(enrollment => enrollment.student_id);
      
      // Get teacher's existing students array
      const { data: teacherProfile, error: profileError } = await supabase
        .from('profiles')
        .select('students')
        .eq('id', teacherId)
        .single();
        
      if (profileError || !teacherProfile) {
        console.error('Failed to fetch teacher profile:', profileError);
      } else {
        // Combine existing students with new ones
        const existingStudents = teacherProfile.students || [];
        const allStudents = [...new Set([...existingStudents, ...studentIds])];
        
        // Update teacher's profile
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ students: allStudents })
          .eq('id', teacherId);
          
        if (updateError) {
          console.error('Failed to update teacher profile:', updateError);
        }
      }
    }
    
    toast.success('Successfully created example class with 10 students');
    
  } catch (error) {
    console.error('Error in createTestClass:', error);
    toast.error('Failed to create test class');
  }
}

// Function to add an existing test student to a teacher's class
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
