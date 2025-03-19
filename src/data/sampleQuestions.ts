import { Question, Subject } from '@/context/QuizContext';

const sampleQuestions: Record<Subject, Question[]> = {
  maths: [
    {
      id: 'm1',
      subject: 'maths',
      text: 'Calculate 24 × 7 - 12 × 4',
      options: ['120', '132', '156', '168'],
      correctAnswer: '120',
      explanation: '24 × 7 = 168 and 12 × 4 = 48. 168 - 48 = 120.'
    },
    {
      id: 'm2',
      subject: 'maths',
      text: 'If a rectangle has a length of 12cm and a width of 8cm, what is its perimeter?',
      options: ['20cm', '36cm', '40cm', '96cm²'],
      correctAnswer: '40cm',
      explanation: 'Perimeter = 2(length + width) = 2(12 + 8) = 2(20) = 40cm'
    },
    {
      id: 'm3',
      subject: 'maths',
      text: 'What is 3/4 of 240?',
      options: ['160', '180', '210', '320'],
      correctAnswer: '180',
      explanation: '3/4 of 240 = 3 × 240 ÷ 4 = 720 ÷ 4 = 180'
    },
    {
      id: 'm4',
      subject: 'maths',
      text: 'Solve: 5x + 3 = 18',
      options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
      correctAnswer: 'x = 3',
      explanation: '5x + 3 = 18\n5x = 15\nx = 3'
    },
    {
      id: 'm5',
      subject: 'maths',
      text: 'If 3 apples cost 90p, how much would 7 apples cost?',
      options: ['£1.80', '£2.10', '£2.70', '£3.00'],
      correctAnswer: '£2.10',
      explanation: 'If 3 apples cost 90p, then 1 apple costs 30p. So 7 apples would cost 7 × 30p = 210p = £2.10'
    },
    {
      id: 'm6',
      subject: 'maths',
      text: 'What is the next number in the sequence: 2, 6, 18, 54, ...?',
      options: ['108', '144', '162', '216'],
      correctAnswer: '162',
      explanation: 'Each number is multiplied by 3 to get the next number: 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54, 54 × 3 = 162'
    },
    {
      id: 'm7',
      subject: 'maths',
      text: 'What is the value of 3² + 4²?',
      options: ['7²', '5²', '25', '49'],
      correctAnswer: '25',
      explanation: '3² + 4² = 9 + 16 = 25'
    },
    {
      id: 'm8',
      subject: 'maths',
      text: 'A square has a perimeter of 28cm. What is its area?',
      options: ['36cm²', '49cm²', '64cm²', '81cm²'],
      correctAnswer: '49cm²',
      explanation: 'Perimeter = 4 × side length, so 28 = 4 × side length. Side length = 7cm. Area = 7cm × 7cm = 49cm²'
    },
    {
      id: 'm9',
      subject: 'maths',
      text: 'If 8 workers can build a wall in 10 days, how long will it take 5 workers to build the same wall?',
      options: ['12 days', '14 days', '16 days', '18 days'],
      correctAnswer: '16 days',
      explanation: 'With 8 workers, it takes 10 days. With 5 workers, it will take: (8 × 10) ÷ 5 = 80 ÷ 5 = 16 days'
    },
    {
      id: 'm10',
      subject: 'maths',
      text: 'What fraction of 2 hours is 30 minutes?',
      options: ['1/2', '1/3', '1/4', '1/6'],
      correctAnswer: '1/4',
      explanation: '2 hours = 120 minutes. 30 minutes ÷ 120 minutes = 30/120 = 1/4'
    },
    {
      id: 'm11',
      subject: 'maths',
      text: 'Calculate the mean of: 12, 15, 18, 21, 24',
      options: ['15', '18', '19', '20'],
      correctAnswer: '18',
      explanation: 'Sum = 12 + 15 + 18 + 21 + 24 = 90. Mean = 90 ÷ 5 = 18'
    },
    {
      id: 'm12',
      subject: 'maths',
      text: 'A box contains 3 red balls, 2 blue balls, and a green ball. What is the probability of picking a red ball?',
      options: ['1/2', '1/3', '3/5', '1/6'],
      correctAnswer: '1/2',
      explanation: 'Total balls = 3 + 2 + 1 = 6. Probability of red ball = 3/6 = 1/2'
    },
    {
      id: 'm13',
      subject: 'maths',
      text: 'If y = 3x + 2 and x = 4, what is the value of y?',
      options: ['12', '14', '16', '18'],
      correctAnswer: '14',
      explanation: 'y = 3x + 2 = 3(4) + 2 = 12 + 2 = 14'
    },
    {
      id: 'm14',
      subject: 'maths',
      text: 'What is the value of 5³?',
      options: ['15', '75', '125', '625'],
      correctAnswer: '125',
      explanation: '5³ = 5 × 5 × 5 = 25 × 5 = 125'
    },
    {
      id: 'm15',
      subject: 'maths',
      text: 'If a regular pentagon has interior angles of 108°, what is the sum of all interior angles?',
      options: ['360°', '450°', '540°', '720°'],
      correctAnswer: '540°',
      explanation: 'For a regular pentagon with 5 sides, the sum of interior angles = (5 - 2) × 180° = 3 × 180° = 540°'
    },
    {
      id: 'm16',
      subject: 'maths',
      text: 'Express 0.375 as a fraction in its simplest form.',
      options: ['3/8', '3/10', '1/4', '3/4'],
      correctAnswer: '3/8',
      explanation: '0.375 = 375/1000 = 3/8 in its simplest form'
    },
    {
      id: 'm17',
      subject: 'maths',
      text: 'What is the HCF of 48 and 72?',
      options: ['12', '24', '36', '8'],
      correctAnswer: '24',
      explanation: 'HCF of 48 and 72 = 24'
    },
    {
      id: 'm18',
      subject: 'maths',
      text: 'What is the LCM of 6, 8, and 12?',
      options: ['12', '24', '36', '48'],
      correctAnswer: '24',
      explanation: 'LCM of 6, 8, and 12 = 24'
    },
    {
      id: 'm19',
      subject: 'maths',
      text: 'A triangle has sides of length 3cm, 4cm, and 5cm. What is its area?',
      options: ['6cm²', '7.5cm²', '9cm²', '6.5cm²'],
      correctAnswer: '6cm²',
      explanation: 'Using the formula area = (1/2) × base × height = (1/2) × 3 × 4 = 6cm²'
    },
    {
      id: 'm20',
      subject: 'maths',
      text: 'If 3x + 7 = 22, what is the value of x?',
      options: ['3', '5', '7', '9'],
      correctAnswer: '5',
      explanation: '3x + 7 = 22\n3x = 15\nx = 5'
    },
    {
      id: 'm21',
      subject: 'maths',
      text: 'What is the next prime number after 23?',
      options: ['27', '29', '31', '33'],
      correctAnswer: '29',
      explanation: 'The prime numbers after 23 are 29, 31, 37, etc. So the next prime number after 23 is 29.'
    },
    {
      id: 'm22',
      subject: 'maths',
      text: 'A car travels 240 km in 3 hours. What is its average speed?',
      options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
      correctAnswer: '80 km/h',
      explanation: 'Average speed = distance ÷ time = 240 km ÷ 3 h = 80 km/h'
    },
    {
      id: 'm23',
      subject: 'maths',
      text: 'What is 15% of 80?',
      options: ['8', '12', '15', '120'],
      correctAnswer: '12',
      explanation: '15% of 80 = 15/100 × 80 = 12'
    },
    {
      id: 'm24',
      subject: 'maths',
      text: 'If a recipe requires 250g of flour for 4 people, how much flour is needed for 10 people?',
      options: ['500g', '550g', '600g', '625g'],
      correctAnswer: '625g',
      explanation: 'For 10 people, the amount of flour = (10 ÷ 4) × 250g = 2.5 × 250g = 625g'
    },
    {
      id: 'm25',
      subject: 'maths',
      text: 'Find the average of the first 20 natural numbers.',
      options: ['10', '10.5', '20.5', '21'],
      correctAnswer: '10.5',
      explanation: 'The average of the first 20 natural numbers = (1 + 2 + 3 + ... + 20) ÷ 20 = (20 × 21 ÷ 2) ÷ 20 = 210 ÷ 20 = 10.5'
    },
    {
      id: 'm26',
      subject: 'maths',
      text: 'What is the value of 7² - 3²?',
      options: ['40', '43', '49', '58'],
      correctAnswer: '40',
      explanation: '7² - 3² = 49 - 9 = 40'
    },
    {
      id: 'm27',
      subject: 'maths',
      text: 'How many minutes are there in 2.5 hours?',
      options: ['125', '140', '150', '165'],
      correctAnswer: '150',
      explanation: 'Number of minutes = 2.5 × 60 = 150'
    },
    {
      id: 'm28',
      subject: 'maths',
      text: 'What is the value of 5 + 3 × 4 ÷ 2?',
      options: ['8', '11', '16', '19'],
      correctAnswer: '11',
      explanation: 'Following BODMAS: 5 + 3 × 4 ÷ 2 = 5 + 12 ÷ 2 = 5 + 6 = 11'
    },
    {
      id: 'm29',
      subject: 'maths',
      text: 'Which fraction is equivalent to 0.2?',
      options: ['1/4', '1/5', '2/9', '2/11'],
      correctAnswer: '1/5',
      explanation: '0.2 = 2/10 = 1/5 in its simplest form'
    },
    {
      id: 'm30',
      subject: 'maths',
      text: 'Simplify: (3 + 5) × (6 - 2)',
      options: ['26', '28', '32', '36'],
      correctAnswer: '32',
      explanation: '(3 + 5) × (6 - 2) = 8 × 4 = 32'
    },
    {
      id: 'm31',
      subject: 'maths',
      text: 'If a polygon has 7 sides, how many diagonals does it have?',
      options: ['10', '14', '21', '35'],
      correctAnswer: '14',
      explanation: 'Number of diagonals = n(n-3)/2 = 7(7-3)/2 = 7(4)/2 = 28/2 = 14'
    },
    {
      id: 'm32',
      subject: 'maths',
      text: 'What is the perimeter of a rectangle with length 9cm and width 5cm?',
      options: ['20cm', '28cm', '45cm', '50cm'],
      correctAnswer: '28cm',
      explanation: 'Perimeter = 2(length + width) = 2(9 + 5) = 2(14) = 28cm'
    },
    {
      id: 'm33',
      subject: 'maths',
      text: 'What is the sum of the first 15 even numbers?',
      options: ['210', '225', '240', '255'],
      correctAnswer: '240',
      explanation: 'The first 15 even numbers are 2, 4, 6, ..., 30. Sum = 15 × 16 = 240'
    },
    {
      id: 'm34',
      subject: 'maths',
      text: 'If a = 3 and b = 4, find the value of a² + b².',
      options: ['7', '12', '25', '49'],
      correctAnswer: '25',
      explanation: 'a² + b² = 3² + 4² = 9 + 16 = 25'
    },
    {
      id: 'm35',
      subject: 'maths',
      text: 'Express 3/5 as a percentage.',
      options: ['35%', '55%', '60%', '65%'],
      correctAnswer: '60%',
      explanation: '3/5 as a percentage = (3/5) × 100% = 60%'
    },
    {
      id: 'm36',
      subject: 'maths',
      text: 'Find the value of x in the equation: 2(x + 3) = 16.',
      options: ['5', '6.5', '7', '10'],
      correctAnswer: '5',
      explanation: '2(x + 3) = 16\nx + 3 = 8\nx = 5'
    },
    {
      id: 'm37',
      subject: 'maths',
      text: 'What is the value of 4² + 2³?',
      options: ['12', '16', '24', '32'],
      correctAnswer: '24',
      explanation: '4² + 2³ = 16 + 8 = 24'
    },
    {
      id: 'm38',
      subject: 'maths',
      text: 'A recipe calls for 3/4 cup of sugar. If you want to make 2/3 of the recipe, how much sugar do you need?',
      options: ['1/4 cup', '1/2 cup', '2/3 cup', '3/2 cup'],
      correctAnswer: '1/2 cup',
      explanation: 'Amount of sugar needed = 3/4 × 2/3 = 6/12 = 1/2 cup'
    },
    {
      id: 'm39',
      subject: 'maths',
      text: 'What is the area of a square with a side length of 7cm?',
      options: ['14cm²', '21cm²', '28cm²', '49cm²'],
      correctAnswer: '49cm²',
      explanation: 'Area of square = side length² = 7² = 49cm²'
    },
    {
      id: 'm40',
      subject: 'maths',
      text: 'Find the value of x if 3x - 5 = 10.',
      options: ['3', '5', '7', '15'],
      correctAnswer: '5',
      explanation: '3x - 5 = 10\n3x = 15\nx = 5'
    },
    {
      id: 'm41',
      subject: 'maths',
      text: 'What is the sum of angles in a hexagon?',
      options: ['360°', '540°', '720°', '900°'],
      correctAnswer: '720°',
      explanation: 'Sum of angles in a polygon = (n - 2) × 180°, where n is the number of sides. For a hexagon, n = 6, so sum = (6 - 2) × 180° = 4 × 180° = 720°'
    },
    {
      id: 'm42',
      subject: 'maths',
      text: 'A train travels at 60 km/h. How far will it travel in 2.5 hours?',
      options: ['120 km', '135 km', '150 km', '180 km'],
      correctAnswer: '150 km',
      explanation: 'Distance = speed × time = 60 km/h × 2.5 h = 150 km'
    },
    {
      id: 'm43',
      subject: 'maths',
      text: 'What is the least common multiple (LCM) of 12 and 18?',
      options: ['6', '12', '36', '72'],
      correctAnswer: '36',
      explanation: 'The LCM of 12 and 18 is 36.'
    },
    {
      id: 'm44',
      subject: 'maths',
      text: 'If a rectangle is 8cm long and has an area of 48cm², what is its width?',
      options: ['6cm', '16cm', '24cm', '32cm'],
      correctAnswer: '6cm',
      explanation: 'Area = length × width\n48 = 8 × width\nwidth = 48 ÷ 8 = 6cm'
    },
    {
      id: 'm45',
      subject: 'maths',
      text: 'What is the value of 0.8 as a fraction in its simplest form?',
      options: ['4/5', '2/3', '8/10', '4/10'],
      correctAnswer: '4/5',
      explanation: '0.8 = 8/10 = 4/5 in its simplest form'
    },
    {
      id: 'm46',
      subject: 'maths',
      text: 'Find the median of the numbers: 12, 5, 9, 7, 15.',
      options: ['5', '7', '9', '12'],
      correctAnswer: '9',
      explanation: 'When arranged in order: 5, 7, 9, 12, 15. The median is the middle value, which is 9.'
    },
    {
      id: 'm47',
      subject: 'maths',
      text: 'What is the perimeter of a regular pentagon with each side measuring 6cm?',
      options: ['25cm', '30cm', '36cm', '42cm'],
      correctAnswer: '30cm',
      explanation: 'Perimeter = 5 × 6cm = 30cm'
    },
    {
      id: 'm48',
      subject: 'maths',
      text: 'If a = 8 and b = 2, what is the value of a÷b?',
      options: ['2', '4', '8', '16'],
      correctAnswer: '4',
      explanation: 'a÷b = 8÷2 = 4'
    },
    {
      id: 'm49',
      subject: 'maths',
      text: 'A bag contains 3 red balls, 4 blue balls, and 5 green balls. What is the probability of drawing a red ball?',
      options: ['1/4', '1/3', '3/12', '1/2'],
      correctAnswer: '1/4',
      explanation: 'Probability = number of favorable outcomes ÷ total number of possible outcomes = 3 ÷ 12 = 1/4'
    },
    {
      id: 'm50',
      subject: 'maths',
      text: 'What is 20% of 150?',
      options: ['30', '50', '75', '100'],
      correctAnswer: '30',
      explanation: '20% of 150 = (20/100) × 150 = 30'
    },
    {
      id: 'm51',
      subject: 'maths',
      text: 'If the angles in a triangle are in the ratio 2:3:4, what is the measure of the largest angle?',
      options: ['40°', '60°', '80°', '100°'],
      correctAnswer: '80°',
      explanation: 'Let the angles be 2x, 3x, and 4x. Since the sum of angles in a triangle is 180°, we have 2x + 3x + 4x = 180°, which gives 9x = 180°, so x = 20°. The largest angle is 4x = 4 × 20° = 80°.'
    },
    {
      id: 'm52',
      subject: 'maths',
      text: 'What is the value of 7 + 8 ÷ 4 × 2?',
      options: ['7', '9', '11', '15'],
      correctAnswer: '11',
      explanation: 'Using BODMAS: 7 + 8 ÷ 4 × 2 = 7 + 2 × 2 = 7 + 4 = 11'
    },
    {
      id: 'm53',
      subject: 'maths',
      text: 'Find the area of a triangle with base 8cm and height 6cm.',
      options: ['24cm²', '48cm²', '14cm²', '42cm²'],
      correctAnswer: '24cm²',
      explanation: 'Area of triangle = (1/2) × base × height = (1/2) × 8 × 6 = 24cm²'
    },
    {
      id: 'm54',
      subject: 'maths',
      text: 'What is the value of 9² - 5²?',
      options: ['56', '86', '14', '106'],
      correctAnswer: '56',
      explanation: '9² - 5² = 81 - 25 = 56'
    },
    {
      id: 'm55',
      subject: 'maths',
      text: 'How many seconds are there in 3.5 minutes?',
      options: ['110', '140', '210', '240'],
      correctAnswer: '210',
      explanation: 'Number of seconds = 3.5 × 60 = 210'
    },
    {
      id: 'm56',
      subject: 'maths',
      text: 'What is the value of 6 + 4 × 5 ÷ 2?',
      options: ['16', '11', '25', '19'],
      correctAnswer: '16',
      explanation: 'Following BODMAS: 6 + 4 × 5 ÷ 2 = 6 + 20 ÷ 2 = 6 + 10 = 16'
    },
    {
      id: 'm57',
      subject: 'maths',
      text: 'Which fraction is equivalent to 0.4?',
      options: ['1/4', '2/5', '3/9', '4/11'],
      correctAnswer: '2/5',
      explanation: '0.4 = 4/10 = 2/5 in its simplest form'
    },
    {
      id: 'm58',
      subject: 'maths',
      text: 'Simplify: (4 + 6) × (7 - 3)',
      options: ['26', '40', '32', '36'],
      correctAnswer: '40',
      explanation: '(4 + 6) × (7 - 3) = 10 × 4 = 40'
    },
    {
      id: 'm59',
      subject: 'maths',
      text: 'If a polygon has 8 sides, how many diagonals does it have?',
      options: ['10', '14', '20', '35'],
      correctAnswer: '20',
      explanation: 'Number of diagonals = n(n-3)/2 = 8(8-3)/2 = 8(5)/2 = 40/2 = 20'
    },
    {
      id: 'm60',
      subject: 'maths',
      text: 'What is the perimeter of a rectangle with length 10cm and width 6cm?',
      options: ['32cm', '28cm', '45cm', '50cm'],
      correctAnswer: '32cm',
      explanation: 'Perimeter = 2(length + width) = 2(10 + 6) = 2(16) = 32cm'
    },
    {
      id: 'm61',
      subject: 'maths',
      text: 'What is the sum of the first 10 odd numbers?',
      options: ['100', '125', '144', '155'],
      correctAnswer: '100',
      explanation: 'The sum of the first n odd numbers is n². So, the sum of the first 10 odd numbers is 10² = 100.'
    },
    {
      id: 'm62',
      subject: 'maths',
      text: 'If a = 4 and b = 5, find the value of a² + b².',
      options: ['9', '12', '41', '49'],
      correctAnswer: '41',
      explanation: 'a² + b² = 4² + 5² = 16 + 25 = 41'
    },
    {
      id: 'm63',
      subject: 'maths',
      text: 'Express 4/5 as a percentage.',
      options: ['35%', '55%', '80%', '65%'],
      correctAnswer: '80%',
      explanation: '4/5 as a percentage = (4/5) × 100% = 80%'
    },
    {
      id: 'm64',
      subject: 'maths',
      text: 'Find the value of x in the equation: 3(x + 2) = 21.',
      options: ['5', '6.5', '7', '10'],
      correctAnswer: '5',
      explanation: '3(x + 2) = 21\nx + 2 = 7\nx = 5'
    },
    {
      id: 'm65',
      subject: 'maths',
      text: 'What is the value of 5² + 3³?',
      options: ['12', '16', '52', '32'],
      correctAnswer: '52',
      explanation: '5² + 3³ = 25 + 27 = 52'
    },
    {
      id: 'm66',
      subject: 'maths',
      text: 'A recipe calls for 2/3 cup of sugar. If you want to make 3/4 of the recipe, how much sugar do you need?',
      options: ['1/4 cup', '1/2 cup', '2/3 cup', '1/2 cup'],
      correctAnswer: '1/2 cup',
      explanation: 'Amount of sugar needed = 2/3 × 3/4 = 6/12 = 1/2 cup'
    },
    {
      id: 'm67',
      subject: 'maths',
      text: 'What is the area of a square with a side length of 8cm?',
      options: ['16cm²', '21cm²', '64cm²', '49cm²'],
      correctAnswer: '64cm²',
      explanation: 'Area of square = side length² = 8² = 64cm²'
    },
    {
      id: 'm68',
      subject: 'maths',
      text: 'Find the value of x if 4x - 6 = 14.',
      options: ['3', '5', '7', '15'],
      correctAnswer: '5',
      explanation: '4x - 6 = 14\n4x = 20\nx = 5'
    },
    {
      id: 'm69',
      subject: 'maths',
      text: 'What is the sum of angles in an octagon?',
      options: ['360°', '540°', '1080°', '900°'],
      correctAnswer: '1080°',
      explanation: 'Sum of angles in a polygon = (n - 2) × 180°, where n is the number of sides. For an octagon, n = 8, so sum = (8 - 2) × 180° = 6 × 180° = 1080°'
    },
    {
      id: 'm70',
      subject: 'maths',
      text: 'A train travels at 70 km/h. How far will it travel in 3.5 hours?',
      options: ['120 km', '245 km', '150 km', '180 km'],
      correctAnswer: '245 km',
      explanation: 'Distance = speed × time = 70 km/h × 3.5 h = 245 km'
    },
    {
      id: 'm71',
      subject: 'maths',
      text: 'What is the least common multiple (LCM) of 15 and 20?',
      options: ['6', '12', '60', '72'],
      correctAnswer: '60',
      explanation: 'The LCM of 15 and 20 is 60.'
    },
    {
      id: 'm72',
      subject: 'maths',
      text: 'If a rectangle is 10cm long and has an area of 60cm², what is its width?',
      options: ['6cm', '16cm', '24cm', '32cm'],
      correctAnswer: '6cm',
      explanation: 'Area = length × width\n60 = 10 × width\nwidth = 60 ÷ 10 = 6cm'
    },
    {
      id: 'm73',
      subject: 'maths',
      text: 'What is the value of 0.6 as a fraction
