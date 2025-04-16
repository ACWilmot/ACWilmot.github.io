import { Question } from '@/types/questionTypes';

const hardMathQuestions: Question[] = [
  {
    id: 'mh1',
    subject: 'maths',
    text: 'Solve for x: √(x + 5) = 4',
    options: ['9', '11', '12', '13'],
    correctAnswer: '11',
    explanation: 'Square both sides to get x + 5 = 16, then subtract 5 from both sides to find x = 11.',
    difficulty: 'hard'
  },
  {
    id: 'mh2',
    subject: 'maths',
    text: 'What is the derivative of f(x) = 3x² + 2x - 1?',
    options: ['3x + 2', '6x + 2', '6x - 1', 'x³ + x² - x'],
    correctAnswer: '6x + 2',
    explanation: 'Using the power rule, the derivative of 3x² is 6x and the derivative of 2x is 2.',
    difficulty: 'hard'
  },
  {
    id: 'mh3',
    subject: 'maths',
    text: 'If log₂(x) = 5, what is the value of x?',
    options: ['10', '25', '32', '64'],
    correctAnswer: '32',
    explanation: 'log₂(x) = 5 means 2⁵ = x, so x = 32.',
    difficulty: 'hard'
  },
  {
    id: 'mh4',
    subject: 'maths',
    text: 'What is the area of an equilateral triangle with side length 4?',
    options: ['4√3', '6√2', '8', '16'],
    correctAnswer: '4√3',
    explanation: 'The area of an equilateral triangle is (side² × √3) / 4 = (4² × √3) / 4 = 4√3.',
    difficulty: 'hard'
  },
  {
    id: 'mh5',
    subject: 'maths',
    text: 'Find the limit as x approaches infinity for (2x² + 3x) / (x² + 1).',
    options: ['0', '1', '2', '∞'],
    correctAnswer: '2',
    explanation: 'Divide both numerator and denominator by x² to get (2 + 3/x) / (1 + 1/x²). As x approaches infinity, the limit is 2/1 = 2.',
    difficulty: 'hard'
  },
  {
    id: 'mh6',
    subject: 'maths',
    text: 'What is the integral of f(x) = 2x + 3 from 0 to 2?',
    options: ['4', '6', '8', '10'],
    correctAnswer: '10',
    explanation: 'The integral of 2x + 3 is x² + 3x. Evaluating from 0 to 2 gives (2² + 3×2) - (0² + 3×0) = 4 + 6 = 10.',
    difficulty: 'hard'
  },
  {
    id: 'mh7',
    subject: 'maths',
    text: 'If sin(θ) = 0.6, what is the value of cos(θ)?',
    options: ['0.4', '0.5', '0.8', '1.0'],
    correctAnswer: '0.8',
    explanation: 'Using the Pythagorean identity, sin²(θ) + cos²(θ) = 1. So cos²(θ) = 1 - 0.6² = 1 - 0.36 = 0.64. Therefore cos(θ) = √0.64 = 0.8.',
    difficulty: 'hard'
  },
  {
    id: 'mh8',
    subject: 'maths',
    text: 'What is the sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ...?',
    options: ['1', '1.5', '2', '∞'],
    correctAnswer: '2',
    explanation: 'The sum of an infinite geometric series is a / (1 - r), where a is the first term and r is the common ratio. Here, a = 1 and r = 1/2, so the sum is 1 / (1 - 1/2) = 1 / (1/2) = 2.',
    difficulty: 'hard'
  },
  {
    id: 'mh9',
    subject: 'maths',
    text: 'Solve for x: |2x - 1| = 5',
    options: ['-2, 3', '-3, 2', '-2, -3', '2, 3'],
    correctAnswer: '-2, 3',
    explanation: 'The absolute value equation splits into two cases: 2x - 1 = 5 and 2x - 1 = -5. Solving these gives x = 3 and x = -2.',
    difficulty: 'hard'
  },
  {
    id: 'mh10',
    subject: 'maths',
    text: 'What is the volume of a sphere with radius 3?',
    options: ['9π', '18π', '36π', '108π'],
    correctAnswer: '36π',
    explanation: 'The volume of a sphere is (4/3)πr³ = (4/3)π(3³) = (4/3)π(27) = 36π.',
    difficulty: 'hard'
  },
  {
    id: 'mh11',
    subject: 'maths',
    text: 'What is the area of a circle inscribed in a square with side length 6?',
    options: ['6π', '9π', '12π', '36π'],
    correctAnswer: '9π',
    explanation: 'The diameter of the inscribed circle is equal to the side length of the square, so the radius is 3. The area of the circle is πr² = π(3²) = 9π.',
    difficulty: 'hard'
  },
  {
    id: 'mh12',
    subject: 'maths',
    text: 'If f(x) = x² - 3x + 2, what is f(f(0))?',
    options: ['0', '2', '4', '6'],
    correctAnswer: '2',
    explanation: 'First, f(0) = 0² - 3(0) + 2 = 2. Then, f(f(0)) = f(2) = 2² - 3(2) + 2 = 4 - 6 + 2 = 0.',
    difficulty: 'hard'
  },
  {
    id: 'mh13',
    subject: 'maths',
    text: 'What is the determinant of the matrix [[1, 2], [3, 4]]?',
    options: ['-2', '0', '2', '10'],
    correctAnswer: '-2',
    explanation: 'The determinant of a 2x2 matrix [[a, b], [c, d]] is ad - bc = (1×4) - (2×3) = 4 - 6 = -2.',
    difficulty: 'hard'
  },
  {
    id: 'mh14',
    subject: 'maths',
    text: 'What is the surface area of a cube with side length 5?',
    options: ['25', '50', '100', '150'],
    correctAnswer: '150',
    explanation: 'The surface area of a cube is 6 × side² = 6 × 5² = 6 × 25 = 150.',
    difficulty: 'hard'
  },
  {
    id: 'mh15',
    subject: 'maths',
    text: 'If a = 2 and b = -3, what is the value of a³ - b³?',
    options: ['-19', '-1', '19', '35'],
    correctAnswer: '35',
    explanation: 'a³ = 2³ = 8 and b³ = (-3)³ = -27. So a³ - b³ = 8 - (-27) = 8 + 27 = 35.',
    difficulty: 'hard'
  },
  {
    id: 'mh16',
    subject: 'maths',
    text: 'What is the slope of the line 3x + 4y = 12?',
    options: ['-4/3', '-3/4', '3/4', '4/3'],
    correctAnswer: '-3/4',
    explanation: 'Rewrite the equation in slope-intercept form (y = mx + b): 4y = -3x + 12, so y = (-3/4)x + 3. The slope is -3/4.',
    difficulty: 'hard'
  },
  {
    id: 'mh17',
    subject: 'maths',
    text: 'What is the area of a triangle with vertices (0,0), (3,0), and (0,4)?',
    options: ['4', '6', '8', '12'],
    correctAnswer: '6',
    explanation: 'The triangle has a base of 3 and a height of 4. The area is (1/2) × base × height = (1/2) × 3 × 4 = 6.',
    difficulty: 'hard'
  },
  {
    id: 'mh18',
    subject: 'maths',
    text: 'If f(x) = x² + 1, what is the inverse function f⁻¹(x)?',
    options: ['√(x - 1)', '√(x + 1)', 'x² - 1', '1 / (x² + 1)'],
    correctAnswer: '√(x - 1)',
    explanation: 'To find the inverse, swap x and y and solve for y: x = y² + 1, so y² = x - 1, and y = √(x - 1).',
    difficulty: 'hard'
  },
  {
    id: 'mh19',
    subject: 'maths',
    text: 'What is the value of the expression: (2 + 2i)(3 - i), where i is the imaginary unit?',
    options: ['4 + 4i', '8 + 4i', '8 + 8i', '4 + 8i'],
    correctAnswer: '8 + 4i',
    explanation: '(2 + 2i)(3 - i) = 6 - 2i + 6i - 2i² = 6 + 4i + 2 = 8 + 4i.',
    difficulty: 'hard'
  },
  {
    id: 'mh20',
    subject: 'maths',
    text: 'What is the sum of the first 20 terms of the arithmetic sequence 2, 5, 8, 11, ...?',
    options: ['590', '610', '630', '650'],
    correctAnswer: '610',
    explanation: 'The sum of an arithmetic sequence is n/2 × (2a + (n - 1)d), where n is the number of terms, a is the first term, and d is the common difference. Here, n = 20, a = 2, and d = 3, so the sum is 20/2 × (2×2 + (20 - 1)×3) = 10 × (4 + 57) = 10 × 61 = 610.',
    difficulty: 'hard'
  },
  {
    id: 'mh21',
    subject: 'maths',
    text: 'What is the area of a regular hexagon with side length 2?',
    options: ['3√3', '6√3', '9√3', '12√3'],
    correctAnswer: '6√3',
    explanation: 'The area of a regular hexagon is (3√3 × side²) / 2 = (3√3 × 2²) / 2 = (3√3 × 4) / 2 = 6√3.',
    difficulty: 'hard'
  },
  {
    id: 'mh22',
    subject: 'maths',
    text: 'If f(x) = x³ - 6x² + 11x - 6, what are the roots of f(x) = 0?',
    options: ['1, 2, 3', '-1, -2, -3', '0, 1, 2', '0, -1, -2'],
    correctAnswer: '1, 2, 3',
    explanation: 'By inspection or synthetic division, the roots are 1, 2, and 3.',
    difficulty: 'hard'
  },
  {
    id: 'mh23',
    subject: 'maths',
    text: 'What is the value of the expression: sin(π/3) + cos(π/6)?',
    options: ['0', '1', '√3', '2√3'],
    correctAnswer: '√3',
    explanation: 'sin(π/3) = √3/2 and cos(π/6) = √3/2, so sin(π/3) + cos(π/6) = √3/2 + √3/2 = √3.',
    difficulty: 'hard'
  },
  {
    id: 'mh24',
    subject: 'maths',
    text: 'What is the derivative of f(x) = sin(2x)?',
    options: ['cos(2x)', '2cos(2x)', '-cos(2x)', '-2cos(2x)'],
    correctAnswer: '2cos(2x)',
    explanation: 'Using the chain rule, the derivative of sin(2x) is cos(2x) × 2 = 2cos(2x).',
    difficulty: 'hard'
  },
  {
    id: 'mh25',
    subject: 'maths',
    text: 'What is the volume of a cylinder with radius 4 and height 5?',
    options: ['20π', '40π', '80π', '100π'],
    correctAnswer: '80π',
    explanation: 'The volume of a cylinder is πr²h = π(4²)(5) = π(16)(5) = 80π.',
    difficulty: 'hard'
  },
  {
    id: 'mh26',
    subject: 'maths',
    text: 'What is the area of an ellipse with semi-major axis 5 and semi-minor axis 3?',
    options: ['8π', '15π', '25π', '30π'],
    correctAnswer: '15π',
    explanation: 'The area of an ellipse is πab, where a and b are the semi-major and semi-minor axes. Here, a = 5 and b = 3, so the area is π(5)(3) = 15π.',
    difficulty: 'hard'
  },
  {
    id: 'mh27',
    subject: 'maths',
    text: 'If f(x) = (x + 1) / (x - 1), what is f(2)?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'f(2) = (2 + 1) / (2 - 1) = 3 / 1 = 3.',
    difficulty: 'hard'
  },
  {
    id: 'mh28',
    subject: 'maths',
    text: 'What is the value of the expression: log₂(8) + log₃(9)?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'log₂(8) = 3 because 2³ = 8, and log₃(9) = 2 because 3² = 9. So log₂(8) + log₃(9) = 3 + 2 = 5.',
    difficulty: 'hard'
  },
  {
    id: 'mh29',
    subject: 'maths',
    text: 'What is the derivative of f(x) = e^(3x)?',
    options: ['e^(3x)', '3e^(3x)', 'e^(x)', '3e^(x)'],
    correctAnswer: '3e^(3x)',
    explanation: 'Using the chain rule, the derivative of e^(3x) is e^(3x) × 3 = 3e^(3x).',
    difficulty: 'hard'
  },
  {
    id: 'mh30',
    subject: 'maths',
    text: 'What is the area of a parallelogram with base 8 and height 6?',
    options: ['24', '36', '48', '56'],
    correctAnswer: '48',
    explanation: 'The area of a parallelogram is base × height = 8 × 6 = 48.',
    difficulty: 'hard'
  },
  {
    id: 'mh31',
    subject: 'maths',
    text: 'What is the value of the expression: 5! - 4!?',
    options: ['1', '24', '96', '120'],
    correctAnswer: '96',
    explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120 and 4! = 4 × 3 × 2 × 1 = 24. So 5! - 4! = 120 - 24 = 96.',
    difficulty: 'hard'
  },
  {
    id: 'mh32',
    subject: 'maths',
    text: 'What is the equation of a circle with center (2, -3) and radius 4?',
    options: ['(x - 2)² + (y + 3)² = 4', '(x + 2)² + (y - 3)² = 4', '(x - 2)² + (y + 3)² = 16', '(x + 2)² + (y - 3)² = 16'],
    correctAnswer: '(x - 2)² + (y + 3)² = 16',
    explanation: 'The equation of a circle with center (h, k) and radius r is (x - h)² + (y - k)² = r². Here, (h, k) = (2, -3) and r = 4, so the equation is (x - 2)² + (y + 3)² = 16.',
    difficulty: 'hard'
  },
  {
    id: 'mh33',
    subject: 'maths',
    text: 'What is the value of the expression: ∫(2x + 1) dx from 1 to 3?',
    options: ['4', '6', '8', '10'],
    correctAnswer: '8',
    explanation: 'The integral of 2x + 1 is x² + x. Evaluating from 1 to 3 gives (3² + 3) - (1² + 1) = (9 + 3) - (1 + 1) = 12 - 2 = 10.',
    difficulty: 'hard'
  },
  {
    id: 'mh34',
    subject: 'maths',
    text: 'What is the value of the expression: lim (x→0) sin(x) / x?',
    options: ['0', '1', '∞', 'undefined'],
    correctAnswer: '1',
    explanation: 'This is a standard limit. lim (x→0) sin(x) / x = 1.',
    difficulty: 'hard'
  },
  {
    id: 'mh35',
    subject: 'maths',
    text: 'What is the value of the expression: cos(2π/3)?',
    options: ['-1/2', '1/2', '-√3/2', '√3/2'],
    correctAnswer: '-1/2',
    explanation: 'cos(2π/3) = -1/2.',
    difficulty: 'hard'
  },
  {
    id: 'mh36',
    subject: 'maths',
    text: 'What is the value of the expression: tan(π/4)?',
    options: ['0', '1', '√3', 'undefined'],
    correctAnswer: '1',
    explanation: 'tan(π/4) = 1.',
    difficulty: 'hard'
  },
  {
    id: 'mh37',
    subject: 'maths',
    text: 'What is the value of the expression: e^(iπ)?',
    options: ['-1', '0', '1', 'i'],
    correctAnswer: '-1',
    explanation: 'By Euler\'s formula, e^(iπ) = cos(π) + i sin(π) = -1 + 0i = -1.',
    difficulty: 'hard'
  },
  {
    id: 'mh38',
    subject: 'maths',
    text: 'What is the value of the expression: d/dx (x ln(x))?',
    options: ['ln(x)', '1 + ln(x)', 'x', '1'],
    correctAnswer: '1 + ln(x)',
    explanation: 'Using the product rule, d/dx (x ln(x)) = x(1/x) + ln(x)(1) = 1 + ln(x).',
    difficulty: 'hard'
  },
  {
    id: 'mh39',
    subject: 'maths',
    text: 'What is the value of the expression: ∫ x e^(x) dx?',
    options: ['x e^(x) - e^(x) + C', 'x e^(x) + e^(x) + C', 'e^(x) + C', 'x e^(x) + C'],
    correctAnswer: 'x e^(x) - e^(x) + C',
    explanation: 'Using integration by parts, ∫ x e^(x) dx = x e^(x) - ∫ e^(x) dx = x e^(x) - e^(x) + C.',
    difficulty: 'hard'
  },
  {
    id: 'mh40',
    subject: 'maths',
    text: 'What is the value of the expression: lim (x→∞) (1 + 1/x)^x?',
    options: ['0', '1', 'e', '∞'],
    correctAnswer: 'e',
    explanation: 'This is the definition of e. lim (x→∞) (1 + 1/x)^x = e.',
    difficulty: 'hard'
  },
  {
    id: 'mh41',
    subject: 'maths',
    text: 'What is the value of the expression: ∑ (n=1 to ∞) 1/n²?',
    options: ['π²/6', 'π²/4', 'π²/3', 'π²'],
    correctAnswer: 'π²/6',
    explanation: 'This is the Basel problem. ∑ (n=1 to ∞) 1/n² = π²/6.',
    difficulty: 'hard'
  },
  {
    id: 'mh42',
    subject: 'maths',
    text: 'What is the value of the expression: d/dx (sin²(x) + cos²(x))?',
    options: ['0', '1', '2sin(x)cos(x)', '-2sin(x)cos(x)'],
    correctAnswer: '0',
    explanation: 'Since sin²(x) + cos²(x) = 1, d/dx (sin²(x) + cos²(x)) = d/dx (1) = 0.',
    difficulty: 'hard'
  },
  {
    id: 'mh43',
    subject: 'maths',
    text: 'What is the value of the expression: ∫ sin²(x) dx?',
    options: ['x/2 - sin(2x)/4 + C', 'x/2 + sin(2x)/4 + C', 'x - sin(2x)/2 + C', 'x + sin(2x)/2 + C'],
    correctAnswer: 'x/2 - sin(2x)/4 + C',
    explanation: 'Using the identity sin²(x) = (1 - cos(2x))/2, ∫ sin²(x) dx = ∫ (1 - cos(2x))/2 dx = x/2 - sin(2x)/4 + C.',
    difficulty: 'hard'
  },
  {
    id: 'mh44',
    subject: 'maths',
    text: 'What is the value of the expression: lim (x→0) (e^x - 1) / x?',
    options: ['0', '1', 'e', '∞'],
    correctAnswer: '1',
    explanation: 'This is a standard limit. lim (x→0) (e^x - 1) / x = 1.',
    difficulty: 'hard'
  },
  {
    id: 'mh45',
    subject: 'maths',
    text: 'What is the value of the expression: d/dx (tan(x))?',
    options: ['sec²(x)', 'sec(x)tan(x)', '1 + cot²(x)', 'cot²(x)'],
    correctAnswer: 'sec²(x)',
    explanation: 'd/dx (tan(x)) = sec²(x).',
    difficulty: 'hard'
  },
  {
    id: 'mh46',
    subject: 'maths',
    text: 'What is the value of the expression: ∫ sec²(x) dx?',
    options: ['tan(x) + C', 'cot(x) + C', 'sec(x)tan(x) + C', 'ln|sec(x)| + C'],
    correctAnswer: 'tan(x) + C',
    explanation: '∫ sec²(x) dx = tan(x) + C.',
    difficulty: 'hard'
  },
  {
    id: 'mh47',
    subject: 'maths',
    text: 'What is the value of the expression: lim (x→∞) x / e^x?',
    options: ['0', '1', '∞', 'undefined'],
    correctAnswer: '0',
    explanation: 'Using L\'Hôpital\'s rule, lim (x→∞) x / e^x = lim (x→∞) 1 / e^x = 0.',
    difficulty: 'hard'
  },
  {
    id: 'mh48',
    subject: 'maths',
    text: 'What is the value of the expression: d/dx (arcsin(x))?',
    options: ['1 / √(1 - x²)', '-1 / √(1 - x²)', '1 / (1 + x²)', '-1 / (1 + x²)'],
    correctAnswer: '1 / √(1 - x²)',
    explanation: 'd/dx (arcsin(x)) = 1 / √(1 - x²).',
    difficulty: 'hard'
  },
  {
    id: 'mh49',
    subject: 'maths',
    text: 'What is the value of the expression: ∫ 1 / (1 + x²) dx?',
    options: ['arctan(x) + C', 'arcsin(x) + C', 'ln|1 + x²| + C', '-arctan(x) + C'],
    correctAnswer: 'arctan(x) + C',
    explanation: '∫ 1 / (1 + x²) dx = arctan(x) + C.',
    difficulty: 'hard'
  },
  {
    id: 'mh50',
    subject: 'maths',
    text: 'If a triangle has angles of x°, 2x°, and 3x°, what is the value of x?',
    options: ['20°', '30°', '40°', '50°'],
    correctAnswer: '30°',
    explanation: 'In a triangle, angles sum to 180°. So x° + 2x° + 3x° = 180°. Therefore 6x° = 180°, and x = 30°.',
    difficulty: 'hard'
  },
  {
    id: 'mh51',
    subject: 'maths',
    text: 'What is the value of the expression: lim (x→0) (cos(x) - 1) / x?',
    options: ['0', '1', '∞', 'undefined'],
    correctAnswer: '0',
    explanation: 'Using L\'Hôpital\'s rule, lim (x→0) (cos(x) - 1) / x = lim (x→0) -sin(x) / 1 = 0.',
    difficulty: 'hard'
  },
  {
    id: 'mh52',
    subject: 'maths',
    text: 'What is the value of the expression: d/dx (arccos(x))?',
    options: ['1 / √(1 - x²)', '-1 / √(1 - x²)', '1 / (1 + x²)', '-1 / (1 + x²)'],
    correctAnswer: '-1 / √(1 - x²)',
    explanation: 'd/dx (arccos(x)) = -1 / √(1 - x²).',
    difficulty: 'hard'
  },
  {
    id: 'mh53',
    subject: 'maths',
    text: 'What is the value of the expression: ∫ 1 / √(1 - x²) dx?',
    options: ['arcsin(x) + C', 'arctan(x) + C', 'ln|1 - x²| + C', '-arcsin(x) + C'],
    correctAnswer: 'arcsin(x) + C',
    explanation: '∫ 1 / √(1 - x²) dx = arcsin(x) + C.',
    difficulty: 'hard'
  },
  {
    id: 'mh54',
    subject: 'maths',
    text: 'What is the value of the expression: lim (x→∞) ln(x) / x?',
    options: ['0', '1', '∞', 'undefined'],
    correctAnswer: '0',
    explanation: 'Using L\'Hôpital\'s rule, lim (x→∞) ln(x) / x = lim (x→∞) 1/x / 1 = 0.',
    difficulty: 'hard'
  },
  {
    id: 'mh55',
    subject: 'maths',
    text: 'What is the value of the expression: d/dx (arccot(x))?',
    options: ['1 / (1 + x²)', '-1 / (1 + x²)', '1 / √(1 - x²)', '-1 / √(1 - x²)'],
    correctAnswer: '-1 / (1 + x²)',
    explanation: 'd/dx (arccot(x)) = -1 / (1 + x²).',
    difficulty: 'hard'
  },
  {
    id: 'mh56',
    subject: 'maths',
    text: 'What is the value of the expression: ∫ 1 / (x² - 1) dx?',
    options: ['(1/2)ln|(x - 1) / (x + 1)| + C', '(1/2)ln|(x + 1) / (x - 1)| + C', 'arctan(x) + C', 'arcsin(x) + C'],
    correctAnswer: '(1/2)ln|(x - 1) / (x + 1)| + C',
    explanation: '∫ 1 / (x² - 1) dx = (1/2)ln|(x - 1) / (x + 1)| + C.',
    difficulty: 'hard'
  },
  {
    id: 'mh57',
    subject: 'maths',
    text: 'What is the value of the expression: lim (x→0) (tan(x) - x) / x³?',
    options: ['1/3', '1/2', '1', '∞'],
    correctAnswer: '1/3',
    explanation: 'Using L\'Hôpital\'s rule multiple times, lim (x→0) (tan(x) - x) / x³ = 1/3.',
    difficulty: 'hard'
  },
  {
    id: 'mh58',
    subject: 'maths',
    text: 'What is the value of the expression: d/dx (x^x)?',
    options: ['x^x', 'x^(x-1)', 'x^x (1 + ln(x))', 'x^x ln(x)'],
    correctAnswer: 'x^x (1 + ln(x))',
    explanation: 'd/dx (x^x) = x^x (1 + ln(x)).',
    difficulty: 'hard'
  },
  {
    id: 'mh59',
    subject: 'maths',
    text: 'What is the value of the expression: ∫ ln(x) dx?',
    options: ['x ln(x) - x + C', 'x ln(x) + x + C', 'ln(x) - x + C', 'ln(x) + x + C'],
    correctAnswer: 'x ln(x) - x + C',
    explanation: '∫ ln(x) dx = x ln(x) - x + C.',
    difficulty: 'hard'
  },
  {
    id: 'mh60',
    subject: 'maths',
    text: 'What is the value of the expression: lim (x→0) (1 - cos(x)) / x²?',
    options: ['0', '1/2', '1', '∞'],
    correctAnswer: '1/2',
    explanation: 'Using L\'Hôpital\'s rule, lim (x→0) (1 - cos(x)) / x² = 1/2.',
    difficulty:
