import React, { createContext, useContext, useState, useEffect } from 'react';
import sampleQuestions from '@/data/sampleQuestions';
import { Question, Difficulty, Subject } from '@/types/questionTypes';
import { generateTimesTablesQuestions } from '@/utils/timesTablesUtils';
import { useProgressActions } from '@/hooks/useProgressActions';
import { useStudentProgressActions } from '@/hooks/useStudentProgressActions';
import { useProfile } from './ProfileContext';
import { useStudent } from './StudentContext';

interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  userAnswers: Record<string, string>;
  selectedSubject: Subject | null;
  selectedDifficulty: Difficulty | 'all';
  selectedYear: number | null;
  isLoading: boolean;
  questionCount: number;
  selectedTimesTables: number[];
  startTime: number | null;
  endTime: number | null;
  timeLimit: number | null; // Time limit in seconds
  remainingTime: number | null; // Remaining time in seconds
  setQuestionCount: (count: number) => void;
  setSelectedSubject: (subject: Subject | null) => void;
  setSelectedDifficulty: (difficulty: Difficulty | 'all') => void;
  setSelectedYear: (year: number | null) => void;
  setSelectedTimesTables: (tables: number[]) => void;
  setTimeLimit: (seconds: number | null) => void; // Set time limit
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
  shouldShowYearSelector: (subject: Subject | null) => boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedTimesTables, setSelectedTimesTables] = useState<number[]>([2, 5, 10]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const { updateProgress } = useProgressActions(null, null);
  const { updateStudentProgress, updateStudentTimesTablesProgress } = useStudentProgressActions();
  const { profile, updateTimesTablesProgress } = useProfile();
  const { selectedStudentId, refreshStudentProgress } = useStudent();

  // Effect to handle timer countdown
  useEffect(() => {
    let timer: number | undefined;
    
    if (startTime && timeLimit && !endTime) {
      const calculateRemainingTime = () => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const remaining = Math.max(0, timeLimit - elapsedTime);
        setRemainingTime(remaining);
        
        if (remaining <= 0) {
          clearInterval(timer);
          endQuiz();
        }
      };
      
      calculateRemainingTime();
      timer = window.setInterval(calculateRemainingTime, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [startTime, timeLimit, endTime]);

  // Helper function to determine if year selector should be shown for the current subject
  const shouldShowYearSelector = (subject: Subject | null): boolean => {
    if (!subject) return true;
    // Don't show year selector for timesTables or verbal
    return subject !== 'timesTables' && subject !== 'verbal';
  };

  const startQuiz = (subject: Subject) => {
    setIsLoading(true);
    
    setStartTime(Date.now());
    setEndTime(null);
    
    setTimeout(() => {
      let selectedQuestions: Question[] = [];
      
      if (subject === 'timesTables') {
        selectedQuestions = generateTimesTablesQuestions(selectedTimesTables, questionCount);
        console.log("Generated times tables questions:", selectedQuestions);
      } else if (subject === 'all') {
        let subjectQuestions: Question[] = [];
        Object.values(sampleQuestions).forEach(questions => {
          subjectQuestions = [...subjectQuestions, ...questions];
        });
        
        // Filter by difficulty and year if selected
        let filteredQuestions = selectedDifficulty === 'all' 
          ? subjectQuestions 
          : subjectQuestions.filter(q => q.difficulty === selectedDifficulty);
          
        // Only filter by year for subjects that use year filtering
        if (selectedYear && shouldShowYearSelector(subject)) {
          filteredQuestions = filteredQuestions.filter(q => 
            !q.year || q.year === selectedYear
          );
        }
        
        for (let i = filteredQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
        }
        
        selectedQuestions = filteredQuestions.slice(0, Math.min(questionCount, filteredQuestions.length));
      } else {
        const subjectQuestions = [...sampleQuestions[subject]];
        
        // Filter by difficulty and year if selected
        let filteredQuestions = selectedDifficulty === 'all' 
          ? subjectQuestions 
          : subjectQuestions.filter(q => q.difficulty === selectedDifficulty);
          
        // Only filter by year for subjects that use year filtering
        if (selectedYear && shouldShowYearSelector(subject)) {
          filteredQuestions = filteredQuestions.filter(q => 
            !q.year || q.year === selectedYear
          );
        }
        
        for (let i = filteredQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
        }
        
        selectedQuestions = filteredQuestions.slice(0, Math.min(questionCount, filteredQuestions.length));
      }
      
      setQuestions(selectedQuestions as Question[]);
      setSelectedSubject(subject);
      setCurrentQuestionIndex(0);
      setScore(0);
      setUserAnswers({});
      setIsLoading(false);
      
      // Set remaining time based on time limit
      if (timeLimit) {
        setRemainingTime(timeLimit);
      }
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
    setTimeLimit(null);
    setRemainingTime(null);
  };
  
  const endQuiz = async () => {
    console.log("Quiz ended. Storing final results...");
    setEndTime(Date.now());

    // Save progress based on whether a student is selected
    if (selectedStudentId) {
      console.log("Saving progress for student:", selectedStudentId);
      
      // Calculate results
      const answeredQuestions = Object.keys(userAnswers).length;
      const correctAnswers = Object.keys(userAnswers).filter(
        questionId => {
          const question = questions.find(q => q.id === questionId);
          return question && userAnswers[questionId] === question.correctAnswer;
        }
      ).length;

      if (selectedSubject === 'timesTables') {
        // Update times tables progress for student
        const questionsWithTiming = questions.map(q => ({
          ...q,
          answerTime: startTime ? Date.now() - startTime : undefined
        }));
        await updateStudentTimesTablesProgress(selectedStudentId, questionsWithTiming, userAnswers);
      } else if (selectedSubject) {
        // Update regular subject progress for student
        await updateStudentProgress(selectedStudentId, selectedSubject, answeredQuestions, correctAnswers);
      }

      // Refresh student progress data
      await refreshStudentProgress();
    } else {
      // Original tutor progress logic
      if (updateProgress && selectedSubject) {
        const answeredQuestions = Object.keys(userAnswers).length;
        const correctAnswers = Object.keys(userAnswers).filter(
          questionId => {
            const question = questions.find(q => q.id === questionId);
            return question && userAnswers[questionId] === question.correctAnswer;
          }
        ).length;

        await updateProgress(selectedSubject, answeredQuestions, correctAnswers);

        if (selectedSubject === 'timesTables' && updateTimesTablesProgress && profile) {
          const questionsWithTiming = questions.map(q => ({
            ...q,
            answerTime: startTime ? Date.now() - startTime : undefined
          }));
          // Note: This would need to be updated to handle the new signature
          console.log('Times table progress tracked directly in profile');
        }
      }
    }
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
        selectedYear,
        isLoading,
        questionCount,
        selectedTimesTables,
        startTime,
        endTime,
        timeLimit,
        remainingTime,
        setQuestionCount,
        setSelectedSubject,
        setSelectedDifficulty,
        setSelectedYear,
        setSelectedTimesTables,
        setTimeLimit,
        startQuiz,
        answerQuestion,
        goToNextQuestion,
        goToPreviousQuestion,
        resetQuiz,
        endQuiz,
        getResults,
        shouldShowYearSelector,
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
