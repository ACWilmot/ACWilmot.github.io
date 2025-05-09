
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const hardHistoryQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "history",
    text: "In which year was the Act of Union passed, uniting the kingdoms of England and Scotland?",
    options: ["1603", "1707", "1801", "1536"],
    correctAnswer: "1707",
    explanation: "The Acts of Union were passed in 1707, creating the Kingdom of Great Britain by uniting the Kingdom of England and the Kingdom of Scotland.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "Who was the Prime Minister of Britain during most of World War II?",
    options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Stanley Baldwin"],
    correctAnswer: "Winston Churchill",
    explanation: "Winston Churchill served as Prime Minister from 1940 to 1945, leading Britain through most of World War II.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "What was the name of the battle in 1066 where William the Conqueror defeated King Harold II?",
    options: ["Battle of Hastings", "Battle of Stamford Bridge", "Battle of Bosworth Field", "Battle of Agincourt"],
    correctAnswer: "Battle of Hastings",
    explanation: "The Battle of Hastings was fought on October 14, 1066, between the Norman-French army of William, Duke of Normandy, and an English army under King Harold II.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "Which English king had six wives?",
    options: ["Henry VII", "Henry VIII", "Edward VI", "Richard III"],
    correctAnswer: "Henry VIII",
    explanation: "Henry VIII is famous for having six wives: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, and Catherine Parr.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "history",
    text: "What important document did King John sign in 1215, limiting the power of the monarchy?",
    options: ["The Domesday Book", "Magna Carta", "The Treaty of Versailles", "The Bill of Rights"],
    correctAnswer: "Magna Carta",
    explanation: "The Magna Carta (Great Charter) was signed by King John at Runnymede in 1215, establishing for the first time that everyone, including the king, was subject to the law.",
    difficulty: "hard",
  }
];

export default hardHistoryQuestions;
