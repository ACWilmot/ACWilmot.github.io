
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

const QuizPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    startQuiz, 
    questions, 
    currentQuestionIndex,
    userAnswers, 
    answerQuestion, 
    submitQuiz, 
    quizInProgress,
    goToNextQuestion,
    goToPreviousQuestion
  } = useQuiz();
  const { isAuthenticated, userType } = useAuth();
  
  const [subject, setSubject] = useState<string>(
    (location.state as any)?.preSelectedSubject || "maths"
  );
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [numQuestions, setNumQuestions] = useState<number>(10);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timePerQuestion, setTimePerQuestion] = useState<number>(60);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  useEffect(() => {
    // Redirect teacher to dashboard
    if (isAuthenticated && userType === 'teacher') {
      navigate('/teacher-dashboard');
    }
  }, [isAuthenticated, userType, navigate]);

  useEffect(() => {
    if (quizInProgress && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (quizInProgress && timeLeft === 0) {
      submitQuiz();
      navigate('/results');
    }
  }, [quizInProgress, timeLeft, submitQuiz, navigate]);

  const handleStartQuiz = () => {
    startQuiz(subject, difficulty, numQuestions);
    setTimeLeft(numQuestions * timePerQuestion);
    setShowExplanation(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleAnswerQuestion = (answer: string) => {
    if (!questions[currentQuestionIndex]) return;
    answerQuestion(questions[currentQuestionIndex].id, answer);
    setShowExplanation(true);
  };

  // Handle preselected subject from assignments
  useEffect(() => {
    const preSelectedSubject = (location.state as any)?.preSelectedSubject;
    if (preSelectedSubject) {
      setSubject(preSelectedSubject);
    }
  }, [location.state]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 pt-32 pb-16 max-w-5xl mx-auto">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate('/')}
          className="mb-6 h-9 w-9 rounded-full"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        
        {!quizInProgress ? (
          <>
            <h1 className="text-3xl font-display font-bold mb-2">Start a Practice Quiz</h1>
            <p className="text-muted-foreground mb-8">
              Customize your quiz settings and start practicing
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Select 
                      value={subject} 
                      onValueChange={(value) => setSubject(value)}
                      disabled={(location.state as any)?.preSelectedSubject !== undefined}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maths">Mathematics</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="verbal">Verbal Reasoning</SelectItem>
                        <SelectItem value="nonVerbal">Non-verbal Reasoning</SelectItem>
                      </SelectContent>
                    </Select>
                    {(location.state as any)?.preSelectedSubject !== undefined && (
                      <p className="text-xs text-muted-foreground">Subject selected from your assignment</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Difficulty</label>
                    <Select value={difficulty} onValueChange={(value) => setDifficulty(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Number of Questions</label>
                    <Select 
                      value={numQuestions.toString()} 
                      onValueChange={(value) => setNumQuestions(parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Questions</SelectItem>
                        <SelectItem value="10">10 Questions</SelectItem>
                        <SelectItem value="15">15 Questions</SelectItem>
                        <SelectItem value="20">20 Questions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Time per Question</label>
                    <Select 
                      value={timePerQuestion.toString()} 
                      onValueChange={(value) => setTimePerQuestion(parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 seconds</SelectItem>
                        <SelectItem value="60">60 seconds</SelectItem>
                        <SelectItem value="90">90 seconds</SelectItem>
                        <SelectItem value="120">120 seconds</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full" onClick={handleStartQuiz}>
                    Start Quiz
                  </Button>
                </div>
              </div>
              
              <div className="bg-muted/40 p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-medium mb-4">Quiz Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subject:</span>
                    <span className="font-medium capitalize">{
                      subject === "nonVerbal" ? "Non-verbal Reasoning" : 
                      subject === "maths" ? "Mathematics" : 
                      subject === "verbal" ? "Verbal Reasoning" : "English"
                    }</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <span className="font-medium capitalize">{difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Questions:</span>
                    <span className="font-medium">{numQuestions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time per question:</span>
                    <span className="font-medium">{timePerQuestion} seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total time:</span>
                    <span className="font-medium">{formatTime(numQuestions * timePerQuestion)}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-display font-medium">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h1>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className={`font-mono ${timeLeft < 30 ? 'text-red-500' : ''}`}>{formatTime(timeLeft)}</span>
              </div>
            </div>
            
            <ProgressBar 
              currentQuestion={currentQuestionIndex + 1} 
              totalQuestions={questions.length} 
              className="mb-8" 
            />
            
            {currentQuestion && (
              <QuestionCard
                question={currentQuestion}
                userAnswer={userAnswers[currentQuestion.id]}
                onAnswer={handleAnswerQuestion}
                showExplanation={showExplanation}
              />
            )}

            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Previous
              </Button>

              <div className="space-x-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to finish the quiz early?")) {
                      submitQuiz();
                      navigate('/results');
                    }
                  }}
                >
                  Finish Quiz
                </Button>
                
                <Button
                  onClick={() => {
                    if (currentQuestionIndex === questions.length - 1) {
                      submitQuiz();
                      navigate('/results');
                    } else {
                      goToNextQuestion();
                      setShowExplanation(false);
                    }
                  }}
                  className="bg-primary"
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Submit Answers' : 'Next Question'}
                  {currentQuestionIndex !== questions.length - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuizPage;
