
export type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

// Export the Subject type to be used in other files
export type Subject = 'maths' | 'english' | 'verbal' | 'all' | 'timesTables' | 'history' | 'geography' | 'religiousEd';

// Verbal reasoning question types (IPS Types)
export type VerbalQuestionType = 
  | 'insertLetter' // TYPE 1: Insert a Letter (IPS Type A)
  | 'twoOddOnes' // TYPE 2: Two Odd Ones Out (IPS Type B)
  | 'relatedWords' // TYPE 3: Related Words (IPS Type C)
  | 'closestMeaning' // TYPE 4: Closest Meaning (IPS Type D)
  | 'hiddenWord' // TYPE 5: Hidden Word (IPS Type E)
  | 'missingWord' // TYPE 6: Missing Word (IPS Type F)
  | 'lettersForNumbers' // TYPE 7: Letters for Numbers (IPS Type G)
  | 'moveALetter' // TYPE 8: Move a Letter (IPS Type J)
  | 'letterSeries' // TYPE 9: Letter Series (IPS Type L)
  | 'wordConnections' // TYPE 10: Word Connections (IPS Type M)
  | 'numberSeries' // TYPE 11: Number Series (IPS Type P)
  | 'compoundWords' // TYPE 12: Compound Words (IPS Type Q)
  | 'makeAWord' // TYPE 13: Make a Word (IPS Type R)
  | 'letterConnections' // TYPE 14: Letter Connections (IPS Type U)
  | 'readingInformation' // TYPE 15: Reading Information (IPS Type Z)
  | 'oppositeMeaning' // TYPE 16: Opposite Meaning (IPS Type H)
  | 'completeTheSum' // TYPE 17: Complete the Sum (IPS Type I)
  | 'relatedNumbers' // TYPE 18: Related Numbers (IPS Type K)
  | 'wordNumberCodes' // TYPE 19: Word-Number Codes (IPS Type N)
  | 'completeTheWord' // TYPE 20: Complete the Word (IPS Type O)
  | 'sameMeaning'; // TYPE 21: Same Meaning (IPS Type S)

export interface Question {
  id: string;
  subject: Subject;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: Difficulty;
  imageUrl?: string;
  optionImages?: string[];
  timesTable?: number; // Add times table identifier
  year?: number; // Add year level identifier
  verbalType?: VerbalQuestionType; // Add verbal reasoning type
}

export type SubjectQuestions = Record<Subject, Question[]>;
