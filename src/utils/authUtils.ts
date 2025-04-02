
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
    console.log(`Registering ${role} with email: ${email}, name: ${name}`);
    
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
      
      console.log("Teacher profile updated successfully");
    }
    
    // If the user provided a teacher email, add the student to that teacher's class
    if (teacherEmail && role === 'student' && authData?.user) {
      // Find the teacher by email
      const { data: teacherData, error: teacherError } = await supabase
        .from('profiles')
        .select('id, students, email')
        .eq('email', teacherEmail) // Looking up teacher by actual email instead of name
        .single();
      
      if (!teacherError && teacherData) {
        console.log("Found teacher by email:", teacherEmail, "Teacher data:", teacherData);
        
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
            toast.warning("Registration successful, but couldn't add you to teacher's class");
          } else {
            console.log("Student added to teacher's class successfully");
            toast.success("Registration successful! You've been added to your teacher's class.");
          }
        }
      } else {
        console.error("Error finding teacher:", teacherError || "Teacher not found with email " + teacherEmail);
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
    // First find teacher@example.com
    const { data: teacherData, error: teacherError } = await supabase
      .from('profiles')
      .select()
      .eq('email', 'teacher@example.com')
      .maybeSingle();
      
    if (teacherError || !teacherData) {
      console.error('Could not find teacher@example.com:', teacherError || 'No teacher found');
      return;
    }
    
    const teacher = teacherData;
    console.log('Found teacher:', teacher);
    
    // Find student@example.com
    const { data: studentData, error: studentError } = await supabase
      .from('profiles')
      .select()
      .eq('email', 'student@example.com')
      .maybeSingle();
      
    if (studentError || !studentData) {
      console.error('Could not find student@example.com:', studentError || 'No student found');
      return;
    }
    
    const student = studentData;
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

// Commenting out automatic test setup as we'll handle this manually
// setupTestStudentTeacherRelationship();

// Function to add email field to profiles table
export async function updateProfilesWithEmail(): Promise<void> {
  try {
    // Get all users from auth.users
    const { data: authUsers, error: authError } = await supabase.auth
      .admin.listUsers();
    
    if (authError || !authUsers) {
      console.error('Could not fetch auth users:', authError);
      return;
    }
    
    // Update each profile with their email
    for (const user of authUsers.users) {
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ email: user.email })
        .eq('id', user.id);
        
      if (updateError) {
        console.error(`Failed to update profile for ${user.email}:`, updateError);
      } else {
        console.log(`Updated profile for ${user.email}`);
      }
    }
  } catch (error) {
    console.error('Error updating profiles with email:', error);
  }
}
