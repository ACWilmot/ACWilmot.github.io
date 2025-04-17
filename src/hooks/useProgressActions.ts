
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, TimesTableProgress } from '@/types/userTypes';
import { resetSubjects } from '@/utils/progressUtils';
import { Question } from '@/types/questionTypes';

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

  const updateTimesTablesProgress = async (questions: Question[], answers: Record<string, string>): Promise<void> => {
    if (!user) return;

    try {
      // Get existing times tables progress or create a new array
      const currentTimesTablesProgress = user.timesTablesProgress || 
        Array.from({ length: 12 }, (_, i) => ({
          table: i + 1,
          attempts: 0,
          correct: 0,
          recentAttempts: []
        }));
      
      // Process each question to update times tables progress
      questions.forEach(question => {
        if (!question.timesTable || question.subject !== 'timesTables') {
          return; // Skip if not a times table question
        }
        
        const tableIndex = currentTimesTablesProgress.findIndex(t => t.table === question.timesTable);
        if (tableIndex === -1) return; // Skip if table not found
        
        const tableProgress = currentTimesTablesProgress[tableIndex];
        const wasCorrect = answers[question.id] === question.correctAnswer;
        
        // Update overall statistics
        tableProgress.attempts += 1;
        if (wasCorrect) {
          tableProgress.correct += 1;
        }
        
        // Add to recent attempts (keep only most recent 10)
        tableProgress.recentAttempts = [
          {
            correct: wasCorrect,
            timestamp: new Date().toISOString()
          },
          ...(tableProgress.recentAttempts || []).slice(0, 9)
        ];
        
        // Update the progress in the array
        currentTimesTablesProgress[tableIndex] = tableProgress;
      });
      
      // Update database with the JSON data properly formatted
      const { error } = await supabase
        .from('profiles')
        .update({
          progress: user.progress, // Keep existing progress
          timesTablesProgress: currentTimesTablesProgress // Add new field
        } as any) // Use type assertion to bypass type checking
        .eq('id', user.id);
        
      if (error) {
        console.error('Error updating times tables progress:', error);
        toast.error("Failed to update times tables progress");
        return;
      }
      
      // Update local state
      setUser({
        ...user,
        timesTablesProgress: currentTimesTablesProgress
      });
      
      toast.success("Times tables progress updated");
    } catch (error) {
      console.error('Error updating times tables progress:', error);
      toast.error("Failed to update times tables progress");
    }
  };

  const resetProgress = async (): Promise<void> => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          progress: resetSubjects,
          timesTablesProgress: null // Reset times tables progress too
        } as any) // Use type assertion to bypass type checking
        .eq('id', user.id);

      if (error) {
        console.error('Error resetting progress:', error);
        toast.error("Failed to reset progress");
        return;
      }

      setUser({
        ...user,
        progress: resetSubjects,
        timesTablesProgress: undefined
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
      // If resetting times tables progress, clear the entire array
      if (subject === 'timesTables') {
        const { error } = await supabase
          .from('profiles')
          .update({
            timesTablesProgress: null
          } as any) // Use type assertion to bypass type checking
          .eq('id', user.id);
          
        if (error) {
          console.error('Error resetting times tables progress:', error);
          toast.error("Failed to reset progress");
          return;
        }
        
        setUser({
          ...user,
          timesTablesProgress: undefined
        });
        
        toast.success('Times tables progress reset successfully');
        return;
      }

      // Otherwise reset a regular subject
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
    updateTimesTablesProgress,
    resetProgress,
    resetSubjectProgress
  };
};
