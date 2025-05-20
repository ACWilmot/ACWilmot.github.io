
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Clock, Home, RotateCcw, Award, ArrowUpRight } from 'lucide-react';
import { formatTime } from '@/utils/timeUtils';

const ResultsPage = () => {
  const { isAuthenticated } = useAuth();
  const { isSubscribed } = useSubscription();
  const navigate = useNavigate();
  const location = useLocation();
  
  const {
    questions,
    userAnswers,
    score,
    startTime,
    endTime,
    selectedSubject,
    selectedDifficulty,
    resetQuiz,
    getResults
  } = useQuiz();
  
  const { percentage, totalQuestions, answeredQuestions, timeTaken } = getResults();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // If no quiz data, redirect back to home
    if (questions.length === 0) {
      navigate('/');
      return;
    }
  }, [isAuthenticated, navigate, questions.length]);
  
  const getGrade = (percentage: number) => {
    if (percentage >= 90) return 'A*';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'E';
  };
  
  const handleTryAgain = () => {
    resetQuiz();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 pt-32 pb-16 max-w-5xl mx-auto">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-display">Quiz Results</CardTitle>
            <CardDescription>
              {selectedSubject && <span className="capitalize">{selectedSubject}</span>}
              {selectedDifficulty && selectedDifficulty !== 'all' && <span> • {selectedDifficulty} difficulty</span>}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">Grade</p>
                <p className="text-2xl font-display font-bold">{getGrade(percentage)}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">Score</p>
                <p className="text-2xl font-display font-bold">{score}/{totalQuestions}</p>
                <p className="text-sm text-muted-foreground">
                  {percentage.toFixed(0)}% correct
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">Time</p>
                <p className="text-2xl font-display font-bold">{formatTime(timeTaken || 0)}</p>
              </div>
            </div>
            
            <Card className="overflow-hidden">
              <div className="p-4 bg-muted flex justify-between items-center">
                <p className="font-medium">Question Summary</p>
                <p className="text-sm text-muted-foreground">{answeredQuestions}/{totalQuestions} answered</p>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {questions.map((question, index) => {
                  const userAnswer = userAnswers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  const isAnswered = userAnswer !== undefined;
                  
                  return (
                    <div key={question.id} className={`p-4 flex items-start gap-3 border-b ${
                      !isAnswered ? 'bg-muted/30' : isCorrect ? 'bg-green-50' : 'bg-red-50'
                    }`}>
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                        !isAnswered ? 'bg-muted text-muted-foreground' : 
                          isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-2 mb-1">
                          {question.text}
                        </p>
                        {isAnswered && (
                          <div className="text-xs space-y-1">
                            <p>Your answer: <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                              {userAnswer}
                            </span></p>
                            {!isCorrect && <p className="text-green-600">
                              Correct answer: <span className="font-medium">{question.correctAnswer}</span>
                            </p>}
                          </div>
                        )}
                        {!isAnswered && (
                          <p className="text-xs text-muted-foreground">Not answered</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </CardContent>
          
          <CardFooter className="flex flex-col md:flex-row gap-3">
            <Button 
              variant="outline" 
              className="w-full md:w-auto"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button 
              variant="outline" 
              className="w-full md:w-auto"
              onClick={handleTryAgain}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            {isSubscribed ? (
              <Button 
                className="w-full md:w-auto"
                onClick={() => navigate('/progress')}
              >
                <BarChart className="mr-2 h-4 w-4" />
                View Progress
              </Button>
            ) : (
              <Button 
                className="w-full md:w-auto"
                onClick={() => navigate('/profile?tab=subscription')}
              >
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Upgrade to Premium
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default ResultsPage;
