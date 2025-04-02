
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

type UserProgress = {
  completed: number;
  correct: number;
  lastAttempted: string | null;
};

type Profile = {
  id: string;
  name: string;
  progress: {
    [subject: string]: UserProgress
  }
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

interface AuthContextType {
  user: Profile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<boolean>;
  updateProgress: (subject: string, completed: number, correct: number) => Promise<void>;
  resetProgress: () => Promise<void>;
  resetSubjectProgress: (subject: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state
  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        
        if (currentSession?.user) {
          // Defer profile fetch to prevent auth deadlock
          setTimeout(async () => {
            await fetchUserProfile(currentSession.user.id);
          }, 0);
        } else {
          setUser(null);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(async ({ data: { session: currentSession } }) => {
      setSession(currentSession);
      
      if (currentSession?.user) {
        await fetchUserProfile(currentSession.user.id);
      }
      
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      if (data) {
        setUser(data as Profile);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    const { name, email, password } = data;

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
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
  };

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

  const updateProgress = async (subject: string, completed: number, correct: number): Promise<void> => {
    if (!user) return;

    try {
      const lastAttempted = new Date().toISOString().split('T')[0];
      
      const newProgress = {
        ...user.progress,
        [subject]: {
          completed,
          correct,
          lastAttempted
        }
      };

      const { error } = await supabase
        .from('profiles')
        .update({
          progress: newProgress
        })
        .eq('id', user.id);

      if (error) {
        console.error('Error updating progress:', error);
        toast.error("Failed to update progress");
        return;
      }

      setUser({
        ...user,
        progress: newProgress
      });
    } catch (error) {
      console.error('Error updating progress:', error);
      toast.error("Failed to update progress");
    }
  };

  const resetProgress = async (): Promise<void> => {
    if (!user) return;

    try {
      const resetSubjects = {
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

      const { error } = await supabase
        .from('profiles')
        .update({
          progress: resetSubjects
        })
        .eq('id', user.id);

      if (error) {
        console.error('Error resetting progress:', error);
        toast.error("Failed to reset progress");
        return;
      }

      setUser({
        ...user,
        progress: resetSubjects
      });

      toast.success("Progress reset successfully");
    } catch (error) {
      console.error('Error resetting progress:', error);
      toast.error("Failed to reset progress");
    }
  };

  const resetSubjectProgress = async (subject: string): Promise<void> => {
    if (!user) return;

    try {
      const newProgress = {
        ...user.progress,
        [subject]: {
          completed: 0,
          correct: 0,
          lastAttempted: new Date().toISOString().split('T')[0]
        }
      };

      const { error } = await supabase
        .from('profiles')
        .update({
          progress: newProgress
        })
        .eq('id', user.id);

      if (error) {
        console.error('Error resetting subject progress:', error);
        toast.error("Failed to reset progress");
        return;
      }

      setUser({
        ...user,
        progress: newProgress
      });

      toast.success(`${subject} progress reset successfully`);
    } catch (error) {
      console.error('Error resetting subject progress:', error);
      toast.error("Failed to reset progress");
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      register,
      updateProgress,
      resetProgress,
      resetSubjectProgress
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
