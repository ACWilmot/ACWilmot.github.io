
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { Loader2, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { HomeworkAssignment, HomeworkAttempt } from '@/types/teacherTypes';
import { QuizLoadingStates } from '@/components/quiz/QuizLoadingStates';
import { Question } from '@/types/questionTypes';
import { useQuiz } from '@/context/QuizContext';
import QuizContent from '@/components/quiz/QuizContent';
import { toast } from 'sonner';

const HomeworkPage: React.FC = () => {
  const { homeworkId } = useParams<{ homeworkId: string }>();
  const navigate = useNavigate();
  const { isAuthenticated, userRole, user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [homework, setHomework] = useState<HomeworkAssignment | null>(null);
  const [attempt, setAttempt] = useState<HomeworkAttempt | null>(null);
  const [quizReady, setQuizReady] = useState(false);
  
  const { 
    questions,
    currentQuestionIndex,
    userAnswers,
    startTime,
    resetQuiz,
    setQuestions,
    setCurrentQuestionIndex,
    setUserAnswers,
    setStartTime,
    setSelectedSubject,
    setSelectedDifficulty,
    setQuestionCount,
    answerQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    endQuiz
  } = useQuiz();

  // Initial auth check and data loading
  useEffect(() => {
    const checkAuthAndLoadHomework = async () => {
      if (!isAuthenticated) {
        navigate('/login');
        return;
      }

      if (userRole !== 'student') {
        navigate('/');
        return;
      }

      if (!homeworkId) {
        setError('No homework ID provided');
        setIsLoading(false);
        return;
      }

      try {
        // Load homework assignment
        const { data: homeworkData, error: homeworkError } = await supabase
          .from('homework_assignments')
          .select('*')
          .eq('id', homeworkId)
          .single();

        if (homeworkError) {
          throw new Error('Failed to load homework assignment');
        }

        setHomework(homeworkData);

        // Load student attempt
        const { data: attemptData, error: attemptError } = await supabase
          .from('homework_attempts')
          .select('*')
          .eq('homework_id', homeworkId)
          .eq('student_id', user?.id)
          .single();

        if (attemptError) {
          throw new Error('Failed to load homework attempt');
        }

        if (attemptData.completed) {
          setError('You have already completed this homework assignment');
          setAttempt(attemptData);
          setIsLoading(false);
          return;
        }

        setAttempt(attemptData);
        
        // Setup the quiz
        await setupHomeworkQuiz(homeworkData);
        
      } catch (error) {
        console.error('Error loading homework:', error);
        setError('Failed to load homework assignment');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndLoadHomework();
  }, [isAuthenticated, userRole, homeworkId, user?.id, navigate]);

  // Setup the quiz with questions based on the homework assignment
  const setupHomeworkQuiz = async (homework: HomeworkAssignment) => {
    try {
      // Reset the quiz state
      resetQuiz();
      
      // Set quiz parameters
      setSelectedSubject(homework.subject);
      setSelectedDifficulty(homework.difficulty);
      setQuestionCount(homework.question_count);
      
      // Mark attempt as started
      if (attempt) {
        const startedAt = new Date().toISOString();
        const { error } = await supabase
          .from('homework_attempts')
          .update({
            started_at: startedAt
          })
          .eq('id', attempt.id);
        
        if (error) {
          console.error('Error updating attempt:', error);
        }
      }
      
      // Set quiz ready
      setQuizReady(true);
    } catch (error) {
      console.error('Error setting up quiz:', error);
      setError('Failed to setup homework questions');
    }
  };

  // Handle quiz completion
  const handleEndQuiz = async () => {
    try {
      // Calculate score
      let correct = 0;
      questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
          correct++;
        }
      });
      
      const score = Math.round((correct / questions.length) * 100);
      
      // Update attempt in database
      if (attempt) {
        const completedAt = new Date().toISOString();
        const { error } = await supabase
          .from('homework_attempts')
          .update({
            completed: true,
            completed_at: completedAt,
            score: score,
            correct_answers: correct,
            answers: userAnswers
          })
          .eq('id', attempt.id);
        
        if (error) {
          console.error('Error updating attempt:', error);
          toast.error('Failed to save homework results');
        } else {
          toast.success('Homework completed successfully!');
          navigate('/student-dashboard');
        }
      }
    } catch (error) {
      console.error('Error completing homework:', error);
      toast.error('Failed to complete homework');
    }
  };

  if (isLoading) {
    return <QuizLoadingStates.QuestionsLoading />;
  }

  if (error) {
    return (
      <Layout>
        <div className="container pt-32 pb-16">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          
          {attempt?.completed && attempt?.score !== null && (
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Your Results</h2>
              <p className="text-xl mb-2">Score: {attempt.score}%</p>
              <p className="mb-6">
                You got {attempt.correct_answers} out of {homework?.question_count} questions correct
              </p>
              <button 
                className="px-4 py-2 bg-primary text-white rounded"
                onClick={() => navigate('/student-dashboard')}
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  if (!homework || !quizReady) {
    return <QuizLoadingStates.QuestionsLoading />;
  }

  return (
    <QuizContent 
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      userAnswers={userAnswers}
      selectedSubject={homework.subject}
      selectedDifficulty={homework.difficulty}
      questionCount={homework.question_count}
      startTime={startTime}
      answerQuestion={answerQuestion}
      goToNextQuestion={goToNextQuestion}
      goToPreviousQuestion={goToPreviousQuestion}
      resetQuiz={resetQuiz}
      endQuiz={handleEndQuiz}
      isHomework={true}
      homeworkTitle={homework.title}
    />
  );
};

export default HomeworkPage;
