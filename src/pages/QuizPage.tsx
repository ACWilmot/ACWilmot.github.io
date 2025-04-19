
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import QuestionCard from '@/components/QuestionCard';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { toast } from "sonner";
import QuizTimer from '@/components/QuizTimer';

// Newly extracted components
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizControls from '@/components/quiz/QuizControls';
import WorksheetOptions from '@/components/quiz/WorksheetOptions';
import QuizProgress from '@/components/quiz/QuizProgress';

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
  
  const [showExplanation, setShowExplanation] = useState(false);
  const [showWorksheetOption, setShowWorksheetOption] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  
  console.log("QuizPage rendering - Auth status:", isAuthenticated);
  console.log("Selected subject:", selectedSubject);
  console.log("Is loading:", isLoading);
  console.log("Questions count:", questions.length);
  
  // Check authentication and redirect if not authenticated
  useEffect(() => {
    console.log("Auth check effect running, isAuthenticated:", isAuthenticated);
    
    // Mark that we've checked authentication 
    setAuthChecked(true);
    
    // Only redirect if we've explicitly determined the user is not authenticated
    // This prevents redirect loops in loading/indeterminate states
    if (isAuthenticated === false) {
      console.log("User not authenticated, redirecting to login");
      toast.error("Please sign in to access practice quizzes");
      navigate('/login');
      return;
    }
    
    // If no subject is selected, redirect to home
    if (!isLoading && !selectedSubject && isAuthenticated) {
      console.log("No subject selected, redirecting to home");
      navigate('/');
    }
  }, [selectedSubject, isLoading, navigate, isAuthenticated]);
  
  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleAnswer = (answer: string) => {
    if (currentQuestion) {
      answerQuestion(currentQuestion.id, answer);
      setShowExplanation(true);
    }
  };
  
  const handleNext = () => {
    setShowExplanation(false);
    if (isLastQuestion) {
      endQuiz(); // Record the end time
      navigate('/results');
    } else {
      goToNextQuestion();
    }
  };
  
  const handlePrevious = () => {
    setShowExplanation(false);
    goToPreviousQuestion();
  };
  
  const handleExit = () => {
    const confirmed = window.confirm('Are you sure you want to exit this quiz? Your progress will be lost.');
    if (confirmed) {
      resetQuiz();
      navigate('/');
    }
  };

  // Show loading while we're determining auth state
  if (!authChecked) {
    console.log("Auth not checked yet, showing loading");
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20">
        <Header />
        <div className="animate-pulse text-center">
          <h2 className="text-xl font-display mb-6">Initializing...</h2>
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    );
  }

  // Regular loading for quiz questions
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20">
        <Header />
        <div className="animate-pulse text-center">
          <h2 className="text-xl font-display mb-6">Loading questions...</h2>
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    );
  }
  
  if (!currentQuestion) {
    console.log("No current question, returning null");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <QuizHeader 
              subject={selectedSubject}
              difficulty={selectedDifficulty}
              questionCount={questionCount}
              totalQuestions={questions.length}
              onExit={handleExit}
            />
            
            <QuizTimer 
              startTime={startTime} 
              className="md:ml-4"
            />
          </div>
          
          <WorksheetOptions 
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            showWorksheetOption={showWorksheetOption}
            setShowWorksheetOption={setShowWorksheetOption}
            questions={questions}
            subject={selectedSubject}
            difficulty={selectedDifficulty}
          />
        </div>
        
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            userAnswer={userAnswer}
            onAnswer={handleAnswer}
            showExplanation={showExplanation}
          />
        </AnimatePresence>
        
        <QuizControls 
          onPrevious={handlePrevious}
          onNext={handleNext}
          isFirstQuestion={currentQuestionIndex === 0}
          isLastQuestion={isLastQuestion}
          isAnswered={!!userAnswer}
        />
        
        <QuizProgress />
      </main>
    </div>
  );
};

export default QuizPage;
