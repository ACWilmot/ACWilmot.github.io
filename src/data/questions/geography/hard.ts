
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const hardGeographyQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which river flows through the city of York?",
    options: ["Thames", "Ouse", "Severn", "Trent"],
    correctAnswer: "Ouse",
    explanation: "The River Ouse flows through the city of York in North Yorkshire, England.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which county is known as the 'Garden of England'?",
    options: ["Surrey", "Devon", "Kent", "Hampshire"],
    correctAnswer: "Kent",
    explanation: "Kent is known as the 'Garden of England' because of its abundance of orchards and hop gardens.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "The Giant's Causeway is a natural landmark located in which part of the UK?",
    options: ["Scotland", "Wales", "England", "Northern Ireland"],
    correctAnswer: "Northern Ireland",
    explanation: "The Giant's Causeway is located in County Antrim on the northeast coast of Northern Ireland. It's a UNESCO World Heritage Site.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which British Overseas Territory is located at the southern tip of the Iberian Peninsula?",
    options: ["Gibraltar", "Falkland Islands", "Bermuda", "Cayman Islands"],
    correctAnswer: "Gibraltar",
    explanation: "Gibraltar is a British Overseas Territory located at the southern tip of the Iberian Peninsula, bordering Spain.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "What is the name of the strait that separates England from France?",
    options: ["Strait of Dover", "English Channel", "North Sea", "Irish Sea"],
    correctAnswer: "Strait of Dover",
    explanation: "The Strait of Dover is the narrowest part of the English Channel, separating Great Britain from continental Europe.",
    difficulty: "hard",
  }
];

export default hardGeographyQuestions;
