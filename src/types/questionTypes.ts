
export type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

// Export the Subject type to be used in other files
export type Subject = 'maths' | 'english' | 'verbal' | 'all' | 'timesTables' | 'history' | 'geography' | 'religiousEd';

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
  year?: number; // Add year level identifier
}

export type SubjectQuestions = Record<Subject, Question[]>;
