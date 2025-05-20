
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { fetchUserProfile } from '@/utils/authUtils';
import { Profile, UserProgress } from '@/types/userTypes';

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

      // Get user data after successful authentication
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        try {
          const profile = await fetchUserProfile(data.user.id);
          if (profile) {
            setUser(profile);
            toast.success("Logged in successfully");
            return true;
          } else {
            console.error("Could not retrieve user profile");
            toast.error("Login error: Could not retrieve user profile");
            return false;
          }
        } catch (profileError) {
          console.error("Error fetching profile:", profileError);
          toast.error("Login error: Could not retrieve user profile");
          return false;
        }
      }

      toast.error("Could not retrieve user information");
      return false;
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed");
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      console.log("Attempting to log out...");
      // Clear the local state first
      setUser(null);
      
      // Then sign out from Supabase
      const { error } = await supabase.auth.signOut({
        scope: 'local' // Use 'local' scope to avoid the session not found error
      });
      
      if (error) {
        console.error("Error during logout:", error);
        toast.error(error.message || "Logout failed");
        return;
      }
      
      toast.info("Logged out successfully");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Logout failed");
    }
  };

  return {
    login,
    logout,
  };
};
