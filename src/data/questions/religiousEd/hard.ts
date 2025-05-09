
import { Question } from "@/types/questionTypes";
import { v4 as uuidv4 } from 'uuid';

const hardReligiousEdQuestions: Question[] = Array.from({ length: 30 }, (_, index) => {
  const questions = [
    {
      text: "What are the three marks of existence in Buddhism?",
      options: ["Nirvana, Dharma, Karma", "Impermanence, Suffering, No-Self", "Peace, Love, Harmony", "Reincarnation, Liberation, Meditation"],
      correctAnswer: "Impermanence, Suffering, No-Self",
      explanation: "The three marks of existence in Buddhism are Anicca (impermanence), Dukkha (suffering), and Anatta (no-self).",
      year: 4
    },
    {
      text: "What is the first of the Ten Commandments in Christianity and Judaism?",
      options: ["Do not murder", "Honor your father and mother", "You shall have no other gods before me", "Remember the Sabbath day"],
      correctAnswer: "You shall have no other gods before me",
      explanation: "The first commandment states that God is the only god to be worshipped.",
      year: 4
    },
    {
      text: "What are the four Vedas in Hinduism?",
      options: ["Rig, Sama, Yajur, Atharva", "Gita, Upanishad, Purana, Sutra", "Brahma, Vishnu, Shiva, Ganesha", "Dharma, Karma, Moksha, Samsara"],
      correctAnswer: "Rig, Sama, Yajur, Atharva",
      explanation: "The four Vedas are the Rigveda, Samaveda, Yajurveda, and Atharvaveda, which are ancient sacred texts of Hinduism.",
      year: 4
    },
    {
      text: "Which Islamic month is dedicated to fasting?",
      options: ["Muharram", "Ramadan", "Rajab", "Shawwal"],
      correctAnswer: "Ramadan",
      explanation: "Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide as a month of fasting, prayer, reflection, and community.",
      year: 4
    },
    {
      text: "What is the meaning of 'Bar Mitzvah' in Judaism?",
      options: ["House of prayer", "Son of commandment", "Holy book", "Sacred ceremony"],
      correctAnswer: "Son of commandment",
      explanation: "Bar Mitzvah literally means 'son of commandment' and marks when a Jewish boy becomes accountable for his actions and responsible for observing the commandments.",
      year: 4
    },
    {
      text: "What are the seven sacraments in Catholicism?",
      options: ["Baptism, Confession, Communion, Confirmation, Marriage, Holy Orders, Anointing of the Sick", 
                "Prayer, Worship, Charity, Forgiveness, Love, Faith, Hope",
                "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday", 
                "Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges"],
      correctAnswer: "Baptism, Confession, Communion, Confirmation, Marriage, Holy Orders, Anointing of the Sick",
      explanation: "The seven sacraments in Catholicism are Baptism, Confession (Reconciliation), Communion (Eucharist), Confirmation, Marriage (Matrimony), Holy Orders, and Anointing of the Sick.",
      year: 4
    },
    {
      text: "What is the concept of 'ahimsa' in Hinduism and Buddhism?",
      options: ["Sacred text", "Type of meditation", "Non-violence", "Ritual offering"],
      correctAnswer: "Non-violence",
      explanation: "Ahimsa is the principle of non-violence towards all living beings, a central concept in Hinduism, Buddhism, and Jainism.",
      year: 4
    },
    {
      text: "What is the Islamic concept of 'Tawhid'?",
      options: ["Holy war", "Charity", "Oneness of God", "Pilgrimage"],
      correctAnswer: "Oneness of God",
      explanation: "Tawhid is the concept of monotheism in Islam, affirming the indivisible oneness of God.",
      year: 4
    },
    {
      text: "What is the significance of the River Jordan in Christianity?",
      options: ["Where Moses parted the waters", "Where Jesus was baptized", "Where the Last Supper took place", "Where Noah's ark landed"],
      correctAnswer: "Where Jesus was baptized",
      explanation: "According to the Bible, Jesus was baptized by John the Baptist in the River Jordan.",
      year: 4
    },
    {
      text: "What is the Tripitaka in Buddhism?",
      options: ["Three jewels", "Three marks of existence", "Three baskets of teachings", "Three noble truths"],
      correctAnswer: "Three baskets of teachings",
      explanation: "The Tripitaka (Three Baskets) is the collection of Buddhist scriptures divided into three parts: Vinaya Pitaka (discipline), Sutta Pitaka (discourses), and Abhidhamma Pitaka (higher teachings).",
      year: 4
    },
    {
      text: "What is the Western Wall (Wailing Wall) in Jerusalem?",
      options: ["Part of an ancient Roman fortress", "Remains of the Second Jewish Temple", "A Christian church", "An Islamic mosque"],
      correctAnswer: "Remains of the Second Jewish Temple",
      explanation: "The Western Wall is a remnant of the ancient wall that surrounded the Jewish Temple's courtyard in Jerusalem and is the holiest place where Jews are permitted to pray.",
      year: 4
    },
    {
      text: "What is the main difference between Sunni and Shia Muslims?",
      options: ["Their prayer style", "Their interpretation of who should lead Muslims after Muhammad", "The language they use for prayer", "The number of prayers per day"],
      correctAnswer: "Their interpretation of who should lead Muslims after Muhammad",
      explanation: "The main difference between Sunni and Shia Muslims lies in their views on who should have succeeded the Prophet Muhammad as leader of the Muslim community.",
      year: 4
    },
    {
      text: "What are the three main denominations of Judaism?",
      options: ["Orthodox, Conservative, Reform", "Hasidic, Sephardic, Ashkenazi", "Biblical, Talmudic, Kabbalistic", "Ancient, Medieval, Modern"],
      correctAnswer: "Orthodox, Conservative, Reform",
      explanation: "The three main denominations of Judaism in modern times are Orthodox, Conservative, and Reform Judaism.",
      year: 4
    },
    {
      text: "What is a 'guru' in Sikhism?",
      options: ["A temple", "A spiritual teacher", "A holy book", "A prayer"],
      correctAnswer: "A spiritual teacher",
      explanation: "In Sikhism, a guru is a spiritual teacher. There were ten human gurus in Sikhism, followed by the Guru Granth Sahib (holy book) as the eternal guru.",
      year: 4
    },
    {
      text: "What is the meaning of 'Buddha'?",
      options: ["Holy one", "Enlightened one", "Sacred teacher", "Divine being"],
      correctAnswer: "Enlightened one",
      explanation: "'Buddha' means 'one who is awake' or 'enlightened one', referring to someone who has awakened to the truth.",
      year: 4
    },
    {
      text: "Which religion was founded by Guru Nanak?",
      options: ["Hinduism", "Buddhism", "Sikhism", "Jainism"],
      correctAnswer: "Sikhism",
      explanation: "Sikhism was founded by Guru Nanak in the Punjab region of South Asia in the late 15th century.",
      year: 4
    },
    {
      text: "What is the significance of the Om symbol in Hinduism?",
      options: ["It represents wealth", "It is the symbol of enlightenment", "It represents the universal sound of creation", "It symbolizes the Hindu trinity"],
      correctAnswer: "It represents the universal sound of creation",
      explanation: "Om is considered to be the primordial sound of the universe and represents the essence of the ultimate reality or consciousness.",
      year: 4
    },
    {
      text: "What is the Golden Rule that is found in many religions?",
      options: ["Always pray five times a day", "Treat others as you would like to be treated", "Always tell the truth", "Follow all commandments strictly"],
      correctAnswer: "Treat others as you would like to be treated",
      explanation: "The Golden Rule, found in various forms across many religions, emphasizes treating others with the same respect and kindness you would wish for yourself.",
      year: 4
    },
    {
      text: "What is the Qibla in Islam?",
      options: ["A special prayer", "The direction Muslims face when praying", "A sacred text", "A religious festival"],
      correctAnswer: "The direction Muslims face when praying",
      explanation: "The Qibla is the direction Muslims face during prayer, which is toward the Kaaba in Mecca.",
      year: 4
    },
    {
      text: "What is the purpose of meditation in Buddhism?",
      options: ["To pray to Buddha", "To remember past lives", "To develop mindfulness and wisdom", "To gain supernatural powers"],
      correctAnswer: "To develop mindfulness and wisdom",
      explanation: "In Buddhism, meditation is practiced to develop mindfulness, concentration, and insight, leading to wisdom and eventually enlightenment.",
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
    difficulty: "hard",
    year: questions[index % questions.length].year
  };
});

export default hardReligiousEdQuestions;
