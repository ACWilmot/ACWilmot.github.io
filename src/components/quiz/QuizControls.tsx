
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuizControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  isAnswered: boolean;
}

const QuizControls: React.FC<QuizControlsProps> = ({
  onPrevious,
  onNext,
  isFirstQuestion,
  isLastQuestion,
  isAnswered,
}) => {
  return (
    <div className="flex justify-between mt-8 max-w-2xl mx-auto">
      <Button 
        variant="outline"
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="flex items-center gap-2"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      
      <Button
        onClick={onNext}
        disabled={!isAnswered}
        className="flex items-center gap-2"
      >
        {isLastQuestion ? 'Finish Quiz' : 'Next'}
        {!isLastQuestion && <ChevronRight className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default QuizControls;
