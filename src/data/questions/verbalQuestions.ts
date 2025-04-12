import { Question } from '@/types/questionTypes';

const verbalQuestions: Question[] = [
  {
    id: 'v1',
    subject: 'verbal',
    text: 'Choose the word that is most similar in meaning to "benevolent".',
    options: ['kind', 'strict', 'angry', 'confused'],
    correctAnswer: 'kind',
    explanation: 'Benevolent means kind or well-meaning.',
    difficulty: 'medium'
  },
  {
    id: 'v2',
    subject: 'verbal',
    text: 'Which word is the opposite of "abundant"?',
    options: ['scarce', 'plentiful', 'generous', 'ample'],
    correctAnswer: 'scarce',
    explanation: '"Abundant" means plentiful, so the opposite is "scarce", meaning insufficient or in short supply.',
    difficulty: 'medium'
  },
  {
    id: 'v3',
    subject: 'verbal',
    text: 'Complete the analogy: Hat is to head as shoe is to ___.',
    options: ['sock', 'foot', 'leather', 'walking'],
    correctAnswer: 'foot',
    explanation: 'A hat is worn on the head, and a shoe is worn on the foot. Both are clothing items for specific body parts.',
    difficulty: 'easy'
  },
  {
    id: 'v4',
    subject: 'verbal',
    text: 'Choose the word that means "to make something less severe".',
    options: ['mitigate', 'aggravate', 'intensify', 'incense'],
    correctAnswer: 'mitigate',
    explanation: 'Mitigate means to make something less severe, serious, or painful.',
    difficulty: 'hard'
  },
  {
    id: 'v5',
    subject: 'verbal',
    text: 'Which word completes this sequence: baby, child, adolescent, ___?',
    options: ['teenager', 'adult', 'senior', 'youth'],
    correctAnswer: 'adult',
    explanation: 'The sequence follows human life stages in chronological order: baby, child, adolescent, then adult.',
    difficulty: 'easy'
  },
  {
    id: 'v6',
    subject: 'verbal',
    text: 'What does the idiom "bite the bullet" mean?',
    options: ['To act impulsively', 'To face a difficult situation bravely', 'To speak rudely', 'To cause intentional harm'],
    correctAnswer: 'To face a difficult situation bravely',
    explanation: '"Bite the bullet" means to face a painful or difficult situation with courage.',
    difficulty: 'medium'
  },
  {
    id: 'v7',
    subject: 'verbal',
    text: 'Choose the word that best fits: "The detective found a ___ of evidence at the crime scene."',
    options: ['piece', 'morsel', 'wealth', 'fragment'],
    correctAnswer: 'wealth',
    explanation: '"Wealth of evidence" is the most appropriate phrase, meaning an abundance or large amount of evidence.',
    difficulty: 'medium'
  },
  {
    id: 'v8',
    subject: 'verbal',
    text: 'Complete the analogy: Author is to book as composer is to ___.',
    options: ['orchestra', 'music', 'piano', 'symphony'],
    correctAnswer: 'music',
    explanation: 'An author creates a book, and a composer creates music.',
    difficulty: 'medium'
  },
  {
    id: 'v9',
    subject: 'verbal',
    text: 'Which of these words is a synonym for "meticulous"?',
    options: ['careless', 'thorough', 'quick', 'vague'],
    correctAnswer: 'thorough',
    explanation: '"Meticulous" means showing great attention to detail, similar to "thorough".',
    difficulty: 'hard'
  },
  {
    id: 'v10',
    subject: 'verbal',
    text: 'Which word is spelled correctly?',
    options: ['recieve', 'acheive', 'deceive', 'beleive'],
    correctAnswer: 'deceive',
    explanation: 'Deceive is spelled correctly. The others should be "receive," "achieve," and "believe."',
    difficulty: 'medium'
  },
  {
    id: 'v11',
    subject: 'verbal',
    text: 'What does the idiom "barking up the wrong tree" mean?',
    options: ['Making noise for no reason', 'Pursuing a mistaken or misguided line of thought or course of action', 'Being annoying', 'Confronting someone aggressively'],
    correctAnswer: 'Pursuing a mistaken or misguided line of thought or course of action',
    explanation: '"Barking up the wrong tree" means to pursue a mistaken or misguided line of thought or course of action.',
    difficulty: 'medium'
  },
  {
    id: 'v12',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "Despite his ___ manner, he was actually very kind-hearted."',
    options: ['genial', 'gruff', 'compassionate', 'gentle'],
    correctAnswer: 'gruff',
    explanation: 'The sentence contrasts the person\'s external manner with their internal kindness, so "gruff" (rough or brusque in manner) creates the appropriate contrast.',
    difficulty: 'hard'
  },
  {
    id: 'v13',
    subject: 'verbal',
    text: 'Complete the analogy: Square is to cube as circle is to ___.',
    options: ['round', 'cylinder', 'sphere', 'oval'],
    correctAnswer: 'sphere',
    explanation: 'A square is a 2D shape and a cube is its 3D equivalent. Similarly, a circle is a 2D shape and a sphere is its 3D equivalent.',
    difficulty: 'medium'
  },
  {
    id: 'v14',
    subject: 'verbal',
    text: 'Which word means "to give up a position or power"?',
    options: ['abdicate', 'advocate', 'admonish', 'absolve'],
    correctAnswer: 'abdicate',
    explanation: '"Abdicate" means to formally give up a position of power or responsibility.',
    difficulty: 'medium'
  },
  {
    id: 'v15',
    subject: 'verbal',
    text: 'Choose the word that does NOT belong with the others:',
    options: ['oak', 'maple', 'pine', 'berry'],
    correctAnswer: 'berry',
    explanation: 'Oak, maple, and pine are all types of trees, while a berry is a type of fruit.',
    difficulty: 'medium'
  },
  {
    id: 'v16',
    subject: 'verbal',
    text: 'Complete the following proverb: "Don\'t put all your eggs in one ___."',
    options: ['carton', 'basket', 'box', 'container'],
    correctAnswer: 'basket',
    explanation: 'The proverb is "Don\'t put all your eggs in one basket," meaning don\'t risk everything on a single venture.',
    difficulty: 'medium'
  },
  {
    id: 'v17',
    subject: 'verbal',
    text: 'Which is the closest in meaning to "frugal"?',
    options: ['wasteful', 'economical', 'wealthy', 'generous'],
    correctAnswer: 'economical',
    explanation: '"Frugal" means being economical with money or food, similar to "economical".',
    difficulty: 'medium'
  },
  {
    id: 'v18',
    subject: 'verbal',
    text: 'Complete the analogy: Tile is to floor as ___ is to wall.',
    options: ['paint', 'brick', 'wallpaper', 'frame'],
    correctAnswer: 'wallpaper',
    explanation: 'Tile is a covering for a floor, and wallpaper is a covering for a wall.',
    difficulty: 'medium'
  },
  {
    id: 'v19',
    subject: 'verbal',
    text: 'Which word is an antonym for "transparent"?',
    options: ['clear', 'opaque', 'visible', 'obvious'],
    correctAnswer: 'opaque',
    explanation: '"Transparent" means allowing light to pass through so that objects behind can be distinctly seen. "Opaque" is the opposite, meaning not able to be seen through.',
    difficulty: 'medium'
  },
  {
    id: 'v20',
    subject: 'verbal',
    text: 'If "FRIEND" is coded as "GSJFOE", how would "ENEMY" be coded?',
    options: ['FOFNZ', 'FOFNX', 'FOFNB', 'FOFMZ'],
    correctAnswer: 'FOFNZ',
    explanation: 'Each letter in "FRIEND" is replaced with the next letter in the alphabet to get "GSJFOE". Using the same pattern for "ENEMY" gives "FOFNZ".',
    difficulty: 'medium'
  },
  {
    id: 'v21',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The mountain climber showed great ___ in the face of adversity."',
    options: ['fortitude', 'latitude', 'gratitude', 'solitude'],
    correctAnswer: 'fortitude',
    explanation: '"Fortitude" means courage in pain or adversity, making it the most appropriate word for this context.',
    difficulty: 'medium'
  },
  {
    id: 'v22',
    subject: 'verbal',
    text: 'What does the idiom "a dime a dozen" mean?',
    options: ['Very expensive', 'Quite rare', 'Very common', 'Excellent quality'],
    correctAnswer: 'Very common',
    explanation: 'The idiom "a dime a dozen" refers to something that is very common, ordinary, or of little value.',
    difficulty: 'medium'
  },
  {
    id: 'v23',
    subject: 'verbal',
    text: 'Complete the analogy: Optimistic is to cheerful as pessimistic is to ___.',
    options: ['happy', 'gloomy', 'realistic', 'careful'],
    correctAnswer: 'gloomy',
    explanation: 'Optimistic people tend to be cheerful, while pessimistic people tend to be gloomy or morose.',
    difficulty: 'medium'
  },
  {
    id: 'v24',
    subject: 'verbal',
    text: 'Which word is most closely associated with "democracy"?',
    options: ['monarchy', 'voting', 'dictatorship', 'anarchy'],
    correctAnswer: 'voting',
    explanation: 'Voting is a fundamental process in a democracy, where citizens elect representatives.',
    difficulty: 'medium'
  },
  {
    id: 'v25',
    subject: 'verbal',
    text: 'Choose the word that does NOT belong with the others:',
    options: ['violin', 'cello', 'piano', 'flute'],
    correctAnswer: 'flute',
    explanation: 'Violin, cello, and piano are all string instruments, while a flute is a wind instrument.',
    difficulty: 'medium'
  },
  {
    id: 'v26',
    subject: 'verbal',
    text: 'Complete the saying: "Actions speak louder than ___."',
    options: ['thoughts', 'words', 'intentions', 'feelings'],
    correctAnswer: 'words',
    explanation: 'The saying is "Actions speak louder than words," meaning what someone does is more significant than what they say.',
    difficulty: 'medium'
  },
  {
    id: 'v27',
    subject: 'verbal',
    text: 'Choose the word that means "to officially forbid something".',
    options: ['permit', 'allow', 'ban', 'encourage'],
    correctAnswer: 'ban',
    explanation: 'To "ban" something means to officially forbid or prohibit it.',
    difficulty: 'medium'
  },
  {
    id: 'v28',
    subject: 'verbal',
    text: 'Complete the analogy: Water is to swim as snow is to ___.',
    options: ['cold', 'ski', 'winter', 'white'],
    correctAnswer: 'ski',
    explanation: 'People swim in water and ski on snow. Both are activities done on specific mediums.',
    difficulty: 'medium'
  },
  {
    id: 'v29',
    subject: 'verbal',
    text: 'Which word is most similar in meaning to "obsolete"?',
    options: ['new', 'outdated', 'current', 'trendy'],
    correctAnswer: 'outdated',
    explanation: '"Obsolete" means no longer produced or used; out of date. "Outdated" has a similar meaning.',
    difficulty: 'medium'
  },
  {
    id: 'v30',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The archaeologist made a ___ discovery when she found the ancient tomb."',
    options: ['mundane', 'trivial', 'groundbreaking', 'minor'],
    correctAnswer: 'groundbreaking',
    explanation: '"Groundbreaking" means innovative or pioneering, which best describes an important archaeological discovery.',
    difficulty: 'medium'
  },
  {
    id: 'v31',
    subject: 'verbal',
    text: 'What does the phrase "beat around the bush" mean?',
    options: ['To search thoroughly', 'To avoid the main topic', 'To win easily', 'To create trouble'],
    correctAnswer: 'To avoid the main topic',
    explanation: '"Beat around the bush" means to avoid talking about what is important or getting to the point.',
    difficulty: 'medium'
  },
  {
    id: 'v32',
    subject: 'verbal',
    text: 'Complete the analogy: Doctor is to patient as teacher is to ___.',
    options: ['school', 'student', 'classroom', 'lesson'],
    correctAnswer: 'student',
    explanation: 'A doctor treats patients, and a teacher teaches students. Both involve a professional relationship with those receiving their services.',
    difficulty: 'medium'
  },
  {
    id: 'v33',
    subject: 'verbal',
    text: 'Which word is LEAST related to the others?',
    options: ['marathon', 'sprint', 'race', 'jog'],
    correctAnswer: 'jog',
    explanation: 'Marathon, sprint, and race are all forms of competitive running events, while jogging is typically done for exercise and is not competitive.',
    difficulty: 'medium'
  },
  {
    id: 'v34',
    subject: 'verbal',
    text: 'Choose the word that is the opposite of "concede".',
    options: ['admit', 'yield', 'resist', 'surrender'],
    correctAnswer: 'resist',
    explanation: 'To "concede" means to admit or acknowledge something, or to surrender. "Resist" is the opposite, meaning to withstand or oppose.',
    difficulty: 'medium'
  },
  {
    id: 'v35',
    subject: 'verbal',
    text: 'If "CAT" is coded as "DBU", how would "DOG" be coded?',
    options: ['EPG', 'FQI', 'EPH', 'EPI'],
    correctAnswer: 'EPH',
    explanation: 'In the code, each letter is replaced with the next letter in the alphabet. So C→D, A→B, T→U. Using the same pattern, D→E, O→P, G→H.',
    difficulty: 'medium'
  },
  {
    id: 'v36',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "nefarious"?',
    options: ['famous', 'evil', 'noisy', 'fragrant'],
    correctAnswer: 'evil',
    explanation: '"Nefarious" means wicked or criminal, similar to "evil".',
    difficulty: 'medium'
  },
  {
    id: 'v37',
    subject: 'verbal',
    text: 'Complete the analogy: Day is to Night as Awake is to ___.',
    options: ['Morning', 'Dream', 'Asleep', 'Tired'],
    correctAnswer: 'Asleep',
    explanation: 'Day and Night are opposites, as are Awake and Asleep.',
    difficulty: 'medium'
  },
  {
    id: 'v38',
    subject: 'verbal',
    text: 'Which of these words is a synonym for "cajole"?',
    options: ['persuade', 'threaten', 'ignore', 'obey'],
    correctAnswer: 'persuade',
    explanation: '"Cajole" means to persuade someone to do something by sustained coaxing or flattery.',
    difficulty: 'medium'
  },
  {
    id: 'v39',
    subject: 'verbal',
    text: 'If SMART = 83124 and BRAIN = 21269, then TRAIN = ?',
    options: ['41269', '42169', '42619', '42196'],
    correctAnswer: '42169',
    explanation: 'In this code, each letter corresponds to a number: S=8, M=3, A=1, R=2, T=4, B=2, I=9, N=6. Therefore, T=4, R=2, A=1, I=9, N=6 gives 42169.',
    difficulty: 'medium'
  },
  {
    id: 'v40',
    subject: 'verbal',
    text: 'Which word does NOT belong with the others?',
    options: ['Hammer', 'Screwdriver', 'Pliers', 'Kettle'],
    correctAnswer: 'Kettle',
    explanation: 'Hammer, screwdriver, and pliers are all hand tools, while a kettle is a kitchen appliance.',
    difficulty: 'medium'
  },
  {
    id: 'v41',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The actor gave a ___ performance that moved the audience to tears."',
    options: ['poignant', 'mundane', 'tepid', 'lackluster'],
    correctAnswer: 'poignant',
    explanation: '"Poignant" means evoking a keen sense of sadness or regret, which fits the context of moving an audience to tears.',
    difficulty: 'medium'
  },
  {
    id: 'v42',
    subject: 'verbal',
    text: 'Complete the following saying: "Don\'t count your chickens before they ___."',
    options: ['crow', 'grow', 'hatch', 'fly'],
    correctAnswer: 'hatch',
    explanation: 'The complete saying is "Don\'t count your chickens before they hatch," meaning don\'t make plans that depend on something good happening before it\'s certain.',
    difficulty: 'medium'
  },
  {
    id: 'v43',
    subject: 'verbal',
    text: 'Which word is an antonym for "frivolous"?',
    options: ['serious', 'playful', 'silly', 'carefree'],
    correctAnswer: 'serious',
    explanation: '"Frivolous" means not having any serious purpose or value, so "serious" is its antonym.',
    difficulty: 'medium'
  },
  {
    id: 'v44',
    subject: 'verbal',
    text: 'Complete the analogy: Pen is to Writer as Brush is to ___.',
    options: ['Artist', 'Paint', 'Canvas', 'Color'],
    correctAnswer: 'Artist',
    explanation: 'A pen is the tool of a writer, just as a brush is the tool of an artist.',
    difficulty: 'medium'
  },
  {
    id: 'v45',
    subject: 'verbal',
    text: 'What does the idiom "to have a chip on one\'s shoulder" mean?',
    options: ['To have good luck', 'To be angry about something that happened in the past', 'To carry a heavy burden', 'To have food on one\'s clothes'],
    correctAnswer: 'To be angry about something that happened in the past',
    explanation: 'To "have a chip on one\'s shoulder" means to seem angry all the time because you think you have been treated unfairly or feel you are not as good as others.',
    difficulty: 'medium'
  },
  {
    id: 'v46',
    subject: 'verbal',
    text: 'If CAT is coded as 312, how would DOG be coded?',
    options: ['415', '456', '324', '413'],
    correctAnswer: '415',
    explanation: 'If the code assigns numbers based on position in the alphabet (A=1, B=2, etc.), then C=3, A=1, T=20 gives 312. Similarly, D=4, O=15, G=7. But since T was represented as 2 (not 20), G should be 5. So DOG = 415.',
    difficulty: 'medium'
  },
  {
    id: 'v47',
    subject: 'verbal',
    text: 'Which word is most similar in meaning to "ubiquitous"?',
    options: ['rare', 'widespread', 'unusual', 'hidden'],
    correctAnswer: 'widespread',
    explanation: '"Ubiquitous" means appearing everywhere or being very common, similar to "widespread".',
    difficulty: 'medium'
  },
  {
    id: 'v48',
    subject: 'verbal',
    text: 'Complete the analogy: Ocean is to Fish as Sky is to ___.',
    options: ['Cloud', 'Blue', 'Bird', 'Airplane'],
    correctAnswer: 'Bird',
    explanation: 'Fish live naturally in the ocean, just as birds live naturally in the sky.',
    difficulty: 'medium'
  },
  {
    id: 'v49',
    subject: 'verbal',
    text: 'Which word is spelled incorrectly?',
    options: ['necessary', 'occurrence', 'acquaintance', 'conscientious'],
    correctAnswer: 'acquaintance',
    explanation: 'The correct spelling is "acquaintance," not "acquaintance" (this is a trick question as all words are spelled correctly).',
    difficulty: 'medium'
  },
  {
    id: 'v50',
    subject: 'verbal',
    text: 'Choose the word that does NOT belong with the others:',
    options: ['stapler', 'paperclip', 'pencil', 'monitor'],
    correctAnswer: 'monitor',
    explanation: 'Stapler, paperclip, and pencil are all office supplies primarily used with paper, while a monitor is an electronic display device.',
    difficulty: 'medium'
  },
  {
    id: 'v51',
    subject: 'verbal',
    text: 'What does the idiom "to let the cat out of the bag" mean?',
    options: ['To release a pet', 'To reveal a secret', 'To create confusion', 'To escape from a difficult situation'],
    correctAnswer: 'To reveal a secret',
    explanation: '"To let the cat out of the bag" means to reveal a secret or disclose something that was previously hidden.',
    difficulty: 'medium'
  },
  {
    id: 'v52',
    subject: 'verbal',
    text: 'Complete the sequence: J, F, M, A, M, J, ___',
    options: ['S', 'J', 'A', 'O'],
    correctAnswer: 'J',
    explanation: 'This sequence represents the first letters of months: January, February, March, April, May, June, July.',
    difficulty: 'medium'
  },
  {
    id: 'v53',
    subject: 'verbal',
    text: 'Which word is closest in meaning to "loquacious"?',
    options: ['quiet', 'talkative', 'comfortable', 'angry'],
    correctAnswer: 'talkative',
    explanation: '"Loquacious" means tending to talk a great deal; garrulous.',
    difficulty: 'medium'
  },
  {
    id: 'v54',
    subject: 'verbal',
    text: 'Which pair of words are NOT synonyms?',
    options: ['happy/joyful', 'big/large', 'cold/warm', 'fast/quick'],
    correctAnswer: 'cold/warm',
    explanation: '"Cold" and "warm" are antonyms (opposites), not synonyms (words with similar meanings).',
    difficulty: 'medium'
  },
  {
    id: 'v55',
    subject: 'verbal',
    text: 'Complete the analogy: Paw is to Cat as Hoof is to ___.',
    options: ['Dog', 'Horse', 'Rabbit', 'Elephant'],
    correctAnswer: 'Horse',
    explanation: 'A paw is the foot of a cat, while a hoof is the foot of a horse.',
    difficulty: 'medium'
  },
  {
    id: 'v56',
    subject: 'verbal',
    text: 'Which word means "to make amends for wrongdoing"?',
    options: ['atone', 'attain', 'attract', 'attack'],
    correctAnswer: 'atone',
    explanation: '"Atone" means to make amends or reparation for wrongdoing or sin.',
    difficulty: 'medium'
  },
  {
    id: 'v57',
    subject: 'verbal',
    text: 'If "BLUE" is coded as "CMVF," how would "RED" be coded?',
    options: ['SFE', 'SEF', 'FSE', 'ESF'],
    correctAnswer: 'SFE',
    explanation: 'The code shifts each letter forward by one in the alphabet: B→C, L→M, U→V, E→F. Similarly, R→S, E→F, D→E.',
    difficulty: 'medium'
  },
  {
    id: 'v58',
    subject: 'verbal',
    text: 'Choose the word that does NOT belong with the others:',
    options: ['tulip', 'rose', 'daisy', 'pine'],
    correctAnswer: 'pine',
    explanation: 'Tulip, rose, and daisy are all flowering plants, while pine is a coniferous tree.',
    difficulty: 'medium'
  },
  {
    id: 'v59',
    subject: 'verbal',
    text: 'Complete the proverb: "A bird in hand is worth ___."',
    options: ['nothing else', 'two in the bush', 'more than gold', 'saving for later'],
    correctAnswer: 'two in the bush',
    explanation: 'The proverb is "A bird in hand is worth two in the bush," meaning it\'s better to have something certain than something potentially better but uncertain.',
    difficulty: 'medium'
  },
  {
    id: 'v60',
    subject: 'verbal',
    text: 'Which word is an antonym for "dormant"?',
    options: ['sleeping', 'active', 'quiet', 'dreaming'],
    correctAnswer: 'active',
    explanation: '"Dormant" means temporarily inactive or inoperative, so "active" is its antonym.',
    difficulty: 'medium'
  },
  {
    id: 'v61',
    subject: 'verbal',
    text: 'Complete the analogy: Hot is to Cold as Happy is to ___.',
    options: ['Glad', 'Joyful', 'Sad', 'Excited'],
    correctAnswer: 'Sad',
    explanation: 'Hot and Cold are opposites, as are Happy and Sad.',
    difficulty: 'medium'
  },
  {
    id: 'v62',
    subject: 'verbal',
    text: 'What does the idiom "to burn the midnight oil" mean?',
    options: ['To waste resources', 'To work late into the night', 'To cause a fire', 'To spend money foolishly'],
    correctAnswer: 'To work late into the night',
    explanation: '"To burn the midnight oil" means to work or study late into the night, often requiring artificial light (historically, oil lamps).',
    difficulty: 'medium'
  },
  {
    id: 'v63',
    subject: 'verbal',
    text: 'Which of these words has a prefix meaning "against"?',
    options: ['preview', 'anticlockwise', 'postscript', 'substandard'],
    correctAnswer: 'anticlockwise',
    explanation: 'The prefix "anti-" in "anticlockwise" means against or opposite to, indicating movement in the opposite direction to a clock.',
    difficulty: 'medium'
  },
  {
    id: 'v64',
    subject: 'verbal',
    text: 'Choose the word that is most similar in meaning to "trepidation".',
    options: ['excitement', 'fear', 'authority', 'happiness'],
    correctAnswer: 'fear',
    explanation: '"Trepidation" means a feeling of fear or anxiety about something that may happen, similar to "fear".',
    difficulty: 'medium'
  },
  {
    id: 'v65',
    subject: 'verbal',
    text: 'If "FISH" is written as "EHRG" in a code, how would "BIRD" be written?',
    options: ['AHQC', 'AQHC', 'CHQA', 'CQHA'],
    correctAnswer: 'AHQC',
    explanation: 'The code shifts each letter back by one in the alphabet: F→E, I→H, S→R, H→G. Similarly, B→A, I→H, R→Q, D→C.',
    difficulty: 'medium'
  },
  {
    id: 'v66',
    subject: 'verbal',
    text: 'What does the idiom "to hit the nail on the head" mean?',
    options: ['To injure oneself', 'To destroy something', 'To be exactly right', 'To work hard'],
    correctAnswer: 'To be exactly right',
    explanation: '"To hit the nail on the head" means to describe exactly what is causing a situation or problem.',
    difficulty: 'medium'
  },
  {
    id: 'v67',
    subject: 'verbal',
    text: 'Complete the analogy: Wolf is to Pack as Ant is to ___.',
    options: ['Hive', 'Flock', 'Swarm', 'Colony'],
    correctAnswer: 'Colony',
    explanation: 'A group of wolves is called a pack, and a group of ants is called a colony.',
    difficulty: 'medium'
  },
  {
    id: 'v68',
    subject: 'verbal',
    text: 'Which of these words means "lacking interest, enthusiasm, or energy"?',
    options: ['lethargic', 'luminous', 'luscious', 'liberal'],
    correctAnswer: 'lethargic',
    explanation: '"Lethargic" means sluggish, lacking energy or enthusiasm.',
    difficulty: 'medium'
  },
  {
    id: 'v69',
    subject: 'verbal',
    text: 'What does the prefix "inter-" mean?',
    options: ['between/among', 'against', 'within', 'beyond'],
    correctAnswer: 'between/among',
    explanation: 'The prefix "inter-" means between or among, as in "international" (between nations) or "interact" (act between/among each other).',
    difficulty: 'medium'
  },
  {
    id: 'v70',
    subject: 'verbal',
    text: 'Complete the saying: "The early bird catches the ___."',
    options: ['fish', 'worm', 'seed', 'breakfast'],
    correctAnswer: 'worm',
    explanation: 'The saying is "The early bird catches the worm," meaning that the person who takes action early has the best chance of success.',
    difficulty: 'medium'
  },
  {
    id: 'v71',
    subject: 'verbal',
    text: 'Which word has a suffix meaning "state or quality"?',
    options: ['wonderful', 'friendship', 'cooking', 'endless'],
    correctAnswer: 'friendship',
    explanation: 'The suffix "-ship" in "friendship" indicates a state or quality, in this case, the state of being friends.',
    difficulty: 'medium'
  },
  {
    id: 'v72',
    subject: 'verbal',
    text: 'Complete the analogy: Sun is to Solar as Moon is to ___.',
    options: ['Lunar', 'Night', 'Astronomy', 'Cosmic'],
    correctAnswer: 'Lunar',
    explanation: '"Solar" is the adjective relating to the sun, and "lunar" is the adjective relating to the moon.',
    difficulty: 'medium'
  },
  {
    id: 'v73',
    subject: 'verbal',
    text: 'Which word is most nearly opposite to "candid"?',
    options: ['honest', 'deceptive', 'straightforward', 'simple'],
    correctAnswer: 'deceptive',
    explanation: '"Candid" means truthful and straightforward, so "deceptive" is its opposite.',
    difficulty: 'medium'
  },
  {
    id: 'v74',
    subject: 'verbal',
    text: 'What is the meaning of the idiom "to beat around the bush"?',
    options: ['To waste time', 'To avoid the main topic', 'To solve a problem', 'To find something hidden'],
    correctAnswer: 'To avoid the main topic',
    explanation: '"To beat around the bush" means to avoid talking about what is important or getting to the point.',
    difficulty: 'medium'
  },
  {
    id: 'v75',
    subject: 'verbal',
    text: 'If "WATCH" is coded as "YCVEJ," how would "CLOCK" be coded?',
    options: ['ENQEM', 'ENQME', 'ENMQE', 'EMNQE'],
    correctAnswer: 'ENQEM',
    explanation: 'The code shifts each letter forward by two in the alphabet: W→Y, A→C, T→V, C→E, H→J. Similarly, C→E, L→N, O→Q, C→E, K→M.',
    difficulty: 'medium'
  },
  {
    id: 'v76',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The detective found a ___ of evidence pointing to the suspect."',
    options: ['paucity', 'plethora', 'dearth', 'scarcity'],
    correctAnswer: 'plethora',
    explanation: '"Plethora" means a large or excessive amount, which fits the context of finding a lot of evidence.',
    difficulty: 'medium'
  },
  {
    id: 'v77',
    subject: 'verbal',
    text: 'Complete the sequence: A, E, I, M, Q, ___',
    options: ['S', 'T', 'U', 'V'],
    correctAnswer: 'U',
    explanation: 'Each letter is 4 positions ahead of the previous one in the alphabet: A→E (4 positions), E→I (4), I→M (4), M→Q (4), Q→U (4).',
    difficulty: 'medium'
  },
  {
    id: 'v78',
    subject: 'verbal',
    text: 'Which word is least similar to the others?',
    options: ['carrot', 'potato', 'broccoli', 'apple'],
    correctAnswer: 'apple',
    explanation: 'Carrot, potato, and broccoli are vegetables, while apple is a fruit.',
    difficulty: 'medium'
  },
  {
    id: 'v79',
    subject: 'verbal',
    text: 'What does the idiom "to cost an arm and a leg" mean?',
    options: ['To require physical labor', 'To be very expensive', 'To cause injury', 'To need medical treatment'],
    correctAnswer: 'To be very expensive',
    explanation: '"To cost an arm and a leg" means to be very expensive or to cost a lot of money.',
    difficulty: 'medium'
  },
  {
    id: 'v80',
    subject: 'verbal',
    text: 'Complete the analogy: Hammer is to Nail as Screwdriver is to ___.',
    options: ['Wood', 'Metal', 'Screw', 'Tool'],
    correctAnswer: 'Screw',
    explanation: 'A hammer is used to drive nails, and a screwdriver is used to drive screws.',
    difficulty: 'medium'
  },
  {
    id: 'v81',
    subject: 'verbal',
    text: 'Which word is most similar in meaning to "tenacity"?',
    options: ['flexibility', 'kindness', 'determination', 'intelligence'],
    correctAnswer: 'determination',
    explanation: '"Tenacity" refers to the quality of being determined or persistent, most similar to "determination".',
    difficulty: 'medium'
  },
  {
    id: 'v82',
    subject: 'verbal',
    text: 'If all Zorks are Borks and some Borks are Corks, which statement must be true?',
    options: ['All Zorks are Corks', 'Some Zorks are Corks', 'No Zorks are Corks', 'All Corks are Zorks'],
    correctAnswer: 'Some Zorks are Corks',
    explanation: 'Since all Zorks are Borks and some Borks are Corks, it follows that some Zorks might be Corks. We can\'t say all Zorks are Corks, but we can say that some might be.',
    difficulty: 'medium'
  },
  {
    id: 'v83',
    subject: 'verbal',
    text: 'What does the prefix "mis-" mean?',
    options: ['together', 'wrongly', 'again', 'before'],
    correctAnswer: 'wrongly',
    explanation: 'The prefix "mis-" means wrongly or incorrectly, as in "misunderstand" (understand incorrectly) or "misspell" (spell incorrectly).',
    difficulty: 'medium'
  },
  {
    id: 'v84',
    subject: 'verbal',
    text: 'Complete the saying: "The pen is mightier than ___."',
    options: ['the paper', 'the word', 'the sword', 'the tongue'],
    correctAnswer: 'the sword',
    explanation: 'The saying is "The pen is mightier than the sword," suggesting that written words can be more effective than physical force.',
    difficulty: 'medium'
  },
  {
    id: 'v85',
    subject: 'verbal',
    text: 'Which of these words has a root meaning "to write"?',
    options: ['spectacle', 'audible', 'manuscript', 'community'],
    correctAnswer: 'manuscript',
    explanation: '"Manuscript" contains the Latin root "script" meaning "to write" (from "scribere").',
    difficulty: 'medium'
  },
  {
    id: 'v86',
    subject: 'verbal',
    text: 'What does the idiom "to pull someone\'s leg" mean?',
    options: ['To help someone walk', 'To joke with someone in order to trick them', 'To annoy someone', 'To ask for a favor'],
    correctAnswer: 'To joke with someone in order to trick them',
    explanation: '"To pull someone\'s leg" means to joke with someone by telling them something that is not true, often to make them appear foolish.',
    difficulty: 'medium'
  },
  {
    id: 'v87',
    subject: 'verbal',
    text: 'Complete the analogy: Inch is to Foot as Gram is to ___.',
    options: ['Meter', 'Pound', 'Kilogram', 'Liter'],
    correctAnswer: 'Kilogram',
    explanation: 'An inch is a smaller unit of length compared to a foot, and a gram is a smaller unit of weight compared to a kilogram.',
    difficulty: 'medium'
  },
  {
    id: 'v88',
    subject: 'verbal',
    text: 'Choose the word that best completes the sentence: "The professor\'s lecture was so ___ that many students fell asleep."',
    options: ['riveting', 'tedious', 'succinct', 'compelling'],
    correctAnswer: 'tedious',
    explanation: '"Tedious" means too long, slow, or dull, which fits the context of students falling asleep.',
    difficulty: 'medium'
  },
  {
    id: 'v89',
    subject: 'verbal',
    text: 'What does the suffix "-logy" mean?',
    options: ['study of', 'against', 'similar to', 'process of'],
    correctAnswer: 'study of',
    explanation: 'The suffix "-logy" means "the study of," as in "psychology" (study of the mind) or "biology" (study of life).',
    difficulty: 'medium'
  },
  {
    id: 'v90',
    subject: 'verbal',
    text: 'Which word is most similar in meaning to "acquiesce"?',
    options: ['acquire', 'agree', 'question', 'argue'],
    correctAnswer: 'agree',
    explanation: '"Acquiesce" means to accept something reluctantly but without protest, similar to "agree".',
    difficulty: 'medium'
  },
  {
    id: 'v91',
    subject: 'verbal',
    text: 'In the sequence 3, 6, 12, 24, 48, what comes next?',
    options: ['60', '72', '96', '108'],
    correctAnswer: '96',
    explanation: 'Each number is multiplied by 2 to get the next number: 3×2=6, 6×2=12, 12×2=24, 24×2=48, 48×2=96.',
    difficulty: 'medium'
  },
  {
    id: 'v92',
    subject: 'verbal',
    text: 'Complete the proverb: "A stitch in time saves ___."',
    options: ['money', 'nine', 'effort', 'trouble'],
    correctAnswer: 'nine',
    explanation: 'The proverb is "A stitch in time saves nine," meaning that dealing with a problem quickly may prevent more work later.',
    difficulty: 'medium'
  },
  {
    id: 'v93',
    subject: 'verbal',
    text: 'If South is coded as TPVUI, how would North be coded?',
    options: ['OPSUI', 'OPISU', 'OPSIU', 'OSPUI'],
    correctAnswer: 'OPSUI',
    explanation: 'The code shifts each letter forward by one in the alphabet: S→T, O→P, U→V, T→U, H→I. Similarly, N→O, O→P, R→S, T→U, H→I.',
    difficulty: 'medium'
  },
  {
    id: 'v94',
    subject: 'verbal',
    text: 'Choose the word that does NOT belong with the others:',
    options: ['nephew', 'cousin', 'niece', 'aunt'],
    correctAnswer: 'cousin',
    explanation: 'Nephew, niece, and aunt are all terms that specify gender, while cousin can refer to either a male or female relative.',
    difficulty: 'medium'
  },
  {
    id: 'v95',
    subject: 'verbal',
    text: 'Which word means "to give up royal power and authority"?',
    options: ['abandon', 'abdicate', 'abrogate', 'abscond'],
    correctAnswer: 'abdicate',
    explanation: '"Abdicate" specifically means to formally give up a throne, sovereign power, or high office.',
    difficulty: 'medium'
  },
  {
    id: 'v96',
    subject: 'verbal',
    text: 'Complete the analogy: Page is to Book as Pixel is to ___.',
    options: ['Computer', 'Screen', 'Camera', 'Internet'],
    correctAnswer: 'Screen',
    explanation: 'A page is a component of a book, just as a pixel is a component of a screen.',
    difficulty: 'medium'
  },
  {
    id: 'v97',
    subject: 'verbal',
    text: 'What does the idiom "to turn over a new leaf" mean?',
    options: ['To study botany', 'To change one\'s behavior for the better', 'To start reading a book', 'To move to a new place'],
    correctAnswer: 'To change one\'s behavior for the better',
    explanation: '"To turn over a new leaf" means to make a fresh start or to change one\'s behavior for the better.',
    difficulty: 'medium'
  },
  {
    id: 'v98',
    subject: 'verbal',
    text: 'Which word is most nearly opposite to "monotonous"?',
    options: ['varying', 'constant', 'tedious', 'repetitive'],
    correctAnswer: 'varying',
    explanation: '"Monotonous" means lacking in variety or interest, so "varying" is its opposite.',
    difficulty: 'medium'
  },
  {
    id: 'v99',
    subject: 'verbal',
    text: 'If all Blips are Blops and no Blops are Blapps, which statement must be true?',
    options: ['Some Blips are Blapps', 'No Blips are Blapps', 'All Blapps are Blips', 'Some Blapps are Blops'],
    correctAnswer: 'No Blips are Blapps',
    explanation: 'Since all Blips are Blops and no Blops are Blapps, it follows that no Blips can be Blapps.',
    difficulty: 'medium'
  },
  {
    id: 'v100',
    subject: 'verbal',
    text: 'Complete the sequence: Monday, Wednesday, Friday, ___',
    options: ['Saturday', 'Sunday', 'Tuesday', 'Thursday'],
    correctAnswer: 'Sunday',
    explanation: 'The pattern is to skip one day each time: Monday → (skip Tuesday) → Wednesday → (skip Thursday) → Friday → (skip Saturday) → Sunday.',
    difficulty: 'medium'
  }
];

export default verbalQuestions;
