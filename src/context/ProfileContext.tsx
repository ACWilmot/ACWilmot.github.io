
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

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
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      // Simulate loading profile from API
      setIsLoading(true);
      setTimeout(() => {
        setProfile({
          id: user.id,
          username: user.email.split('@')[0],
          email: user.email,
          progress: {
            maths: { correct: 5, completed: 10 },
            english: { correct: 8, completed: 12 },
            verbal: { correct: 3, completed: 5 },
            'non-verbal': { correct: 4, completed: 6 }
          },
          createdAt: new Date().toISOString()
        });
        setIsLoading(false);
      }, 500);
    } else {
      setProfile(null);
    }
  }, [user]);

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
