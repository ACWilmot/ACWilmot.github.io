
import { SubjectQuestions, Subject } from '@/types/questionTypes';
import mathsQuestions from './questions/maths';
import englishQuestions from './questions/english';
import verbalQuestions from './questions/verbal';

const sampleQuestions: SubjectQuestions = {
  maths: mathsQuestions,
  english: englishQuestions,
  verbal: verbalQuestions,
  all: [], // This will be populated dynamically when 'all' is selected
  timesTables: [], // This will be generated dynamically
};

export default sampleQuestions;

// Helper function to get questions for a specific subject
export const getQuestionsForSubject = (subject: Subject) => {
  return sampleQuestions[subject] || [];
};
