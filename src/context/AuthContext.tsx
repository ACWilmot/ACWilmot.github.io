
import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Profile } from '@/types/userTypes';
import { AuthContextType } from '@/types/authTypes';
import { fetchUserProfile } from '@/utils/profileUtils';
import { useAuthActions } from '@/hooks/useAuthActions';
import { useProgressActions } from '@/hooks/useProgressActions';
import { useTeacherActions } from '@/hooks/useTeacherActions';
import { useRegisterUser } from '@/hooks/useRegisterUser';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  
  const authActions = useAuthActions(user, setUser);
  const progressActions = useProgressActions(user, setUser);
  const teacherActions = useTeacherActions(user, setUser);
  const { register } = useRegisterUser();

  // Check for auth state changes
  useEffect(() => {
    console.log("AuthProvider useEffect running");
    
    const fetchSession = async () => {
      console.log("Fetching session...");
      try {
        // Check current user auth state
        const { data: { session } } = await supabase.auth.getSession();
        
        console.log("Session result:", session ? "Session found" : "No session");
        
        // Handle authenticated user
        if (session?.user) {
          console.log("Session found, fetching user profile...");
          const profile = await fetchUserProfile(session.user.id);
          if (profile) {
            // Update state with user data
            console.log("User profile loaded:", profile.name);
            setIsAuthenticated(true);
            setUser(profile);
          } else {
            console.error("No profile found for authenticated user");
            // Handle missing profile (e.g., logout)
            await supabase.auth.signOut();
            setIsAuthenticated(false);
            setUser(null);
          }
        } else {
          // No authenticated user
          console.log("No authenticated session");
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking auth session:", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
        console.log("Auth loading complete");
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
    console.log("Auth still loading, showing loading UI");
    return <div className="min-h-screen flex items-center justify-center">Loading authentication...</div>;
  }

  console.log("Auth Provider rendering with isAuthenticated:", isAuthenticated);
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error("useAuth must be used within an AuthProvider");
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
