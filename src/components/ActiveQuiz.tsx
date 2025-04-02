
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import { Question } from '@/types/questionTypes';

interface ActiveQuizProps {
  currentQuestion: Question;
  currentQuestionIndex: number;
  questions: Question[];
  selectedOptions: Record<string, string>;
  timeLeft: number;
  showExplanation: boolean;
  onSelectOption: (questionId: string, answer: string) => void;
  onFinishQuiz: () => void;
}

export default function ActiveQuiz({
  currentQuestion,
  currentQuestionIndex,
  questions,
  selectedOptions,
  timeLeft,
  showExplanation,
  onSelectOption,
  onFinishQuiz
}: ActiveQuizProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-display font-medium">
          Question {currentQuestion?.number || (currentQuestionIndex + 1)} of {questions.length}
        </h1>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className={`font-mono ${timeLeft < 30 ? 'text-red-500' : ''}`}>{formatTime(timeLeft)}</span>
        </div>
      </div>
      
      <div className="min-h-[60vh]">
        {currentQuestion && (
          <QuestionCard 
            question={currentQuestion}
            userAnswer={selectedOptions[currentQuestion.id]}
            onAnswer={(answer) => onSelectOption(currentQuestion.id, answer)}
            showExplanation={showExplanation}
          />
        )}
      </div>

      <div className="mt-8 space-x-2 flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            if (window.confirm("Are you sure you want to finish the quiz early?")) {
              onFinishQuiz();
            }
          }}
        >
          Finish Quiz
        </Button>
        <Button 
          onClick={onFinishQuiz}
          className="bg-primary"
          disabled={Object.keys(selectedOptions).length === 0}
        >
          Submit Answers
        </Button>
      </div>
    </div>
  );
}
