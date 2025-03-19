
import { SubjectQuestions } from '@/types/questionTypes';
import mathsQuestions from './questions/mathsQuestions';
import englishQuestions from './questions/englishQuestions';
import verbalQuestions from './questions/verbalQuestions';
import nonVerbalQuestions from './questions/nonVerbalQuestions';

const sampleQuestions: SubjectQuestions = {
  'maths': mathsQuestions,
  'english': englishQuestions,
  'verbal': verbalQuestions,
  'non-verbal': nonVerbalQuestions
};

export default sampleQuestions;
