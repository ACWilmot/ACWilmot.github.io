
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
import { toast } from 'sonner';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [sessionChecked, setSessionChecked] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const authActions = useAuthActions(user, setUser);
  const progressActions = useProgressActions(user, setUser);
  const teacherActions = useTeacherActions(user, setUser);
  const { register } = useRegisterUser();

  // Check for auth state changes
  useEffect(() => {
    console.log("AuthProvider useEffect running");
    let mounted = true;
    let sessionFetchTimer: number | null = null;
    
    // Set up auth state listener FIRST (before checking session)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user?.id);
      
      if (!mounted) return;
      
      if (event === 'SIGNED_IN' && session?.user) {
        // Clear any pending timeout
        if (sessionFetchTimer) {
          clearTimeout(sessionFetchTimer);
          sessionFetchTimer = null;
        }
        
        try {
          // Process login
          setIsAuthenticated(true);
          
          // Use setTimeout to avoid auth deadlock
          setTimeout(async () => {
            if (!mounted) return;
            
            try {
              const profile = await fetchUserProfile(session.user.id);
              if (profile) {
                setUser(profile);
                
                // Redirect based on user role
                console.log("Redirecting based on role:", profile.role);
                if (profile.role === 'teacher') {
                  navigate('/teacher/dashboard');
                } else {
                  navigate('/progress');
                }
              } else {
                console.error("No profile found for signed in user");
                toast.error("Error loading user profile. Please try again.");
                await supabase.auth.signOut();
                setIsAuthenticated(false);
                setUser(null);
              }
            } catch (error) {
              console.error("Error processing user after sign in:", error);
              toast.error("Authentication error. Please try again.");
            }
          }, 0);
        } catch (error) {
          console.error("Error handling sign in:", error);
          toast.error("Authentication error. Please try again.");
        }
      } else if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
      }
    });

    const fetchSession = async () => {
      console.log("Fetching session...");
      try {
        // Add shorter timeout for session fetch
        sessionFetchTimer = window.setTimeout(() => {
          if (!mounted) return;
          
          console.log("Session fetch timeout - possibly in incognito mode");
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          setSessionChecked(true);
        }, 3000); // 3 second timeout
        
        // Check current user auth state
        const { data, error } = await supabase.auth.getSession();
        
        // Clear timeout as we got a response
        if (sessionFetchTimer) {
          clearTimeout(sessionFetchTimer);
          sessionFetchTimer = null;
        }
        
        if (!mounted) return;
        
        if (error) {
          console.error("Error fetching session:", error);
          setIsAuthenticated(false);
          setUser(null);
          setSessionChecked(true);
          setLoading(false);
          return;
        }
        
        const session = data.session;
        console.log("Session result:", session ? "Session found" : "No session");
        
        // Handle authenticated user
        if (session?.user) {
          console.log("Session found, fetching user profile...");
          try {
            setIsAuthenticated(true);
            
            const profile = await fetchUserProfile(session.user.id);
            if (profile) {
              // Update state with user data
              console.log("User profile loaded:", profile.name);
              setUser(profile);
            } else {
              console.error("No profile found for authenticated user");
              // Handle missing profile (e.g., logout)
              await supabase.auth.signOut();
              setIsAuthenticated(false);
              setUser(null);
            }
          } catch (error) {
            console.error("Error fetching user profile:", error);
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
        if (mounted) {
          setSessionChecked(true);
          setLoading(false);
          console.log("Auth loading complete");
        }
      }
    };

    fetchSession();

    // Cleanup subscription and timers on unmount
    return () => {
      mounted = false;
      if (sessionFetchTimer) {
        clearTimeout(sessionFetchTimer);
      }
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
