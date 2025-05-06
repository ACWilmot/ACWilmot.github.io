
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizHeader from './QuizHeader';
import QuizControls from './QuizControls';
import QuizProgress from './QuizProgress';
import QuestionCard from '@/components/QuestionCard';
import { Question } from '@/types/questionTypes';

interface QuizContentProps {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<string, string>;
  selectedSubject: string | null;
  selectedDifficulty: string | null;
  questionCount: number;
  startTime: Date | null;
  answerQuestion: (questionId: string, answer: string) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  resetQuiz: () => void;
  endQuiz: () => void;
  isHomework?: boolean;
  homeworkTitle?: string;
}

const QuizContent: React.FC<QuizContentProps> = ({
  questions,
  currentQuestionIndex,
  userAnswers,
  selectedSubject,
  selectedDifficulty,
  questionCount,
  startTime,
  answerQuestion,
  goToNextQuestion,
  goToPreviousQuestion,
  resetQuiz,
  endQuiz,
  isHomework = false,
  homeworkTitle
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // If the reset happens during this component's lifecycle, go back to the home page
    if (questions.length === 0) {
      navigate('/');
    }
  }, [questions, navigate]);

  if (!questions[currentQuestionIndex]) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasAnsweredCurrent = userAnswers[currentQuestion.id] !== undefined;
  const hasAnsweredAll = questions.every(q => userAnswers[q.id] !== undefined);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <QuizHeader 
        subject={selectedSubject} 
        difficulty={selectedDifficulty} 
        questionCount={questionCount}
        startTime={startTime}
        isHomework={isHomework}
        homeworkTitle={homeworkTitle}
      />

      <div className="container max-w-4xl px-4 py-8 flex-grow">
        <QuizProgress 
          currentQuestion={currentQuestionIndex + 1} 
          totalQuestions={questions.length} 
          answers={userAnswers}
          questions={questions}
        />

        <QuestionCard 
          question={currentQuestion}
          userAnswer={userAnswers[currentQuestion.id]}
          onAnswerSelected={(answer) => answerQuestion(currentQuestion.id, answer)}
          showFeedback={false}
        />
        
        <QuizControls 
          onPrevious={goToPreviousQuestion}
          onNext={goToNextQuestion}
          onFinish={endQuiz}
          onReset={resetQuiz}
          isFirstQuestion={isFirstQuestion}
          isLastQuestion={isLastQuestion}
          hasAnsweredCurrent={hasAnsweredCurrent}
          hasAnsweredAll={hasAnsweredAll}
          isHomework={isHomework}
        />
      </div>
    </div>
  );
};

export default QuizContent;
