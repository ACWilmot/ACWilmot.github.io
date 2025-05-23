
import { Profile, UserRole, RegisterData } from './userTypes';
import { Question } from './questionTypes';

export interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  user: Profile | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<boolean>;
  updateProgress: (subject: string, completed: number, correct: number) => Promise<void>;
  updateTimesTablesProgress: (questions: Question[], answers: Record<string, string>) => Promise<void>;
  resetProgress: () => Promise<void>;
  resetSubjectProgress: (subject: string) => Promise<void>;
}
