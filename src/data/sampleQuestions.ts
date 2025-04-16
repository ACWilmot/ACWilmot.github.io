
import { SubjectQuestions } from '@/types/questionTypes';
import mathsQuestions from './questions/maths';
import englishQuestions from './questions/english';
import verbalQuestions from './questions/verbal';

const sampleQuestions: SubjectQuestions = {
  'maths': mathsQuestions,
  'english': englishQuestions,
  'verbal': verbalQuestions
};

export default sampleQuestions;
