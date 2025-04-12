
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile } from '@/types/userTypes';
import { resetSubjects } from '@/utils/progressUtils';

export const useProgressActions = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  const updateProgress = async (subject: string, completed: number, correct: number): Promise<void> => {
    if (!user) return;

    try {
      console.log("Starting progress update:", { subject, completed, correct });
      const lastAttempted = new Date().toISOString().split('T')[0];
      
      // Get current progress values to accumulate them
      const currentProgress = user.progress[subject] || { completed: 0, correct: 0, lastAttempted: null };
      
      // Create new progress by adding the new values to existing ones
      const newProgress = {
        ...user.progress,
        [subject]: {
          completed: currentProgress.completed + completed,
          correct: currentProgress.correct + correct,
          lastAttempted
        }
      };

      console.log("New progress to save:", newProgress);

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

      console.log("Progress successfully updated in database");
      
      // Update local state
      setUser({
        ...user,
        progress: newProgress
      });
      
      toast.success("Progress updated successfully");
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
