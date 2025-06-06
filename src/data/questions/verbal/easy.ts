
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

  // NEW EASY QUESTIONS - 20 for each type (420 total new questions)

  // Insert a Letter (20 new easy)
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
  {
    id: 'v_il_e11',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: s( ? )t  p( ? )t',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: sit and pit.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e12',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: w( ? )n  h( ? )n',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: win and hin.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e13',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: c( ? )p  m( ? )p',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: cap and map.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e14',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: f( ? )g  l( ? )g',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: fog and log.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e15',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: j( ? )b  m( ? )b',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: job and mob.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e16',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: n( ? )t  h( ? )t',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: not and hot.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e17',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: b( ? )s  g( ? )s',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: bas and gas.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e18',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: k( ? )t  g( ? )t',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: kit and git.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e19',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: z( ? )p  t( ? )p',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: zap and tap.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e20',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: l( ? )d  m( ? )d',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: lid and mid.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },

  // Two Odd Ones Out (20 new easy)
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
  },
  {
    id: 'v_too_e11',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: circle square triangle bread milk',
    options: ['circle, square', 'bread, milk', 'square, triangle', 'circle, bread'],
    correctAnswer: 'bread, milk',
    explanation: 'Circle, square, and triangle are shapes. Bread and milk are food items.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e12',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: violin piano guitar window door',
    options: ['violin, piano', 'window, door', 'piano, guitar', 'violin, window'],
    correctAnswer: 'window, door',
    explanation: 'Violin, piano, and guitar are musical instruments. Window and door are parts of a house.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e13',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: eyes nose mouth fork spoon',
    options: ['eyes, nose', 'fork, spoon', 'nose, mouth', 'eyes, fork'],
    correctAnswer: 'fork, spoon',
    explanation: 'Eyes, nose, and mouth are body parts. Fork and spoon are utensils.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e14',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: teacher doctor nurse fish bird',
    options: ['teacher, doctor', 'fish, bird', 'doctor, nurse', 'teacher, fish'],
    correctAnswer: 'fish, bird',
    explanation: 'Teacher, doctor, and nurse are jobs. Fish and bird are animals.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e15',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: morning afternoon evening hammer nail',
    options: ['morning, afternoon', 'hammer, nail', 'afternoon, evening', 'morning, hammer'],
    correctAnswer: 'hammer, nail',
    explanation: 'Morning, afternoon, and evening are times of day. Hammer and nail are tools.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e16',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: cotton wool silk computer mouse',
    options: ['cotton, wool', 'computer, mouse', 'wool, silk', 'cotton, computer'],
    correctAnswer: 'computer, mouse',
    explanation: 'Cotton, wool, and silk are fabrics. Computer and mouse are technology items.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e17',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: cake cookie pie hammer screwdriver',
    options: ['cake, cookie', 'hammer, screwdriver', 'cookie, pie', 'cake, hammer'],
    correctAnswer: 'hammer, screwdriver',
    explanation: 'Cake, cookie, and pie are desserts. Hammer and screwdriver are tools.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e18',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: rain snow hail duck rabbit',
    options: ['rain, snow', 'duck, rabbit', 'snow, hail', 'rain, duck'],
    correctAnswer: 'duck, rabbit',
    explanation: 'Rain, snow, and hail are weather conditions. Duck and rabbit are animals.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e19',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: mother father sister television radio',
    options: ['mother, father', 'television, radio', 'father, sister', 'mother, television'],
    correctAnswer: 'television, radio',
    explanation: 'Mother, father, and sister are family members. Television and radio are electronic devices.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e20',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: grass tree flower bicycle train',
    options: ['grass, tree', 'bicycle, train', 'tree, flower', 'grass, bicycle'],
    correctAnswer: 'bicycle, train',
    explanation: 'Grass, tree, and flower are plants. Bicycle and train are transportation.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },

  // Related Words (20 new easy)
  {
    id: 'v_rw_e1',
    subject: 'verbal',
    text: 'Choose the word that best relates to "school".',
    options: ['Tree', 'Student', 'Car', 'House'],
    correctAnswer: 'Student',
    explanation: 'Students go to school to learn.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e2',
    subject: 'verbal',
    text: 'Choose the word that best relates to "kitchen".',
    options: ['Cooking', 'Sleeping', 'Reading', 'Swimming'],
    correctAnswer: 'Cooking',
    explanation: 'Kitchens are used for cooking food.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e3',
    subject: 'verbal',
    text: 'Choose the word that best relates to "doctor".',
    options: ['Painting', 'Medicine', 'Dancing', 'Building'],
    correctAnswer: 'Medicine',
    explanation: 'Doctors work with medicine to help sick people.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e4',
    subject: 'verbal',
    text: 'Choose the word that best relates to "library".',
    options: ['Books', 'Cars', 'Food', 'Sports'],
    correctAnswer: 'Books',
    explanation: 'Libraries are places where you find and read books.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e5',
    subject: 'verbal',
    text: 'Choose the word that best relates to "farm".',
    options: ['Animals', 'Computers', 'Movies', 'Music'],
    correctAnswer: 'Animals',
    explanation: 'Farms are places where animals are raised.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e6',
    subject: 'verbal',
    text: 'Choose the word that best relates to "ocean".',
    options: ['Mountains', 'Fish', 'Desert', 'Forest'],
    correctAnswer: 'Fish',
    explanation: 'Fish live in the ocean.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e7',
    subject: 'verbal',
    text: 'Choose the word that best relates to "winter".',
    options: ['Snow', 'Flowers', 'Swimming', 'Picnic'],
    correctAnswer: 'Snow',
    explanation: 'Snow falls during winter.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e8',
    subject: 'verbal',
    text: 'Choose the word that best relates to "birthday".',
    options: ['Cake', 'Homework', 'Washing', 'Cleaning'],
    correctAnswer: 'Cake',
    explanation: 'People often eat cake on their birthday.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e9',
    subject: 'verbal',
    text: 'Choose the word that best relates to "garden".',
    options: ['Television', 'Flowers', 'Computer', 'Phone'],
    correctAnswer: 'Flowers',
    explanation: 'Flowers grow in gardens.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e10',
    subject: 'verbal',
    text: 'Choose the word that best relates to "bakery".',
    options: ['Bread', 'Shoes', 'Books', 'Toys'],
    correctAnswer: 'Bread',
    explanation: 'Bakeries make and sell bread.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e11',
    subject: 'verbal',
    text: 'Choose the word that best relates to "zoo".',
    options: ['Animals', 'Books', 'Cars', 'Clothes'],
    correctAnswer: 'Animals',
    explanation: 'Zoos are places where animals live.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e12',
    subject: 'verbal',
    text: 'Choose the word that best relates to "playground".',
    options: ['Children', 'Cooking', 'Sleeping', 'Reading'],
    correctAnswer: 'Children',
    explanation: 'Children play at playgrounds.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e13',
    subject: 'verbal',
    text: 'Choose the word that best relates to "hospital".',
    options: ['Nurses', 'Teachers', 'Chefs', 'Drivers'],
    correctAnswer: 'Nurses',
    explanation: 'Nurses work in hospitals.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e14',
    subject: 'verbal',
    text: 'Choose the word that best relates to "fire station".',
    options: ['Firefighters', 'Doctors', 'Teachers', 'Farmers'],
    correctAnswer: 'Firefighters',
    explanation: 'Firefighters work at fire stations.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e15',
    subject: 'verbal',
    text: 'Choose the word that best relates to "post office".',
    options: ['Letters', 'Food', 'Toys', 'Clothes'],
    correctAnswer: 'Letters',
    explanation: 'Post offices handle letters and mail.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e16',
    subject: 'verbal',
    text: 'Choose the word that best relates to "circus".',
    options: ['Clowns', 'Teachers', 'Doctors', 'Farmers'],
    correctAnswer: 'Clowns',
    explanation: 'Clowns perform at circuses.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e17',
    subject: 'verbal',
    text: 'Choose the word that best relates to "beach".',
    options: ['Sand', 'Snow', 'Trees', 'Buildings'],
    correctAnswer: 'Sand',
    explanation: 'Beaches are covered with sand.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e18',
    subject: 'verbal',
    text: 'Choose the word that best relates to "theater".',
    options: ['Plays', 'Cooking', 'Sleeping', 'Studying'],
    correctAnswer: 'Plays',
    explanation: 'Plays are performed in theaters.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e19',
    subject: 'verbal',
    text: 'Choose the word that best relates to "museum".',
    options: ['Art', 'Sports', 'Cooking', 'Sleeping'],
    correctAnswer: 'Art',
    explanation: 'Museums display art and historical items.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e20',
    subject: 'verbal',
    text: 'Choose the word that best relates to "garage".',
    options: ['Cars', 'Books', 'Food', 'Clothes'],
    correctAnswer: 'Cars',
    explanation: 'Cars are kept in garages.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },

  // Closest Meaning (20 new easy)
  {
    id: 'v_cm_e1',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "happy"?',
    options: ['Sad', 'Glad', 'Angry', 'Tired'],
    correctAnswer: 'Glad',
    explanation: '"Glad" means happy or pleased.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e2',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "little"?',
    options: ['Big', 'Small', 'Tall', 'Wide'],
    correctAnswer: 'Small',
    explanation: '"Small" means little in size.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e3',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "fast"?',
    options: ['Slow', 'Quick', 'Quiet', 'Loud'],
    correctAnswer: 'Quick',
    explanation: '"Quick" means fast or speedy.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e4',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "cold"?',
    options: ['Hot', 'Warm', 'Cool', 'Mild'],
    correctAnswer: 'Cool',
    explanation: '"Cool" means somewhat cold.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e5',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "pretty"?',
    options: ['Ugly', 'Beautiful', 'Scary', 'Funny'],
    correctAnswer: 'Beautiful',
    explanation: '"Beautiful" means very pretty or attractive.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e6',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "loud"?',
    options: ['Quiet', 'Noisy', 'Silent', 'Soft'],
    correctAnswer: 'Noisy',
    explanation: '"Noisy" means making a lot of sound, like loud.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e7',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "smart"?',
    options: ['Dumb', 'Clever', 'Lazy', 'Slow'],
    correctAnswer: 'Clever',
    explanation: '"Clever" means intelligent or smart.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e8',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "kind"?',
    options: ['Mean', 'Nice', 'Rude', 'Angry'],
    correctAnswer: 'Nice',
    explanation: '"Nice" means kind or pleasant.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e9',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "strong"?',
    options: ['Weak', 'Powerful', 'Tired', 'Small'],
    correctAnswer: 'Powerful',
    explanation: '"Powerful" means having great strength.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e10',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "rich"?',
    options: ['Poor', 'Wealthy', 'Hungry', 'Tired'],
    correctAnswer: 'Wealthy',
    explanation: '"Wealthy" means having a lot of money, like rich.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e11',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "brave"?',
    options: ['Scared', 'Fearless', 'Worried', 'Nervous'],
    correctAnswer: 'Fearless',
    explanation: '"Fearless" means not afraid, like being brave.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e12',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "funny"?',
    options: ['Serious', 'Amusing', 'Boring', 'Sad'],
    correctAnswer: 'Amusing',
    explanation: '"Amusing" means entertaining or funny.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e13',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "old"?',
    options: ['New', 'Ancient', 'Fresh', 'Modern'],
    correctAnswer: 'Ancient',
    explanation: '"Ancient" means very old.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e14',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "clean"?',
    options: ['Dirty', 'Spotless', 'Messy', 'Broken'],
    correctAnswer: 'Spotless',
    explanation: '"Spotless" means perfectly clean.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e15',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "wet"?',
    options: ['Dry', 'Damp', 'Hot', 'Cold'],
    correctAnswer: 'Damp',
    explanation: '"Damp" means slightly wet.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e16',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "thin"?',
    options: ['Fat', 'Skinny', 'Wide', 'Thick'],
    correctAnswer: 'Skinny',
    explanation: '"Skinny" means very thin.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e17',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "soft"?',
    options: ['Hard', 'Gentle', 'Rough', 'Sharp'],
    correctAnswer: 'Gentle',
    explanation: '"Gentle" means soft or mild.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e18',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "angry"?',
    options: ['Happy', 'Mad', 'Calm', 'Peaceful'],
    correctAnswer: 'Mad',
    explanation: '"Mad" means angry or upset.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e19',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "new"?',
    options: ['Old', 'Fresh', 'Used', 'Broken'],
    correctAnswer: 'Fresh',
    explanation: '"Fresh" means new or recently made.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e20',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "dark"?',
    options: ['Bright', 'Dim', 'Light', 'Clear'],
    correctAnswer: 'Dim',
    explanation: '"Dim" means not bright, similar to dark.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },

  // Hidden Word (20 new easy)
  {
    id: 'v_hw_e1',
    subject: 'verbal',
    text: 'Find the hidden animal: RATEPELPH',
    options: ['Tiger', 'Elephant', 'Lion', 'Bear'],
    correctAnswer: 'Elephant',
    explanation: 'ELEPHANT can be found in RATEPELPH when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e2',
    subject: 'verbal',
    text: 'Find the hidden color: DERL',
    options: ['Blue', 'Green', 'Red', 'Yellow'],
    correctAnswer: 'Red',
    explanation: 'RED can be found in DERL when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e3',
    subject: 'verbal',
    text: 'Find the hidden fruit: ELPPA',
    options: ['Orange', 'Banana', 'Apple', 'Grape'],
    correctAnswer: 'Apple',
    explanation: 'APPLE can be found in ELPPA when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e4',
    subject: 'verbal',
    text: 'Find the hidden body part: DNAH',
    options: ['Foot', 'Hand', 'Head', 'Arm'],
    correctAnswer: 'Hand',
    explanation: 'HAND can be found in DNAH when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e5',
    subject: 'verbal',
    text: 'Find the hidden vehicle: RAC',
    options: ['Bus', 'Train', 'Car', 'Bike'],
    correctAnswer: 'Car',
    explanation: 'CAR can be found in RAC when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e6',
    subject: 'verbal',
    text: 'Find the hidden food: DAERB',
    options: ['Milk', 'Bread', 'Cheese', 'Butter'],
    correctAnswer: 'Bread',
    explanation: 'BREAD can be found in DAERB when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e7',
    subject: 'verbal',
    text: 'Find the hidden weather: NIAR',
    options: ['Sun', 'Rain', 'Snow', 'Wind'],
    correctAnswer: 'Rain',
    explanation: 'RAIN can be found in NIAR when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e8',
    subject: 'verbal',
    text: 'Find the hidden toy: LLAB',
    options: ['Doll', 'Ball', 'Game', 'Kite'],
    correctAnswer: 'Ball',
    explanation: 'BALL can be found in LLAB when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e9',
    subject: 'verbal',
    text: 'Find the hidden room: MOORHTA',
    options: ['Kitchen', 'Bathroom', 'Bedroom', 'Living'],
    correctAnswer: 'Bathroom',
    explanation: 'BATHROOM can be found in MOORHTA when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e10',
    subject: 'verbal',
    text: 'Find the hidden school item: NEP',
    options: ['Book', 'Pen', 'Desk', 'Chair'],
    correctAnswer: 'Pen',
    explanation: 'PEN can be found in NEP when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e11',
    subject: 'verbal',
    text: 'Find the hidden sport: LLAB',
    options: ['Tennis', 'Ball', 'Soccer', 'Golf'],
    correctAnswer: 'Ball',
    explanation: 'BALL can be found in LLAB when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e12',
    subject: 'verbal',
    text: 'Find the hidden clothing: TAH',
    options: ['Shirt', 'Hat', 'Pants', 'Shoes'],
    correctAnswer: 'Hat',
    explanation: 'HAT can be found in TAH when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e13',
    subject: 'verbal',
    text: 'Find the hidden drink: KLIM',
    options: ['Water', 'Juice', 'Milk', 'Soda'],
    correctAnswer: 'Milk',
    explanation: 'MILK can be found in KLIM when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e14',
    subject: 'verbal',
    text: 'Find the hidden flower: ESOR',
    options: ['Tulip', 'Rose', 'Daisy', 'Lily'],
    correctAnswer: 'Rose',
    explanation: 'ROSE can be found in ESOR when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e15',
    subject: 'verbal',
    text: 'Find the hidden shape: ERCLIC',
    options: ['Square', 'Triangle', 'Circle', 'Star'],
    correctAnswer: 'Circle',
    explanation: 'CIRCLE can be found in ERCLIC when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e16',
    subject: 'verbal',
    text: 'Find the hidden insect: EEB',
    options: ['Ant', 'Bee', 'Fly', 'Bug'],
    correctAnswer: 'Bee',
    explanation: 'BEE can be found in EEB when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e17',
    subject: 'verbal',
    text: 'Find the hidden tool: REMMAH',
    options: ['Saw', 'Hammer', 'Nail', 'Screw'],
    correctAnswer: 'Hammer',
    explanation: 'HAMMER can be found in REMMAH when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e18',
    subject: 'verbal',
    text: 'Find the hidden planet: HTRAE',
    options: ['Mars', 'Earth', 'Moon', 'Sun'],
    correctAnswer: 'Earth',
    explanation: 'EARTH can be found in HTRAE when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e19',
    subject: 'verbal',
    text: 'Find the hidden emotion: DAGS',
    options: ['Happy', 'Sad', 'Mad', 'Glad'],
    correctAnswer: 'Sad',
    explanation: 'SAD can be found in DAGS when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e20',
    subject: 'verbal',
    text: 'Find the hidden number: EERHT',
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 'Three',
    explanation: 'THREE can be found in EERHT when rearranged.',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },

  // Missing Word (20 new easy)
  {
    id: 'v_mw_e1',
    subject: 'verbal',
    text: 'Complete the sentence: The cat is ___ the tree.',
    options: ['under', 'over', 'beside', 'in'],
    correctAnswer: 'in',
    explanation: 'Cats often climb and sit in trees.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e2',
    subject: 'verbal',
    text: 'Complete the sentence: I ___ my teeth every morning.',
    options: ['wash', 'brush', 'clean', 'wipe'],
    correctAnswer: 'brush',
    explanation: 'We brush our teeth to keep them clean.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e3',
    subject: 'verbal',
    text: 'Complete the sentence: The sun ___ in the east.',
    options: ['sets', 'rises', 'falls', 'goes'],
    correctAnswer: 'rises',
    explanation: 'The sun rises in the east every morning.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e4',
    subject: 'verbal',
    text: 'Complete the sentence: Fish live in ___.',
    options: ['trees', 'houses', 'water', 'air'],
    correctAnswer: 'water',
    explanation: 'Fish need water to survive.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e5',
    subject: 'verbal',
    text: 'Complete the sentence: We use our ___ to see.',
    options: ['ears', 'nose', 'eyes', 'mouth'],
    correctAnswer: 'eyes',
    explanation: 'Eyes are the organs we use for seeing.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e6',
    subject: 'verbal',
    text: 'Complete the sentence: Birds can ___.',
    options: ['swim', 'fly', 'crawl', 'dig'],
    correctAnswer: 'fly',
    explanation: 'Most birds have the ability to fly.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e7',
    subject: 'verbal',
    text: 'Complete the sentence: Ice is ___.',
    options: ['hot', 'warm', 'cold', 'soft'],
    correctAnswer: 'cold',
    explanation: 'Ice is frozen water and is cold.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e8',
    subject: 'verbal',
    text: 'Complete the sentence: We sleep in a ___.',
    options: ['kitchen', 'bathroom', 'bed', 'car'],
    correctAnswer: 'bed',
    explanation: 'Beds are where people sleep.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e9',
    subject: 'verbal',
    text: 'Complete the sentence: The grass is ___.',
    options: ['blue', 'red', 'green', 'purple'],
    correctAnswer: 'green',
    explanation: 'Grass is typically green in color.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e10',
    subject: 'verbal',
    text: 'Complete the sentence: We eat ___ for breakfast.',
    options: ['dinner', 'lunch', 'food', 'toys'],
    correctAnswer: 'food',
    explanation: 'We eat food at all meals, including breakfast.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e11',
    subject: 'verbal',
    text: 'Complete the sentence: The dog ___ its tail.',
    options: ['bites', 'wags', 'cuts', 'hides'],
    correctAnswer: 'wags',
    explanation: 'Dogs wag their tails when they are happy.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e12',
    subject: 'verbal',
    text: 'Complete the sentence: We wear ___ on our feet.',
    options: ['hats', 'gloves', 'shoes', 'shirts'],
    correctAnswer: 'shoes',
    explanation: 'Shoes are worn on feet for protection.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e13',
    subject: 'verbal',
    text: 'Complete the sentence: The baby ___ loudly.',
    options: ['sleeps', 'cries', 'reads', 'drives'],
    correctAnswer: 'cries',
    explanation: 'Babies cry when they need something.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e14',
    subject: 'verbal',
    text: 'Complete the sentence: We use a ___ to write.',
    options: ['spoon', 'pencil', 'cup', 'shoe'],
    correctAnswer: 'pencil',
    explanation: 'Pencils are tools used for writing.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e15',
    subject: 'verbal',
    text: 'Complete the sentence: The moon shines at ___.',
    options: ['morning', 'afternoon', 'night', 'noon'],
    correctAnswer: 'night',
    explanation: 'The moon is most visible at night.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e16',
    subject: 'verbal',
    text: 'Complete the sentence: We cook food in the ___.',
    options: ['bedroom', 'bathroom', 'kitchen', 'garage'],
    correctAnswer: 'kitchen',
    explanation: 'Kitchens are rooms where food is cooked.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e17',
    subject: 'verbal',
    text: 'Complete the sentence: Snow is ___.',
    options: ['black', 'white', 'green', 'blue'],
    correctAnswer: 'white',
    explanation: 'Snow is white in color.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e18',
    subject: 'verbal',
    text: 'Complete the sentence: We read ___.',
    options: ['food', 'toys', 'books', 'cars'],
    correctAnswer: 'books',
    explanation: 'Books contain text that we read.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e19',
    subject: 'verbal',
    text: 'Complete the sentence: Fire is ___.',
    options: ['cold', 'cool', 'hot', 'wet'],
    correctAnswer: 'hot',
    explanation: 'Fire produces heat and is hot.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e20',
    subject: 'verbal',
    text: 'Complete the sentence: We use our ___ to hear.',
    options: ['eyes', 'nose', 'mouth', 'ears'],
    correctAnswer: 'ears',
    explanation: 'Ears are the organs we use for hearing.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  }
];

export default easyVerbalQuestions;
