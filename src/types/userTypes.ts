
export type UserRole = 'parent';

export type UserProgress = {
  completed: number;
  correct: number;
  lastAttempted: string | null;
};

export interface TimesTableAttempt {
  correct: boolean;
  timestamp: string;
  answerTime?: number; // Time taken to answer in milliseconds
  [key: string]: any;
}

// Using record/index signature to make it compatible with Json type
export interface TimesTableProgress {
  table: number;
  attempts: number;
  correct: number;
  recentAttempts: {
    correct: boolean;
    timestamp: string;
    answerTime?: number;
  }[];
  averageTime?: number;
  [key: string]: any;
}

export interface Profile {
  id: string;
  name: string;
  email?: string;
  role: UserRole;
  progress: {
    [subject: string]: UserProgress
  };
  timesTablesProgress?: TimesTableProgress[];
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
