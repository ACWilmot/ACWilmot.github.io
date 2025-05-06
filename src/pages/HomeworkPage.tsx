
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { Loader2, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { HomeworkAssignment, HomeworkAttempt } from '@/types/teacherTypes';
import { QuizLoadingStates } from '@/components/quiz/QuizLoadingStates';
import { Question, Difficulty, Subject } from '@/types/questionTypes';
import { useQuiz } from '@/context/QuizContext';
import QuizContent from '@/components/quiz/QuizContent';
import { toast } from 'sonner';

// MockData for when we don't have access to the database tables yet
const mockQuestions: Question[] = Array.from({ length: 5 }, (_, i) => ({
  id: `q-${i + 1}`,
  subject: 'maths' as Subject,
  difficulty: 'easy' as Difficulty,
  text: `Sample math question ${i + 1}`,
  options: ['1', '2', '3', '4'],
  correctAnswer: '2',
  explanation: 'This is the explanation for the correct answer'
}));

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
        // For now, let's use mock data since we're just setting up the database
        const mockHomework: HomeworkAssignment = {
          id: homeworkId,
          class_id: "class-1",
          title: "Test Homework",
          description: "This is a test homework",
          subject: "maths",
          difficulty: "easy",
          question_count: 5,
          assigned_at: new Date().toISOString(),
          due_date: null
        };
        
        setHomework(mockHomework);
        
        const mockAttempt: HomeworkAttempt = {
          id: "attempt-1",
          homework_id: homeworkId,
          student_id: user?.id || "",
          completed: false,
          score: null,
          correct_answers: null,
          started_at: null,
          completed_at: null,
          reset_at: null,
          answers: null
        };
        
        setAttempt(mockAttempt);
        
        // Setup the quiz
        await setupHomeworkQuiz(mockHomework);
        
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
      setSelectedSubject(homework.subject as Subject);
      setSelectedDifficulty(homework.difficulty as Difficulty);
      setQuestionCount(homework.question_count);
      
      // Use mock questions for now
      setQuestions(mockQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setStartTime(new Date());
      
      // Mark attempt as started
      if (attempt) {
        const startedAt = new Date().toISOString();
        // In a real implementation, we would update the database here
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
        if (userAnswers[question.id] === question.correctAnswer) {
          correct++;
        }
      });
      
      const score = Math.round((correct / questions.length) * 100);
      
      // In a real implementation, we would update the database here
      toast.success('Homework completed successfully!');
      navigate('/student-dashboard');
      
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
