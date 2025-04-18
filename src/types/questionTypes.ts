
import { Subject } from '@/context/QuizContext';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

export interface Question {
  id: string;
  subject: Subject;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: Difficulty;
  imageUrl?: string;
  optionImages?: string[];
  timesTable?: number; // Add times table identifier
}

export type SubjectQuestions = Record<Subject, Question[]>;
