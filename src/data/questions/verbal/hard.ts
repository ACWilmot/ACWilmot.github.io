
import { Question } from '@/types/questionTypes';

const hardVerbalQuestions: Question[] = [
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
    difficulty: 'hard'
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
    difficulty: 'hard'
  },
  {
    id: 'v39',
    subject: 'verbal',
    text: 'Select the word that is an example of alliteration.',
    options: ['Jump quickly', 'Blue house', 'Peter Piper', 'Green table'],
    correctAnswer: 'Peter Piper',
    explanation: 'Alliteration is the occurrence of the same letter or sound at the beginning of adjacent or closely connected words. "Peter Piper" is an example.',
    difficulty: 'hard'
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
    difficulty: 'hard'
  },
  {
    id: 'v43',
    subject: 'verbal',
    text: 'Select the word that is an example of assonance.',
    options: ['Red hat', 'Green tree', 'Blue moon', 'Fine time'],
    correctAnswer: 'Fine time',
    explanation: 'Assonance is the repetition of the sound of a vowel or diphthong in nonrhyming stressed syllables near enough to each other for the echo to be discernible. "Fine time" is an example.',
    difficulty: 'hard'
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
    difficulty: 'hard'
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
    difficulty: 'hard'
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
    difficulty: 'hard'
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
    difficulty: 'hard'
  }
];

export default hardVerbalQuestions;
