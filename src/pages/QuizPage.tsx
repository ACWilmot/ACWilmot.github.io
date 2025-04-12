
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, List, Shield } from 'lucide-react';
import Header from '@/components/Header';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { useQuiz } from '@/context/QuizContext';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from "sonner";
import { Difficulty } from '@/types/questionTypes';

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
    answerQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    resetQuiz,
  } = useQuiz();
  
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Check authentication and redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please sign in to access practice quizzes");
      navigate('/login');
      return;
    }
    
    // If no subject is selected, redirect to home
    if (!selectedSubject && !isLoading) {
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

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/10 text-green-600';
      case 'medium': return 'bg-amber-500/10 text-amber-600';
      case 'hard': return 'bg-rose-500/10 text-rose-600';
      default: return 'bg-primary/10 text-primary';
    }
  };

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
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleExit}
              className="h-9 w-9 rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Button>
            
            <div>
              <h1 className="text-xl font-display font-semibold">
                {selectedSubject?.charAt(0).toUpperCase() + selectedSubject?.slice(1)} Practice
                {selectedDifficulty !== 'all' && (
                  <span className={`ml-2 text-sm px-2 py-0.5 rounded-full ${getDifficultyColor(selectedDifficulty as Difficulty)}`}>
                    {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
                  </span>
                )}
              </h1>
              <p className="text-sm text-muted-foreground">
                {questions.length} questions selected from the question pool
              </p>
            </div>
          </div>
          
          <ProgressBar 
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            className="md:max-w-sm"
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
        
        <div className="flex justify-between mt-8 max-w-2xl mx-auto">
          <Button 
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!userAnswer}
            className="flex items-center gap-2"
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next'}
            {!isLastQuestion && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/results')}
            className="flex items-center gap-2 mx-auto"
          >
            <List className="h-4 w-4" />
            View Progress
          </Button>
        </div>
      </main>
    </div>
  );
};

export default QuizPage;
