
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

export interface Teacher {
  id: string;
  name: string;
  email?: string; // Keep this optional in the interface for frontend use
  students: string[]; // Array of student IDs
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
