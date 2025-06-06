import React from 'react';
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
  Lock,
  Timer,
} from 'lucide-react';
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';
import { Layout } from '@/components/Layout';
import SubjectCard from '@/components/SubjectCard';
import { Button } from '@/components/ui/button';
import DifficultySelector from '@/components/DifficultySelector';
import YearSelector from '@/components/YearSelector';
import { useQuiz } from '@/context/QuizContext';
import TimesTablesSelector from '@/components/TimesTablesSelector';
import VerbalTypesSelector from '@/components/VerbalTypesSelector';
import { Subject } from '@/types/questionTypes';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { isSubscribed, isTutor } = useSubscription();
  const {
    startQuiz,
    selectedSubject,
    setSelectedSubject,
    questionCount,
    setQuestionCount,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedYear,
    setSelectedYear,
    selectedTimesTables,
    setSelectedTimesTables,
    selectedVerbalTypes,
    setSelectedVerbalTypes,
    setTimeLimit,
    timeLimit,
  } = useQuiz();

  React.useEffect(() => {
    setSelectedSubject('all');
    
    // For free users, limit to 10 questions
    if (!isSubscribed) {
      setQuestionCount(10);
    }
  }, [setSelectedSubject, isSubscribed, setQuestionCount]);

  const handleSubjectSelect = (subject: Subject) => {
    if (subject !== 'all' && !isSubscribed) {
      navigate('/profile?tab=subscription');
      return;
    }
    setSelectedSubject(subject);
  };

  const handleStartQuiz = () => {
    if (selectedSubject) {
      if (selectedSubject === 'timesTables' && selectedTimesTables.length === 0) {
        return;
      }
      if (selectedSubject === 'verbal' && selectedVerbalTypes.length === 0) {
        return;
      }
      startQuiz(selectedSubject);
      navigate('/quiz');
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (!isSubscribed) {
      // Free users are limited to 10 questions
      return;
    }
    
    const questionCounts = [5, 10, 20, 30, 50, 100];
    const index = Math.min(
      Math.floor((value[0] / 100) * questionCounts.length),
      questionCounts.length - 1
    );
    setQuestionCount(questionCounts[index]);
  };

  const handleTimeLimitChange = (value: string) => {
    const minutes = parseFloat(value);
    if (minutes === 0) {
      setTimeLimit(null);
    } else {
      setTimeLimit(minutes * 60); // Convert to seconds
    }
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
    if (selectedSubject === 'verbal' && selectedVerbalTypes.length === 0) return false;
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
              SmartPrep Practice
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
                
                {/* Premium Subject Cards - Grey out for free users */}
                <SubjectCard
                  subject="maths"
                  description={!isSubscribed ? "Premium required" : "Numbers, shapes, and problem solving"}
                  icon={!isSubscribed ? <Lock className="h-5 w-5" /> : <Calculator className="h-5 w-5" />}
                  isSelected={selectedSubject === 'maths'}
                  onClick={() => handleSubjectSelect('maths')}
                  className={!isSubscribed ? "opacity-50" : ""}
                />
                <SubjectCard
                  subject="english"
                  description={!isSubscribed ? "Premium required" : "Vocabulary, grammar, and comprehension"}
                  icon={!isSubscribed ? <Lock className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                  isSelected={selectedSubject === 'english'}
                  onClick={() => handleSubjectSelect('english')}
                  className={!isSubscribed ? "opacity-50" : ""}
                />
                <SubjectCard
                  subject="verbal"
                  description={!isSubscribed ? "Premium required" : "Word problems and logic puzzles"}
                  icon={!isSubscribed ? <Lock className="h-5 w-5" /> : <BookText className="h-5 w-5" />}
                  isSelected={selectedSubject === 'verbal'}
                  onClick={() => handleSubjectSelect('verbal')}
                  className={!isSubscribed ? "opacity-50" : ""}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <SubjectCard
                  subject="timesTables"
                  description={!isSubscribed ? "Premium required" : "Practice multiplication tables"}
                  icon={!isSubscribed ? <Lock className="h-5 w-5" /> : <Table2 className="h-5 w-5" />}
                  isSelected={selectedSubject === 'timesTables'}
                  onClick={() => handleSubjectSelect('timesTables')}
                  className={!isSubscribed ? "opacity-50" : "bg-primary/5"}
                />
                <SubjectCard
                  subject="history"
                  description={!isSubscribed ? "Premium required" : "British and world history"}
                  icon={!isSubscribed ? <Lock className="h-5 w-5" /> : <History className="h-5 w-5" />}
                  isSelected={selectedSubject === 'history'}
                  onClick={() => handleSubjectSelect('history')}
                  className={!isSubscribed ? "opacity-50" : ""}
                />
                <SubjectCard
                  subject="geography"
                  description={!isSubscribed ? "Premium required" : "UK and global geography"}
                  icon={!isSubscribed ? <Lock className="h-5 w-5" /> : <Globe className="h-5 w-5" />}
                  isSelected={selectedSubject === 'geography'}
                  onClick={() => handleSubjectSelect('geography')}
                  className={!isSubscribed ? "opacity-50" : ""}
                />
                <SubjectCard
                  subject="religiousEd"
                  description={!isSubscribed ? "Premium required" : "Religious education"}
                  icon={!isSubscribed ? <Lock className="h-5 w-5" /> : <Church className="h-5 w-5" />}
                  isSelected={selectedSubject === 'religiousEd'}
                  onClick={() => handleSubjectSelect('religiousEd')}
                  className={!isSubscribed ? "opacity-50" : ""}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              {selectedSubject !== 'timesTables' && selectedSubject !== 'verbal' && (
                <>
                  <h2 className="text-2xl font-display font-semibold mb-6 text-center">Select difficulty level</h2>
                  <div className="flex justify-center mb-6">
                    {/* Grey out for free users but keep it visible */}
                    <div className={!isSubscribed ? "opacity-50 pointer-events-none w-full" : ""}>
                      <DifficultySelector 
                        selectedDifficulty={selectedDifficulty}
                        onChange={setSelectedDifficulty}
                      />
                    </div>
                  </div>
                  
                  {/* Only show year selector for subjects that need it */}
                  {selectedSubject && useQuiz().shouldShowYearSelector(selectedSubject) && (
                    <>
                      <h2 className="text-2xl font-display font-semibold mb-6 text-center">Select year level</h2>
                      <div className="flex justify-center mb-8">
                        {/* Grey out for free users but keep it visible */}
                        <div className={!isSubscribed ? "opacity-50 pointer-events-none w-full" : ""}>
                          <YearSelector
                            selectedYear={selectedYear}
                            onChange={setSelectedYear}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {selectedSubject === 'timesTables' && (
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-semibold mb-6 text-center">Select times tables</h2>
                  {/* Grey out for free users but keep it visible */}
                  <div className={!isSubscribed ? "opacity-50 pointer-events-none" : ""}>
                    <TimesTablesSelector
                      selectedTables={selectedTimesTables}
                      onChange={setSelectedTimesTables}
                      className="mb-6"
                    />
                  </div>
                </div>
              )}

              {selectedSubject === 'verbal' && (
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-semibold mb-6 text-center">Select verbal reasoning types</h2>
                  {/* Grey out for free users but keep it visible */}
                  <div className={!isSubscribed ? "opacity-50 pointer-events-none" : ""}>
                    <VerbalTypesSelector
                      selectedTypes={selectedVerbalTypes}
                      onChange={setSelectedVerbalTypes}
                      className="mb-6"
                    />
                  </div>
                </div>
              )}
              
              <div className="glass p-6 rounded-xl mb-6 flex flex-col items-center">
                <h3 className="text-lg font-medium mb-4">Number of questions</h3>
                <div className="w-full max-w-md mb-6">
                  {/* Grey out for free users but keep it visible */}
                  <div className={!isSubscribed ? "opacity-50 pointer-events-none" : ""}>
                    <Slider
                      defaultValue={[getSliderValue()]}
                      max={100}
                      step={20}
                      onValueChange={handleSliderChange}
                      className="w-full"
                    />
                  </div>
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
                  {!isSubscribed && (
                    <span className="block text-xs text-muted-foreground mt-1">
                      (Free accounts are limited to 10 questions)
                    </span>
                  )}
                </p>
              </div>
              
              {/* Time limit selector */}
              <div className="glass p-6 rounded-xl mb-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4">
                  <Timer className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-medium">Time limit</h3>
                </div>
                
                <div className="w-full max-w-md mb-2">
                  <div className={!isSubscribed ? "opacity-50 pointer-events-none" : ""}>
                    <Select 
                      value={timeLimit ? String(timeLimit / 60) : "0"}
                      onValueChange={handleTimeLimitChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select time limit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No time limit</SelectItem>
                        <SelectItem value="0.5">30 seconds</SelectItem>
                        <SelectItem value="1">1 minute</SelectItem>
                        <SelectItem value="2">2 minutes</SelectItem>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="10">10 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="20">20 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <p className="text-sm text-center text-muted-foreground">
                  {timeLimit 
                    ? timeLimit < 60 
                      ? `Test will end automatically after ${timeLimit} seconds`
                      : `Test will end automatically after ${timeLimit/60} ${timeLimit/60 === 1 ? 'minute' : 'minutes'}`
                    : "No time limit - take as long as you need"
                  }
                  {!isSubscribed && (
                    <span className="block text-xs text-muted-foreground mt-1">
                      (Premium feature)
                    </span>
                  )}
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
              
              {!isSubscribed && (
                <div className="mt-4 text-center space-y-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/profile?tab=subscription')}
                    className="text-xs mr-2"
                  >
                    Unlock Premium Features (£9.99/month)
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/profile?tab=subscription')}
                    className="text-xs"
                  >
                    Become a Tutor (£19.99/month)
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
