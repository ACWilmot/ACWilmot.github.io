
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
  student_count?: number;
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

export interface Profile {
  id: string;
  name: string;
  email?: string; // Keep this optional in the interface for frontend use
  role: UserRole;
  progress: {
    [subject: string]: UserProgress
  };
  students?: string[];
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  teacherEmail?: string;
}
