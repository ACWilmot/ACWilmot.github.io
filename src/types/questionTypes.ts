
import { Subject } from '@/context/QuizContext';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  subject: Subject;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: Difficulty | 'all'; // Updated to allow 'all' as a difficulty
  imageUrl?: string;
  optionImages?: string[];
}

export type SubjectQuestions = Record<Subject, Question[]>;
