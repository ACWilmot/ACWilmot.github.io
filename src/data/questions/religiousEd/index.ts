
import easyReligiousEdQuestions from './easy';
import mediumReligiousEdQuestions from './medium';
import hardReligiousEdQuestions from './hard';
import { Question } from '@/types/questionTypes';

const religiousEdQuestions: Question[] = [
  ...easyReligiousEdQuestions,
  ...mediumReligiousEdQuestions,
  ...hardReligiousEdQuestions,
];

export default religiousEdQuestions;
