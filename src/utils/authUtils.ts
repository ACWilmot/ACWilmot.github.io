
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
  const { name, email, password, role } = data;

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
    // Find Teacher1 by email
    const { data: teacherData, error: teacherError } = await supabase
      .from('profiles')
      .select()
      .eq('name', 'Teacher1')
      .single();
      
    if (teacherError || !teacherData) {
      console.error('Could not find Teacher1:', teacherError);
      return;
    }
    
    // Find Student1 by email
    const { data: studentData, error: studentError } = await supabase
      .from('profiles')
      .select()
      .eq('name', 'Student1')
      .single();
      
    if (studentError || !studentData) {
      console.error('Could not find Student1:', studentError);
      return;
    }
    
    // Add Student1 to Teacher1's students array if not already there
    const students = [...(teacherData.students || [])];
    if (!students.includes(studentData.id)) {
      students.push(studentData.id);
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ students })
        .eq('id', teacherData.id);
        
      if (updateError) {
        console.error('Failed to update Teacher1 with Student1:', updateError);
        return;
      }
      
      console.log('Successfully added Student1 to Teacher1\'s class');
    } else {
      console.log('Student1 is already in Teacher1\'s class');
    }
  } catch (error) {
    console.error('Error setting up test relationship:', error);
  }
}

// Call this function once to ensure Student1 is in Teacher1's class
setupTestStudentTeacherRelationship();
