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
  updateTimesTablesProgress: (table: number, correct: boolean) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
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
      
      // Use the fetchUserProfile utility instead of direct database access
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
      // Convert the Profile data to a Supabase-compatible format
      const supabaseData: Record<string, any> = {};
      
      // Only copy the properties that are present in data
      if (data.name !== undefined) supabaseData.name = data.name;
      if (data.role !== undefined) supabaseData.role = data.role;
      if (data.email !== undefined) supabaseData.email = data.email;
      if (data.progress !== undefined) supabaseData.progress = data.progress;
      if (data.students !== undefined) supabaseData.students = data.students;
      
      // For timesTablesProgress, ensure it's properly formatted for Supabase
      if (data.timesTablesProgress !== undefined) {
        // Convert TimesTableProgress[] to a pure JSON object
        // This is to make it compatible with Supabase's Json type
        const jsonCompatibleData = data.timesTablesProgress.map(table => {
          // Create a plain object with the necessary properties
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
    if (!profile) return;
    
    setIsLoading(true);
    
    try {
      // Get current progress
      const updatedProgress = { ...profile.progress };
      const subjectKey = subject as keyof typeof updatedProgress;
      
      if (updatedProgress[subjectKey]) {
        updatedProgress[subjectKey] = {
          completed: updatedProgress[subjectKey].completed + 1,
          correct: updatedProgress[subjectKey].correct + (correct ? 1 : 0),
          lastAttempted: new Date().toISOString().split('T')[0]
        };
      }
      
      // Update in Supabase
      const { error } = await supabase
        .from('profiles')
        .update({ progress: updatedProgress })
        .eq('id', profile.id);
        
      if (error) {
        console.error("Error updating progress:", error);
        toast.error("Failed to update progress");
        return;
      }
      
      // Update local state
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

  // Method to update times tables progress
  const updateTimesTablesProgress = async (table: number, correct: boolean): Promise<void> => {
    if (!profile || !profile.timesTablesProgress) return;
    
    setIsLoading(true);
    
    try {
      // Clone the current progress
      const updatedProgress = [...profile.timesTablesProgress];
      
      // Find the table entry
      const tableIndex = updatedProgress.findIndex(t => t.table === table);
      if (tableIndex === -1) return;
      
      // Update the table progress
      const tableProgress = updatedProgress[tableIndex];
      tableProgress.attempts += 1;
      if (correct) {
        tableProgress.correct += 1;
      }
      
      // Add to recent attempts (keep only most recent 10)
      tableProgress.recentAttempts = [
        {
          correct,
          timestamp: new Date().toISOString()
        },
        ...(tableProgress.recentAttempts || []).slice(0, 9)
      ];
      
      // Update the progress in the array
      updatedProgress[tableIndex] = tableProgress;
      
      // Convert to JSON-compatible format before saving to Supabase
      const jsonCompatibleData = updatedProgress.map(item => ({
        table: item.table,
        attempts: item.attempts,
        correct: item.correct,
        recentAttempts: item.recentAttempts.map(attempt => ({
          correct: attempt.correct,
          timestamp: attempt.timestamp
        }))
      }));
      
      // Update in Supabase
      const { error } = await supabase
        .from('profiles')
        .update({ timesTablesProgress: jsonCompatibleData })
        .eq('id', profile.id);
        
      if (error) {
        console.error("Error updating times tables progress:", error);
        toast.error("Failed to update times tables progress");
        return;
      }
      
      console.log("Times tables progress updated in Supabase:", jsonCompatibleData);
      
      // Update local state
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

  // Only provide context when auth is ready
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
