
import { SubjectQuestions } from '@/types/questionTypes';
import mathsQuestions from './questions/mathsQuestions';
import englishQuestions from './questions/englishQuestions';
import verbalQuestions from './questions/verbalQuestions';

const sampleQuestions: SubjectQuestions = {
  'maths': mathsQuestions,
  'english': englishQuestions,
  'verbal': verbalQuestions
};

export default sampleQuestions;
