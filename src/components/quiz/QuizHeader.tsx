
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Difficulty } from '@/types/questionTypes';

interface QuizHeaderProps {
  subject: string | null;
  difficulty: string;
  questionCount: number;
  totalQuestions: number;
  onExit: () => void;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  subject,
  difficulty,
  questionCount,
  totalQuestions,
  onExit,
}) => {
  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/10 text-green-600';
      case 'medium': return 'bg-amber-500/10 text-amber-600';
      case 'hard': return 'bg-rose-500/10 text-rose-600';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={onExit}
        className="h-9 w-9 rounded-full"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Back to home</span>
      </Button>
      
      <div>
        <h1 className="text-xl font-display font-semibold">
          {subject?.charAt(0).toUpperCase() + subject?.slice(1)} Practice
          {difficulty !== 'all' && (
            <span className={`ml-2 text-sm px-2 py-0.5 rounded-full ${getDifficultyColor(difficulty as Difficulty)}`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          )}
        </h1>
        <p className="text-sm text-muted-foreground">
          {totalQuestions} questions selected from the question pool
        </p>
      </div>
    </div>
  );
};

export default QuizHeader;
