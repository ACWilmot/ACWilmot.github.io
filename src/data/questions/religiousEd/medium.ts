
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const mediumReligiousEdQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "What is the name of the Jewish place of worship?",
    options: ["Church", "Synagogue", "Mosque", "Temple"],
    correctAnswer: "Synagogue",
    explanation: "A synagogue is a Jewish place of worship, which also serves as a place for religious education and community gatherings.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "Which religion celebrates Passover?",
    options: ["Christianity", "Islam", "Hinduism", "Judaism"],
    correctAnswer: "Judaism",
    explanation: "Passover (Pesach) is a major Jewish holiday that celebrates the exodus of the Israelites from slavery in Egypt.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "What is the name of the Hindu festival of colors?",
    options: ["Diwali", "Navaratri", "Holi", "Raksha Bandhan"],
    correctAnswer: "Holi",
    explanation: "Holi is a popular Hindu spring festival, also known as the Festival of Colors or the Festival of Love.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "During which month do Muslims observe Ramadan?",
    options: ["The ninth month of the Islamic calendar", "December", "January", "April"],
    correctAnswer: "The ninth month of the Islamic calendar",
    explanation: "Ramadan is the ninth month of the Islamic calendar, during which Muslims observe fasting from dawn to sunset.",
    difficulty: "medium",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "What are the Four Noble Truths associated with?",
    options: ["Christianity", "Islam", "Buddhism", "Hinduism"],
    correctAnswer: "Buddhism",
    explanation: "The Four Noble Truths are a fundamental principle in Buddhism, which explain the nature of suffering and the path to liberation.",
    difficulty: "medium",
  }
];

export default mediumReligiousEdQuestions;
