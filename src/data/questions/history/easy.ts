
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const easyHistoryQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "history",
    text: "Who was the first Roman Emperor to invade Britain?",
    options: ["Julius Caesar", "Augustus", "Claudius", "Nero"],
    correctAnswer: "Julius Caesar",
    explanation: "Julius Caesar led two expeditions to Britain in 55 and 54 BCE, although these were more like raids than full invasions.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "Which famous ship sank on its maiden voyage in 1912?",
    options: ["Titanic", "Queen Mary", "HMS Victory", "Cutty Sark"],
    correctAnswer: "Titanic",
    explanation: "The Titanic sank after hitting an iceberg on its maiden voyage from Southampton to New York City.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "What was the name of the first castle built by William the Conqueror in England?",
    options: ["Windsor Castle", "Hastings Castle", "Tower of London", "Warwick Castle"],
    correctAnswer: "Hastings Castle",
    explanation: "William the Conqueror built Hastings Castle shortly after landing in England in 1066.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "Which ancient civilization built the pyramids?",
    options: ["Romans", "Greeks", "Egyptians", "Mayans"],
    correctAnswer: "Egyptians",
    explanation: "The ancient Egyptians built the pyramids as tombs for their pharaohs and their consorts.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "What was the name of Queen Victoria's husband?",
    options: ["Prince Albert", "Prince Philip", "Prince Henry", "Prince Edward"],
    correctAnswer: "Prince Albert",
    explanation: "Prince Albert of Saxe-Coburg and Gotha was Queen Victoria's husband from 1840 until his death in 1861.",
    difficulty: "easy",
  }
];

export default easyHistoryQuestions;
