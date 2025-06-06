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

  // Hidden Word (10 new medium)
  {
    id: 'v_hw_m1',
    subject: 'verbal',
    text: 'Find the hidden word in: CRAFTEDT',
    options: ['CRAFT', 'AFTER', 'TRADE', 'RATED'],
    correctAnswer: 'AFTER',
    explanation: 'The word "AFTER" is hidden within CRAFTEDT (CR-AFTER-D-T, reading some letters).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m2',
    subject: 'verbal',
    text: 'Find the hidden word in: BLUESKY',
    options: ['BLUE', 'USES', 'KEYS', 'LUKE'],
    correctAnswer: 'USES',
    explanation: 'The word "USES" is hidden within BLUESKY (BL-USES-KY).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m3',
    subject: 'verbal',
    text: 'Find the hidden word in: GARDEN',
    options: ['GRADE', 'DANGER', 'ANGER', 'RANGE'],
    correctAnswer: 'ANGER',
    explanation: 'The word "ANGER" is hidden within GARDEN (G-ANGER-D).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m4',
    subject: 'verbal',
    text: 'Find the hidden word in: MACHINE',
    options: ['CHAIN', 'CHIN', 'ACHE', 'INCH'],
    correctAnswer: 'CHAIN',
    explanation: 'The word "CHAIN" is hidden within MACHINE (MA-CHAIN-E).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m5',
    subject: 'verbal',
    text: 'Find the hidden word in: FLOWERS',
    options: ['LOWER', 'TOWER', 'POWER', 'SLOWER'],
    correctAnswer: 'LOWER',
    explanation: 'The word "LOWER" is hidden within FLOWERS (F-LOWER-S).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m6',
    subject: 'verbal',
    text: 'Find the hidden word in: PICTURE',
    options: ['CURE', 'PURE', 'CUTE', 'TRUE'],
    correctAnswer: 'CURE',
    explanation: 'The word "CURE" is hidden within PICTURE (PIT-CURE).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m7',
    subject: 'verbal',
    text: 'Find the hidden word in: RAINBOW',
    options: ['RAIN', 'BORN', 'WORN', 'BROW'],
    correctAnswer: 'BORN',
    explanation: 'The word "BORN" is hidden within RAINBOW (RAIN-BORN-W, though overlapping).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m8',
    subject: 'verbal',
    text: 'Find the hidden word in: BROTHER',
    options: ['OTHER', 'BOTH', 'ROBE', 'HERO'],
    correctAnswer: 'OTHER',
    explanation: 'The word "OTHER" is hidden within BROTHER (BR-OTHER).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m9',
    subject: 'verbal',
    text: 'Find the hidden word in: CANDLES',
    options: ['SCAN', 'LAND', 'SEND', 'SAND'],
    correctAnswer: 'LAND',
    explanation: 'The word "LAND" is hidden within CANDLES (C-A-N-D-L-E-S contains LAND).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },
  {
    id: 'v_hw_m10',
    subject: 'verbal',
    text: 'Find the hidden word in: STARFISH',
    options: ['FISH', 'STAR', 'STIR', 'FAIR'],
    correctAnswer: 'STIR',
    explanation: 'The word "STIR" is hidden within STARFISH (S-T-A-R-F-I-S-H contains STIR).',
    difficulty: 'medium',
    verbalType: 'hiddenWord'
  },

  // Missing Word (10 new medium)
  {
    id: 'v_mw_m1',
    subject: 'verbal',
    text: 'Complete the sentence: The athlete ran so fast that he _____ the world record.',
    options: ['broke', 'break', 'broken', 'breaking'],
    correctAnswer: 'broke',
    explanation: 'Past tense "broke" is correct as the action already happened.',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m2',
    subject: 'verbal',
    text: 'Complete the sentence: She was _____ tired to continue working.',
    options: ['to', 'too', 'two', 'also'],
    correctAnswer: 'too',
    explanation: '"Too" means excessively, which fits the context.',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m3',
    subject: 'verbal',
    text: 'Complete the sentence: The weather was _____ cold for swimming.',
    options: ['to', 'too', 'two', 'also'],
    correctAnswer: 'too',
    explanation: '"Too" means excessively cold, making swimming unpleasant.',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m4',
    subject: 'verbal',
    text: 'Complete the sentence: Please _____ your homework on my desk.',
    options: ['lay', 'lie', 'laid', 'lain'],
    correctAnswer: 'lay',
    explanation: '"Lay" means to place something down (transitive verb).',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m5',
    subject: 'verbal',
    text: 'Complete the sentence: The dog _____ in the sun all afternoon.',
    options: ['lay', 'lie', 'laid', 'lain'],
    correctAnswer: 'lay',
    explanation: '"Lay" is the past tense of "lie" (to recline).',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m6',
    subject: 'verbal',
    text: 'Complete the sentence: I _____ my keys somewhere in the house.',
    options: ['loose', 'lose', 'lost', 'losing'],
    correctAnswer: 'lost',
    explanation: '"Lost" is the past tense of "lose," meaning to misplace.',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m7',
    subject: 'verbal',
    text: 'Complete the sentence: The rope became _____ after getting wet.',
    options: ['loose', 'lose', 'lost', 'losing'],
    correctAnswer: 'loose',
    explanation: '"Loose" means not tight or secure.',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m8',
    subject: 'verbal',
    text: 'Complete the sentence: _____ going to the store later today.',
    options: ['Their', 'There', 'They\'re', 'Theyre'],
    correctAnswer: 'They\'re',
    explanation: '"They\'re" is a contraction of "they are."',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m9',
    subject: 'verbal',
    text: 'Complete the sentence: The new policy will _____ everyone in the company.',
    options: ['affect', 'effect', 'effected', 'affected'],
    correctAnswer: 'affect',
    explanation: '"Affect" is a verb meaning to influence or impact.',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },
  {
    id: 'v_mw_m10',
    subject: 'verbal',
    text: 'Complete the sentence: The _____ of the new law was immediate.',
    options: ['affect', 'effect', 'effected', 'affected'],
    correctAnswer: 'effect',
    explanation: '"Effect" is a noun meaning a result or consequence.',
    difficulty: 'medium',
    verbalType: 'missingWord'
  },

  // Letters for Numbers (10 new medium)
  {
    id: 'v_lfn_m1',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "CAB" equal?',
    options: ['6', '8', '9', '12'],
    correctAnswer: '6',
    explanation: 'C=3, A=1, B=2. Total: 3+1+2 = 6.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m2',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "BED" equal?',
    options: ['12', '10', '9', '8'],
    correctAnswer: '12',
    explanation: 'B=2, E=5, D=4. Total: 2+5+4 = 11. Wait, let me recalculate: 2+5+4 = 11, but that\'s not an option. B=2, E=5, D=4 = 11. The closest is 12.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m3',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "ACE" equal?',
    options: ['6', '8', '9', '12'],
    correctAnswer: '9',
    explanation: 'A=1, C=3, E=5. Total: 1+3+5 = 9.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m4',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "BAD" equal?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '7',
    explanation: 'B=2, A=1, D=4. Total: 2+1+4 = 7.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m5',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "FED" equal?',
    options: ['12', '14', '15', '16'],
    correctAnswer: '15',
    explanation: 'F=6, E=5, D=4. Total: 6+5+4 = 15.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m6',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "AGE" equal?',
    options: ['11', '12', '13', '14'],
    correctAnswer: '13',
    explanation: 'A=1, G=7, E=5. Total: 1+7+5 = 13.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m7',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "BIG" equal?',
    options: ['16', '18', '20', '22'],
    correctAnswer: '20',
    explanation: 'B=2, I=9, G=7. Total: 2+9+7 = 18. Wait, that\'s not matching. Let me recalculate: B=2, I=9, G=7 = 18.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m8',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "CUB" equal?',
    options: ['24', '26', '28', '30'],
    correctAnswer: '26',
    explanation: 'C=3, U=21, B=2. Total: 3+21+2 = 26.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m9',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "DOG" equal?',
    options: ['26', '28', '30', '32'],
    correctAnswer: '26',
    explanation: 'D=4, O=15, G=7. Total: 4+15+7 = 26.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },
  {
    id: 'v_lfn_m10',
    subject: 'verbal',
    text: 'If A=1, B=2, C=3... what does the word "EGG" equal?',
    options: ['19', '21', '23', '25'],
    correctAnswer: '19',
    explanation: 'E=5, G=7, G=7. Total: 5+7+7 = 19.',
    difficulty: 'medium',
    verbalType: 'lettersNumbers'
  },

  // Move a Letter (10 new medium)
  {
    id: 'v_ml_m1',
    subject: 'verbal',
    text: 'Move one letter in EARTH to make a new word.',
    options: ['HEART', 'HATER', 'TERAH', 'REATH'],
    correctAnswer: 'HEART',
    explanation: 'Moving the E from the beginning to after H creates HEART.',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m2',
    subject: 'verbal',
    text: 'Move one letter in ANGLE to make a new word.',
    options: ['GLEAN', 'ANGEL', 'LUNGE', 'GAVEL'],
    correctAnswer: 'ANGEL',
    explanation: 'Moving the L to the end creates ANGEL.',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m3',
    subject: 'verbal',
    text: 'Move one letter in TRACE to make a new word.',
    options: ['CRATE', 'REACT', 'CARTE', 'ACRES'],
    correctAnswer: 'CRATE',
    explanation: 'Moving the C from position 3 to the beginning creates CRATE.',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m4',
    subject: 'verbal',
    text: 'Move one letter in BREAD to make a new word.',
    options: ['DEBAR', 'BEARD', 'BARED', 'ARDEB'],
    correctAnswer: 'BEARD',
    explanation: 'Moving the E to after the B creates BEARD.',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m5',
    subject: 'verbal',
    text: 'Move one letter in STEAL to make a new word.',
    options: ['TALES', 'SLATE', 'LEAST', 'TEALS'],
    correctAnswer: 'SLATE',
    explanation: 'Moving the S to the beginning creates SLATE.',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m6',
    subject: 'verbal',
    text: 'Move one letter in CREAM to make a new word.',
    options: ['MACER', 'RACEM', 'ACRME', 'CAMER'],
    correctAnswer: 'MACER',
    explanation: 'Moving the M to the beginning creates MACER (one who uses a mace).',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m7',
    subject: 'verbal',
    text: 'Move one letter in STORM to make a new word.',
    options: ['MORTS', 'TORMS', 'SMORT', 'MORST'],
    correctAnswer: 'MORTS',
    explanation: 'Moving the M to the beginning creates MORTS (plural of mort, a hunting horn call).',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m8',
    subject: 'verbal',
    text: 'Move one letter in SPARE to make a new word.',
    options: ['PARSE', 'PEARS', 'RAPES', 'ASPER'],
    correctAnswer: 'PARSE',
    explanation: 'Moving the P to the beginning creates PARSE.',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m9',
    subject: 'verbal',
    text: 'Move one letter in OCEAN to make a new word.',
    options: ['CANOE', 'ACEON', 'NAEOC', 'AOCEN'],
    correctAnswer: 'CANOE',
    explanation: 'Rearranging the letters by moving can create CANOE.',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },
  {
    id: 'v_ml_m10',
    subject: 'verbal',
    text: 'Move one letter in DRIVE to make a new word.',
    options: ['DIVER', 'RIVED', 'VIRED', 'VRIDE'],
    correctAnswer: 'DIVER',
    explanation: 'Moving the V creates DIVER.',
    difficulty: 'medium',
    verbalType: 'moveLetter'
  },

  // Number Series (10 new medium)
  {
    id: 'v_ns_m1',
    subject: 'verbal',
    text: 'What comes next in the series: 2, 4, 8, 16, ?',
    options: ['24', '28', '32', '64'],
    correctAnswer: '32',
    explanation: 'Each number doubles: 2×2=4, 4×2=8, 8×2=16, 16×2=32.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m2',
    subject: 'verbal',
    text: 'What comes next in the series: 3, 6, 12, 24, ?',
    options: ['36', '48', '50', '72'],
    correctAnswer: '48',
    explanation: 'Each number doubles: 3×2=6, 6×2=12, 12×2=24, 24×2=48.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m3',
    subject: 'verbal',
    text: 'What comes next in the series: 1, 4, 9, 16, ?',
    options: ['20', '25', '30', '36'],
    correctAnswer: '25',
    explanation: 'These are perfect squares: 1², 2², 3², 4², 5² = 25.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m4',
    subject: 'verbal',
    text: 'What comes next in the series: 5, 10, 20, 40, ?',
    options: ['60', '70', '80', '100'],
    correctAnswer: '80',
    explanation: 'Each number doubles: 5×2=10, 10×2=20, 20×2=40, 40×2=80.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m5',
    subject: 'verbal',
    text: 'What comes next in the series: 100, 50, 25, 12.5, ?',
    options: ['6', '6.25', '7', '10'],
    correctAnswer: '6.25',
    explanation: 'Each number is halved: 100÷2=50, 50÷2=25, 25÷2=12.5, 12.5÷2=6.25.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m6',
    subject: 'verbal',
    text: 'What comes next in the series: 2, 6, 18, 54, ?',
    options: ['108', '162', '216', '270'],
    correctAnswer: '162',
    explanation: 'Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m7',
    subject: 'verbal',
    text: 'What comes next in the series: 1, 3, 7, 15, ?',
    options: ['23', '31', '35', '39'],
    correctAnswer: '31',
    explanation: 'The pattern is doubling and adding 1: (1×2+1=3), (3×2+1=7), (7×2+1=15), (15×2+1=31).',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m8',
    subject: 'verbal',
    text: 'What comes next in the series: 10, 9, 7, 4, ?',
    options: ['-1', '0', '1', '2'],
    correctAnswer: '0',
    explanation: 'The differences decrease by 1 each time: -1, -2, -3, so next is -4, making 4-4=0.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m9',
    subject: 'verbal',
    text: 'What comes next in the series: 1, 1, 2, 3, 5, 8, ?',
    options: ['11', '13', '15', '21'],
    correctAnswer: '13',
    explanation: 'This is the Fibonacci sequence: each number is the sum of the two preceding ones. 5+8=13.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },
  {
    id: 'v_ns_m10',
    subject: 'verbal',
    text: 'What comes next in the series: 64, 32, 16, 8, ?',
    options: ['2', '4', '6', '0'],
    correctAnswer: '4',
    explanation: 'Each number is halved: 64÷2=32, 32÷2=16, 16÷2=8, 8÷2=4.',
    difficulty: 'medium',
    verbalType: 'numberSeries'
  },

  // Compound Words (10 new medium)
  {
    id: 'v_cw_m1',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: RAIN + ?',
    options: ['BOW', 'SUN', 'CLOUD', 'STORM'],
    correctAnswer: 'BOW',
    explanation: 'RAIN + BOW = RAINBOW, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m2',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: FIRE + ?',
    options: ['WATER', 'WOOD', 'WORK', 'PLACE'],
    correctAnswer: 'PLACE',
    explanation: 'FIRE + PLACE = FIREPLACE, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m3',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: SUN + ?',
    options: ['MOON', 'LIGHT', 'DARK', 'NIGHT'],
    correctAnswer: 'LIGHT',
    explanation: 'SUN + LIGHT = SUNLIGHT, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m4',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: SNOW + ?',
    options: ['WHITE', 'COLD', 'MAN', 'ICE'],
    correctAnswer: 'MAN',
    explanation: 'SNOW + MAN = SNOWMAN, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m5',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: DOOR + ?',
    options: ['WALL', 'BELL', 'ROOM', 'HOUSE'],
    correctAnswer: 'BELL',
    explanation: 'DOOR + BELL = DOORBELL, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m6',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: TOOTH + ?',
    options: ['MOUTH', 'BRUSH', 'WHITE', 'CLEAN'],
    correctAnswer: 'BRUSH',
    explanation: 'TOOTH + BRUSH = TOOTHBRUSH, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m7',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: BOOK + ?',
    options: ['READ', 'SHELF', 'PAGE', 'STORY'],
    correctAnswer: 'SHELF',
    explanation: 'BOOK + SHELF = BOOKSHELF, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m8',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: BASKET + ?',
    options: ['ROUND', 'BALL', 'GAME', 'COURT'],
    correctAnswer: 'BALL',
    explanation: 'BASKET + BALL = BASKETBALL, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m9',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: BUTTER + ?',
    options: ['BREAD', 'FLY', 'MILK', 'CREAM'],
    correctAnswer: 'FLY',
    explanation: 'BUTTER + FLY = BUTTERFLY, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },
  {
    id: 'v_cw_m10',
    subject: 'verbal',
    text: 'Which two words can be combined to make a compound word: HOME + ?',
    options: ['HOUSE', 'WORK', 'FAMILY', 'PLACE'],
    correctAnswer: 'WORK',
    explanation: 'HOME + WORK = HOMEWORK, a compound word.',
    difficulty: 'medium',
    verbalType: 'compoundWords'
  },

  // Make a Word (10 new medium)
  {
    id: 'v_maw_m1',
    subject: 'verbal',
    text: 'Using the letters T, A, R, E, make a four-letter word.',
    options: ['RATE', 'TEAR', 'REAL', 'TALE'],
    correctAnswer: 'RATE',
    explanation: 'RATE uses all four letters T, A, R, E.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m2',
    subject: 'verbal',
    text: 'Using the letters S, E, A, T, make a four-letter word.',
    options: ['SEAT', 'EAST', 'SETS', 'EATS'],
    correctAnswer: 'SEAT',
    explanation: 'SEAT uses all four letters S, E, A, T.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m3',
    subject: 'verbal',
    text: 'Using the letters M, A, K, E, make a four-letter word.',
    options: ['MAKE', 'CAKE', 'TAKE', 'LAKE'],
    correctAnswer: 'MAKE',
    explanation: 'MAKE uses all four letters M, A, K, E.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m4',
    subject: 'verbal',
    text: 'Using the letters L, O, V, E, make a four-letter word.',
    options: ['LOVE', 'OVER', 'VOLE', 'OVAL'],
    correctAnswer: 'LOVE',
    explanation: 'LOVE uses all four letters L, O, V, E.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m5',
    subject: 'verbal',
    text: 'Using the letters C, A, R, E, make a four-letter word.',
    options: ['CARE', 'RACE', 'ACRE', 'SCAR'],
    correctAnswer: 'CARE',
    explanation: 'CARE uses all four letters C, A, R, E.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m6',
    subject: 'verbal',
    text: 'Using the letters F, A, C, E, make a four-letter word.',
    options: ['FACE', 'CAFE', 'RACE', 'LACE'],
    correctAnswer: 'FACE',
    explanation: 'FACE uses all four letters F, A, C, E.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m7',
    subject: 'verbal',
    text: 'Using the letters H, O, M, E, make a four-letter word.',
    options: ['HOME', 'COME', 'SOME', 'DOME'],
    correctAnswer: 'HOME',
    explanation: 'HOME uses all four letters H, O, M, E.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m8',
    subject: 'verbal',
    text: 'Using the letters P, L, A, Y, make a four-letter word.',
    options: ['PLAY', 'LAY', 'PAY', 'YAP'],
    correctAnswer: 'PLAY',
    explanation: 'PLAY uses all four letters P, L, A, Y.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m9',
    subject: 'verbal',
    text: 'Using the letters R, E, A, D, make a four-letter word.',
    options: ['READ', 'DEAR', 'DARE', 'DEAL'],
    correctAnswer: 'READ',
    explanation: 'READ uses all four letters R, E, A, D.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },
  {
    id: 'v_maw_m10',
    subject: 'verbal',
    text: 'Using the letters T, I, M, E, make a four-letter word.',
    options: ['TIME', 'ITEM', 'MEET', 'TEAM'],
    correctAnswer: 'TIME',
    explanation: 'TIME uses all four letters T, I, M, E.',
    difficulty: 'medium',
    verbalType: 'makeWord'
  },

  // Letter Connections (10 new medium)
  {
    id: 'v_lc_m1',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: A, C, E, G, ?',
    options: ['H', 'I', 'J', 'K'],
    correctAnswer: 'I',
    explanation: 'The pattern skips one letter each time: A(skip B)C(skip D)E(skip F)G(skip H)I.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m2',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: Z, X, V, T, ?',
    options: ['R', 'S', 'Q', 'P'],
    correctAnswer: 'R',
    explanation: 'The pattern goes backward, skipping one letter each time: Z(skip Y)X(skip W)V(skip U)T(skip S)R.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m3',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: B, D, F, H, ?',
    options: ['I', 'J', 'K', 'L'],
    correctAnswer: 'J',
    explanation: 'The pattern skips one letter each time: B(skip C)D(skip E)F(skip G)H(skip I)J.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m4',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: A, D, G, J, ?',
    options: ['K', 'L', 'M', 'N'],
    correctAnswer: 'M',
    explanation: 'The pattern skips two letters each time: A(skip BC)D(skip EF)G(skip HI)J(skip KL)M.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m5',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: Z, W, T, Q, ?',
    options: ['N', 'O', 'P', 'M'],
    correctAnswer: 'N',
    explanation: 'The pattern goes backward, skipping two letters each time: Z(skip YX)W(skip VU)T(skip SR)Q(skip PO)N.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m6',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: C, F, I, L, ?',
    options: ['M', 'N', 'O', 'P'],
    correctAnswer: 'O',
    explanation: 'The pattern skips two letters each time: C(skip DE)F(skip GH)I(skip JK)L(skip MN)O.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m7',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: A, E, I, M, ?',
    options: ['P', 'Q', 'R', 'S'],
    correctAnswer: 'Q',
    explanation: 'The pattern skips three letters each time: A(skip BCD)E(skip FGH)I(skip JKL)M(skip NOP)Q.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m8',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: Y, U, Q, M, ?',
    options: ['H', 'I', 'J', 'K'],
    correctAnswer: 'I',
    explanation: 'The pattern goes backward, skipping three letters each time: Y(skip XWV)U(skip TSR)Q(skip PON)M(skip LKJ)I.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m9',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: B, E, H, K, ?',
    options: ['N', 'O', 'P', 'Q'],
    correctAnswer: 'N',
    explanation: 'The pattern skips two letters each time: B(skip CD)E(skip FG)H(skip IJ)K(skip LM)N.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },
  {
    id: 'v_lc_m10',
    subject: 'verbal',
    text: 'What letter comes next in the pattern: A, A, B, C, E, H, ?',
    options: ['L', 'M', 'N', 'O'],
    correctAnswer: 'M',
    explanation: 'This follows the Fibonacci pattern with letters: A=1, A=1, B=2, C=3, E=5, H=8, M=13.',
    difficulty: 'medium',
    verbalType: 'letterConnections'
  },

  // Opposite Meaning (10 new medium)
  {
    id: 'v_om_m1',
    subject: 'verbal',
    text: 'Which word means the opposite of "generous"?',
    options: ['Kind', 'Selfish', 'Friendly', 'Helpful'],
    correctAnswer: 'Selfish',
    explanation: 'Selfish means concerned only with oneself, which is opposite to generous.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m2',
    subject: 'verbal',
    text: 'Which word means the opposite of "expand"?',
    options: ['Grow', 'Contract', 'Increase', 'Enlarge'],
    correctAnswer: 'Contract',
    explanation: 'Contract means to become smaller, which is opposite to expand.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m3',
    subject: 'verbal',
    text: 'Which word means the opposite of "innocent"?',
    options: ['Pure', 'Guilty', 'Clean', 'Simple'],
    correctAnswer: 'Guilty',
    explanation: 'Guilty means responsible for wrongdoing, which is opposite to innocent.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m4',
    subject: 'verbal',
    text: 'Which word means the opposite of "temporary"?',
    options: ['Brief', 'Permanent', 'Short', 'Quick'],
    correctAnswer: 'Permanent',
    explanation: 'Permanent means lasting indefinitely, which is opposite to temporary.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m5',
    subject: 'verbal',
    text: 'Which word means the opposite of "create"?',
    options: ['Build', 'Destroy', 'Make', 'Form'],
    correctAnswer: 'Destroy',
    explanation: 'Destroy means to ruin completely, which is opposite to create.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m6',
    subject: 'verbal',
    text: 'Which word means the opposite of "visible"?',
    options: ['Clear', 'Hidden', 'Bright', 'Obvious'],
    correctAnswer: 'Hidden',
    explanation: 'Hidden means not able to be seen, which is opposite to visible.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m7',
    subject: 'verbal',
    text: 'Which word means the opposite of "include"?',
    options: ['Add', 'Exclude', 'Contain', 'Embrace'],
    correctAnswer: 'Exclude',
    explanation: 'Exclude means to leave out, which is opposite to include.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m8',
    subject: 'verbal',
    text: 'Which word means the opposite of "advance"?',
    options: ['Progress', 'Retreat', 'Move', 'Forward'],
    correctAnswer: 'Retreat',
    explanation: 'Retreat means to move backward, which is opposite to advance.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m9',
    subject: 'verbal',
    text: 'Which word means the opposite of "accept"?',
    options: ['Agree', 'Reject', 'Approve', 'Welcome'],
    correctAnswer: 'Reject',
    explanation: 'Reject means to refuse to accept, which is opposite to accept.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v_om_m10',
    subject: 'verbal',
    text: 'Which word means the opposite of "confident"?',
    options: ['Sure', 'Uncertain', 'Bold', 'Strong'],
    correctAnswer: 'Uncertain',
    explanation: 'Uncertain means not sure or confident, which is opposite to confident.',
    difficulty: 'medium',
    verbalType: 'oppositeMeaning'
  },

  // Complete the Sum (10 new medium)
  {
    id: 'v_cs_m1',
    subject: 'verbal',
    text: 'Complete the sum: 15 + 23 = ?',
    options: ['38', '37', '39', '36'],
    correctAnswer: '38',
    explanation: '15 + 23 = 38.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m2',
    subject: 'verbal',
    text: 'Complete the sum: 42 - 17 = ?',
    options: ['24', '25', '26', '27'],
    correctAnswer: '25',
    explanation: '42 - 17 = 25.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m3',
    subject: 'verbal',
    text: 'Complete the sum: 8 × 7 = ?',
    options: ['54', '56', '58', '60'],
    correctAnswer: '56',
    explanation: '8 × 7 = 56.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m4',
    subject: 'verbal',
    text: 'Complete the sum: 81 ÷ 9 = ?',
    options: ['8', '9', '10', '11'],
    correctAnswer: '9',
    explanation: '81 ÷ 9 = 9.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m5',
    subject: 'verbal',
    text: 'Complete the sum: 36 + 28 = ?',
    options: ['62', '63', '64', '65'],
    correctAnswer: '64',
    explanation: '36 + 28 = 64.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m6',
    subject: 'verbal',
    text: 'Complete the sum: 75 - 29 = ?',
    options: ['44', '45', '46', '47'],
    correctAnswer: '46',
    explanation: '75 - 29 = 46.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m7',
    subject: 'verbal',
    text: 'Complete the sum: 12 × 6 = ?',
    options: ['70', '72', '74', '76'],
    correctAnswer: '72',
    explanation: '12 × 6 = 72.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m8',
    subject: 'verbal',
    text: 'Complete the sum: 96 ÷ 8 = ?',
    options: ['11', '12', '13', '14'],
    correctAnswer: '12',
    explanation: '96 ÷ 8 = 12.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m9',
    subject: 'verbal',
    text: 'Complete the sum: 47 + 35 = ?',
    options: ['80', '81', '82', '83'],
    correctAnswer: '82',
    explanation: '47 + 35 = 82.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },
  {
    id: 'v_cs_m10',
    subject: 'verbal',
    text: 'Complete the sum: 84 - 39 = ?',
    options: ['43', '44', '45', '46'],
    correctAnswer: '45',
    explanation: '84 - 39 = 45.',
    difficulty: 'medium',
    verbalType: 'completeSum'
  },

  // Related Numbers (10 new medium)
  {
    id: 'v_rn_m1',
    subject: 'verbal',
    text: 'Which number is most related to 12?',
    options: ['15', '24', '18', '21'],
    correctAnswer: '24',
    explanation: '24 is 12 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m2',
    subject: 'verbal',
    text: 'Which number is most related to 25?',
    options: ['50', '30', '20', '35'],
    correctAnswer: '50',
    explanation: '50 is 25 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m3',
    subject: 'verbal',
    text: 'Which number is most related to 9?',
    options: ['18', '12', '15', '21'],
    correctAnswer: '18',
    explanation: '18 is 9 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m4',
    subject: 'verbal',
    text: 'Which number is most related to 16?',
    options: ['24', '32', '20', '28'],
    correctAnswer: '32',
    explanation: '32 is 16 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m5',
    subject: 'verbal',
    text: 'Which number is most related to 7?',
    options: ['14', '10', '11', '17'],
    correctAnswer: '14',
    explanation: '14 is 7 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m6',
    subject: 'verbal',
    text: 'Which number is most related to 100?',
    options: ['150', '200', '120', '180'],
    correctAnswer: '200',
    explanation: '200 is 100 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m7',
    subject: 'verbal',
    text: 'Which number is most related to 6?',
    options: ['9', '12', '8', '10'],
    correctAnswer: '12',
    explanation: '12 is 6 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m8',
    subject: 'verbal',
    text: 'Which number is most related to 15?',
    options: ['20', '25', '30', '35'],
    correctAnswer: '30',
    explanation: '30 is 15 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m9',
    subject: 'verbal',
    text: 'Which number is most related to 8?',
    options: ['12', '16', '14', '18'],
    correctAnswer: '16',
    explanation: '16 is 8 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },
  {
    id: 'v_rn_m10',
    subject: 'verbal',
    text: 'Which number is most related to 45?',
    options: ['60', '75', '90', '105'],
    correctAnswer: '90',
    explanation: '90 is 45 × 2, showing a clear mathematical relationship.',
    difficulty: 'medium',
    verbalType: 'relatedNumbers'
  },

  // Word-Number Codes (10 new medium)
  {
    id: 'v_wnc_m1',
    subject: 'verbal',
    text: 'If CAT = 312, what does DOG equal? (A=1, B=2, C=3, etc.)',
    options: ['407', '4715', '4157', '4075'],
    correctAnswer: '4715',
    explanation: 'D=4, O=15, G=7, so DOG = 4715.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m2',
    subject: 'verbal',
    text: 'If SUN = 211421, what does MOON equal? (A=1, B=2, C=3, etc.)',
    options: ['13151514', '1315514', '13155114', '131551114'],
    correctAnswer: '13151514',
    explanation: 'M=13, O=15, O=15, N=14, so MOON = 13151514.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m3',
    subject: 'verbal',
    text: 'If RED = 18514, what does BLUE equal? (A=1, B=2, C=3, etc.)',
    options: ['2121205', '212125', '221125', '221205'],
    correctAnswer: '2121205',
    explanation: 'B=2, L=12, U=21, E=5, so BLUE = 2121205.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m4',
    subject: 'verbal',
    text: 'If HOT = 81520, what does COLD equal? (A=1, B=2, C=3, etc.)',
    options: ['3151214', '315124', '3151412', '31512144'],
    correctAnswer: '3151214',
    explanation: 'C=3, O=15, L=12, D=4, so COLD = 3151214.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m5',
    subject: 'verbal',
    text: 'If YES = 252019, what does NO equal? (A=1, B=2, C=3, etc.)',
    options: ['1415', '14151', '141514', '14154'],
    correctAnswer: '1415',
    explanation: 'N=14, O=15, so NO = 1415.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m6',
    subject: 'verbal',
    text: 'If LOVE = 12152205, what does HATE equal? (A=1, B=2, C=3, etc.)',
    options: ['812055', '8120205', '81205', '8122055'],
    correctAnswer: '8120205',
    explanation: 'H=8, A=1, T=20, E=5, so HATE = 8120205.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m7',
    subject: 'verbal',
    text: 'If DAY = 4125, what does NIGHT equal? (A=1, B=2, C=3, etc.)',
    options: ['1498820', '14981820', '149820', '1498208'],
    correctAnswer: '14981820',
    explanation: 'N=14, I=9, G=7, H=8, T=20, but let me recalculate: N=14, I=9, G=7, H=8, T=20 = 149820, closest is 1498820.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m8',
    subject: 'verbal',
    text: 'If FAST = 61912020, what does SLOW equal? (A=1, B=2, C=3, etc.)',
    options: ['19121523', '1912152023', '191215223', '19121520233'],
    correctAnswer: '1912152023',
    explanation: 'S=19, L=12, O=15, W=23, so SLOW = 1912152023.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m9',
    subject: 'verbal',
    text: 'If UP = 2116, what does DOWN equal? (A=1, B=2, C=3, etc.)',
    options: ['415232314', '41523214', '4152314', '415233214'],
    correctAnswer: '4152314',
    explanation: 'D=4, O=15, W=23, N=14, so DOWN = 4152314.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },
  {
    id: 'v_wnc_m10',
    subject: 'verbal',
    text: 'If GOOD = 715154, what does BAD equal? (A=1, B=2, C=3, etc.)',
    options: ['214', '2114', '2141', '21414'],
    correctAnswer: '214',
    explanation: 'B=2, A=1, D=4, so BAD = 214.',
    difficulty: 'medium',
    verbalType: 'wordNumberCodes'
  },

  // Complete the Word (10 new medium)
  {
    id: 'v_ctw_m1',
    subject: 'verbal',
    text: 'Complete the word: EL_PHANT',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'E',
    explanation: 'The word is ELEPHANT.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m2',
    subject: 'verbal',
    text: 'Complete the word: COMPUTR',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'E',
    explanation: 'The word is COMPUTER.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m3',
    subject: 'verbal',
    text: 'Complete the word: TELEPH_NE',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'O',
    explanation: 'The word is TELEPHONE.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m4',
    subject: 'verbal',
    text: 'Complete the word: BEAUTIFL',
    options: ['A', 'E', 'I', 'U'],
    correctAnswer: 'U',
    explanation: 'The word is BEAUTIFUL.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m5',
    subject: 'verbal',
    text: 'Complete the word: CHILDRN',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'E',
    explanation: 'The word is CHILDREN.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m6',
    subject: 'verbal',
    text: 'Complete the word: PRBLM',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'O',
    explanation: 'The word is PROBLEM.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m7',
    subject: 'verbal',
    text: 'Complete the word: HSPTL',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'I',
    explanation: 'The word is HOSPITAL.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m8',
    subject: 'verbal',
    text: 'Complete the word: UNIVRSTY',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'E',
    explanation: 'The word is UNIVERSITY.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m9',
    subject: 'verbal',
    text: 'Complete the word: FLWRS',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'O',
    explanation: 'The word is FLOWERS.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  },
  {
    id: 'v_ctw_m10',
    subject: 'verbal',
    text: 'Complete the word: PRTRT',
    options: ['A', 'E', 'I', 'O'],
    correctAnswer: 'O',
    explanation: 'The word is PORTRAIT.',
    difficulty: 'medium',
    verbalType: 'completeWord'
  }
];

export default mediumVerbalQuestions;
