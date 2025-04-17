
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Profile, UserProgress, TimesTableProgress } from '@/types/userTypes';
import { resetSubjects, getDefaultTimesTablesProgress } from '@/utils/progressUtils';

interface ProfileContextType {
  profile: Profile | null;
  isLoading: boolean;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  updateProgress: (subject: string, correct: boolean) => Promise<void>;
  updateTimesTablesProgress: (table: number, correct: boolean) => Promise<void>;
}

const LOCAL_STORAGE_KEY = 'demo_times_tables_progress';

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
      
      // Fetch real user profile data from Supabase
      const fetchProfile = async () => {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', auth.user.id)
            .single();
            
          if (error) {
            console.error("Error fetching profile:", error);
            toast.error("Could not load profile data");
            setIsLoading(false);
            return;
          }
          
          if (!data) {
            console.log("No profile found, creating one");
            // Create a profile if none exists
            const newProfileData = {
              id: auth.user.id,
              name: auth.user.name || auth.user.email?.split('@')[0] || 'user',
              role: 'student',
              progress: { ...resetSubjects },
              email: auth.user.email
            };
            
            // Save the new profile to Supabase
            const { error: insertError } = await supabase
              .from('profiles')
              .insert(newProfileData);
              
            if (insertError) {
              console.error("Error creating profile:", insertError);
              toast.error("Could not create profile");
            } else {
              // Create the Profile object
              const newProfile: Profile = {
                ...newProfileData,
                role: 'student'
              };
              setProfile(newProfile);
            }
          } else {
            // Ensure progress has the correct structure with only valid subjects
            const progressData = { ...resetSubjects };
            
            if (data.progress && typeof data.progress === 'object') {
              // Only copy over the valid subjects and ignore 'non-verbal'
              Object.keys(resetSubjects).forEach(subject => {
                if (data.progress[subject]) {
                  progressData[subject] = {
                    completed: data.progress[subject].completed || 0,
                    correct: data.progress[subject].correct || 0,
                    lastAttempted: data.progress[subject].lastAttempted || null
                  };
                }
              });
            }
            
            // Create the profile object with the structured progress data
            const userProfile: Profile = {
              id: data.id,
              name: data.name || '',
              role: (data.role as 'student' | 'teacher') || 'student',
              progress: progressData,
              students: data.students || []
            };
            
            // Add timesTablesProgress if it exists in Supabase
            if (data.timesTablesProgress) {
              try {
                // Parse and validate the timesTablesProgress data
                const timesTablesProgressData = data.timesTablesProgress as any[];
                
                if (Array.isArray(timesTablesProgressData)) {
                  // Ensure each entry has the required properties
                  userProfile.timesTablesProgress = timesTablesProgressData.map(item => ({
                    table: item.table || 0,
                    attempts: item.attempts || 0,
                    correct: item.correct || 0,
                    recentAttempts: Array.isArray(item.recentAttempts) 
                      ? item.recentAttempts.map((attempt: any) => ({
                          correct: !!attempt.correct,
                          timestamp: attempt.timestamp || new Date().toISOString()
                        }))
                      : []
                  }));
                  console.log("Loaded times tables progress from Supabase:", userProfile.timesTablesProgress);
                } else {
                  // Initialize with default progress if data is invalid
                  userProfile.timesTablesProgress = getDefaultTimesTablesProgress();
                  console.log("Invalid times tables progress format, using default");
                }
              } catch (error) {
                console.error("Error parsing times tables progress:", error);
                userProfile.timesTablesProgress = getDefaultTimesTablesProgress();
              }
            } else {
              // Initialize with default progress
              userProfile.timesTablesProgress = getDefaultTimesTablesProgress();
              console.log("Initialized default times tables progress");
            }
            
            // Add email if it exists
            if (data.email) {
              userProfile.email = data.email;
            } else if (data.Email) {
              userProfile.email = data.Email;
            } else if (auth.user.email) {
              userProfile.email = auth.user.email;
            }
            
            setProfile(userProfile);
            console.log("Profile loaded successfully", userProfile);
          }
        } catch (error) {
          console.error("Error in profile fetch:", error);
          toast.error("Could not load profile data");
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchProfile();
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
