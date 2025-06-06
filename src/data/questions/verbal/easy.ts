
import { Question } from '@/types/questionTypes';

const easyVerbalQuestions: Question[] = [
  {
    id: 'v1',
    subject: 'verbal',
    text: 'Choose the word that means the opposite of "happy".',
    options: ['Sad', 'Glad', 'Cheerful', 'Merry'],
    correctAnswer: 'Sad',
    explanation: 'Sad means feeling unhappy, which is the opposite of happy.',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v3',
    subject: 'verbal',
    text: 'Select the word that completes the analogy: cat : meow :: dog : ?',
    options: ['Bark', 'Purr', 'Hiss', 'Roar'],
    correctAnswer: 'Bark',
    explanation: 'Cats meow, and dogs bark. The analogy relates an animal to the sound it makes.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  },
  {
    id: 'v4',
    subject: 'verbal',
    text: 'What is the missing number in the sequence: 2, 4, 6, _, 10?',
    options: ['7', '8', '9', '11'],
    correctAnswer: '8',
    explanation: 'The sequence increases by 2 each time, so the missing number is 8.',
    difficulty: 'easy',
    verbalType: 'numberSeries'
  },
  {
    id: 'v5',
    subject: 'verbal',
    text: 'Find the word that does not belong: apple, banana, carrot, orange.',
    options: ['Apple', 'Banana', 'Carrot', 'Orange'],
    correctAnswer: 'Carrot',
    explanation: 'Apples, bananas, and oranges are fruits, while a carrot is a vegetable.',
    difficulty: 'easy',
    verbalType: 'twoOddOnes'
  },
  {
    id: 'v6',
    subject: 'verbal',
    text: 'Which of the following is a synonym for "difficult"?',
    options: ['Easy', 'Simple', 'Hard', 'Clear'],
    correctAnswer: 'Hard',
    explanation: 'The word "hard" is a synonym for "difficult," meaning not easy to do or understand.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v8',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The weather is _____ today."',
    options: ['Cloud', 'Clouds', 'Cloudy', 'Clouding'],
    correctAnswer: 'Cloudy',
    explanation: '"Cloudy" is an adjective that describes the state of the weather, making it the correct choice.',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v10',
    subject: 'verbal',
    text: 'Which word is an antonym for "increase"?',
    options: ['Expand', 'Grow', 'Reduce', 'Enlarge'],
    correctAnswer: 'Reduce',
    explanation: 'An antonym is a word that means the opposite of another word. "Reduce" means to make smaller or less, which is the opposite of "increase."',
    difficulty: 'easy',
    verbalType: 'oppositeMeaning'
  },
  {
    id: 'v13',
    subject: 'verbal',
    text: 'Choose the correct plural form of "child".',
    options: ['Childs', 'Childes', 'Children', 'Childre'],
    correctAnswer: 'Children',
    explanation: '"Children" is the irregular plural form of "child".',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v16',
    subject: 'verbal',
    text: 'What is the meaning of the prefix "pre-" in the word "preview"?',
    options: ['After', 'Before', 'During', 'Inside'],
    correctAnswer: 'Before',
    explanation: 'The prefix "pre-" means "before." Therefore, "preview" means to view something before.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v19',
    subject: 'verbal',
    text: 'Select the correct form of the verb "to be" in the sentence: "They _____ happy."',
    options: ['Is', 'Am', 'Are', 'Be'],
    correctAnswer: 'Are',
    explanation: '"Are" is the correct form of the verb "to be" to use with the pronoun "they."',
    difficulty: 'easy',
    verbalType: 'missingWord'
  },
  {
    id: 'v21',
    subject: 'verbal',
    text: 'Choose the word that best replaces "enthusiastic" in the sentence: "The team was enthusiastic about the project."',
    options: ['Apathetic', 'Reluctant', 'Eager', 'Uninterested'],
    correctAnswer: 'Eager',
    explanation: '"Eager" is a synonym for "enthusiastic," meaning showing great interest or excitement.',
    difficulty: 'easy',
    verbalType: 'closestMeaning'
  },
  {
    id: 'v23',
    subject: 'verbal',
    text: 'Select the word that is an adjective.',
    options: ['Run', 'Quickly', 'Blue', 'Jump'],
    correctAnswer: 'Blue',
    explanation: 'An adjective is a word that describes a noun. "Blue" describes a color, making it an adjective.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v27',
    subject: 'verbal',
    text: 'Select the word that is a pronoun.',
    options: ['Table', 'They', 'Quickly', 'Run'],
    correctAnswer: 'They',
    explanation: 'A pronoun is a word that replaces a noun. "They" is a pronoun.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v29',
    subject: 'verbal',
    text: 'Choose the word that is a verb.',
    options: ['Happy', 'Slowly', 'Write', 'House'],
    correctAnswer: 'Write',
    explanation: 'A verb is a word that shows an action, occurrence, or state of being. "Write" is a verb.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v31',
    subject: 'verbal',
    text: 'Select the word that is a preposition.',
    options: ['Quickly', 'Under', 'They', 'Run'],
    correctAnswer: 'Under',
    explanation: 'A preposition is a word that shows the relationship between a noun or pronoun and other words in a sentence. "Under" is a preposition.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v32',
    subject: 'verbal',
    text: 'What is the correct way to write the contraction for "cannot"?',
    options: ['Can\'t', 'Cannot\'t', 'Canot', 'Cannot'],
    correctAnswer: 'Can\'t',
    explanation: '"Can\'t" is the correct contraction for "cannot."',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v35',
    subject: 'verbal',
    text: 'Select the word that is an interjection.',
    options: ['Slowly', 'Because', 'Ouch', 'They'],
    correctAnswer: 'Ouch',
    explanation: 'Interjections are words used to express strong feeling or sudden emotion, often followed by an exclamation mark. "Ouch" is an example.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v40',
    subject: 'verbal',
    text: 'What is the meaning of the suffix "-less" in the word "careless"?',
    options: ['Full of', 'Without', 'Before', 'After'],
    correctAnswer: 'Without',
    explanation: 'The suffix "-less" means "without." Therefore, "careless" means without care.',
    difficulty: 'easy',
    verbalType: 'relatedWords'
  },
  {
    id: 'v41',
    subject: 'verbal',
    text: 'Choose the word that best completes the analogy: hot : cold :: day : ?',
    options: ['Sun', 'Moon', 'Night', 'Warm'],
    correctAnswer: 'Night',
    explanation: 'Hot is the opposite of cold, and day is the opposite of night. The analogy relates opposites.',
    difficulty: 'easy',
    verbalType: 'wordConnections'
  }
];

export default easyVerbalQuestions;
