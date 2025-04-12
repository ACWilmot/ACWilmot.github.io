import { Question } from '@/types/questionTypes';

const hardQuestions: Question[] = [
  {
    id: 'eh1',
    subject: 'english',
    text: 'Which sentence contains an example of a subjunctive mood?',
    options: [
      'He went to the store.',
      'I wish I were taller.',
      'They are playing soccer.',
      'She has completed her homework.'
    ],
    correctAnswer: 'I wish I were taller.',
    explanation: 'The subjunctive mood is used to express wishes, hypothetical situations, or conditions contrary to fact. "I wish I were taller" uses "were" instead of "was" to indicate the subjunctive mood.',
    difficulty: 'hard'
  },
  {
    id: 'eh2',
    subject: 'english',
    text: 'Identify the sentence that uses a gerund phrase as the subject.',
    options: [
      'She enjoys to swim in the ocean.',
      'Swimming in the ocean is her favorite activity.',
      'She swims in the ocean every day.',
      'To swim in the ocean is what she likes.'
    ],
    correctAnswer: 'Swimming in the ocean is her favorite activity.',
    explanation: 'A gerund phrase uses a verb form ending in "-ing" as a noun. In this sentence, "Swimming in the ocean" acts as the subject.',
    difficulty: 'hard'
  },
  {
    id: 'eh3',
    subject: 'english',
    text: 'Which sentence demonstrates correct parallel structure?',
    options: [
      'She likes hiking, to bike, and swimming.',
      'She likes hiking, biking, and to swim.',
      'She likes to hike, biking, and swimming.',
      'She likes hiking, biking, and swimming.'
    ],
    correctAnswer: 'She likes hiking, biking, and swimming.',
    explanation: 'Parallel structure means using the same pattern of words to show that two or more ideas have the same level of importance. The correct sentence uses all gerunds.',
    difficulty: 'hard'
  },
  {
    id: 'eh4',
    subject: 'english',
    text: 'Choose the sentence that correctly uses a semicolon.',
    options: [
      'I went to the store; I bought milk, eggs, and bread.',
      'I went to the store, I bought milk; eggs; and bread.',
      'I went to the store; and I bought milk, eggs, and bread.',
      'I went to the store, I bought milk, eggs, and bread;'],
    correctAnswer: 'I went to the store; I bought milk, eggs, and bread.',
    explanation: 'A semicolon is used to connect two independent clauses that are related. The clauses "I went to the store" and "I bought milk, eggs, and bread" are both independent and closely related.',
    difficulty: 'hard'
  },
  {
    id: 'eh5',
    subject: 'english',
    text: 'Which sentence uses the correct form of the word "lie"?',
    options: [
      'He laid down for a nap.',
      'He lies down for a nap every day.',
      'He layed down for a nap.',
      'He has lain down for a nap.'
    ],
    correctAnswer: 'He lies down for a nap every day.',
    explanation: '"Lies" is the present tense form of "to lie" (to recline). "Lay" is the past tense of "to lie," and "laid" is the past tense of "to lay" (to place something down).',
    difficulty: 'hard'
  },
  {
    id: 'eh6',
    subject: 'english',
    text: 'Identify the sentence with the correct use of the word "affect" or "effect".',
    options: [
      'The affect of the storm was devastating.',
      'The effect of the storm was devastating.',
      'The storm affected the city greatly, it had a big effect.',
      'The storm effected the city greatly.'
    ],
    correctAnswer: 'The effect of the storm was devastating.',
    explanation: '"Effect" is usually a noun meaning a result or consequence. "Affect" is usually a verb meaning to influence. The correct sentence uses "effect" as a noun.',
    difficulty: 'hard'
  },
  {
    id: 'eh7',
    subject: 'english',
    text: 'Which sentence contains a dangling modifier?',
    options: [
      'Walking through the park, the birds chirped loudly.',
      'Walking through the park, I saw many birds.',
      'I enjoyed walking through the park, listening to the birds.',
      'The birds were chirping as I was walking through the park.'
    ],
    correctAnswer: 'Walking through the park, the birds chirped loudly.',
    explanation: 'A dangling modifier does not clearly refer to the word it is intended to modify. In this case, it sounds like the birds are walking through the park, not the person.',
    difficulty: 'hard'
  },
  {
    id: 'eh8',
    subject: 'english',
    text: 'Choose the sentence that correctly uses an ellipsis.',
    options: [
      'He said he would... think about it.',
      'He said he would...think about it.',
      'He said he would.... think about it.',
      'He said he would . . . think about it.'
    ],
    correctAnswer: 'He said he would... think about it.',
    explanation: 'An ellipsis (...) is used to indicate an omission of words or a pause. There should be a space before "think" but not before the ellipsis.',
    difficulty: 'hard'
  },
  {
    id: 'eh9',
    subject: 'english',
    text: 'Which sentence uses the correct tense sequence?',
    options: [
      'I will be happy after I finished my work.',
      'I will be happy after I finish my work.',
      'I would be happy after I will finish my work.',
      'I would be happy after I finished my work.'
    ],
    correctAnswer: 'I will be happy after I finish my work.',
    explanation: 'The correct tense sequence pairs a future tense ("will be") with a present tense ("finish") to describe a future event that will happen after another future event.',
    difficulty: 'hard'
  },
  {
    id: 'eh10',
    subject: 'english',
    text: 'Identify the sentence that uses a split infinitive correctly.',
    options: [
      'She decided to quickly run to the store.',
      'She decided quickly to run to the store.',
      'She decided to run quickly to the store.',
      'She decided to run to quickly the store.'
    ],
    correctAnswer: 'She decided to run quickly to the store.',
    explanation: 'A split infinitive is when an adverb is placed between "to" and the verb (e.g., "to quickly run"). While some consider it incorrect, it is acceptable when it sounds more natural and clear.',
    difficulty: 'hard'
  },
  {
    id: 'eh11',
    subject: 'english',
    text: 'Which sentence uses the correct form of "who" or "whom"?',
    options: [
      'Who did you give the book to?',
      'Whom did you give the book to?',
      'Who did you gave the book to?',
      'Whom did you gave the book to?'
    ],
    correctAnswer: 'Whom did you give the book to?',
    explanation: '"Whom" is used as the object of a verb or preposition. In this case, "whom" is the object of the preposition "to."',
    difficulty: 'hard'
  },
  {
    id: 'eh12',
    subject: 'english',
    text: 'Identify the sentence that uses a mixed metaphor.',
    options: [
      'The early bird catches the worm.',
      'He is a wolf in sheep\'s clothing.',
      'That project is a tightrope walk in a minefield.',
      'Time is a river flowing gently.'
    ],
    correctAnswer: 'That project is a tightrope walk in a minefield.',
    explanation: 'A mixed metaphor combines two or more incompatible metaphors in a single expression. "Tightrope walk" and "minefield" are unrelated images that create a nonsensical comparison.',
    difficulty: 'hard'
  },
  {
    id: 'eh13',
    subject: 'english',
    text: 'Which sentence contains an example of chiasmus?',
    options: [
      'Ask not what your country can do for you – ask what you can do for your country.',
      'Easy come, easy go.',
      'She is all that and a bag of chips.',
      'He went to the store and bought milk.'
    ],
    correctAnswer: 'Ask not what your country can do for you – ask what you can do for your country.',
    explanation: 'Chiasmus is a rhetorical device in which two or more clauses are balanced against each other by the reversal of their structures in order to produce an artistic effect.',
    difficulty: 'hard'
  },
  {
    id: 'eh14',
    subject: 'english',
    text: 'Choose the sentence that correctly uses a hyphen.',
    options: [
      'He is a well known author.',
      'He is a well-known author.',
      'He is a well known-author.',
      'He is a well knownauthor.'
    ],
    correctAnswer: 'He is a well-known author.',
    explanation: 'A hyphen is used to join two or more words serving as a single adjective before a noun. "Well-known" acts as a single adjective describing "author."',
    difficulty: 'hard'
  },
  {
    id: 'eh15',
    subject: 'english',
    text: 'Identify the sentence that contains a zeugma.',
    options: [
      'She opened her heart and her purse to the needy.',
      'He runs quickly.',
      'They went to the park.',
      'The cat sat on the mat.'
    ],
    correctAnswer: 'She opened her heart and her purse to the needy.',
    explanation: 'Zeugma is a figure of speech in which a word applies to two others in different senses (e.g., "She opened her heart and her purse").',
    difficulty: 'hard'
  },
  {
    id: 'eh16',
    subject: 'english',
    text: 'Which sentence uses the correct form of "there," "their," or "they\'re"?',
    options: [
      'There going to the party.',
      'Their going to the party.',
      'They\'re going to the party.',
      'Theyre going to the party.'
    ],
    correctAnswer: 'They\'re going to the party.',
    explanation: '"They\'re" is a contraction of "they are." "There" indicates a place, and "their" shows possession.',
    difficulty: 'hard'
  },
  {
    id: 'eh17',
    subject: 'english',
    text: 'Choose the sentence that correctly uses a colon.',
    options: [
      'I need: milk, eggs, and bread.',
      'I need the following: milk, eggs, and bread.',
      'I need the following, milk, eggs, and bread.',
      'I need the following; milk, eggs, and bread.'
    ],
    correctAnswer: 'I need the following: milk, eggs, and bread.',
    explanation: 'A colon is used to introduce a list or explanation after an independent clause. "I need the following" is an independent clause that introduces the list.',
    difficulty: 'hard'
  },
  {
    id: 'eh18',
    subject: 'english',
    text: 'Identify the sentence that contains an anachronism.',
    options: [
      'He used a smartphone to call his friend.',
      'The movie was set in the 1800s, but the character used a mobile phone.',
      'She wrote a letter with a pen.',
      'They drove a car to the beach.'
    ],
    correctAnswer: 'The movie was set in the 1800s, but the character used a mobile phone.',
    explanation: 'An anachronism is something that is out of place in time. A mobile phone in the 1800s is an example of this.',
    difficulty: 'hard'
  },
  {
    id: 'eh19',
    subject: 'english',
    text: 'Which sentence uses the correct form of "it\'s" or "its"?',
    options: [
      'Its a beautiful day.',
      'It\'s a beautiful day.',
      'The dog wagged it\'s tail.',
      'The dog wagged its tail.'
    ],
    correctAnswer: 'It\'s a beautiful day.',
    explanation: '"It\'s" is a contraction of "it is" or "it has." "Its" is a possessive pronoun.',
    difficulty: 'hard'
  },
  {
    id: 'eh20',
    subject: 'english',
    text: 'Choose the sentence that contains a litotes.',
    options: [
      'He is not the smartest person in the world.',
      'She is very intelligent.',
      'The weather is wonderful.',
      'The book is interesting.'
    ],
    correctAnswer: 'He is not the smartest person in the world.',
    explanation: 'Litotes is an understatement in which an affirmative is expressed by the negative of the contrary (e.g., "not the smartest" meaning "less intelligent").',
    difficulty: 'hard'
  }
];

export default hardQuestions;
