import { Question } from '@/types/questionTypes';

const easyVerbalQuestions: Question[] = [
  {
    id: 'v1',
    subject: 'verbal',
    text: 'Which word is the odd one out?',
    options: ['Cat', 'Dog', 'Car', 'Fish'],
    correctAnswer: 'Car',
    explanation: 'Car is the only non-living thing in the list.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v3',
    subject: 'verbal',
    text: 'Choose the word that means the same as "big".',
    options: ['Small', 'Large', 'Tiny', 'Little'],
    correctAnswer: 'Large',
    explanation: 'Large means big in size.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v4',
    subject: 'verbal',
    text: 'What is the plural of "child"?',
    options: ['Childs', 'Children', 'Childes', 'Child'],
    correctAnswer: 'Children',
    explanation: 'Children is the correct plural form of child.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v5',
    subject: 'verbal',
    text: 'Which word rhymes with "cat"?',
    options: ['Dog', 'Hat', 'Car', 'Sun'],
    correctAnswer: 'Hat',
    explanation: 'Hat rhymes with cat because they both end with the same sound.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v6',
    subject: 'verbal',
    text: 'Choose the correct spelling.',
    options: ['Freind', 'Friend', 'Frend', 'Friand'],
    correctAnswer: 'Friend',
    explanation: 'Friend is the correct spelling.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v8',
    subject: 'verbal',
    text: 'What type of word is "run" in the sentence: "I like to run"?',
    options: ['Noun', 'Adjective', 'Verb', 'Adverb'],
    correctAnswer: 'Verb',
    explanation: 'A verb is a word that shows action. "Run" shows the action of running.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v10',
    subject: 'verbal',
    text: 'Which sentence is written correctly?',
    options: [
      'i like ice cream.',
      'I like ice cream.',
      'i Like ice cream.',
      'I Like Ice Cream.'
    ],
    correctAnswer: 'I like ice cream.',
    explanation: 'Sentences should start with a capital letter and end with proper punctuation.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v13',
    subject: 'verbal',
    text: 'What is the opposite of "hot"?',
    options: ['Warm', 'Cool', 'Cold', 'Mild'],
    correctAnswer: 'Cold',
    explanation: 'Cold is the opposite of hot.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v16',
    subject: 'verbal',
    text: 'Which word completes the sentence: "The bird can ___"?',
    options: ['Swim', 'Fly', 'Drive', 'Read'],
    correctAnswer: 'Fly',
    explanation: 'Birds have the ability to fly.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v19',
    subject: 'verbal',
    text: 'Choose the word that does NOT belong with the others.',
    options: ['Apple', 'Banana', 'Orange', 'Carrot'],
    correctAnswer: 'Carrot',
    explanation: 'Carrot is a vegetable, while the others are fruits.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v21',
    subject: 'verbal',
    text: 'What is a baby cow called?',
    options: ['Puppy', 'Kitten', 'Calf', 'Chick'],
    correctAnswer: 'Calf',
    explanation: 'A baby cow is called a calf.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v23',
    subject: 'verbal',
    text: 'Which word means "very happy"?',
    options: ['Sad', 'Angry', 'Joyful', 'Tired'],
    correctAnswer: 'Joyful',
    explanation: 'Joyful means very happy.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v27',
    subject: 'verbal',
    text: 'Complete the pattern: A, B, C, ___',
    options: ['E', 'D', 'F', 'G'],
    correctAnswer: 'D',
    explanation: 'The pattern follows the alphabet in order.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v29',
    subject: 'verbal',
    text: 'Which word starts with the same sound as "phone"?',
    options: ['Cat', 'Photo', 'Dog', 'Ball'],
    correctAnswer: 'Photo',
    explanation: 'Photo starts with the same "ph" sound as phone.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v31',
    subject: 'verbal',
    text: 'What do you call a person who teaches?',
    options: ['Doctor', 'Teacher', 'Chef', 'Driver'],
    correctAnswer: 'Teacher',
    explanation: 'A teacher is a person who teaches students.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v32',
    subject: 'verbal',
    text: 'Which word rhymes with "moon"?',
    options: ['Sun', 'Spoon', 'Star', 'Light'],
    correctAnswer: 'Spoon',
    explanation: 'Spoon rhymes with moon.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v35',
    subject: 'verbal',
    text: 'Choose the correct sentence.',
    options: [
      'The cat are sleeping.',
      'The cat is sleeping.',
      'The cat am sleeping.',
      'The cat were sleeping.'
    ],
    correctAnswer: 'The cat is sleeping.',
    explanation: 'Subject-verb agreement: "cat" is singular, so we use "is."',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v40',
    subject: 'verbal',
    text: 'What is the past tense of "go"?',
    options: ['Goed', 'Gone', 'Went', 'Going'],
    correctAnswer: 'Went',
    explanation: 'Went is the past tense of go.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v41',
    subject: 'verbal',
    text: 'Which word is a color?',
    options: ['Dog', 'Blue', 'Happy', 'Fast'],
    correctAnswer: 'Blue',
    explanation: 'Blue is a color.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },

  // NEW EASY QUESTIONS - 10 for each type

  // Insert a Letter (10 new easy)
  {
    id: 'v_il_e1',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: b( ? )g  c( ? )t',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: bag and cat.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e2',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: c( ? )r  b( ? )t',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: car and bat.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e3',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: d( ? )g  b( ? )g',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: dog and bog.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e4',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: r( ? )n  s( ? )n',
    options: ['a', 'e', 'i', 'u'],
    correctAnswer: 'u',
    explanation: 'The letter "u" completes both words: run and sun.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e5',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: p( ? )n  w( ? )n',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'e',
    explanation: 'The letter "e" completes both words: pen and wen.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e6',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: h( ? )t  c( ? )t',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: hat and cat.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e7',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: b( ? )d  r( ? )d',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'e',
    explanation: 'The letter "e" completes both words: bed and red.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e8',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: f( ? )n  r( ? )n',
    options: ['a', 'e', 'i', 'u'],
    correctAnswer: 'u',
    explanation: 'The letter "u" completes both words: fun and run.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e9',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: m( ? )n  s( ? )n',
    options: ['a', 'e', 'i', 'u'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: man and san.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e10',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: t( ? )p  c( ? )p',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: top and cop.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },

  // Two Odd Ones Out (10 new easy)
  {
    id: 'v_too_e1',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: cat dog fish car bike',
    options: ['cat, dog', 'car, bike', 'dog, fish', 'cat, car'],
    correctAnswer: 'car, bike',
    explanation: 'Cat, dog, and fish are animals. Car and bike are vehicles.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e2',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: red blue green table chair',
    options: ['red, blue', 'table, chair', 'blue, green', 'red, table'],
    correctAnswer: 'table, chair',
    explanation: 'Red, blue, and green are colors. Table and chair are furniture.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e3',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: apple banana orange book pen',
    options: ['apple, banana', 'book, pen', 'banana, orange', 'apple, book'],
    correctAnswer: 'book, pen',
    explanation: 'Apple, banana, and orange are fruits. Book and pen are school supplies.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e4',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: sun moon stars hat shoe',
    options: ['sun, moon', 'hat, shoe', 'moon, stars', 'sun, hat'],
    correctAnswer: 'hat, shoe',
    explanation: 'Sun, moon, and stars are celestial objects. Hat and shoe are clothing.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e5',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: lion tiger bear cup plate',
    options: ['lion, tiger', 'cup, plate', 'tiger, bear', 'lion, cup'],
    correctAnswer: 'cup, plate',
    explanation: 'Lion, tiger, and bear are wild animals. Cup and plate are dishes.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e6',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: one two three hot cold',
    options: ['one, two', 'hot, cold', 'two, three', 'one, hot'],
    correctAnswer: 'hot, cold',
    explanation: 'One, two, and three are numbers. Hot and cold are temperatures.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e7',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: happy sad angry milk bread',
    options: ['happy, sad', 'milk, bread', 'sad, angry', 'happy, milk'],
    correctAnswer: 'milk, bread',
    explanation: 'Happy, sad, and angry are emotions. Milk and bread are food items.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e8',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: big small huge fast slow',
    options: ['big, small', 'fast, slow', 'small, huge', 'big, fast'],
    correctAnswer: 'fast, slow',
    explanation: 'Big, small, and huge describe size. Fast and slow describe speed.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e9',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: jump run walk sing dance',
    options: ['jump, run', 'sing, dance', 'run, walk', 'jump, sing'],
    correctAnswer: 'sing, dance',
    explanation: 'Jump, run, and walk are ways of moving. Sing and dance are performance arts.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e10',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: spring summer winter pen pencil',
    options: ['spring, summer', 'pen, pencil', 'summer, winter', 'spring, pen'],
    correctAnswer: 'pen, pencil',
    explanation: 'Spring, summer, and winter are seasons. Pen and pencil are writing tools.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  }
];

export default easyVerbalQuestions;
