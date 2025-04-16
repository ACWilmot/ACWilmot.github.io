import { Question } from '@/types/questionTypes';

const easyMathQuestions: Question[] = [
  {
    id: 'm1',
    subject: 'maths',
    text: 'What is 5 + 7?',
    options: ['10', '12', '13', '15'],
    correctAnswer: '12',
    explanation: 'Adding 5 and 7 gives 12.',
    difficulty: 'easy'
  },
  {
    id: 'm8',
    subject: 'maths',
    text: 'What is the perimeter of a square with sides of length 6 cm?',
    options: ['18 cm', '24 cm', '30 cm', '36 cm'],
    correctAnswer: '24 cm',
    explanation: 'The perimeter of a square is 4 × side length = 4 × 6 cm = 24 cm.',
    difficulty: 'easy'
  },
  {
    id: 'm12',
    subject: 'maths',
    text: 'What is 1/3 of 24?',
    options: ['6', '8', '12', '16'],
    correctAnswer: '8',
    explanation: 'To find 1/3 of 24, calculate 24 ÷ 3 = 8.',
    difficulty: 'easy'
  },
  {
    id: 'm18',
    subject: 'maths',
    text: 'What is the value of π (pi) to 2 decimal places?',
    options: ['3.12', '3.14', '3.16', '3.18'],
    correctAnswer: '3.14',
    explanation: 'The value of π to 2 decimal places is 3.14.',
    difficulty: 'easy'
  },
  {
    id: 'm20',
    subject: 'maths',
    text: 'What is the value of x in the equation 2x + 3 = 7?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: '2x + 3 = 7, so 2x = 4, and x = 2.',
    difficulty: 'easy'
  },
  {
    id: 'm23',
    subject: 'maths',
    text: 'What is the value of 2³?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
    explanation: '2³ = 2 × 2 × 2 = 8.',
    difficulty: 'easy'
  },
  {
    id: 'm28',
    subject: 'maths',
    text: 'What is the value of 0.25 as a fraction in its simplest form?',
    options: ['1/4', '1/5', '2/5', '1/2'],
    correctAnswer: '1/4',
    explanation: '0.25 = 25/100 = 1/4 in its simplest form.',
    difficulty: 'easy'
  },
  {
    id: 'm32',
    subject: 'maths',
    text: 'What is the value of 20% of 80?',
    options: ['8', '16', '20', '24'],
    correctAnswer: '16',
    explanation: '20% of 80 = 0.2 × 80 = 16.',
    difficulty: 'easy'
  },
  {
    id: 'm33',
    subject: 'maths',
    text: 'What is the value of 35% of 200?',
    options: ['60', '70', '75', '80'],
    correctAnswer: '70',
    explanation: '35% of 200 = 0.35 × 200 = 70.',
    difficulty: 'easy'
  },
  {
    id: 'm35',
    subject: 'maths',
    text: 'What is the value of 3 + 4 × 2?',
    options: ['11', '14', '10', '7'],
    correctAnswer: '11',
    explanation: 'Following the order of operations (PEMDAS), multiply first: 3 + 4 × 2 = 3 + 8 = 11.',
    difficulty: 'easy'
  },
  {
    id: 'm37',
    subject: 'maths',
    text: 'What is the value of (3 + 5) × 2?',
    options: ['13', '16', '18', '20'],
    correctAnswer: '16',
    explanation: 'Following the order of operations (PEMDAS), evaluate the parentheses first: (3 + 5) × 2 = 8 × 2 = 16.',
    difficulty: 'easy'
  },
  {
    id: 'm47',
    subject: 'maths',
    text: 'What is the value of 10 - 2 × 3?',
    options: ['4', '8', '16', '24'],
    correctAnswer: '4',
    explanation: 'Following the order of operations (PEMDAS), multiply first: 10 - 2 × 3 = 10 - 6 = 4.',
    difficulty: 'easy'
  },
  {
    id: 'm58',
    subject: 'maths',
    text: 'What is the value of 2 × 3 × 4?',
    options: ['18', '24', '30', '36'],
    correctAnswer: '24',
    explanation: '2 × 3 × 4 = 6 × 4 = 24.',
    difficulty: 'easy'
  },
  {
    id: 'm66',
    subject: 'maths',
    text: 'What is the value of 2 × 3 + 4 ÷ 2?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
    explanation: 'Following the order of operations (PEMDAS): 2 × 3 + 4 ÷ 2 = 6 + 2 = 8.',
    difficulty: 'easy'
  },
  {
    id: 'm67',
    subject: 'maths',
    text: 'What is the value of 10 - 3 × 2 + 4?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
    explanation: 'Following the order of operations (PEMDAS): 10 - 3 × 2 + 4 = 10 - 6 + 4 = 8.',
    difficulty: 'easy'
  },
  {
    id: 'm69',
    subject: 'maths',
    text: 'What is the value of 3 + 4 × (2 - 1)?',
    options: ['3', '5', '7', '9'],
    correctAnswer: '7',
    explanation: 'Following the order of operations (PEMDAS): 3 + 4 × (2 - 1) = 3 + 4 × 1 = 3 + 4 = 7.',
    difficulty: 'easy'
  },
  {
    id: 'me50',
    subject: 'maths',
    text: 'What is 18 + 7?',
    options: ['23', '25', '27', '24'],
    correctAnswer: '25',
    explanation: 'Adding 18 and 7 equals 25.',
    difficulty: 'easy'
  },
  // Adding more questions to reach 50 total...
  {
    id: 'me51',
    subject: 'maths',
    text: 'What is 11 + 9?',
    options: ['18', '20', '22', '19'],
    correctAnswer: '20',
    explanation: 'Adding 11 and 9 equals 20.',
    difficulty: 'easy'
  },
  {
    id: 'me52',
    subject: 'maths',
    text: 'What is 6 × 3?',
    options: ['15', '18', '21', '24'],
    correctAnswer: '18',
    explanation: 'Multiplying 6 by 3 equals 18.',
    difficulty: 'easy'
  },
  {
    id: 'me53',
    subject: 'maths',
    text: 'What is 25 - 5?',
    options: ['15', '20', '25', '30'],
    correctAnswer: '20',
    explanation: 'Subtracting 5 from 25 equals 20.',
    difficulty: 'easy'
  },
  {
    id: 'me54',
    subject: 'maths',
    text: 'What is 30 ÷ 6?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    explanation: 'Dividing 30 by 6 equals 5.',
    difficulty: 'easy'
  },
  {
    id: 'me55',
    subject: 'maths',
    text: 'What is 9 + 6?',
    options: ['12', '15', '18', '21'],
    correctAnswer: '15',
    explanation: 'Adding 9 and 6 equals 15.',
    difficulty: 'easy'
  },
  {
    id: 'me56',
    subject: 'maths',
    text: 'What is 7 × 4?',
    options: ['24', '28', '32', '36'],
    correctAnswer: '28',
    explanation: 'Multiplying 7 by 4 equals 28.',
    difficulty: 'easy'
  },
  {
    id: 'me57',
    subject: 'maths',
    text: 'What is 16 - 8?',
    options: ['4', '6', '8', '10'],
    correctAnswer: '8',
    explanation: 'Subtracting 8 from 16 equals 8.',
    difficulty: 'easy'
  },
  {
    id: 'me58',
    subject: 'maths',
    text: 'What is 40 ÷ 5?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: 'Dividing 40 by 5 equals 8.',
    difficulty: 'easy'
  },
  {
    id: 'me59',
    subject: 'maths',
    text: 'What is 13 + 7?',
    options: ['18', '20', '22', '24'],
    correctAnswer: '20',
    explanation: 'Adding 13 and 7 equals 20.',
    difficulty: 'easy'
  },
  {
    id: 'me60',
    subject: 'maths',
    text: 'What is 9 × 3?',
    options: ['21', '24', '27', '30'],
    correctAnswer: '27',
    explanation: 'Multiplying 9 by 3 equals 27.',
    difficulty: 'easy'
  },
    {
    id: 'me61',
    subject: 'maths',
    text: 'What is 14 - 6?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
    explanation: 'Subtracting 6 from 14 equals 8.',
    difficulty: 'easy'
  },
  {
    id: 'me62',
    subject: 'maths',
    text: 'What is 45 ÷ 9?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'Dividing 45 by 9 equals 5.',
    difficulty: 'easy'
  },
  {
    id: 'me63',
    subject: 'maths',
    text: 'What is 15 + 8?',
    options: ['21', '23', '25', '27'],
    correctAnswer: '23',
    explanation: 'Adding 15 and 8 equals 23.',
    difficulty: 'easy'
  },
  {
    id: 'me64',
    subject: 'maths',
    text: 'What is 6 × 6?',
    options: ['30', '36', '42', '48'],
    correctAnswer: '36',
    explanation: 'Multiplying 6 by 6 equals 36.',
    difficulty: 'easy'
  },
  {
    id: 'me65',
    subject: 'maths',
    text: 'What is 22 - 7?',
    options: ['13', '15', '17', '19'],
    correctAnswer: '15',
    explanation: 'Subtracting 7 from 22 equals 15.',
    difficulty: 'easy'
  },
  {
    id: 'me66',
    subject: 'maths',
    text: 'What is 50 ÷ 10?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'Dividing 50 by 10 equals 5.',
    difficulty: 'easy'
  },
  {
    id: 'me67',
    subject: 'maths',
    text: 'What is 17 + 5?',
    options: ['18', '20', '22', '24'],
    correctAnswer: '22',
    explanation: 'Adding 17 and 5 equals 22.',
    difficulty: 'easy'
  },
  {
    id: 'me68',
    subject: 'maths',
    text: 'What is 8 × 5?',
    options: ['30', '35', '40', '45'],
    correctAnswer: '40',
    explanation: 'Multiplying 8 by 5 equals 40.',
    difficulty: 'easy'
  },
  {
    id: 'me69',
    subject: 'maths',
    text: 'What is 28 - 9?',
    options: ['15', '17', '19', '21'],
    correctAnswer: '19',
    explanation: 'Subtracting 9 from 28 equals 19.',
    difficulty: 'easy'
  },
  {
    id: 'me70',
    subject: 'maths',
    text: 'What is 54 ÷ 6?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '9',
    explanation: 'Dividing 54 by 6 equals 9.',
    difficulty: 'easy'
  },
  {
    id: 'me71',
    subject: 'maths',
    text: 'What is 23 + 4?',
    options: ['25', '27', '29', '27'],
    correctAnswer: '27',
    explanation: 'Adding 23 and 4 equals 27.',
    difficulty: 'easy'
  },
  {
    id: 'me72',
    subject: 'maths',
    text: 'What is 7 × 7?',
    options: ['42', '49', '56', '63'],
    correctAnswer: '49',
    explanation: 'Multiplying 7 by 7 equals 49.',
    difficulty: 'easy'
  },
  {
    id: 'me73',
    subject: 'maths',
    text: 'What is 31 - 2?',
    options: ['25', '27', '29', '29'],
    correctAnswer: '29',
    explanation: 'Subtracting 2 from 31 equals 29.',
    difficulty: 'easy'
  },
  {
    id: 'me74',
    subject: 'maths',
    text: 'What is 60 ÷ 12?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'Dividing 60 by 12 equals 5.',
    difficulty: 'easy'
  },
  {
    id: 'me75',
    subject: 'maths',
    text: 'What is 19 + 3?',
    options: ['20', '22', '22', '24'],
    correctAnswer: '22',
    explanation: 'Adding 19 and 3 equals 22.',
    difficulty: 'easy'
  },
  {
    id: 'me76',
    subject: 'maths',
    text: 'What is 9 × 4?',
    options: ['32', '36', '40', '44'],
    correctAnswer: '36',
    explanation: 'Multiplying 9 by 4 equals 36.',
    difficulty: 'easy'
  },
  {
    id: 'me77',
    subject: 'maths',
    text: 'What is 26 - 8?',
    options: ['14', '16', '18', '20'],
    correctAnswer: '18',
    explanation: 'Subtracting 8 from 26 equals 18.',
    difficulty: 'easy'
  },
  {
    id: 'me78',
    subject: 'maths',
    text: 'What is 72 ÷ 8?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '9',
    explanation: 'Dividing 72 by 8 equals 9.',
    difficulty: 'easy'
  },
  {
    id: 'me79',
    subject: 'maths',
    text: 'What is 21 + 9?',
    options: ['24', '27', '30', '33'],
    correctAnswer: '30',
    explanation: 'Adding 21 and 9 equals 30.',
    difficulty: 'easy'
  },
  {
    id: 'me80',
    subject: 'maths',
    text: 'What is 5 × 9?',
    options: ['36', '40', '45', '50'],
    correctAnswer: '45',
    explanation: 'Multiplying 5 by 9 equals 45.',
    difficulty: 'easy'
  },
  {
    id: 'me81',
    subject: 'maths',
    text: 'What is 30 - 11?',
    options: ['15', '17', '19', '19'],
    correctAnswer: '19',
    explanation: 'Subtracting 11 from 30 equals 19.',
    difficulty: 'easy'
  },
  {
    id: 'me82',
    subject: 'maths',
    text: 'What is 80 ÷ 10?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: 'Dividing 80 by 10 equals 8.',
    difficulty: 'easy'
  },
  {
    id: 'me83',
    subject: 'maths',
    text: 'What is 25 + 5?',
    options: ['26', '28', '30', '30'],
    correctAnswer: '30',
    explanation: 'Adding 25 and 5 equals 30.',
    difficulty: 'easy'
  },
  {
    id: 'me84',
    subject: 'maths',
    text: 'What is 6 × 8?',
    options: ['42', '48', '54', '60'],
    correctAnswer: '48',
    explanation: 'Multiplying 6 by 8 equals 48.',
    difficulty: 'easy'
  },
  {
    id: 'me85',
    subject: 'maths',
    text: 'What is 35 - 10?',
    options: ['21', '23', '25', '25'],
    correctAnswer: '25',
    explanation: 'Subtracting 10 from 35 equals 25.',
    difficulty: 'easy'
  },
  {
    id: 'me86',
    subject: 'maths',
    text: 'What is 96 ÷ 12?',
    options: ['6', '7', '8', '8'],
    correctAnswer: '8',
    explanation: 'Dividing 96 by 12 equals 8.',
    difficulty: 'easy'
  },
  {
    id: 'me87',
    subject: 'maths',
    text: 'What is 27 + 3?',
    options: ['28', '29', '30', '30'],
    correctAnswer: '30',
    explanation: 'Adding 27 and 3 equals 30.',
    difficulty: 'easy'
  },
  {
    id: 'me88',
    subject: 'maths',
    text: 'What is 7 × 6?',
    options: ['36', '42', '48', '54'],
    correctAnswer: '42',
    explanation: 'Multiplying 7 by 6 equals 42.',
    difficulty: 'easy'
  },
  {
    id: 'me89',
    subject: 'maths',
    text: 'What is 40 - 15?',
    options: ['21', '23', '25', '25'],
    correctAnswer: '25',
    explanation: 'Subtracting 15 from 40 equals 25.',
    difficulty: 'easy'
  },
  {
    id: 'me90',
    subject: 'maths',
    text: 'What is 100 ÷ 20?',
    options: ['3', '4', '5', '5'],
    correctAnswer: '5',
    explanation: 'Dividing 100 by 20 equals 5.',
    difficulty: 'easy'
  },
];

export default easyMathQuestions;
