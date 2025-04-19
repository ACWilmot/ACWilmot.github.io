
export type UserRole = 'student' | 'teacher';

export interface Student {
  id: string;
  name: string;
  email?: string; // Keep this optional in the interface for frontend use
  progress: {
    [subject: string]: {
      completed: number;
      correct: number;
      lastAttempted: string | null;
    }
  };
}

export interface Class {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  teacher_id: string;
}

export interface ClassWithStudentCount extends Class {
  student_count: number;
}

export interface ClassEnrollment {
  id: string;
  class_id: string;
  student_id: string;
  enrolled_at: string;
}

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
  recentAttempts: TimesTableAttempt[];
  averageTime: number; // Changed from optional to required with default 0
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
  students?: string[];
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  teacherEmail?: string;
}
