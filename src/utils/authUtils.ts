
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
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { 
          name,
          role
        }
      }
    });

    if (error) {
      toast.error(error.message);
      return false;
    }

    toast.success("Registration successful! Check your email for verification.");
    return true;
  } catch (error) {
    console.error("Error during registration:", error);
    toast.error("Registration failed");
    return false;
  }
}
