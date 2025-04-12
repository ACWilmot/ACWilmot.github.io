import { Question } from '@/types/questionTypes';

const verbalQuestions: Question[] = [
  {
    id: 'v1',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "happy".',
    options: ['Sad', 'Glad', 'Cheerful', 'Merry'],
    correctAnswer: 'Sad',
    explanation: 'Sad means feeling unhappy, which is the opposite of happy.',
    difficulty: 'easy'
  },
  {
    id: 'v2',
    subject: 'verbal',
    text: 'Which word is most similar in meaning to "brave"?',
    options: ['Cowardly', 'Fearful', 'Courageous', 'Timid'],
    correctAnswer: 'Courageous',
    explanation: 'Courageous means showing courage, which is similar to being brave.',
    difficulty: 'medium'
  },
  {
    id: 'v3',
    subject: 'verbal',
    text: 'Select the word that completes the analogy: cat : meow :: dog : ?',
    options: ['Bark', 'Purr', 'Hiss', 'Roar'],
    correctAnswer: 'Bark',
    explanation: 'Cats meow, and dogs bark. The analogy relates an animal to the sound it makes.',
    difficulty: 'easy'
  },
  {
    id: 'v4',
    subject: 'verbal',
    text: 'What is the missing number in the sequence: 2, 4, 6, _, 10?',
    options: ['7', '8', '9', '11'],
    correctAnswer: '8',
    explanation: 'The sequence increases by 2 each time, so the missing number is 8.',
    difficulty: 'easy'
  },
  {
    id: 'v5',
    subject: 'verbal',
    text: 'Find the word that does not belong: apple, banana, carrot, orange.',
    options: ['Apple', 'Banana', 'Carrot', 'Orange'],
    correctAnswer: 'Carrot',
    explanation: 'Apples, bananas, and oranges are fruits, while a carrot is a vegetable.',
    difficulty: 'easy'
  },
  {
    id: 'v6',
    subject: 'verbal',
    text: 'Which of the following is a synonym for "difficult"?',
    options: ['Easy', 'Simple', 'Hard', 'Clear'],
    correctAnswer: 'Hard',
    explanation: 'The word "hard" is a synonym for "difficult," meaning not easy to do or understand.',
    difficulty: 'easy'
  },
  {
    id: 'v7',
    subject: 'verbal',
    text: 'Identify the type of word that "quickly" is in the sentence: "He ran quickly."',
    options: ['Noun', 'Adjective', 'Verb', 'Adverb'],
    correctAnswer: 'Adverb',
    explanation: 'An adverb modifies a verb, adjective, or another adverb, indicating how, where, when, or to what extent. "Quickly" describes how he ran.',
    difficulty: 'medium'
  },
  {
    id: 'v8',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The weather is _____ today."',
    options: ['Cloud', 'Clouds', 'Cloudy', 'Clouding'],
    correctAnswer: 'Cloudy',
    explanation: '"Cloudy" is an adjective that describes the state of the weather, making it the correct choice.',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v10',
    subject: 'verbal',
    text: 'Which word is an antonym for "increase"?',
    options: ['Expand', 'Grow', 'Reduce', 'Enlarge'],
    correctAnswer: 'Reduce',
    explanation: 'An antonym is a word that means the opposite of another word. "Reduce" means to make smaller or less, which is the opposite of "increase."',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v12',
    subject: 'verbal',
    text: 'Identify the sentence with a misplaced modifier.',
    options: [
      'Running quickly, the bus was caught by Maria.',
      'Maria caught the bus running quickly.',
      'Maria, running quickly, caught the bus.',
      'Maria caught the quickly running bus.'
    ],
    correctAnswer: 'Running quickly, the bus was caught by Maria.',
    explanation: 'A misplaced modifier is a phrase or clause placed awkwardly in a sentence so that it appears to modify or refer to an unintended word. In the correct sentence, "Maria, running quickly, caught the bus," the modifier "running quickly" clearly refers to Maria.',
    difficulty: 'hard'
  },
  {
    id: 'v13',
    subject: 'verbal',
    text: 'Choose the correct plural form of "child".',
    options: ['Childs', 'Childes', 'Children', 'Childre'],
    correctAnswer: 'Children',
    explanation: '"Children" is the irregular plural form of "child".',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v15',
    subject: 'verbal',
    text: 'Select the word that is a palindrome.',
    options: ['Level', 'Apple', 'House', 'Table'],
    correctAnswer: 'Level',
    explanation: 'A palindrome is a word that reads the same backward as forward. "Level" is a palindrome.',
    difficulty: 'medium'
  },
  {
    id: 'v16',
    subject: 'verbal',
    text: 'What is the meaning of the prefix "pre-" in the word "preview"?',
    options: ['After', 'Before', 'During', 'Inside'],
    correctAnswer: 'Before',
    explanation: 'The prefix "pre-" means "before." Therefore, "preview" means to view something before.',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v18',
    subject: 'verbal',
    text: 'Choose the word that is an example of onomatopoeia.',
    options: ['Whisper', 'Echo', 'Splash', 'Silent'],
    correctAnswer: 'Splash',
    explanation: 'Onomatopoeia is a word that imitates the natural sound of something. "Splash" imitates the sound of liquid hitting a surface.',
    difficulty: 'medium'
  },
  {
    id: 'v19',
    subject: 'verbal',
    text: 'Select the correct form of the verb "to be" in the sentence: "They _____ happy."',
    options: ['Is', 'Am', 'Are', 'Be'],
    correctAnswer: 'Are',
    explanation: '"Are" is the correct form of the verb "to be" to use with the pronoun "they."',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v21',
    subject: 'verbal',
    text: 'Choose the word that best replaces "enthusiastic" in the sentence: "The team was enthusiastic about the project."',
    options: ['Apathetic', 'Reluctant', 'Eager', 'Uninterested'],
    correctAnswer: 'Eager',
    explanation: '"Eager" is a synonym for "enthusiastic," meaning showing great interest or excitement.',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v23',
    subject: 'verbal',
    text: 'Select the word that is an adjective.',
    options: ['Run', 'Quickly', 'Blue', 'Jump'],
    correctAnswer: 'Blue',
    explanation: 'An adjective is a word that describes a noun. "Blue" describes a color, making it an adjective.',
    difficulty: 'easy'
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
    difficulty: 'medium'
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
    difficulty: 'medium'
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
    difficulty: 'medium'
  },
  {
    id: 'v27',
    subject: 'verbal',
    text: 'Select the word that is a pronoun.',
    options: ['Table', 'They', 'Quickly', 'Run'],
    correctAnswer: 'They',
    explanation: 'A pronoun is a word that replaces a noun. "They" is a pronoun.',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v29',
    subject: 'verbal',
    text: 'Choose the word that is a verb.',
    options: ['Happy', 'Slowly', 'Write', 'House'],
    correctAnswer: 'Write',
    explanation: 'A verb is a word that shows an action, occurrence, or state of being. "Write" is a verb.',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v31',
    subject: 'verbal',
    text: 'Select the word that is a preposition.',
    options: ['Quickly', 'Under', 'They', 'Run'],
    correctAnswer: 'Under',
    explanation: 'A preposition is a word that shows the relationship between a noun or pronoun and other words in a sentence. "Under" is a preposition.',
    difficulty: 'easy'
  },
  {
    id: 'v32',
    subject: 'verbal',
    text: 'What is the correct way to write the contraction for "cannot"?',
    options: ['Can\'t', 'Cannot\'t', 'Canot', 'Cannot'],
    correctAnswer: 'Can\'t',
    explanation: '"Can\'t" is the correct contraction for "cannot."',
    difficulty: 'easy'
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
    difficulty: 'medium'
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
    difficulty: 'medium'
  },
  {
    id: 'v35',
    subject: 'verbal',
    text: 'Select the word that is an interjection.',
    options: ['Slowly', 'Because', 'Ouch', 'They'],
    correctAnswer: 'Ouch',
    explanation: 'Interjections are words used to express strong feeling or sudden emotion, often followed by an exclamation mark. "Ouch" is an example.',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    id: 'v37',
    subject: 'verbal',
    text: 'Choose the sentence that uses the word "than" correctly.',
    options: [
      'She is taller then me.',
      'She is taller than I.',
      'She is taller then I am.',
      'She is taller than me am.'
    ],
    correctAnswer: 'She is taller than I.',
    explanation: '"Than" is used to make comparisons.',
    difficulty: 'medium'
  },
  {
    id: 'v38',
    subject: 'verbal',
    text: 'Identify the sentence that uses a hyphen correctly.',
    options: [
      'He is a well trained dog.',
      'He is a well trained-dog.',
      'He is a well-trained dog.',
      'He is a well - trained dog.'
    ],
    correctAnswer: 'He is a well-trained dog.',
    explanation: 'A hyphen is used to join two or more words serving as a single adjective before a noun.',
    difficulty: 'medium'
  },
  {
    id: 'v39',
    subject: 'verbal',
    text: 'Select the word that is an example of alliteration.',
    options: ['Jump quickly', 'Blue house', 'Peter Piper', 'Green table'],
    correctAnswer: 'Peter Piper',
    explanation: 'Alliteration is the occurrence of the same letter or sound at the beginning of adjacent or closely connected words. "Peter Piper" is an example.',
    difficulty: 'medium'
  },
  {
    id: 'v40',
    subject: 'verbal',
    text: 'What is the meaning of the suffix "-less" in the word "careless"?',
    options: ['Full of', 'Without', 'Before', 'After'],
    correctAnswer: 'Without',
    explanation: 'The suffix "-less" means "without." Therefore, "careless" means without care.',
    difficulty: 'easy'
  },
  {
    id: 'v41',
    subject: 'verbal',
    text: 'Choose the word that best completes the analogy: hot : cold :: day : ?',
    options: ['Sun', 'Moon', 'Night', 'Warm'],
    correctAnswer: 'Night',
    explanation: 'Hot is the opposite of cold, and day is the opposite of night. The analogy relates opposites.',
    difficulty: 'easy'
  },
  {
    id: 'v42',
    subject: 'verbal',
    text: 'Identify the sentence that uses the word "lie" correctly.',
    options: [
      'I will lay down for a nap.',
      'I will lie down for a nap.',
      'I will lain down for a nap.',
      'I will lying down for a nap.'
    ],
    correctAnswer: 'I will lie down for a nap.',
    explanation: '"Lie" means to rest or recline.',
    difficulty: 'medium'
  },
  {
    id: 'v43',
    subject: 'verbal',
    text: 'Select the word that is an example of assonance.',
    options: ['Red hat', 'Green tree', 'Blue moon', 'Fine time'],
    correctAnswer: 'Fine time',
    explanation: 'Assonance is the repetition of the sound of a vowel or diphthong in nonrhyming stressed syllables near enough to each other for the echo to be discernible. "Fine time" is an example.',
    difficulty: 'medium'
  },
  {
    id: 'v44',
    subject: 'verbal',
    text: 'What is the meaning of the word "ubiquitous"?',
    options: [
      'Rare',
      'Common',
      'Everywhere',
      'Hidden'
    ],
    correctAnswer: 'Everywhere',
    explanation: '"Ubiquitous" means present, appearing, or found everywhere.',
    difficulty: 'hard'
  },
  {
    id: 'v45',
    subject: 'verbal',
    text: 'Choose the sentence that uses the word "who" correctly.',
    options: [
      'Who is going to the party?',
      'Whom is going to the party?',
      'Whose is going to the party?',
      'Which is going to the party?'
    ],
    correctAnswer: 'Who is going to the party?',
    explanation: '"Who" is used as a subject pronoun.',
    difficulty: 'medium'
  },
  {
    id: 'v46',
    subject: 'verbal',
    text: 'Identify the sentence that uses the word "whom" correctly.',
    options: [
      'Whom is at the door?',
      'Who did you see?',
      'Whom did you see?',
      'Who are you talking to?'
    ],
    correctAnswer: 'Whom did you see?',
    explanation: '"Whom" is used as an object pronoun.',
    difficulty: 'hard'
  },
  {
    id: 'v47',
    subject: 'verbal',
    text: 'Select the word that is an example of consonance.',
    options: ['Red bed', 'Green tree', 'Blue moon', 'Fine time'],
    correctAnswer: 'Red bed',
    explanation: 'Consonance is the recurrence of similar sounds, especially consonants, in close proximity. "Red bed" is an example.',
    difficulty: 'medium'
  },
  {
    id: 'v48',
    subject: 'verbal',
    text: 'What is the meaning of the word "ephemeral"?',
    options: [
      'Eternal',
      'Brief',
      'Common',
      'Hidden'
    ],
    correctAnswer: 'Brief',
    explanation: '"Ephemeral" means lasting for a very short time.',
    difficulty: 'hard'
  },
  {
    id: 'v49',
    subject: 'verbal',
    text: 'Choose the sentence that uses the word "whether" correctly.',
    options: [
      'The question is weather or not to go.',
      'The question is whether or not to go.',
      'The question is wether or not to go.',
      'The question is wheather or not to go.'
    ],
    correctAnswer: 'The question is whether or not to go.',
    explanation: '"Whether" is used to express a doubt or choice between alternatives.',
    difficulty: 'medium'
  },
  {
    id: 'v50',
    subject: 'verbal',
    text: 'Identify the sentence that uses the word "weather" correctly.',
    options: [
      'The weather is nice today.',
      'The whether is nice today.',
      'The wether is nice today.',
      'The wheather is nice today.'
    ],
    correctAnswer: 'The weather is nice today.',
    explanation: '"Weather" refers to the state of the atmosphere.',
    difficulty: 'medium'
  }
];

// Adding difficulty property to all questions that don't have it
for (let i = 0; i < verbalQuestions.length; i++) {
  if (!('difficulty' in verbalQuestions[i])) {
    // Categorize questions: 1/3 easy, 1/3 medium, 1/3 hard - based on index
    const index = i % 3;
    if (index === 0) verbalQuestions[i].difficulty = 'easy';
    else if (index === 1) verbalQuestions[i].difficulty = 'medium';
    else verbalQuestions[i].difficulty = 'hard';
  }
}

export default verbalQuestions;
