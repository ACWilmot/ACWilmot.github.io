
import { Subject } from '@/context/QuizContext';

export interface Question {
  id: string;
  subject: Subject;
  text: string;
  content?: string;
  number?: number;
  options: string[] | { A: string; B: string; C: string; D: string; };
  correctAnswer: string;
  explanation: string;
  imageUrl?: string;
  optionImages?: string[];
  difficulty?: string;
}

export type SubjectQuestions = Record<string, Question[]>;

export interface AssignmentAttempt {
  id: string;
  studentId: string;
  studentName: string;
  assignmentId: string;
  completed: number;
  correct: number;
  date: string;
  totalQuestions: number;
}
