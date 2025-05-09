
import easyHistoryQuestions from './easy';
import mediumHistoryQuestions from './medium';
import hardHistoryQuestions from './hard';
import { Question } from '@/types/questionTypes';

const historyQuestions: Question[] = [
  ...easyHistoryQuestions,
  ...mediumHistoryQuestions,
  ...hardHistoryQuestions,
];

export default historyQuestions;
