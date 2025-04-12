
import { supabase } from '@/integrations/supabase/client';
import { Profile, UserProgress } from '@/types/userTypes';
import { resetSubjects } from '@/utils/progressUtils';

export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
    
    if (!data) {
      return null;
    }

    // Ensure progress has the correct structure
    // Cast the progress data to our expected structure or use default
    let progressData: { [subject: string]: UserProgress };
    
    if (data.progress && typeof data.progress === 'object' && !Array.isArray(data.progress)) {
      // Convert the progress data to ensure it conforms to our UserProgress type
      progressData = {};
      
      // Iterate through each subject in the progress data
      Object.keys(data.progress).forEach(subject => {
        const subjectData = data.progress[subject];
        if (subjectData && typeof subjectData === 'object') {
          progressData[subject] = {
            completed: typeof subjectData.completed === 'number' ? subjectData.completed : 0,
            correct: typeof subjectData.correct === 'number' ? subjectData.correct : 0,
            lastAttempted: subjectData.lastAttempted || null
          };
        }
      });
      
      // Check if we have all expected subjects, add them if missing
      const expectedSubjects = Object.keys(resetSubjects);
      expectedSubjects.forEach(subject => {
        if (!progressData[subject]) {
          progressData[subject] = resetSubjects[subject];
        }
      });
    } else {
      // Use default progress structure if data is invalid
      progressData = { ...resetSubjects };
    }
    
    // Convert the data to our Profile type
    const profile: Profile = {
      id: data.id,
      name: data.name || '',
      role: (data.role as 'student' | 'teacher') || 'student',
      progress: progressData,
      students: data.students || []
    };
    
    // Add email if it exists
    if (data.email) {
      profile.email = data.email;
    } else if (data.Email) {
      profile.email = data.Email;
    }
    
    return profile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export { resetSubjects };
