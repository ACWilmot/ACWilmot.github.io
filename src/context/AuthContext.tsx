
import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { Profile, UserRole, RegisterData } from '@/types/userTypes';
import { fetchUserProfile } from '@/utils/authUtils';
import { useAuthActions } from '@/hooks/useAuthActions';
import { useProgressActions } from '@/hooks/useProgressActions';
import { useTeacherActions } from '@/hooks/useTeacherActions';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  user: Profile | null;
  login: (email: string, password: string) => Promise<boolean>;
  teacherLogin: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<boolean>;
  updateProgress: (subject: string, completed: number, correct: number) => Promise<void>;
  resetProgress: () => Promise<void>;
  resetSubjectProgress: (subject: string) => Promise<void>;
  getClasses: () => Promise<any[]>;
  createClass: (name: string, description?: string) => Promise<string | null>;
  addStudentToClass: (classId: string, studentEmail: string) => Promise<boolean>;
  removeStudentFromClass: (classId: string, studentId: string) => Promise<boolean>;
  getClassStudents: (classId: string) => Promise<any[]>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  
  const authActions = useAuthActions(user, setUser);
  const progressActions = useProgressActions(user, setUser);
  const teacherActions = useTeacherActions(user, setUser);

  // Check for auth state changes
  useEffect(() => {
    const fetchSession = async () => {
      try {
        // Check current user auth state
        const { data: { session } } = await supabase.auth.getSession();
        
        // Handle authenticated user
        if (session?.user) {
          console.log("Session found, fetching user profile...");
          const profile = await fetchUserProfile(session.user.id);
          if (profile) {
            // Update state with user data
            setIsAuthenticated(true);
            setUser(profile);
            console.log("User profile loaded:", profile);
          } else {
            console.error("No profile found for authenticated user");
            // Handle missing profile (e.g., logout)
            await supabase.auth.signOut();
            setIsAuthenticated(false);
            setUser(null);
          }
        } else {
          // No authenticated user
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking auth session:", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user?.id);
      
      if (event === 'SIGNED_IN' && session?.user) {
        const profile = await fetchUserProfile(session.user.id);
        if (profile) {
          setIsAuthenticated(true);
          setUser(profile);
          
          // Redirect based on user role
          console.log("Redirecting based on role:", profile.role);
          if (profile.role === 'teacher') {
            navigate('/teacher/dashboard');
          } else {
            navigate('/progress');
          }
        }
      } else if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);
  
  // Registration function
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

      // If this is a student with a teacher email, we need to link them
      if (data.role === 'student' && data.teacherEmail) {
        // We'll handle this in a future iteration
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

  const contextValue: AuthContextType = {
    isAuthenticated,
    userRole: user?.role || null,
    user,
    login: authActions.login,
    teacherLogin: authActions.teacherLogin,
    logout: authActions.logout,
    register,
    ...progressActions,
    ...teacherActions
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
