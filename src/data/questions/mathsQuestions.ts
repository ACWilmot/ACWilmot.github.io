
import { Question, Subject, Difficulty } from '@/types/questionTypes';
import mathsQuestions from './maths';
import sampleQuestions from '../sampleQuestions';

export const getQuestionsForSubject = (subject: Subject, difficulty: Difficulty): Question[] => {
  if (subject === 'all') {
    // Combine questions from all subjects
    const allSubjects = Object.keys(sampleQuestions) as Array<Exclude<Subject, 'all'>>;
    let allQuestions: Question[] = [];
    
    allSubjects.forEach(subj => {
      if (difficulty === 'all') {
        allQuestions = [...allQuestions, ...sampleQuestions[subj]];
      } else {
        allQuestions = [
          ...allQuestions,
          ...sampleQuestions[subj].filter(q => q.difficulty === difficulty)
        ];
      }
    });
    
    return allQuestions;
  }
  
  if (subject === 'timesTables') {
    // Generate times tables questions dynamically
    return generateTimesTablesQuestions(difficulty);
  }
  
  const questions = sampleQuestions[subject as Exclude<Subject, 'all'>] || [];
  
  if (difficulty === 'all') {
    return questions;
  }
  
  return questions.filter(q => q.difficulty === difficulty);
};

// Helper function to generate times tables questions
const generateTimesTablesQuestions = (difficulty: Difficulty): Question[] => {
  // This is a placeholder implementation
  // In a real app, this would generate questions based on the selected times tables
  return [];
};

export default mathsQuestions;
