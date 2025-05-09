
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const easyGeographyQuestions: Question[] = Array.from({ length: 35 }, (_, index) => {
  const questions = [
    {
      text: "What is the capital city of England?",
      options: ["Manchester", "Birmingham", "London", "Liverpool"],
      correctAnswer: "London",
      explanation: "London is the capital and largest city of England and the United Kingdom.",
      year: 4
    },
    {
      text: "Which of these is NOT a country in the United Kingdom?",
      options: ["England", "Scotland", "Ireland", "Wales"],
      correctAnswer: "Ireland",
      explanation: "The United Kingdom consists of England, Scotland, Wales, and Northern Ireland. Ireland (officially the Republic of Ireland) is a separate country.",
      year: 4
    },
    {
      text: "Which ocean lies to the west of the United Kingdom?",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: "Atlantic Ocean",
      explanation: "The Atlantic Ocean lies to the west of the United Kingdom.",
      year: 4
    },
    {
      text: "Which is the longest river in the UK?",
      options: ["Thames", "Severn", "Trent", "Great Ouse"],
      correctAnswer: "Severn",
      explanation: "The River Severn is the longest river in the United Kingdom, at 220 miles (354 km) long.",
      year: 4
    },
    {
      text: "What is the name of the mountain range in Scotland?",
      options: ["Pennines", "Highlands", "Alps", "Pyrenees"],
      correctAnswer: "Highlands",
      explanation: "The Scottish Highlands form a mountainous region in northern Scotland.",
      year: 4
    },
    {
      text: "Which country is directly south of England?",
      options: ["Wales", "Scotland", "France", "Ireland"],
      correctAnswer: "France",
      explanation: "France is directly south of England, across the English Channel.",
      year: 4
    },
    {
      text: "Which of these cities is in Scotland?",
      options: ["Cardiff", "Belfast", "Edinburgh", "Dublin"],
      correctAnswer: "Edinburgh",
      explanation: "Edinburgh is the capital city of Scotland.",
      year: 4
    },
    {
      text: "Which is the largest country in the United Kingdom?",
      options: ["Scotland", "England", "Wales", "Northern Ireland"],
      correctAnswer: "England",
      explanation: "England is the largest country in the United Kingdom by both area and population.",
      year: 4
    },
    {
      text: "What do we call a piece of land surrounded by water on all sides?",
      options: ["Peninsula", "Island", "Coast", "Cape"],
      correctAnswer: "Island",
      explanation: "An island is a piece of land completely surrounded by water.",
      year: 4
    },
    {
      text: "What is the capital city of Wales?",
      options: ["Swansea", "Cardiff", "Newport", "Wrexham"],
      correctAnswer: "Cardiff",
      explanation: "Cardiff is the capital and largest city of Wales.",
      year: 4
    },
    {
      text: "Which sea lies between England and France?",
      options: ["North Sea", "Mediterranean Sea", "English Channel", "Irish Sea"],
      correctAnswer: "English Channel",
      explanation: "The English Channel separates southern England from northern France.",
      year: 4
    },
    {
      text: "What is the highest mountain in the UK?",
      options: ["Scafell Pike", "Snowdon", "Ben Nevis", "Slieve Donard"],
      correctAnswer: "Ben Nevis",
      explanation: "Ben Nevis in Scotland is the highest mountain in the UK at 1,345 meters (4,413 feet).",
      year: 4
    },
    {
      text: "What is the name of the river that flows through London?",
      options: ["Severn", "Thames", "Trent", "Mersey"],
      correctAnswer: "Thames",
      explanation: "The River Thames flows through London and is the longest river entirely in England.",
      year: 4
    },
    {
      text: "Which country is NOT part of the British Isles?",
      options: ["Ireland", "Scotland", "France", "Isle of Man"],
      correctAnswer: "France",
      explanation: "The British Isles is a geographical term which includes Great Britain, Ireland, and many smaller islands. France is on mainland Europe.",
      year: 4
    },
    {
      text: "What is the capital city of Northern Ireland?",
      options: ["Dublin", "Cork", "Belfast", "Londonderry"],
      correctAnswer: "Belfast",
      explanation: "Belfast is the capital and largest city of Northern Ireland.",
      year: 4
    },
    {
      text: "Which of these is a desert?",
      options: ["The Amazon", "The Sahara", "The Antarctic", "The Alps"],
      correctAnswer: "The Sahara",
      explanation: "The Sahara is the largest hot desert in the world, covering much of North Africa.",
      year: 4
    },
    {
      text: "What is the largest continent?",
      options: ["Europe", "North America", "Africa", "Asia"],
      correctAnswer: "Asia",
      explanation: "Asia is the largest continent by both land area and population.",
      year: 4
    },
    {
      text: "What do we call a point where a river flows into the sea?",
      options: ["Source", "Mouth", "Delta", "Tributary"],
      correctAnswer: "Mouth",
      explanation: "The mouth is where a river flows into another body of water, such as a sea, ocean, or lake.",
      year: 4
    },
    {
      text: "Where would you find the Lake District?",
      options: ["Scotland", "Northern England", "Wales", "Southern England"],
      correctAnswer: "Northern England",
      explanation: "The Lake District is a mountainous region in North West England, famous for its lakes and mountains.",
      year: 4
    },
    {
      text: "What is the largest ocean in the world?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      correctAnswer: "Pacific Ocean",
      explanation: "The Pacific Ocean is the largest and deepest ocean on Earth.",
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
    difficulty: "easy",
    year: questions[index % questions.length].year
  };
});

export default easyGeographyQuestions;
