
import { supabase } from '@/integrations/supabase/client';
import { RegisterData } from '@/types/userTypes';
import { toast } from "sonner";

export const useRegisterUser = () => {
  const register = async (data: RegisterData): Promise<boolean> => {
    try {
      // Check if user with email already exists
      const { data: existingUsers, error: lookupError } = await supabase
        .from('profiles')
        .select('id')
        .or(`Email.eq.${data.email},email.eq.${data.email}`);

      if (lookupError) {
        console.error('Error checking for existing email:', lookupError);
        toast.error("Registration failed");
        return false;
      }

      if (existingUsers && existingUsers.length > 0) {
        toast.error("A user with this email already exists");
        return false;
      }

      // Create new user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
            role: data.role
          }
        }
      });

      if (authError || !authData.user) {
        console.error('Error creating user account:', authError);
        toast.error(authError?.message || "Registration failed");
        return false;
      }

      // Create or update profile in profiles table
      const profileData: any = {
        id: authData.user.id,
        name: data.name,
        Email: data.email,
        email: data.email,
        role: data.role,
        // Initialize progress for students
        progress: {
          maths: { completed: 0, correct: 0, lastAttempted: null },
          english: { completed: 0, correct: 0, lastAttempted: null },
          verbal: { completed: 0, correct: 0, lastAttempted: null },
          nonVerbal: { completed: 0, correct: 0, lastAttempted: null }
        }
      };

      // Add any teacher-specific fields if role is teacher
      if (data.role === 'teacher') {
        profileData.students = [];
      }

      // Create/update the profile
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert(profileData);

      if (profileError) {
        console.error('Error creating user profile:', profileError);
        toast.error("Failed to create user profile");
        return false;
      }

      toast.success("Registration successful! Please check your email for verification.");
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      toast.error("Registration failed");
      return false;
    }
  };

  return { register };
};
