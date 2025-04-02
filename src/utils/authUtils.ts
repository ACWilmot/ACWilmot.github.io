
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
      // Find the teacher profile by querying on auth user's email
      console.log("Searching for teacher with email:", teacherEmail);
      
      // First get the user_id from auth.users based on email
      const { data: authUserData, error: authUserError } = await supabase.auth.admin.listUsers();
      
      if (authUserError) {
        console.error("Error looking up auth users:", authUserError);
        toast.warning("Registration successful, but couldn't link to teacher's class");
        return true;
      }
      
      // Find the teacher's auth user by email
      const teacherAuthUser = authUserData?.users.find(user => user.email === teacherEmail);
      
      if (!teacherAuthUser) {
        console.error("Teacher not found with email:", teacherEmail);
        toast.warning("Registration successful, but teacher not found");
        return true;
      }
      
      console.log("Found teacher auth user:", teacherAuthUser);
      
      // Now get the teacher profile using the auth user's ID
      const { data: teacherData, error: teacherError } = await supabase
        .from('profiles')
        .select('id, students')
        .eq('id', teacherAuthUser.id)
        .single();
      
      if (teacherError || !teacherData) {
        console.error("Error finding teacher profile:", teacherError || "No teacher profile found");
        toast.warning("Registration successful, but couldn't link to teacher's class");
        return true;
      }
      
      console.log("Found teacher profile:", teacherData);
      
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
    // First get users from auth.users
    const { data: authUsersData, error: authUsersError } = await supabase.auth.admin.listUsers();
    
    if (authUsersError || !authUsersData) {
      console.error('Could not fetch auth users:', authUsersError || 'No users found');
      return;
    }
    
    // Find teacher by email
    const teacherAuthUser = authUsersData.users.find(user => user.email === 'teacher@example.com');
    if (!teacherAuthUser) {
      console.error('Could not find teacher@example.com in auth users');
      return;
    }
    
    // Find student by email
    const studentAuthUser = authUsersData.users.find(user => user.email === 'student@example.com');
    if (!studentAuthUser) {
      console.error('Could not find student@example.com in auth users');
      return;
    }
    
    // Get teacher profile
    const { data: teacherData, error: teacherError } = await supabase
      .from('profiles')
      .select()
      .eq('id', teacherAuthUser.id)
      .single();
      
    if (teacherError || !teacherData) {
      console.error('Could not find teacher profile:', teacherError || 'No profile found');
      return;
    }
    
    // Add Student to Teacher's students array if not already there
    const students = [...(teacherData.students || [])];
    if (!students.includes(studentAuthUser.id)) {
      students.push(studentAuthUser.id);
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ students })
        .eq('id', teacherData.id);
        
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

// We can't update profiles with email as it doesn't exist in the schema
// This function would need to be updated if we add the email column
export async function updateProfilesWithEmail(): Promise<void> {
  try {
    // This function is currently not applicable because the email field
    // doesn't exist in the profiles table schema.
    console.log("Cannot update profiles with email as the column doesn't exist in the schema.");
  } catch (error) {
    console.error('Error updating profiles with email:', error);
  }
}
