import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calculator,
  BookOpen,
  BookText,
  ArrowRight,
  LineChart,
} from 'lucide-react';
import { Slider } from "@/components/ui/slider"
import { useAuth } from '@/context/AuthContext';
import { useProfile } from '@/context/ProfileContext';
import Layout from '@/components/Layout';
import SubjectCard from '@/components/SubjectCard';
import { Button } from '@/components/ui/button';
import ShapeIcon from '@/components/ShapeIcon';
import DifficultySelector from '@/components/DifficultySelector';
import { Difficulty } from '@/types/questionTypes';
import { useQuiz } from '@/context/QuizContext';

const IndexPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { profile } = useProfile();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const {
    startQuiz,
    selectedSubject,
    setSelectedSubject,
    questionCount,
    setQuestionCount,
    selectedDifficulty,
    setSelectedDifficulty
  } = useQuiz();

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
  };

  const handleStartQuiz = () => {
    if (selectedSubject) {
      startQuiz(selectedSubject);
      navigate('/quiz');
    }
  };

  // Render components based on screen size
  return (
    <Layout>
      <div className="container max-w-6xl px-4 py-16 md:py-32">
        {/* Hero section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500"
          >
            11+ Exam Practice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Practice tests covering Maths, English, Verbal Reasoning and Non-Verbal Reasoning
          </motion.p>
          {!isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() => navigate('/login')}
                className="rounded-full px-8 py-6"
                size="lg"
              >
                Sign in to Start Practicing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </div>

        {/* Main content */}
        {isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Choose a subject</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <SubjectCard
                  title="Maths"
                  description="Numbers, shapes, and problem solving"
                  icon={<Calculator className="h-5 w-5" />}
                  isSelected={selectedSubject === 'maths'}
                  onClick={() => handleSubjectSelect('maths')}
                />
                <SubjectCard
                  title="English"
                  description="Vocabulary, grammar, and comprehension"
                  icon={<BookOpen className="h-5 w-5" />}
                  isSelected={selectedSubject === 'english'}
                  onClick={() => handleSubjectSelect('english')}
                />
                <SubjectCard
                  title="Verbal Reasoning"
                  description="Word problems and logic puzzles"
                  icon={<BookText className="h-5 w-5" />}
                  isSelected={selectedSubject === 'verbal'}
                  onClick={() => handleSubjectSelect('verbal')}
                />
                <SubjectCard
                  title="Non-Verbal Reasoning"
                  description="Pattern and sequence problems"
                  icon={<ShapeIcon className="h-5 w-5" />}
                  isSelected={selectedSubject === 'non-verbal'}
                  onClick={() => handleSubjectSelect('non-verbal')}
                />
              </div>
            </div>

            {selectedSubject && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-display font-semibold mb-6">Select difficulty level</h2>
                <DifficultySelector 
                  selectedDifficulty={selectedDifficulty}
                  onChange={setSelectedDifficulty}
                  className="mb-6"
                />
                
                <div className="glass p-6 rounded-xl mb-6">
                  <h3 className="text-lg font-medium mb-4">Number of questions</h3>
                  <Slider
                    value={[questionCount]}
                    min={5}
                    max={20}
                    step={5}
                    onValueChange={(values) => setQuestionCount(values[0])}
                    className="max-w-md"
                  />
                  <div className="flex justify-between max-w-md mt-2 text-sm text-muted-foreground">
                    <span>5</span>
                    <span>10</span>
                    <span>15</span>
                    <span>20</span>
                  </div>
                  <p className="mt-4 text-sm">
                    You selected {questionCount} questions
                  </p>
                </div>

                <Button
                  onClick={handleStartQuiz}
                  className="w-full md:w-auto rounded-lg"
                  size="lg"
                >
                  Start Practice Test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* User Progress Overview */}
            {profile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-16"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display font-semibold">Your Progress</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/progress')}
                    className="flex items-center gap-1.5"
                  >
                    <LineChart className="h-4 w-4" />
                    View Full Stats
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(profile.progress).map(([subject, progress]) => (
                    <div key={subject} className="glass p-4 rounded-lg">
                      <h3 className="font-medium capitalize">{subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        {progress.correct} / {progress.completed} questions correct
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
