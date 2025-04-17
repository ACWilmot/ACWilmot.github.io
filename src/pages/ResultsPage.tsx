
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, RotateCcw, Home } from 'lucide-react';
import Header from '@/components/Header';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from "sonner";
import WorksheetList from '@/components/WorksheetList';

const ResultsPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, updateProgress, updateTimesTablesProgress } = useAuth();
  const {
    questions,
    userAnswers,
    selectedSubject,
    resetQuiz,
    getResults,
    startQuiz
  } = useQuiz();
  
  const [progressUpdated, setProgressUpdated] = useState(false);
  
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please sign in to access your results");
      navigate('/login');
      return;
    }
    
    if (!selectedSubject) {
      navigate('/');
    }
  }, [selectedSubject, navigate, isAuthenticated]);
  
  const { score, totalQuestions, percentage } = getResults();
  
  useEffect(() => {
    const updateUserProgress = async () => {
      if (!isAuthenticated || !selectedSubject || questions.length === 0 || progressUpdated || totalQuestions === 0) {
        return;
      }
      
      try {
        // Handle times tables progress separately
        if (selectedSubject === 'timesTables') {
          console.log("Updating times tables progress with", questions.length, "questions");
          await updateTimesTablesProgress(questions, userAnswers);
          console.log("Times tables progress update completed");
        } else {
          // Regular progress update for other subjects
          console.log(`Updating progress for ${selectedSubject}: completed=${totalQuestions}, correct=${score}`);
          await updateProgress(selectedSubject, totalQuestions, score);
        }
        setProgressUpdated(true);
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    };
    
    updateUserProgress();
  }, [isAuthenticated, selectedSubject, questions, progressUpdated, updateProgress, updateTimesTablesProgress, score, totalQuestions, userAnswers]);
  
  const getGrade = () => {
    if (percentage >= 90) return { text: 'Excellent', color: 'text-green-500' };
    if (percentage >= 80) return { text: 'Great', color: 'text-green-500' };
    if (percentage >= 70) return { text: 'Good', color: 'text-blue-500' };
    if (percentage >= 60) return { text: 'Satisfactory', color: 'text-blue-500' };
    if (percentage >= 50) return { text: 'Needs Improvement', color: 'text-amber-500' };
    return { text: 'More Practice Needed', color: 'text-red-500' };
  };
  
  const handleTryAgain = () => {
    if (selectedSubject) {
      startQuiz(selectedSubject);
      navigate('/quiz');
    }
  };
  
  const handleGoHome = () => {
    resetQuiz();
    navigate('/');
  };

  const grade = getGrade();

  const answeredQuestions = questions.filter(question => userAnswers[question.id]);

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
          <motion.h1 
            className="text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your Results
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {selectedSubject?.charAt(0).toUpperCase() + selectedSubject?.slice(1)} practice assessment
          </motion.p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="mb-6">
              <span className={`text-xl font-medium ${grade.color}`}>
                {grade.text}
              </span>
            </div>
            
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-secondary"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-primary"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    strokeDasharray={`${percentage * 2.51} 251.2`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold">
                    {Math.round(percentage)}%
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-8 text-center">
              <div>
                <p className="text-3xl font-display font-bold">{score}</p>
                <p className="text-sm text-muted-foreground">Correct</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">{totalQuestions - score}</p>
                <p className="text-sm text-muted-foreground">Incorrect</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">{totalQuestions}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <WorksheetList subject={selectedSubject} limit={3} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-display font-semibold mb-4">
              Question Breakdown {answeredQuestions.length > 0 ? `(${answeredQuestions.length} answered)` : ''}
            </h2>
            {answeredQuestions.length > 0 ? (
              <div className="space-y-3">
                {answeredQuestions.map((question) => {
                  const isCorrect = userAnswers[question.id] === question.correctAnswer;
                  
                  return (
                    <Card key={question.id} className="flex items-center p-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                        isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {isCorrect ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <X className="h-4 w-4" />
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <p className="text-sm font-medium line-clamp-1">{question.text}</p>
                        <div className="flex text-xs text-muted-foreground">
                          <span>Your answer: </span>
                          <span className={isCorrect ? 'text-green-600 ml-1' : 'text-red-600 ml-1'}>
                            {userAnswers[question.id]}
                          </span>
                          {!isCorrect && (
                            <>
                              <span className="mx-1">•</span>
                              <span>Correct: </span>
                              <span className="text-green-600 ml-1">{question.correctAnswer}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center p-6 border rounded-lg bg-background">
                <p className="text-muted-foreground">No questions answered yet</p>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <Button 
              variant="outline" 
              onClick={handleGoHome}
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Button>
            
            <Button 
              onClick={handleTryAgain}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
