
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const easyReligiousEdQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "Which of these is a holy book in Christianity?",
    options: ["The Bible", "The Quran", "The Torah", "The Vedas"],
    correctAnswer: "The Bible",
    explanation: "The Bible is the holy book of Christianity, consisting of the Old Testament and the New Testament.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "What is the holy book of Islam called?",
    options: ["The Torah", "The Quran", "The Bible", "The Tripitaka"],
    correctAnswer: "The Quran",
    explanation: "The Quran (also spelled Koran) is the central religious text of Islam, believed by Muslims to be a revelation from God.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "Which religious festival celebrates the birth of Jesus?",
    options: ["Easter", "Christmas", "Diwali", "Hanukkah"],
    correctAnswer: "Christmas",
    explanation: "Christmas is the Christian festival celebrating the birth of Jesus Christ, observed on December 25th.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "In which religion is the festival of Diwali celebrated?",
    options: ["Christianity", "Islam", "Hinduism", "Judaism"],
    correctAnswer: "Hinduism",
    explanation: "Diwali, also known as the Festival of Lights, is primarily celebrated by Hindus, although it's also observed by Sikhs and Jains.",
    difficulty: "easy",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "What is the place of worship for Muslims called?",
    options: ["Church", "Synagogue", "Mosque", "Temple"],
    correctAnswer: "Mosque",
    explanation: "A mosque is a place of worship for Muslims. The word comes from the Arabic 'masjid' meaning 'place of prostration'.",
    difficulty: "easy",
  }
];

export default easyReligiousEdQuestions;
