import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';
import { useToast } from '@/hooks/use-toast';
import { QuizLoadingStates } from '@/components/quiz/QuizLoadingStates';
import QuizContent from '@/components/quiz/QuizContent';

const QuizPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { isSubscribed } = useSubscription();
  const { toast } = useToast();
  const {
    questions,
    currentQuestionIndex,
    userAnswers,
    selectedSubject,
    selectedDifficulty,
    isLoading,
    questionCount,
    startTime,
    timeLimit,
    remainingTime,
    answerQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    resetQuiz,
    endQuiz,
  } = useQuiz();
  
  const [authChecked, setAuthChecked] = useState(false);
  
  useEffect(() => {
    setAuthChecked(true);
    
    if (isAuthenticated === false) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to access practice quizzes",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }
    
    // Check if user is trying to access premium content without subscription
    if (isAuthenticated && !isLoading && selectedSubject && selectedSubject !== 'all' && !isSubscribed) {
      toast({
        title: "Premium Required",
        description: "Please upgrade to Premium to access this quiz",
        variant: "destructive",
      });
      navigate('/profile?tab=subscription');
      return;
    }
    
    if (!isLoading && !selectedSubject && isAuthenticated) {
      navigate('/');
    }
  }, [selectedSubject, isLoading, navigate, isAuthenticated, isSubscribed, toast]);

  if (!authChecked) {
    return <QuizLoadingStates.AuthChecking />;
  }

  if (isLoading) {
    return <QuizLoadingStates.QuestionsLoading />;
  }
  
  if (!questions[currentQuestionIndex]) {
    return null;
  }

  return (
    <QuizContent 
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      userAnswers={userAnswers}
      selectedSubject={selectedSubject}
      selectedDifficulty={selectedDifficulty}
      questionCount={questionCount}
      startTime={startTime}
      timeLimit={timeLimit}
      remainingTime={remainingTime}
      answerQuestion={answerQuestion}
      goToNextQuestion={goToNextQuestion}
      goToPreviousQuestion={goToPreviousQuestion}
      resetQuiz={resetQuiz}
      endQuiz={endQuiz}
    />
  );
};

export default QuizPage;
