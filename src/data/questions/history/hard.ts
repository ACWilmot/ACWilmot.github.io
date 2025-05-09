
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const hardHistoryQuestions: Question[] = Array.from({ length: 30 }, (_, index) => {
  const questions = [
    {
      text: "In which year was the Act of Union passed, uniting the kingdoms of England and Scotland?",
      options: ["1603", "1707", "1801", "1536"],
      correctAnswer: "1707",
      explanation: "The Acts of Union were passed in 1707, creating the Kingdom of Great Britain by uniting the Kingdom of England and the Kingdom of Scotland.",
      year: 4
    },
    {
      text: "Who was the Prime Minister of Britain during most of World War II?",
      options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Stanley Baldwin"],
      correctAnswer: "Winston Churchill",
      explanation: "Winston Churchill served as Prime Minister from 1940 to 1945, leading Britain through most of World War II.",
      year: 4
    },
    {
      text: "What was the name of the battle in 1066 where William the Conqueror defeated King Harold II?",
      options: ["Battle of Hastings", "Battle of Stamford Bridge", "Battle of Bosworth Field", "Battle of Agincourt"],
      correctAnswer: "Battle of Hastings",
      explanation: "The Battle of Hastings was fought on October 14, 1066, between the Norman-French army of William, Duke of Normandy, and an English army under King Harold II.",
      year: 4
    },
    {
      text: "Which English king had six wives?",
      options: ["Henry VII", "Henry VIII", "Edward VI", "Richard III"],
      correctAnswer: "Henry VIII",
      explanation: "Henry VIII is famous for having six wives: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, and Catherine Parr.",
      year: 4
    },
    {
      text: "What important document did King John sign in 1215, limiting the power of the monarchy?",
      options: ["The Domesday Book", "Magna Carta", "The Treaty of Versailles", "The Bill of Rights"],
      correctAnswer: "Magna Carta",
      explanation: "The Magna Carta (Great Charter) was signed by King John at Runnymede in 1215, establishing for the first time that everyone, including the king, was subject to the law.",
      year: 4
    },
    {
      text: "Who was the first Queen of England to rule in her own right?",
      options: ["Elizabeth I", "Mary I", "Victoria", "Anne"],
      correctAnswer: "Mary I",
      explanation: "Mary I, daughter of Henry VIII and Catherine of Aragon, was the first Queen of England to rule in her own right from 1553 to 1558.",
      year: 4
    },
    {
      text: "Which ancient civilization built the city of Carthage?",
      options: ["Greeks", "Romans", "Phoenicians", "Egyptians"],
      correctAnswer: "Phoenicians",
      explanation: "Carthage was founded by Phoenician colonists in the 9th century BCE in what is now Tunisia.",
      year: 4
    },
    {
      text: "What was the name of the Viking who became the first King of Normandy?",
      options: ["Erik the Red", "Rollo", "Leif Erikson", "Harald Hardrada"],
      correctAnswer: "Rollo",
      explanation: "Rollo (also known as Hrolf) was a Viking leader who became the first ruler of Normandy in 911.",
      year: 4
    },
    {
      text: "During which monarch's reign did the Spanish Armada attempt to invade England?",
      options: ["Henry VIII", "Mary I", "Elizabeth I", "James I"],
      correctAnswer: "Elizabeth I",
      explanation: "The Spanish Armada attempted to invade England in 1588 during the reign of Queen Elizabeth I.",
      year: 4
    },
    {
      text: "What was the name of the period of religious persecution under Queen Mary I?",
      options: ["The Reformation", "The Dissolution", "The Marian Persecutions", "The Counter-Reformation"],
      correctAnswer: "The Marian Persecutions",
      explanation: "The Marian Persecutions were carried out against religious reformers and Protestants during the reign of Mary I from 1553 to 1558.",
      year: 4
    },
    {
      text: "Who was the last Anglo-Saxon king of England?",
      options: ["Alfred the Great", "Edward the Confessor", "Harold Godwinson", "Cnut the Great"],
      correctAnswer: "Harold Godwinson",
      explanation: "Harold Godwinson (Harold II) was the last Anglo-Saxon king of England, ruling from January to October 1066 before being defeated by William the Conqueror.",
      year: 4
    },
    {
      text: "What was the 'Peasants' Revolt' of 1381?",
      options: ["A farmers' strike for better wages", "A major uprising against poll tax and serfdom", "A protest against church tithes", "A rebellion against land enclosure"],
      correctAnswer: "A major uprising against poll tax and serfdom",
      explanation: "The Peasants' Revolt of 1381 was a major uprising in England triggered by socio-economic and political tensions, particularly poll taxes and restrictions of serfdom.",
      year: 4
    },
    {
      text: "Which monarch established the Church of England as the established church?",
      options: ["Henry VII", "Henry VIII", "Edward VI", "Elizabeth I"],
      correctAnswer: "Elizabeth I",
      explanation: "While Henry VIII initiated the break with Rome, it was Elizabeth I who established the Church of England as the definitive Protestant church through the Elizabethan Religious Settlement.",
      year: 4
    },
    {
      text: "Which king was known as 'The Lionheart'?",
      options: ["Richard I", "Henry II", "John", "Edward I"],
      correctAnswer: "Richard I",
      explanation: "Richard I was known as Richard the Lionheart (Cœur de Lion) because of his reputation as a great military leader and warrior.",
      year: 4
    },
    {
      text: "What was the name of the treaty that officially ended World War I?",
      options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of London", "Treaty of Berlin"],
      correctAnswer: "Treaty of Versailles",
      explanation: "The Treaty of Versailles was signed on June 28, 1919, and officially ended World War I between Germany and the Allied Powers.",
      year: 4
    },
    {
      text: "Which Roman Emperor was born in York (Eboracum)?",
      options: ["Nero", "Constantine the Great", "Hadrian", "Julius Caesar"],
      correctAnswer: "Constantine the Great",
      explanation: "Constantine the Great was born in York (then called Eboracum) around 272 AD and went on to become Roman Emperor.",
      year: 4
    },
    {
      text: "What was the name of the period of Victorian architecture and design?",
      options: ["Baroque", "Gothic Revival", "Art Deco", "Rococo"],
      correctAnswer: "Gothic Revival",
      explanation: "Gothic Revival was a prominent architectural and design style during the Victorian era, featuring Gothic elements like pointed arches, ribbed vaults, and flying buttresses.",
      year: 4
    },
    {
      text: "Which queen had the motto 'Semper Eadem' (Always the Same)?",
      options: ["Mary I", "Elizabeth I", "Victoria", "Mary, Queen of Scots"],
      correctAnswer: "Elizabeth I",
      explanation: "Elizabeth I adopted the motto 'Semper Eadem' (Always the Same) to represent her consistency and resolve.",
      year: 4
    },
    {
      text: "What was the name of the 1381 poll tax that contributed to the Peasants' Revolt?",
      options: ["The Royal Tax", "The King's Due", "The Third Poll Tax", "The Great Tax"],
      correctAnswer: "The Third Poll Tax",
      explanation: "The Third Poll Tax of 1381 was levied to finance war with France, but it was widely resisted and contributed to the Peasants' Revolt.",
      year: 4
    },
    {
      text: "Who led the English forces at the Battle of Agincourt in 1415?",
      options: ["Edward III", "Henry V", "Richard II", "Edward the Black Prince"],
      correctAnswer: "Henry V",
      explanation: "Henry V led the English forces to victory against the French at the Battle of Agincourt on October 25, 1415.",
      year: 4
    }
  ];

  // Create a circular reference to the questions array to repeat questions if needed
  return {
    id: uuidv4(),
    subject: "history",
    text: questions[index % questions.length].text,
    options: questions[index % questions.length].options,
    correctAnswer: questions[index % questions.length].correctAnswer,
    explanation: questions[index % questions.length].explanation,
    difficulty: "hard",
    year: questions[index % questions.length].year
  };
});

export default hardHistoryQuestions;
