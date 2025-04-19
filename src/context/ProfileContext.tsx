import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Profile, UserProgress, TimesTableProgress } from '@/types/userTypes';
import { resetSubjects, getDefaultTimesTablesProgress } from '@/utils/progressUtils';
import { fetchUserProfile } from '@/utils/profileUtils';

interface ProfileContextType {
  profile: Profile | null;
  isLoading: boolean;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  updateProgress: (subject: string, correct: boolean) => Promise<void>;
  updateTimesTablesProgress: (table: number, correct: boolean, answerTime?: number) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authReady, setAuthReady] = useState<boolean>(false);
  const [authAttempted, setAuthAttempted] = useState<boolean>(false);
  
  let auth;
  try {
    auth = useAuth();
    if (!authReady) setAuthReady(true);
  } catch (error) {
    if (!authAttempted) {
      console.log("Auth context not ready yet in ProfileProvider, will retry");
      setAuthAttempted(true);
      
      setTimeout(() => {
        setAuthAttempted(false);
      }, 500);
    }
    return <>{children}</>;
  }

  useEffect(() => {
    if (!authReady || !auth) return;
    
    if (auth.user) {
      setIsLoading(true);
      
      fetchUserProfile(auth.user.id)
        .then(profile => {
          if (profile) {
            console.log("Fetched profile successfully:", profile);
            setProfile(profile);
          } else {
            console.error("Failed to fetch user profile");
            toast.error("Could not load profile data");
          }
        })
        .catch(error => {
          console.error("Error fetching profile:", error);
          toast.error("Could not load profile data");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setProfile(null);
    }
  }, [auth?.user, authReady]);

  const updateProfile = async (data: Partial<Profile>): Promise<void> => {
    if (!profile) return;
    
    setIsLoading(true);
    
    try {
      const supabaseData: Record<string, any> = {};
      
      if (data.name !== undefined) supabaseData.name = data.name;
      if (data.role !== undefined) supabaseData.role = data.role;
      if (data.email !== undefined) supabaseData.email = data.email;
      if (data.progress !== undefined) supabaseData.progress = data.progress;
      if (data.students !== undefined) supabaseData.students = data.students;
      
      if (data.timesTablesProgress !== undefined) {
        const jsonCompatibleData = data.timesTablesProgress.map(table => {
          return {
            table: table.table,
            attempts: table.attempts,
            correct: table.correct,
            recentAttempts: table.recentAttempts.map(attempt => ({
              correct: attempt.correct,
              timestamp: attempt.timestamp
            }))
          };
        });
        
        supabaseData.timesTablesProgress = jsonCompatibleData;
        console.log("Saving times tables progress to Supabase:", jsonCompatibleData);
      }
      
      const { error } = await supabase
        .from('profiles')
        .update(supabaseData)
        .eq('id', profile.id);
        
      if (error) {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile");
        return;
      }
      
      setProfile(prev => prev ? { ...prev, ...data } : null);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const updateProgress = async (subject: string, correct: boolean): Promise<void> => {
    if (!profile) {
      console.error("Cannot update progress: No profile available");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const updatedProgress = { ...profile.progress };
      const subjectKey = subject as keyof typeof updatedProgress;
      
      if (updatedProgress[subjectKey]) {
        updatedProgress[subjectKey] = {
          completed: updatedProgress[subjectKey].completed + 1,
          correct: updatedProgress[subjectKey].correct + (correct ? 1 : 0),
          lastAttempted: new Date().toISOString().split('T')[0]
        };
      }
      
      const { error } = await supabase
        .from('profiles')
        .update({ progress: updatedProgress })
        .eq('id', profile.id);
        
      if (error) {
        console.error("Error updating progress:", error);
        toast.error("Failed to update progress");
        return;
      }
      
      setProfile(prev => {
        if (!prev) return null;
        return {
          ...prev,
          progress: updatedProgress
        };
      });
      
      toast.success("Progress updated");
    } catch (error) {
      console.error("Error updating progress:", error);
      toast.error("Failed to update progress");
    } finally {
      setIsLoading(false);
    }
  };

  const updateTimesTablesProgress = async (table: number, correct: boolean, answerTime = 0): Promise<void> => {
    if (!profile || !profile.timesTablesProgress) {
      console.error("Cannot update times tables progress: No profile available or times tables progress not initialized");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const updatedProgress = [...profile.timesTablesProgress];
      
      const tableIndex = updatedProgress.findIndex(t => t.table === table);
      if (tableIndex === -1) return;
      
      const tableProgress = updatedProgress[tableIndex];
      tableProgress.attempts += 1;
      if (correct) {
        tableProgress.correct += 1;
      }
      
      tableProgress.recentAttempts = [
        {
          correct,
          timestamp: new Date().toISOString(),
          answerTime: answerTime
        },
        ...(tableProgress.recentAttempts || []).slice(0, 9)
      ];
      
      const validTimes = tableProgress.recentAttempts
        .filter(attempt => typeof attempt.answerTime === 'number' && attempt.answerTime > 0)
        .map(attempt => attempt.answerTime as number);
      
      if (validTimes.length > 0) {
        const averageTime = validTimes.reduce((a, b) => a + b, 0) / validTimes.length;
        tableProgress.averageTime = Math.round(averageTime);
      }
      
      updatedProgress[tableIndex] = tableProgress;
      
      const jsonCompatibleData = updatedProgress.map(item => ({
        table: item.table,
        attempts: item.attempts,
        correct: item.correct,
        recentAttempts: item.recentAttempts.map(attempt => ({
          correct: attempt.correct,
          timestamp: attempt.timestamp,
          answerTime: attempt.answerTime
        })),
        averageTime: item.averageTime,
        _type: "TimesTableProgress"
      }));
      
      const { error } = await supabase
        .from('profiles')
        .update({ timesTablesProgress: jsonCompatibleData })
        .eq('id', profile.id);
        
      if (error) {
        console.error("Error updating times tables progress:", error);
        toast.error("Failed to update times tables progress");
        return;
      }
      
      console.log("Times tables progress updated in Supabase with answer time:", answerTime);
      
      setProfile(prev => {
        if (!prev) return null;
        return {
          ...prev,
          timesTablesProgress: updatedProgress
        };
      });
      
      toast.success(`Times table ${table} progress updated`);
    } catch (error) {
      console.error("Error updating times tables progress:", error);
      toast.error("Failed to update times tables progress");
    } finally {
      setIsLoading(false);
    }
  };

  if (!authReady) {
    return <>{children}</>;
  }

  return (
    <ProfileContext.Provider value={{ profile, isLoading, updateProfile, updateProgress, updateTimesTablesProgress }}>
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
