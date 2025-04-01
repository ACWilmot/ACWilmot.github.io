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
  },
  {
    id: 'm13',
    subject: 'maths',
    text: 'What is 35% of 240?',
    options: ['72', '84', '96', '120'],
    correctAnswer: '84',
    explanation: '35% of 240 = 0.35 × 240 = 84'
  },
  {
    id: 'm14',
    subject: 'maths',
    text: 'If x + 5 = 12, what is the value of x?',
    options: ['5', '7', '8', '17'],
    correctAnswer: '7',
    explanation: 'x + 5 = 12, so x = 12 - 5 = 7'
  },
  {
    id: 'm15',
    subject: 'maths',
    text: 'What is the square root of 121?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '11',
    explanation: '11 × 11 = 121, so the square root of 121 is 11.'
  },
  {
    id: 'm16',
    subject: 'maths',
    text: 'What is 4.5 + 2.8?',
    options: ['7.2', '7.3', '7.4', '7.5'],
    correctAnswer: '7.3',
    explanation: '4.5 + 2.8 = 7.3'
  },
  {
    id: 'm17',
    subject: 'maths',
    text: 'What is the value of 4³?',
    options: ['12', '16', '32', '64'],
    correctAnswer: '64',
    explanation: '4³ = 4 × 4 × 4 = 64'
  },
  {
    id: 'm18',
    subject: 'maths',
    text: 'What is the sum of angles in a triangle?',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: '180°',
    explanation: 'The sum of angles in a triangle is always 180 degrees.'
  },
  {
    id: 'm19',
    subject: 'maths',
    text: 'If a = 4 and b = 7, what is the value of a² + b²?',
    options: ['49', '65', '72', '81'],
    correctAnswer: '65',
    explanation: 'a² + b² = 4² + 7² = 16 + 49 = 65'
  },
  {
    id: 'm20',
    subject: 'maths',
    text: 'What is 12% of 250?',
    options: ['25', '30', '32', '36'],
    correctAnswer: '30',
    explanation: '12% of 250 = 0.12 × 250 = 30'
  },
  {
    id: 'm21',
    subject: 'maths',
    text: 'Convert 0.375 to a fraction in its simplest form.',
    options: ['3/8', '3/7', '1/3', '5/16'],
    correctAnswer: '3/8',
    explanation: '0.375 = 375/1000 = 3/8 when simplified.'
  },
  {
    id: 'm22',
    subject: 'maths',
    text: 'What is the perimeter of a rectangle with length 8cm and width 5cm?',
    options: ['13 cm', '26 cm', '40 cm', '30 cm'],
    correctAnswer: '26 cm',
    explanation: 'The perimeter of a rectangle is 2(length + width), so 2(8 + 5) = 2(13) = 26 cm'
  },
  {
    id: 'm23',
    subject: 'maths',
    text: 'What is the next number in the sequence 2, 6, 18, 54, ...?',
    options: ['108', '162', '216', '324'],
    correctAnswer: '162',
    explanation: 'Each number is multiplied by 3 to get the next number: 54 × 3 = 162'
  },
  {
    id: 'm24',
    subject: 'maths',
    text: 'What is the least common multiple (LCM) of 6 and 8?',
    options: ['12', '24', '48', '36'],
    correctAnswer: '24',
    explanation: 'The LCM of 6 and 8 is 24 because it is the smallest number divisible by both 6 and 8.'
  },
  {
    id: 'm25',
    subject: 'maths',
    text: 'What is 2/3 of 45?',
    options: ['28', '30', '32', '36'],
    correctAnswer: '30',
    explanation: '2/3 of 45 = 2/3 × 45 = 2 × 15 = 30'
  },
  {
    id: 'm26',
    subject: 'maths',
    text: 'What is the sum of the first 10 positive integers?',
    options: ['45', '50', '55', '60'],
    correctAnswer: '55',
    explanation: 'The sum of the first n positive integers is n(n+1)/2, so 10(10+1)/2 = 10×11/2 = 55'
  },
  {
    id: 'm27',
    subject: 'maths',
    text: 'Which of the following is not a factor of 36?',
    options: ['2', '3', '5', '9'],
    correctAnswer: '5',
    explanation: 'The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36. 5 is not a factor of 36.'
  },
  {
    id: 'm28',
    subject: 'maths',
    text: 'What is the value of 5! (5 factorial)?',
    options: ['60', '120', '24', '720'],
    correctAnswer: '120',
    explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120'
  },
  {
    id: 'm29',
    subject: 'maths',
    text: 'If a shirt costs £18 with 25% discount, what was its original price?',
    options: ['£22.50', '£24', '£25', '£27'],
    correctAnswer: '£24',
    explanation: 'If the discounted price is £18 and the discount is 25%, then the original price is £18 ÷ 0.75 = £24'
  },
  {
    id: 'm30',
    subject: 'maths',
    text: 'What is 1.5 × 2.4?',
    options: ['3.6', '3.9', '4.0', '3.3'],
    correctAnswer: '3.6',
    explanation: '1.5 × 2.4 = 3.6'
  },
  {
    id: 'm31',
    subject: 'maths',
    text: 'What is the area of a circle with radius 5 cm? (Use π = 3.14)',
    options: ['31.4 cm²', '78.5 cm²', '15.7 cm²', '157 cm²'],
    correctAnswer: '78.5 cm²',
    explanation: 'The area of a circle is πr², so π × 5² = 3.14 × 25 = 78.5 cm²'
  },
  {
    id: 'm32',
    subject: 'maths',
    text: 'What is 0.25 written as a percentage?',
    options: ['2.5%', '25%', '0.25%', '250%'],
    correctAnswer: '25%',
    explanation: '0.25 = 25/100 = 25%'
  },
  {
    id: 'm33',
    subject: 'maths',
    text: 'If 3x - 7 = 5, what is the value of x?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '4',
    explanation: '3x - 7 = 5, so 3x = 12, which means x = 4'
  },
  {
    id: 'm34',
    subject: 'maths',
    text: 'What is the greatest common divisor (GCD) of 36 and 48?',
    options: ['6', '12', '18', '24'],
    correctAnswer: '12',
    explanation: 'The GCD of 36 and 48 is 12 because it is the largest number that divides both 36 and 48 without a remainder.'
  },
  {
    id: 'm35',
    subject: 'maths',
    text: 'Simplify: 3(x + 2) - 5',
    options: ['3x + 1', '3x + 6 - 5', '3x + 1', '3x - 1'],
    correctAnswer: '3x + 1',
    explanation: '3(x + 2) - 5 = 3x + 6 - 5 = 3x + 1'
  },
  {
    id: 'm36',
    subject: 'maths',
    text: 'What is the median of the numbers 5, 8, 2, 10, 3?',
    options: ['5', '3', '8', '5.6'],
    correctAnswer: '5',
    explanation: 'First arrange the numbers in order: 2, 3, 5, 8, 10. The median is the middle value, which is 5.'
  },
  {
    id: 'm37',
    subject: 'maths',
    text: 'If y = 3x + 2 and x = 4, what is the value of y?',
    options: ['10', '12', '14', '16'],
    correctAnswer: '14',
    explanation: 'y = 3x + 2 = 3(4) + 2 = 12 + 2 = 14'
  },
  {
    id: 'm38',
    subject: 'maths',
    text: 'What is the volume of a cube with sides of 4cm?',
    options: ['16 cm³', '32 cm³', '48 cm³', '64 cm³'],
    correctAnswer: '64 cm³',
    explanation: 'The volume of a cube is side³, so 4³ = 64 cm³'
  },
  {
    id: 'm39',
    subject: 'maths',
    text: 'Express 75% as a fraction in its simplest form.',
    options: ['3/4', '7/5', '7/10', '75/100'],
    correctAnswer: '3/4',
    explanation: '75% = 75/100 = 3/4 in its simplest form'
  },
  {
    id: 'm40',
    subject: 'maths',
    text: 'If a triangle has angles of 30° and 60°, what is the measure of the third angle?',
    options: ['30°', '60°', '90°', '120°'],
    correctAnswer: '90°',
    explanation: 'The sum of angles in a triangle is 180°, so the third angle is 180° - 30° - 60° = 90°'
  },
  {
    id: 'm41',
    subject: 'maths',
    text: 'What is the value of 5² - 3²?',
    options: ['16', '25', '34', '28'],
    correctAnswer: '16',
    explanation: '5² - 3² = 25 - 9 = 16'
  },
  {
    id: 'm42',
    subject: 'maths',
    text: 'If a car travels 60 miles in 2 hours, what is its speed in miles per hour?',
    options: ['15 mph', '20 mph', '30 mph', '40 mph'],
    correctAnswer: '30 mph',
    explanation: 'Speed = distance ÷ time, so 60 miles ÷ 2 hours = 30 mph'
  },
  {
    id: 'm43',
    subject: 'maths',
    text: 'What is the value of 17 - 4 × 3?',
    options: ['5', '13', '39', '41'],
    correctAnswer: '5',
    explanation: 'Following BIDMAS/PEMDAS, multiply first: 17 - 4 × 3 = 17 - 12 = 5'
  },
  {
    id: 'm44',
    subject: 'maths',
    text: 'What is the mode of the numbers 3, 7, 5, 3, 9, 3, 8?',
    options: ['3', '5', '7', '9'],
    correctAnswer: '3',
    explanation: 'The mode is the most frequent value. In this list, 3 appears three times, more than any other number.'
  },
  {
    id: 'm45',
    subject: 'maths',
    text: 'What is the value of x if 2x + 3x = 25?',
    options: ['3', '5', '8', '10'],
    correctAnswer: '5',
    explanation: '2x + 3x = 25, so 5x = 25, which means x = 5'
  },
  {
    id: 'm46',
    subject: 'maths',
    text: 'Which of these fractions is the largest?',
    options: ['2/5', '3/8', '4/9', '5/12'],
    correctAnswer: '4/9',
    explanation: 'Converting to decimals: 2/5 = 0.4, 3/8 = 0.375, 4/9 ≈ 0.444, 5/12 ≈ 0.417. So 4/9 is the largest.'
  },
  {
    id: 'm47',
    subject: 'maths',
    text: 'What is the value of (7 + 3) × (8 - 2)?',
    options: ['36', '60', '56', '30'],
    correctAnswer: '60',
    explanation: '(7 + 3) × (8 - 2) = 10 × 6 = 60'
  },
  {
    id: 'm48',
    subject: 'maths',
    text: 'What is the mean of the numbers 12, 15, 18, 21, 24?',
    options: ['15', '17', '18', '20'],
    correctAnswer: '18',
    explanation: 'Mean = sum of values ÷ number of values = (12 + 15 + 18 + 21 + 24) ÷ 5 = 90 ÷ 5 = 18'
  },
  {
    id: 'm49',
    subject: 'maths',
    text: 'Solve for x: 4x - 3 = x + 6',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: '4x - 3 = x + 6, so 3x = 9, which means x = 3'
  },
  {
    id: 'm50',
    subject: 'maths',
    text: 'What is 20% of 350?',
    options: ['60', '70', '80', '90'],
    correctAnswer: '70',
    explanation: '20% of 350 = 0.2 × 350 = 70'
  },
  {
    id: 'm51',
    subject: 'maths',
    text: 'If 8 notebooks cost £20, how much do 5 notebooks cost?',
    options: ['£10', '£12.50', '£15', '£16'],
    correctAnswer: '£12.50',
    explanation: 'Cost per notebook = £20 ÷ 8 = £2.50. So 5 notebooks cost 5 × £2.50 = £12.50'
  },
  {
    id: 'm52',
    subject: 'maths',
    text: 'What is the circumference of a circle with diameter 7 cm? (Use π = 3.14)',
    options: ['21.98 cm', '43.96 cm', '153.86 cm', '10.99 cm'],
    correctAnswer: '21.98 cm',
    explanation: 'The circumference of a circle is πd, so 3.14 × 7 = 21.98 cm'
  },
  {
    id: 'm53',
    subject: 'maths',
    text: 'What is the reciprocal of 0.25?',
    options: ['0.25', '25', '0.04', '4'],
    correctAnswer: '4',
    explanation: 'The reciprocal of a number is 1 divided by that number. So the reciprocal of 0.25 is 1 ÷ 0.25 = 4'
  },
  {
    id: 'm54',
    subject: 'maths',
    text: 'Simplify: (3 + 4) × (8 - 5) ÷ 7',
    options: ['2', '3', '1', '7'],
    correctAnswer: '3',
    explanation: '(3 + 4) × (8 - 5) ÷ 7 = 7 × 3 ÷ 7 = 21 ÷ 7 = 3'
  },
  {
    id: 'm55',
    subject: 'maths',
    text: 'What is the value of 3⁴?',
    options: ['27', '64', '81', '243'],
    correctAnswer: '81',
    explanation: '3⁴ = 3 × 3 × 3 × 3 = 81'
  },
  {
    id: 'm56',
    subject: 'maths',
    text: 'Which of these numbers is irrational?',
    options: ['0.25', '√9', '√2', '3.14'],
    correctAnswer: '√2',
    explanation: '√2 cannot be expressed as a fraction and has a non-terminating, non-repeating decimal expansion, making it irrational.'
  },
  {
    id: 'm57',
    subject: 'maths',
    text: 'What is the area of a triangle with base 8 cm and height 6 cm?',
    options: ['24 cm²', '48 cm²', '21 cm²', '42 cm²'],
    correctAnswer: '24 cm²',
    explanation: 'The area of a triangle is (base × height) ÷ 2, so (8 × 6) ÷ 2 = 48 ÷ 2 = 24 cm²'
  },
  {
    id: 'm58',
    subject: 'maths',
    text: 'What is 3.5 × 0.6?',
    options: ['0.21', '2.1', '21', '210'],
    correctAnswer: '2.1',
    explanation: '3.5 × 0.6 = 2.1'
  },
  {
    id: 'm59',
    subject: 'maths',
    text: 'What is the value of x in the equation 5x + 10 = 3x + 18?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '4',
    explanation: '5x + 10 = 3x + 18, so 2x = 8, which means x = 4'
  },
  {
    id: 'm60',
    subject: 'maths',
    text: 'What is the next number in the sequence 1, 4, 9, 16, 25, ...?',
    options: ['30', '36', '49', '64'],
    correctAnswer: '36',
    explanation: 'This is the sequence of square numbers: 1 = 1², 4 = 2², 9 = 3², 16 = 4², 25 = 5², so the next number is 6² = 36'
  },
  {
    id: 'm61',
    subject: 'maths',
    text: 'What is 2/5 of 65?',
    options: ['13', '26', '16.25', '32.5'],
    correctAnswer: '26',
    explanation: '2/5 of 65 = 2/5 × 65 = 2 × 13 = 26'
  },
  {
    id: 'm62',
    subject: 'maths',
    text: 'A rectangle has an area of 48 cm² and a width of 6 cm. What is its length?',
    options: ['6 cm', '7 cm', '8 cm', '9 cm'],
    correctAnswer: '8 cm',
    explanation: 'Area = length × width, so length = area ÷ width = 48 cm² ÷ 6 cm = 8 cm'
  },
  {
    id: 'm63',
    subject: 'maths',
    text: 'If an item costs £80 and is discounted by 15%, what is the sale price?',
    options: ['£65', '£68', '£72', '£76'],
    correctAnswer: '£68',
    explanation: '15% of £80 = 0.15 × £80 = £12. So the sale price is £80 - £12 = £68'
  },
  {
    id: 'm64',
    subject: 'maths',
    text: 'Which of these numbers is a multiple of both 3 and 4?',
    options: ['6', '9', '12', '16'],
    correctAnswer: '12',
    explanation: '12 is divisible by both 3 (12 ÷ 3 = 4) and 4 (12 ÷ 4 = 3) without a remainder.'
  },
  {
    id: 'm65',
    subject: 'maths',
    text: 'What is the value of (5 × 10^3) × (2 × 10^2)?',
    options: ['10^5', '10^6', '10^7', '10^8'],
    correctAnswer: '10^6',
    explanation: '(5 × 10^3) × (2 × 10^2) = 5 × 2 × 10^3 × 10^2 = 10 × 10^5 = 10^6'
  },
  {
    id: 'm66',
    subject: 'maths',
    text: 'If y = 2x - 3 and x = 5, what is the value of y?',
    options: ['5', '7', '10', '13'],
    correctAnswer: '7',
    explanation: 'y = 2x - 3 = 2(5) - 3 = 10 - 3 = 7'
  },
  {
    id: 'm67',
    subject: 'maths',
    text: 'What is the probability of rolling a 6 on a fair six-sided die?',
    options: ['1/6', '1/5', '1/4', '1/3'],
    correctAnswer: '1/6',
    explanation: 'There is 1 favorable outcome (rolling a 6) out of 6 possible outcomes (rolling any number from 1 to 6), so the probability is 1/6.'
  },
  {
    id: 'm68',
    subject: 'maths',
    text: 'What is the sum of the interior angles of a quadrilateral?',
    options: ['180°', '270°', '360°', '540°'],
    correctAnswer: '360°',
    explanation: 'The sum of interior angles of a polygon with n sides is (n-2) × 180°. For a quadrilateral (n = 4), it\'s (4-2) × 180° = 2 × 180° = 360°.'
  },
  {
    id: 'm69',
    subject: 'maths',
    text: 'What is the value of 3 + 5 × 2?',
    options: ['13', '16', '11', '36'],
    correctAnswer: '13',
    explanation: 'Following BIDMAS/PEMDAS, multiply first: 3 + 5 × 2 = 3 + 10 = 13'
  },
  {
    id: 'm70',
    subject: 'maths',
    text: 'What is the value of 10 - 8 + 6 × 2?',
    options: ['16', '20', '14', '12'],
    correctAnswer: '14',
    explanation: 'Following BIDMAS/PEMDAS: 10 - 8 + 6 × 2 = 10 - 8 + 12 = 2 + 12 = 14'
  },
  {
    id: 'm71',
    subject: 'maths',
    text: 'If a = 3 and b = 2, what is the value of a² + 2ab + b²?',
    options: ['13', '17', '19', '25'],
    correctAnswer: '25',
    explanation: 'a² + 2ab + b² = 3² + 2(3)(2) + 2² = 9 + 12 + 4 = 25. This is also (a + b)² = (3 + 2)² = 5² = 25.'
  },
  {
    id: 'm72',
    subject: 'maths',
    text: 'What is the mean of the numbers 2, 4, 6, 8, 10?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'Mean = sum of values ÷ number of values = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6'
  },
  {
    id: 'm73',
    subject: 'maths',
    text: 'What is the square root of 169?',
    options: ['11', '12', '13', '14'],
    correctAnswer: '13',
    explanation: '13 × 13 = 169, so the square root of 169 is 13.'
  },
  {
    id: 'm74',
    subject: 'maths',
    text: 'What is the next number in the sequence 3, 7, 15, 31, ...?',
    options: ['45', '51', '63', '67'],
    correctAnswer: '63',
    explanation: 'Each number is doubled and then increased by 1: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63'
  },
  {
    id: 'm75',
    subject: 'maths',
    text: 'What is the value of 2⁵?',
    options: ['24', '25', '30', '32'],
    correctAnswer: '32',
    explanation: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32'
  },
  {
    id: 'm76',
    subject: 'maths',
    text: 'Which of these expressions equals 6²?',
    options: ['6 + 6', '6 × 6', '6 × 2', '6 + 6 × 5'],
    correctAnswer: '6 × 6',
    explanation: '6² = 6 × 6 = 36'
  },
  {
    id: 'm77',
    subject: 'maths',
    text: 'What is the value of 3/4 divided by 2/3?',
    options: ['9/8', '1/2', '6/7', '1/4'],
    correctAnswer: '9/8',
    explanation: 'To divide fractions, multiply by the reciprocal: 3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8'
  },
  {
    id: 'm78',
    subject: 'maths',
    text: 'If 5 people can paint a fence in 3 hours, how long would it take 3 people to paint the same fence?',
    options: ['4 hours', '5 hours', '6 hours', '7 hours'],
    correctAnswer: '5 hours',
    explanation: 'The work rate is inversely proportional to the time. If 5 people take 3 hours, then 3 people will take (5 × 3) ÷ 3 = 5 hours.'
  },
  {
    id: 'm79',
    subject: 'maths',
    text: 'What is the range of the numbers 8, 5, 12, 9, 10?',
    options: ['3', '5', '7', '12'],
    correctAnswer: '7',
    explanation: 'The range is the difference between the maximum and minimum values: 12 - 5 = 7'
  },
  {
    id: 'm80',
    subject: 'maths',
    text: 'What is the value of 0.5 × 0.02?',
    options: ['0.001', '0.01', '0.1', '1'],
    correctAnswer: '0.01',
    explanation: '0.5 × 0.02 = 0.01'
  },
  {
    id: 'm81',
    subject: 'maths',
    text: 'A car travels 216 km in 3 hours. What is its speed in km/h?',
    options: ['60 km/h', '68 km/h', '72 km/h', '80 km/h'],
    correctAnswer: '72 km/h',
    explanation: 'Speed = distance ÷ time = 216 km ÷ 3 hours = 72 km/h'
  },
  {
    id: 'm82',
    subject: 'maths',
    text: 'What is the value of 3/5 + 1/4?',
    options: ['4/9', '17/20', '9/20', '3/1'],
    correctAnswer: '17/20',
    explanation: 'To add fractions with different denominators, find a common denominator: 3/5 + 1/4 = 12/20 + 5/20 = 17/20'
  },
  {
    id: 'm83',
    subject: 'maths',
    text: 'Solve for x: 2x/3 = 8',
    options: ['9', '10', '12', '18'],
    correctAnswer: '12',
    explanation: '2x/3 = 8, so 2x = 24, which means x = 12'
  },
  {
    id: 'm84',
    subject: 'maths',
    text: 'If a square has a perimeter of 20 cm, what is its area?',
    options: ['16 cm²', '25 cm²', '36 cm²', '100 cm²'],
    correctAnswer: '25 cm²',
    explanation: 'The perimeter of a square is 4 × side length. So side length = 20 cm ÷ 4 = 5 cm. The area is then 5 cm × 5 cm = 25 cm².'
  },
  {
    id: 'm85',
    subject: 'maths',
    text: 'Which is greater, 0.72 or 7/10?',
    options: ['0.72', '7/10', 'They are equal', 'Cannot be determined'],
    correctAnswer: '0.72',
    explanation: '7/10 = 0.7, and 0.72 > 0.7, so 0.72 is greater.'
  },
  {
    id: 'm86',
    subject: 'maths',
    text: 'What is the sum of the first 5 even numbers?',
    options: ['20', '30', '25', '15'],
    correctAnswer: '30',
    explanation: 'The first 5 even numbers are 2, 4, 6, 8, and 10. Their sum is 2 + 4 + 6 + 8 + 10 = 30.'
  },
  {
    id: 'm87',
    subject: 'maths',
    text: 'What is the value of 5/8 of 64?',
    options: ['30', '35', '40', '45'],
    correctAnswer: '40',
    explanation: '5/8 of 64 = 5/8 × 64 = 5 × 8 = 40'
  },
  {
    id: 'm88',
    subject: 'maths',
    text: 'What is the value of √81?',
    options: ['9', '27', '3', '81'],
    correctAnswer: '9',
    explanation: '9² = 81, so √81 = 9'
  },
  {
    id: 'm89',
    subject: 'maths',
    text: 'Simplify: (2x + 3)(x - 2)',
    options: ['2x² - x - 6', '2x² - x + 6', '2x² - 4x - 6', '2x² - x - 3'],
    correctAnswer: '2x² - x - 6',
    explanation: '(2x + 3)(x - 2) = 2x² - 4x + 3x - 6 = 2x² - x - 6'
  },
  {
    id: 'm90',
    subject: 'maths',
    text: 'A box contains 5 red balls and 3 blue balls. If a ball is picked at random, what is the probability of picking a red ball?',
    options: ['5/8', '3/8', '5/3', '3/5'],
    correctAnswer: '5/8',
    explanation: 'There are 5 favorable outcomes (red balls) out of 8 possible outcomes (total balls), so the probability is 5/8.'
  },
  {
    id: 'm91',
    subject: 'maths',
    text: 'What is the value of 42 ÷ 6 + 3 × 4?',
    options: ['19', '21', '28', '42'],
    correctAnswer: '19',
    explanation: 'Following BIDMAS/PEMDAS: 42 ÷ 6 + 3 × 4 = 7 + 12 = 19'
  },
  {
    id: 'm92',
    subject: 'maths',
    text: 'If 3x + 4y = 10 and y = 1, what is the value of x?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: '3x + 4y = 10 and y = 1, so 3x + 4(1) = 10, which means 3x + 4 = 10, so 3x = 6, which means x = 2'
  },
  {
    id: 'm93',
    subject: 'maths',
    text: 'What is the area of a trapezium with parallel sides of lengths 8 cm and 12 cm, and a height of 5 cm?',
    options: ['40 cm²', '50 cm²', '60 cm²', '100 cm²'],
    correctAnswer: '50 cm²',
    explanation: 'The area of a trapezium is 1/2 × (sum of parallel sides) × height, so 1/2 × (8 + 12) × 5 = 1/2 × 20 × 5 = 50 cm²'
  },
  {
    id: 'm94',
    subject: 'maths',
    text: 'What is the value of 2.3 × 10²?',
    options: ['23', '230', '2,300', '0.023'],
    correctAnswer: '230',
    explanation: '2.3 × 10² = 2.3 × 100 = 230'
  },
  {
    id: 'm95',
    subject: 'maths',
    text: 'If a = 5 and b = -3, what is the value of a² - b²?',
    options: ['16', '24', '25', '34'],
    correctAnswer: '16',
    explanation: 'a² - b² = 5² - (-3)² = 25 - 9 = 16'
  },
  {
    id: 'm96',
    subject: 'maths',
    text: 'What is the result of 3 - 8 + 6?',
    options: ['-11', '1', '-5', '11'],
    correctAnswer: '1',
    explanation: '3 - 8 + 6 = -5 + 6 = 1'
  },
  {
    id: 'm97',
    subject: 'maths',
    text: 'If 4x = 3y and y = 8, what is the value of x?',
    options: ['6', '9', '10', '12'],
    correctAnswer: '6',
    explanation: '4x = 3y and y = 8, so 4x = 3(8) = 24, which means x = 6'
  },
  {
    id: 'm98',
    subject: 'maths',
    text: 'What is the value of (1/2)³?',
    options: ['1/6', '1/8', '3/8', '1/4'],
    correctAnswer: '1/8',
    explanation: '(1/2)³ = 1/2 × 1/2 × 1/2 = 1/8'
  },
  {
    id: 'm99',
    subject: 'maths',
    text: 'Which of these is equivalent to 0.36?',
    options: ['36/10', '36/100', '9/25', '9/10'],
    correctAnswer: '36/100',
    explanation: '0.36 = 36/100'
  },
  {
    id: 'm100',
    subject: 'maths',
    text: 'What is the sum of 3.7, 2.85, and 4.1?',
    options: ['10.65', '10.55', '10.75', '11.05'],
    correctAnswer: '10.65',
    explanation: '3.7 + 2.85 + 4.1 = 10.65'
  }
];

export default mathsQuestions;
