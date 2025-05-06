
import React from 'react';
import QuizTimer from '@/components/QuizTimer';

interface QuizHeaderProps {
  subject: string | null;
  difficulty: string | null;
  questionCount: number;
  startTime: Date | null;
  isHomework?: boolean;
  homeworkTitle?: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ 
  subject, 
  difficulty, 
  questionCount, 
  startTime,
  isHomework = false,
  homeworkTitle
}) => {
  const getSubjectDisplay = () => {
    switch(subject) {
      case 'maths': return 'Mathematics';
      case 'english': return 'English';
      case 'verbal': return 'Verbal Reasoning';
      case 'nonVerbal': return 'Non-verbal Reasoning';
      default: return subject;
    }
  };

  const getDifficultyDisplay = () => {
    switch(difficulty) {
      case 'easy': return 'Easy';
      case 'medium': return 'Medium';
      case 'hard': return 'Hard';
      default: return difficulty;
    }
  };

  return (
    <div className="sticky top-0 bg-background border-b z-10 shadow-sm">
      <div className="container max-w-4xl px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <div>
            {isHomework ? (
              <h1 className="text-lg font-bold tracking-tight sm:text-xl">
                Homework: {homeworkTitle}
              </h1>
            ) : (
              <h1 className="text-lg font-bold tracking-tight sm:text-xl">
                Practice Quiz
              </h1>
            )}
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">{getSubjectDisplay()}</span>
              <span className="mx-1">•</span>
              <span className="capitalize">{getDifficultyDisplay()}</span>
              <span className="mx-1">•</span>
              <span>{questionCount} questions</span>
            </div>
          </div>
          {startTime && (
            <div className="flex items-center">
              <QuizTimer startTime={startTime} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
