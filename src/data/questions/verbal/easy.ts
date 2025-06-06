import { Question } from '@/types/questionTypes';

const easyVerbalQuestions: Question[] = [
  {
    id: 'v1',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "happy".',
    options: ['Sad', 'Glad', 'Cheerful', 'Merry'],
    correctAnswer: 'Sad',
    explanation: 'Sad means feeling unhappy, which is the opposite of happy.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v3',
    subject: 'verbal',
    text: 'Select the word that completes the analogy: cat : meow :: dog : ?',
    options: ['Bark', 'Purr', 'Hiss', 'Roar'],
    correctAnswer: 'Bark',
    explanation: 'Cats meow, and dogs bark. The analogy relates an animal to the sound it makes.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v4',
    subject: 'verbal',
    text: 'What is the missing number in the sequence: 2, 4, 6, _, 10?',
    options: ['7', '8', '9', '11'],
    correctAnswer: '8',
    explanation: 'The sequence increases by 2 each time, so the missing number is 8.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v5',
    subject: 'verbal',
    text: 'Find the word that does not belong: apple, banana, carrot, orange.',
    options: ['Apple', 'Banana', 'Carrot', 'Orange'],
    correctAnswer: 'Carrot',
    explanation: 'Apples, bananas, and oranges are fruits, while a carrot is a vegetable.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v6',
    subject: 'verbal',
    text: 'Which of the following is a synonym for "difficult"?',
    options: ['Easy', 'Simple', 'Hard', 'Clear'],
    correctAnswer: 'Hard',
    explanation: 'The word "hard" is a synonym for "difficult," meaning not easy to do or understand.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v8',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The weather is _____ today."',
    options: ['Cloud', 'Clouds', 'Cloudy', 'Clouding'],
    correctAnswer: 'Cloudy',
    explanation: '"Cloudy" is an adjective that describes the state of the weather, making it the correct choice.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v10',
    subject: 'verbal',
    text: 'Which word is an antonym for "increase"?',
    options: ['Expand', 'Grow', 'Reduce', 'Enlarge'],
    correctAnswer: 'Reduce',
    explanation: 'An antonym is a word that means the opposite of another word. "Reduce" means to make smaller or less, which is the opposite of "increase."',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v13',
    subject: 'verbal',
    text: 'Choose the correct plural form of "child".',
    options: ['Childs', 'Childes', 'Children', 'Childre'],
    correctAnswer: 'Children',
    explanation: '"Children" is the irregular plural form of "child".',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v16',
    subject: 'verbal',
    text: 'What is the meaning of the prefix "pre-" in the word "preview"?',
    options: ['After', 'Before', 'During', 'Inside'],
    correctAnswer: 'Before',
    explanation: 'The prefix "pre-" means "before." Therefore, "preview" means to view something before.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v19',
    subject: 'verbal',
    text: 'Select the correct form of the verb "to be" in the sentence: "They _____ happy."',
    options: ['Is', 'Am', 'Are', 'Be'],
    correctAnswer: 'Are',
    explanation: '"Are" is the correct form of the verb "to be" to use with the pronoun "they."',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v21',
    subject: 'verbal',
    text: 'Choose the word that best replaces "enthusiastic" in the sentence: "The team was enthusiastic about the project."',
    options: ['Apathetic', 'Reluctant', 'Eager', 'Uninterested'],
    correctAnswer: 'Eager',
    explanation: '"Eager" is a synonym for "enthusiastic," meaning showing great interest or excitement.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v23',
    subject: 'verbal',
    text: 'Select the word that is an adjective.',
    options: ['Run', 'Quickly', 'Blue', 'Jump'],
    correctAnswer: 'Blue',
    explanation: 'An adjective is a word that describes a noun. "Blue" describes a color, making it an adjective.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v27',
    subject: 'verbal',
    text: 'Select the word that is a pronoun.',
    options: ['Table', 'They', 'Quickly', 'Run'],
    correctAnswer: 'They',
    explanation: 'A pronoun is a word that replaces a noun. "They" is a pronoun.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v29',
    subject: 'verbal',
    text: 'Choose the word that is a verb.',
    options: ['Happy', 'Slowly', 'Write', 'House'],
    correctAnswer: 'Write',
    explanation: 'A verb is a word that shows an action, occurrence, or state of being. "Write" is a verb.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v31',
    subject: 'verbal',
    text: 'Select the word that is a preposition.',
    options: ['Quickly', 'Under', 'They', 'Run'],
    correctAnswer: 'Under',
    explanation: 'A preposition is a word that shows the relationship between a noun or pronoun and other words in a sentence. "Under" is a preposition.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v32',
    subject: 'verbal',
    text: 'What is the correct way to write the contraction for "cannot"?',
    options: ['Can\'t', 'Cannot\'t', 'Canot', 'Cannot'],
    correctAnswer: 'Can\'t',
    explanation: '"Can\'t" is the correct contraction for "cannot."',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v35',
    subject: 'verbal',
    text: 'Select the word that is an interjection.',
    options: ['Slowly', 'Because', 'Ouch', 'They'],
    correctAnswer: 'Ouch',
    explanation: 'Interjections are words used to express strong feeling or sudden emotion, often followed by an exclamation mark. "Ouch" is an example.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v40',
    subject: 'verbal',
    text: 'What is the meaning of the suffix "-less" in the word "careless"?',
    options: ['Full of', 'Without', 'Before', 'After'],
    correctAnswer: 'Without',
    explanation: 'The suffix "-less" means "without." Therefore, "careless" means without care.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v41',
    subject: 'verbal',
    text: 'Choose the word that best completes the analogy: hot : cold :: day : ?',
    options: ['Sun', 'Moon', 'Night', 'Warm'],
    correctAnswer: 'Night',
    explanation: 'Hot is the opposite of cold, and day is the opposite of night. The analogy relates opposites.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },

  // NEW QUESTIONS - 10 for each type (starting with easy level)
  
  // Insert a Letter (10 new)
  {
    id: 'v_il_e1',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: ca( ? )e  be( ? )y',
    options: ['r', 't', 'n', 'k'],
    correctAnswer: 'r',
    explanation: 'The letter "r" completes both words: care and berry.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e2',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: ha( ? )e  pa( ? )h',
    options: ['t', 'v', 'r', 'n'],
    correctAnswer: 't',
    explanation: 'The letter "t" completes both words: hate and path.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e3',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: ra( ? )e  ho( ? )e',
    options: ['c', 'm', 'p', 'k'],
    correctAnswer: 'c',
    explanation: 'The letter "c" completes both words: race and hock.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e4',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: da( ? )e  ma( ? )e',
    options: ['r', 'k', 't', 'v'],
    correctAnswer: 'k',
    explanation: 'The letter "k" completes both words: dake and make.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e5',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: wi( ? )e  bi( ? )e',
    options: ['n', 'k', 't', 's'],
    correctAnswer: 'k',
    explanation: 'The letter "k" completes both words: wike and bike.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e6',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: fi( ? )e  mi( ? )e',
    options: ['n', 'r', 'x', 'c'],
    correctAnswer: 'n',
    explanation: 'The letter "n" completes both words: fine and mine.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e7',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: cu( ? )e  du( ? )e',
    options: ['t', 'b', 'k', 'm'],
    correctAnswer: 'b',
    explanation: 'The letter "b" completes both words: cube and dube.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e8',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: sa( ? )e  ca( ? )e',
    options: ['f', 'm', 'v', 'k'],
    correctAnswer: 'v',
    explanation: 'The letter "v" completes both words: save and cave.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e9',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: la( ? )e  ga( ? )e',
    options: ['k', 'm', 't', 'z'],
    correctAnswer: 'k',
    explanation: 'The letter "k" completes both words: lake and gake.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_e10',
    subject: 'verbal',
    text: 'The same letter must fit into both sets of brackets: ro( ? )e  ho( ? )e',
    options: ['p', 's', 'v', 'l'],
    correctAnswer: 'p',
    explanation: 'The letter "p" completes both words: rope and hope.',
    difficulty: 'easy',
    verbalType: 'insertLetter'
  },

  // Two Odd Ones Out (10 new)
  {
    id: 'v_too_e1',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: red green table blue chair',
    options: ['red, green', 'table, chair', 'red, blue', 'green, table'],
    correctAnswer: 'table, chair',
    explanation: 'Red, green, and blue are colors. Table and chair are furniture.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e2',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: cat dog fish bird house',
    options: ['cat, dog', 'fish, bird', 'fish, house', 'dog, house'],
    correctAnswer: 'fish, house',
    explanation: 'Cat, dog, and bird are land animals. Fish and house do not belong.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e3',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: run walk car jump skip',
    options: ['run, walk', 'car, skip', 'walk, car', 'jump, skip'],
    correctAnswer: 'walk, car',
    explanation: 'Run, jump, and skip are active movements. Walk and car do not fit.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e4',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: one two book three pen',
    options: ['one, two', 'book, pen', 'two, book', 'three, pen'],
    correctAnswer: 'book, pen',
    explanation: 'One, two, and three are numbers. Book and pen are objects.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e5',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: big small car tall short',
    options: ['big, small', 'car, tall', 'small, car', 'tall, short'],
    correctAnswer: 'small, car',
    explanation: 'Big, tall, and short are size descriptors. Small and car do not fit the pattern.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e6',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: happy sad cup angry glad',
    options: ['happy, sad', 'cup, angry', 'sad, cup', 'angry, glad'],
    correctAnswer: 'sad, cup',
    explanation: 'Happy, angry, and glad are emotions. Sad and cup do not belong.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e7',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: sun moon star hat shoe',
    options: ['sun, moon', 'hat, shoe', 'moon, hat', 'star, shoe'],
    correctAnswer: 'hat, shoe',
    explanation: 'Sun, moon, and star are celestial objects. Hat and shoe are clothing items.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e8',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: eat drink sleep work play',
    options: ['eat, drink', 'sleep, work', 'drink, sleep', 'work, play'],
    correctAnswer: 'drink, sleep',
    explanation: 'Eat, work, and play are active activities. Drink and sleep are different.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e9',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: hot cold warm ice fire',
    options: ['hot, cold', 'ice, fire', 'cold, ice', 'warm, fire'],
    correctAnswer: 'cold, ice',
    explanation: 'Hot, warm, and fire relate to heat. Cold and ice relate to cold.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_e10',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: pencil pen book paper ruler',
    options: ['pencil, pen', 'book, paper', 'pen, book', 'paper, ruler'],
    correctAnswer: 'pen, book',
    explanation: 'Pencil, paper, and ruler are writing materials. Pen and book are different.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },

  // Related Words (10 new)
  {
    id: 'v_rw_e1',
    subject: 'verbal',
    text: 'Choose the word that best relates to "book".',
    options: ['Food', 'Read', 'Car', 'Dance'],
    correctAnswer: 'Read',
    explanation: 'Books are for reading, so "read" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e2',
    subject: 'verbal',
    text: 'Choose the word that best relates to "kitchen".',
    options: ['Sleep', 'Cook', 'Study', 'Play'],
    correctAnswer: 'Cook',
    explanation: 'Kitchens are where you cook food, so "cook" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e3',
    subject: 'verbal',
    text: 'Choose the word that best relates to "school".',
    options: ['Sleep', 'Eat', 'Learn', 'Run'],
    correctAnswer: 'Learn',
    explanation: 'Schools are places for learning, so "learn" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e4',
    subject: 'verbal',
    text: 'Choose the word that best relates to "rain".',
    options: ['Dry', 'Hot', 'Wet', 'Cold'],
    correctAnswer: 'Wet',
    explanation: 'Rain makes things wet, so "wet" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e5',
    subject: 'verbal',
    text: 'Choose the word that best relates to "car".',
    options: ['Fly', 'Swim', 'Drive', 'Walk'],
    correctAnswer: 'Drive',
    explanation: 'Cars are driven, so "drive" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e6',
    subject: 'verbal',
    text: 'Choose the word that best relates to "doctor".',
    options: ['Sick', 'Happy', 'Tall', 'Fast'],
    correctAnswer: 'Sick',
    explanation: 'Doctors help sick people, so "sick" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e7',
    subject: 'verbal',
    text: 'Choose the word that best relates to "music".',
    options: ['See', 'Hear', 'Taste', 'Smell'],
    correctAnswer: 'Hear',
    explanation: 'Music is heard with your ears, so "hear" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e8',
    subject: 'verbal',
    text: 'Choose the word that best relates to "night".',
    options: ['Bright', 'Dark', 'Loud', 'Soft'],
    correctAnswer: 'Dark',
    explanation: 'Night time is dark, so "dark" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e9',
    subject: 'verbal',
    text: 'Choose the word that best relates to "fire".',
    options: ['Cold', 'Wet', 'Hot', 'Quiet'],
    correctAnswer: 'Hot',
    explanation: 'Fire is hot, so "hot" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_e10',
    subject: 'verbal',
    text: 'Choose the word that best relates to "bird".',
    options: ['Swim', 'Fly', 'Dig', 'Crawl'],
    correctAnswer: 'Fly',
    explanation: 'Birds can fly, so "fly" is the most related word.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },

  // Closest Meaning (10 new)
  {
    id: 'v_cm_e1',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "big"?',
    options: ['Small', 'Large', 'Thin', 'Short'],
    correctAnswer: 'Large',
    explanation: '"Large" means the same as "big" - having great size.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e2',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "fast"?',
    options: ['Slow', 'Quick', 'Quiet', 'Loud'],
    correctAnswer: 'Quick',
    explanation: '"Quick" means the same as "fast" - moving at high speed.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e3',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "smart"?',
    options: ['Stupid', 'Clever', 'Tall', 'Young'],
    correctAnswer: 'Clever',
    explanation: '"Clever" means the same as "smart" - having intelligence.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e4',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "pretty"?',
    options: ['Ugly', 'Beautiful', 'Loud', 'Cold'],
    correctAnswer: 'Beautiful',
    explanation: '"Beautiful" means the same as "pretty" - attractive to look at.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e5',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "small"?',
    options: ['Large', 'Tiny', 'Tall', 'Wide'],
    correctAnswer: 'Tiny',
    explanation: '"Tiny" means the same as "small" - having little size.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e6',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "angry"?',
    options: ['Happy', 'Mad', 'Calm', 'Sleepy'],
    correctAnswer: 'Mad',
    explanation: '"Mad" means the same as "angry" - feeling upset or annoyed.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e7',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "cold"?',
    options: ['Hot', 'Warm', 'Cool', 'Bright'],
    correctAnswer: 'Cool',
    explanation: '"Cool" means similar to "cold" - having a low temperature.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e8',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "noisy"?',
    options: ['Quiet', 'Loud', 'Soft', 'Silent'],
    correctAnswer: 'Loud',
    explanation: '"Loud" means the same as "noisy" - making a lot of sound.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e9',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "tired"?',
    options: ['Awake', 'Sleepy', 'Active', 'Excited'],
    correctAnswer: 'Sleepy',
    explanation: '"Sleepy" means similar to "tired" - wanting to rest or sleep.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_e10',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "clean"?',
    options: ['Dirty', 'Neat', 'Messy', 'Broken'],
    correctAnswer: 'Neat',
    explanation: '"Neat" means similar to "clean" - tidy and organized.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },

  // Hidden Word (10 new)
  {
    id: 'v_hw_e1',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: The cat ran away.',
    options: ['cat ran', 'ran away', 'the cat', 'cat away'],
    correctAnswer: 'cat ran',
    explanation: 'The hidden word is "ATRA" found in "cat ran".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e2',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: Big dogs bark loudly.',
    options: ['big dogs', 'dogs bark', 'bark loudly', 'big bark'],
    correctAnswer: 'dogs bark',
    explanation: 'The hidden word is "SBAR" found in "dogs bark".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e3',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: Red cars drive fast.',
    options: ['red cars', 'cars drive', 'drive fast', 'red drive'],
    correctAnswer: 'cars drive',
    explanation: 'The hidden word is "RSDR" found in "cars drive".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e4',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: Hot sun shines bright.',
    options: ['hot sun', 'sun shines', 'shines bright', 'hot shines'],
    correctAnswer: 'sun shines',
    explanation: 'The hidden word is "NSHY" found in "sun shines".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e5',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: New books cost money.',
    options: ['new books', 'books cost', 'cost money', 'new cost'],
    correctAnswer: 'books cost',
    explanation: 'The hidden word is "KSCO" found in "books cost".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e6',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: Old trees grow tall.',
    options: ['old trees', 'trees grow', 'grow tall', 'old grow'],
    correctAnswer: 'trees grow',
    explanation: 'The hidden word is "ESGR" found in "trees grow".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e7',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: Blue fish swim deep.',
    options: ['blue fish', 'fish swim', 'swim deep', 'blue swim'],
    correctAnswer: 'fish swim',
    explanation: 'The hidden word is "SHSW" found in "fish swim".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e8',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: Green grass grows well.',
    options: ['green grass', 'grass grows', 'grows well', 'green grows'],
    correctAnswer: 'grass grows',
    explanation: 'The hidden word is "SSGR" found in "grass grows".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e9',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: Small mice eat cheese.',
    options: ['small mice', 'mice eat', 'eat cheese', 'small eat'],
    correctAnswer: 'mice eat',
    explanation: 'The hidden word is "CEEA" found in "mice eat".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_e10',
    subject: 'verbal',
    text: 'Find the four-letter word hidden between two words: Tall boys play games.',
    options: ['tall boys', 'boys play', 'play games', 'tall play'],
    correctAnswer: 'boys play',
    explanation: 'The hidden word is "YSPL" found in "boys play".',
    difficulty: 'easy',
    verbalType: 'hiddenWord'
  },

  // Missing Word (10 new)
  {
    id: 'v_mw_e1',
    subject: 'verbal',
    text: 'Choose the word that best completes: "The dog is _____."',
    options: ['Running', 'Run', 'Runs', 'Runner'],
    correctAnswer: 'Running',
    explanation: '"Running" is the correct present continuous form to describe what the dog is doing.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e2',
    subject: 'verbal',
    text: 'Choose the word that best completes: "She _____ to school."',
    options: ['Walk', 'Walking', 'Walks', 'Walked'],
    correctAnswer: 'Walks',
    explanation: '"Walks" is the correct present tense form for third person singular.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e3',
    subject: 'verbal',
    text: 'Choose the word that best completes: "The cat _____ milk."',
    options: ['Drink', 'Drinks', 'Drinking', 'Drank'],
    correctAnswer: 'Drinks',
    explanation: '"Drinks" is the correct present tense form for third person singular.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e4',
    subject: 'verbal',
    text: 'Choose the word that best completes: "I _____ happy today."',
    options: ['Am', 'Is', 'Are', 'Be'],
    correctAnswer: 'Am',
    explanation: '"Am" is the correct form of "be" to use with "I".',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e5',
    subject: 'verbal',
    text: 'Choose the word that best completes: "The birds _____ in the sky."',
    options: ['Fly', 'Flies', 'Flying', 'Flew'],
    correctAnswer: 'Fly',
    explanation: '"Fly" is the correct present tense form for plural subjects.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e6',
    subject: 'verbal',
    text: 'Choose the word that best completes: "We _____ our homework."',
    options: ['Do', 'Does', 'Doing', 'Did'],
    correctAnswer: 'Do',
    explanation: '"Do" is the correct present tense form for plural subjects.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e7',
    subject: 'verbal',
    text: 'Choose the word that best completes: "The sun _____ bright."',
    options: ['Shine', 'Shines', 'Shining', 'Shone'],
    correctAnswer: 'Shines',
    explanation: '"Shines" is the correct present tense form for third person singular.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e8',
    subject: 'verbal',
    text: 'Choose the word that best completes: "You _____ a good student."',
    options: ['Am', 'Is', 'Are', 'Be'],
    correctAnswer: 'Are',
    explanation: '"Are" is the correct form of "be" to use with "you".',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e9',
    subject: 'verbal',
    text: 'Choose the word that best completes: "The flowers _____ beautiful."',
    options: ['Look', 'Looks', 'Looking', 'Looked'],
    correctAnswer: 'Look',
    explanation: '"Look" is the correct present tense form for plural subjects.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_e10',
    subject: 'verbal',
    text: 'Choose the word that best completes: "He _____ a book."',
    options: ['Read', 'Reads', 'Reading', 'Reader'],
    correctAnswer: 'Reads',
    explanation: '"Reads" is the correct present tense form for third person singular.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },

  // Letters for Numbers (10 new)
  {
    id: 'v_ln_e1',
    subject: 'verbal',
    text: 'A = 2, B = 5, C = 3. What is A + B?',
    options: ['5', '7', '8', '10'],
    correctAnswer: '7',
    explanation: 'A + B = 2 + 5 = 7.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e2',
    subject: 'verbal',
    text: 'A = 4, B = 6, C = 2. What is B - C?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '4',
    explanation: 'B - C = 6 - 2 = 4.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e3',
    subject: 'verbal',
    text: 'A = 3, B = 7, C = 1. What is A + C?',
    options: ['3', '4', '7', '10'],
    correctAnswer: '4',
    explanation: 'A + C = 3 + 1 = 4.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e4',
    subject: 'verbal',
    text: 'A = 5, B = 8, C = 3. What is B - A?',
    options: ['2', '3', '5', '8'],
    correctAnswer: '3',
    explanation: 'B - A = 8 - 5 = 3.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e5',
    subject: 'verbal',
    text: 'A = 1, B = 4, C = 6. What is B + C?',
    options: ['6', '8', '10', '11'],
    correctAnswer: '10',
    explanation: 'B + C = 4 + 6 = 10.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e6',
    subject: 'verbal',
    text: 'A = 9, B = 3, C = 4. What is A - B?',
    options: ['3', '6', '9', '12'],
    correctAnswer: '6',
    explanation: 'A - B = 9 - 3 = 6.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e7',
    subject: 'verbal',
    text: 'A = 2, B = 5, C = 8. What is C - A?',
    options: ['3', '6', '8', '10'],
    correctAnswer: '6',
    explanation: 'C - A = 8 - 2 = 6.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e8',
    subject: 'verbal',
    text: 'A = 7, B = 2, C = 5. What is A + B?',
    options: ['5', '7', '9', '12'],
    correctAnswer: '9',
    explanation: 'A + B = 7 + 2 = 9.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e9',
    subject: 'verbal',
    text: 'A = 6, B = 9, C = 1. What is B - C?',
    options: ['6', '8', '9', '10'],
    correctAnswer: '8',
    explanation: 'B - C = 9 - 1 = 8.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_ln_e10',
    subject: 'verbal',
    text: 'A = 4, B = 3, C = 7. What is A + C?',
    options: ['7', '10', '11', '14'],
    correctAnswer: '11',
    explanation: 'A + C = 4 + 7 = 11.',
    difficulty: 'easy',
    verbalType: 'lettersNumbers'
  },

  // Move a Letter (10 new)
  {
    id: 'v_ml_e1',
    subject: 'verbal',
    text: 'Move one letter from "cart" to "old" to make two new words.',
    options: ['c', 'a', 'r', 't'],
    correctAnswer: 'c',
    explanation: 'Moving "c" gives us "art" and "cold".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e2',
    subject: 'verbal',
    text: 'Move one letter from "band" to "ox" to make two new words.',
    options: ['b', 'a', 'n', 'd'],
    correctAnswer: 'b',
    explanation: 'Moving "b" gives us "and" and "box".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e3',
    subject: 'verbal',
    text: 'Move one letter from "sand" to "it" to make two new words.',
    options: ['s', 'a', 'n', 'd'],
    correctAnswer: 's',
    explanation: 'Moving "s" gives us "and" and "sit".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e4',
    subject: 'verbal',
    text: 'Move one letter from "hand" to "at" to make two new words.',
    options: ['h', 'a', 'n', 'd'],
    correctAnswer: 'h',
    explanation: 'Moving "h" gives us "and" and "hat".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e5',
    subject: 'verbal',
    text: 'Move one letter from "land" to "or" to make two new words.',
    options: ['l', 'a', 'n', 'd'],
    correctAnswer: 'l',
    explanation: 'Moving "l" gives us "and" and "lor".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e6',
    subject: 'verbal',
    text: 'Move one letter from "card" to "at" to make two new words.',
    options: ['c', 'a', 'r', 'd'],
    correctAnswer: 'c',
    explanation: 'Moving "c" gives us "ard" and "cat".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e7',
    subject: 'verbal',
    text: 'Move one letter from "part" to "an" to make two new words.',
    options: ['p', 'a', 'r', 't'],
    correctAnswer: 'p',
    explanation: 'Moving "p" gives us "art" and "pan".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e8',
    subject: 'verbal',
    text: 'Move one letter from "hard" to "it" to make two new words.',
    options: ['h', 'a', 'r', 'd'],
    correctAnswer: 'h',
    explanation: 'Moving "h" gives us "ard" and "hit".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e9',
    subject: 'verbal',
    text: 'Move one letter from "ward" to "is" to make two new words.',
    options: ['w', 'a', 'r', 'd'],
    correctAnswer: 'w',
    explanation: 'Moving "w" gives us "ard" and "wis".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_e10',
    subject: 'verbal',
    text: 'Move one letter from "cold" to "at" to make two new words.',
    options: ['c', 'o', 'l', 'd'],
    correctAnswer: 'c',
    explanation: 'Moving "c" gives us "old" and "cat".',
    difficulty: 'easy',
    verbalType: 'moveLetter'
  },

  // Letter Series (10 new)
  {
    id: 'v_ls_e1',
    subject: 'verbal',
    text: 'Continue the series: A, B, C, ?',
    options: ['D', 'E', 'F', 'G'],
    correctAnswer: 'D',
    explanation: 'The series follows alphabetical order, so D comes next.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e2',
    subject: 'verbal',
    text: 'Continue the series: A, C, E, ?',
    options: ['F', 'G', 'H', 'I'],
    correctAnswer: 'G',
    explanation: 'The series skips one letter each time: A(B)C(D)E(F)G.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e3',
    subject: 'verbal',
    text: 'Continue the series: B, D, F, ?',
    options: ['G', 'H', 'I', 'J'],
    correctAnswer: 'H',
    explanation: 'The series skips one letter each time: B(C)D(E)F(G)H.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e4',
    subject: 'verbal',
    text: 'Continue the series: Z, Y, X, ?',
    options: ['V', 'W', 'U', 'T'],
    correctAnswer: 'W',
    explanation: 'The series goes backwards through the alphabet: Z, Y, X, W.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e5',
    subject: 'verbal',
    text: 'Continue the series: A, A, B, B, ?',
    options: ['C', 'B', 'A', 'D'],
    correctAnswer: 'C',
    explanation: 'The pattern repeats each letter twice: A, A, B, B, C, C.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e6',
    subject: 'verbal',
    text: 'Continue the series: M, N, O, ?',
    options: ['P', 'Q', 'R', 'S'],
    correctAnswer: 'P',
    explanation: 'The series follows alphabetical order from M: M, N, O, P.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e7',
    subject: 'verbal',
    text: 'Continue the series: A, D, G, ?',
    options: ['H', 'I', 'J', 'K'],
    correctAnswer: 'J',
    explanation: 'The series skips two letters each time: A(BC)D(EF)G(HI)J.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e8',
    subject: 'verbal',
    text: 'Continue the series: F, E, D, ?',
    options: ['C', 'B', 'A', 'G'],
    correctAnswer: 'C',
    explanation: 'The series goes backwards through the alphabet: F, E, D, C.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e9',
    subject: 'verbal',
    text: 'Continue the series: X, Y, Z, ?',
    options: ['A', 'B', 'C', 'W'],
    correctAnswer: 'A',
    explanation: 'After Z, the alphabet starts over with A.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },
  {
    id: 'v_ls_e10',
    subject: 'verbal',
    text: 'Continue the series: B, E, H, ?',
    options: ['I', 'J', 'K', 'L'],
    correctAnswer: 'K',
    explanation: 'The series skips two letters each time: B(CD)E(FG)H(IJ)K.',
    difficulty: 'easy',
    verbalType: 'letterSeries'
  },

  // Word Connections (10 new)
  {
    id: 'v_wc_e1',
    subject: 'verbal',
    text: 'Complete: Bird is to fly as fish is to ?',
    options: ['Walk', 'Run', 'Swim', 'Jump'],
    correctAnswer: 'Swim',
    explanation: 'Birds fly and fish swim - both are their natural ways of moving.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e2',
    subject: 'verbal',
    text: 'Complete: Hot is to cold as up is to ?',
    options: ['High', 'Low', 'Down', 'Top'],
    correctAnswer: 'Down',
    explanation: 'Hot and cold are opposites, just like up and down.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e3',
    subject: 'verbal',
    text: 'Complete: Eye is to see as ear is to ?',
    options: ['Look', 'Watch', 'Hear', 'Feel'],
    correctAnswer: 'Hear',
    explanation: 'Eyes are for seeing and ears are for hearing.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e4',
    subject: 'verbal',
    text: 'Complete: Teacher is to school as doctor is to ?',
    options: ['Book', 'Hospital', 'Medicine', 'Patient'],
    correctAnswer: 'Hospital',
    explanation: 'Teachers work in schools and doctors work in hospitals.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e5',
    subject: 'verbal',
    text: 'Complete: Pen is to write as knife is to ?',
    options: ['Sharp', 'Cut', 'Metal', 'Handle'],
    correctAnswer: 'Cut',
    explanation: 'Pens are used to write and knives are used to cut.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e6',
    subject: 'verbal',
    text: 'Complete: Car is to road as boat is to ?',
    options: ['Sail', 'Water', 'Ocean', 'Ship'],
    correctAnswer: 'Water',
    explanation: 'Cars travel on roads and boats travel on water.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e7',
    subject: 'verbal',
    text: 'Complete: Hand is to glove as foot is to ?',
    options: ['Leg', 'Toe', 'Shoe', 'Walk'],
    correctAnswer: 'Shoe',
    explanation: 'Hands wear gloves and feet wear shoes.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e8',
    subject: 'verbal',
    text: 'Complete: Sun is to day as moon is to ?',
    options: ['Star', 'Dark', 'Night', 'Sky'],
    correctAnswer: 'Night',
    explanation: 'The sun shines during the day and the moon shines at night.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e9',
    subject: 'verbal',
    text: 'Complete: Book is to read as music is to ?',
    options: ['Song', 'Listen', 'Sound', 'Note'],
    correctAnswer: 'Listen',
    explanation: 'Books are for reading and music is for listening.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v_wc_e10',
    subject: 'verbal',
    text: 'Complete: Flower is to garden as tree is to ?',
    options: ['Leaf', 'Branch', 'Forest', 'Green'],
    correctAnswer: 'Forest',
    explanation: 'Flowers grow in gardens and trees grow in forests.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },

  // Number Series (10 new)
  {
    id: 'v_ns_e1',
    subject: 'verbal',
    text: 'Continue the series: 1, 2, 3, ?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '4',
    explanation: 'The series increases by 1 each time: 1, 2, 3, 4.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e2',
    subject: 'verbal',
    text: 'Continue the series: 5, 10, 15, ?',
    options: ['18', '20', '25', '30'],
    correctAnswer: '20',
    explanation: 'The series increases by 5 each time: 5, 10, 15, 20.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e3',
    subject: 'verbal',
    text: 'Continue the series: 10, 8, 6, ?',
    options: ['4', '5', '2', '3'],
    correctAnswer: '4',
    explanation: 'The series decreases by 2 each time: 10, 8, 6, 4.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e4',
    subject: 'verbal',
    text: 'Continue the series: 3, 6, 9, ?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    explanation: 'The series increases by 3 each time: 3, 6, 9, 12.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e5',
    subject: 'verbal',
    text: 'Continue the series: 1, 3, 5, ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '7',
    explanation: 'The series increases by 2 each time (odd numbers): 1, 3, 5, 7.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e6',
    subject: 'verbal',
    text: 'Continue the series: 20, 18, 16, ?',
    options: ['12', '13', '14', '15'],
    correctAnswer: '14',
    explanation: 'The series decreases by 2 each time: 20, 18, 16, 14.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e7',
    subject: 'verbal',
    text: 'Continue the series: 4, 8, 12, ?',
    options: ['14', '15', '16', '17'],
    correctAnswer: '16',
    explanation: 'The series increases by 4 each time: 4, 8, 12, 16.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e8',
    subject: 'verbal',
    text: 'Continue the series: 2, 4, 6, ?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '8',
    explanation: 'The series increases by 2 each time (even numbers): 2, 4, 6, 8.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e9',
    subject: 'verbal',
    text: 'Continue the series: 15, 12, 9, ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'The series decreases by 3 each time: 15, 12, 9, 6.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_e10',
    subject: 'verbal',
    text: 'Continue the series: 7, 14, 21, ?',
    options: ['26', '27', '28', '29'],
    correctAnswer: '28',
    explanation: 'The series increases by 7 each time: 7, 14, 21, 28.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },

  // Compound Words (10 new)
  {
    id: 'v_cw_e1',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (sun, moon, star) (light, dark, night)',
    options: ['sun, light', 'moon, dark', 'star, night', 'sun, night'],
    correctAnswer: 'sun, light',
    explanation: '"Sun" and "light" combine to make "sunlight".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e2',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (rain, snow, wind) (bow, man, fall)',
    options: ['rain, bow', 'snow, man', 'wind, fall', 'rain, fall'],
    correctAnswer: 'rain, bow',
    explanation: '"Rain" and "bow" combine to make "rainbow".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e3',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (house, car, tree) (boat, park, top)',
    options: ['house, boat', 'car, park', 'tree, top', 'house, top'],
    correctAnswer: 'tree, top',
    explanation: '"Tree" and "top" combine to make "treetop".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e4',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (fire, water, air) (man, fly, plane)',
    options: ['fire, man', 'water, fly', 'air, plane', 'fire, fly'],
    correctAnswer: 'fire, man',
    explanation: '"Fire" and "man" combine to make "fireman".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e5',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (foot, hand, head) (ball, book, light)',
    options: ['foot, ball', 'hand, book', 'head, light', 'foot, book'],
    correctAnswer: 'foot, ball',
    explanation: '"Foot" and "ball" combine to make "football".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e6',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (blue, red, green) (bird, berry, grass)',
    options: ['blue, bird', 'red, berry', 'green, grass', 'blue, berry'],
    correctAnswer: 'blue, bird',
    explanation: '"Blue" and "bird" combine to make "bluebird".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e7',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (gold, silver, copper) (fish, bird, snake)',
    options: ['gold, fish', 'silver, bird', 'copper, snake', 'gold, bird'],
    correctAnswer: 'gold, fish',
    explanation: '"Gold" and "fish" combine to make "goldfish".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e8',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (base, soft, hard) (ball, book, ware)',
    options: ['base, ball', 'soft, book', 'hard, ware', 'base, book'],
    correctAnswer: 'base, ball',
    explanation: '"Base" and "ball" combine to make "baseball".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e9',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (snow, ice, frost) (man, ball, cream)',
    options: ['snow, man', 'ice, ball', 'frost, cream', 'snow, ball'],
    correctAnswer: 'snow, man',
    explanation: '"Snow" and "man" combine to make "snowman".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_e10',
    subject: 'verbal',
    text: 'Find one word from each group to make a compound word: (book, note, copy) (case, book, pad)',
    options: ['book, case', 'note, book', 'copy, pad', 'book, pad'],
    correctAnswer: 'book, case',
    explanation: '"Book" and "case" combine to make "bookcase".',
    difficulty: 'easy',
    verbalType: 'compoundWords'
  },

  // Make a Word (10 new)
  {
    id: 'v_mkw_e1',
    subject: 'verbal',
    text: 'Complete the second group like the first: cats (scat) tack → dogs (?) gods',
    options: ['sgod', 'digs', 'sdog', 'gots'],
    correctAnswer: 'sdog',
    explanation: 'Like "cats" becomes "scat", "dogs" becomes "sdog".',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e2',
    subject: 'verbal',
    text: 'Complete the second group like the first: bear (able) beat → dear (?) date',
    options: ['dale', 'lead', 'deal', 'lade'],
    correctAnswer: 'deal',
    explanation: 'The pattern takes letters from both words to form a new word.',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e3',
    subject: 'verbal',
    text: 'Complete the second group like the first: main (aim) mine → pain (?) pine',
    options: ['pin', 'pan', 'nap', 'pen'],
    correctAnswer: 'pin',
    explanation: 'Following the same pattern as "main" to "aim", "pain" becomes "pin".',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e4',
    subject: 'verbal',
    text: 'Complete the second group like the first: cart (arc) race → dart (?) dear',
    options: ['rad', 'ard', 'red', 'are'],
    correctAnswer: 'ard',
    explanation: 'Following the pattern, "dart" gives us "ard".',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e5',
    subject: 'verbal',
    text: 'Complete the second group like the first: salt (last) team → malt (?) meat',
    options: ['malt', 'team', 'late', 'tame'],
    correctAnswer: 'late',
    explanation: 'Following the same letter pattern, "malt" becomes "late".',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e6',
    subject: 'verbal',
    text: 'Complete the second group like the first: park (rap) keep → mark (?) seem',
    options: ['ram', 'arm', 'mar', 'rae'],
    correctAnswer: 'ram',
    explanation: 'Following the pattern of reversing part of the word.',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e7',
    subject: 'verbal',
    text: 'Complete the second group like the first: band (nab) debt → hand (?) next',
    options: ['nah', 'han', 'and', 'had'],
    correctAnswer: 'nah',
    explanation: 'Following the same reversal pattern.',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e8',
    subject: 'verbal',
    text: 'Complete the second group like the first: rate (ear) tear → late (?) real',
    options: ['ale', 'lea', 'eal', 'lae'],
    correctAnswer: 'ale',
    explanation: 'Following the letter rearrangement pattern.',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e9',
    subject: 'verbal',
    text: 'Complete the second group like the first: stop (pot) tops → shop (?) hops',
    options: ['hop', 'pho', 'ohs', 'sho'],
    correctAnswer: 'hop',
    explanation: 'Following the pattern of taking middle letters.',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },
  {
    id: 'v_mkw_e10',
    subject: 'verbal',
    text: 'Complete the second group like the first: care (ace) race → bare (?) bear',
    options: ['abe', 'bae', 'are', 'reb'],
    correctAnswer: 'are',
    explanation: 'Following the same letter selection pattern.',
    difficulty: 'easy',
    verbalType: 'makeWord'
  },

  // Letter Connections (10 new)
  {
    id: 'v_lc_e1',
    subject: 'verbal',
    text: 'BB is to AA as DD is to ?',
    options: ['CC', 'EE', 'FF', 'GG'],
    correctAnswer: 'CC',
    explanation: 'Each letter moves back one position in the alphabet.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e2',
    subject: 'verbal',
    text: 'AC is to BD as EG is to ?',
    options: ['FH', 'FG', 'EH', 'GI'],
    correctAnswer: 'FH',
    explanation: 'Each letter moves forward one position in the alphabet.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e3',
    subject: 'verbal',
    text: 'AB is to BA as CD is to ?',
    options: ['DC', 'CD', 'CB', 'DB'],
    correctAnswer: 'DC',
    explanation: 'The letters are reversed: AB becomes BA, CD becomes DC.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e4',
    subject: 'verbal',
    text: 'AZ is to BY as CX is to ?',
    options: ['DW', 'DY', 'CW', 'EX'],
    correctAnswer: 'DW',
    explanation: 'First letter moves forward, second letter moves backward.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e5',
    subject: 'verbal',
    text: 'AA is to BB as MM is to ?',
    options: ['NN', 'LL', 'OO', 'MM'],
    correctAnswer: 'NN',
    explanation: 'Each double letter moves forward one position.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e6',
    subject: 'verbal',
    text: 'AD is to BE as GJ is to ?',
    options: ['HK', 'HJ', 'GK', 'IK'],
    correctAnswer: 'HK',
    explanation: 'Both letters move forward one position in the alphabet.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e7',
    subject: 'verbal',
    text: 'ZZ is to YY as XX is to ?',
    options: ['WW', 'YY', 'VV', 'ZZ'],
    correctAnswer: 'WW',
    explanation: 'Each double letter moves backward one position.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e8',
    subject: 'verbal',
    text: 'BC is to CB as FG is to ?',
    options: ['GF', 'FH', 'EF', 'HG'],
    correctAnswer: 'GF',
    explanation: 'The letters are reversed: BC becomes CB, FG becomes GF.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e9',
    subject: 'verbal',
    text: 'AF is to BG as CJ is to ?',
    options: ['DK', 'CK', 'DJ', 'EJ'],
    correctAnswer: 'DK',
    explanation: 'Both letters move forward one position in the alphabet.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_e10',
    subject: 'verbal',
    text: 'MN is to NM as PQ is to ?',
    options: ['QP', 'PR', 'QR', 'PO'],
    correctAnswer: 'QP',
    explanation: 'The letters are reversed: MN becomes NM, PQ becomes QP.',
    difficulty: 'easy',
    verbalType: 'letterConnections'
  },

  // Reading Information (10 new)
  {
    id: 'v_ri_e1',
    subject: 'verbal',
    text: 'Tom has 5 apples. He gives 2 to Mary. How many apples does Tom have now?',
    options: ['2', '3', '5', '7'],
    correctAnswer: '3',
    explanation: 'Tom started with 5 apples and gave away 2, so he has 5 - 2 = 3 apples left.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e2',
    subject: 'verbal',
    text: 'Sara is 8 years old. Her brother is 3 years older. How old is her brother?',
    options: ['5', '8', '11', '13'],
    correctAnswer: '11',
    explanation: 'Sara is 8 and her brother is 3 years older, so he is 8 + 3 = 11 years old.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e3',
    subject: 'verbal',
    text: 'A box has 10 cookies. Children eat 4 cookies. How many cookies are left?',
    options: ['4', '6', '10', '14'],
    correctAnswer: '6',
    explanation: 'There were 10 cookies and 4 were eaten, so 10 - 4 = 6 cookies are left.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e4',
    subject: 'verbal',
    text: 'Jake has 3 red balls and 4 blue balls. How many balls does he have in total?',
    options: ['3', '4', '7', '12'],
    correctAnswer: '7',
    explanation: 'Jake has 3 red balls + 4 blue balls = 7 balls in total.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e5',
    subject: 'verbal',
    text: 'Lisa buys 6 pencils. She already had 2 pencils. How many pencils does she have now?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '8',
    explanation: 'Lisa had 2 pencils and bought 6 more, so she has 2 + 6 = 8 pencils.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e6',
    subject: 'verbal',
    text: 'A garden has 12 flowers. 5 flowers are picked. How many flowers remain?',
    options: ['5', '7', '12', '17'],
    correctAnswer: '7',
    explanation: 'There were 12 flowers and 5 were picked, so 12 - 5 = 7 flowers remain.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e7',
    subject: 'verbal',
    text: 'Ben saves $3 on Monday and $2 on Tuesday. How much money did he save?',
    options: ['$2', '$3', '$5', '$6'],
    correctAnswer: '$5',
    explanation: 'Ben saved $3 + $2 = $5 in total.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e8',
    subject: 'verbal',
    text: 'A class has 15 students. 8 are girls. How many are boys?',
    options: ['7', '8', '15', '23'],
    correctAnswer: '7',
    explanation: 'There are 15 students total and 8 are girls, so 15 - 8 = 7 are boys.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e9',
    subject: 'verbal',
    text: 'Amy reads 4 pages on Friday and 3 pages on Saturday. How many pages did she read?',
    options: ['3', '4', '7', '12'],
    correctAnswer: '7',
    explanation: 'Amy read 4 + 3 = 7 pages in total.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },
  {
    id: 'v_ri_e10',
    subject: 'verbal',
    text: 'A bus has 20 seats. 12 seats are taken. How many seats are empty?',
    options: ['8', '12', '20', '32'],
    correctAnswer: '8',
    explanation: 'There are 20 seats total and 12 are taken, so 20 - 12 = 8 seats are empty.',
    difficulty: 'easy',
    verbalType: 'readingInfo'
  },

  // Opposite Meaning (additional 10 new)
  {
    id: 'v_om_e1',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "big".',
    options: ['Large', 'Small', 'Huge', 'Giant'],
    correctAnswer: 'Small',
    explanation: '"Small" is the opposite of "big" in terms of size.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e2',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "hot".',
    options: ['Warm', 'Cool', 'Cold', 'Fire'],
    correctAnswer: 'Cold',
    explanation: '"Cold" is the opposite of "hot" in terms of temperature.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e3',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "fast".',
    options: ['Quick', 'Slow', 'Speed', 'Rush'],
    correctAnswer: 'Slow',
    explanation: '"Slow" is the opposite of "fast" in terms of speed.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e4',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "up".',
    options: ['High', 'Down', 'Top', 'Above'],
    correctAnswer: 'Down',
    explanation: '"Down" is the opposite of "up" in terms of direction.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e5',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "light".',
    options: ['Bright', 'Dark', 'Shine', 'Glow'],
    correctAnswer: 'Dark',
    explanation: '"Dark" is the opposite of "light" in terms of brightness.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e6',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "old".',
    options: ['Ancient', 'New', 'Aged', 'Elder'],
    correctAnswer: 'New',
    explanation: '"New" is the opposite of "old" in terms of age.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e7',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "tall".',
    options: ['High', 'Short', 'Long', 'Big'],
    correctAnswer: 'Short',
    explanation: '"Short" is the opposite of "tall" in terms of height.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e8',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "quiet".',
    options: ['Silent', 'Loud', 'Soft', 'Calm'],
    correctAnswer: 'Loud',
    explanation: '"Loud" is the opposite of "quiet" in terms of sound.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e9',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "clean".',
    options: ['Neat', 'Dirty', 'Tidy', 'Fresh'],
    correctAnswer: 'Dirty',
    explanation: '"Dirty" is the opposite of "clean" in terms of cleanliness.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_e10',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "empty".',
    options: ['Vacant', 'Full', 'Hollow', 'Blank'],
    correctAnswer: 'Full',
    explanation: '"Full" is the opposite of "empty" in terms of content.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },

  // Complete the Sum (10 new)
  {
    id: 'v_cs_e1',
    subject: 'verbal',
    text: 'Complete the sum: 5 + 3 = 2 + ?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '6',
    explanation: '5 + 3 = 8, so 2 + 6 = 8.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e2',
    subject: 'verbal',
    text: 'Complete the sum: 10 + 2 = 7 + ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: '10 + 2 = 12, so 7 + 5 = 12.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e3',
    subject: 'verbal',
    text: 'Complete the sum: 8 + 4 = 6 + ?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '6',
    explanation: '8 + 4 = 12, so 6 + 6 = 12.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e4',
    subject: 'verbal',
    text: 'Complete the sum: 9 + 1 = 5 + ?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    explanation: '9 + 1 = 10, so 5 + 5 = 10.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e5',
    subject: 'verbal',
    text: 'Complete the sum: 6 + 2 = 4 + ?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
    explanation: '6 + 2 = 8, so 4 + 4 = 8.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e6',
    subject: 'verbal',
    text: 'Complete the sum: 7 + 5 = 8 + ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: '7 + 5 = 12, so 8 + 4 = 12.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e7',
    subject: 'verbal',
    text: 'Complete the sum: 4 + 6 = 3 + ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '7',
    explanation: '4 + 6 = 10, so 3 + 7 = 10.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e8',
    subject: 'verbal',
    text: 'Complete the sum: 3 + 7 = 5 + ?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    explanation: '3 + 7 = 10, so 5 + 5 = 10.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e9',
    subject: 'verbal',
    text: 'Complete the sum: 12 + 3 = 10 + ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: '12 + 3 = 15, so 10 + 5 = 15.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_e10',
    subject: 'verbal',
    text: 'Complete the sum: 8 + 7 = 9 + ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: '8 + 7 = 15, so 9 + 6 = 15.',
    difficulty: 'easy',
    verbalType: 'completeSum'
  },

  // Related Numbers (10 new)
  {
    id: 'v_rn_e1',
    subject: 'verbal',
    text: 'Find the missing number: (2 [6] 4) (3 [9] 6) (1 [?] 2)',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'The pattern is: first number + second number = middle number. 1 + 2 = 3.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e2',
    subject: 'verbal',
    text: 'Find the missing number: (5 [10] 15) (3 [6] 9) (2 [?] 6)',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: 'The middle number is the average: (5+15)/2=10, (3+9)/2=6, (2+6)/2=4.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e3',
    subject: 'verbal',
    text: 'Find the missing number: (4 [8] 12) (2 [4] 6) (3 [?] 9)',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'The middle number is the average: (4+12)/2=8, (2+6)/2=4, (3+9)/2=6.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e4',
    subject: 'verbal',
    text: 'Find the missing number: (1 [3] 5) (2 [4] 6) (4 [?] 8)',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'The middle number is the average: (1+5)/2=3, (2+6)/2=4, (4+8)/2=6.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e5',
    subject: 'verbal',
    text: 'Find the missing number: (6 [3] 0) (8 [4] 0) (10 [?] 0)',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'The middle number is half the first number: 6/2=3, 8/2=4, 10/2=5.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e6',
    subject: 'verbal',
    text: 'Find the missing number: (2 [4] 2) (3 [6] 3) (5 [?] 5)',
    options: ['8', '9', '10', '11'],
    correctAnswer: '10',
    explanation: 'The middle number is double the outer numbers: 2×2=4, 3×2=6, 5×2=10.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e7',
    subject: 'verbal',
    text: 'Find the missing number: (7 [14] 21) (4 [8] 12) (3 [?] 9)',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'The middle number is the average: (7+21)/2=14, (4+12)/2=8, (3+9)/2=6.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e8',
    subject: 'verbal',
    text: 'Find the missing number: (9 [3] 1) (12 [4] 1) (15 [?] 1)',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    explanation: 'The middle number is the first number divided by 3: 9/3=3, 12/3=4, 15/3=5.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e9',
    subject: 'verbal',
    text: 'Find the missing number: (5 [25] 5) (3 [9] 3) (4 [?] 4)',
    options: ['12', '14', '16', '18'],
    correctAnswer: '16',
    explanation: 'The middle number is the square of the outer numbers: 5²=25, 3²=9, 4²=16.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_e10',
    subject: 'verbal',
    text: 'Find the missing number: (6 [2] 3) (8 [2] 4) (10 [?] 5)',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'The pattern shows: first number ÷ third number = middle number. 10÷5=2.',
    difficulty: 'easy',
    verbalType: 'relatedNumbers'
  },

  // Word-Number Codes (10 new)
  {
    id: 'v_wnc_e1',
    subject: 'verbal',
    text: 'If CAT = 312, what does DOG equal? (A=1, B=2, C=3...)',
    options: ['415', '496', '481', '467'],
    correctAnswer: '415',
    explanation: 'D=4, O=15, G=7, so DOG = 415.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e2',
    subject: 'verbal',
    text: 'If BAT = 212, what does BEE equal? (A=1, B=2, C=3...)',
    options: ['255', '225', '522', '552'],
    correctAnswer: '255',
    explanation: 'B=2, E=5, E=5, so BEE = 255.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e3',
    subject: 'verbal',
    text: 'If RED = 514, what does BLUE equal? (A=1, B=2, C=3...)',
    options: ['2125', '2521', '1225', '5212'],
    correctAnswer: '2125',
    explanation: 'B=2, L=12, U=21, E=5, so BLUE = 2,12,21,5.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e4',
    subject: 'verbal',
    text: 'If SUN = 195, what does MOON equal? (A=1, B=2, C=3...)',
    options: ['13151514', '13155', '1315155', '131551'],
    correctAnswer: '131551',
    explanation: 'M=13, O=15, O=15, N=14, but simplified as 131551.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e5',
    subject: 'verbal',
    text: 'If PIG = 197, what does COW equal? (A=1, B=2, C=3...)',
    options: ['3153', '31523', '315234', '31523'],
    correctAnswer: '31523',
    explanation: 'C=3, O=15, W=23, so COW = 31523.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e6',
    subject: 'verbal',
    text: 'If EGG = 577, what does HAM equal? (A=1, B=2, C=3...)',
    options: ['8113', '11138', '1813', '18113'],
    correctAnswer: '8113',
    explanation: 'H=8, A=1, M=13, so HAM = 8113.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e7',
    subject: 'verbal',
    text: 'If ICE = 935, what does FIRE equal? (A=1, B=2, C=3...)',
    options: ['69185', '61918', '619185', '6918'],
    correctAnswer: '61918',
    explanation: 'F=6, I=9, R=18, E=5, so FIRE = 61918.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e8',
    subject: 'verbal',
    text: 'If BOX = 241524, what does BAG equal? (A=1, B=2, C=3...)',
    options: ['217', '271', '127', '172'],
    correctAnswer: '217',
    explanation: 'B=2, A=1, G=7, so BAG = 217.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e9',
    subject: 'verbal',
    text: 'If KEY = 11525, what does LOCK equal? (A=1, B=2, C=3...)',
    options: ['12153511', '121535', '1215311', '12153'],
    correctAnswer: '1215311',
    explanation: 'L=12, O=15, C=3, K=11, so LOCK = 1215311.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_e10',
    subject: 'verbal',
    text: 'If JAR = 10118, what does CUP equal? (A=1, B=2, C=3...)',
    options: ['32116', '321216', '32116', '31216'],
    correctAnswer: '32116',
    explanation: 'C=3, U=21, P=16, so CUP = 32116.',
    difficulty: 'easy',
    verbalType: 'wordNumberCodes'
  },

  // Complete the Word (10 new)
  {
    id: 'v_ctw_e1',
    subject: 'verbal',
    text: 'Complete like the pattern: bread (red) ready → chair (?) hairy',
    options: ['air', 'hai', 'cha', 'iry'],
    correctAnswer: 'air',
    explanation: 'Taking letters from both words: "chair" gives "air" like "bread" gives "red".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e2',
    subject: 'verbal',
    text: 'Complete like the pattern: stand (and) sandy → plant (?) panty',
    options: ['ant', 'lan', 'pla', 'nty'],
    correctAnswer: 'ant',
    explanation: 'Taking the last three letters: "stand" gives "and", "plant" gives "ant".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e3',
    subject: 'verbal',
    text: 'Complete like the pattern: green (een) scene → black (?) clack',
    options: ['ack', 'lac', 'bla', 'ck'],
    correctAnswer: 'ack',
    explanation: 'Taking the last three letters: "green" gives "een", "black" gives "ack".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e4',
    subject: 'verbal',
    text: 'Complete like the pattern: water (ate) later → house (?) mouse',
    options: ['ous', 'hou', 'use', 'mou'],
    correctAnswer: 'ous',
    explanation: 'Taking middle letters: "water" gives "ate", "house" gives "ous".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e5',
    subject: 'verbal',
    text: 'Complete like the pattern: table (tab) stab → chair (?) hair',
    options: ['cha', 'hai', 'air', 'chr'],
    correctAnswer: 'cha',
    explanation: 'Taking the first three letters: "table" gives "tab", "chair" gives "cha".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e6',
    subject: 'verbal',
    text: 'Complete like the pattern: money (one) honey → paper (?) caper',
    options: ['ape', 'pap', 'per', 'cap'],
    correctAnswer: 'ape',
    explanation: 'Taking middle letters: "money" gives "one", "paper" gives "ape".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e7',
    subject: 'verbal',
    text: 'Complete like the pattern: smile (mil) while → grace (?) place',
    options: ['rac', 'gra', 'ace', 'pla'],
    correctAnswer: 'rac',
    explanation: 'Taking middle letters: "smile" gives "mil", "grace" gives "rac".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e8',
    subject: 'verbal',
    text: 'Complete like the pattern: bridge (rid) pride → flower (?) lower',
    options: ['low', 'flo', 'owe', 'wer'],
    correctAnswer: 'low',
    explanation: 'Taking middle letters: "bridge" gives "rid", "flower" gives "low".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e9',
    subject: 'verbal',
    text: 'Complete like the pattern: tiger (ger) finger → snake (?) awake',
    options: ['nak', 'sna', 'ake', 'awa'],
    correctAnswer: 'nak',
    explanation: 'Taking middle letters: "tiger" gives "ger", "snake" gives "nak".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_e10',
    subject: 'verbal',
    text: 'Complete like the pattern: castle (ast) master → palace (?) malace',
    options: ['ala', 'pal', 'ace', 'mal'],
    correctAnswer: 'ala',
    explanation: 'Taking middle letters: "castle" gives "ast", "palace" gives "ala".',
    difficulty: 'easy',
    verbalType: 'completeWord'
  },

  // Same Meaning (additional 10 new)
  {
    id: 'v_sm_e1',
    subject: 'verbal',
    text: 'Which word means the same as "begin"?',
    options: ['End', 'Start', 'Stop', 'Finish'],
    correctAnswer: 'Start',
    explanation: '"Start" means the same as "begin" - to commence or initiate.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e2',
    subject: 'verbal',
    text: 'Which word means the same as "glad"?',
    options: ['Sad', 'Happy', 'Angry', 'Tired'],
    correctAnswer: 'Happy',
    explanation: '"Happy" means the same as "glad" - feeling pleased or content.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e3',
    subject: 'verbal',
    text: 'Which word means the same as "big"?',
    options: ['Small', 'Large', 'Tiny', 'Little'],
    correctAnswer: 'Large',
    explanation: '"Large" means the same as "big" - having great size.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e4',
    subject: 'verbal',
    text: 'Which word means the same as "quick"?',
    options: ['Slow', 'Fast', 'Late', 'Lazy'],
    correctAnswer: 'Fast',
    explanation: '"Fast" means the same as "quick" - moving at high speed.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e5',
    subject: 'verbal',
    text: 'Which word means the same as "little"?',
    options: ['Big', 'Small', 'Huge', 'Giant'],
    correctAnswer: 'Small',
    explanation: '"Small" means the same as "little" - having a small size.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e6',
    subject: 'verbal',
    text: 'Which word means the same as "mad"?',
    options: ['Happy', 'Calm', 'Angry', 'Peaceful'],
    correctAnswer: 'Angry',
    explanation: '"Angry" means the same as "mad" - feeling upset or annoyed.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e7',
    subject: 'verbal',
    text: 'Which word means the same as "shut"?',
    options: ['Open', 'Close', 'Wide', 'Unlock'],
    correctAnswer: 'Close',
    explanation: '"Close" means the same as "shut" - to seal or block an opening.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e8',
    subject: 'verbal',
    text: 'Which word means the same as "help"?',
    options: ['Hurt', 'Assist', 'Block', 'Stop'],
    correctAnswer: 'Assist',
    explanation: '"Assist" means the same as "help" - to give support or aid.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e9',
    subject: 'verbal',
    text: 'Which word means the same as "pick"?',
    options: ['Drop', 'Choose', 'Leave', 'Throw'],
    correctAnswer: 'Choose',
    explanation: '"Choose" means the same as "pick" - to select from options.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v_sm_e10',
    subject: 'verbal',
    text: 'Which word means the same as "finish"?',
    options: ['Start', 'Begin', 'Complete', 'Open'],
    correctAnswer: 'Complete',
    explanation: '"Complete" means the same as "finish" - to bring to an end.',
    difficulty: 'easy',
    verbalType: 'sameMeaning'
  }
];

export default easyVerbalQuestions;
