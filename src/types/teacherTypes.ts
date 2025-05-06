
import { Profile } from './userTypes';

export interface Class {
  id: string;
  name: string;
  description: string | null;
  teacher_id: string;
  class_code: string;
  created_at: string;
}

export interface ClassEnrollment {
  id: string;
  class_id: string;
  student_id: string;
  enrolled_at: string;
}

export interface HomeworkAssignment {
  id: string;
  class_id: string;
  title: string;
  description: string | null;
  subject: string;
  difficulty: string;
  question_count: number;
  assigned_at: string;
  due_date: string | null;
}

export interface HomeworkAttempt {
  id: string;
  homework_id: string;
  student_id: string;
  completed: boolean;
  score: number | null;
  correct_answers: number | null;
  started_at: string | null;
  completed_at: string | null;
  reset_at: string | null;
  answers: Record<string, string> | null;
}

export interface StudentWithProgress extends Profile {
  enrollment_id: string;
  enrolled_at: string;
}

export interface HomeworkWithAttempts extends HomeworkAssignment {
  attempts: HomeworkAttempt[];
  completion_rate: number;
  average_score: number | null;
}

export interface ClassWithStudentCount extends Class {
  student_count: number;
}
