
import { Question } from '@/types/questionTypes';

const verbalQuestions: Question[] = [
  // Verbal questions would go here - for now I'll add a placeholder
  {
    id: 'v1',
    subject: 'verbal',
    text: 'Choose the word that is most similar in meaning to "benevolent".',
    options: ['kind', 'strict', 'angry', 'confused'],
    correctAnswer: 'kind',
    explanation: 'Benevolent means kind or well-meaning.'
  }
];

export default verbalQuestions;
