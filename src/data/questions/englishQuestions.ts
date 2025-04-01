
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
  },
  {
    id: 'e11',
    subject: 'english',
    text: 'Which sentence contains a preposition?',
    options: ['She laughed loudly.', 'The cat jumped onto the table.', 'They ran quickly.', 'He speaks clearly.'],
    correctAnswer: 'The cat jumped onto the table.',
    explanation: '"Onto" is a preposition in this sentence, showing the relationship between "jumped" and "the table".'
  },
  {
    id: 'e12',
    subject: 'english',
    text: 'What is the past tense of "begin"?',
    options: ['begun', 'began', 'beginned', 'beginning'],
    correctAnswer: 'began',
    explanation: 'The past tense of "begin" is "began". "Begun" is the past participle form.'
  },
  {
    id: 'e13',
    subject: 'english',
    text: 'Which word is a conjunction in the sentence: "I wanted to go to the party, but I had homework."',
    options: ['wanted', 'to', 'but', 'had'],
    correctAnswer: 'but',
    explanation: '"But" is a conjunction that connects the two clauses of the sentence.'
  },
  {
    id: 'e14',
    subject: 'english',
    text: 'Which of the following is a compound noun?',
    options: ['beautiful', 'quickly', 'football', 'jump'],
    correctAnswer: 'football',
    explanation: '"Football" is a compound noun formed by combining two words: "foot" and "ball".'
  },
  {
    id: 'e15',
    subject: 'english',
    text: 'Which sentence uses the correct form of the comparative adjective?',
    options: ['She is more taller than her sister.', 'This book is more interesting than that one.', 'He runs more faster than me.', 'That was the most easiest test ever.'],
    correctAnswer: 'This book is more interesting than that one.',
    explanation: 'For longer adjectives like "interesting," we use "more" before the adjective to form the comparative.'
  },
  {
    id: 'e16',
    subject: 'english',
    text: 'Which sentence contains a pronoun?',
    options: ['The cat sat on the mat.', 'John went to the store.', 'She likes to read books.', 'London is a big city.'],
    correctAnswer: 'She likes to read books.',
    explanation: '"She" is a pronoun that replaces a specific female person\'s name.'
  },
  {
    id: 'e17',
    subject: 'english',
    text: 'In the sentence "The quick brown fox jumps over the lazy dog," which word is an adjective describing "fox"?',
    options: ['quick', 'brown', 'jumps', 'lazy'],
    correctAnswer: 'brown',
    explanation: '"Brown" is an adjective describing the fox\'s color. "Quick" also describes the fox but the question specifically asks for the one describing "fox".'
  },
  {
    id: 'e18',
    subject: 'english',
    text: 'Which word is an antonym for "generous"?',
    options: ['kind', 'giving', 'stingy', 'wealthy'],
    correctAnswer: 'stingy',
    explanation: '"Stingy" means unwilling to spend money or give things to others, which is the opposite of "generous".'
  },
  {
    id: 'e19',
    subject: 'english',
    text: 'Which sentence is punctuated correctly?',
    options: ['My friend sarah lives in paris.', 'My friend, Sarah lives in Paris.', 'My friend Sarah, lives in Paris.', 'My friend Sarah lives in Paris.'],
    correctAnswer: 'My friend Sarah lives in Paris.',
    explanation: 'This sentence is punctuated correctly with capital letters for the proper nouns "Sarah" and "Paris".'
  },
  {
    id: 'e20',
    subject: 'english',
    text: 'Which of the following is a verb in the present continuous tense?',
    options: ['walks', 'walked', 'will walk', 'is walking'],
    correctAnswer: 'is walking',
    explanation: 'Present continuous tense is formed with "is/am/are" + the present participle (verb + ing). "Is walking" follows this pattern.'
  },
  {
    id: 'e21',
    subject: 'english',
    text: 'Which sentence contains a direct object?',
    options: ['The sun is shining brightly.', 'She seems happy.', 'They arrived late.', 'Tom wrote a letter.'],
    correctAnswer: 'Tom wrote a letter.',
    explanation: 'In "Tom wrote a letter," "letter" is the direct object because it receives the action of the verb "wrote".'
  },
  {
    id: 'e22',
    subject: 'english',
    text: 'Which of these words is a collective noun?',
    options: ['chair', 'flock', 'beautiful', 'jump'],
    correctAnswer: 'flock',
    explanation: 'A collective noun refers to a group of people or things. "Flock" is a collective noun for a group of birds or sheep.'
  },
  {
    id: 'e23',
    subject: 'english',
    text: 'Which sentence uses the apostrophe correctly?',
    options: ['The dog\'s are barking loudly.', 'The book\'s pages were torn.', 'The childrens\' toys are broken.', "It's time to go home."],
    correctAnswer: 'The book\'s pages were torn.',
    explanation: 'The apostrophe in "book\'s" correctly shows possession by a singular noun.'
  },
  {
    id: 'e24',
    subject: 'english',
    text: 'Which of these words contains a suffix?',
    options: ['return', 'preview', 'happiness', 'misplace'],
    correctAnswer: 'happiness',
    explanation: '"Happiness" contains the suffix "-ness" added to the base word "happy".'
  },
  {
    id: 'e25',
    subject: 'english',
    text: 'Which sentence uses the correct form of the verb?',
    options: ['Everyone have finished the exam.', 'The team are playing well.', 'Each of the students has submitted their work.', 'Neither of them were available.'],
    correctAnswer: 'Each of the students has submitted their work.',
    explanation: '"Each" is singular, so it takes the singular verb "has".'
  },
  {
    id: 'e26',
    subject: 'english',
    text: 'Which word contains a silent letter?',
    options: ['jump', 'knock', 'rich', 'fast'],
    correctAnswer: 'knock',
    explanation: '"Knock" contains a silent "k" at the beginning.'
  },
  {
    id: 'e27',
    subject: 'english',
    text: 'In the sentence "The movie was really good," which word is an adverb?',
    options: ['the', 'movie', 'really', 'good'],
    correctAnswer: 'really',
    explanation: '"Really" is an adverb that modifies the adjective "good".'
  },
  {
    id: 'e28',
    subject: 'english',
    text: 'Which sentence is in the passive voice?',
    options: ['The chef prepared a delicious meal.', 'The meal was prepared by the chef.', 'We enjoyed the meal.', 'The chef is talented.'],
    correctAnswer: 'The meal was prepared by the chef.',
    explanation: 'In passive voice, the subject receives the action. "The meal" receives the action of being prepared.'
  },
  {
    id: 'e29',
    subject: 'english',
    text: 'Which of these is NOT a type of poem?',
    options: ['sonnet', 'haiku', 'novelist', 'limerick'],
    correctAnswer: 'novelist',
    explanation: 'A novelist is a person who writes novels, not a type of poem. Sonnet, haiku, and limerick are all types of poems.'
  },
  {
    id: 'e30',
    subject: 'english',
    text: 'Which of the following sentences contains a simile?',
    options: ['The room was dark.', 'The tree is tall.', 'She is as quiet as a mouse.', 'The thunder roared.'],
    correctAnswer: 'She is as quiet as a mouse.',
    explanation: 'A simile compares two things using "like" or "as". "As quiet as a mouse" is a simile comparing her quietness to that of a mouse.'
  }
];

export default englishQuestions;
