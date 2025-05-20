
import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Profile } from '@/types/userTypes';
import { AuthContextType } from '@/types/authTypes';
import { fetchUserProfile } from '@/utils/profileUtils';
import { useAuthActions } from '@/hooks/useAuthActions';
import { useProgressActions } from '@/hooks/useProgressActions';
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
  const { register } = useRegisterUser();

  useEffect(() => {
    console.log("AuthProvider useEffect running");
    let mounted = true;
    let sessionFetchTimer: number | null = null;
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user?.id);
      
      if (!mounted) return;
      
      if (event === 'SIGNED_IN' && session?.user) {
        if (sessionFetchTimer) {
          clearTimeout(sessionFetchTimer);
          sessionFetchTimer = null;
        }
        
        try {
          setIsAuthenticated(true);
          
          setTimeout(async () => {
            if (!mounted) return;
            
            try {
              const profile = await fetchUserProfile(session.user.id);
              if (profile) {
                setUser(profile);
                
                console.log("User signed in successfully:", profile.role);
                // No automatic redirection here anymore
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
        navigate('/');
      }
    });

    const fetchSession = async () => {
      console.log("Fetching session...");
      try {
        sessionFetchTimer = window.setTimeout(() => {
          if (!mounted) return;
          
          console.log("Session fetch timeout - possibly in incognito mode");
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          setSessionChecked(true);
        }, 3000);
        
        const { data, error } = await supabase.auth.getSession();
        
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
        
        if (session?.user) {
          console.log("Session found, fetching user profile...");
          try {
            setIsAuthenticated(true);
            
            const profile = await fetchUserProfile(session.user.id);
            if (profile) {
              console.log("User profile loaded:", profile.name);
              setUser(profile);
            } else {
              console.error("No profile found for authenticated user");
              await supabase.auth.signOut();
              setIsAuthenticated(false);
              setUser(null);
            }
          } catch (error) {
            console.error("Error fetching user profile:", error);
            // Don't automatically sign out - let the user retry or manually log out
            // This prevents login-logout loops
            setIsAuthenticated(false);
            setUser(null);
          }
        } else {
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
    logout: authActions.logout,
    register,
    ...progressActions
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
