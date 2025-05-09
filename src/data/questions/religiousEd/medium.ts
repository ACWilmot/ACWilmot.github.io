
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const mediumReligiousEdQuestions: Question[] = Array.from({ length: 35 }, (_, index) => {
  const questions = [
    {
      text: "In Christianity, what is the meaning of the word 'Gospel'?",
      options: ["Good news", "Holy book", "Prayer", "Sacred place"],
      correctAnswer: "Good news",
      explanation: "Gospel comes from the Old English 'god-spell', meaning 'good news' or 'glad tidings'.",
      year: 4
    },
    {
      text: "What is the sacred river of Hinduism?",
      options: ["Nile", "Thames", "Ganges", "Amazon"],
      correctAnswer: "Ganges",
      explanation: "The Ganges (Ganga) is considered sacred in Hinduism and many Hindus bathe in it to cleanse themselves of sins.",
      year: 4
    },
    {
      text: "What is the name of the journey Muslims make to Mecca?",
      options: ["Hajj", "Salah", "Zakat", "Sawm"],
      correctAnswer: "Hajj",
      explanation: "The Hajj is the annual Islamic pilgrimage to Mecca, Saudi Arabia, and is mandatory for Muslims once in their lifetime if they are able.",
      year: 4
    },
    {
      text: "Which festival marks the end of Ramadan?",
      options: ["Eid al-Fitr", "Diwali", "Passover", "Hanukkah"],
      correctAnswer: "Eid al-Fitr",
      explanation: "Eid al-Fitr is the festival that marks the end of the month-long fast during Ramadan.",
      year: 4
    },
    {
      text: "What are the Four Noble Truths in Buddhism?",
      options: ["Truths about wealth", "Truths about suffering", "Truths about wisdom", "Truths about nature"],
      correctAnswer: "Truths about suffering",
      explanation: "The Four Noble Truths in Buddhism are about suffering, its cause, its cessation, and the path to its cessation.",
      year: 4
    },
    {
      text: "What do Jews celebrate during Passover?",
      options: ["Creation of the world", "Birth of Moses", "Freedom from slavery in Egypt", "Building of the Temple"],
      correctAnswer: "Freedom from slavery in Egypt",
      explanation: "Passover (Pesach) commemorates the liberation of the Israelites from slavery in Egypt.",
      year: 4
    },
    {
      text: "Which religious leader is known as the 'Enlightened One'?",
      options: ["Jesus", "Moses", "Muhammad", "Buddha"],
      correctAnswer: "Buddha",
      explanation: "'Buddha' means 'one who is awake' or 'the enlightened one', referring to Siddhartha Gautama after he attained enlightenment.",
      year: 4
    },
    {
      text: "What special meal do Christians remember Jesus's last supper with?",
      options: ["Baptism", "Communion", "Confirmation", "Confession"],
      correctAnswer: "Communion",
      explanation: "Christians remember Jesus's last supper through Communion (also called the Eucharist or Lord's Supper).",
      year: 4
    },
    {
      text: "What is Karma in Hinduism and Buddhism?",
      options: ["A holy book", "A type of prayer", "The law of cause and effect", "A religious festival"],
      correctAnswer: "The law of cause and effect",
      explanation: "Karma refers to the spiritual principle of cause and effect where intent and actions influence future outcomes.",
      year: 4
    },
    {
      text: "Which religious building has a minaret?",
      options: ["Church", "Synagogue", "Temple", "Mosque"],
      correctAnswer: "Mosque",
      explanation: "A minaret is a tall, slender tower typically attached to a mosque, used for the call to prayer.",
      year: 4
    },
    {
      text: "What are the first five books of the Bible called?",
      options: ["Gospels", "Pentateuch", "Epistles", "Psalms"],
      correctAnswer: "Pentateuch",
      explanation: "The first five books of the Bible (Genesis, Exodus, Leviticus, Numbers, and Deuteronomy) are collectively known as the Pentateuch or Torah.",
      year: 4
    },
    {
      text: "Which religion believes in reincarnation?",
      options: ["Christianity", "Judaism", "Hinduism", "Islam"],
      correctAnswer: "Hinduism",
      explanation: "Hinduism believes in the rebirth of souls (reincarnation) after death.",
      year: 4
    },
    {
      text: "What is the name of the Jewish New Year?",
      options: ["Passover", "Hanukkah", "Rosh Hashanah", "Yom Kippur"],
      correctAnswer: "Rosh Hashanah",
      explanation: "Rosh Hashanah is the Jewish New Year, literally meaning 'head of the year'.",
      year: 4
    },
    {
      text: "What does a Muslim say before starting to pray?",
      options: ["Amen", "Shalom", "Allahu Akbar", "Namaste"],
      correctAnswer: "Allahu Akbar",
      explanation: "Muslims say 'Allahu Akbar' (God is Greater) before starting their prayers.",
      year: 4
    },
    {
      text: "In which city was Jesus crucified?",
      options: ["Bethlehem", "Nazareth", "Jerusalem", "Rome"],
      correctAnswer: "Jerusalem",
      explanation: "According to Christian belief, Jesus was crucified in Jerusalem at a place called Golgotha.",
      year: 4
    },
    {
      text: "What is the holy book of Judaism?",
      options: ["The Bible", "The Quran", "The Torah", "The Vedas"],
      correctAnswer: "The Torah",
      explanation: "The Torah is the most important religious text in Judaism, consisting of the first five books of the Hebrew Bible.",
      year: 4
    },
    {
      text: "What are the three main gods in Hinduism?",
      options: ["Brahma, Vishnu, Shiva", "Krishna, Ganesha, Lakshmi", "Indra, Agni, Vayu", "Rama, Sita, Hanuman"],
      correctAnswer: "Brahma, Vishnu, Shiva",
      explanation: "Brahma (creator), Vishnu (preserver), and Shiva (destroyer) form the Hindu trinity (Trimurti).",
      year: 4
    },
    {
      text: "What is the Islamic declaration of faith called?",
      options: ["Salah", "Sawm", "Shahada", "Zakat"],
      correctAnswer: "Shahada",
      explanation: "The Shahada is the Islamic declaration of faith: 'There is no god but Allah, and Muhammad is the messenger of Allah.'",
      year: 4
    },
    {
      text: "What holiday do Jews observe as the Day of Atonement?",
      options: ["Purim", "Yom Kippur", "Hanukkah", "Sukkot"],
      correctAnswer: "Yom Kippur",
      explanation: "Yom Kippur is considered the holiest day of the year in Judaism and is observed with fasting and prayer for atonement and repentance.",
      year: 4
    },
    {
      text: "What is the Eightfold Path in Buddhism?",
      options: ["Eight rules for monks", "Eight steps to enlightenment", "Eight sacred places", "Eight important gods"],
      correctAnswer: "Eight steps to enlightenment",
      explanation: "The Eightfold Path is a practical guideline to ethical and mental development with the goal of freeing the individual from attachments and delusions, leading to enlightenment.",
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
    difficulty: "medium",
    year: questions[index % questions.length].year
  };
});

export default mediumReligiousEdQuestions;
