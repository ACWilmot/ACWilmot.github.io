
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { toast } from "sonner";
import { QuizLoadingStates } from '@/components/quiz/QuizLoadingStates';
import QuizContent from '@/components/quiz/QuizContent';

const QuizPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {
    questions,
    currentQuestionIndex,
    userAnswers,
    selectedSubject,
    selectedDifficulty,
    isLoading,
    questionCount,
    startTime,
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
      toast.error("Please sign in to access practice quizzes");
      navigate('/login');
      return;
    }
    
    if (!isLoading && !selectedSubject && isAuthenticated) {
      navigate('/');
    }
  }, [selectedSubject, isLoading, navigate, isAuthenticated]);

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
      answerQuestion={answerQuestion}
      goToNextQuestion={goToNextQuestion}
      goToPreviousQuestion={goToPreviousQuestion}
      resetQuiz={resetQuiz}
      endQuiz={endQuiz}
    />
  );
};

export default QuizPage;
