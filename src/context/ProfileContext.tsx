
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';

type Progress = {
  correct: number;
  completed: number;
};

export type ProfileData = {
  id: string;
  username: string;
  email: string;
  progress: {
    maths: Progress;
    english: Progress;
    verbal: Progress;
    'non-verbal': Progress;
  };
  createdAt: string;
};

interface ProfileContextType {
  profile: ProfileData | null;
  isLoading: boolean;
  updateProfile: (data: Partial<ProfileData>) => Promise<void>;
  updateProgress: (subject: string, correct: boolean) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authReady, setAuthReady] = useState<boolean>(false);
  const [authAttempted, setAuthAttempted] = useState<boolean>(false);
  
  // Safely access auth context with retry logic
  let auth;
  try {
    auth = useAuth();
    if (!authReady) setAuthReady(true);
  } catch (error) {
    // If auth context isn't ready yet, just return children and try again later
    if (!authAttempted) {
      console.log("Auth context not ready yet in ProfileProvider, will retry");
      setAuthAttempted(true);
      
      // Schedule a retry after a short delay
      setTimeout(() => {
        setAuthAttempted(false);
      }, 500);
    }
    return <>{children}</>;
  }

  // Only run this effect when auth is ready and user changes
  useEffect(() => {
    if (!authReady || !auth) return;
    
    if (auth.user) {
      setIsLoading(true);
      
      // Use a shorter timeout for profile loading
      const timer = setTimeout(() => {
        try {
          // Create mock profile data based on auth user
          setProfile({
            id: auth.user!.id,
            username: auth.user!.name || auth.user!.email?.split('@')[0] || 'user',
            email: auth.user!.email || '',
            progress: {
              maths: { correct: 5, completed: 10 },
              english: { correct: 8, completed: 12 },
              verbal: { correct: 3, completed: 5 },
              'non-verbal': { correct: 4, completed: 6 }
            },
            createdAt: new Date().toISOString()
          });
          console.log("Profile loaded successfully");
        } catch (error) {
          console.error("Error setting profile:", error);
          toast.error("Could not load profile data");
        } finally {
          setIsLoading(false);
        }
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setProfile(null);
    }
  }, [auth?.user, authReady]);

  const updateProfile = async (data: Partial<ProfileData>): Promise<void> => {
    if (!profile) return;
    
    // Simulate API call to update profile
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setProfile(prev => prev ? { ...prev, ...data } : null);
    setIsLoading(false);
  };

  const updateProgress = async (subject: string, correct: boolean): Promise<void> => {
    if (!profile) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setProfile(prev => {
      if (!prev) return null;
      
      const updatedProgress = { ...prev.progress };
      const subjectKey = subject as keyof typeof updatedProgress;
      
      if (updatedProgress[subjectKey]) {
        updatedProgress[subjectKey] = {
          completed: updatedProgress[subjectKey].completed + 1,
          correct: updatedProgress[subjectKey].correct + (correct ? 1 : 0)
        };
      }
      
      return {
        ...prev,
        progress: updatedProgress
      };
    });
    
    setIsLoading(false);
  };

  // Only provide context when auth is ready
  if (!authReady) {
    return <>{children}</>;
  }

  return (
    <ProfileContext.Provider value={{ profile, isLoading, updateProfile, updateProgress }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
