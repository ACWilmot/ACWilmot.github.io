
import { supabase } from '@/integrations/supabase/client';
import { Profile, UserProgress } from '@/types/userTypes';
import { resetSubjects } from './progressUtils';

export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  try {
    console.log("Fetching profile for user ID:", userId);
    
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }

    console.log("Fetched profile data:", data);
    
    if (!data) {
      console.error("No profile data returned for user ID:", userId);
      return null;
    }
    
    // Ensure progress has the correct structure
    let progressData: { [subject: string]: UserProgress } = { ...resetSubjects };
    
    if (data.progress && typeof data.progress === 'object' && !Array.isArray(data.progress)) {
      console.log("Raw progress data:", data.progress);
      
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
    } else {
      console.warn("Invalid progress data format, using default structure", data.progress);
    }
    
    console.log("Processed progress data:", progressData);
    
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
    }
    
    console.log("Final profile object:", profile);
    return profile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

// Add a utility function to ensure all subjects have proper progress structure
export function ensureProgressStructure(progress: { [subject: string]: UserProgress }): { [subject: string]: UserProgress } {
  const subjects = ['maths', 'english', 'verbal', 'nonVerbal'];
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
