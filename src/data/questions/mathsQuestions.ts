import { Question } from '@/types/questionTypes';

const mathsQuestions: Question[] = [
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
    id: 'm2',
    subject: 'maths',
    text: 'What is 8 × 4?',
    options: ['24', '28', '32', '36'],
    correctAnswer: '32',
    explanation: 'Multiplying 8 by 4 gives 32.',
    difficulty: 'easy'
  },
  {
    id: 'm3',
    subject: 'maths',
    text: 'What is 15 - 9?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '6',
    explanation: 'Subtracting 9 from 15 gives 6.',
    difficulty: 'easy'
  },
  {
    id: 'm4',
    subject: 'maths',
    text: 'What is 20 ÷ 5?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: 'Dividing 20 by 5 gives 4.',
    difficulty: 'easy'
  },
  {
    id: 'm5',
    subject: 'maths',
    text: 'What is the square root of 81?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '9',
    explanation: '9 × 9 = 81, so the square root of 81 is 9.',
    difficulty: 'medium'
  },
  {
    id: 'm6',
    subject: 'maths',
    text: 'What is the value of x in the equation x + 5 = 12?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '7',
    explanation: 'To solve for x, subtract 5 from both sides: x = 12 - 5 = 7.',
    difficulty: 'medium'
  },
  {
    id: 'm7',
    subject: 'maths',
    text: 'What is the area of a rectangle with length 8 cm and width 3 cm?',
    options: ['11 cm²', '16 cm²', '24 cm²', '27 cm²'],
    correctAnswer: '24 cm²',
    explanation: 'The area of a rectangle is length × width = 8 cm × 3 cm = 24 cm².',
    difficulty: 'medium'
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
    id: 'm9',
    subject: 'maths',
    text: 'Which of these fractions is equal to 0.25?',
    options: ['1/5', '1/4', '2/5', '3/10'],
    correctAnswer: '1/4',
    explanation: '1/4 = 0.25 because 1 ÷ 4 = 0.25.',
    difficulty: 'medium'
  },
  {
    id: 'm10',
    subject: 'maths',
    text: 'What is the next number in the sequence: 2, 4, 8, 16, ...?',
    options: ['24', '30', '32', '36'],
    correctAnswer: '32',
    explanation: 'Each number is multiplied by 2 to get the next number: 2×2=4, 4×2=8, 8×2=16, 16×2=32.',
    difficulty: 'medium'
  },
  {
    id: 'm11',
    subject: 'maths',
    text: 'What is the value of 3² + 4²?',
    options: ['7', '25', '49', '121'],
    correctAnswer: '25',
    explanation: '3² = 9 and 4² = 16, so 3² + 4² = 9 + 16 = 25.',
    difficulty: 'medium'
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
    id: 'm13',
    subject: 'maths',
    text: 'If a rectangle has an area of 36 cm² and a width of 4 cm, what is its length?',
    options: ['7 cm', '8 cm', '9 cm', '10 cm'],
    correctAnswer: '9 cm',
    explanation: 'Length = Area ÷ Width = 36 cm² ÷ 4 cm = 9 cm.',
    difficulty: 'medium'
  },
  {
    id: 'm14',
    subject: 'maths',
    text: 'What is the sum of the angles in a triangle?',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: '180°',
    explanation: 'The sum of the angles in any triangle is always 180 degrees.',
    difficulty: 'medium'
  },
  {
    id: 'm15',
    subject: 'maths',
    text: 'Solve for x: 3x - 7 = 20',
    options: ['7', '9', '10', '12'],
    correctAnswer: '9',
    explanation: '3x - 7 = 20, so 3x = 27, and x = 9.',
    difficulty: 'medium'
  },
  {
    id: 'm16',
    subject: 'maths',
    text: 'What is the value of 5! (5 factorial)?',
    options: ['25', '60', '120', '720'],
    correctAnswer: '120',
    explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.',
    difficulty: 'medium'
  },
  {
    id: 'm17',
    subject: 'maths',
    text: 'What is the prime factorization of 36?',
    options: ['2² × 3²', '2 × 3²', '2² × 3 × 3', '2³ × 3'],
    correctAnswer: '2² × 3²',
    explanation: '36 = 4 × 9 = 2² × 3².',
    difficulty: 'medium'
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
    id: 'm19',
    subject: 'maths',
    text: 'What is the area of a circle with radius 5 cm?',
    options: ['25π cm²', '10π cm²', '15π cm²', '20π cm²'],
    correctAnswer: '25π cm²',
    explanation: 'The area of a circle is πr², so with r = 5 cm, the area is π × 5² = 25π cm².',
    difficulty: 'medium'
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
    id: 'm21',
    subject: 'maths',
    text: 'What is the least common multiple (LCM) of 6 and 8?',
    options: ['12', '24', '36', '48'],
    correctAnswer: '24',
    explanation: 'The LCM of 6 and 8 is 24 because 24 is the smallest number that is divisible by both 6 and 8.',
    difficulty: 'medium'
  },
  {
    id: 'm22',
    subject: 'maths',
    text: 'What is the greatest common divisor (GCD) of 24 and 36?',
    options: ['6', '9', '12', '18'],
    correctAnswer: '12',
    explanation: 'The GCD of 24 and 36 is 12 because 12 is the largest number that divides both 24 and 36 without a remainder.',
    difficulty: 'medium'
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
    id: 'm24',
    subject: 'maths',
    text: 'What is the sum of the first 10 natural numbers?',
    options: ['45', '50', '55', '60'],
    correctAnswer: '55',
    explanation: 'The sum of the first 10 natural numbers is 1 + 2 + 3 + ... + 10 = 55.',
    difficulty: 'medium'
  },
  {
    id: 'm25',
    subject: 'maths',
    text: 'What is the value of 3/4 + 1/6?',
    options: ['4/10', '11/12', '5/6', '7/8'],
    correctAnswer: '11/12',
    explanation: 'To add fractions, find a common denominator: 3/4 = 9/12 and 1/6 = 2/12, so 3/4 + 1/6 = 9/12 + 2/12 = 11/12.',
    difficulty: 'medium'
  },
  {
    id: 'm26',
    subject: 'maths',
    text: 'What is the value of 2/3 × 3/4?',
    options: ['1/2', '3/7', '6/12', '1/4'],
    correctAnswer: '1/2',
    explanation: 'To multiply fractions, multiply the numerators and denominators: 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2.',
    difficulty: 'medium'
  },
  {
    id: 'm27',
    subject: 'maths',
    text: 'What is the value of 5/8 ÷ 2/3?',
    options: ['5/16', '15/16', '3/4', '25/16'],
    correctAnswer: '15/16',
    explanation: 'To divide fractions, multiply by the reciprocal: 5/8 ÷ 2/3 = 5/8 × 3/2 = 15/16.',
    difficulty: 'hard'
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
    id: 'm29',
    subject: 'maths',
    text: 'What is the value of 0.125 as a fraction in its simplest form?',
    options: ['1/4', '1/8', '1/16', '1/32'],
    correctAnswer: '1/8',
    explanation: '0.125 = 125/1000 = 1/8 in its simplest form.',
    difficulty: 'medium'
  },
  {
    id: 'm30',
    subject: 'maths',
    text: 'What is the perimeter of a regular hexagon with sides of length 4 cm?',
    options: ['20 cm', '24 cm', '28 cm', '32 cm'],
    correctAnswer: '24 cm',
    explanation: 'The perimeter of a regular hexagon is 6 × side length = 6 × 4 cm = 24 cm.',
    difficulty: 'medium'
  },
  {
    id: 'm31',
    subject: 'maths',
    text: 'What is the volume of a cube with sides of length 3 cm?',
    options: ['9 cm³', '18 cm³', '21 cm³', '27 cm³'],
    correctAnswer: '27 cm³',
    explanation: 'The volume of a cube is side length³ = 3³ = 27 cm³.',
    difficulty: 'medium'
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
    id: 'm34',
    subject: 'maths',
    text: 'If a shirt costs $25 and is discounted by 20%, what is the sale price?',
    options: ['$15', '$18', '$20', '$22'],
    correctAnswer: '$20',
    explanation: 'A 20% discount on $25 is 0.2 × $25 = $5, so the sale price is $25 - $5 = $20.',
    difficulty: 'medium'
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
    id: 'm36',
    subject: 'maths',
    text: 'What is the value of 12 ÷ 4 + 2 × 3?',
    options: ['6', '9', '12', '15'],
    correctAnswer: '9',
    explanation: 'Following the order of operations (PEMDAS): 12 ÷ 4 + 2 × 3 = 3 + 6 = 9.',
    difficulty: 'medium'
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
    id: 'm38',
    subject: 'maths',
    text: 'What is the value of 2³ + 4²?',
    options: ['16', '20', '24', '32'],
    correctAnswer: '24',
    explanation: '2³ = 8 and 4² = 16, so 2³ + 4² = 8 + 16 = 24.',
    difficulty: 'medium'
  },
  {
    id: 'm39',
    subject: 'maths',
    text: 'What is the value of √16 + √9?',
    options: ['5', '7', '9', '25'],
    correctAnswer: '7',
    explanation: '√16 = 4 and √9 = 3, so √16 + √9 = 4 + 3 = 7.',
    difficulty: 'medium'
  },
  {
    id: 'm40',
    subject: 'maths',
    text: 'What is the value of 2 + 3 × (4 - 1)?',
    options: ['9', '11', '14', '15'],
    correctAnswer: '11',
    explanation: 'Following the order of operations (PEMDAS): 2 + 3 × (4 - 1) = 2 + 3 × 3 = 2 + 9 = 11.',
    difficulty: 'medium'
  },
  {
    id: 'm41',
    subject: 'maths',
    text: 'What is the value of 5 - 2 × 3 + 4?',
    options: ['1', '3', '5', '7'],
    correctAnswer: '3',
    explanation: 'Following the order of operations (PEMDAS): 5 - 2 × 3 + 4 = 5 - 6 + 4 = 3.',
    difficulty: 'medium'
  },
  {
    id: 'm42',
    subject: 'maths',
    text: 'What is the value of 10 - 3 × 2 + 4 ÷ 2?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '6',
    explanation: 'Following the order of operations (PEMDAS): 10 - 3 × 2 + 4 ÷ 2 = 10 - 6 + 2 = 6.',
    difficulty: 'medium'
  },
  {
    id: 'm43',
    subject: 'maths',
    text: 'What is the value of 2 × (3 + 4) - 5?',
    options: ['9', '11', '14', '16'],
    correctAnswer: '9',
    explanation: 'Following the order of operations (PEMDAS): 2 × (3 + 4) - 5 = 2 × 7 - 5 = 14 - 5 = 9.',
    difficulty: 'medium'
  },
  {
    id: 'm44',
    subject: 'maths',
    text: 'What is the value of 3² - 2²?',
    options: ['1', '5', '9', '13'],
    correctAnswer: '5',
    explanation: '3² = 9 and 2² = 4, so 3² - 2² = 9 - 4 = 5.',
    difficulty: 'medium'
  },
  {
    id: 'm45',
    subject: 'maths',
    text: 'What is the value of 4 × 3 - 2 × 5?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '2',
    explanation: 'Following the order of operations (PEMDAS): 4 × 3 - 2 × 5 = 12 - 10 = 2.',
    difficulty: 'medium'
  },
  {
    id: 'm46',
    subject: 'maths',
    text: 'What is the value of 6 ÷ 2 × 3?',
    options: ['1', '3', '9', '12'],
    correctAnswer: '9',
    explanation: 'Following the order of operations (PEMDAS), division and multiplication have the same precedence and are evaluated from left to right: 6 ÷ 2 × 3 = 3 × 3 = 9.',
    difficulty: 'medium'
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
    id: 'm48',
    subject: 'maths',
    text: 'What is the value of 8 ÷ 4 + 3 × 2?',
    options: ['5', '8', '10', '14'],
    correctAnswer: '8',
    explanation: 'Following the order of operations (PEMDAS): 8 ÷ 4 + 3 × 2 = 2 + 6 = 8.',
    difficulty: 'medium'
  },
  {
    id: 'm49',
    subject: 'maths',
    text: 'What is the value of 15 - 3 × 2 + 4?',
    options: ['13', '16', '19', '22'],
    correctAnswer: '13',
    explanation: 'Following the order of operations (PEMDAS): 15 - 3 × 2 + 4 = 15 - 6 + 4 = 13.',
    difficulty: 'medium'
  },
  {
    id: 'm50',
    subject: 'maths',
    text: 'What is the value of 2 × (10 - 3) - 4?',
    options: ['10', '12', '14', '16'],
    correctAnswer: '10',
    explanation: 'Following the order of operations (PEMDAS): 2 × (10 - 3) - 4 = 2 × 7 - 4 = 14 - 4 = 10.',
    difficulty: 'medium'
  },
  {
    id: 'm51',
    subject: 'maths',
    text: 'What is the value of 5 + 3 × 2 - 4?',
    options: ['5', '7', '9', '11'],
    correctAnswer: '7',
    explanation: 'Following the order of operations (PEMDAS): 5 + 3 × 2 - 4 = 5 + 6 - 4 = 7.',
    difficulty: 'medium'
  },
  {
    id: 'm52',
    subject: 'maths',
    text: 'What is the value of 20 ÷ 4 × 2 + 3?',
    options: ['7', '10', '13', '16'],
    correctAnswer: '13',
    explanation: 'Following the order of operations (PEMDAS): 20 ÷ 4 × 2 + 3 = 5 × 2 + 3 = 10 + 3 = 13.',
    difficulty: 'medium'
  },
  {
    id: 'm53',
    subject: 'maths',
    text: 'What is the value of 2 × 3 + 4 × 5?',
    options: ['26', '30', '34', '38'],
    correctAnswer: '26',
    explanation: 'Following the order of operations (PEMDAS): 2 × 3 + 4 × 5 = 6 + 20 = 26.',
    difficulty: 'medium'
  },
  {
    id: 'm54',
    subject: 'maths',
    text: 'What is the value of 3 × (4 + 2) - 5?',
    options: ['13', '15', '17', '19'],
    correctAnswer: '13',
    explanation: 'Following the order of operations (PEMDAS): 3 × (4 + 2) - 5 = 3 × 6 - 5 = 18 - 5 = 13.',
    difficulty: 'medium'
  },
  {
    id: 'm55',
    subject: 'maths',
    text: 'What is the value of 10 - 2 × 3 + 4?',
    options: ['8', '10', '12', '14'],
    correctAnswer: '8',
    explanation: 'Following the order of operations (PEMDAS): 10 - 2 × 3 + 4 = 10 - 6 + 4 = 8.',
    difficulty: 'medium'
  },
  {
    id: 'm56',
    subject: 'maths',
    text: 'What is the value of 2³ × 2²?',
    options: ['16', '32', '64', '128'],
    correctAnswer: '32',
    explanation: '2³ = 8 and 2² = 4, so 2³ × 2² = 8 × 4 = 32.',
    difficulty: 'medium'
  },
  {
    id: 'm57',
    subject: 'maths',
    text: 'What is the value of 3² + 4² - 5²?',
    options: ['-8', '0', '8', '16'],
    correctAnswer: '0',
    explanation: '3² = 9, 4² = 16, and 5² = 25, so 3² + 4² - 5² = 9 + 16 - 25 = 0.',
    difficulty: 'medium'
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
    id: 'm59',
    subject: 'maths',
    text: 'What is the value of 10 ÷ 2 + 3 × 4?',
    options: ['17', '20', '23', '26'],
    correctAnswer: '17',
    explanation: 'Following the order of operations (PEMDAS): 10 ÷ 2 + 3 × 4 = 5 + 12 = 17.',
    difficulty: 'medium'
  },
  {
    id: 'm60',
    subject: 'maths',
    text: 'What is the value of 2 × (3 + 4 × 2)?',
    options: ['14', '18', '22', '26'],
    correctAnswer: '22',
    explanation: 'Following the order of operations (PEMDAS): 2 × (3 + 4 × 2) = 2 × (3 + 8) = 2 × 11 = 22.',
    difficulty: 'medium'
  },
  {
    id: 'm61',
    subject: 'maths',
    text: 'What is the value of 3 × 4 - 2 × 5?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '2',
    explanation: 'Following the order of operations (PEMDAS): 3 × 4 - 2 × 5 = 12 - 10 = 2.',
    difficulty: 'medium'
  },
  {
    id: 'm62',
    subject: 'maths',
    text: 'What is the value of 20 ÷ (5 - 1)?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    explanation: 'Following the order of operations (PEMDAS): 20 ÷ (5 - 1) = 20 ÷ 4 = 5.',
    difficulty: 'medium'
  },
  {
    id: 'm63',
    subject: 'maths',
    text: 'What is the value of 2 + 3 × 4 - 5?',
    options: ['9', '11', '13', '15'],
    correctAnswer: '9',
    explanation: 'Following the order of operations (PEMDAS): 2 + 3 × 4 - 5 = 2 + 12 - 5 = 9.',
    difficulty: 'medium'
  },
  {
    id: 'm64',
    subject: 'maths',
    text: 'What is the value of 10 - 2 × (3 + 1)?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '2',
    explanation: 'Following the order of operations (PEMDAS): 10 - 2 × (3 + 1) = 10 - 2 × 4 = 10 - 8 = 2.',
    difficulty: 'medium'
  },
  {
    id: 'm65',
    subject: 'maths',
    text: 'What is the value of 3 × (2 + 4) ÷ 3?',
    options: ['4', '6', '8', '10'],
    correctAnswer: '6',
    explanation: 'Following the order of operations (PEMDAS): 3 × (2 + 4) ÷ 3 = 3 × 6 ÷ 3 = 18 ÷ 3 = 6.',
    difficulty: 'medium'
  },
  {
    id: 'm66',
    subject: 'maths',
    text: 'What is the value of 2 × 3 + 4 ÷ 2?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
    explanation: 'Following the order of operations (PEMDAS): 2 × 3 + 4 ÷ 2 = 6 + 2 = 8.',
    difficulty: 'medium'
  },
  {
    id: 'm67',
    subject: 'maths',
    text: 'What is the value of 10 - 3 × 2 + 4?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
    explanation: 'Following the order of operations (PEMDAS): 10 - 3 × 2 + 4 = 10 - 6 + 4 = 8.',
    difficulty: 'medium'
  },
  {
    id: 'm68',
    subject: 'maths',
    text: 'What is the value of 2 × (10 - 3 × 2)?',
    options: ['4', '6', '8', '10'],
    correctAnswer: '8',
    explanation: 'Following the order of operations (PEMDAS): 2 × (10 - 3 × 2) = 2 × (10 - 6) = 2 × 4 = 8.',
    difficulty: 'medium'
  },
  {
    id: 'm69',
    subject: 'maths',
    text: 'What is the value of 3 + 4 × (2 - 1)?',
    options: ['3', '5', '7', '9'],
    correctAnswer: '7',
    explanation: 'Following the order of operations (PEMDAS): 3 + 4 × (2 - 1) = 3 + 4 × 1 = 3 + 4 = 7.',
    difficulty: 'medium'
  },
  {
    id: 'm70',
    subject: 'maths',
    text: 'What is the value of 10 ÷ 2 × 5?',
    options: ['15', '20', '25', '30'],
    correctAnswer: '25',
    explanation: 'Following the order of operations (PEMDAS), division and multiplication have the same precedence and are evaluated from left to right: 10 ÷ 2 × 5 = 5 × 5 = 25.',
    difficulty: 'medium'
  },
  {
    id: 'm71',
    subject: 'maths',
    text: 'What is the value of 2 × 3 + 4 × 5?',
    options: ['26', '30', '34', '38'],
    correctAnswer: '26',
    explanation: 'Following the order of operations (PEMDAS): 2 × 3 + 4 × 5 = 6 + 20 = 26.',
    difficulty: 'medium'
  },
];

export default mathsQuestions;
