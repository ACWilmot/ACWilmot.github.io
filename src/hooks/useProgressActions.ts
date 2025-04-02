
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile } from '@/types/userTypes';
import { resetSubjects } from '@/utils/authUtils';

export const useProgressActions = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  const updateProgress = async (subject: string, completed: number, correct: number): Promise<void> => {
    if (!user) return;

    try {
      const lastAttempted = new Date().toISOString().split('T')[0];
      
      const newProgress = {
        ...user.progress,
        [subject]: {
          completed,
          correct,
          lastAttempted
        }
      };

      const { error } = await supabase
        .from('profiles')
        .update({
          progress: newProgress
        })
        .eq('id', user.id);

      if (error) {
        console.error('Error updating progress:', error);
        toast.error("Failed to update progress");
        return;
      }

      setUser({
        ...user,
        progress: newProgress
      });
    } catch (error) {
      console.error('Error updating progress:', error);
      toast.error("Failed to update progress");
    }
  };

  const resetProgress = async (): Promise<void> => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          progress: resetSubjects
        })
        .eq('id', user.id);

      if (error) {
        console.error('Error resetting progress:', error);
        toast.error("Failed to reset progress");
        return;
      }

      setUser({
        ...user,
        progress: resetSubjects
      });

      toast.success("Progress reset successfully");
    } catch (error) {
      console.error('Error resetting progress:', error);
      toast.error("Failed to reset progress");
    }
  };

  const resetSubjectProgress = async (subject: string): Promise<void> => {
    if (!user) return;

    try {
      const newProgress = {
        ...user.progress,
        [subject]: {
          completed: 0,
          correct: 0,
          lastAttempted: new Date().toISOString().split('T')[0]
        }
      };

      const { error } = await supabase
        .from('profiles')
        .update({
          progress: newProgress
        })
        .eq('id', user.id);

      if (error) {
        console.error('Error resetting subject progress:', error);
        toast.error("Failed to reset progress");
        return;
      }

      setUser({
        ...user,
        progress: newProgress
      });

      toast.success(`${subject} progress reset successfully`);
    } catch (error) {
      console.error('Error resetting subject progress:', error);
      toast.error("Failed to reset progress");
    }
  };

  return {
    updateProgress,
    resetProgress,
    resetSubjectProgress
  };
};
