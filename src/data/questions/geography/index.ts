
import easyGeographyQuestions from './easy';
import mediumGeographyQuestions from './medium';
import hardGeographyQuestions from './hard';
import { Question } from '@/types/questionTypes';

const geographyQuestions: Question[] = [
  ...easyGeographyQuestions,
  ...mediumGeographyQuestions,
  ...hardGeographyQuestions,
];

export default geographyQuestions;
