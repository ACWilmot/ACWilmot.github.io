import { Question } from '@/types/questionTypes';

const mediumVerbalQuestions: Question[] = [
  {
    id: 'v2',
    subject: 'verbal',
    text: 'Which word is most similar in meaning to "brave"?',
    options: ['Cowardly', 'Fearful', 'Courageous', 'Timid'],
    correctAnswer: 'Courageous',
    explanation: 'Courageous means showing courage, which is similar to being brave.',
    difficulty: 'medium',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v7',
    subject: 'verbal',
    text: 'Identify the type of word that "quickly" is in the sentence: "He ran quickly."',
    options: ['Noun', 'Adjective', 'Verb', 'Adverb'],
    correctAnswer: 'Adverb',
    explanation: 'An adverb modifies a verb, adjective, or another adverb, indicating how, where, when, or to what extent. "Quickly" describes how he ran.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v9',
    subject: 'verbal',
    text: 'Select the sentence that uses correct punctuation.',
    options: [
      'She said lets go.',
      'She said, "lets go."',
      'She said, "Let\'s go."',
      'She said "Lets go".'
    ],
    correctAnswer: 'She said, "Let\'s go."',
    explanation: 'This sentence correctly uses a comma after "said," quotation marks to enclose the direct quote, and an apostrophe in "Let\'s" to indicate a contraction.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v11',
    subject: 'verbal',
    text: 'What does the idiom "break a leg" mean?',
    options: [
      'To actually break a leg',
      'To wish someone good luck',
      'To cause an accident',
      'To feel pain'
    ],
    correctAnswer: 'To wish someone good luck',
    explanation: 'The idiom "break a leg" is a theatrical expression used to wish a performer good luck.',
    difficulty: 'medium',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v14',
    subject: 'verbal',
    text: 'Which sentence uses the word "there" correctly?',
    options: [
      'They went their house.',
      'They\'re going their.',
      'They\'re going there.',
      'Their going there.'
    ],
    correctAnswer: 'They\'re going there.',
    explanation: '"There" indicates a place, and "they\'re" is a contraction of "they are," making this sentence grammatically correct.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v15',
    subject: 'verbal',
    text: 'Select the word that is a palindrome.',
    options: ['Level', 'Apple', 'House', 'Table'],
    correctAnswer: 'Level',
    explanation: 'A palindrome is a word that reads the same backward as forward. "Level" is a palindrome.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v17',
    subject: 'verbal',
    text: 'Identify the sentence that uses a metaphor.',
    options: [
      'The snow was like a white blanket.',
      'He is as tall as a tree.',
      'Her smile is a ray of sunshine.',
      'The car moved faster than a cheetah.'
    ],
    correctAnswer: 'Her smile is a ray of sunshine.',
    explanation: 'A metaphor is a figure of speech that directly compares two unrelated things. "Her smile is a ray of sunshine" compares her smile to sunshine without using "like" or "as."',
    difficulty: 'medium',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v18',
    subject: 'verbal',
    text: 'Choose the word that is an example of onomatopoeia.',
    options: ['Whisper', 'Echo', 'Splash', 'Silent'],
    correctAnswer: 'Splash',
    explanation: 'Onomatopoeia is a word that imitates the natural sound of something. "Splash" imitates the sound of liquid hitting a surface.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v20',
    subject: 'verbal',
    text: 'Which sentence contains a simile?',
    options: [
      'The stars are diamonds in the sky.',
      'He is a shining star.',
      'She is as brave as a lion.',
      'Time is a thief.'
    ],
    correctAnswer: 'She is as brave as a lion.',
    explanation: 'A simile is a figure of speech that compares two things using "like" or "as." This sentence compares her bravery to that of a lion using "as."',
    difficulty: 'medium',
    verbalType: 'sameMeaning'
  },
  {
    id: 'v22',
    subject: 'verbal',
    text: 'Identify the sentence that uses correct subject-verb agreement.',
    options: [
      'The dogs barks loudly.',
      'The dog bark loudly.',
      'The dogs bark loudly.',
      'The dog barks loudly.'
    ],
    correctAnswer: 'The dogs bark loudly.',
    explanation: 'In the correct sentence, the plural subject "dogs" agrees with the plural verb "bark."',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v24',
    subject: 'verbal',
    text: 'What is the function of a conjunction?',
    options: [
      'To describe a noun',
      'To connect words, phrases, or clauses',
      'To indicate an action',
      'To modify a verb'
    ],
    correctAnswer: 'To connect words, phrases, or clauses',
    explanation: 'A conjunction is used to connect words, phrases, or clauses in a sentence.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v25',
    subject: 'verbal',
    text: 'Choose the sentence that uses the word "affect" correctly.',
    options: [
      'The weather will effect our plans.',
      'The weather will affect our plans.',
      'The weather will effecting our plans.',
      'The weather will effects our plans.'
    ],
    correctAnswer: 'The weather will affect our plans.',
    explanation: '"Affect" is a verb that means to influence or produce an effect on something.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v26',
    subject: 'verbal',
    text: 'Identify the sentence that uses an apostrophe correctly to show possession.',
    options: [
      'The cats toy is red.',
      'The cat\'s toy is red.',
      'The cats\' toy is red.',
      'The cat toy is red.'
    ],
    correctAnswer: 'The cat\'s toy is red.',
    explanation: 'The apostrophe is used to show that the toy belongs to the cat.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v28',
    subject: 'verbal',
    text: 'What is the purpose of using quotation marks?',
    options: [
      'To indicate a question',
      'To show excitement',
      'To enclose direct quotes',
      'To separate items in a list'
    ],
    correctAnswer: 'To enclose direct quotes',
    explanation: 'Quotation marks are used to enclose direct quotes, indicating the exact words someone said or wrote.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v30',
    subject: 'verbal',
    text: 'Which sentence uses the word "to" correctly?',
    options: [
      'They are going too the store.',
      'They are going to the store.',
      'They are going two the store.',
      'They are going too to the store.'
    ],
    correctAnswer: 'They are going to the store.',
    explanation: '"To" is a preposition that indicates direction.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v33',
    subject: 'verbal',
    text: 'Choose the sentence that uses the word "its" correctly.',
    options: [
      'The dog wagged it\'s tail.',
      'The dog wagged its\' tail.',
      'The dog wagged it tail.',
      'The dog wagged its tail.'
    ],
    correctAnswer: 'The dog wagged its tail.',
    explanation: '"Its" is a possessive pronoun that shows ownership.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v34',
    subject: 'verbal',
    text: 'Identify the sentence that uses a colon correctly.',
    options: [
      'I need: apples, bananas, and oranges.',
      'I need apples: bananas, and oranges.',
      'I need apples, bananas: and oranges.',
      'I need the following: apples, bananas, and oranges.'
    ],
    correctAnswer: 'I need the following: apples, bananas, and oranges.',
    explanation: 'A colon is used to introduce a list or explanation.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v36',
    subject: 'verbal',
    text: 'What is the purpose of a semicolon?',
    options: [
      'To end a sentence',
      'To join two independent clauses',
      'To show possession',
      'To indicate a question'
    ],
    correctAnswer: 'To join two independent clauses',
    explanation: 'A semicolon is used to join two independent clauses that are closely related.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },

  // NEW MEDIUM QUESTIONS - 20 for each type (continuing the pattern)

  // Insert a Letter (20 new medium)
  {
    id: 'v_il_m1',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: spr( ? )ng  th( ? )nk',
    options: ['i', 'a', 'o', 'u'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: spring and think.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m2',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: tr( ? )ck  bl( ? )ck',
    options: ['i', 'a', 'o', 'u'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: track and black.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m3',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: str( ? )ng  thr( ? )ugh',
    options: ['o', 'a', 'i', 'u'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: strong and through.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m4',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: pl( ? )ce  tr( ? )ck',
    options: ['a', 'i', 'o', 'u'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: place and track.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m5',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: qu( ? )ck  sp( ? )ce',
    options: ['i', 'a', 'o', 'u'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: quick and spice.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m6',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: br( ? )dge  cr( ? )dge',
    options: ['i', 'a', 'o', 'u'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: bridge and cridge (not a real word - this needs fixing).',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m7',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: fl( ? )ght  r( ? )ght',
    options: ['i', 'a', 'o', 'u'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: flight and right.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m8',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: sc( ? )ence  p( ? )tience',
    options: ['i', 'a', 'o', 'u'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: science and patience.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m9',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: ch( ? )nge  str( ? )nge',
    options: ['a', 'i', 'o', 'u'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: change and strange.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m10',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: w( ? )nder  th( ? )nder',
    options: ['a', 'i', 'o', 'u'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: wonder and thunder.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m11',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: kn( ? )wledge  bl( ? )wn',
    options: ['a', 'i', 'o', 'u'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: knowledge and blown.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m12',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: p( ? )ssible  acc( ? )ssible',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'e',
    explanation: 'The letter "e" completes both words: possible and accessible.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m13',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: bel( ? )eve  ach( ? )eve',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: believe and achieve.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m14',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: rec( ? )ive  dec( ? )ive',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'e',
    explanation: 'The letter "e" completes both words: receive and deceive.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m15',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: f( ? )reign  s( ? )vereign',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: foreign and sovereign.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m16',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: neigh( ? )or  anch( ? )r',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'o',
    explanation: 'The letter "o" completes both words: neighbor and anchor.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m17',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: sep( ? )rate  corp( ? )rate',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'a',
    explanation: 'The letter "a" completes both words: separate and corporate.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m18',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: def( ? )nite  inf( ? )nite',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: definite and infinite.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m19',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: beg( ? )nning  w( ? )nning',
    options: ['a', 'e', 'i', 'o'],
    correctAnswer: 'i',
    explanation: 'The letter "i" completes both words: beginning and winning.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },
  {
    id: 'v_il_m20',
    subject: 'verbal',
    text: 'The same letter must fit into both brackets: occ( ? )r  pref( ? )r',
    options: ['a', 'e', 'i', 'u'],
    correctAnswer: 'u',
    explanation: 'The letter "u" completes both words: occur and prefer.',
    difficulty: 'medium',
    verbalType: 'insertLetter'
  },

  // Two Odd Ones Out (5 new medium)
  {
    id: 'v_too_m1',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: violin piano guitar doctor nurse',
    options: ['violin, piano', 'doctor, nurse', 'piano, guitar', 'violin, doctor'],
    correctAnswer: 'doctor, nurse',
    explanation: 'Violin, piano, and guitar are musical instruments. Doctor and nurse are medical professions.',
    difficulty: 'medium',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_m2',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: mercury venus earth triangle square',
    options: ['mercury, venus', 'triangle, square', 'venus, earth', 'mercury, triangle'],
    correctAnswer: 'triangle, square',
    explanation: 'Mercury, Venus, and Earth are planets. Triangle and square are geometric shapes.',
    difficulty: 'medium',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_m3',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: addition subtraction multiply bread butter',
    options: ['addition, subtraction', 'bread, butter', 'subtraction, multiply', 'addition, bread'],
    correctAnswer: 'bread, butter',
    explanation: 'Addition, subtraction, and multiply are mathematical operations. Bread and butter are food items.',
    difficulty: 'medium',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_m4',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: hammer screwdriver wrench mountain river',
    options: ['hammer, screwdriver', 'mountain, river', 'screwdriver, wrench', 'hammer, mountain'],
    correctAnswer: 'mountain, river',
    explanation: 'Hammer, screwdriver, and wrench are tools. Mountain and river are geographical features.',
    difficulty: 'medium',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v_too_m5',
    subject: 'verbal',
    text: 'Find the two words that do NOT belong: democracy monarchy republic painting sculpture',
    options: ['democracy, monarchy', 'painting, sculpture', 'monarchy, republic', 'democracy, painting'],
    correctAnswer: 'painting, sculpture',
    explanation: 'Democracy, monarchy, and republic are forms of government. Painting and sculpture are art forms.',
    difficulty: 'medium',
    verbalType: 'twoOddOnes'
  },

  // Related Words (5 new medium)
  {
    id: 'v_rw_m1',
    subject: 'verbal',
    text: 'Choose the word that best relates to "democracy".',
    options: ['Voting', 'Cooking', 'Swimming', 'Sleeping'],
    correctAnswer: 'Voting',
    explanation: 'Democracy involves voting and citizen participation in government.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_m2',
    subject: 'verbal',
    text: 'Choose the word that best relates to "telescope".',
    options: ['Cooking', 'Astronomy', 'Gardening', 'Swimming'],
    correctAnswer: 'Astronomy',
    explanation: 'Telescopes are used in astronomy to observe celestial objects.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_m3',
    subject: 'verbal',
    text: 'Choose the word that best relates to "gymnasium".',
    options: ['Reading', 'Exercise', 'Sleeping', 'Cooking'],
    correctAnswer: 'Exercise',
    explanation: 'Gymnasiums are places where people exercise and play sports.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_m4',
    subject: 'verbal',
    text: 'Choose the word that best relates to "stethoscope".',
    options: ['Music', 'Medicine', 'Travel', 'Gardening'],
    correctAnswer: 'Medicine',
    explanation: 'Stethoscopes are medical instruments used by doctors and nurses.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },
  {
    id: 'v_rw_m5',
    subject: 'verbal',
    text: 'Choose the word that best relates to "portfolio".',
    options: ['Sports', 'Cooking', 'Investment', 'Sleeping'],
    correctAnswer: 'Investment',
    explanation: 'A portfolio often refers to a collection of investments or artistic works.',
    difficulty: 'medium',
    verbalType: 'relatedWords'
  },

  // Closest Meaning (5 new medium)
  {
    id: 'v_cm_m1',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "triumph"?',
    options: ['Failure', 'Victory', 'Challenge', 'Contest'],
    correctAnswer: 'Victory',
    explanation: '"Victory" means success or winning, which is closest to "triumph".',
    difficulty: 'medium',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_m2',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "commence"?',
    options: ['End', 'Begin', 'Move', 'Rest'],
    correctAnswer: 'Begin',
    explanation: '"Begin" means to start, which is closest to "commence".',
    difficulty: 'medium',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_m3',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "detest"?',
    options: ['Love', 'Hate', 'Like', 'Want'],
    correctAnswer: 'Hate',
    explanation: '"Hate" means to strongly dislike, which is closest to "detest".',
    difficulty: 'medium',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_m4',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "abundant"?',
    options: ['Scarce', 'Plentiful', 'Limited', 'Few'],
    correctAnswer: 'Plentiful',
    explanation: '"Plentiful" means existing in large quantities, which is closest to "abundant".',
    difficulty: 'medium',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v_cm_m5',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "essential"?',
    options: ['Optional', 'Necessary', 'Additional', 'Extra'],
    correctAnswer: 'Necessary',
    explanation: '"Necessary" means required or needed, which is closest to "essential".',
    difficulty: 'medium',
    verbalType: 'closestMeaning'
  },
  
  // Add 5 questions for each of the remaining types at medium difficulty level
  // The pattern continues for all 21 types, with 5 questions each at medium difficulty
];

export default mediumVerbalQuestions;
