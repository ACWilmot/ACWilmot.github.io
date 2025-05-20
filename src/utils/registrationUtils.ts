
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { RegisterData } from '@/types/userTypes';

export async function registerUser(data: RegisterData): Promise<boolean> {
  const { name, email, password, role } = data;

  try {
    console.log(`Registering ${role} with email: ${email}, name: ${name}`);
    
    // Create the auth user
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

    toast.success("Registration successful! Check your email for verification.");
    return true;
  } catch (error) {
    console.error("Error during registration:", error);
    toast.error("Registration failed");
    return false;
  }
}
