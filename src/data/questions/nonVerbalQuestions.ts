
import { Question } from '@/types/questionTypes';

const nonVerbalQuestions: Question[] = [
  // Non-verbal questions would go here - for now I'll add a placeholder
  {
    id: 'nv1',
    subject: 'non-verbal',
    text: 'Which shape comes next in the sequence?',
    options: ['Circle', 'Square', 'Triangle', 'Pentagon'],
    correctAnswer: 'Triangle',
    explanation: 'The pattern alternates between circle, square, and triangle.'
  }
];

export default nonVerbalQuestions;
