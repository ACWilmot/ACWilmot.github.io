
import { v4 as uuidv4 } from 'uuid';
import { Question } from '@/types/questionTypes';

export const generateTimesTablesQuestions = (tables: number[], count: number): Question[] => {
  const questions: Question[] = [];
  
  // Create a pool of possible multiplication pairs based on selected tables
  const possibleQuestions: Array<{multiplicand: number, multiplier: number}> = [];
  
  tables.forEach(table => {
    for (let i = 1; i <= 12; i++) {
      possibleQuestions.push({ multiplicand: table, multiplier: i });
    }
  });
  
  // Shuffle the possible questions
  for (let i = possibleQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [possibleQuestions[i], possibleQuestions[j]] = [possibleQuestions[j], possibleQuestions[i]];
  }
  
  // Take the requested number of questions (or all if less available)
  const selectedPairs = possibleQuestions.slice(0, Math.min(count, possibleQuestions.length));
  
  // Create questions from the selected pairs
  selectedPairs.forEach(({ multiplicand, multiplier }) => {
    const correctAnswer = (multiplicand * multiplier).toString();
    
    // Generate 3 incorrect options
    const incorrectOptions: string[] = [];
    while (incorrectOptions.length < 3) {
      // Create a wrong answer by shifting the correct result by ±1-3
      const shift = Math.floor(Math.random() * 6) - 3;
      if (shift === 0) continue; // Skip if shift is 0
      
      const wrongAnswer = (multiplicand * multiplier + shift).toString();
      
      // Check if this wrong answer is already in the list of options
      if (!incorrectOptions.includes(wrongAnswer) && wrongAnswer !== correctAnswer && parseInt(wrongAnswer) > 0) {
        incorrectOptions.push(wrongAnswer);
      }
    }
    
    // Combine correct and incorrect options and shuffle them
    const options = [correctAnswer, ...incorrectOptions];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Create the question
    questions.push({
      id: uuidv4(),
      subject: 'timesTables',
      text: `What is ${multiplicand} × ${multiplier}?`,
      options,
      correctAnswer,
      explanation: `${multiplicand} × ${multiplier} = ${correctAnswer}`,
      difficulty: 'all',
    });
  });
  
  return questions;
};
