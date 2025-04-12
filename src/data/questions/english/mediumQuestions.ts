
import { Question } from '@/types/questionTypes';

const mediumQuestions: Question[] = [
  {
    id: 'e5',
    subject: 'english',
    text: 'What is the plural form of "child"?',
    options: ['childs', 'childes', 'children', 'child\'s'],
    correctAnswer: 'children',
    explanation: '"Child" is an irregular noun and its plural form is "children".',
    difficulty: 'medium'
  },
  {
    id: 'e7',
    subject: 'english',
    text: 'Which word is spelled incorrectly?',
    options: ['necessary', 'accomodate', 'parliament', 'beginning'],
    correctAnswer: 'accomodate',
    explanation: '"Accommodate" is the correct spelling, with two "c"s and two "m"s.',
    difficulty: 'medium'
  },
  {
    id: 'e9',
    subject: 'english',
    text: 'Which of these is the correct homophone for "their"?',
    options: ['there', 'they\'re', 'thier', 'theyre'],
    correctAnswer: 'there',
    explanation: '"Their" (possessive) and "there" (location) are homophones - words that sound the same but have different meanings.',
    difficulty: 'medium'
  },
  {
    id: 'e10',
    subject: 'english',
    text: 'Which of these sentences uses the correct form of "its"?',
    options: ['The dog chased it\'s tail.', 'Its going to rain today.', 'The house lost its roof in the storm.', 'The cat knows it\'s dinner time.'],
    correctAnswer: 'The house lost its roof in the storm.',
    explanation: '"Its" (without an apostrophe) is the correct possessive form, while "it\'s" is a contraction of "it is".',
    difficulty: 'medium'
  },
  {
    id: 'e11',
    subject: 'english',
    text: 'Which sentence contains a preposition?',
    options: ['She laughed loudly.', 'The cat jumped onto the table.', 'They ran quickly.', 'He speaks clearly.'],
    correctAnswer: 'The cat jumped onto the table.',
    explanation: '"Onto" is a preposition in this sentence, showing the relationship between "jumped" and "the table".',
    difficulty: 'medium'
  },
  {
    id: 'e12',
    subject: 'english',
    text: 'What is the past tense of "begin"?',
    options: ['begun', 'began', 'beginned', 'beginning'],
    correctAnswer: 'began',
    explanation: 'The past tense of "begin" is "began". "Begun" is the past participle form.',
    difficulty: 'medium'
  },
  {
    id: 'e13',
    subject: 'english',
    text: 'Which word is a conjunction in the sentence: "I wanted to go to the party, but I had homework."',
    options: ['wanted', 'to', 'but', 'had'],
    correctAnswer: 'but',
    explanation: '"But" is a conjunction that connects the two clauses of the sentence.',
    difficulty: 'medium'
  },
  {
    id: 'e14',
    subject: 'english',
    text: 'Which of the following is a compound noun?',
    options: ['beautiful', 'quickly', 'football', 'jump'],
    correctAnswer: 'football',
    explanation: '"Football" is a compound noun formed by combining two words: "foot" and "ball".',
    difficulty: 'medium'
  },
  {
    id: 'e15',
    subject: 'english',
    text: 'Which sentence uses the correct form of the comparative adjective?',
    options: ['She is more taller than her sister.', 'This book is more interesting than that one.', 'He runs more faster than me.', 'That was the most easiest test ever.'],
    correctAnswer: 'This book is more interesting than that one.',
    explanation: 'For longer adjectives like "interesting," we use "more" before the adjective to form the comparative.',
    difficulty: 'medium'
  },
  {
    id: 'e17',
    subject: 'english',
    text: 'In the sentence "The quick brown fox jumps over the lazy dog," which word is an adjective describing "fox"?',
    options: ['quick', 'brown', 'jumps', 'lazy'],
    correctAnswer: 'brown',
    explanation: '"Brown" is an adjective describing the fox\'s color. "Quick" also describes the fox but the question specifically asks for the one describing "fox".',
    difficulty: 'medium'
  },
  {
    id: 'e18',
    subject: 'english',
    text: 'Which word is an antonym for "generous"?',
    options: ['kind', 'giving', 'stingy', 'wealthy'],
    correctAnswer: 'stingy',
    explanation: '"Stingy" means unwilling to spend money or give things to others, which is the opposite of "generous".',
    difficulty: 'medium'
  },
  {
    id: 'e19',
    subject: 'english',
    text: 'Which sentence is punctuated correctly?',
    options: ['My friend sarah lives in paris.', 'My friend, Sarah lives in Paris.', 'My friend Sarah, lives in Paris.', 'My friend Sarah lives in Paris.'],
    correctAnswer: 'My friend Sarah lives in Paris.',
    explanation: 'This sentence is punctuated correctly with capital letters for the proper nouns "Sarah" and "Paris".',
    difficulty: 'medium'
  },
  {
    id: 'e20',
    subject: 'english',
    text: 'Which of the following is a verb in the present continuous tense?',
    options: ['walks', 'walked', 'will walk', 'is walking'],
    correctAnswer: 'is walking',
    explanation: 'Present continuous tense is formed with "is/am/are" + the present participle (verb + ing). "Is walking" follows this pattern.',
    difficulty: 'medium'
  },
  {
    id: 'e21',
    subject: 'english',
    text: 'Which sentence contains a direct object?',
    options: ['The sun is shining brightly.', 'She seems happy.', 'They arrived late.', 'Tom wrote a letter.'],
    correctAnswer: 'Tom wrote a letter.',
    explanation: 'In "Tom wrote a letter," "letter" is the direct object because it receives the action of the verb "wrote".',
    difficulty: 'medium'
  },
  {
    id: 'e22',
    subject: 'english',
    text: 'Which of these words is a collective noun?',
    options: ['chair', 'flock', 'beautiful', 'jump'],
    correctAnswer: 'flock',
    explanation: 'A collective noun refers to a group of people or things. "Flock" is a collective noun for a group of birds or sheep.',
    difficulty: 'medium'
  }
];

// Add more medium questions (through e85)
const additionalMediumQuestions: Question[] = [
  {
    id: 'e23',
    subject: 'english',
    text: 'Which sentence uses the apostrophe correctly?',
    options: ['The dog\'s are barking loudly.', 'The book\'s pages were torn.', 'The childrens\' toys are broken.', "It's time to go home."],
    correctAnswer: 'The book\'s pages were torn.',
    explanation: 'The apostrophe in "book\'s" correctly shows possession by a singular noun.',
    difficulty: 'medium'
  },
  {
    id: 'e24',
    subject: 'english',
    text: 'Which of these words contains a suffix?',
    options: ['return', 'preview', 'happiness', 'misplace'],
    correctAnswer: 'happiness',
    explanation: '"Happiness" contains the suffix "-ness" added to the base word "happy".',
    difficulty: 'medium'
  },
  {
    id: 'e28',
    subject: 'english',
    text: 'Which sentence is in the passive voice?',
    options: ['The chef prepared a delicious meal.', 'The meal was prepared by the chef.', 'We enjoyed the meal.', 'The chef is talented.'],
    correctAnswer: 'The meal was prepared by the chef.',
    explanation: 'In passive voice, the subject receives the action. "The meal" receives the action of being prepared.',
    difficulty: 'medium'
  },
  {
    id: 'e29',
    subject: 'english',
    text: 'Which of these is NOT a type of poem?',
    options: ['sonnet', 'haiku', 'novelist', 'limerick'],
    correctAnswer: 'novelist',
    explanation: 'A novelist is a person who writes novels, not a type of poem. Sonnet, haiku, and limerick are all types of poems.',
    difficulty: 'medium'
  },
  {
    id: 'e30',
    subject: 'english',
    text: 'Which of the following sentences contains a simile?',
    options: ['The room was dark.', 'The tree is tall.', 'She is as quiet as a mouse.', 'The thunder roared.'],
    correctAnswer: 'She is as quiet as a mouse.',
    explanation: 'A simile compares two things using "like" or "as". "As quiet as a mouse" is a simile comparing her quietness to that of a mouse.',
    difficulty: 'medium'
  },
  {
    id: 'e31',
    subject: 'english',
    text: 'Which sentence demonstrates correct subject-verb agreement?',
    options: ['The team are playing tonight.', 'The team is playing tonight.', 'The team were playing tonight.', 'The team have playing tonight.'],
    correctAnswer: 'The team is playing tonight.',
    explanation: 'In American English, collective nouns like "team" take singular verbs. "The team is" shows correct subject-verb agreement.',
    difficulty: 'medium'
  },
  {
    id: 'e33',
    subject: 'english',
    text: 'Which of these is an example of onomatopoeia?',
    options: ['beautiful', 'quickly', 'buzz', 'happiness'],
    correctAnswer: 'buzz',
    explanation: 'Onomatopoeia refers to words that imitate the sound they describe. "Buzz" imitates the sound a bee makes.',
    difficulty: 'medium'
  },
  {
    id: 'e36',
    subject: 'english',
    text: 'What is the past participle of "write"?',
    options: ['wrote', 'written', 'writing', 'writed'],
    correctAnswer: 'written',
    explanation: 'The past participle of "write" is "written", used in perfect tenses (e.g., "I have written").',
    difficulty: 'medium'
  },
  {
    id: 'e37',
    subject: 'english',
    text: 'Which literary device involves giving human qualities to non-human things?',
    options: ['simile', 'metaphor', 'personification', 'alliteration'],
    correctAnswer: 'personification',
    explanation: 'Personification involves giving human traits or qualities to non-human objects or concepts.',
    difficulty: 'medium'
  },
  {
    id: 'e38',
    subject: 'english',
    text: 'What type of figurative language is used in the phrase "time is money"?',
    options: ['personification', 'simile', 'metaphor', 'hyperbole'],
    correctAnswer: 'metaphor',
    explanation: 'The phrase "time is money" is a metaphor that directly compares time to money without using "like" or "as".',
    difficulty: 'medium'
  },
  {
    id: 'e42',
    subject: 'english',
    text: 'Which word is a homonym for "bare"?',
    options: ['beer', 'bear', 'bar', 'bore'],
    correctAnswer: 'bear',
    explanation: '"Bare" (uncovered) and "bear" (the animal or to carry) are homonyms, words that sound the same but have different meanings.',
    difficulty: 'medium'
  },
  {
    id: 'e43',
    subject: 'english',
    text: 'Which prefix means "against"?',
    options: ['pro-', 'anti-', 'un-', 'dis-'],
    correctAnswer: 'anti-',
    explanation: 'The prefix "anti-" means against, opposed to, or preventive.',
    difficulty: 'medium'
  },
  {
    id: 'e44',
    subject: 'english',
    text: 'What is the term for a word that is spelled the same forwards and backwards?',
    options: ['palindrome', 'anagram', 'homonym', 'acronym'],
    correctAnswer: 'palindrome',
    explanation: 'A palindrome is a word, phrase, or sequence that reads the same backward as forward, such as "madam" or "level".',
    difficulty: 'medium'
  },
  {
    id: 'e46',
    subject: 'english',
    text: 'What punctuation mark is used to introduce a list or explanation?',
    options: ['semicolon', 'colon', 'hyphen', 'ellipsis'],
    correctAnswer: 'colon',
    explanation: 'A colon (:) is used to introduce a list, explanation, example, or quotation.',
    difficulty: 'medium'
  },
  {
    id: 'e49',
    subject: 'english',
    text: 'What is the term for a noun that names a group of individuals?',
    options: ['proper noun', 'abstract noun', 'collective noun', 'compound noun'],
    correctAnswer: 'collective noun',
    explanation: 'A collective noun names a group of people or things, such as "flock," "team," or "jury".',
    difficulty: 'medium'
  }
];

// More medium questions
const moreMediumQuestions: Question[] = [
  {
    id: 'e53',
    subject: 'english',
    text: 'Which word is NOT a synonym for "ambiguous"?',
    options: ['vague', 'unclear', 'definite', 'equivocal'],
    correctAnswer: 'definite',
    explanation: '"Definite" means clear and exact, which is the opposite of "ambiguous," meaning open to more than one interpretation.',
    difficulty: 'medium'
  },
  {
    id: 'e56',
    subject: 'english',
    text: 'What is the name for the main verb and all its modifiers in a sentence?',
    options: ['noun phrase', 'adjective phrase', 'verb phrase', 'adverbial phrase'],
    correctAnswer: 'verb phrase',
    explanation: 'A verb phrase consists of a main verb and all its auxiliary (helping) verbs and modifiers.',
    difficulty: 'medium'
  },
  {
    id: 'e61',
    subject: 'english',
    text: 'Which sentence uses the correct form of the comparative adjective?',
    options: ['She is more happier today.', 'He is more tall than his brother.', 'That was the most simplest explanation.', 'This problem is more complex than the last one.'],
    correctAnswer: 'This problem is more complex than the last one.',
    explanation: 'For adjectives with more than one syllable (like "complex"), "more" is used to form the comparative.',
    difficulty: 'medium'
  },
  {
    id: 'e62',
    subject: 'english',
    text: 'What is the term for a word that sounds like what it describes?',
    options: ['acronym', 'synonym', 'onomatopoeia', 'metaphor'],
    correctAnswer: 'onomatopoeia',
    explanation: 'Onomatopoeia refers to words that imitate the sound they describe, like "buzz," "hiss," or "crash".',
    difficulty: 'medium'
  },
  {
    id: 'e63',
    subject: 'english',
    text: 'Which of these words is correctly hyphenated?',
    options: ['co-operation', 'selfcontrol', 'extra-ordinary', 'well-known'],
    correctAnswer: 'well-known',
    explanation: 'Compound modifiers like "well-known" are hyphenated when they come before the noun they modify.',
    difficulty: 'medium'
  },
  {
    id: 'e65',
    subject: 'english',
    text: 'Which word is an antonym for "verbose"?',
    options: ['concise', 'lengthy', 'wordy', 'detailed'],
    correctAnswer: 'concise',
    explanation: '"Verbose" means using more words than needed, while "concise" means expressing something in few words.',
    difficulty: 'medium'
  },
  {
    id: 'e67',
    subject: 'english',
    text: 'Which of the following is an example of alliteration?',
    options: ['The rain in Spain', 'Sweet smell of success', 'Time and tide', 'Clear blue ocean'],
    correctAnswer: 'Sweet smell of success',
    explanation: 'Alliteration is the repetition of the same sound at the beginning of consecutive words. In "sweet smell of success," the "s" sound is repeated.',
    difficulty: 'medium'
  },
  {
    id: 'e69',
    subject: 'english',
    text: 'Which sentence contains an infinitive phrase?',
    options: ['She walks quickly.', 'To win the race is his goal.', 'They are working hard.', 'He has finished the project.'],
    correctAnswer: 'To win the race is his goal.',
    explanation: 'An infinitive phrase consists of "to" plus a verb. "To win the race" is an infinitive phrase acting as the subject of the sentence.',
    difficulty: 'medium'
  },
  {
    id: 'e70',
    subject: 'english',
    text: 'What type of sentence is "Stop!"?',
    options: ['declarative', 'interrogative', 'imperative', 'exclamatory'],
    correctAnswer: 'imperative',
    explanation: 'Imperative sentences give commands or make requests, often with an implied "you" as the subject.',
    difficulty: 'medium'
  },
  {
    id: 'e71',
    subject: 'english',
    text: 'Which of these is an example of a dependent clause?',
    options: ['She finished her homework.', 'When the rain stops', 'The dog barked loudly.', 'I am feeling tired.'],
    correctAnswer: 'When the rain stops',
    explanation: 'A dependent clause (or subordinate clause) cannot stand alone as a complete sentence. "When the rain stops" needs an independent clause to form a complete thought.',
    difficulty: 'medium'
  },
  {
    id: 'e72',
    subject: 'english',
    text: 'What literary device involves exaggeration for effect?',
    options: ['metaphor', 'personification', 'hyperbole', 'irony'],
    correctAnswer: 'hyperbole',
    explanation: 'Hyperbole is deliberate exaggeration not meant to be taken literally, used for emphasis or humorous effect.',
    difficulty: 'medium'
  },
  {
    id: 'e73',
    subject: 'english',
    text: 'Which sentence uses the perfect tense?',
    options: ['I work at the hospital.', 'I have worked at the hospital.', 'I have been working at the hospital.', 'I worked at the hospital.'],
    correctAnswer: 'I have worked at the hospital.',
    explanation: 'Perfect tense is formed with "have/has" + past participle. "Has sung" is present perfect tense.',
    difficulty: 'medium'
  },
  {
    id: 'e77',
    subject: 'english',
    text: 'What is the term for a word or phrase that has been borrowed from another language?',
    options: ['colloquialism', 'idiom', 'neologism', 'loanword'],
    correctAnswer: 'loanword',
    explanation: 'A loanword is a word adopted from another language with little or no modification, like "café" from French or "karaoke" from Japanese.',
    difficulty: 'medium'
  },
  {
    id: 'e78',
    subject: 'english',
    text: 'Which sentence contains a phrasal verb?',
    options: ['She spoke softly.', 'They played tennis.', 'He looked up the word.', 'I enjoy reading books.'],
    correctAnswer: 'He looked up the word.',
    explanation: 'A phrasal verb combines a verb with a preposition or adverb particle. "Looked up" is a phrasal verb meaning to search for information.',
    difficulty: 'medium'
  },
  {
    id: 'e82',
    subject: 'english',
    text: 'Which of these words has a prefix meaning "before"?',
    options: ['postpone', 'prefix', 'predict', 'permit'],
    correctAnswer: 'predict',
    explanation: 'The prefix "pre-" in "predict" means "before." To predict is to say what will happen before it happens.',
    difficulty: 'medium'
  }
];

// Concatenate all medium questions
const mediumQuestions = [
  ...mediumQuestions, 
  ...additionalMediumQuestions, 
  ...moreMediumQuestions,
  {
    id: 'e83',
    subject: 'english',
    text: 'Which of these sentences contains a predicate adjective?',
    options: ['She drives a fast car.', 'The clever fox escaped.', 'The coffee tastes bitter.', 'He quickly ran home.'],
    correctAnswer: 'The coffee tastes bitter.',
    explanation: 'A predicate adjective follows a linking verb and describes the subject. "Bitter" follows the linking verb "tastes" and describes "coffee".',
    difficulty: 'medium'
  },
  {
    id: 'e85',
    subject: 'english',
    text: 'What is the purpose of the dash in writing?',
    options: ['To join compound words', 'To indicate a range or connection', 'To emphasize or introduce content', 'To show possession'],
    correctAnswer: 'To emphasize or introduce content',
    explanation: 'The em dash (—) is often used to emphasize or introduce content, to indicate interruption, or to set off parenthetical information with more emphasis than parentheses.',
    difficulty: 'medium'
  },
  {
    id: 'e87',
    subject: 'english',
    text: 'Which of these is a compound sentence?',
    options: ['The dog barked loudly.', 'The dog barked loudly, and the cat ran away.', 'When the dog barked, the cat ran away.', 'The loudly barking dog scared the cat.'],
    correctAnswer: 'The dog barked loudly, and the cat ran away.',
    explanation: 'A compound sentence contains two or more independent clauses joined by a coordinating conjunction or punctuation.',
    difficulty: 'medium'
  },
  {
    id: 'e88',
    subject: 'english',
    text: 'What is the correct term for a word that has the same spelling but different meanings?',
    options: ['homophone', 'homonym', 'synonym', 'antonym'],
    correctAnswer: 'homonym',
    explanation: 'Homonyms are words that are spelled the same but have different meanings, like "bark" (of a tree) and "bark" (of a dog).',
    difficulty: 'medium'
  },
  {
    id: 'e90',
    subject: 'english',
    text: 'What is the grammatical term for words like "in," "on," and "under"?',
    options: ['conjunctions', 'prepositions', 'adverbs', 'articles'],
    correctAnswer: 'prepositions',
    explanation: 'Prepositions are words that show the relationship between a noun or pronoun and other words in a sentence. "In," "on," and "under" are common prepositions.',
    difficulty: 'medium'
  },
  {
    id: 'e91',
    subject: 'english',
    text: 'Which statement about adverbs is true?',
    options: ['Adverbs only modify verbs.', 'All adverbs end in -ly.', 'Adverbs can modify verbs, adjectives, or other adverbs.', 'Adverbs always come after the verb they modify.'],
    correctAnswer: 'Adverbs can modify verbs, adjectives, or other adverbs.',
    explanation: 'Adverbs can modify verbs, adjectives, or other adverbs, showing how, when, where, or to what extent something happens.',
    difficulty: 'medium'
  }
];

export default mediumQuestions;
