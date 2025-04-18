
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calculator,
  BookOpen,
  BookText,
  ArrowRight,
  LineChart,
  Layers,
  Table2,
} from 'lucide-react';
import { Slider } from "@/components/ui/slider"
import { useAuth } from '@/context/AuthContext';
import { useProfile } from '@/context/ProfileContext';
import { Layout } from '@/components/Layout';
import SubjectCard from '@/components/SubjectCard';
import { Button } from '@/components/ui/button';
import DifficultySelector from '@/components/DifficultySelector';
import { Difficulty } from '@/types/questionTypes';
import { useQuiz } from '@/context/QuizContext';
import { Subject } from '@/context/QuizContext';
import TimesTablesSelector from '@/components/TimesTablesSelector';

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
    setSelectedDifficulty,
    selectedTimesTables,
    setSelectedTimesTables,
  } = useQuiz();

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const handleStartQuiz = () => {
    if (selectedSubject) {
      // Validate times tables selection
      if (selectedSubject === 'timesTables' && selectedTimesTables.length === 0) {
        // Don't start quiz if no times tables selected
        return;
      }
      
      startQuiz(selectedSubject);
      navigate('/quiz');
    }
  };

  const handleSliderChange = (value: number[]) => {
    // Map slider value to desired question counts: 5, 10, 20, 30, 50, 100
    const questionCounts = [5, 10, 20, 30, 50, 100];
    // Normalize the slider value (0-100) to an index in the questionCounts array
    const index = Math.min(
      Math.floor((value[0] / 100) * questionCounts.length),
      questionCounts.length - 1
    );
    setQuestionCount(questionCounts[index]);
  };

  // Calculate the slider value based on question count
  const getSliderValue = () => {
    const questionCounts = [5, 10, 20, 30, 50, 100];
    const index = questionCounts.indexOf(questionCount);
    if (index === -1) return 20; // Default to second position (10 questions)
    
    // Convert index to a percentage value (0-100)
    return Math.round((index / (questionCounts.length - 1)) * 100);
  };

  const isReadyToStart = () => {
    if (!selectedSubject) return false;
    if (selectedSubject === 'timesTables' && selectedTimesTables.length === 0) return false;
    return true;
  };

  return (
    <Layout>
      <div className="container max-w-6xl px-4 py-16 md:py-32">
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
            Practice tests covering Maths, English, and Verbal Reasoning
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

        {isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Choose a subject</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <SubjectCard
                  subject="maths"
                  description="Numbers, shapes, and problem solving"
                  icon={<Calculator className="h-5 w-5" />}
                  isSelected={selectedSubject === 'maths'}
                  onClick={() => handleSubjectSelect('maths')}
                />
                <SubjectCard
                  subject="english"
                  description="Vocabulary, grammar, and comprehension"
                  icon={<BookOpen className="h-5 w-5" />}
                  isSelected={selectedSubject === 'english'}
                  onClick={() => handleSubjectSelect('english')}
                />
                <SubjectCard
                  subject="verbal"
                  description="Word problems and logic puzzles"
                  icon={<BookText className="h-5 w-5" />}
                  isSelected={selectedSubject === 'verbal'}
                  onClick={() => handleSubjectSelect('verbal')}
                />
                <SubjectCard
                  subject="all"
                  description="Combined test with all subjects"
                  icon={<Layers className="h-5 w-5" />}
                  isSelected={selectedSubject === 'all'}
                  onClick={() => handleSubjectSelect('all')}
                />
                <SubjectCard
                  subject="timesTables"
                  description="Practice multiplication tables"
                  icon={<Table2 className="h-5 w-5" />}
                  isSelected={selectedSubject === 'timesTables'}
                  onClick={() => handleSubjectSelect('timesTables')}
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
                {selectedSubject !== 'timesTables' && (
                  <>
                    <h2 className="text-2xl font-display font-semibold mb-6 text-center">Select difficulty level</h2>
                    <div className="flex justify-center mb-8">
                      <DifficultySelector 
                        selectedDifficulty={selectedDifficulty}
                        onChange={setSelectedDifficulty}
                      />
                    </div>
                  </>
                )}

                {selectedSubject === 'timesTables' && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-display font-semibold mb-6 text-center">Select times tables</h2>
                    <TimesTablesSelector
                      selectedTables={selectedTimesTables}
                      onChange={setSelectedTimesTables}
                      className="mb-6"
                    />
                  </div>
                )}
                
                <div className="glass p-6 rounded-xl mb-6 flex flex-col items-center">
                  <h3 className="text-lg font-medium mb-4">Number of questions</h3>
                  <div className="w-full max-w-md mb-6">
                    <Slider
                      defaultValue={[getSliderValue()]}
                      max={100}
                      step={20}
                      onValueChange={handleSliderChange}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between w-full max-w-md text-sm text-muted-foreground mb-2">
                    <span>5</span>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                  <p className="mt-4 text-sm text-center">
                    You selected {questionCount} questions
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={handleStartQuiz}
                    className="rounded-lg"
                    size="lg"
                    disabled={!isReadyToStart()}
                  >
                    Start Practice Test
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

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
