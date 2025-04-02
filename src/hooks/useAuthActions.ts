
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { fetchUserProfile, resetSubjects } from '@/utils/authUtils';
import { Profile, Student, UserProgress } from '@/types/userTypes';

export const useAuthActions = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        toast.error(error.message);
        return false;
      }

      toast.success("Logged in successfully");
      return true;
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed");
      return false;
    }
  };

  const teacherLogin = async (email: string, password: string): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        toast.error(error.message);
        return false;
      }

      // Verify that the user is a teacher
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        const profile = await fetchUserProfile(data.user.id);
        
        console.log("Teacher login attempt - profile:", profile);
        console.log("Role from profile:", profile?.role);
        
        if (!profile || profile.role !== 'teacher') {
          console.error("Access denied - Not a teacher account:", profile);
          toast.error("Access denied. This account does not have teacher privileges.");
          await supabase.auth.signOut();
          return false;
        }
        
        setUser(profile);
        toast.success("Logged in successfully as teacher");
        return true;
      }

      toast.error("Could not retrieve user information");
      return false;
    } catch (error) {
      console.error("Error during teacher login:", error);
      toast.error("Teacher login failed");
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error(error.message);
        return;
      }
      
      setUser(null);
      toast.info("Logged out successfully");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Logout failed");
    }
  };

  return {
    login,
    teacherLogin,
    logout,
  };
};
