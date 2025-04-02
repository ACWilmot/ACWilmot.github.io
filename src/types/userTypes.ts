
export type UserRole = 'student' | 'teacher';

export interface Student {
  id: string;
  name: string;
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
