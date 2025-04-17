
import { supabase } from '@/integrations/supabase/client';
import { Profile, UserProgress, TimesTableProgress, TimesTableAttempt } from '@/types/userTypes';
import { resetSubjects, getDefaultTimesTablesProgress } from './progressUtils';
import { toast } from 'sonner';

export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  try {
    console.log("Fetching profile for user ID:", userId);
    
    // Get user data directly from auth
    const { data: userData, error: userError } = await supabase.auth.getUser();
    
    if (userError || !userData?.user) {
      console.error('Error fetching user:', userError);
      toast.error('Could not load profile data. Please try logging in again.');
      return null;
    }
    
    // Get user metadata from auth data
    const userMetadata = userData.user.user_metadata || {};
    
    // Now try to fetch the profile data with error handling
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle(); // Use maybeSingle instead of single to avoid errors when no data is found

      if (error) {
        console.error('Error fetching profile from database:', error);
        
        // Create a backup profile from auth data with proper types/structure
        const backupProfile: Profile = {
          id: userId,
          name: userMetadata.name || userData.user.email?.split('@')[0] || 'User',
          role: (userMetadata.role as 'student' | 'teacher') || 'student',
          progress: { ...resetSubjects },
          timesTablesProgress: getDefaultTimesTablesProgress(),
          email: userData.user.email
        };
        
        console.log('Created backup profile from auth data:', backupProfile);
        toast.warning('Profile data partially loaded. Some information may be incomplete.');
        
        // Try to save this backup profile to the database
        try {
          const { error: saveError } = await supabase
            .from('profiles')
            .upsert({
              id: backupProfile.id,
              name: backupProfile.name,
              role: backupProfile.role,
              progress: backupProfile.progress,
              email: backupProfile.email
            });
            
          if (saveError) {
            console.error('Error saving backup profile:', saveError);
          } else {
            console.log('Backup profile saved to database');
          }
        } catch (saveError) {
          console.error('Error saving backup profile:', saveError);
        }
        
        return backupProfile;
      }

      if (!data) {
        console.log("No profile found in database, creating from auth data");
        
        // Create profile from auth data if not found in database
        const newProfile: Profile = {
          id: userId,
          name: userMetadata.name || userData.user.email?.split('@')[0] || 'User',
          role: (userMetadata.role as 'student' | 'teacher') || 'student',
          progress: { ...resetSubjects },
          timesTablesProgress: getDefaultTimesTablesProgress(),
          email: userData.user.email
        };
        
        // Try to save this new profile to the database
        try {
          const { error: saveError } = await supabase
            .from('profiles')
            .insert({
              id: newProfile.id,
              name: newProfile.name,
              role: newProfile.role,
              progress: newProfile.progress,
              email: newProfile.email
            });
            
          if (saveError) {
            console.error('Error saving new profile:', saveError);
          } else {
            console.log('New profile saved to database');
          }
        } catch (saveError) {
          console.error('Error saving new profile:', saveError);
        }
        
        toast.warning('Profile not found. Created a new profile with basic information.');
        return newProfile;
      }
      
      // Ensure progress has the correct structure
      let progressData: { [subject: string]: UserProgress } = { ...resetSubjects };
      
      if (data.progress && typeof data.progress === 'object' && !Array.isArray(data.progress)) {
        // Convert the progress data to ensure it conforms to our UserProgress type
        Object.keys(data.progress).forEach(subject => {
          const subjectData = data.progress[subject];
          if (subjectData && typeof subjectData === 'object') {
            if (progressData[subject] || Object.keys(resetSubjects).includes(subject)) {
              progressData[subject] = {
                completed: typeof subjectData.completed === 'number' ? subjectData.completed : 0,
                correct: typeof subjectData.correct === 'number' ? subjectData.correct : 0,
                lastAttempted: subjectData.lastAttempted || null
              };
            }
          }
        });
      }
      
      // Create the profile object with the structured progress data
      const profile: Profile = {
        id: data.id,
        name: data.name || '',
        role: (data.role as 'student' | 'teacher') || 'student',
        progress: progressData,
        students: data.students || []
      };
      
      // Process times tables progress if it exists
      if (data.timesTablesProgress && Array.isArray(data.timesTablesProgress)) {
        const processedTimesTablesProgress: TimesTableProgress[] = [];
        
        for (const item of data.timesTablesProgress) {
          // Type-safe processing of JSON data
          const typedItem = item as Record<string, any>;
          
          const table = typeof typedItem.table === 'number' ? typedItem.table : 0;
          const attempts = typeof typedItem.attempts === 'number' ? typedItem.attempts : 0;
          const correct = typeof typedItem.correct === 'number' ? typedItem.correct : 0;
          
          // Process recent attempts safely
          const recentAttempts: TimesTableAttempt[] = [];
          if (Array.isArray(typedItem.recentAttempts)) {
            for (const attempt of typedItem.recentAttempts) {
              if (attempt && typeof attempt === 'object') {
                recentAttempts.push({
                  correct: !!attempt.correct,
                  timestamp: typeof attempt.timestamp === 'string' ? attempt.timestamp : new Date().toISOString()
                });
              }
            }
          }
          
          processedTimesTablesProgress.push({
            table,
            attempts,
            correct,
            recentAttempts
          });
        }
        
        profile.timesTablesProgress = processedTimesTablesProgress;
      } else {
        profile.timesTablesProgress = getDefaultTimesTablesProgress();
      }
      
      // Add email if it exists in the data
      if (data.email) {
        profile.email = data.email;
      } else if (data.Email) {
        profile.email = data.Email;
      } else if (userData.user.email) {
        profile.email = userData.user.email;
      }
      
      console.log("Fetched profile successfully:", profile);
      return profile;
    } catch (profileError) {
      console.error('Error in profile fetch process:', profileError);
      
      // Create a fallback profile from auth data
      const fallbackProfile: Profile = {
        id: userId,
        name: userMetadata.name || userData.user.email?.split('@')[0] || 'User',
        role: (userMetadata.role as 'student' | 'teacher') || 'student',
        progress: { ...resetSubjects },
        timesTablesProgress: getDefaultTimesTablesProgress(),
        email: userData.user.email
      };
      
      console.log('Created fallback profile from auth data:', fallbackProfile);
      toast.warning('Could not load full profile. Using minimal profile data.');
      return fallbackProfile;
    }
  } catch (error) {
    console.error('Unexpected error in fetchUserProfile:', error);
    toast.error('Unexpected error loading profile. Please try again.');
    return null;
  }
}

// Add a utility function to ensure all subjects have proper progress structure
export function ensureProgressStructure(progress: { [subject: string]: UserProgress }): { [subject: string]: UserProgress } {
  const subjects = ['maths', 'english', 'verbal'];
  const updatedProgress = { ...progress };
  
  subjects.forEach(subject => {
    if (!updatedProgress[subject]) {
      updatedProgress[subject] = {
        completed: 0,
        correct: 0,
        lastAttempted: null
      };
    }
  });
  
  return updatedProgress;
}
