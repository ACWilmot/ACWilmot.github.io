
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import QuestionCard from '@/components/QuestionCard';
import QuizTimer from '@/components/QuizTimer';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizControls from '@/components/quiz/QuizControls';
import QuizProgress from '@/components/quiz/QuizProgress';
import SoundEffects from '@/utils/soundEffects';
import { Question, Subject } from '@/types/questionTypes';
import Header from '@/components/Header';

interface QuizContentProps {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<string, string>;
  selectedSubject: Subject | null;
  selectedDifficulty: string;
  questionCount: number;
  startTime: number | null;
  timeLimit: number | null;
  remainingTime: number | null;
  answerQuestion: (questionId: string, answer: string) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  resetQuiz: () => void;
  endQuiz: () => void;
}

const QuizContent: React.FC<QuizContentProps> = ({
  questions,
  currentQuestionIndex,
  userAnswers,
  selectedSubject,
  selectedDifficulty,
  questionCount,
  startTime,
  timeLimit,
  remainingTime,
  answerQuestion,
  goToNextQuestion,
  goToPreviousQuestion,
  resetQuiz,
  endQuiz
}) => {
  const navigate = useNavigate();
  const [showExplanation, setShowExplanation] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    // When time runs out, redirect to results
    if (timeLimit && remainingTime === 0) {
      SoundEffects.playQuizComplete();
      navigate('/results');
    }
  }, [remainingTime, timeLimit, navigate]);

  const handleAnswer = (answer: string) => {
    if (currentQuestion) {
      const isCorrect = answer === currentQuestion.correctAnswer;
      answerQuestion(currentQuestion.id, answer);
      setShowExplanation(true);
      
      if (isCorrect) {
        SoundEffects.playCorrectAnswer();
      } else {
        SoundEffects.playIncorrectAnswer();
      }
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (isLastQuestion) {
      endQuiz();
      SoundEffects.playQuizComplete();
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
              timeLimit={timeLimit}
              remainingTime={remainingTime} 
              className="md:ml-4"
            />
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion?.id}
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

export default QuizContent;
