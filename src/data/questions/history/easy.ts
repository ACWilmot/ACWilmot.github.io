
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const easyHistoryQuestions: Question[] = Array.from({ length: 35 }, (_, index) => {
  const questions = [
    {
      text: "Who was the first Roman Emperor to invade Britain?",
      options: ["Julius Caesar", "Augustus", "Claudius", "Nero"],
      correctAnswer: "Julius Caesar",
      explanation: "Julius Caesar led two expeditions to Britain in 55 and 54 BCE, although these were more like raids than full invasions.",
      year: 4
    },
    {
      text: "Which famous ship sank on its maiden voyage in 1912?",
      options: ["Titanic", "Queen Mary", "HMS Victory", "Cutty Sark"],
      correctAnswer: "Titanic",
      explanation: "The Titanic sank after hitting an iceberg on its maiden voyage from Southampton to New York City.",
      year: 4
    },
    {
      text: "What was the name of the first castle built by William the Conqueror in England?",
      options: ["Windsor Castle", "Hastings Castle", "Tower of London", "Warwick Castle"],
      correctAnswer: "Hastings Castle",
      explanation: "William the Conqueror built Hastings Castle shortly after landing in England in 1066.",
      year: 4
    },
    {
      text: "Which ancient civilization built the pyramids?",
      options: ["Romans", "Greeks", "Egyptians", "Mayans"],
      correctAnswer: "Egyptians",
      explanation: "The ancient Egyptians built the pyramids as tombs for their pharaohs and their consorts.",
      year: 4
    },
    {
      text: "What was the name of Queen Victoria's husband?",
      options: ["Prince Albert", "Prince Philip", "Prince Henry", "Prince Edward"],
      correctAnswer: "Prince Albert",
      explanation: "Prince Albert of Saxe-Coburg and Gotha was Queen Victoria's husband from 1840 until his death in 1861.",
      year: 4
    },
    {
      text: "Who was the first Tudor king of England?",
      options: ["Henry VIII", "Henry VII", "Edward VI", "Richard III"],
      correctAnswer: "Henry VII",
      explanation: "Henry VII became the first Tudor monarch after defeating Richard III at the Battle of Bosworth Field in 1485.",
      year: 4
    },
    {
      text: "What material did Stone Age people use to make tools?",
      options: ["Bronze", "Iron", "Flint", "Steel"],
      correctAnswer: "Flint",
      explanation: "Stone Age people used flint to make various tools and weapons.",
      year: 4
    },
    {
      text: "Which king signed the Magna Carta in 1215?",
      options: ["King John", "King Henry II", "King Richard I", "King William I"],
      correctAnswer: "King John",
      explanation: "King John signed the Magna Carta at Runnymede in 1215, limiting the powers of the monarch.",
      year: 4
    },
    {
      text: "What was the name of the ship that took the Pilgrims to America in 1620?",
      options: ["Santa Maria", "Mayflower", "Golden Hind", "Victoria"],
      correctAnswer: "Mayflower",
      explanation: "The Mayflower transported the Pilgrims from Plymouth, England to the New World in 1620.",
      year: 4
    },
    {
      text: "Who was the leader of the Romans when they invaded Britain in 43 AD?",
      options: ["Julius Caesar", "Claudius", "Augustus", "Nero"],
      correctAnswer: "Claudius",
      explanation: "Emperor Claudius ordered the Roman invasion of Britain in 43 AD.",
      year: 4
    },
    {
      text: "What did the Vikings use to travel across the sea?",
      options: ["Galleons", "Longships", "Steamboats", "Canoes"],
      correctAnswer: "Longships",
      explanation: "Vikings used longships which were designed to be fast and maneuverable in various water conditions.",
      year: 4
    },
    {
      text: "Who discovered America in 1492?",
      options: ["Christopher Columbus", "Walter Raleigh", "Francis Drake", "John Cabot"],
      correctAnswer: "Christopher Columbus",
      explanation: "Christopher Columbus reached the Americas in 1492, although he thought he had reached India.",
      year: 4
    },
    {
      text: "What period came after the Stone Age?",
      options: ["Iron Age", "Bronze Age", "Medieval Period", "Tudor Period"],
      correctAnswer: "Bronze Age",
      explanation: "The Bronze Age followed the Stone Age, characterized by the use of bronze for tools and weapons.",
      year: 4
    },
    {
      text: "Who built Hadrian's Wall?",
      options: ["The Vikings", "The Normans", "The Romans", "The Anglo-Saxons"],
      correctAnswer: "The Romans",
      explanation: "Hadrian's Wall was built by the Romans under Emperor Hadrian in 122 AD to mark the northern limit of Roman Britain.",
      year: 4
    },
    {
      text: "Which two houses fought in the Wars of the Roses?",
      options: ["York and Lancaster", "Tudor and Stuart", "Plantagenet and Windsor", "Hanover and Brunswick"],
      correctAnswer: "York and Lancaster",
      explanation: "The Wars of the Roses were fought between the House of York (white rose) and the House of Lancaster (red rose).",
      year: 4
    },
    {
      text: "What was the Black Death?",
      options: ["A battle", "A plague", "A king", "A castle"],
      correctAnswer: "A plague",
      explanation: "The Black Death was a devastating plague that killed about a third of Europe's population in the 14th century.",
      year: 4
    },
    {
      text: "Who was the first person to sail around the world?",
      options: ["Christopher Columbus", "James Cook", "Ferdinand Magellan", "Francis Drake"],
      correctAnswer: "Ferdinand Magellan",
      explanation: "Ferdinand Magellan led the first expedition to circumnavigate the globe, although he died before completing the journey.",
      year: 4
    },
    {
      text: "What was the Great Fire of London?",
      options: ["A celebration with fireworks", "A huge fire that destroyed much of London", "A military battle", "A political protest"],
      correctAnswer: "A huge fire that destroyed much of London",
      explanation: "The Great Fire of London in 1666 destroyed many parts of the city but also helped end the plague.",
      year: 4
    },
    {
      text: "Which famous building in London was used as a prison?",
      options: ["Buckingham Palace", "Tower of London", "Westminster Abbey", "St. Paul's Cathedral"],
      correctAnswer: "Tower of London",
      explanation: "The Tower of London served as a prison, especially for high-profile prisoners such as royalty.",
      year: 4
    },
    {
      text: "What ancient monument is found on Salisbury Plain in England?",
      options: ["Hadrian's Wall", "Stonehenge", "The Pyramids", "The Colosseum"],
      correctAnswer: "Stonehenge",
      explanation: "Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England.",
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
    difficulty: "easy",
    year: questions[index % questions.length].year
  };
});

export default easyHistoryQuestions;
