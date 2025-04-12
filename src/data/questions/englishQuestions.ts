
import { Question } from '@/types/questionTypes';
import easyQuestions from './english/easyQuestions';
import mediumQuestions from './english/mediumQuestions';
import hardQuestions from './english/hardQuestions';

// Combine all questions from different difficulty levels
const englishQuestions: Question[] = [
  ...easyQuestions,
  ...mediumQuestions,
  ...hardQuestions
];

export default englishQuestions;
