
import { SubjectQuestions } from '@/types/questionTypes';
import mathsQuestions from './questions/maths';
import englishQuestions from './questions/english';
import verbalQuestions from './questions/verbal';

const sampleQuestions: SubjectQuestions = {
  maths: mathsQuestions,
  english: englishQuestions,
  verbal: verbalQuestions,
  science: [], // Added empty array for science
  timesTables: [], // This will be generated dynamically
};

export default sampleQuestions;
