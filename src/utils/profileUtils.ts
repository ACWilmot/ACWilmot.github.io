
import { supabase } from '@/integrations/supabase/client';
import { Profile, UserProgress } from '@/types/userTypes';

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

    console.log("Fetched profile:", data);
    
    // Convert the JSON data to our Profile type with proper type safety
    if (data) {
      const profile: Profile = {
        id: data.id,
        name: data.name,
        role: data.role as 'student' | 'teacher',
        progress: data.progress as { [subject: string]: UserProgress },
        students: data.students || []
      };
      
      // Only add email if it exists in the data
      if (data.email) {
        profile.email = data.email;
      }
      
      return profile;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}
