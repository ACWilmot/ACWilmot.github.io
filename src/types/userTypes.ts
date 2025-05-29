
export type UserRole = 'parent' | 'tutor';

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
  [key: string]: any;
}

export interface StudentProfile {
  id: string;
  tutor_id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface StudentProgress {
  id: string;
  student_profile_id: string;
  subject: string;
  progress: UserProgress;
  times_tables_progress?: TimesTableProgress[];
  created_at: string;
  updated_at: string;
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
  students?: StudentProfile[]; // For tutors
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
