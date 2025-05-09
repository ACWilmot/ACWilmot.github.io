
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const mediumGeographyQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which British city is known as the 'Steel City'?",
    options: ["Birmingham", "Manchester", "Sheffield", "Glasgow"],
    correctAnswer: "Sheffield",
    explanation: "Sheffield earned the nickname 'Steel City' due to its history of steel production dating back to the 18th century.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "What is the largest lake in the United Kingdom?",
    options: ["Loch Ness", "Loch Lomond", "Lake Windermere", "Loch Neagh"],
    correctAnswer: "Loch Neagh",
    explanation: "Loch Neagh in Northern Ireland is the largest lake in the United Kingdom by area.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which of these is NOT one of the four main compass directions?",
    options: ["North", "East", "Southwest", "West"],
    correctAnswer: "Southwest",
    explanation: "The four main compass directions are North, East, South, and West. Southwest is a secondary direction.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which mountain is the highest in the UK?",
    options: ["Ben Nevis", "Snowdon", "Scafell Pike", "Ben Macdui"],
    correctAnswer: "Ben Nevis",
    explanation: "Ben Nevis in Scotland is the highest mountain in the United Kingdom, with a summit of 1,345 meters (4,413 feet) above sea level.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which of these countries does NOT share a land border with the UK?",
    options: ["Scotland", "Wales", "Ireland", "France"],
    correctAnswer: "France",
    explanation: "France does not share a land border with the UK. They are separated by the English Channel. Scotland and Wales are part of the UK, and Northern Ireland (part of the UK) shares a border with the Republic of Ireland.",
    difficulty: "medium",
  }
];

export default mediumGeographyQuestions;
