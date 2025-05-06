
export type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

export type Subject = 'maths' | 'english' | 'science' | 'verbal' | 'timesTables' | 'all';

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

export type SubjectQuestions = Record<Exclude<Subject, 'all'>, Question[]>;
