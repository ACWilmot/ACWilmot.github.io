
import { Question } from '@/types/questionTypes';
import easyQuestions from './easy';
import mediumQuestions from './medium';
import hardQuestions from './hard';

const mathsQuestions: Question[] = [
  ...easyQuestions,
  ...mediumQuestions,
  ...hardQuestions
];

export default mathsQuestions;
