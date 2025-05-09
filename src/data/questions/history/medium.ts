
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const mediumHistoryQuestions: Question[] = Array.from({ length: 35 }, (_, index) => {
  const questions = [
    {
      text: "During which period did the Great Fire of London occur?",
      options: ["Tudor period", "Stuart period", "Victorian era", "Georgian era"],
      correctAnswer: "Stuart period",
      explanation: "The Great Fire of London occurred in September 1666 during the Stuart period, during the reign of Charles II.",
      year: 4
    },
    {
      text: "Which king was executed at the end of the English Civil War?",
      options: ["Charles I", "James I", "Charles II", "Henry VIII"],
      correctAnswer: "Charles I",
      explanation: "King Charles I was executed by beheading in 1649 after being tried and convicted of high treason.",
      year: 4
    },
    {
      text: "What was the name of the disease that killed approximately one-third of Europe's population in the 14th century?",
      options: ["Smallpox", "The Black Death", "Cholera", "Yellow Fever"],
      correctAnswer: "The Black Death",
      explanation: "The Black Death (bubonic plague) devastated Europe between 1347 and 1351, killing about one-third of the population.",
      year: 4
    },
    {
      text: "What was the name of the ship that the Pilgrims sailed to America in 1620?",
      options: ["Santa Maria", "Mayflower", "Golden Hind", "Discovery"],
      correctAnswer: "Mayflower",
      explanation: "The Mayflower transported the first English Pilgrims from Plymouth, England to the New World in 1620.",
      year: 4
    },
    {
      text: "Which ancient civilization built Stonehenge?",
      options: ["Celts", "Romans", "Neolithic peoples", "Vikings"],
      correctAnswer: "Neolithic peoples",
      explanation: "Stonehenge was built by Neolithic peoples, with the earliest parts dated to around 3000 BCE.",
      year: 4
    },
    {
      text: "What was the name of Henry VIII's first wife?",
      options: ["Anne Boleyn", "Jane Seymour", "Catherine of Aragon", "Anne of Cleves"],
      correctAnswer: "Catherine of Aragon",
      explanation: "Catherine of Aragon was Henry VIII's first wife. Their marriage lasted from 1509 to 1533.",
      year: 4
    },
    {
      text: "Which Roman emperor visited Britain in 122 AD and ordered the construction of a wall?",
      options: ["Augustus", "Claudius", "Hadrian", "Constantine"],
      correctAnswer: "Hadrian",
      explanation: "Emperor Hadrian visited Britain in 122 AD and ordered the construction of Hadrian's Wall to mark the northern boundary of Roman Britain.",
      year: 4
    },
    {
      text: "What event marked the start of World War I?",
      options: ["The sinking of the Lusitania", "The assassination of Archduke Franz Ferdinand", "The invasion of Poland", "The Battle of the Somme"],
      correctAnswer: "The assassination of Archduke Franz Ferdinand",
      explanation: "World War I began after the assassination of Archduke Franz Ferdinand of Austria in June 1914.",
      year: 4
    },
    {
      text: "What was the main purpose of the Domesday Book?",
      options: ["To record religious texts", "To catalog the ownership of land and resources", "To list royal lineages", "To document criminal cases"],
      correctAnswer: "To catalog the ownership of land and resources",
      explanation: "The Domesday Book was commissioned by William the Conqueror in 1086 to assess the value and ownership of land and resources in England for taxation purposes.",
      year: 4
    },
    {
      text: "Which battle in 1066 resulted in William the Conqueror becoming King of England?",
      options: ["Battle of Hastings", "Battle of Stamford Bridge", "Battle of Bosworth Field", "Battle of Agincourt"],
      correctAnswer: "Battle of Hastings",
      explanation: "The Battle of Hastings in 1066 saw William of Normandy defeat King Harold II, leading to William becoming King of England.",
      year: 4
    },
    {
      text: "What period of British history is known for industrial and scientific progress?",
      options: ["Victorian era", "Tudor period", "Elizabethan era", "Georgian era"],
      correctAnswer: "Victorian era",
      explanation: "The Victorian era (1837-1901) saw significant industrial, scientific, political, and cultural progress in Britain.",
      year: 4
    },
    {
      text: "Which queen was known as 'Bloody Mary'?",
      options: ["Mary I", "Mary II", "Mary, Queen of Scots", "Queen Victoria"],
      correctAnswer: "Mary I",
      explanation: "Mary I was called 'Bloody Mary' due to her persecution of Protestants during her attempt to restore Catholicism in England.",
      year: 4
    },
    {
      text: "When did the Romans leave Britain?",
      options: ["43 AD", "410 AD", "1066 AD", "55 BC"],
      correctAnswer: "410 AD",
      explanation: "The Romans began to withdraw from Britain around 410 AD, marking the end of Roman Britain.",
      year: 4
    },
    {
      text: "Who led the Scottish forces against the English in the early 14th century?",
      options: ["William Wallace", "Robert the Bruce", "Mary, Queen of Scots", "Macbeth"],
      correctAnswer: "Robert the Bruce",
      explanation: "Robert the Bruce led Scottish forces against England, winning a significant victory at the Battle of Bannockburn in 1314.",
      year: 4
    },
    {
      text: "What was the name of the ship that Charles Darwin sailed on during his voyage of discovery?",
      options: ["Beagle", "Endeavour", "Victory", "Resolution"],
      correctAnswer: "Beagle",
      explanation: "Charles Darwin sailed on HMS Beagle for his five-year voyage, during which he developed his theory of evolution.",
      year: 4
    },
    {
      text: "What was the original purpose of Buckingham Palace?",
      options: ["A royal palace", "A private residence", "A government building", "A museum"],
      correctAnswer: "A private residence",
      explanation: "Buckingham Palace was originally built as a private residence for the Duke of Buckingham in 1703, before being acquired by the royal family.",
      year: 4
    },
    {
      text: "Which British monarch was on the throne during World War II?",
      options: ["Edward VIII", "George V", "George VI", "Elizabeth II"],
      correctAnswer: "George VI",
      explanation: "George VI was the King of the United Kingdom during World War II, reigning from 1936 until his death in 1952.",
      year: 4
    },
    {
      text: "What was the name of the plague that swept through London in 1665?",
      options: ["The Black Death", "The Great Plague", "The Spanish Flu", "Cholera Epidemic"],
      correctAnswer: "The Great Plague",
      explanation: "The Great Plague of London in 1665 was the last major epidemic of bubonic plague in England.",
      year: 4
    },
    {
      text: "Which civilization built the city of Troy?",
      options: ["Greeks", "Romans", "Egyptians", "Trojans"],
      correctAnswer: "Trojans",
      explanation: "Troy was built by the Trojans, who were an ancient people of northwest Anatolia (modern Turkey).",
      year: 4
    },
    {
      text: "Who founded the Church of England?",
      options: ["Henry VIII", "Elizabeth I", "Richard III", "James I"],
      correctAnswer: "Henry VIII",
      explanation: "Henry VIII founded the Church of England in the 1530s after his split with the Pope and the Roman Catholic Church.",
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
    difficulty: "medium",
    year: questions[index % questions.length].year
  };
});

export default mediumHistoryQuestions;
