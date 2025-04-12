
import { supabase } from '@/integrations/supabase/client';
import { Profile } from '@/types/userTypes';
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
    const progress = data.progress && typeof data.progress === 'object' 
      ? data.progress
      : resetSubjects;
    
    // Convert the data to our Profile type
    const profile: Profile = {
      id: data.id,
      name: data.name || '',
      role: (data.role as 'student' | 'teacher') || 'student',
      progress: progress,
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
