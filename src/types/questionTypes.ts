
import { Subject } from '@/context/QuizContext';

export interface Question {
  id: string;
  subject: Subject;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  imageUrl?: string;
  optionImages?: string[];
}

export type SubjectQuestions = Record<Subject, Question[]>;
