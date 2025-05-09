
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const mediumHistoryQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "history",
    text: "During which period did the Great Fire of London occur?",
    options: ["Tudor period", "Stuart period", "Victorian era", "Georgian era"],
    correctAnswer: "Stuart period",
    explanation: "The Great Fire of London occurred in September 1666 during the Stuart period, during the reign of Charles II.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "Which king was executed at the end of the English Civil War?",
    options: ["Charles I", "James I", "Charles II", "Henry VIII"],
    correctAnswer: "Charles I",
    explanation: "King Charles I was executed by beheading in 1649 after being tried and convicted of high treason.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "What was the name of the disease that killed approximately one-third of Europe's population in the 14th century?",
    options: ["Smallpox", "The Black Death", "Cholera", "Yellow Fever"],
    correctAnswer: "The Black Death",
    explanation: "The Black Death (bubonic plague) devastated Europe between 1347 and 1351, killing about one-third of the population.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "What was the name of the ship that the Pilgrims sailed to America in 1620?",
    options: ["Santa Maria", "Mayflower", "Golden Hind", "Discovery"],
    correctAnswer: "Mayflower",
    explanation: "The Mayflower transported the first English Pilgrims from Plymouth, England to the New World in 1620.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "Which ancient civilization built Stonehenge?",
    options: ["Celts", "Romans", "Neolithic peoples", "Vikings"],
    correctAnswer: "Neolithic peoples",
    explanation: "Stonehenge was built by Neolithic peoples, with the earliest parts dated to around 3000 BCE.",
    difficulty: "medium",
  }
];

export default mediumHistoryQuestions;
