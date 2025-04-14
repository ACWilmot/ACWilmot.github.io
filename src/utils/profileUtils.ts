
import { supabase } from '@/integrations/supabase/client';
import { Profile, UserProgress } from '@/types/userTypes';
import { resetSubjects } from './progressUtils';

export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  try {
    console.log("Fetching profile for user ID:", userId);
    
    // Use the auth.users() function instead of direct profile fetch to avoid policy issues
    const { data: userData, error: userError } = await supabase.auth.getUser();
    
    if (userError || !userData?.user) {
      console.error('Error fetching user:', userError);
      return null;
    }
    
    // Get user metadata from auth data
    const userMetadata = userData.user.user_metadata || {};
    
    // Now try to fetch the profile data
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle(); // Use maybeSingle instead of single to avoid errors when no data is found

      if (error) {
        console.error('Error fetching profile from database:', error);
        
        // If we get the recursion error or any database error, create a backup profile from auth data
        const backupProfile: Profile = {
          id: userId,
          name: userMetadata.name || userData.user.email?.split('@')[0] || 'User',
          role: userMetadata.role as 'student' | 'teacher' || 'student',
          progress: { ...resetSubjects },
          email: userData.user.email
        };
        
        console.log('Created backup profile from auth data:', backupProfile);
        return backupProfile;
      }

      if (!data) {
        console.log("No profile found in database, creating from auth data");
        
        // Create profile from auth data if not found in database
        const newProfile: Profile = {
          id: userId,
          name: userMetadata.name || userData.user.email?.split('@')[0] || 'User',
          role: userMetadata.role as 'student' | 'teacher' || 'student',
          progress: { ...resetSubjects },
          email: userData.user.email
        };
        
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
      
      // Convert the data to our Profile type
      const profile: Profile = {
        id: data.id,
        name: data.name || '',
        role: (data.role as 'student' | 'teacher') || 'student',
        progress: progressData,
        students: data.students || []
      };
      
      // Only add email if it exists in the data
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
        role: userMetadata.role as 'student' | 'teacher' || 'student',
        progress: { ...resetSubjects },
        email: userData.user.email
      };
      
      console.log('Created fallback profile from auth data:', fallbackProfile);
      return fallbackProfile;
    }
  } catch (error) {
    console.error('Unexpected error in fetchUserProfile:', error);
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
