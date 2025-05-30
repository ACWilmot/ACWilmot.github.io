
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Profile, TimesTableProgress } from '@/types/userTypes';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface ProfileContextProps {
  profile: Profile | null;
  isLoading: boolean;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
  updateTimesTablesProgress: (table: number, correct: boolean) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Load profile when user changes or auth status changes
  useEffect(() => {
    console.log("ProfileProvider useEffect - user:", user?.id, "isAuthenticated:", isAuthenticated);
    
    if (isAuthenticated && user) {
      setProfile(user);
      setIsLoading(false);
    } else {
      // No authenticated user
      setProfile(null);
      setIsLoading(false);
    }
  }, [user, isAuthenticated]);

  const updateTimesTablesProgress = (table: number, correct: boolean) => {
    if (!profile) return;
    
    const timestamp = new Date().toISOString();
    const timesTablesProgress = [...(profile.timesTablesProgress || [])];
    
    // Find the progress entry for this table
    let tableProgress = timesTablesProgress.find(p => p.table === table);
    
    if (!tableProgress) {
      // Create new entry if it doesn't exist
      tableProgress = {
        table,
        attempts: 0,
        correct: 0,
        recentAttempts: [],
        averageTime: 0
      };
      timesTablesProgress.push(tableProgress);
    }
    
    // Update the progress
    tableProgress.attempts += 1;
    if (correct) {
      tableProgress.correct += 1;
    }
    
    // Add to recent attempts (keep most recent 10)
    tableProgress.recentAttempts.unshift({
      correct,
      timestamp
    });
    
    if (tableProgress.recentAttempts.length > 10) {
      tableProgress.recentAttempts = tableProgress.recentAttempts.slice(0, 10);
    }
    
    // Update the profile
    updateProfile({
      timesTablesProgress
    });
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    console.log("Updating profile with:", updates);
    try {
      if (!profile || !user) {
        toast.error("You must be logged in to update your profile");
        navigate('/login');
        return;
      }

      // First update the local state optimistically
      const updatedProfile = { ...profile, ...updates };
      setProfile(updatedProfile);

      // Prepare the data for Supabase update
      const supabaseData: any = {};
      
      // Handle profile fields that are stored directly in the table
      if (updates.name) supabaseData.name = updates.name;
      if (updates.role) supabaseData.role = updates.role;
      if (updates.email) supabaseData.email = updates.email;
      
      // Handle nested JSON data in the profile
      if (updates.progress) supabaseData.progress = updates.progress;
      if (updates.timesTablesProgress) supabaseData.timesTablesProgress = updates.timesTablesProgress;

      // Update profile in Supabase
      const { error } = await supabase
        .from('profiles')
        .update(supabaseData)
        .eq('id', profile.id);

      if (error) {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile");
        // Revert the state on error
        setProfile(profile);
      } else {
        console.log("Profile updated successfully");
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error in updateProfile:", error);
      toast.error("Failed to update profile");
      setProfile(profile); // Revert the state on error
    }
  };

  const value = {
    profile,
    isLoading,
    updateProfile,
    updateTimesTablesProgress
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
