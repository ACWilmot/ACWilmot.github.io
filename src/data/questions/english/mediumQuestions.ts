import { Question } from '@/types/questionTypes';

const mediumQuestions: Question[] = [
  {
    id: 'em1',
    subject: 'english',
    text: 'Which sentence uses the correct form of the verb?',
    options: [
      'The team are playing well.',
      'The team is playing well.',
      'The team were playing well.',
      'The team be playing well.'
    ],
    correctAnswer: 'The team is playing well.',
    explanation: 'In American English, collective nouns like "team" are treated as singular and take a singular verb form ("is").',
    difficulty: 'medium'
  },
  {
    id: 'em2',
    subject: 'english',
    text: 'Identify the type of figurative language used in the sentence: "The stars danced in the night sky."',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    correctAnswer: 'Personification',
    explanation: 'Personification is giving human qualities to non-human things. In this case, stars are described as "dancing".',
    difficulty: 'medium'
  },
  {
    id: 'em3',
    subject: 'english',
    text: 'Which of the following sentences uses a semicolon correctly?',
    options: [
      'I went to the store; and bought milk.',
      'I went to the store, I bought milk.',
      'I went to the store; I bought milk.',
      'I went to the store, but I bought milk;'
    ],
    correctAnswer: 'I went to the store; I bought milk.',
    explanation: 'A semicolon is used to join two independent clauses that are closely related.',
    difficulty: 'medium'
  },
  {
    id: 'em4',
    subject: 'english',
    text: 'What is the best definition of "ubiquitous"?',
    options: [
      'Rare or uncommon',
      'Present everywhere',
      'Hidden or obscure',
      'Complex or intricate'
    ],
    correctAnswer: 'Present everywhere',
    explanation: '"Ubiquitous" means existing or being everywhere at the same time; widespread.',
    difficulty: 'medium'
  },
  {
    id: 'em5',
    subject: 'english',
    text: 'Which sentence contains a misplaced modifier?',
    options: [
      'Running quickly, the bus was caught by Sarah.',
      'Sarah caught the bus running quickly.',
      'Sarah, running quickly, caught the bus.',
      'Sarah caught the quickly running bus.'
    ],
    correctAnswer: 'Running quickly, the bus was caught by Sarah.',
    explanation: 'The modifier "running quickly" should be placed next to the noun it modifies, which is Sarah, not the bus.',
    difficulty: 'medium'
  },
  {
    id: 'em6',
    subject: 'english',
    text: 'Choose the sentence that uses parallel structure correctly.',
    options: [
      'She likes hiking, to swim, and riding a bike.',
      'She likes hiking, swimming, and to ride a bike.',
      'She likes to hike, swim, and riding a bike.',
      'She likes hiking, swimming, and biking.'
    ],
    correctAnswer: 'She likes hiking, swimming, and biking.',
    explanation: 'Parallel structure means using the same pattern of words to show that two or more ideas have the same level of importance. In this case, all activities are gerunds.',
    difficulty: 'medium'
  },
  {
    id: 'em7',
    subject: 'english',
    text: 'Which of the following is an example of alliteration?',
    options: [
      'The sun was like a yellow ball of fire.',
      'Peter Piper picked a peck of pickled peppers.',
      'The early bird catches the worm.',
      'He is as brave as a lion.'
    ],
    correctAnswer: 'Peter Piper picked a peck of pickled peppers.',
    explanation: 'Alliteration is the occurrence of the same letter or sound at the beginning of adjacent or closely connected words.',
    difficulty: 'medium'
  },
  {
    id: 'em8',
    subject: 'english',
    text: 'What does the idiom "break a leg" mean?',
    options: [
      'To actually break someone\'s leg',
      'To wish someone good luck',
      'To cause an accident',
      'To end a performance early'
    ],
    correctAnswer: 'To wish someone good luck',
    explanation: '"Break a leg" is an idiom used to wish someone good luck, especially before a performance.',
    difficulty: 'medium'
  },
  {
    id: 'em9',
    subject: 'english',
    text: 'Which sentence uses the word "affect" correctly?',
    options: [
      'The weather will effect our plans.',
      'The weather will affect our plans.',
      'The weather has a great affect on our plans.',
      'The weather has a great effect our plans.'
    ],
    correctAnswer: 'The weather will affect our plans.',
    explanation: '"Affect" is a verb meaning to influence, while "effect" is typically a noun meaning a result or consequence.',
    difficulty: 'medium'
  },
  {
    id: 'em10',
    subject: 'english',
    text: 'Identify the type of sentence: "Although it was raining, she went for a walk."',
    options: ['Simple', 'Compound', 'Complex', 'Compound-complex'],
    correctAnswer: 'Complex',
    explanation: 'A complex sentence has one independent clause and at least one dependent clause.',
    difficulty: 'medium'
  },
  {
    id: 'em11',
    subject: 'english',
    text: 'Which of the following sentences uses the word "their" correctly?',
    options: [
      'There going to the park.',
      'They\'re going to the park.',
      'Their going to the park.',
      'They are going to the park.'
    ],
    correctAnswer: 'They\'re going to the park.',
    explanation: '"They\'re" is a contraction of "they are," indicating an action they are performing.',
    difficulty: 'medium'
  },
  {
    id: 'em12',
    subject: 'english',
    text: 'What is the function of a colon in the following sentence: "I need three things: a pen, a notebook, and a ruler."',
    options: [
      'To indicate a pause',
      'To introduce a list or explanation',
      'To separate independent clauses',
      'To show possession'
    ],
    correctAnswer: 'To introduce a list or explanation',
    explanation: 'A colon is used to introduce a list, an explanation, or an example.',
    difficulty: 'medium'
  },
  {
    id: 'em13',
    subject: 'english',
    text: 'Which sentence contains an example of irony?',
    options: [
      'The black cat crossed her path, and she immediately felt unlucky.',
      'The fire station burned down.',
      'He was as tall as a tree.',
      'She cried when she heard the sad news.'
    ],
    correctAnswer: 'The fire station burned down.',
    explanation: 'Irony is the expression of one\'s meaning by using language that normally signifies the opposite, typically for humorous or emphatic effect. A fire station burning down is an unexpected and contradictory event.',
    difficulty: 'medium'
  },
  {
    id: 'em14',
    subject: 'english',
    text: 'Choose the correct word to complete the sentence: "She decided to _____ the advice of her doctor."',
    options: ['accept', 'except', 'expect', 'excerpt'],
    correctAnswer: 'accept',
    explanation: '"Accept" means to receive or agree to something, while "except" means to exclude.',
    difficulty: 'medium'
  },
  {
    id: 'em15',
    subject: 'english',
    text: 'Which of the following sentences uses the word "fewer" correctly?',
    options: [
      'There are less cars on the road today.',
      'There are fewer cars on the road today.',
      'There is less cars on the road today.',
      'There is fewer cars on the road today.'
    ],
    correctAnswer: 'There are fewer cars on the road today.',
    explanation: '"Fewer" is used with countable nouns (cars), while "less" is used with uncountable nouns.',
    difficulty: 'medium'
  },
  {
    id: 'em16',
    subject: 'english',
    text: 'What is the purpose of a footnote?',
    options: [
      'To provide a summary of the main points',
      'To give additional information or cite sources',
      'To entertain the reader with anecdotes',
      'To introduce the author of the text'
    ],
    correctAnswer: 'To give additional information or cite sources',
    explanation: 'Footnotes are used to provide additional information, explanations, or citations at the bottom of a page.',
    difficulty: 'medium'
  },
  {
    id: 'em17',
    subject: 'english',
    text: 'Which sentence uses the correct form of "lie" or "lay"?',
    options: [
      'I will lay down for a nap.',
      'I will lie down for a nap.',
      'I laid down for a nap yesterday.',
      'I have lain the book on the table.'
    ],
    correctAnswer: 'I will lie down for a nap.',
    explanation: '"Lie" means to recline or rest, while "lay" means to place something down. The correct form here is "lie".',
    difficulty: 'medium'
  },
  {
    id: 'em18',
    subject: 'english',
    text: 'Identify the type of clause: "Because it was raining, we stayed inside."',
    options: ['Independent', 'Dependent', 'Relative', 'Noun'],
    correctAnswer: 'Dependent',
    explanation: 'A dependent clause cannot stand alone as a sentence and is introduced by a subordinating conjunction (e.g., because, although, if).',
    difficulty: 'medium'
  },
  {
    id: 'em19',
    subject: 'english',
    text: 'Which of the following sentences uses the word "who\'s" correctly?',
    options: [
      'Whose going to the party?',
      'Who\'s going to the party?',
      'Whos going to the party?',
      'Whoes going to the party?'
    ],
    correctAnswer: 'Who\'s going to the party?',
    explanation: '"Who\'s" is a contraction of "who is," indicating an action someone is performing.',
    difficulty: 'medium'
  },
  {
    id: 'em20',
    subject: 'english',
    text: 'What is the definition of "analogy"?',
    options: [
      'A comparison between two things, typically for explanation or clarification',
      'A brief and indirect reference to a person, place, thing, or idea of historical, cultural, literary, or political significance',
      'The use of humor to emphasize a point',
      'The repetition of a word or phrase at the beginning of successive clauses'
    ],
    correctAnswer: 'A comparison between two things, typically for explanation or clarification',
    explanation: 'An analogy is a comparison between two things, typically for the purpose of explanation or clarification.',
    difficulty: 'medium'
  }
];

export default mediumQuestions;
