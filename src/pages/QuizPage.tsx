import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Clock } from 'lucide-react';

const QuizPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { startQuiz, currentQuestion, selectedOptions, selectOption, submitQuiz, quizInProgress } = useQuiz();
  const { isAuthenticated, userType } = useAuth();
  
  const [subject, setSubject] = useState<string>(
    (location.state as any)?.preSelectedSubject || "maths"
  );
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [numQuestions, setNumQuestions] = useState<number>(10);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timePerQuestion, setTimePerQuestion] = useState<number>(60);

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
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handle preselected subject from assignments
  useEffect(() => {
    const preSelectedSubject = (location.state as any)?.preSelectedSubject;
    if (preSelectedSubject) {
      setSubject(preSelectedSubject);
    }
  }, [location.state]);

  // Helper function to render question content safely
  const renderQuestionContent = () => {
    if (!currentQuestion) return null;
    
    // Handle different question format types
    if (typeof currentQuestion.content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: currentQuestion.content }} className="prose max-w-none mb-8" />;
    } else if (typeof currentQuestion.text === 'string') {
      return <div className="prose max-w-none mb-8">{currentQuestion.text}</div>;
    }
    return null;
  };

  // Helper function to render question options
  const renderQuestionOptions = () => {
    if (!currentQuestion) return null;

    // Check if options is an object with A, B, C, D properties
    const isObjectOptions = currentQuestion.options && 
      typeof currentQuestion.options === 'object' &&
      'A' in currentQuestion.options;

    return (
      <Tabs defaultValue={selectedOptions[currentQuestion.id] || 'none'} onValueChange={(value) => selectOption(currentQuestion.id, value)}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="A">A</TabsTrigger>
          <TabsTrigger value="B">B</TabsTrigger>
          <TabsTrigger value="C">C</TabsTrigger>
          <TabsTrigger value="D">D</TabsTrigger>
        </TabsList>
        
        {isObjectOptions ? (
          <>
            <TabsContent value="A" className="border p-4 rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: (currentQuestion.options as any).A }} className="prose max-w-none" />
            </TabsContent>
            <TabsContent value="B" className="border p-4 rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: (currentQuestion.options as any).B }} className="prose max-w-none" />
            </TabsContent>
            <TabsContent value="C" className="border p-4 rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: (currentQuestion.options as any).C }} className="prose max-w-none" />
            </TabsContent>
            <TabsContent value="D" className="border p-4 rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: (currentQuestion.options as any).D }} className="prose max-w-none" />
            </TabsContent>
          </>
        ) : (
          <>
            {Array.isArray(currentQuestion.options) && currentQuestion.options.map((option, index) => {
              const optionKey = String.fromCharCode(65 + index); // A, B, C, D...
              return (
                <TabsContent key={optionKey} value={optionKey} className="border p-4 rounded-lg">
                  <div className="prose max-w-none">{option}</div>
                </TabsContent>
              );
            })}
          </>
        )}
        
        <TabsContent value="none">
          <div className="border p-4 rounded-lg text-center text-muted-foreground">Select an answer above</div>
        </TabsContent>
      </Tabs>
    );
  };

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
                Question {currentQuestion.number || (currentQuestionIndex + 1)} of {numQuestions}
              </h1>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className={`font-mono ${timeLeft < 30 ? 'text-red-500' : ''}`}>{formatTime(timeLeft)}</span>
              </div>
            </div>
            
            <div className="min-h-[60vh]">
              {renderQuestionContent()}
              {renderQuestionOptions()}
            </div>

            <div className="mt-8 space-x-2 flex justify-between">
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
              <Button onClick={() => {
                submitQuiz();
                navigate('/results');
              }} className="bg-primary">
                Submit Answers
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuizPage;
