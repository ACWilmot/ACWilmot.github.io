
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const easyReligiousEdQuestions: Question[] = Array.from({ length: 35 }, (_, index) => {
  const questions = [
    {
      text: "Which book is used for worship in Christianity?",
      options: ["The Bible", "The Quran", "The Torah", "The Vedas"],
      correctAnswer: "The Bible",
      explanation: "The Bible is the holy book used for worship in Christianity.",
      year: 4
    },
    {
      text: "Which religion celebrates Diwali?",
      options: ["Christianity", "Islam", "Hinduism", "Judaism"],
      correctAnswer: "Hinduism",
      explanation: "Diwali, the festival of lights, is celebrated by Hindus.",
      year: 4
    },
    {
      text: "What is the name of the Muslim holy book?",
      options: ["The Bible", "The Quran", "The Torah", "The Vedas"],
      correctAnswer: "The Quran",
      explanation: "The Quran (Koran) is the holy book of Islam.",
      year: 4
    },
    {
      text: "Which building do Christians go to for worship?",
      options: ["Mosque", "Temple", "Synagogue", "Church"],
      correctAnswer: "Church",
      explanation: "Christians go to church for worship.",
      year: 4
    },
    {
      text: "What does the word 'Islam' mean?",
      options: ["Faith", "Peace", "Submission", "Prayer"],
      correctAnswer: "Submission",
      explanation: "Islam means 'submission to the will of God.'",
      year: 4
    },
    {
      text: "Which religion celebrates Hanukkah?",
      options: ["Christianity", "Islam", "Hinduism", "Judaism"],
      correctAnswer: "Judaism",
      explanation: "Hanukkah is a Jewish festival that celebrates the rededication of the Second Temple in Jerusalem.",
      year: 4
    },
    {
      text: "Who founded Buddhism?",
      options: ["Muhammad", "Jesus Christ", "Siddhartha Gautama", "Abraham"],
      correctAnswer: "Siddhartha Gautama",
      explanation: "Siddhartha Gautama, known as the Buddha, founded Buddhism.",
      year: 4
    },
    {
      text: "Which religious festival celebrates the birth of Jesus?",
      options: ["Easter", "Christmas", "Pentecost", "Lent"],
      correctAnswer: "Christmas",
      explanation: "Christmas celebrates the birth of Jesus Christ.",
      year: 4
    },
    {
      text: "What is the name of the Jewish place of worship?",
      options: ["Church", "Mosque", "Temple", "Synagogue"],
      correctAnswer: "Synagogue",
      explanation: "Jews worship in synagogues.",
      year: 4
    },
    {
      text: "Which holy day of the week do Muslims observe?",
      options: ["Friday", "Saturday", "Sunday", "Monday"],
      correctAnswer: "Friday",
      explanation: "Friday is the holy day for Muslims, when they gather for congregational prayer.",
      year: 4
    },
    {
      text: "What is the name of the Hindu god with the elephant head?",
      options: ["Shiva", "Vishnu", "Ganesha", "Brahma"],
      correctAnswer: "Ganesha",
      explanation: "Ganesha is depicted with an elephant head and is known as the remover of obstacles.",
      year: 4
    },
    {
      text: "Which religious symbol represents Judaism?",
      options: ["Cross", "Star of David", "Crescent Moon", "Om"],
      correctAnswer: "Star of David",
      explanation: "The Star of David (hexagram) is a symbol commonly associated with Judaism.",
      year: 4
    },
    {
      text: "What religion was Jesus born into?",
      options: ["Christianity", "Islam", "Judaism", "Hinduism"],
      correctAnswer: "Judaism",
      explanation: "Jesus was born into a Jewish family and was raised according to Jewish traditions.",
      year: 4
    },
    {
      text: "Which of these is NOT one of the Five Pillars of Islam?",
      options: ["Prayer", "Fasting", "Baptism", "Pilgrimage"],
      correctAnswer: "Baptism",
      explanation: "The Five Pillars are Faith, Prayer, Charity, Fasting, and Pilgrimage. Baptism is a Christian rite.",
      year: 4
    },
    {
      text: "What is the name of the Jewish holy day of rest?",
      options: ["Sabbath", "Passover", "Yom Kippur", "Hanukkah"],
      correctAnswer: "Sabbath",
      explanation: "The Sabbath (Shabbat) is the Jewish day of rest, from Friday evening to Saturday evening.",
      year: 4
    },
    {
      text: "What do Buddhists call the state of perfect peace?",
      options: ["Heaven", "Nirvana", "Paradise", "Eden"],
      correctAnswer: "Nirvana",
      explanation: "Nirvana is the ultimate goal in Buddhism, representing the end of suffering.",
      year: 4
    },
    {
      text: "Which religious festival involves fasting for a month?",
      options: ["Lent", "Ramadan", "Passover", "Diwali"],
      correctAnswer: "Ramadan",
      explanation: "Ramadan is the month when Muslims fast from dawn until sunset.",
      year: 4
    },
    {
      text: "Who is considered the founder of Christianity?",
      options: ["Abraham", "Moses", "Muhammad", "Jesus Christ"],
      correctAnswer: "Jesus Christ",
      explanation: "Christianity is based on the teachings of Jesus Christ.",
      year: 4
    },
    {
      text: "What is the main symbol of Christianity?",
      options: ["Star", "Crescent", "Cross", "Wheel"],
      correctAnswer: "Cross",
      explanation: "The cross is the main symbol of Christianity, representing Jesus's crucifixion.",
      year: 4
    },
    {
      text: "Which holy book contains stories about Moses and Noah?",
      options: ["The Bible", "The Quran", "The Vedas", "The Tripitaka"],
      correctAnswer: "The Bible",
      explanation: "The stories of Moses and Noah are found in the Bible, specifically in the Old Testament.",
      year: 4
    }
  ];

  // Create a circular reference to the questions array to repeat questions if needed
  return {
    id: uuidv4(),
    subject: "religiousEd",
    text: questions[index % questions.length].text,
    options: questions[index % questions.length].options,
    correctAnswer: questions[index % questions.length].correctAnswer,
    explanation: questions[index % questions.length].explanation,
    difficulty: "easy",
    year: questions[index % questions.length].year
  };
});

export default easyReligiousEdQuestions;
