
import { Subject } from '@/context/QuizContext';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  subject: Subject;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: Difficulty | 'all';
  imageUrl?: string;
  optionImages?: string[];
}

export type SubjectQuestions = Record<Subject, Question[]>;
