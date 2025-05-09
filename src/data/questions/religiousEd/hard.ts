
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const hardReligiousEdQuestions: Question[] = [
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "What are the Five Pillars of Islam?",
    options: [
      "Faith, Prayer, Charity, Fasting, Pilgrimage",
      "Truth, Peace, Love, Faith, Charity",
      "Meditation, Prayer, Fasting, Study, Service",
      "Devotion, Wisdom, Meditation, Yoga, Service"
    ],
    correctAnswer: "Faith, Prayer, Charity, Fasting, Pilgrimage",
    explanation: "The Five Pillars of Islam are: Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca).",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "In which religion would you find the concepts of karma and reincarnation?",
    options: [
      "Christianity", 
      "Islam", 
      "Hinduism and Buddhism", 
      "Judaism"
    ],
    correctAnswer: "Hinduism and Buddhism",
    explanation: "The concepts of karma (the law of cause and effect) and reincarnation (rebirth) are central to both Hinduism and Buddhism.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "What is the Tripitaka?",
    options: [
      "A Hindu temple", 
      "A Buddhist scripture", 
      "An Islamic prayer ritual", 
      "A Jewish festival"
    ],
    correctAnswer: "A Buddhist scripture",
    explanation: "The Tripitaka (three baskets) is the earliest collection of Buddhist scriptures, written in the Pali language.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "Who is considered the founder of Sikhism?",
    options: [
      "Guru Nanak", 
      "Guru Gobind Singh", 
      "Mahavira", 
      "Zoroaster"
    ],
    correctAnswer: "Guru Nanak",
    explanation: "Guru Nanak (1469-1539) was the founder of Sikhism and the first of the ten Sikh Gurus.",
    difficulty: "hard",
  },
  {
    id: uuidv4(),
    subject: "religiousEd",
    text: "What is the meaning of 'Bar Mitzvah' in Judaism?",
    options: [
      "House of worship", 
      "Day of atonement", 
      "Son of commandment", 
      "Holy scripture"
    ],
    correctAnswer: "Son of commandment",
    explanation: "Bar Mitzvah means 'son of commandment' in Hebrew. It marks the time when a boy becomes responsible for observing Jewish law and is eligible to be counted in a minyan (prayer quorum).",
    difficulty: "hard",
  }
];

export default hardReligiousEdQuestions;
