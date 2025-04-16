
import { Question } from '@/types/questionTypes';

// Extract 'medium' difficulty questions from the existing verbal questions
const mediumQuestions: Question[] = [
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
    id: 'v7',
    subject: 'verbal',
    text: 'Identify the type of word that "quickly" is in the sentence: "He ran quickly."',
    options: ['Noun', 'Adjective', 'Verb', 'Adverb'],
    correctAnswer: 'Adverb',
    explanation: 'An adverb modifies a verb, adjective, or another adverb, indicating how, where, when, or to what extent. "Quickly" describes how he ran.',
    difficulty: 'medium'
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
    id: 'v33',
    subject: 'verbal',
    text: 'Choose the sentence that uses the word "its" correctly.',
    options: [
      'The dog wagged it\'s tail.',
      'The dog wagged its\'s tail.',
      'The dog wagged it tail.',
      'The dog wagged its tail.'
    ],
    correctAnswer: 'The dog wagged its tail.',
    explanation: '"Its" is a possessive pronoun that shows ownership.',
    difficulty: 'medium'
  }
];

export default mediumQuestions;
