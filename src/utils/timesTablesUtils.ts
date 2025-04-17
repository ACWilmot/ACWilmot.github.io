
import { v4 as uuidv4 } from 'uuid';
import { Question, Difficulty } from '@/types/questionTypes';

export const generateTimesTablesQuestions = (selectedTables: number[], count: number): Question[] => {
  const questions: Question[] = [];
  
  // Generate questions for each selected times table
  while (questions.length < count) {
    // Select a random times table from the selected ones
    const tableIndex = Math.floor(Math.random() * selectedTables.length);
    const table = selectedTables[tableIndex];
    
    // Generate a random number to multiply with (1-12)
    const num = Math.floor(Math.random() * 12) + 1;
    
    // Create the question
    const question: Question = {
      id: uuidv4(),
      text: `${table} × ${num} = ?`,
      options: generateOptions(table, num),
      correctAnswer: String(table * num),
      explanation: `${table} × ${num} = ${table * num}`,
      difficulty: getDifficulty(table),
      subject: 'timesTables',
      timesTable: table // Ensure this property is set correctly
    };
    
    // Add the question to the array
    questions.push(question);
  }
  
  console.log("Generated times tables questions with timesTable property:", 
    questions.map(q => ({ id: q.id, timesTable: q.timesTable, text: q.text })));
  
  return questions;
};

// Helper function to generate options for multiple choice
const generateOptions = (table: number, num: number): string[] => {
  const correctAnswer = table * num;
  const options = [String(correctAnswer)];
  
  // Generate 3 wrong options
  while (options.length < 4) {
    // Generate a random wrong answer close to the correct one
    let wrongAnswer;
    
    const randomOffset = Math.floor(Math.random() * 10) - 5; // Random number between -5 and 4
    
    if (randomOffset === 0) {
      // If offset is 0, use a different approach
      wrongAnswer = correctAnswer + (Math.random() > 0.5 ? 1 : -1);
    } else {
      wrongAnswer = correctAnswer + randomOffset;
    }
    
    // Ensure the wrong answer is positive
    wrongAnswer = Math.max(1, wrongAnswer);
    
    // Ensure the wrong answer is not already in the options
    if (!options.includes(String(wrongAnswer))) {
      options.push(String(wrongAnswer));
    }
  }
  
  // Shuffle the options
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  
  return options;
};

// Helper function to determine difficulty based on times table
const getDifficulty = (table: number): Difficulty => {
  if (table <= 5) {
    return 'easy';
  } else if (table <= 9) {
    return 'medium';
  } else {
    return 'hard';
  }
};
