
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const hardGeographyQuestions: Question[] = Array.from({ length: 30 }, (_, index) => {
  const questions = [
    {
      text: "Which river flows through the city of York?",
      options: ["Thames", "Ouse", "Severn", "Trent"],
      correctAnswer: "Ouse",
      explanation: "The River Ouse flows through the city of York in North Yorkshire, England.",
      year: 4
    },
    {
      text: "Which county is known as the 'Garden of England'?",
      options: ["Surrey", "Devon", "Kent", "Hampshire"],
      correctAnswer: "Kent",
      explanation: "Kent is known as the 'Garden of England' because of its abundance of orchards and hop gardens.",
      year: 4
    },
    {
      text: "The Giant's Causeway is a natural landmark located in which part of the UK?",
      options: ["Scotland", "Wales", "England", "Northern Ireland"],
      correctAnswer: "Northern Ireland",
      explanation: "The Giant's Causeway is located in County Antrim on the northeast coast of Northern Ireland. It's a UNESCO World Heritage Site.",
      year: 4
    },
    {
      text: "Which British Overseas Territory is located at the southern tip of the Iberian Peninsula?",
      options: ["Gibraltar", "Falkland Islands", "Bermuda", "Cayman Islands"],
      correctAnswer: "Gibraltar",
      explanation: "Gibraltar is a British Overseas Territory located at the southern tip of the Iberian Peninsula, bordering Spain.",
      year: 4
    },
    {
      text: "What is the name of the strait that separates England from France?",
      options: ["Strait of Dover", "English Channel", "North Sea", "Irish Sea"],
      correctAnswer: "Strait of Dover",
      explanation: "The Strait of Dover is the narrowest part of the English Channel, separating Great Britain from continental Europe.",
      year: 4
    },
    {
      text: "Which mountain range contains Ben Nevis, the highest peak in the UK?",
      options: ["The Pennines", "The Grampians", "The Cairngorms", "The Cambrian Mountains"],
      correctAnswer: "The Grampians",
      explanation: "Ben Nevis is part of the Grampian Mountains in the Scottish Highlands.",
      year: 4
    },
    {
      text: "What is the largest National Park in the UK?",
      options: ["Lake District National Park", "Peak District National Park", "Cairngorms National Park", "Yorkshire Dales National Park"],
      correctAnswer: "Cairngorms National Park",
      explanation: "The Cairngorms National Park in Scotland is the largest national park in the UK, covering 4,528 square kilometres.",
      year: 4
    },
    {
      text: "Which UK city is located furthest west?",
      options: ["Glasgow", "Swansea", "Plymouth", "Bristol"],
      correctAnswer: "Swansea",
      explanation: "Of these cities, Swansea in Wales is located furthest west.",
      year: 4
    },
    {
      text: "The Solent separates which island from mainland England?",
      options: ["Isle of Man", "Isle of Wight", "Anglesey", "Jersey"],
      correctAnswer: "Isle of Wight",
      explanation: "The Solent is a strait separating the Isle of Wight from mainland England.",
      year: 4
    },
    {
      text: "Which famous chalk figure is carved into a hillside in Dorset?",
      options: ["Long Man of Wilmington", "Cerne Abbas Giant", "White Horse of Uffington", "Westbury White Horse"],
      correctAnswer: "Cerne Abbas Giant",
      explanation: "The Cerne Abbas Giant is a large hill figure in Dorset, England, depicting a standing naked man with a club.",
      year: 4
    },
    {
      text: "What is the name of the ancient monument in Wiltshire consisting of a ring of standing stones?",
      options: ["Hadrian's Wall", "Stonehenge", "Avebury", "Silbury Hill"],
      correctAnswer: "Stonehenge",
      explanation: "Stonehenge is a prehistoric monument in Wiltshire, England, consisting of a ring of standing stones.",
      year: 4
    },
    {
      text: "Which UK city is nicknamed the 'Granite City'?",
      options: ["Edinburgh", "Aberdeen", "Glasgow", "Inverness"],
      correctAnswer: "Aberdeen",
      explanation: "Aberdeen is known as the 'Granite City' because many of its buildings are made from locally-quarried grey granite.",
      year: 4
    },
    {
      text: "Which British city was heavily damaged by the 'Baedeker Raids' during World War II?",
      options: ["Bath", "Manchester", "Birmingham", "Sheffield"],
      correctAnswer: "Bath",
      explanation: "Bath was targeted in the 'Baedeker Raids', named after a German guidebook, which aimed to destroy culturally important British cities rather than military targets.",
      year: 4
    },
    {
      text: "What is the southernmost point of mainland Britain called?",
      options: ["Land's End", "Lizard Point", "Cape Cornwall", "Dunnet Head"],
      correctAnswer: "Lizard Point",
      explanation: "Lizard Point in Cornwall is the southernmost point of mainland Britain.",
      year: 4
    },
    {
      text: "The border between England and Scotland roughly follows which ancient Roman structure?",
      options: ["Hadrian's Wall", "Antonine Wall", "Offa's Dyke", "The Roman Road"],
      correctAnswer: "Hadrian's Wall",
      explanation: "Hadrian's Wall was built by the Romans across northern England, and parts of it are near the current England-Scotland border.",
      year: 4
    },
    {
      text: "What is the largest island in the Inner Hebrides?",
      options: ["Skye", "Mull", "Islay", "Jura"],
      correctAnswer: "Skye",
      explanation: "The Isle of Skye is the largest island in the Inner Hebrides of Scotland.",
      year: 4
    },
    {
      text: "Which mountain pass in the Lake District is known as the 'Hardknott Pass'?",
      options: ["Kirkstone Pass", "Wrynose Pass", "Honister Pass", "Hardknott Pass"],
      correctAnswer: "Hardknott Pass",
      explanation: "Hardknott Pass is one of the steepest and most challenging roads in the Lake District of Cumbria, England.",
      year: 4
    },
    {
      text: "Which former mining area in northern England is known as the 'Black Country'?",
      options: ["South Yorkshire", "Durham", "West Midlands", "Lancashire"],
      correctAnswer: "West Midlands",
      explanation: "The Black Country is an area of the West Midlands, England, named after the soot from heavy industries during the Industrial Revolution.",
      year: 4
    },
    {
      text: "Which royal residence is located in Berkshire?",
      options: ["Buckingham Palace", "Windsor Castle", "Sandringham House", "Balmoral Castle"],
      correctAnswer: "Windsor Castle",
      explanation: "Windsor Castle, one of the official residences of the British monarch, is located in the county of Berkshire, England.",
      year: 4
    },
    {
      text: "Which UK mountain is known as 'The Old Man of Coniston'?",
      options: ["Scafell Pike", "Coniston Old Man", "Helvellyn", "Skiddaw"],
      correctAnswer: "Coniston Old Man",
      explanation: "Coniston Old Man (often simply called The Old Man of Coniston) is a fell in the Furness Fells in the Lake District, England.",
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
    difficulty: "hard",
    year: questions[index % questions.length].year
  };
});

export default hardGeographyQuestions;
