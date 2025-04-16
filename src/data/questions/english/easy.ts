
import { Question } from '@/types/questionTypes';

// Using the existing easy English questions from easyQuestions.ts
const easyQuestions: Question[] = [
  {
    id: 'e1',
    subject: 'english',
    text: 'Which of the following is a proper noun?',
    options: ['city', 'London', 'building', 'quickly'],
    correctAnswer: 'London',
    explanation: 'London is a proper noun because it names a specific city.',
    difficulty: 'easy'
  },
  {
    id: 'e2',
    subject: 'english',
    text: 'Which word is an adverb in the sentence: "She ran quickly down the hill."',
    options: ['ran', 'quickly', 'down', 'hill'],
    correctAnswer: 'quickly',
    explanation: '"Quickly" is an adverb because it describes how she ran.',
    difficulty: 'easy'
  },
  {
    id: 'e3',
    subject: 'english',
    text: 'Which of these words is a synonym for "happy"?',
    options: ['sad', 'joyful', 'angry', 'tired'],
    correctAnswer: 'joyful',
    explanation: '"Joyful" means feeling or showing great pleasure or happiness, making it a synonym for "happy".',
    difficulty: 'easy'
  },
  {
    id: 'e4',
    subject: 'english',
    text: 'Which punctuation mark should end an exclamatory sentence?',
    options: ['period', 'question mark', 'exclamation mark', 'comma'],
    correctAnswer: 'exclamation mark',
    explanation: 'An exclamation mark (!) is used to end exclamatory sentences that express strong emotion.',
    difficulty: 'easy'
  },
  {
    id: 'e6',
    subject: 'english',
    text: 'Which of the following is a complete sentence?',
    options: ['Running fast.', 'When I arrived.', 'The big blue sky.', 'She went home.'],
    correctAnswer: 'She went home.',
    explanation: '"She went home" is a complete sentence because it has a subject (she) and a verb (went).',
    difficulty: 'easy'
  },
  {
    id: 'e8',
    subject: 'english',
    text: 'Which part of speech is the word "quickly"?',
    options: ['noun', 'verb', 'adjective', 'adverb'],
    correctAnswer: 'adverb',
    explanation: '"Quickly" is an adverb because it describes how an action is performed.',
    difficulty: 'easy'
  },
  {
    id: 'e16',
    subject: 'english',
    text: 'Which sentence contains a pronoun?',
    options: ['The cat sat on the mat.', 'John went to the store.', 'She likes to read books.', 'London is a big city.'],
    correctAnswer: 'She likes to read books.',
    explanation: '"She" is a pronoun that replaces a specific female person\'s name.',
    difficulty: 'easy'
  },
  {
    id: 'e26',
    subject: 'english',
    text: 'Which word contains a silent letter?',
    options: ['jump', 'knock', 'rich', 'fast'],
    correctAnswer: 'knock',
    explanation: '"Knock" contains a silent "k" at the beginning.',
    difficulty: 'easy'
  },
  {
    id: 'e27',
    subject: 'english',
    text: 'In the sentence "The movie was really good," which word is an adverb?',
    options: ['the', 'movie', 'really', 'good'],
    correctAnswer: 'really',
    explanation: '"Really" is an adverb that modifies the adjective "good".',
    difficulty: 'easy'
  },
  {
    id: 'e34',
    subject: 'english',
    text: 'In the sentence "The very old man walked slowly," which word is an adjective modifying "man"?',
    options: ['The', 'very', 'old', 'slowly'],
    correctAnswer: 'old',
    explanation: '"Old" is an adjective that modifies the noun "man", describing what kind of man he is.',
    difficulty: 'easy'
  },
  {
    id: 'e39',
    subject: 'english',
    text: 'Which word is an example of a coordinating conjunction?',
    options: ['because', 'although', 'since', 'but'],
    correctAnswer: 'but',
    explanation: '"But" is one of the seven coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so).',
    difficulty: 'easy'
  },
  {
    id: 'e50',
    subject: 'english',
    text: 'Which word is an example of an interjection?',
    options: ['slowly', 'because', 'ouch', 'they'],
    correctAnswer: 'ouch',
    explanation: 'Interjections are words used to express strong feeling or sudden emotion, often followed by an exclamation mark. "Ouch" is an example.',
    difficulty: 'easy'
  },
  {
    id: 'e55',
    subject: 'english',
    text: 'Which verb is irregular?',
    options: ['walk', 'play', 'sing', 'jump'],
    correctAnswer: 'sing',
    explanation: 'Irregular verbs don\'t follow standard patterns when changing tense. "Sing" becomes "sang" in past tense, not "singed".',
    difficulty: 'easy'
  },
  {
    id: 'e60',
    subject: 'english',
    text: 'What type of word is "quickly"?',
    options: ['adjective', 'adverb', 'noun', 'pronoun'],
    correctAnswer: 'adverb',
    explanation: '"Quickly" is an adverb, a word that modifies a verb, an adjective, or another adverb, expressing manner, place, time, or degree.',
    difficulty: 'easy'
  },
  {
    id: 'e64',
    subject: 'english',
    text: 'In the phrase "the old man\'s house," the apostrophe indicates:',
    options: ['plurality', 'omission', 'possession', 'contraction'],
    correctAnswer: 'possession',
    explanation: 'The apostrophe in "man\'s" shows that the house belongs to the old man, indicating possession.',
    difficulty: 'easy'
  },
  {
    id: 'e68',
    subject: 'english',
    text: 'What part of speech is the word "under" in the sentence "The cat is under the table"?',
    options: ['conjunction', 'preposition', 'adverb', 'adjective'],
    correctAnswer: 'preposition',
    explanation: '"Under" is a preposition in this sentence, showing the relationship between "cat" and "table".',
    difficulty: 'easy'
  },
  {
    id: 'e76',
    subject: 'english',
    text: 'Which prefix means "not" or "opposite"?',
    options: ['pre-', 'post-', 'un-', 're-'],
    correctAnswer: 'un-',
    explanation: 'The prefix "un-" typically means "not" or "opposite of," as in "unhappy" (not happy) or "undo" (reverse an action).',
    difficulty: 'easy'
  },
  {
    id: 'e84',
    subject: 'english',
    text: 'Which punctuation mark is used to indicate emphasis, surprise, or strong emotion?',
    options: ['period', 'comma', 'question mark', 'exclamation mark'],
    correctAnswer: 'exclamation mark',
    explanation: 'The exclamation mark (!) is used to express strong emotion, emphasis, or surprise in a sentence.',
    difficulty: 'easy'
  },
  {
    id: 'e89',
    subject: 'english',
    text: 'Which of these words is formed by adding a suffix to a base word?',
    options: ['replay', 'unhappy', 'teacher', 'disable'],
    correctAnswer: 'teacher',
    explanation: '"Teacher" is formed by adding the suffix "-er" (one who does something) to the base word "teach".',
    difficulty: 'easy'
  },
  {
    id: 'e92',
    subject: 'english',
    text: 'Which word is a preposition in the sentence "She walked across the street"?',
    options: ['She', 'walked', 'across', 'street'],
    correctAnswer: 'across',
    explanation: '"Across" is a preposition that shows the relationship between "walked" and "street".',
    difficulty: 'easy'
  }
];

export default easyQuestions;
