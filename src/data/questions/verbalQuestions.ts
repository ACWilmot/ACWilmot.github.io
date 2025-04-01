
import { Question } from '@/types/questionTypes';

const verbalQuestions: Question[] = [
  {
    id: 'v1',
    subject: 'verbal',
    text: 'Choose the word that is most similar in meaning to "benevolent".',
    options: ['kind', 'strict', 'angry', 'confused'],
    correctAnswer: 'kind',
    explanation: 'Benevolent means kind or well-meaning.'
  },
  {
    id: 'v2',
    subject: 'verbal',
    text: 'Which word is the opposite of "abundant"?',
    options: ['scarce', 'plentiful', 'generous', 'ample'],
    correctAnswer: 'scarce',
    explanation: '"Abundant" means plentiful, so the opposite is "scarce", meaning insufficient or in short supply.'
  },
  {
    id: 'v3',
    subject: 'verbal',
    text: 'Complete the analogy: Hat is to head as shoe is to ___.',
    options: ['sock', 'foot', 'leather', 'walking'],
    correctAnswer: 'foot',
    explanation: 'A hat is worn on the head, and a shoe is worn on the foot. Both are clothing items for specific body parts.'
  },
  {
    id: 'v4',
    subject: 'verbal',
    text: 'Choose the word that means "to make something less severe".',
    options: ['mitigate', 'aggravate', 'intensify', 'incense'],
    correctAnswer: 'mitigate',
    explanation: 'Mitigate means to make something less severe, serious, or painful.'
  },
  {
    id: 'v5',
    subject: 'verbal',
    text: 'Which word completes this sequence: baby, child, adolescent, ___?',
    options: ['teenager', 'adult', 'senior', 'youth'],
    correctAnswer: 'adult',
    explanation: 'The sequence follows human life stages in chronological order: baby, child, adolescent, then adult.'
  },
  {
    id: 'v6',
    subject: 'verbal',
    text: 'What does the idiom "bite the bullet" mean?',
    options: ['To act impulsively', 'To face a difficult situation bravely', 'To speak rudely', 'To cause intentional harm'],
    correctAnswer: 'To face a difficult situation bravely',
    explanation: '"Bite the bullet" means to face a painful or difficult situation with courage.'
  },
  {
    id: 'v7',
    subject: 'verbal',
    text: 'Choose the word that best fits: "The detective found a ___ of evidence at the crime scene."',
    options: ['piece', 'morsel', 'wealth', 'fragment'],
    correctAnswer: 'wealth',
    explanation: '"Wealth of evidence" is the most appropriate phrase, meaning an abundance or large amount of evidence.'
  },
  {
    id: 'v8',
    subject: 'verbal',
    text: 'Complete the analogy: Author is to book as composer is to ___.',
    options: ['orchestra', 'music', 'piano', 'symphony'],
    correctAnswer: 'music',
    explanation: 'An author creates a book, and a composer creates music.'
  },
  {
    id: 'v9',
    subject: 'verbal',
    text: 'Which of these words is a synonym for "meticulous"?',
    options: ['careless', 'thorough', 'quick', 'vague'],
    correctAnswer: 'thorough',
    explanation: '"Meticulous" means showing great attention to detail, similar to "thorough".'
  },
  {
    id: 'v10',
    subject: 'verbal',
    text: 'Which word is spelled correctly?',
    options: ['recieve', 'acheive', 'deceive', 'beleive'],
    correctAnswer: 'deceive',
    explanation: 'Deceive is spelled correctly. The others should be "receive," "achieve," and "believe."'
  },
  {
    id: 'v11',
    subject: 'verbal',
    text: 'What does the idiom "barking up the wrong tree" mean?',
    options: ['Making noise for no reason', 'Pursuing a mistaken or misguided line of thought or course of action', 'Being annoying', 'Confronting someone aggressively'],
    correctAnswer: 'Pursuing a mistaken or misguided line of thought or course of action',
    explanation: '"Barking up the wrong tree" means to pursue a mistaken or misguided line of thought or course of action.'
  },
  {
    id: 'v12',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "Despite his ___ manner, he was actually very kind-hearted."',
    options: ['genial', 'gruff', 'compassionate', 'gentle'],
    correctAnswer: 'gruff',
    explanation: 'The sentence contrasts the person\'s external manner with their internal kindness, so "gruff" (rough or brusque in manner) creates the appropriate contrast.'
  },
  {
    id: 'v13',
    subject: 'verbal',
    text: 'Complete the analogy: Square is to cube as circle is to ___.',
    options: ['round', 'cylinder', 'sphere', 'oval'],
    correctAnswer: 'sphere',
    explanation: 'A square is a 2D shape and a cube is its 3D equivalent. Similarly, a circle is a 2D shape and a sphere is its 3D equivalent.'
  },
  {
    id: 'v14',
    subject: 'verbal',
    text: 'Which word means "to give up a position or power"?',
    options: ['abdicate', 'advocate', 'admonish', 'absolve'],
    correctAnswer: 'abdicate',
    explanation: '"Abdicate" means to formally give up a position of power or responsibility.'
  },
  {
    id: 'v15',
    subject: 'verbal',
    text: 'Choose the word that does NOT belong with the others:',
    options: ['oak', 'maple', 'pine', 'berry'],
    correctAnswer: 'berry',
    explanation: 'Oak, maple, and pine are all types of trees, while a berry is a type of fruit.'
  },
  {
    id: 'v16',
    subject: 'verbal',
    text: 'Complete the following proverb: "Don\'t put all your eggs in one ___."',
    options: ['carton', 'basket', 'box', 'container'],
    correctAnswer: 'basket',
    explanation: 'The proverb is "Don\'t put all your eggs in one basket," meaning don\'t risk everything on a single venture.'
  },
  {
    id: 'v17',
    subject: 'verbal',
    text: 'Which is the closest in meaning to "frugal"?',
    options: ['wasteful', 'economical', 'wealthy', 'generous'],
    correctAnswer: 'economical',
    explanation: '"Frugal" means being economical with money or food, similar to "economical".'
  },
  {
    id: 'v18',
    subject: 'verbal',
    text: 'Complete the analogy: Tile is to floor as ___ is to wall.',
    options: ['paint', 'brick', 'wallpaper', 'frame'],
    correctAnswer: 'wallpaper',
    explanation: 'Tile is a covering for a floor, and wallpaper is a covering for a wall.'
  },
  {
    id: 'v19',
    subject: 'verbal',
    text: 'Which word is an antonym for "transparent"?',
    options: ['clear', 'opaque', 'visible', 'obvious'],
    correctAnswer: 'opaque',
    explanation: '"Transparent" means allowing light to pass through so that objects behind can be distinctly seen. "Opaque" is the opposite, meaning not able to be seen through.'
  },
  {
    id: 'v20',
    subject: 'verbal',
    text: 'If "FRIEND" is coded as "GSJFOE", how would "ENEMY" be coded?',
    options: ['FOFNZ', 'FOFNX', 'FOFNB', 'FOFMZ'],
    correctAnswer: 'FOFNZ',
    explanation: 'Each letter in "FRIEND" is replaced with the next letter in the alphabet to get "GSJFOE". Using the same pattern for "ENEMY" gives "FOFNZ".'
  },
  {
    id: 'v21',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The mountain climber showed great ___ in the face of adversity."',
    options: ['fortitude', 'latitude', 'gratitude', 'solitude'],
    correctAnswer: 'fortitude',
    explanation: '"Fortitude" means courage in pain or adversity, making it the most appropriate word for this context.'
  },
  {
    id: 'v22',
    subject: 'verbal',
    text: 'What does the idiom "a dime a dozen" mean?',
    options: ['Very expensive', 'Quite rare', 'Very common', 'Excellent quality'],
    correctAnswer: 'Very common',
    explanation: 'The idiom "a dime a dozen" refers to something that is very common, ordinary, or of little value.'
  },
  {
    id: 'v23',
    subject: 'verbal',
    text: 'Complete the analogy: Optimistic is to cheerful as pessimistic is to ___.',
    options: ['happy', 'gloomy', 'realistic', 'careful'],
    correctAnswer: 'gloomy',
    explanation: 'Optimistic people tend to be cheerful, while pessimistic people tend to be gloomy or morose.'
  },
  {
    id: 'v24',
    subject: 'verbal',
    text: 'Which word is most closely associated with "democracy"?',
    options: ['monarchy', 'voting', 'dictatorship', 'anarchy'],
    correctAnswer: 'voting',
    explanation: 'Voting is a fundamental process in a democracy, where citizens elect representatives.'
  },
  {
    id: 'v25',
    subject: 'verbal',
    text: 'Choose the word that does NOT belong with the others:',
    options: ['violin', 'cello', 'piano', 'flute'],
    correctAnswer: 'flute',
    explanation: 'Violin, cello, and piano are all string instruments, while a flute is a wind instrument.'
  },
  {
    id: 'v26',
    subject: 'verbal',
    text: 'Complete the saying: "Actions speak louder than ___."',
    options: ['thoughts', 'words', 'intentions', 'feelings'],
    correctAnswer: 'words',
    explanation: 'The saying is "Actions speak louder than words," meaning what someone does is more significant than what they say.'
  },
  {
    id: 'v27',
    subject: 'verbal',
    text: 'Choose the word that means "to officially forbid something".',
    options: ['permit', 'allow', 'ban', 'encourage'],
    correctAnswer: 'ban',
    explanation: 'To "ban" something means to officially forbid or prohibit it.'
  },
  {
    id: 'v28',
    subject: 'verbal',
    text: 'Complete the analogy: Water is to swim as snow is to ___.',
    options: ['cold', 'ski', 'winter', 'white'],
    correctAnswer: 'ski',
    explanation: 'People swim in water and ski on snow. Both are activities done on specific mediums.'
  },
  {
    id: 'v29',
    subject: 'verbal',
    text: 'Which word is most similar in meaning to "obsolete"?',
    options: ['new', 'outdated', 'current', 'trendy'],
    correctAnswer: 'outdated',
    explanation: '"Obsolete" means no longer produced or used; out of date. "Outdated" has a similar meaning.'
  },
  {
    id: 'v30',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The archaeologist made a ___ discovery when she found the ancient tomb."',
    options: ['mundane', 'trivial', 'groundbreaking', 'minor'],
    correctAnswer: 'groundbreaking',
    explanation: '"Groundbreaking" means innovative or pioneering, which best describes an important archaeological discovery.'
  },
  {
    id: 'v31',
    subject: 'verbal',
    text: 'What does the phrase "beat around the bush" mean?',
    options: ['To search thoroughly', 'To avoid the main topic', 'To win easily', 'To create trouble'],
    correctAnswer: 'To avoid the main topic',
    explanation: '"Beat around the bush" means to avoid talking about what is important or getting to the point.'
  },
  {
    id: 'v32',
    subject: 'verbal',
    text: 'Complete the analogy: Doctor is to patient as teacher is to ___.',
    options: ['school', 'student', 'classroom', 'lesson'],
    correctAnswer: 'student',
    explanation: 'A doctor treats patients, and a teacher teaches students. Both involve a professional relationship with those receiving their services.'
  },
  {
    id: 'v33',
    subject: 'verbal',
    text: 'Which word is LEAST related to the others?',
    options: ['marathon', 'sprint', 'race', 'jog'],
    correctAnswer: 'jog',
    explanation: 'Marathon, sprint, and race are all forms of competitive running events, while jogging is typically done for exercise and is not competitive.'
  },
  {
    id: 'v34',
    subject: 'verbal',
    text: 'Choose the word that is the opposite of "concede".',
    options: ['admit', 'yield', 'resist', 'surrender'],
    correctAnswer: 'resist',
    explanation: 'To "concede" means to admit or acknowledge something, or to surrender. "Resist" is the opposite, meaning to withstand or oppose.'
  },
  {
    id: 'v35',
    subject: 'verbal',
    text: 'If "CAT" is coded as "DBU", how would "DOG" be coded?',
    options: ['EPG', 'FQI', 'EPH', 'EPI'],
    correctAnswer: 'EPH',
    explanation: 'In the code, each letter is replaced with the next letter in the alphabet. So C→D, A→B, T→U. Using the same pattern, D→E, O→P, G→H.'
  }
];

export default verbalQuestions;
