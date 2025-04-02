
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
