
import { Question } from '@/types/questionTypes';

const hardQuestions: Question[] = [
  {
    id: 'e25',
    subject: 'english',
    text: 'Which sentence uses the correct form of the verb?',
    options: ['Everyone have finished the exam.', 'The team are playing well.', 'Each of the students has submitted their work.', 'Neither of them were available.'],
    correctAnswer: 'Each of the students has submitted their work.',
    explanation: '"Each" is singular, so it takes the singular verb "has".',
    difficulty: 'hard'
  },
  {
    id: 'e32',
    subject: 'english',
    text: 'Which word is a gerund in the sentence: "Swimming is good exercise."?',
    options: ['Swimming', 'is', 'good', 'exercise'],
    correctAnswer: 'Swimming',
    explanation: '"Swimming" is a gerund, a verb form ending in "-ing" that functions as a noun.',
    difficulty: 'hard'
  },
  {
    id: 'e35',
    subject: 'english',
    text: 'Which of these punctuation marks is used to indicate a pause stronger than a comma but weaker than a period?',
    options: ['colon', 'semicolon', 'hyphen', 'dash'],
    correctAnswer: 'semicolon',
    explanation: 'A semicolon (;) indicates a pause stronger than a comma but weaker than a period, often connecting related independent clauses.',
    difficulty: 'hard'
  },
  {
    id: 'e40',
    subject: 'english',
    text: 'Which of these is NOT a type of pronoun?',
    options: ['possessive', 'personal', 'relative', 'conjugative'],
    correctAnswer: 'conjugative',
    explanation: '"Conjugative" is not a type of pronoun. The common types are personal, possessive, demonstrative, indefinite, relative, interrogative, and reflexive.',
    difficulty: 'hard'
  },
  {
    id: 'e41',
    subject: 'english',
    text: 'What is the correct order of adjectives before a noun?',
    options: ['size, color, material', 'color, size, material', 'material, size, color', 'material, color, size'],
    correctAnswer: 'size, color, material',
    explanation: 'The conventional order of adjectives in English is opinion, size, age, shape, color, origin, material, purpose.',
    difficulty: 'hard'
  },
  {
    id: 'e45',
    subject: 'english',
    text: 'Which word means "to officially end or cancel"?',
    options: ['terminate', 'abdicate', 'rescind', 'relinquish'],
    correctAnswer: 'rescind',
    explanation: '"Rescind" means to revoke, cancel, or repeal (a law, order, or agreement).',
    difficulty: 'hard'
  },
  {
    id: 'e47',
    subject: 'english',
    text: 'Which of these words contains a diphthong?',
    options: ['cat', 'book', 'noise', 'hit'],
    correctAnswer: 'noise',
    explanation: 'A diphthong is a sound formed by combining two vowels in a single syllable. The "oi" in "noise" is a diphthong.',
    difficulty: 'hard'
  },
  {
    id: 'e48',
    subject: 'english',
    text: 'Which sentence uses the subjunctive mood correctly?',
    options: ['I wish I was taller.', 'I wish I were taller.', 'I wish I am taller.', 'I wish I be taller.'],
    correctAnswer: 'I wish I were taller.',
    explanation: 'The subjunctive mood is used for hypothetical or counterfactual statements. "I wish I were" is correct, not "I wish I was".',
    difficulty: 'hard'
  },
  {
    id: 'e51',
    subject: 'english',
    text: 'What is a dangling modifier?',
    options: ['A modifier that appears too far from what it modifies', 'A modifier with no word to modify', 'A modifier that creates ambiguity', 'A modifier that is unnecessary'],
    correctAnswer: 'A modifier with no word to modify',
    explanation: 'A dangling modifier is a word or phrase that modifies a word not clearly stated in the sentence.',
    difficulty: 'hard'
  },
  {
    id: 'e52',
    subject: 'english',
    text: 'Which sentence contains a split infinitive?',
    options: ['She agreed to carefully read the terms.', 'She agreed to read the terms carefully.', 'She carefully agreed to read the terms.', 'She agreed carefully to read the terms.'],
    correctAnswer: 'She agreed to carefully read the terms.',
    explanation: 'A split infinitive occurs when a word or phrase comes between "to" and a verb. In "to carefully read," an adverb splits the infinitive.',
    difficulty: 'hard'
  },
  {
    id: 'e54',
    subject: 'english',
    text: 'What is the correct term for a statement that contradicts itself?',
    options: ['oxymoron', 'paradox', 'hyperbole', 'irony'],
    correctAnswer: 'paradox',
    explanation: 'A paradox is a statement that contradicts itself but might still be true, while an oxymoron is a phrase with contradictory words.',
    difficulty: 'hard'
  },
  {
    id: 'e57',
    subject: 'english',
    text: 'Which sentence demonstrates parallel structure?',
    options: ['She enjoys swimming, to hike, and reading.', 'She enjoys swimming, hiking, and reading.', 'She enjoys swimming, hikes, and to read.', 'She enjoys to swim, hiking, and reads.'],
    correctAnswer: 'She enjoys swimming, hiking, and reading.',
    explanation: 'Parallel structure uses the same pattern of words to show that ideas have the same level of importance. The gerund form (-ing) is used consistently.',
    difficulty: 'hard'
  },
  {
    id: 'e58',
    subject: 'english',
    text: 'Which of these is NOT a function of a comma?',
    options: ['To separate items in a list', 'To join two independent clauses without a conjunction', 'To separate a dependent clause at the beginning of a sentence', 'To separate a non-essential clause'],
    correctAnswer: 'To join two independent clauses without a conjunction',
    explanation: 'A comma alone cannot join two independent clauses; this creates a comma splice error. A semicolon or a conjunction with a comma should be used.',
    difficulty: 'hard'
  },
  {
    id: 'e59',
    subject: 'english',
    text: 'Which sentence contains a restrictive clause?',
    options: ['My sister, who lives in Paris, is visiting next week.', 'The book that I borrowed from you is excellent.', 'London, which is the capital of England, is a beautiful city.', 'My car, which I bought last year, needs repairs.'],
    correctAnswer: 'The book that I borrowed from you is excellent.',
    explanation: 'A restrictive clause is essential to the meaning of the sentence and does not use commas. "That I borrowed from you" identifies which book and is necessary information.',
    difficulty: 'hard'
  },
  {
    id: 'e66',
    subject: 'english',
    text: 'What is a portmanteau word?',
    options: ['A word that has multiple meanings', 'A word formed by blending parts of two other words', 'A word that sounds like what it describes', 'A word borrowed from another language'],
    correctAnswer: 'A word formed by blending parts of two other words',
    explanation: 'A portmanteau is a word made by combining parts of two existing words, like "brunch" (breakfast + lunch).',
    difficulty: 'hard'
  }
];

// Add more hard questions
const additionalHardQuestions: Question[] = [
  {
    id: 'e74',
    subject: 'english',
    text: 'What is the rhetorical device in which contradictory terms appear together?',
    options: ['paradox', 'hyperbole', 'oxymoron', 'euphemism'],
    correctAnswer: 'oxymoron',
    explanation: 'An oxymoron combines contradictory terms, like "jumbo shrimp," "act naturally," or "deafening silence".',
    difficulty: 'hard'
  },
  {
    id: 'e75',
    subject: 'english',
    text: 'Which of these is NOT a type of sentence structure?',
    options: ['simple', 'compound', 'complex', 'interrogatory'],
    correctAnswer: 'interrogatory',
    explanation: 'The basic sentence structures are simple, compound, complex, and compound-complex. "Interrogatory" refers to question form, not structure.',
    difficulty: 'hard'
  },
  {
    id: 'e79',
    subject: 'english',
    text: 'What is the purpose of a subordinating conjunction?',
    options: ['To join words, phrases, or clauses of equal rank', 'To introduce direct questions', 'To connect a dependent clause to an independent clause', 'To connect two independent clauses'],
    correctAnswer: 'To connect a dependent clause to an independent clause',
    explanation: 'Subordinating conjunctions like "because," "although," and "while" connect dependent clauses to independent clauses.',
    difficulty: 'hard'
  },
  {
    id: 'e80',
    subject: 'english',
    text: 'Which sentence demonstrates correct use of the semicolon?',
    options: ['He likes chocolate; and she likes vanilla.', 'He likes chocolate; she likes vanilla.', 'He likes chocolate, she likes vanilla.', 'He likes chocolate; because she likes vanilla.'],
    correctAnswer: 'He likes chocolate; she likes vanilla.',
    explanation: 'A semicolon correctly joins two closely related independent clauses without a coordinating conjunction.',
    difficulty: 'hard'
  },
  {
    id: 'e81',
    subject: 'english',
    text: 'What is the function of an appositive in a sentence?',
    options: ['To show action', 'To rename or explain a nearby noun', 'To modify a verb', 'To connect clauses'],
    correctAnswer: 'To rename or explain a nearby noun',
    explanation: 'An appositive is a noun or noun phrase that renames or explains another noun right beside it, such as "My brother, a doctor, lives in Boston."',
    difficulty: 'hard'
  },
  {
    id: 'e86',
    subject: 'english',
    text: 'Which sentence uses the present perfect continuous tense?',
    options: ['I work at the hospital.', 'I have worked at the hospital.', 'I have been working at the hospital.', 'I worked at the hospital.'],
    correctAnswer: 'I have been working at the hospital.',
    explanation: 'The present perfect continuous tense is formed with "have/has been" + present participle. It shows an action that started in the past and continues to the present.',
    difficulty: 'hard'
  },
  {
    id: 'e93',
    subject: 'english',
    text: 'What type of verb is "seem" in the sentence "He seems happy"?',
    options: ['action verb', 'linking verb', 'auxiliary verb', 'transitive verb'],
    correctAnswer: 'linking verb',
    explanation: 'Linking verbs connect the subject to more information about the subject. "Seems" links "he" to "happy".',
    difficulty: 'hard'
  },
  {
    id: 'e94',
    subject: 'english',
    text: 'Which sentence has correct pronoun usage?',
    options: ['Him and I went to the store.', 'Between you and I, this is a secret.', 'He is taller than me.', 'Her and they discussed the issue.'],
    correctAnswer: 'He is taller than me.',
    explanation: 'In "He is taller than me," "me" is correctly used as the object of the preposition "than".',
    difficulty: 'hard'
  },
  {
    id: 'e95',
    subject: 'english',
    text: 'Which of these is a complex sentence?',
    options: ['He ran.', 'He ran, and she walked.', 'Although he was tired, he kept running.', 'He ran; she walked.'],
    correctAnswer: 'Although he was tired, he kept running.',
    explanation: 'A complex sentence contains an independent clause and at least one dependent clause. "Although he was tired" is a dependent clause.',
    difficulty: 'hard'
  },
  {
    id: 'e96',
    subject: 'english',
    text: 'Which sentence uses the passive voice?',
    options: ['The boy kicked the ball.', 'The ball was kicked by the boy.', 'The boy is kicking the ball.', 'The ball bounced high.'],
    correctAnswer: 'The ball was kicked by the boy.',
    explanation: 'In passive voice, the subject receives the action. "The ball was kicked" shows that the ball (subject) received the action of kicking.',
    difficulty: 'hard'
  },
  {
    id: 'e97',
    subject: 'english',
    text: 'What is the function of a relative pronoun?',
    options: ['To replace a noun', 'To join clauses and refer back to a noun', 'To show possession', 'To indicate a question'],
    correctAnswer: 'To join clauses and refer back to a noun',
    explanation: 'Relative pronouns (who, whom, whose, which, that) join clauses and refer back to a noun or pronoun mentioned previously.',
    difficulty: 'hard'
  },
  {
    id: 'e98',
    subject: 'english',
    text: 'Which of these is an example of a possessive pronoun?',
    options: ['she', 'her', 'hers', 'herself'],
    correctAnswer: 'hers',
    explanation: 'Possessive pronouns (mine, yours, his, hers, its, ours, theirs) show ownership and can stand alone without a noun following them.',
    difficulty: 'hard'
  },
  {
    id: 'e99',
    subject: 'english',
    text: 'What is the literary term for a sequence of events that builds toward a climax?',
    options: ['foreshadowing', 'flashback', 'rising action', 'resolution'],
    correctAnswer: 'rising action',
    explanation: 'Rising action is the part of a story\'s plot that leads up to the climax, building tension and developing conflict.',
    difficulty: 'hard'
  },
  {
    id: 'e100',
    subject: 'english',
    text: 'Which sentence demonstrates correct agreement between subject and pronoun?',
    options: ['Everyone should bring their notebook.', 'The committee made its decision.', 'Each of the students has their own locker.', 'Neither of them have finished their work.'],
    correctAnswer: 'The committee made its decision.',
    explanation: 'Collective nouns like "committee" take singular pronouns. "Committee" and "its" show correct agreement.',
    difficulty: 'hard'
  }
];

// Combine all hard questions
const hardQuestions = [...hardQuestions, ...additionalHardQuestions];

export default hardQuestions;
