
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import SubjectCard from '@/components/SubjectCard';
import { useQuiz, Subject } from '@/context/QuizContext';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const Index = () => {
  const navigate = useNavigate();
  const { startQuiz, questionCount, setQuestionCount } = useQuiz();

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
    console.log("Starting quiz for subject:", subject);
    startQuiz(subject);
    navigate('/quiz');
  };

  const handleSliderChange = (value: number[]) => {
    console.log("Setting question count:", value[0]);
    setQuestionCount(value[0]);
  };

  // Split animations to improve performance
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  };
  
  const headerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />

      <main className="pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          {...headerAnimation}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block mb-3 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
          >
            11+ Exam Preparation
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Master the 11+ Exam with SmartPrep
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive practice for all 11+ subjects with detailed explanations 
            and personalized feedback to help students excel.
          </p>
        </motion.div>

        <motion.div 
          {...containerAnimation}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto mb-10 p-6 bg-card rounded-xl shadow-sm"
        >
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <Label htmlFor="question-count">Number of Questions</Label>
              <span className="text-sm font-medium">{questionCount}</span>
            </div>
            <Slider 
              id="question-count"
              defaultValue={[questionCount]} 
              max={100} 
              min={10} 
              step={5}
              onValueChange={handleSliderChange}
              className="w-full"
            />
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <span>10</span>
              <span>100</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {subjectInfo.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.4 }}
            >
              <SubjectCard
                subject={subject.id}
                name={subject.name}
                description={subject.description}
                onClick={() => handleStartSubject(subject.id)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <h2 className="text-2xl font-display font-semibold mb-6">
            Why SmartPrep Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
    whileHover={{ y: -3 }}
    className="glass p-5 rounded-xl"
  >
    <h3 className="text-lg font-display font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

export default Index;
