
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Subject = 'maths' | 'english' | 'verbal' | 'non-verbal';

export interface Question {
  id: string;
  subject: Subject;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  userAnswers: Record<string, string>;
  selectedSubject: Subject | null;
  isLoading: boolean;
  setSelectedSubject: (subject: Subject | null) => void;
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

// Sample questions for each subject
const sampleQuestions: Record<Subject, Question[]> = {
  maths: [
    {
      id: 'm1',
      subject: 'maths',
      text: 'Calculate 24 × 7 - 12 × 4',
      options: ['120', '132', '156', '168'],
      correctAnswer: '120',
      explanation: '24 × 7 = 168 and 12 × 4 = 48. 168 - 48 = 120.'
    },
    {
      id: 'm2',
      subject: 'maths',
      text: 'If a rectangle has a length of 12cm and a width of 8cm, what is its perimeter?',
      options: ['20cm', '36cm', '40cm', '96cm²'],
      correctAnswer: '40cm',
      explanation: 'Perimeter = 2(length + width) = 2(12 + 8) = 2(20) = 40cm'
    },
    {
      id: 'm3',
      subject: 'maths',
      text: 'What is 3/4 of 240?',
      options: ['160', '180', '210', '320'],
      correctAnswer: '180',
      explanation: '3/4 of 240 = 3 × 240 ÷ 4 = 720 ÷ 4 = 180'
    }
  ],
  english: [
    {
      id: 'e1',
      subject: 'english',
      text: 'Which of the following words is a synonym for "benevolent"?',
      options: ['Malicious', 'Kind', 'Curious', 'Bright'],
      correctAnswer: 'Kind',
      explanation: '"Benevolent" means showing kindness and good will.'
    },
    {
      id: 'e2',
      subject: 'english',
      text: 'Which word is spelt incorrectly?',
      options: ['Necessary', 'Accomodate', 'Possession', 'Disappear'],
      correctAnswer: 'Accomodate',
      explanation: 'The correct spelling is "accommodate" with two "c"s and two "m"s.'
    },
    {
      id: 'e3',
      subject: 'english',
      text: 'Complete the analogy: Book is to read as Food is to ___.',
      options: ['Cook', 'Eat', 'Recipe', 'Taste'],
      correctAnswer: 'Eat',
      explanation: 'A book is something you read; food is something you eat.'
    }
  ],
  verbal: [
    {
      id: 'v1',
      subject: 'verbal',
      text: 'If FRIEND is coded as GSJFOE, how would you code ENEMY?',
      options: ['FOFNZ', 'FMFNX', 'FOFNX', 'DPFNZ'],
      correctAnswer: 'FOFNZ',
      explanation: 'Each letter is replaced with the next letter in the alphabet. E→F, N→O, E→F, M→N, Y→Z'
    },
    {
      id: 'v2',
      subject: 'verbal',
      text: 'Choose the word that does not belong with the others:',
      options: ['Dolphin', 'Whale', 'Shark', 'Seahorse'],
      correctAnswer: 'Shark',
      explanation: 'Dolphins, whales, and seahorses are mammals, while sharks are fish.'
    },
    {
      id: 'v3',
      subject: 'verbal',
      text: 'Complete the sequence: 2, 4, 8, 16, __',
      options: ['24', '30', '32', '36'],
      correctAnswer: '32',
      explanation: 'Each number is doubled to get the next number in the sequence: 2×2=4, 4×2=8, 8×2=16, 16×2=32'
    }
  ],
  'non-verbal': [
    {
      id: 'nv1',
      subject: 'non-verbal',
      text: 'If a square is rotated 90° clockwise, which corner will the top-right corner become?',
      options: ['Top-left', 'Bottom-right', 'Bottom-left', 'It stays in the same position'],
      correctAnswer: 'Bottom-right',
      explanation: 'When rotated 90° clockwise, the top-right corner moves to the bottom-right position.'
    },
    {
      id: 'nv2',
      subject: 'non-verbal',
      text: 'Which shape comes next in the sequence: Circle, Square, Triangle, Pentagon, ?',
      options: ['Hexagon', 'Octagon', 'Rectangle', 'Circle'],
      correctAnswer: 'Hexagon',
      explanation: 'The sequence shows shapes with increasing number of sides: 0 (circle), 4 (square), 3 (triangle), 5 (pentagon), 6 (hexagon).'
    },
    {
      id: 'nv3',
      subject: 'non-verbal',
      text: 'If a paper is folded in half twice and a triangle is cut out of one corner, how many holes will be in the paper when unfolded?',
      options: ['1', '2', '3', '4'],
      correctAnswer: '4',
      explanation: 'When the paper is folded twice, cutting one corner creates 4 symmetrical cuts that become 4 holes when unfolded.'
    }
  ]
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const startQuiz = (subject: Subject) => {
    setIsLoading(true);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      setQuestions(sampleQuestions[subject]);
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
        isLoading,
        setSelectedSubject,
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
