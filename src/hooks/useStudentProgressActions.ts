
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { Question } from '@/types/questionTypes';
import { TimesTableProgress, UserProgress } from '@/types/userTypes';

export const useStudentProgressActions = () => {
  const updateStudentProgress = async (
    studentId: string, 
    subject: string, 
    completed: number, 
    correct: number
  ): Promise<void> => {
    try {
      console.log("Starting student progress update:", { studentId, subject, completed, correct });
      
      const lastAttempted = new Date().toISOString().split('T')[0];
      
      // First, try to get existing progress
      const { data: existingProgress, error: fetchError } = await supabase
        .from('student_progress')
        .select('*')
        .eq('student_profile_id', studentId)
        .eq('subject', subject)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error fetching existing progress:', fetchError);
        toast.error("Failed to fetch existing progress");
        return;
      }

      if (existingProgress) {
        // Update existing progress
        const currentProgress = existingProgress.progress as UserProgress;
        const newProgress = {
          completed: currentProgress.completed + completed,
          correct: currentProgress.correct + correct,
          lastAttempted
        };

        const { error: updateError } = await supabase
          .from('student_progress')
          .update({
            progress: newProgress,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingProgress.id);

        if (updateError) {
          console.error('Error updating student progress:', updateError);
          toast.error("Failed to update student progress");
          return;
        }
      } else {
        // Create new progress record
        const newProgress = {
          completed,
          correct,
          lastAttempted
        };

        const { error: insertError } = await supabase
          .from('student_progress')
          .insert({
            student_profile_id: studentId,
            subject,
            progress: newProgress
          });

        if (insertError) {
          console.error('Error creating student progress:', insertError);
          toast.error("Failed to create student progress");
          return;
        }
      }

      console.log("Student progress updated successfully");
      toast.success("Student progress updated successfully");
    } catch (error) {
      console.error('Error updating student progress:', error);
      toast.error("Failed to update student progress");
    }
  };

  const updateStudentTimesTablesProgress = async (
    studentId: string,
    questions: (Question & { answerTime?: number })[],
    answers: Record<string, string>
  ): Promise<void> => {
    try {
      console.log("Starting student times tables progress update:", studentId);
      
      // Get existing times tables progress
      const { data: existingProgress, error: fetchError } = await supabase
        .from('student_progress')
        .select('*')
        .eq('student_profile_id', studentId)
        .eq('subject', 'timesTables')
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error fetching existing times tables progress:', fetchError);
        toast.error("Failed to fetch existing times tables progress");
        return;
      }

      // Get current times tables progress or create default
      let currentTimesTablesProgress: TimesTableProgress[] = [];
      if (existingProgress?.times_tables_progress) {
        currentTimesTablesProgress = existingProgress.times_tables_progress as TimesTableProgress[];
      } else {
        // Create default progress for tables 1-12
        currentTimesTablesProgress = Array.from({ length: 12 }, (_, i) => ({
          table: i + 1,
          attempts: 0,
          correct: 0,
          recentAttempts: []
        }));
      }

      // Update progress based on questions
      questions.forEach(question => {
        if (!question.timesTable || question.subject !== 'timesTables') {
          return;
        }
        
        const tableIndex = currentTimesTablesProgress.findIndex(t => t.table === question.timesTable);
        if (tableIndex === -1) {
          return;
        }
        
        const tableProgress = currentTimesTablesProgress[tableIndex];
        const userAnswer = answers[question.id];
        const wasCorrect = userAnswer === question.correctAnswer;
        const answerTime = question.answerTime || null;
        
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

        currentTimesTablesProgress[tableIndex] = tableProgress;
      });

      // Calculate overall progress stats
      const totalQuestions = questions.length;
      const correctAnswers = questions.filter(q => answers[q.id] === q.correctAnswer).length;
      
      const progressData = {
        completed: totalQuestions,
        correct: correctAnswers,
        lastAttempted: new Date().toISOString().split('T')[0]
      };

      if (existingProgress) {
        // Update existing record
        const { error: updateError } = await supabase
          .from('student_progress')
          .update({
            progress: {
              completed: (existingProgress.progress as UserProgress).completed + progressData.completed,
              correct: (existingProgress.progress as UserProgress).correct + progressData.correct,
              lastAttempted: progressData.lastAttempted
            },
            times_tables_progress: currentTimesTablesProgress,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingProgress.id);

        if (updateError) {
          console.error('Error updating student times tables progress:', updateError);
          toast.error("Failed to update student times tables progress");
          return;
        }
      } else {
        // Create new record
        const { error: insertError } = await supabase
          .from('student_progress')
          .insert({
            student_profile_id: studentId,
            subject: 'timesTables',
            progress: progressData,
            times_tables_progress: currentTimesTablesProgress
          });

        if (insertError) {
          console.error('Error creating student times tables progress:', insertError);
          toast.error("Failed to create student times tables progress");
          return;
        }
      }

      console.log("Student times tables progress updated successfully");
      toast.success("Student times tables progress updated");
    } catch (error) {
      console.error('Error updating student times tables progress:', error);
      toast.error("Failed to update student times tables progress");
    }
  };

  return {
    updateStudentProgress,
    updateStudentTimesTablesProgress
  };
};
