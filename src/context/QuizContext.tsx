import React, { createContext, useContext, useState } from 'react';
import sampleQuestions from '@/data/sampleQuestions';
import { Question, Difficulty, Subject } from '@/types/questionTypes';
import { generateTimesTablesQuestions } from '@/utils/timesTablesUtils';
import { useProgressActions } from '@/hooks/useProgressActions';
import { useProfile } from './ProfileContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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
  setQuestionCount: (count: number) => void;
  setSelectedSubject: (subject: Subject | null) => void;
  setSelectedDifficulty: (difficulty: Difficulty | 'all') => void;
  setSelectedYear: (year: number | null) => void;
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
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedTimesTables, setSelectedTimesTables] = useState<number[]>([2, 5, 10]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const { updateProgress } = useProgressActions(null, null);
  const { profile, updateTimesTablesProgress } = useProfile();

  const fetchQuestionsFromSupabase = async (subject: Subject, difficulty: Difficulty | 'all', year: number | null, limit: number) => {
    try {
      let query = supabase
        .from('questions')
        .select('*');
        
      // Apply subject filter if not 'all'
      if (subject !== 'all') {
        query = query.eq('subject', subject);
      }
      
      // Apply difficulty filter if not 'all'
      if (difficulty !== 'all') {
        query = query.eq('difficulty', difficulty);
      }
      
      // Apply year filter if specified
      if (year !== null) {
        query = query.eq('year', year);
      }
      
      // Limit results and order by creation date (newest first)
      const { data, error } = await query
        .order('created_at', { ascending: false })
        .limit(limit);
        
      if (error) {
        console.error('Error fetching questions:', error);
        throw error;
      }
      
      if (!data || data.length === 0) {
        console.log('No questions found in database, falling back to sample questions');
        return null;
      }
      
      // Convert database format to application format with proper type handling
      return data.map(item => {
        // Ensure options is correctly converted to string array
        let optionsArray: string[] = [];
        if (Array.isArray(item.options)) {
          optionsArray = item.options.map(opt => String(opt));
        } else if (typeof item.options === 'object' && item.options !== null) {
          // Handle case where options might be an object with numeric keys
          optionsArray = Object.values(item.options).map(opt => String(opt));
        }
        
        // Process optionImages if available
        let optionImagesArray: string[] = [];
        if (item.option_images) {
          if (Array.isArray(item.option_images)) {
            optionImagesArray = item.option_images.map(img => String(img));
          } else if (typeof item.option_images === 'object' && item.option_images !== null) {
            optionImagesArray = Object.values(item.option_images).map(img => String(img));
          }
        }
        
        return {
          id: item.id,
          subject: item.subject as Subject,
          text: item.text,
          options: optionsArray,
          correctAnswer: item.correct_answer,
          explanation: item.explanation || '',
          difficulty: item.difficulty as Difficulty,
          imageUrl: item.image_url,
          optionImages: optionImagesArray,
          year: item.year,
          timesTable: item.times_table
        };
      });
    } catch (error) {
      console.error('Error in fetchQuestionsFromSupabase:', error);
      return null;
    }
  };

  const startQuiz = async (subject: Subject) => {
    setIsLoading(true);
    
    setStartTime(Date.now());
    setEndTime(null);
    
    try {
      if (subject === 'timesTables') {
        const timesTablesQuestions = generateTimesTablesQuestions(selectedTimesTables, questionCount);
        setQuestions(timesTablesQuestions);
      } else {
        // Try to fetch questions from Supabase first
        const supabaseQuestions = await fetchQuestionsFromSupabase(
          subject, 
          selectedDifficulty, 
          selectedYear,
          questionCount
        );
        
        if (supabaseQuestions && supabaseQuestions.length > 0) {
          // Use Supabase questions if available
          setQuestions(supabaseQuestions);
          console.log("Using questions from Supabase:", supabaseQuestions);
        } else {
          // Fall back to sample questions if no Supabase questions available
          let subjectQuestions: Question[] = [];
          
          if (subject === 'all') {
            Object.values(sampleQuestions).forEach(questions => {
              subjectQuestions = [...subjectQuestions, ...questions];
            });
          } else {
            subjectQuestions = [...sampleQuestions[subject]];
          }
          
          // Filter by difficulty and year
          let filteredQuestions = selectedDifficulty === 'all' 
            ? subjectQuestions 
            : subjectQuestions.filter(q => q.difficulty === selectedDifficulty);
            
          if (selectedYear) {
            filteredQuestions = filteredQuestions.filter(q => 
              !q.year || q.year === selectedYear
            );
          }
          
          // Shuffle questions
          for (let i = filteredQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
          }
          
          // Select limited number of questions
          const selectedQuestions = filteredQuestions.slice(0, Math.min(questionCount, filteredQuestions.length));
          setQuestions(selectedQuestions);
          console.log("Using fallback sample questions:", selectedQuestions);
          
          if (filteredQuestions.length === 0) {
            toast.warning("No questions found matching your criteria. Try adjusting your filters.");
          }
        }
      }
      
      setSelectedSubject(subject);
      setCurrentQuestionIndex(0);
      setScore(0);
      setUserAnswers({});
    } catch (error) {
      console.error("Error starting quiz:", error);
      toast.error("There was an error starting the quiz. Please try again.");
    } finally {
      setIsLoading(false);
    }
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

      if (updateProgress && question.subject === 'timesTables' && question.timesTable) {
        updateProgress(question.subject, 1, wasCorrect ? 1 : 0);
        if (updateTimesTablesProgress && profile) {
          updateTimesTablesProgress(question.timesTable, wasCorrect);
          console.log('Times table progress tracked directly in profile');
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
        selectedYear,
        isLoading,
        questionCount,
        selectedTimesTables,
        startTime,
        endTime,
        setQuestionCount,
        setSelectedSubject,
        setSelectedDifficulty,
        setSelectedYear,
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
