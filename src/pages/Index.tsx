
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calculator,
  BookOpen,
  BookText,
  ArrowRight,
  Layers,
  Table2,
  History,
  Globe,
  Church,
} from 'lucide-react';
import { Slider } from "@/components/ui/slider"
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import SubjectCard from '@/components/SubjectCard';
import { Button } from '@/components/ui/button';
import DifficultySelector from '@/components/DifficultySelector';
import { useQuiz } from '@/context/QuizContext';
import TimesTablesSelector from '@/components/TimesTablesSelector';
import { Subject } from '@/types/questionTypes';

const IndexPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
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

  React.useEffect(() => {
    setSelectedSubject('all');
  }, [setSelectedSubject]);

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const handleStartQuiz = () => {
    if (selectedSubject) {
      if (selectedSubject === 'timesTables' && selectedTimesTables.length === 0) {
        return;
      }
      startQuiz(selectedSubject);
      navigate('/quiz');
    }
  };

  const handleSliderChange = (value: number[]) => {
    const questionCounts = [5, 10, 20, 30, 50, 100];
    const index = Math.min(
      Math.floor((value[0] / 100) * questionCounts.length),
      questionCounts.length - 1
    );
    setQuestionCount(questionCounts[index]);
  };

  const getSliderValue = () => {
    const questionCounts = [5, 10, 20, 30, 50, 100];
    const index = questionCounts.indexOf(questionCount);
    if (index === -1) return 20;
    return Math.round((index / (questionCounts.length - 1)) * 100);
  };

  const isReadyToStart = () => {
    if (!selectedSubject) return false;
    if (selectedSubject === 'timesTables' && selectedTimesTables.length === 0) return false;
    return true;
  };

  return (
    <Layout>
      <div className="container max-w-6xl px-4 py-8 md:py-16">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              11+ Exam Practice
            </h1>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl opacity-20 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Master Maths, English, and Verbal Reasoning with SmartPrep's interactive practice tests
          </motion.p>
          {!isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                onClick={() => navigate('/login')}
                size="lg"
                className="min-w-[200px] rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                Start Practicing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/about')}
                className="min-w-[200px] rounded-full"
              >
                Learn More
              </Button>
            </motion.div>
          )}
        </div>

        {isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto glass p-8 rounded-2xl mt-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Choose a subject</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <SubjectCard
                  subject="all"
                  description="Combined test with all subjects"
                  icon={<Layers className="h-5 w-5" />}
                  isSelected={selectedSubject === 'all'}
                  onClick={() => handleSubjectSelect('all')}
                />
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
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <SubjectCard
                  subject="timesTables"
                  description="Practice multiplication tables"
                  icon={<Table2 className="h-5 w-5" />}
                  isSelected={selectedSubject === 'timesTables'}
                  onClick={() => handleSubjectSelect('timesTables')}
                  className="bg-primary/5"
                />
                <SubjectCard
                  subject="history"
                  description="Year 4 British and world history"
                  icon={<History className="h-5 w-5" />}
                  isSelected={selectedSubject === 'history'}
                  onClick={() => handleSubjectSelect('history')}
                />
                <SubjectCard
                  subject="geography"
                  description="Year 4 UK and global geography"
                  icon={<Globe className="h-5 w-5" />}
                  isSelected={selectedSubject === 'geography'}
                  onClick={() => handleSubjectSelect('geography')}
                />
                <SubjectCard
                  subject="religiousEd"
                  description="Year 4 religious education"
                  icon={<Church className="h-5 w-5" />}
                  isSelected={selectedSubject === 'religiousEd'}
                  onClick={() => handleSubjectSelect('religiousEd')}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
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
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
