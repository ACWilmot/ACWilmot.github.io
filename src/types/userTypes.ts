
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
    answerTime?: number; // Added this property to match usage
  }[];
  averageTime?: number; // Added this property to match usage
  [key: string]: any;
}

export interface Profile {
  id: string;
  name: string;
  email?: string; // Keep this optional in the interface for frontend use
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
