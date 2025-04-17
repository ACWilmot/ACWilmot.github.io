
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
}

// Using record/index signature to make it compatible with Json type
export interface TimesTableProgress {
  table: number;         // The times table number (1-12)
  attempts: number;      // Total attempts for this times table
  correct: number;       // Total correct answers
  recentAttempts: TimesTableAttempt[]; // Store the last 10 attempts
  [key: string]: any;    // Add index signature to make compatible with Json
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
