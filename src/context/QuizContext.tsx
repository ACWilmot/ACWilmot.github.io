
import React, { createContext, useContext, useState } from 'react';
import sampleQuestions from '@/data/sampleQuestions';
import { Question, Difficulty } from '@/types/questionTypes';

export type Subject = 'maths' | 'english' | 'verbal' | 'non-verbal';

interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  userAnswers: Record<string, string>;
  selectedSubject: Subject | null;
  selectedDifficulty: Difficulty | 'all';
  isLoading: boolean;
  questionCount: number;
  setQuestionCount: (count: number) => void;
  setSelectedSubject: (subject: Subject | null) => void;
  setSelectedDifficulty: (difficulty: Difficulty | 'all') => void;
  startQuiz: (subject: Subject) => void;
  answerQuestion: (questionId: string, answer: string) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  resetQuiz: () => void;
  getResults: () => {
    score: number;
    totalQuestions: number;
    percentage: number;
    answeredQuestions: number;
  };
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);

  const startQuiz = (subject: Subject) => {
    setIsLoading(true);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      // Get questions for the selected subject and randomize their order
      const subjectQuestions = [...sampleQuestions[subject]];
      
      // Filter by difficulty if a specific difficulty is selected
      const filteredQuestions = selectedDifficulty === 'all' 
        ? subjectQuestions 
        : subjectQuestions.filter(q => q.difficulty === selectedDifficulty);
      
      // Randomize the filtered questions
      for (let i = filteredQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
      }
      
      // Take only the requested number of questions (or all if less available)
      const selectedQuestions = filteredQuestions.slice(0, Math.min(questionCount, filteredQuestions.length));
      
      setQuestions(selectedQuestions);
      setSelectedSubject(subject);
      setCurrentQuestionIndex(0);
      setScore(0);
      setUserAnswers({});
      setIsLoading(false);
    }, 800);
  };

  const answerQuestion = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    // Check if answer is correct and update score
    const question = questions.find((q) => q.id === questionId);
    if (question && answer === question.correctAnswer && !userAnswers[questionId]) {
      setScore((prev) => prev + 1);
    } else if (question && userAnswers[questionId] === question.correctAnswer && answer !== question.correctAnswer) {
      setScore((prev) => prev - 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers({});
    setSelectedSubject(null);
  };

  const getResults = () => {
    const answeredQuestions = Object.keys(userAnswers).length;
    const percentage = questions.length ? (score / questions.length) * 100 : 0;

    return {
      score,
      totalQuestions: questions.length,
      percentage,
      answeredQuestions,
    };
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        score,
        userAnswers,
        selectedSubject,
        selectedDifficulty,
        isLoading,
        questionCount,
        setQuestionCount,
        setSelectedSubject,
        setSelectedDifficulty,
        startQuiz,
        answerQuestion,
        goToNextQuestion,
        goToPreviousQuestion,
        resetQuiz,
        getResults,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
