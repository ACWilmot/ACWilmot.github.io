
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Subject = 'maths' | 'english' | 'verbal' | 'non-verbal';

export interface Question {
  id: string;
  subject: Subject;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  userAnswers: Record<string, string>;
  selectedSubject: Subject | null;
  isLoading: boolean;
  setSelectedSubject: (subject: Subject | null) => void;
  startQuiz: (subject: Subject) => void;
  answerQuestion: (questionId: string, answer: string) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  resetQuiz: () => void;
  getResults: () => {
    score: number;
    totalQuestions: number;
    percentage: number;
    answeredQuestions: number;
  };
}

// Sample questions for each subject
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
    }
  ],
  english: [
    {
      id: 'e1',
      subject: 'english',
      text: 'Which of the following words is a synonym for "benevolent"?',
      options: ['Malicious', 'Kind', 'Curious', 'Bright'],
      correctAnswer: 'Kind',
      explanation: '"Benevolent" means showing kindness and good will.'
    },
    {
      id: 'e2',
      subject: 'english',
      text: 'Which word is spelt incorrectly?',
      options: ['Necessary', 'Accomodate', 'Possession', 'Disappear'],
      correctAnswer: 'Accomodate',
      explanation: 'The correct spelling is "accommodate" with two "c"s and two "m"s.'
    },
    {
      id: 'e3',
      subject: 'english',
      text: 'Complete the analogy: Book is to read as Food is to ___.',
      options: ['Cook', 'Eat', 'Recipe', 'Taste'],
      correctAnswer: 'Eat',
      explanation: 'A book is something you read; food is something you eat.'
    },
    {
      id: 'e4',
      subject: 'english',
      text: 'Which word is an antonym of "brave"?',
      options: ['Cowardly', 'Fearsome', 'Bold', 'Daring'],
      correctAnswer: 'Cowardly',
      explanation: '"Brave" means courageous or showing courage, while "cowardly" means lacking courage.'
    },
    {
      id: 'e5',
      subject: 'english',
      text: 'Which of these sentences contains a grammatical error?',
      options: ['She and I went to the park.', 'The cat chased it\'s tail.', 'They were late for the meeting.', 'He asked whether I could help.'],
      correctAnswer: 'The cat chased it\'s tail.',
      explanation: 'The sentence should use "its" (possessive) not "it\'s" (contraction of it is).'
    },
    {
      id: 'e6',
      subject: 'english',
      text: 'Which sentence is in the passive voice?',
      options: ['The chef prepared the meal.', 'The meal was prepared by the chef.', 'Preparing meals is the chef\'s job.', 'The chef is preparing the meal.'],
      correctAnswer: 'The meal was prepared by the chef.',
      explanation: 'In passive voice, the subject receives the action rather than performs it.'
    },
    {
      id: 'e7',
      subject: 'english',
      text: 'What is the plural form of "child"?',
      options: ['Childs', 'Childes', 'Children', 'Childies'],
      correctAnswer: 'Children',
      explanation: '"Child" is an irregular noun and its plural form is "children".'
    },
    {
      id: 'e8',
      subject: 'english',
      text: 'Choose the correct homophone: The dog wagged its _____.',
      options: ['tale', 'tail', 'tael', 'tayl'],
      correctAnswer: 'tail',
      explanation: '"Tail" refers to the appendage that extends from an animal\'s rear end, while "tale" is a story.'
    },
    {
      id: 'e9',
      subject: 'english',
      text: 'Which literary device involves comparing two unlike things using "like" or "as"?',
      options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
      correctAnswer: 'Simile',
      explanation: 'A simile is a comparison between two unlike things using "like" or "as". Example: "As brave as a lion".'
    },
    {
      id: 'e10',
      subject: 'english',
      text: 'Which word is NOT a conjunction?',
      options: ['And', 'But', 'Since', 'Quickly'],
      correctAnswer: 'Quickly',
      explanation: '"Quickly" is an adverb, not a conjunction. Conjunctions join words, phrases, or clauses.'
    },
    {
      id: 'e11',
      subject: 'english',
      text: 'Which of the following is a complete sentence?',
      options: ['When the sun came up.', 'The boy who ran fast.', 'After the storm passed.', 'The children played happily.'],
      correctAnswer: 'The children played happily.',
      explanation: 'A complete sentence must have at least a subject and a verb. "The children played happily" has both.'
    },
    {
      id: 'e12',
      subject: 'english',
      text: 'What is the meaning of the prefix "inter"?',
      options: ['Against', 'Between', 'Outside', 'Within'],
      correctAnswer: 'Between',
      explanation: 'The prefix "inter" means between or among, as in "international" (between nations).'
    },
    {
      id: 'e13',
      subject: 'english',
      text: 'Which sentence uses the correct form of punctuation?',
      options: ['Where are you going?', 'Where are you going.', 'Where are you going!', 'Where are you going,'],
      correctAnswer: 'Where are you going?',
      explanation: 'A question should end with a question mark (?).'
    }
  ],
  verbal: [
    {
      id: 'v1',
      subject: 'verbal',
      text: 'If FRIEND is coded as GSJFOE, how would you code ENEMY?',
      options: ['FOFNZ', 'FMFNX', 'FOFNX', 'DPFNZ'],
      correctAnswer: 'FOFNZ',
      explanation: 'Each letter is replaced with the next letter in the alphabet. E→F, N→O, E→F, M→N, Y→Z'
    },
    {
      id: 'v2',
      subject: 'verbal',
      text: 'Choose the word that does not belong with the others:',
      options: ['Dolphin', 'Whale', 'Shark', 'Seahorse'],
      correctAnswer: 'Shark',
      explanation: 'Dolphins, whales, and seahorses are mammals, while sharks are fish.'
    },
    {
      id: 'v3',
      subject: 'verbal',
      text: 'Complete the sequence: 2, 4, 8, 16, __',
      options: ['24', '30', '32', '36'],
      correctAnswer: '32',
      explanation: 'Each number is doubled to get the next number in the sequence: 2×2=4, 4×2=8, 8×2=16, 16×2=32'
    },
    {
      id: 'v4',
      subject: 'verbal',
      text: 'Peter is taller than John. John is taller than Sam. Who is the shortest?',
      options: ['Peter', 'John', 'Sam', 'Cannot determine'],
      correctAnswer: 'Sam',
      explanation: 'If Peter > John and John > Sam, then Sam must be the shortest.'
    },
    {
      id: 'v5',
      subject: 'verbal',
      text: 'What comes next: A, C, E, G, ?',
      options: ['H', 'I', 'J', 'K'],
      correctAnswer: 'I',
      explanation: 'The sequence consists of every other letter in the alphabet: A, C, E, G, I.'
    },
    {
      id: 'v6',
      subject: 'verbal',
      text: 'If SMILE is coded as 19-13-9-12-5, how would you code LAUGH?',
      options: ['12-1-21-7-8', '11-0-20-6-7', '12-1-20-7-8', '13-2-22-8-9'],
      correctAnswer: '12-1-21-7-8',
      explanation: 'Each letter is coded by its position in the alphabet: L=12, A=1, U=21, G=7, H=8'
    },
    {
      id: 'v7',
      subject: 'verbal',
      text: 'If CAT is to ECVT, then DOG is to:',
      options: ['DFQOI', 'FQIJ', 'HFQS', 'FQSI'],
      correctAnswer: 'FQIJ',
      explanation: 'The pattern adds 2 to the first letter (C→E), adds 0 to the second (A→A), adds 2 to the third (T→V), then adds the first letter +2 (C+2=E). So DOG becomes F(D+2), Q(O+2), I(G+2), J(D+6).'
    },
    {
      id: 'v8',
      subject: 'verbal',
      text: 'If "day" is to "night", then "awake" is to:',
      options: ['Sleep', 'Dream', 'Tired', 'Bed'],
      correctAnswer: 'Sleep',
      explanation: 'Day and night are opposites, so the relationship is looking for the opposite of "awake", which is "sleep".'
    },
    {
      id: 'v9',
      subject: 'verbal',
      text: 'Which figure comes next in the sequence?',
      options: ['Square', 'Triangle', 'Circle', 'Pentagon'],
      correctAnswer: 'Triangle',
      explanation: 'The sequence is square, circle, triangle, square, circle, triangle, etc., so triangle comes next.'
    },
    {
      id: 'v10',
      subject: 'verbal',
      text: 'Look at the sequence: 3, 6, 11, 18, 27, ?',
      options: ['33', '36', '38', '42'],
      correctAnswer: '38',
      explanation: 'The differences between consecutive terms are 3, 5, 7, 9, 11. So the next number is 27 + 11 = 38.'
    },
    {
      id: 'v11',
      subject: 'verbal',
      text: 'If all Blips are Bloops and some Bloops are Bleeps, which of the following must be true?',
      options: ['All Blips are Bleeps', 'Some Blips are Bleeps', 'Some Bleeps are Blips', 'No Bleeps are Blips'],
      correctAnswer: 'Some Bleeps are Blips',
      explanation: 'If all Blips are Bloops and some Bloops are Bleeps, then at least some Bleeps are also Bloops which are also Blips.'
    },
    {
      id: 'v12',
      subject: 'verbal',
      text: 'Complete the analogy: Composer is to Symphony as Author is to:',
      options: ['Book', 'Writing', 'Novel', 'Story'],
      correctAnswer: 'Novel',
      explanation: 'A composer creates a symphony, and an author creates a novel.'
    },
    {
      id: 'v13',
      subject: 'verbal',
      text: 'Find the odd one out: Violin, Piano, Guitar, Flute',
      options: ['Violin', 'Piano', 'Guitar', 'Flute'],
      correctAnswer: 'Piano',
      explanation: 'Piano is the only instrument that is not primarily held in the hands when played; it is played by sitting at it.'
    }
  ],
  'non-verbal': [
    {
      id: 'nv1',
      subject: 'non-verbal',
      text: 'If a square is rotated 90° clockwise, which corner will the top-right corner become?',
      options: ['Top-left', 'Bottom-right', 'Bottom-left', 'It stays in the same position'],
      correctAnswer: 'Bottom-right',
      explanation: 'When rotated 90° clockwise, the top-right corner moves to the bottom-right position.'
    },
    {
      id: 'nv2',
      subject: 'non-verbal',
      text: 'Which shape comes next in the sequence: Circle, Square, Triangle, Pentagon, ?',
      options: ['Hexagon', 'Octagon', 'Rectangle', 'Circle'],
      correctAnswer: 'Hexagon',
      explanation: 'The sequence shows shapes with increasing number of sides: 0 (circle), 4 (square), 3 (triangle), 5 (pentagon), 6 (hexagon).'
    },
    {
      id: 'nv3',
      subject: 'non-verbal',
      text: 'If a paper is folded in half twice and a triangle is cut out of one corner, how many holes will be in the paper when unfolded?',
      options: ['1', '2', '3', '4'],
      correctAnswer: '4',
      explanation: 'When the paper is folded twice, cutting one corner creates 4 symmetrical cuts that become 4 holes when unfolded.'
    },
    {
      id: 'nv4',
      subject: 'non-verbal',
      text: 'Which tile completes the pattern?',
      options: ['A square', 'A triangle', 'A circle', 'A pentagon'],
      correctAnswer: 'A circle',
      explanation: 'The pattern alternates between sharp-edged shapes (square, triangle) and round shapes (circle), so a circle comes next.'
    },
    {
      id: 'nv5',
      subject: 'non-verbal',
      text: 'If you fold a transparent cube, which face will be opposite to the front face?',
      options: ['The right face', 'The top face', 'The back face', 'The bottom face'],
      correctAnswer: 'The back face',
      explanation: 'In a cube, opposite faces are parallel to each other. The face opposite to the front face is the back face.'
    },
    {
      id: 'nv6',
      subject: 'non-verbal',
      text: 'How many lines of symmetry does a regular hexagon have?',
      options: ['3', '6', '8', '12'],
      correctAnswer: '6',
      explanation: 'A regular hexagon has 6 lines of symmetry, one through each vertex and the middle of the opposite side.'
    },
    {
      id: 'nv7',
      subject: 'non-verbal',
      text: 'If a 3D shape has 8 vertices and 12 edges, how many faces does it have?',
      options: ['4', '6', '8', '12'],
      correctAnswer: '6',
      explanation: 'Using Euler\'s formula: Faces + Vertices - Edges = 2. So Faces = 2 + Edges - Vertices = 2 + 12 - 8 = 6. This is a cube.'
    },
    {
      id: 'nv8',
      subject: 'non-verbal',
      text: 'Which of these shapes has the most sides?',
      options: ['Triangle', 'Rhombus', 'Trapezoid', 'Pentagon'],
      correctAnswer: 'Pentagon',
      explanation: 'A pentagon has 5 sides, more than a triangle (3), rhombus (4), or trapezoid (4).'
    },
    {
      id: 'nv9',
      subject: 'non-verbal',
      text: 'If you see a reflection of a clock showing 3:00, what time will the reflection show?',
      options: ['3:00', '9:00', '6:00', '12:00'],
      correctAnswer: '9:00',
      explanation: 'In a mirror reflection, left and right are reversed. So 3:00 (with the hour hand pointing right) becomes 9:00 (hour hand pointing left).'
    },
    {
      id: 'nv10',
      subject: 'non-verbal',
      text: 'If two squares overlap, what is the maximum number of sides the resulting shape can have?',
      options: ['6', '8', '10', '12'],
      correctAnswer: '8',
      explanation: 'When two squares overlap at a corner or along an edge, the maximum number of sides the resulting shape can have is 8.'
    },
    {
      id: 'nv11',
      subject: 'non-verbal',
      text: 'Which net can be folded to make a pyramid with a square base?',
      options: ['A square with triangles on two sides', 'A square with triangles on all four sides', 'A square with rectangles on all sides', 'A pentagon with triangles on all sides'],
      correctAnswer: 'A square with triangles on all four sides',
      explanation: 'A pyramid with a square base consists of a square (the base) and 4 triangles (the faces) attached to each side of the square.'
    },
    {
      id: 'nv12',
      subject: 'non-verbal',
      text: 'If you rotate a right-angled triangle 180 degrees, what shape do you get?',
      options: ['Another right-angled triangle', 'An isosceles triangle', 'A scalene triangle', 'An obtuse triangle'],
      correctAnswer: 'Another right-angled triangle',
      explanation: 'When rotated 180 degrees, a right-angled triangle still has one 90-degree angle, so it remains a right-angled triangle.'
    },
    {
      id: 'nv13',
      subject: 'non-verbal',
      text: 'What 3D shape has circular faces?',
      options: ['Cube', 'Sphere', 'Cylinder', 'Cone'],
      correctAnswer: 'Cylinder',
      explanation: 'A cylinder has two circular faces, one at each end, connected by a curved surface.'
    }
  ]
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const startQuiz = (subject: Subject) => {
    setIsLoading(true);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      // Get questions for the selected subject and randomize their order
      const subjectQuestions = [...sampleQuestions[subject]];
      for (let i = subjectQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [subjectQuestions[i], subjectQuestions[j]] = [subjectQuestions[j], subjectQuestions[i]];
      }
      
      setQuestions(subjectQuestions);
      setSelectedSubject(subject);
      setCurrentQuestionIndex(0);
      setScore(0);
      setUserAnswers({});
      setIsLoading(false);
    }, 800);
  };

  const answerQuestion = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    // Check if answer is correct and update score
    const question = questions.find((q) => q.id === questionId);
    if (question && answer === question.correctAnswer && !userAnswers[questionId]) {
      setScore((prev) => prev + 1);
    } else if (question && userAnswers[questionId] === question.correctAnswer && answer !== question.correctAnswer) {
      setScore((prev) => prev - 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers({});
    setSelectedSubject(null);
  };

  const getResults = () => {
    const answeredQuestions = Object.keys(userAnswers).length;
    const percentage = questions.length ? (score / questions.length) * 100 : 0;

    return {
      score,
      totalQuestions: questions.length,
      percentage,
      answeredQuestions,
    };
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        score,
        userAnswers,
        selectedSubject,
        isLoading,
        setSelectedSubject,
        startQuiz,
        answerQuestion,
        goToNextQuestion,
        goToPreviousQuestion,
        resetQuiz,
        getResults,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
