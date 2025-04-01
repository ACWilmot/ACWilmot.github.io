
import { Question } from '@/types/questionTypes';

const englishQuestions: Question[] = [
  {
    id: 'e1',
    subject: 'english',
    text: 'Which of the following is a proper noun?',
    options: ['city', 'London', 'building', 'quickly'],
    correctAnswer: 'London',
    explanation: 'London is a proper noun because it names a specific city.'
  },
  {
    id: 'e2',
    subject: 'english',
    text: 'Which word is an adverb in the sentence: "She ran quickly down the hill."',
    options: ['ran', 'quickly', 'down', 'hill'],
    correctAnswer: 'quickly',
    explanation: '"Quickly" is an adverb because it describes how she ran.'
  },
  {
    id: 'e3',
    subject: 'english',
    text: 'Which of these words is a synonym for "happy"?',
    options: ['sad', 'joyful', 'angry', 'tired'],
    correctAnswer: 'joyful',
    explanation: '"Joyful" means feeling or showing great pleasure or happiness, making it a synonym for "happy".'
  },
  {
    id: 'e4',
    subject: 'english',
    text: 'Which punctuation mark should end an exclamatory sentence?',
    options: ['period', 'question mark', 'exclamation mark', 'comma'],
    correctAnswer: 'exclamation mark',
    explanation: 'An exclamation mark (!) is used to end exclamatory sentences that express strong emotion.'
  },
  {
    id: 'e5',
    subject: 'english',
    text: 'What is the plural form of "child"?',
    options: ['childs', 'childes', 'children', 'child\'s'],
    correctAnswer: 'children',
    explanation: '"Child" is an irregular noun and its plural form is "children".'
  },
  {
    id: 'e6',
    subject: 'english',
    text: 'Which of the following is a complete sentence?',
    options: ['Running fast.', 'When I arrived.', 'The big blue sky.', 'She went home.'],
    correctAnswer: 'She went home.',
    explanation: '"She went home" is a complete sentence because it has a subject (she) and a verb (went).'
  },
  {
    id: 'e7',
    subject: 'english',
    text: 'Which word is spelled incorrectly?',
    options: ['necessary', 'accomodate', 'parliament', 'beginning'],
    correctAnswer: 'accomodate',
    explanation: '"Accommodate" is the correct spelling, with two "c"s and two "m"s.'
  },
  {
    id: 'e8',
    subject: 'english',
    text: 'Which part of speech is the word "quickly"?',
    options: ['noun', 'verb', 'adjective', 'adverb'],
    correctAnswer: 'adverb',
    explanation: '"Quickly" is an adverb because it describes how an action is performed.'
  },
  {
    id: 'e9',
    subject: 'english',
    text: 'Which of these is the correct homophone for "their"?',
    options: ['there', 'they\'re', 'thier', 'theyre'],
    correctAnswer: 'there',
    explanation: '"Their" (possessive) and "there" (location) are homophones - words that sound the same but have different meanings.'
  },
  {
    id: 'e10',
    subject: 'english',
    text: 'Which of these sentences uses the correct form of "its"?',
    options: ['The dog chased it\'s tail.', 'Its going to rain today.', 'The house lost its roof in the storm.', 'The cat knows it\'s dinner time.'],
    correctAnswer: 'The house lost its roof in the storm.',
    explanation: '"Its" (without an apostrophe) is the correct possessive form, while "it\'s" is a contraction of "it is".'
  }
];

export default englishQuestions;
