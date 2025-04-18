import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Profile, TimesTableProgress } from '@/types/userTypes';
import { resetSubjects } from '@/utils/progressUtils';
import { Question } from '@/types/questionTypes';

export const useProgressActions = (user: Profile | null, setUser: ((user: Profile | null) => void) | null) => {
  const updateProgress = async (subject: string, completed: number, correct: number): Promise<void> => {
    if (!user) {
      console.error("Cannot update progress: No user available");
      toast.error("Failed to update progress - please log in again");
      return;
    }

    try {
      console.log("Starting progress update:", { subject, completed, correct, userId: user.id });
      const lastAttempted = new Date().toISOString().split('T')[0];
      
      const currentProgress = user.progress[subject] || { completed: 0, correct: 0, lastAttempted: null };
      
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

      console.log("Progress successfully updated in database for user:", user.id);
      
      if (setUser) {
        console.log("Updating local state with new progress");
        setUser({
          ...user,
          progress: newProgress
        });
      } else {
        console.log("No setUser function provided, skipping local state update");
      }
      
      toast.success("Progress updated successfully");
    } catch (error) {
      console.error('Error updating progress:', error);
      toast.error("Failed to update progress");
    }
  };

  const updateTimesTablesProgress = async (questions: Question[], answers: Record<string, string>): Promise<void> => {
    if (!user) {
      console.error("Cannot update times tables progress: No user available");
      toast.error("Failed to update times tables progress - please log in again");
      return;
    }

    try {
      console.log("Starting times tables progress update for user:", user.id);
      console.log("Questions to process:", questions.length);
      
      const currentTimesTablesProgress = user.timesTablesProgress || getDefaultTimesTablesProgress();
      
      questions.forEach(question => {
        if (!question.timesTable || question.subject !== 'timesTables') {
          console.log("Skipping non-times table question:", question);
          return;
        }
        
        const tableIndex = currentTimesTablesProgress.findIndex(t => t.table === question.timesTable);
        if (tableIndex === -1) {
          console.log(`Table ${question.timesTable} not found in progress data`);
          return;
        }
        
        const tableProgress = currentTimesTablesProgress[tableIndex];
        const userAnswer = answers[question.id];
        const wasCorrect = userAnswer === question.correctAnswer;
        const answerTime = (question as any).answerTime || null;
        
        tableProgress.attempts += 1;
        if (wasCorrect) {
          tableProgress.correct += 1;
        }
        
        tableProgress.recentAttempts = [
          {
            correct: wasCorrect,
            timestamp: new Date().toISOString(),
            answerTime: answerTime
          },
          ...(tableProgress.recentAttempts || []).slice(0, 9)
        ];

        const validTimes = tableProgress.recentAttempts
          .filter(attempt => attempt.answerTime !== undefined)
          .map(attempt => attempt.answerTime as number);
        
        if (validTimes.length > 0) {
          const averageTime = validTimes.reduce((a, b) => a + b, 0) / validTimes.length;
          tableProgress.averageTime = Math.round(averageTime);
        }
        
        currentTimesTablesProgress[tableIndex] = tableProgress;
      });
      
      const jsonCompatibleData = currentTimesTablesProgress.map(item => ({
        table: item.table,
        attempts: item.attempts,
        correct: item.correct,
        recentAttempts: item.recentAttempts.map(attempt => ({
          correct: attempt.correct,
          timestamp: attempt.timestamp,
          answerTime: attempt.answerTime
        })),
        averageTime: item.averageTime,
        _type: "TimesTableProgress"
      }));
      
      console.log("Updated times tables progress to save:", jsonCompatibleData);
      console.log("Saving to user ID:", user.id);
      
      const { error } = await supabase
        .from('profiles')
        .update({
          timesTablesProgress: jsonCompatibleData
        })
        .eq('id', user.id);
        
      if (error) {
        console.error('Error updating times tables progress:', error);
        toast.error("Failed to update times tables progress");
        return;
      }
      
      console.log("Times tables progress saved successfully to database");
      
      if (setUser) {
        console.log("Updating local profile state with new times tables progress");
        setUser({
          ...user,
          timesTablesProgress: currentTimesTablesProgress
        });
      } else {
        console.log("No setUser function provided, skipping local state update");
      }
      
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
          timesTablesProgress: null
        } as any)
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
      if (subject === 'timesTables') {
        const { error } = await supabase
          .from('profiles')
          .update({
            timesTablesProgress: null
          } as any)
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

function getDefaultTimesTablesProgress(): TimesTableProgress[] {
  return Array.from({ length: 12 }, (_, i) => ({
    table: i + 1,
    attempts: 0,
    correct: 0,
    recentAttempts: [],
    averageTime: 0
  }));
}
