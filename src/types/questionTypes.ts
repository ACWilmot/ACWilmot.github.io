
export type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

// Export the Subject type to be used in other files
export type Subject = 'maths' | 'english' | 'verbal' | 'all' | 'timesTables';

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
