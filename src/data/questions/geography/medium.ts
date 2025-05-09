
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const mediumGeographyQuestions: Question[] = Array.from({ length: 35 }, (_, index) => {
  const questions = [
    {
      text: "Which British city is known as the 'Steel City'?",
      options: ["Birmingham", "Manchester", "Sheffield", "Glasgow"],
      correctAnswer: "Sheffield",
      explanation: "Sheffield earned the nickname 'Steel City' due to its history of steel production dating back to the 18th century.",
      year: 4
    },
    {
      text: "What is the largest lake in the United Kingdom?",
      options: ["Loch Ness", "Loch Lomond", "Lake Windermere", "Loch Neagh"],
      correctAnswer: "Loch Neagh",
      explanation: "Loch Neagh in Northern Ireland is the largest lake in the United Kingdom by area.",
      year: 4
    },
    {
      text: "Which of these is NOT one of the four main compass directions?",
      options: ["North", "East", "Southwest", "West"],
      correctAnswer: "Southwest",
      explanation: "The four main compass directions are North, East, South, and West. Southwest is a secondary direction.",
      year: 4
    },
    {
      text: "Which mountain is the highest in the UK?",
      options: ["Ben Nevis", "Snowdon", "Scafell Pike", "Ben Macdui"],
      correctAnswer: "Ben Nevis",
      explanation: "Ben Nevis in Scotland is the highest mountain in the United Kingdom, with a summit of 1,345 meters (4,413 feet) above sea level.",
      year: 4
    },
    {
      text: "Which of these countries does NOT share a land border with the UK?",
      options: ["Scotland", "Wales", "Ireland", "France"],
      correctAnswer: "France",
      explanation: "France does not share a land border with the UK. They are separated by the English Channel. Scotland and Wales are part of the UK, and Northern Ireland (part of the UK) shares a border with the Republic of Ireland.",
      year: 4
    },
    {
      text: "What is the longest river in Ireland?",
      options: ["Liffey", "Shannon", "Boyne", "Barrow"],
      correctAnswer: "Shannon",
      explanation: "The River Shannon is the longest river in Ireland at 360.5 km (224 miles).",
      year: 4
    },
    {
      text: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correctAnswer: "Vatican City",
      explanation: "Vatican City is the smallest country in the world by both area (44 hectares) and population (about 825).",
      year: 4
    },
    {
      text: "Which English county is known as the 'Garden of England'?",
      options: ["Kent", "Essex", "Surrey", "Hampshire"],
      correctAnswer: "Kent",
      explanation: "Kent is known as the 'Garden of England' because of its abundance of orchards and hop gardens.",
      year: 4
    },
    {
      text: "What is the capital city of Scotland?",
      options: ["Glasgow", "Aberdeen", "Dundee", "Edinburgh"],
      correctAnswer: "Edinburgh",
      explanation: "Edinburgh is the capital city of Scotland and the seat of the Scottish Government.",
      year: 4
    },
    {
      text: "Which river flows through the city of York?",
      options: ["Thames", "Ouse", "Trent", "Avon"],
      correctAnswer: "Ouse",
      explanation: "The River Ouse flows through the city of York in North Yorkshire.",
      year: 4
    },
    {
      text: "What type of rock is formed by cooled lava?",
      options: ["Igneous", "Sedimentary", "Metamorphic", "Limestone"],
      correctAnswer: "Igneous",
      explanation: "Igneous rock is formed when molten rock (magma or lava) cools and solidifies.",
      year: 4
    },
    {
      text: "Which continent is the driest on Earth?",
      options: ["Africa", "Asia", "Australia", "Antarctica"],
      correctAnswer: "Antarctica",
      explanation: "Antarctica is the driest continent on Earth despite being covered in ice, as it receives very little precipitation.",
      year: 4
    },
    {
      text: "What is the name of the sea between Great Britain and Ireland?",
      options: ["Celtic Sea", "Irish Sea", "North Sea", "English Channel"],
      correctAnswer: "Irish Sea",
      explanation: "The Irish Sea lies between Great Britain and Ireland.",
      year: 4
    },
    {
      text: "Which UK city is famous for its university and is known as the 'City of Dreaming Spires'?",
      options: ["Cambridge", "Oxford", "Durham", "St Andrews"],
      correctAnswer: "Oxford",
      explanation: "Oxford is known as the 'City of Dreaming Spires' because of its beautiful university buildings with their spires and towers.",
      year: 4
    },
    {
      text: "What is the largest desert in the world?",
      options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Antarctic Desert"],
      correctAnswer: "Antarctic Desert",
      explanation: "The Antarctic Desert is the largest desert in the world. Many people think of the Sahara, but deserts are defined by precipitation, not temperature.",
      year: 4
    },
    {
      text: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: "Nile",
      explanation: "The Nile River is generally considered the longest river in the world, flowing for approximately 6,650 kilometers (4,130 miles).",
      year: 4
    },
    {
      text: "Which of these UK cities is furthest north?",
      options: ["Edinburgh", "Newcastle", "Glasgow", "Aberdeen"],
      correctAnswer: "Aberdeen",
      explanation: "Aberdeen is the furthest north of these four major UK cities.",
      year: 4
    },
    {
      text: "What is the Ring of Fire?",
      options: ["A ring of volcanoes around the Pacific Ocean", "A circle of fire in the Sahara Desert", "A ring of forest fires in Australia", "A circular lightning storm"],
      correctAnswer: "A ring of volcanoes around the Pacific Ocean",
      explanation: "The Ring of Fire is a region around the Pacific Ocean where many earthquakes and volcanic eruptions occur due to plate tectonics.",
      year: 4
    },
    {
      text: "Which mountain range runs down the spine of Italy?",
      options: ["Alps", "Pyrenees", "Apennines", "Carpathians"],
      correctAnswer: "Apennines",
      explanation: "The Apennines run down the spine of Italy, forming the Italian peninsula's backbone.",
      year: 4
    },
    {
      text: "What is the deepest point in the world's oceans?",
      options: ["Mariana Trench", "Tonga Trench", "Puerto Rico Trench", "Java Trench"],
      correctAnswer: "Mariana Trench",
      explanation: "The Mariana Trench in the western Pacific Ocean is the deepest known point in Earth's oceans, reaching about 10,994 meters (36,070 feet).",
      year: 4
    }
  ];

  // Create a circular reference to the questions array to repeat questions if needed
  return {
    id: uuidv4(),
    subject: "geography",
    text: questions[index % questions.length].text,
    options: questions[index % questions.length].options,
    correctAnswer: questions[index % questions.length].correctAnswer,
    explanation: questions[index % questions.length].explanation,
    difficulty: "medium",
    year: questions[index % questions.length].year
  };
});

export default mediumGeographyQuestions;
