
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { Profile, RegisterData, Student, UserRole } from '@/types/userTypes';
import { fetchUserProfile, registerUser } from '@/utils/authUtils';
import { useAuthActions } from '@/hooks/useAuthActions';
import { useProgressActions } from '@/hooks/useProgressActions';
import { useStudentManagement } from '@/hooks/useStudentManagement';

interface AuthContextType {
  user: Profile | null;
  isAuthenticated: boolean;
  userRole: UserRole | null;
  login: (email: string, password: string) => Promise<boolean>;
  teacherLogin: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<boolean>;
  updateProgress: (subject: string, completed: number, correct: number) => Promise<void>;
  resetProgress: () => Promise<void>;
  resetSubjectProgress: (subject: string) => Promise<void>;
  getStudents: () => Promise<Student[]>;
  addStudent: (studentId: string) => Promise<boolean>;
  removeStudent: (studentId: string) => Promise<boolean>;
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
            const profile = await fetchUserProfile(currentSession.user.id);
            setUser(profile);
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
        const profile = await fetchUserProfile(currentSession.user.id);
        setUser(profile);
      }
      
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const { login, teacherLogin, logout } = useAuthActions(user, setUser);
  const { updateProgress, resetProgress, resetSubjectProgress } = useProgressActions(user, setUser);
  const { getStudents, addStudent, removeStudent } = useStudentManagement(user, setUser);
  
  const register = async (data: RegisterData): Promise<boolean> => {
    return await registerUser(data);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      userRole: user?.role || null,
      login,
      teacherLogin,
      logout,
      register,
      updateProgress,
      resetProgress,
      resetSubjectProgress,
      getStudents,
      addStudent,
      removeStudent
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
