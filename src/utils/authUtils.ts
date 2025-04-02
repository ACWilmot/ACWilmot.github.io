
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, RegisterData } from '@/types/userTypes';

export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }

    console.log("Fetched profile:", data);
    return data as Profile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export const resetSubjects = {
  maths: {
    completed: 0,
    correct: 0,
    lastAttempted: new Date().toISOString().split('T')[0]
  },
  english: {
    completed: 0,
    correct: 0,
    lastAttempted: new Date().toISOString().split('T')[0]
  },
  verbal: {
    completed: 0,
    correct: 0,
    lastAttempted: new Date().toISOString().split('T')[0]
  },
  nonVerbal: {
    completed: 0,
    correct: 0,
    lastAttempted: new Date().toISOString().split('T')[0]
  }
};

export async function registerUser(data: RegisterData): Promise<boolean> {
  const { name, email, password, role, teacherEmail } = data;

  try {
    // First create the auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { 
          name,
          role
        }
      }
    });

    if (authError) {
      toast.error(authError.message);
      return false;
    }

    // If it's a teacher, make sure to update the profile with role and empty students array
    if (role === 'teacher' && authData?.user) {
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ 
          role: 'teacher',
          students: []
        })
        .eq('id', authData.user.id);

      if (updateError) {
        console.error("Error updating teacher profile:", updateError);
        toast.error("Registration incomplete: Failed to set teacher role");
        return false;
      }
    }
    
    // If the user provided a teacher email, add the student to that teacher's class
    if (teacherEmail && role === 'student' && authData?.user) {
      // Find the teacher by email - Note: We need to use an email field rather than name
      const { data: teacherData, error: teacherError } = await supabase
        .from('profiles')
        .select('id, students')
        .eq('name', teacherEmail) // Using name field temporarily as we don't have a separate email column
        .single();
      
      if (!teacherError && teacherData) {
        // Add the new student to the teacher's students array
        const students = [...(teacherData.students || [])];
        if (!students.includes(authData.user.id)) {
          students.push(authData.user.id);
          
          // Update the teacher's profile
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ students })
            .eq('id', teacherData.id);
            
          if (updateError) {
            console.error("Error adding student to teacher's class:", updateError);
            // Don't fail registration if this step fails
            toast.warning("Registration successful, but couldn't add you to teacher's class");
          } else {
            toast.success("Registration successful! You've been added to your teacher's class.");
          }
        }
      } else {
        console.error("Error finding teacher:", teacherError);
        toast.warning("Registration successful, but couldn't find specified teacher");
      }
    }

    toast.success("Registration successful! Check your email for verification.");
    return true;
  } catch (error) {
    console.error("Error during registration:", error);
    toast.error("Registration failed");
    return false;
  }
}

// Add this utility function to add Student1 to Teacher1's class for testing purposes
export async function setupTestStudentTeacherRelationship(): Promise<void> {
  try {
    // First check if Teacher1 exists
    const { data: teacherData, error: teacherError } = await supabase
      .from('profiles')
      .select()
      .eq('role', 'teacher')
      .limit(1);
      
    if (teacherError || !teacherData || teacherData.length === 0) {
      console.error('Could not find any teacher:', teacherError || 'No teachers found');
      return;
    }
    
    const teacher = teacherData[0];
    console.log('Found teacher:', teacher);
    
    // Find Student1
    const { data: studentData, error: studentError } = await supabase
      .from('profiles')
      .select()
      .eq('role', 'student')
      .limit(1);
      
    if (studentError || !studentData || studentData.length === 0) {
      console.error('Could not find any student:', studentError || 'No students found');
      return;
    }
    
    const student = studentData[0];
    console.log('Found student:', student);
    
    // Add Student to Teacher's students array if not already there
    const students = [...(teacher.students || [])];
    if (!students.includes(student.id)) {
      students.push(student.id);
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ students })
        .eq('id', teacher.id);
        
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

// Call this function once to ensure Student1 is in Teacher1's class
setupTestStudentTeacherRelationship();
