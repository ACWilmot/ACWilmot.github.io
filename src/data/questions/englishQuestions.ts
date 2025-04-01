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
  },
  {
    id: 'e31',
    subject: 'english',
    text: 'Which sentence demonstrates correct subject-verb agreement?',
    options: ['The team are playing tonight.', 'The team is playing tonight.', 'The team were playing tonight.', 'The team have playing tonight.'],
    correctAnswer: 'The team is playing tonight.',
    explanation: 'In American English, collective nouns like "team" take singular verbs. "The team is" shows correct subject-verb agreement.'
  },
  {
    id: 'e32',
    subject: 'english',
    text: 'Which word is a gerund in the sentence: "Swimming is good exercise."?',
    options: ['Swimming', 'is', 'good', 'exercise'],
    correctAnswer: 'Swimming',
    explanation: '"Swimming" is a gerund, a verb form ending in "-ing" that functions as a noun.'
  },
  {
    id: 'e33',
    subject: 'english',
    text: 'Which of these is an example of onomatopoeia?',
    options: ['beautiful', 'quickly', 'buzz', 'happiness'],
    correctAnswer: 'buzz',
    explanation: 'Onomatopoeia refers to words that imitate the sound they describe. "Buzz" imitates the sound a bee makes.'
  },
  {
    id: 'e34',
    subject: 'english',
    text: 'In the sentence "The very old man walked slowly," which word is an adjective modifying "man"?',
    options: ['The', 'very', 'old', 'slowly'],
    correctAnswer: 'old',
    explanation: '"Old" is an adjective that modifies the noun "man", describing what kind of man he is.'
  },
  {
    id: 'e35',
    subject: 'english',
    text: 'Which of these punctuation marks is used to indicate a pause stronger than a comma but weaker than a period?',
    options: ['colon', 'semicolon', 'hyphen', 'dash'],
    correctAnswer: 'semicolon',
    explanation: 'A semicolon (;) indicates a pause stronger than a comma but weaker than a period, often connecting related independent clauses.'
  },
  {
    id: 'e36',
    subject: 'english',
    text: 'What is the past participle of "write"?',
    options: ['wrote', 'written', 'writing', 'writed'],
    correctAnswer: 'written',
    explanation: 'The past participle of "write" is "written", used in perfect tenses (e.g., "I have written").'
  },
  {
    id: 'e37',
    subject: 'english',
    text: 'Which literary device involves giving human qualities to non-human things?',
    options: ['simile', 'metaphor', 'personification', 'alliteration'],
    correctAnswer: 'personification',
    explanation: 'Personification involves giving human traits or qualities to non-human objects or concepts.'
  },
  {
    id: 'e38',
    subject: 'english',
    text: 'What type of figurative language is used in the phrase "time is money"?',
    options: ['personification', 'simile', 'metaphor', 'hyperbole'],
    correctAnswer: 'metaphor',
    explanation: 'The phrase "time is money" is a metaphor that directly compares time to money without using "like" or "as".'
  },
  {
    id: 'e39',
    subject: 'english',
    text: 'Which word is an example of a coordinating conjunction?',
    options: ['because', 'although', 'since', 'but'],
    correctAnswer: 'but',
    explanation: '"But" is one of the seven coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so).'
  },
  {
    id: 'e40',
    subject: 'english',
    text: 'Which of these is NOT a type of pronoun?',
    options: ['possessive', 'personal', 'relative', 'conjugative'],
    correctAnswer: 'conjugative',
    explanation: '"Conjugative" is not a type of pronoun. The common types are personal, possessive, demonstrative, indefinite, relative, interrogative, and reflexive.'
  },
  {
    id: 'e41',
    subject: 'english',
    text: 'What is the correct order of adjectives before a noun?',
    options: ['size, color, material', 'color, size, material', 'material, size, color', 'material, color, size'],
    correctAnswer: 'size, color, material',
    explanation: 'The conventional order of adjectives in English is opinion, size, age, shape, color, origin, material, purpose.'
  },
  {
    id: 'e42',
    subject: 'english',
    text: 'Which word is a homonym for "bare"?',
    options: ['beer', 'bear', 'bar', 'bore'],
    correctAnswer: 'bear',
    explanation: '"Bare" (uncovered) and "bear" (the animal or to carry) are homonyms, words that sound the same but have different meanings.'
  },
  {
    id: 'e43',
1 subject: 'english',
    text: 'Which prefix means "against"?',
    options: ['pro-', 'anti-', 'un-', 'dis-'],
    correctAnswer: 'anti-',
    explanation: 'The prefix "anti-" means against, opposed to, or preventive.'
  },
  {
    id: 'e44',
    subject: 'english',
    text: 'What is the term for a word that is spelled the same forwards and backwards?',
    options: ['palindrome', 'anagram', 'homonym', 'acronym'],
    correctAnswer: 'palindrome',
    explanation: 'A palindrome is a word, phrase, or sequence that reads the same backward as forward, such as "madam" or "level".'
  },
  {
    id: 'e45',
    subject: 'english',
    text: 'Which word means "to officially end or cancel"?',
    options: ['terminate', 'abdicate', 'rescind', 'relinquish'],
    correctAnswer: 'rescind',
    explanation: '"Rescind" means to revoke, cancel, or repeal (a law, order, or agreement).'
  },
  {
    id: 'e46',
    subject: 'english',
    text: 'What punctuation mark is used to introduce a list or explanation?',
    options: ['semicolon', 'colon', 'hyphen', 'ellipsis'],
    correctAnswer: 'colon',
    explanation: 'A colon (:) is used to introduce a list, explanation, example, or quotation.'
  },
  {
    id: 'e47',
    subject: 'english',
    text: 'Which of these words contains a diphthong?',
    options: ['cat', 'book', 'noise', 'hit'],
    correctAnswer: 'noise',
    explanation: 'A diphthong is a sound formed by combining two vowels in a single syllable. The "oi" in "noise" is a diphthong.'
  },
  {
    id: 'e48',
    subject: 'english',
    text: 'Which sentence uses the subjunctive mood correctly?',
    options: ['I wish I was taller.', 'I wish I were taller.', 'I wish I am taller.', 'I wish I be taller.'],
    correctAnswer: 'I wish I were taller.',
    explanation: 'The subjunctive mood is used for hypothetical or counterfactual statements. "I wish I were" is correct, not "I wish I was".'
  },
  {
    id: 'e49',
    subject: 'english',
    text: 'What is the term for a noun that names a group of individuals?',
    options: ['proper noun', 'abstract noun', 'collective noun', 'compound noun'],
    correctAnswer: 'collective noun',
    explanation: 'A collective noun names a group of people or things, such as "flock," "team," or "jury".'
  },
  {
    id: 'e50',
    subject: 'english',
    text: 'Which word is an example of an interjection?',
    options: ['slowly', 'because', 'ouch', 'they'],
    correctAnswer: 'ouch',
    explanation: 'Interjections are words used to express strong feeling or sudden emotion, often followed by an exclamation mark. "Ouch" is an example.'
  },
  {
    id: 'e51',
    subject: 'english',
    text: 'What is a dangling modifier?',
    options: ['A modifier that appears too far from what it modifies', 'A modifier with no word to modify', 'A modifier that creates ambiguity', 'A modifier that is unnecessary'],
    correctAnswer: 'A modifier with no word to modify',
    explanation: 'A dangling modifier is a word or phrase that modifies a word not clearly stated in the sentence.'
  },
  {
    id: 'e52',
    subject: 'english',
    text: 'Which sentence contains a split infinitive?',
    options: ['She agreed to carefully read the terms.', 'She agreed to read the terms carefully.', 'She carefully agreed to read the terms.', 'She agreed carefully to read the terms.'],
    correctAnswer: 'She agreed to carefully read the terms.',
    explanation: 'A split infinitive occurs when a word or phrase comes between "to" and a verb. In "to carefully read," an adverb splits the infinitive.'
  },
  {
    id: 'e53',
    subject: 'english',
    text: 'Which word is NOT a synonym for "ambiguous"?',
    options: ['vague', 'unclear', 'definite', 'equivocal'],
    correctAnswer: 'definite',
    explanation: '"Definite" means clear and exact, which is the opposite of "ambiguous," meaning open to more than one interpretation.'
  },
  {
    id: 'e54',
    subject: 'english',
    text: 'What is the correct term for a statement that contradicts itself?',
    options: ['oxymoron', 'paradox', 'hyperbole', 'irony'],
    correctAnswer: 'paradox',
    explanation: 'A paradox is a statement that contradicts itself but might still be true, while an oxymoron is a phrase with contradictory words.'
  },
  {
    id: 'e55',
    subject: 'english',
    text: 'Which verb is irregular?',
    options: ['walk', 'play', 'sing', 'jump'],
    correctAnswer: 'sing',
    explanation: 'Irregular verbs don\'t follow standard patterns when changing tense. "Sing" becomes "sang" in past tense, not "singed".'
  },
  {
    id: 'e56',
    subject: 'english',
    text: 'What is the name for the main verb and all its modifiers in a sentence?',
    options: ['noun phrase', 'adjective phrase', 'verb phrase', 'adverbial phrase'],
    correctAnswer: 'verb phrase',
    explanation: 'A verb phrase consists of a main verb and all its auxiliary (helping) verbs and modifiers.'
  },
  {
    id: 'e57',
    subject: 'english',
    text: 'Which sentence demonstrates parallel structure?',
    options: ['She enjoys swimming, to hike, and reading.', 'She enjoys swimming, hiking, and reading.', 'She enjoys swimming, hikes, and to read.', 'She enjoys to swim, hiking, and reads.'],
    correctAnswer: 'She enjoys swimming, hiking, and reading.',
    explanation: 'Parallel structure uses the same pattern of words to show that ideas have the same level of importance. The gerund form (-ing) is used consistently.'
  },
  {
    id: 'e58',
    subject: 'english',
    text: 'Which of these is NOT a function of a comma?',
    options: ['To separate items in a list', 'To join two independent clauses without a conjunction', 'To separate a dependent clause at the beginning of a sentence', 'To separate a non-essential clause'],
    correctAnswer: 'To join two independent clauses without a conjunction',
    explanation: 'A comma alone cannot join two independent clauses; this creates a comma splice error. A semicolon or a conjunction with a comma should be used.'
  },
  {
    id: 'e59',
    subject: 'english',
    text: 'Which sentence contains a restrictive clause?',
    options: ['My sister, who lives in Paris, is visiting next week.', 'The book that I borrowed from you is excellent.', 'London, which is the capital of England, is a beautiful city.', 'My car, which I bought last year, needs repairs.'],
    correctAnswer: 'The book that I borrowed from you is excellent.',
    explanation: 'A restrictive clause is essential to the meaning of the sentence and does not use commas. "That I borrowed from you" identifies which book and is necessary information.'
  },
  {
    id: 'e60',
    subject: 'english',
    text: 'What type of word is "quickly"?',
    options: ['adjective', 'adverb', 'noun', 'pronoun'],
    correctAnswer: 'adverb',
    explanation: '"Quickly" is an adverb, a word that modifies a verb, an adjective, or another adverb, expressing manner, place, time, or degree.'
  },
  {
    id: 'e61',
    subject: 'english',
    text: 'Which sentence uses the correct form of the comparative adjective?',
    options: ['She is more happier today.', 'He is more tall than his brother.', 'That was the most simplest explanation.', 'This problem is more complex than the last one.'],
    correctAnswer: 'This problem is more complex than the last one.',
    explanation: 'For adjectives with more than one syllable (like "complex"), "more" is used to form the comparative.'
  },
  {
    id: 'e62',
    subject: 'english',
    text: 'What is the term for a word that sounds like what it describes?',
    options: ['acronym', 'synonym', 'onomatopoeia', 'metaphor'],
    correctAnswer: 'onomatopoeia',
    explanation: 'Onomatopoeia refers to words that imitate the sound they describe, like "buzz," "hiss," or "crash".'
  },
  {
    id: 'e63',
    subject: 'english',
    text: 'Which of these words is correctly hyphenated?',
    options: ['co-operation', 'selfcontrol', 'extra-ordinary', 'well-known'],
    correctAnswer: 'well-known',
    explanation: 'Compound modifiers like "well-known" are hyphenated when they come before the noun they modify.'
  },
  {
    id: 'e64',
    subject: 'english',
    text: 'In the phrase "the old man\'s house," the apostrophe indicates:',
    options: ['plurality', 'omission', 'possession', 'contraction'],
    correctAnswer: 'possession',
    explanation: 'The apostrophe in "man\'s" shows that the house belongs to the old man, indicating possession.'
  },
  {
    id: 'e65',
    subject: 'english',
    text: 'Which word is an antonym for "verbose"?',
    options: ['concise', 'lengthy', 'wordy', 'detailed'],
    correctAnswer: 'concise',
    explanation: '"Verbose" means using more words than needed, while "concise" means expressing something in few words.'
  },
  {
    id: 'e66',
    subject: 'english',
    text: 'What is a portmanteau word?',
    options: ['A word that has multiple meanings', 'A word formed by blending parts of two other words', 'A word that sounds like what it describes', 'A word borrowed from another language'],
    correctAnswer: 'A word formed by blending parts of two other words',
    explanation: 'A portmanteau is a word made by combining parts of two existing words, like "brunch" (breakfast + lunch).'
  },
  {
    id: 'e67',
    subject: 'english',
    text: 'Which of the following is an example of alliteration?',
    options: ['The rain in Spain', 'Sweet smell of success', 'Time and tide', 'Clear blue ocean'],
    correctAnswer: 'Sweet smell of success',
    explanation: 'Alliteration is the repetition of the same sound at the beginning of consecutive words. In "sweet smell of success," the "s" sound is repeated.'
  },
  {
    id: 'e68',
    subject: 'english',
    text: 'What part of speech is the word "under" in the sentence "The cat is under the table"?',
    options: ['conjunction', 'preposition', 'adverb', 'adjective'],
    correctAnswer: 'preposition',
    explanation: '"Under" is a preposition in this sentence, showing the relationship between "cat" and "table".'
  },
  {
    id: 'e69',
    subject: 'english',
    text: 'Which sentence contains an infinitive phrase?',
    options: ['She walks quickly.', 'To win the race is his goal.', 'They are working hard.', 'He has finished the project.'],
    correctAnswer: 'To win the race is his goal.',
    explanation: 'An infinitive phrase consists of "to" plus a verb. "To win the race" is an infinitive phrase acting as the subject of the sentence.'
  },
  {
    id: 'e70',
    subject: 'english',
    text: 'What type of sentence is "Stop!"?',
    options: ['declarative', 'interrogative', 'imperative', 'exclamatory'],
    correctAnswer: 'imperative',
    explanation: 'Imperative sentences give commands or make requests, often with an implied "you" as the subject.'
  },
  {
    id: 'e71',
    subject: 'english',
    text: 'Which of these is an example of a dependent clause?',
    options: ['She finished her homework.', 'When the rain stops', 'The dog barked loudly.', 'I am feeling tired.'],
    correctAnswer: 'When the rain stops',
    explanation: 'A dependent clause (or subordinate clause) cannot stand alone as a complete sentence. "When the rain stops" needs an independent clause to form a complete thought.'
  },
  {
    id: 'e72',
    subject: 'english',
    text: 'What literary device involves exaggeration for effect?',
    options: ['metaphor', 'personification', 'hyperbole', 'irony'],
    correctAnswer: 'hyperbole',
    explanation: 'Hyperbole is deliberate exaggeration not meant to be taken literally, used for emphasis or humorous effect.'
  },
  {
    id: 'e73',
    subject: 'english',
    text: 'Which sentence uses the perfect tense?',
    options: ['She sings beautifully.', 'She sang beautifully.', 'She has sung beautifully.', 'She will sing beautifully.'],
    correctAnswer: 'She has sung beautifully.',
    explanation: 'Perfect tense is formed with "have/has" + past participle. "Has sung" is present perfect tense.'
  },
  {
    id: 'e74',
    subject: 'english',
    text: 'What is the rhetorical device in which contradictory terms appear together?',
    options: ['paradox', 'hyperbole', 'oxymoron', 'euphemism'],
    correctAnswer: 'oxymoron',
    explanation: 'An oxymoron combines contradictory terms, like "jumbo shrimp," "act naturally," or "deafening silence".'
  },
  {
    id: 'e75',
    subject: 'english',
    text: 'Which of these is NOT a type of sentence structure?',
    options: ['simple', 'compound', 'complex', 'interrogatory'],
    correctAnswer: 'interrogatory',
    explanation: 'The basic sentence structures are simple, compound, complex, and compound-complex. "Interrogatory" refers to question form, not structure.'
  },
  {
    id: 'e76',
    subject: 'english',
    text: 'Which prefix means "not" or "opposite"?',
    options: ['pre-', 'post-', 'un-', 're-'],
    correctAnswer: 'un-',
    explanation: 'The prefix "un-" typically means "not" or "opposite of," as in "unhappy" (not happy) or "undo" (reverse an action).'
  },
  {
    id: 'e77',
    subject: 'english',
    text: 'What is the term for a word or phrase that has been borrowed from another language?',
    options: ['colloquialism', 'idiom', 'neologism', 'loanword'],
    correctAnswer: 'loanword',
    explanation: 'A loanword is a word adopted from another language with little or no modification, like "café" from French or "karaoke" from Japanese.'
  },
  {
    id: 'e78',
    subject: 'english',
    text: 'Which sentence contains a phrasal verb?',
    options: ['She spoke softly.', 'They played tennis.', 'He looked up the word.', 'I enjoy reading books.'],
    correctAnswer: 'He looked up the word.',
    explanation: 'A phrasal verb combines a verb with a preposition or adverb particle. "Looked up" is a phrasal verb meaning to search for information.'
  },
  {
    id: 'e79',
    subject: 'english',
    text: 'What is the purpose of a subordinating conjunction?',
    options: ['To join words, phrases, or clauses of equal rank', 'To introduce direct questions', 'To connect a dependent clause to an independent clause', 'To connect two independent clauses'],
    correctAnswer: 'To connect a dependent clause to an independent clause',
    explanation: 'Subordinating conjunctions like "because," "although," and "while" connect dependent clauses to independent clauses.'
  },
  {
    id: 'e80',
    subject: 'english',
    text: 'Which sentence demonstrates correct use of the semicolon?',
    options: ['He likes chocolate; and she likes vanilla.', 'He likes chocolate; she likes vanilla.', 'He likes chocolate, she likes vanilla.', 'He likes chocolate; because she likes vanilla.'],
    correctAnswer: 'He likes chocolate; she likes vanilla.',
    explanation: 'A semicolon correctly joins two closely related independent clauses without a coordinating conjunction.'
  },
  {
    id: 'e81',
    subject: 'english',
    text: 'What is the function of an appositive in a sentence?',
    options: ['To show action', 'To rename or explain a nearby noun', 'To modify a verb', 'To connect clauses'],
    correctAnswer: 'To rename or explain a nearby noun',
    explanation: 'An appositive is a noun or noun phrase that renames or explains another noun right beside it, such as "My brother, a doctor, lives in Boston."'
  },
  {
    id: 'e82',
    subject: 'english',
    text: 'Which of these words has a prefix meaning "before"?',
    options: ['postpone', 'prefix', 'predict', 'permit'],
    correctAnswer: 'predict',
    explanation: 'The prefix "pre-" in "predict" means "before." To predict is to say what will happen before it happens.'
  },
  {
    id: 'e83',
    subject: 'english',
    text: 'Which of these sentences contains a predicate adjective?',
    options: ['She drives a fast car.', 'The clever fox escaped.', 'The coffee tastes bitter.', 'He quickly ran home.'],
    correctAnswer: 'The coffee tastes bitter.',
    explanation: 'A predicate adjective follows a linking verb and describes the subject. "Bitter" follows the linking verb "tastes" and describes "coffee".'
  },
  {
    id: 'e84',
    subject: 'english',
    text: 'Which punctuation mark is used to indicate emphasis, surprise, or strong emotion?',
    options: ['period', 'comma', 'question mark', 'exclamation mark'],
    correctAnswer: 'exclamation mark',
    explanation: 'The exclamation mark (!) is used to express strong emotion, emphasis, or surprise in a sentence.'
  },
  {
    id: 'e85',
    subject: 'english',
    text: 'What is the purpose of the dash in writing?',
    options: ['To join compound words', 'To indicate a range or connection', 'To emphasize or introduce content', 'To show possession'],
    correctAnswer: 'To emphasize or introduce content',
    explanation: 'The em dash (—) is often used to emphasize or introduce content, to indicate interruption, or to set off parenthetical information with more emphasis than parentheses.'
  },
  {
    id: 'e86',
    subject: 'english',
    text: 'Which sentence uses the present perfect continuous tense?',
    options: ['I work at the hospital.', 'I have worked at the hospital.', 'I have been working at the hospital.', 'I worked at the hospital.'],
    correctAnswer: 'I have been working at the hospital.',
    explanation: 'The present perfect continuous tense is formed with "have/has been" + present participle. It shows an action that started in the past and continues to the present.'
  },
  {
    id: 'e87',
    subject: 'english',
    text: 'Which of these is a compound sentence?',
    options: ['The dog barked loudly.', 'The dog barked loudly, and the cat ran away.', 'When the dog barked, the cat ran away.', 'The loudly barking dog scared the cat.'],
    correctAnswer: 'The dog barked loudly, and the cat ran away.',
    explanation: 'A compound sentence contains two or more independent clauses joined by a coordinating conjunction or punctuation.'
  },
  {
    id: 'e88',
    subject: 'english',
    text: 'What is the correct term for a word that has the same spelling but different meanings?',
    options: ['homophone', 'homonym', 'synonym', 'antonym'],
    correctAnswer: 'homonym',
    explanation: 'Homonyms are words that are spelled the same but have different meanings, like "bark" (of a tree) and "bark" (of a dog).'
  },
  {
    id: 'e89',
    subject: 'english',
    text: 'Which of these words is formed by adding a suffix to a base word?',
    options: ['replay', 'unhappy', 'teacher', 'disable'],
    correctAnswer: 'teacher',
    explanation: '"Teacher" is formed by adding the suffix "-er" (one who does something) to the base word "teach".'
  },
  {
    id: 'e90',
    subject: 'english',
    text: 'What is the grammatical term for words like "in," "on," and "under"?',
    options: ['conjunctions', 'prepositions', 'adverbs', 'articles'],
    correctAnswer: 'prepositions',
    explanation: 'Prepositions are words that show the relationship between a noun or pronoun and other words in a sentence. "In," "on," and "under" are common prepositions.'
  },
  {
    id: 'e91',
    subject: 'english',
    text: 'Which statement about adverbs is true?',
    options: ['Adverbs only modify verbs.', 'All adverbs end in -ly.', 'Adverbs can modify verbs, adjectives, or other adverbs.', 'Adverbs always come after the verb they modify.'],
    correctAnswer: 'Adverbs can modify verbs, adjectives, or other adverbs.',
    explanation: 'Adverbs can modify verbs, adjectives, or other adverbs, showing how, when, where, or to what extent something happens.'
  },
  {
    id: 'e92',
    subject: 'english',
    text: 'Which word is a preposition in the sentence "She walked across the street"?',
    options: ['She', 'walked', 'across', 'street'],
    correctAnswer: 'across',
    explanation: '"Across" is a preposition that shows the relationship between "walked" and "street".'
  },
  {
    id: 'e93',
    subject: 'english',
    text: 'What type of verb is "seem" in the sentence "He seems happy"?',
    options: ['action verb', 'linking verb', 'auxiliary verb', 'transitive verb'],
    correctAnswer: 'linking verb',
    explanation: 'Linking verbs connect the subject to more information about the subject. "Seems" links "he" to "happy".'
  },
  {
    id: 'e94',
    subject: 'english',
    text: 'Which sentence has correct pronoun usage?',
    options: ['Him and I went to the store.', 'Between you and I, this is a secret.', 'He is taller than me.', 'Her and they discussed the issue.'],
    correctAnswer: 'He is taller than me.',
    explanation: 'In "He is taller than me," "me" is correctly used as the object of the preposition "than".'
  },
  {
    id: 'e95',
    subject: 'english',
    text: 'Which of these is a complex sentence?',
    options: ['He ran.', 'He ran, and she walked.', 'Although he was tired, he kept running.', 'He ran; she walked.'],
    correctAnswer: 'Although he was tired, he kept running.',
    explanation: 'A complex sentence contains an independent clause and at least one dependent clause. "Although he was tired" is a dependent clause.'
  },
  {
    id: 'e96',
    subject: 'english',
    text: 'Which sentence uses the passive voice?',
    options: ['The boy kicked the ball.', 'The ball was kicked by the boy.', 'The boy is kicking the ball.', 'The ball bounced high.'],
    correctAnswer: 'The ball was kicked by the boy.',
    explanation: 'In passive voice, the subject receives the action. "The ball was kicked" shows that the ball (subject) received the action of kicking.'
  },
  {
    id: 'e97',
    subject: 'english',
    text: 'What is the function of a relative pronoun?',
    options: ['To replace a noun', 'To join clauses and refer back to a noun', 'To show possession', 'To indicate a question'],
    correctAnswer: 'To join clauses and refer back to a noun',
    explanation: 'Relative pronouns (who, whom, whose, which, that) join clauses and refer back to a noun or pronoun mentioned previously.'
  },
  {
    id: 'e98',
    subject: 'english',
    text: 'Which of these is an example of a possessive pronoun?',
    options: ['she', 'her', 'hers', 'herself'],
    correctAnswer: 'hers',
    explanation: 'Possessive pronouns (mine, yours, his, hers, its, ours, theirs) show ownership and can stand alone without a noun following them.'
  },
  {
    id: 'e99',
    subject: 'english',
    text: 'What is the literary term for a sequence of events that builds toward a climax?',
    options: ['foreshadowing', 'flashback', 'rising action', 'resolution'],
    correctAnswer: 'rising action',
    explanation: 'Rising action is the part of a story's plot that leads up to the climax, building tension and developing conflict.'
  },
  {
    id: 'e100',
    subject: 'english',
    text: 'Which sentence demonstrates correct agreement between subject and pronoun?',
    options: ['Everyone should bring their notebook.', 'The committee made its decision.', 'Each of the students have their own locker.', 'Neither of them have finished their work.'],
    correctAnswer: 'The committee made its decision.',
    explanation: 'Collective nouns like "committee" take singular pronouns. "Committee" and "its" show correct agreement.'
  }
];

export default englishQuestions;
