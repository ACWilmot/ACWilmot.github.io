import React, { createContext, useContext, useState } from 'react';
import sampleQuestions from '@/data/sampleQuestions';
import { Question, Difficulty } from '@/types/questionTypes';
import { generateTimesTablesQuestions } from '@/utils/timesTablesUtils';
import { useProgressActions } from '@/hooks/useProgressActions';
import { useProfile } from './ProfileContext';

export type Subject = 'maths' | 'english' | 'verbal' | 'all' | 'timesTables';

interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  userAnswers: Record<string, string>;
  selectedSubject: Subject | null;
  selectedDifficulty: Difficulty | 'all';
  isLoading: boolean;
  questionCount: number;
  selectedTimesTables: number[];
  startTime: number | null;
  endTime: number | null;
  setQuestionCount: (count: number) => void;
  setSelectedSubject: (subject: Subject | null) => void;
  setSelectedDifficulty: (difficulty: Difficulty | 'all') => void;
  setSelectedTimesTables: (tables: number[]) => void;
  startQuiz: (subject: Subject) => void;
  answerQuestion: (questionId: string, answer: string) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  resetQuiz: () => void;
  endQuiz: () => void;
  getResults: () => {
    score: number;
    totalQuestions: number;
    percentage: number;
    answeredQuestions: number;
    timeTaken: number | null;
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
  const [selectedTimesTables, setSelectedTimesTables] = useState<number[]>([2, 5, 10]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const { updateProgress } = useProgressActions();
  const { updateTimesTablesProgress } = useProfile();

  const startQuiz = (subject: Subject) => {
    setIsLoading(true);
    
    // Set the start time when the quiz begins
    setStartTime(Date.now());
    setEndTime(null);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      let selectedQuestions: Question[] = [];
      
      if (subject === 'timesTables') {
        // Generate times tables questions based on selected tables
        selectedQuestions = generateTimesTablesQuestions(selectedTimesTables, questionCount);
        console.log("Generated times tables questions:", selectedQuestions);
      } else if (subject === 'all') {
        // Combine questions from all subjects
        let subjectQuestions: Question[] = [];
        Object.values(sampleQuestions).forEach(questions => {
          subjectQuestions = [...subjectQuestions, ...questions];
        });
        
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
        selectedQuestions = filteredQuestions.slice(0, Math.min(questionCount, filteredQuestions.length));
      } else {
        // Get questions for a specific subject
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
        selectedQuestions = filteredQuestions.slice(0, Math.min(questionCount, filteredQuestions.length));
      }
      
      setQuestions(selectedQuestions);
      setSelectedSubject(subject);
      setCurrentQuestionIndex(0);
      setScore(0);
      setUserAnswers({});
      setIsLoading(false);
    }, 800);
  };

  const answerQuestion = (questionId: string, answer: string) => {
    console.log(`Answering question ${questionId} with answer: ${answer}`);
    
    const currentTime = Date.now();
    const questionStartTime = startTime || currentTime;
    const answerTime = currentTime - questionStartTime;
    
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    // Check if answer is correct and update score
    const question = questions.find((q) => q.id === questionId);
    if (question) {
      console.log(`Question found: ${question.text}, correct answer: ${question.correctAnswer}`);
      console.log(`Subject: ${question.subject}, Times Table: ${question.timesTable || 'N/A'}`);
      console.log(`Time taken to answer: ${answerTime}ms`);
      
      const wasCorrect = answer === question.correctAnswer;
      
      if (wasCorrect && !userAnswers[questionId]) {
        setScore((prev) => prev + 1);
        console.log("Correct answer! Score increased.");
      } else if (userAnswers[questionId] === question.correctAnswer && !wasCorrect) {
        setScore((prev) => prev - 1);
        console.log("Changed from correct to incorrect. Score decreased.");
      }

      // Pass the timing information along with the answer data
      if (updateProgress && question.subject === 'timesTables' && question.timesTable) {
        updateProgress(question.subject, 1, wasCorrect ? 1 : 0);
        if (updateTimesTablesProgress) {
          updateTimesTablesProgress([{
            ...question,
            answerTime
          }], { [questionId]: answer });
        }
      }
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
    setStartTime(null);
    setEndTime(null);
  };
  
  const endQuiz = () => {
    console.log("Quiz ended. Storing final results...");
    setEndTime(Date.now());
  };

  const getResults = () => {
    const answeredQuestions = Object.keys(userAnswers).length;
    const percentage = questions.length ? (score / questions.length) * 100 : 0;
    
    let timeTaken = null;
    if (startTime) {
      const end = endTime || Date.now();
      timeTaken = end - startTime;
    }

    return {
      score,
      totalQuestions: questions.length,
      percentage,
      answeredQuestions,
      timeTaken,
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
        selectedTimesTables,
        startTime,
        endTime,
        setQuestionCount,
        setSelectedSubject,
        setSelectedDifficulty,
        setSelectedTimesTables,
        startQuiz,
        answerQuestion,
        goToNextQuestion,
        goToPreviousQuestion,
        resetQuiz,
        endQuiz,
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
