
import { SubjectQuestions, Subject } from '@/types/questionTypes';
import mathsQuestions from './questions/maths';
import englishQuestions from './questions/english';
import verbalQuestions from './questions/verbal';
import historyQuestions from './questions/history';
import geographyQuestions from './questions/geography';
import religiousEdQuestions from './questions/religiousEd';

const sampleQuestions: SubjectQuestions = {
  maths: mathsQuestions,
  english: englishQuestions,
  verbal: verbalQuestions,
  history: historyQuestions,
  geography: geographyQuestions,
  religiousEd: religiousEdQuestions,
  all: [], // This will be populated dynamically when 'all' is selected
  timesTables: [], // This will be generated dynamically
};

export default sampleQuestions;

// Helper function to get questions for a specific subject
export const getQuestionsForSubject = (subject: Subject) => {
  return sampleQuestions[subject] || [];
};
