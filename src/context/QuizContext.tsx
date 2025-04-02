
import React, { createContext, useContext, useState } from 'react';
import sampleQuestions from '@/data/sampleQuestions';
import { Question } from '@/types/questionTypes';

export type Subject = 'maths' | 'english' | 'verbal' | 'nonVerbal';

interface QuizContextType {
  questions: Question[];
  currentQuestion: Question;
  currentQuestionIndex: number;
  score: number;
  userAnswers: Record<string, string>;
  selectedOptions: Record<string, string>;
  selectedSubject: Subject | null;
  isLoading: boolean;
  questionCount: number;
  quizInProgress: boolean;
  setQuestionCount: (count: number) => void;
  setSelectedSubject: (subject: Subject | null) => void;
  startQuiz: (subject: string, difficulty?: string, numQuestions?: number) => void;
  answerQuestion: (questionId: string, answer: string) => void;
  selectOption: (questionId: string, option: string) => void;
  submitQuiz: () => void;
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
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [quizInProgress, setQuizInProgress] = useState(false);

  const getCurrentQuestion = (): Question => {
    return questions[currentQuestionIndex] || {
      id: '',
      text: '',
      subject: 'maths',
      difficulty: 'easy',
      options: [],
      correctAnswer: 'A',
      explanation: ''
    };
  };

  const startQuiz = (subject: string, difficulty = "easy", numQuestions = 10) => {
    setIsLoading(true);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      // Get questions for the selected subject and randomize their order
      const subjectQuestions = [...sampleQuestions[subject as Subject]];
      for (let i = subjectQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [subjectQuestions[i], subjectQuestions[j]] = [subjectQuestions[j], subjectQuestions[i]];
      }
      
      // Take only the requested number of questions (or all if less available)
      const selectedQuestions = subjectQuestions.slice(0, Math.min(numQuestions, subjectQuestions.length));
      
      setQuestions(selectedQuestions);
      setSelectedSubject(subject as Subject);
      setCurrentQuestionIndex(0);
      setScore(0);
      setUserAnswers({});
      setSelectedOptions({});
      setIsLoading(false);
      setQuizInProgress(true);
    }, 800);
  };

  const selectOption = (questionId: string, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const submitQuiz = () => {
    // Calculate score based on selected options
    let finalScore = 0;
    questions.forEach(question => {
      const selected = selectedOptions[question.id];
      if (selected && selected === question.correctAnswer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setUserAnswers(selectedOptions);
    setQuizInProgress(false);
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
    setSelectedOptions({});
    setSelectedSubject(null);
    setQuizInProgress(false);
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

  // Get current question
  const currentQuestion = getCurrentQuestion();

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestion,
        currentQuestionIndex,
        score,
        userAnswers,
        selectedOptions,
        selectedSubject,
        isLoading,
        questionCount,
        quizInProgress,
        setQuestionCount,
        setSelectedSubject,
        startQuiz,
        selectOption,
        submitQuiz,
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
