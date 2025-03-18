
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import SubjectCard from '@/components/SubjectCard';
import { useQuiz, Subject } from '@/context/QuizContext';

const Index = () => {
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const subjectInfo = [
    {
      id: 'maths' as Subject,
      name: 'Mathematics',
      description: 'Practice numerical reasoning, calculations, and problem-solving skills.',
    },
    {
      id: 'english' as Subject,
      name: 'English',
      description: 'Improve comprehension, grammar, vocabulary, and literacy skills.',
    },
    {
      id: 'verbal' as Subject,
      name: 'Verbal Reasoning',
      description: 'Enhance logical thinking with word puzzles and language patterns.',
    },
    {
      id: 'non-verbal' as Subject,
      name: 'Non-verbal Reasoning',
      description: 'Develop spatial awareness and pattern recognition abilities.',
    },
  ];

  const handleStartSubject = (subject: Subject) => {
    startQuiz(subject);
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />

      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-3 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
          >
            11+ Exam Preparation
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Master the 11+ Exam with SmartPrep
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive practice for all 11+ subjects with detailed explanations 
            and personalized feedback to help students excel.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {subjectInfo.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
            >
              <SubjectCard
                subject={subject.id}
                name={subject.name}
                description={subject.description}
                onClick={() => handleStartSubject(subject.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-display font-semibold mb-6">
            Why SmartPrep Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Feature
              title="Comprehensive Coverage"
              description="Questions covering all subjects required for the 11+ exam preparation."
            />
            <Feature
              title="Clear Explanations"
              description="Every question comes with a detailed explanation to aid understanding."
            />
            <Feature
              title="Track Progress"
              description="Monitor improvement over time with detailed performance analytics."
            />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass p-6 rounded-xl"
  >
    <h3 className="text-lg font-display font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

export default Index;
