
import React, { createContext, useContext, useState } from 'react';
import { Question, Difficulty, Subject } from '@/types/questionTypes';
import { getQuestionsForSubject } from '@/data/questions/mathsQuestions';

interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<string, string>;
  selectedSubject: Subject | null;
  selectedDifficulty: Difficulty | null;
  questionCount: number;
  startTime: Date | null;
  selectedTimesTables: number[];
  setSelectedTimesTables: React.Dispatch<React.SetStateAction<number[]>>;
  endQuiz: () => void;
  resetQuiz: () => void;
  startQuiz: (subject: Subject, difficulty?: Difficulty) => void;
  answerQuestion: (questionId: string, answer: string) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  getResults: () => { 
    score: number; 
    totalQuestions: number; 
    percentage: number 
  };
  // Added for the homework page:
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setUserAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  setStartTime: React.Dispatch<React.SetStateAction<Date | null>>;
  setSelectedSubject: React.Dispatch<React.SetStateAction<Subject | null>>;
  setSelectedDifficulty: React.Dispatch<React.SetStateAction<Difficulty | null>>;
  setQuestionCount: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

const QuizContext = createContext<QuizContextType | null>(null);

export const QuizProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [selectedTimesTables, setSelectedTimesTables] = useState<number[]>([]);

  const startQuiz = (subject: Subject, difficulty: Difficulty = 'easy') => {
    // Get questions for the subject
    const allQuestions = getQuestionsForSubject(subject, difficulty);
    
    // Shuffle and get the requested number
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, questionCount);
    
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedSubject(subject);
    setSelectedDifficulty(difficulty);
    setStartTime(new Date());
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedSubject(null);
    setSelectedDifficulty(null);
    setStartTime(null);
  };

  const endQuiz = () => {
    // Navigate to results page
    window.location.href = '/results';
  };

  const answerQuestion = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getResults = () => {
    let score = 0;
    questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });

    return {
      score,
      totalQuestions: questions.length,
      percentage: questions.length > 0 ? (score / questions.length) * 100 : 0
    };
  };

  // Calculate score for display in progress dialog
  const score = questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;

  return (
    <QuizContext.Provider value={{
      questions,
      currentQuestionIndex,
      userAnswers,
      selectedSubject,
      selectedDifficulty,
      questionCount,
      startTime,
      selectedTimesTables,
      setSelectedTimesTables,
      resetQuiz,
      startQuiz,
      answerQuestion,
      goToNextQuestion,
      goToPreviousQuestion,
      endQuiz,
      getResults,
      // Expose these for the homework page
      setQuestions,
      setCurrentQuestionIndex,
      setUserAnswers,
      setStartTime,
      setSelectedSubject,
      setSelectedDifficulty,
      setQuestionCount,
      score
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
