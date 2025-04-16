
import { Question } from '@/types/questionTypes';

// Create medium difficulty English questions
const mediumQuestions: Question[] = [
  {
    id: 'em1',
    subject: 'english',
    text: 'Which sentence demonstrates correct subject-verb agreement?',
    options: [
      'The team are playing well.',
      'The team is playing well.',
      'The team am playing well.',
      'The team be playing well.'
    ],
    correctAnswer: 'The team is playing well.',
    explanation: 'In American English, collective nouns like "team" typically take singular verbs. "The team is playing well" shows correct subject-verb agreement.',
    difficulty: 'medium'
  },
  {
    id: 'em2',
    subject: 'english',
    text: 'Which of the following is a complex sentence?',
    options: [
      'I went to the store.',
      'I went to the store, and I bought milk.',
      'I went to the store because I needed milk.',
      'Going to the store.'
    ],
    correctAnswer: 'I went to the store because I needed milk.',
    explanation: 'A complex sentence contains an independent clause and at least one dependent clause. "Because I needed milk" is a dependent clause that cannot stand alone.',
    difficulty: 'medium'
  },
  {
    id: 'em3',
    subject: 'english',
    text: 'Which word is a synonym for "eloquent"?',
    options: ['Silent', 'Articulate', 'Awkward', 'Quiet'],
    correctAnswer: 'Articulate',
    explanation: '"Articulate" means able to express thoughts and feelings clearly and effectively, which is a synonym for "eloquent."',
    difficulty: 'medium'
  },
  {
    id: 'em4',
    subject: 'english',
    text: 'Identify the sentence with correct comma usage.',
    options: [
      'After dinner, we went for a walk.',
      'After dinner we, went for a walk.',
      'After, dinner we went for a walk.',
      'After dinner we went, for a walk.'
    ],
    correctAnswer: 'After dinner, we went for a walk.',
    explanation: 'When an introductory phrase comes before the main clause, it should be followed by a comma. "After dinner" is the introductory phrase.',
    difficulty: 'medium'
  },
  {
    id: 'em5',
    subject: 'english',
    text: 'Which sentence contains a gerund?',
    options: [
      'He is running in the park.',
      'Running is good exercise.',
      'He runs every day.',
      'He will run tomorrow.'
    ],
    correctAnswer: 'Running is good exercise.',
    explanation: 'A gerund is a verb form ending in "-ing" that functions as a noun. In this sentence, "Running" acts as the subject.',
    difficulty: 'medium'
  },
  {
    id: 'em6',
    subject: 'english',
    text: 'What is the antonym of "benevolent"?',
    options: ['Malevolent', 'Kind', 'Generous', 'Charitable'],
    correctAnswer: 'Malevolent',
    explanation: '"Malevolent" means having or showing a wish to do evil to others, which is the opposite of "benevolent" (well-meaning and kindly).',
    difficulty: 'medium'
  },
  {
    id: 'em7',
    subject: 'english',
    text: 'Which sentence contains a direct object?',
    options: [
      'The bird flew.',
      'She seems happy.',
      'He became a doctor.',
      'They bought a new car.'
    ],
    correctAnswer: 'They bought a new car.',
    explanation: 'A direct object receives the action of the verb. In this sentence, "a new car" is the direct object of the verb "bought."',
    difficulty: 'medium'
  },
  {
    id: 'em8',
    subject: 'english',
    text: 'Which sentence uses the past perfect tense correctly?',
    options: [
      'I have eaten lunch.',
      'I had eaten lunch before she arrived.',
      'I eat lunch yesterday.',
      'I was eating lunch when she arrived.'
    ],
    correctAnswer: 'I had eaten lunch before she arrived.',
    explanation: 'The past perfect tense (had + past participle) is used to indicate that one action in the past occurred before another past action.',
    difficulty: 'medium'
  },
  {
    id: 'em9',
    subject: 'english',
    text: 'Which of the following is a demonstrative pronoun?',
    options: ['She', 'This', 'Who', 'Mine'],
    correctAnswer: 'This',
    explanation: 'Demonstrative pronouns point to specific things. "This" is a demonstrative pronoun when it stands alone (not followed by a noun).',
    difficulty: 'medium'
  },
  {
    id: 'em10',
    subject: 'english',
    text: 'What is an Oxford comma?',
    options: [
      'A comma used before a quotation',
      'A comma used after an introductory phrase',
      'A comma used before "and" in a list of three or more items',
      'A comma used to separate two independent clauses'
    ],
    correctAnswer: 'A comma used before "and" in a list of three or more items',
    explanation: 'The Oxford comma (also called the serial comma) is placed before the final conjunction in a list of three or more items.',
    difficulty: 'medium'
  }
];

export default mediumQuestions;
