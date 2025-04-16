
import { Question } from '@/types/questionTypes';
import easyQuestions from './english/easy';
import mediumQuestions from './english/medium';
import hardQuestions from './english/hard';

// Combine all questions from different difficulty levels
const englishQuestions: Question[] = [
  ...easyQuestions,
  ...mediumQuestions,
  ...hardQuestions
];

export default englishQuestions;
