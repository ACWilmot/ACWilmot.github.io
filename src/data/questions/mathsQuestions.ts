
import { Question } from '@/types/questionTypes';

const mathsQuestions: Question[] = [
  {
    id: 'm1',
    subject: 'maths',
    text: 'What is 24 × 6?',
    options: ['122', '144', '124', '164'],
    correctAnswer: '144',
    explanation: '24 × 6 = 144 because 24 × 6 = (20 × 6) + (4 × 6) = 120 + 24 = 144.'
  },
  {
    id: 'm2',
    subject: 'maths',
    text: 'What is 7/8 as a decimal?',
    options: ['0.825', '0.875', '0.125', '0.75'],
    correctAnswer: '0.875',
    explanation: '7/8 = 0.875 because 7 ÷ 8 = 0.875.'
  },
  {
    id: 'm3',
    subject: 'maths',
    text: 'Which of these numbers is a prime number?',
    options: ['51', '57', '53', '55'],
    correctAnswer: '53',
    explanation: '53 is a prime number because its only factors are 1 and 53.'
  },
  {
    id: 'm4',
    subject: 'maths',
    text: 'What is the area of a rectangle with length 9cm and width 4cm?',
    options: ['36 cm²', '26 cm²', '13 cm²', '32 cm²'],
    correctAnswer: '36 cm²',
    explanation: 'The area of a rectangle is calculated using length × width, so 9cm × 4cm = 36 cm².'
  },
  {
    id: 'm5',
    subject: 'maths',
    text: 'What is the perimeter of a square with sides of 7.5cm?',
    options: ['30 cm', '22.5 cm', '15 cm', '56.25 cm'],
    correctAnswer: '30 cm',
    explanation: 'The perimeter of a square is 4 × side length, so 4 × 7.5 cm = 30 cm.'
  },
  {
    id: 'm6',
    subject: 'maths',
    text: 'If 5x + 3 = 28, what is the value of x?',
    options: ['5', '7', '4', '6'],
    correctAnswer: '5',
    explanation: '5x + 3 = 28, so 5x = 25, which means x = 5.'
  },
  {
    id: 'm7',
    subject: 'maths',
    text: 'What is 3/4 of 120?',
    options: ['90', '80', '100', '75'],
    correctAnswer: '90',
    explanation: '3/4 of 120 = 3/4 × 120 = 3 × 30 = 90.'
  },
  {
    id: 'm8',
    subject: 'maths',
    text: 'If a box contains 48 chocolates and 1/3 of them are dark chocolate, how many dark chocolates are there?',
    options: ['12', '16', '18', '24'],
    correctAnswer: '16',
    explanation: '1/3 of 48 = 48 ÷ 3 = 16 chocolates.'
  },
  {
    id: 'm9',
    subject: 'maths',
    text: 'What is the next number in this sequence: 2, 5, 11, 23, ?',
    options: ['43', '47', '35', '41'],
    correctAnswer: '47',
    explanation: 'Each number is doubled and then increased by 1: 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47.'
  },
  {
    id: 'm10',
    subject: 'maths',
    text: 'What is 15% of 80?',
    options: ['12', '20', '15', '8'],
    correctAnswer: '12',
    explanation: '15% of 80 = 0.15 × 80 = 12.'
  },
  {
    id: 'm11',
    subject: 'maths',
    text: 'Which of these fractions is equivalent to 4/6?',
    options: ['2/3', '6/8', '6/9', '3/4'],
    correctAnswer: '2/3',
    explanation: '4/6 = 2/3 when simplified (divide both numerator and denominator by 2).'
  },
  {
    id: 'm12',
    subject: 'maths',
    text: 'If a train travels at 80 km/h, how far will it travel in 3.5 hours?',
    options: ['280 km', '240 km', '300 km', '260 km'],
    correctAnswer: '280 km',
    explanation: 'Distance = speed × time, so 80 km/h × 3.5 h = 280 km.'
  }
];

export default mathsQuestions;
