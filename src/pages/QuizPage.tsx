
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import QuizSetupForm from '@/components/QuizSetupForm';
import ActiveQuiz from '@/components/ActiveQuiz';

const QuizPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    startQuiz, 
    currentQuestion, 
    currentQuestionIndex,
    selectedOptions, 
    selectOption, 
    submitQuiz, 
    quizInProgress,
    questions,
    goToNextQuestion
  } = useQuiz();
  const { isAuthenticated, userType, recordAssignmentAttempt } = useAuth();
  
  const [subject, setSubject] = useState<string>(
    (location.state as any)?.preSelectedSubject || "maths"
  );
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [numQuestions, setNumQuestions] = useState<number>(10);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timePerQuestion, setTimePerQuestion] = useState<number>(60);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAssignment, setIsAssignment] = useState(false);
  const [assignmentId, setAssignmentId] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Handle assignment state if passed via location
    const assignmentData = (location.state as any)?.assignment;
    if (assignmentData) {
      setIsAssignment(true);
      setAssignmentId(assignmentData.id);
    }
  }, [location.state]);

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
      finishQuiz();
    }
  }, [quizInProgress, timeLeft]);

  const handleStartQuiz = () => {
    startQuiz(subject, difficulty, numQuestions);
    setTimeLeft(numQuestions * timePerQuestion);
  };

  const handleSelectOption = (questionId: string, answer: string) => {
    selectOption(questionId, answer);
    setShowExplanation(true);
    
    // Add a delay before automatically going to the next question
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        goToNextQuestion();
        setShowExplanation(false);
      }
    }, 2000);
  };

  const finishQuiz = () => {
    submitQuiz();
    
    // Record assignment attempt if this was an assignment
    if (isAssignment && assignmentId) {
      const completed = questions.length;
      const correct = questions.filter(
        (q) => selectedOptions[q.id] === q.correctAnswer
      ).length;
      
      recordAssignmentAttempt(assignmentId, completed, correct, questions.length);
      toast.success("Assignment completed successfully!");
    }
    
    navigate('/results');
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
            <h1 className="text-3xl font-display font-bold mb-2">
              {isAssignment ? "Complete Assignment" : "Start a Practice Quiz"}
            </h1>
            <p className="text-muted-foreground mb-8">
              {isAssignment 
                ? "Complete this assignment to track your progress" 
                : "Customize your quiz settings and start practicing"
              }
            </p>

            <QuizSetupForm
              subject={subject}
              setSubject={setSubject}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              numQuestions={numQuestions}
              setNumQuestions={setNumQuestions}
              timePerQuestion={timePerQuestion}
              setTimePerQuestion={setTimePerQuestion}
              onStartQuiz={handleStartQuiz}
              isAssignment={isAssignment}
              isSubjectLocked={(location.state as any)?.preSelectedSubject !== undefined}
            />
          </>
        ) : (
          <ActiveQuiz
            currentQuestion={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            questions={questions}
            selectedOptions={selectedOptions}
            timeLeft={timeLeft}
            showExplanation={showExplanation}
            onSelectOption={handleSelectOption}
            onFinishQuiz={finishQuiz}
          />
        )}
      </main>
    </div>
  );
};

export default QuizPage;
