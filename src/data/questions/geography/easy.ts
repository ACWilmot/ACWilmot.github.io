
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const easyGeographyQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "geography",
    text: "What is the capital city of England?",
    options: ["Manchester", "Birmingham", "London", "Liverpool"],
    correctAnswer: "London",
    explanation: "London is the capital and largest city of England and the United Kingdom.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which of these is NOT a country in the United Kingdom?",
    options: ["England", "Scotland", "Ireland", "Wales"],
    correctAnswer: "Ireland",
    explanation: "The United Kingdom consists of England, Scotland, Wales, and Northern Ireland. Ireland (officially the Republic of Ireland) is a separate country.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which ocean lies to the west of the United Kingdom?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: "Atlantic Ocean",
    explanation: "The Atlantic Ocean lies to the west of the United Kingdom.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "Which is the longest river in the UK?",
    options: ["Thames", "Severn", "Trent", "Great Ouse"],
    correctAnswer: "Severn",
    explanation: "The River Severn is the longest river in the United Kingdom, at 220 miles (354 km) long.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "geography",
    text: "What is the name of the mountain range in Scotland?",
    options: ["Pennines", "Highlands", "Alps", "Pyrenees"],
    correctAnswer: "Highlands",
    explanation: "The Scottish Highlands form a mountainous region in northern Scotland.",
    difficulty: "easy",
  }
];

export default easyGeographyQuestions;
