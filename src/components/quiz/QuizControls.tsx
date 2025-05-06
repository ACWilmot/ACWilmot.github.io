
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  RefreshCcw
} from 'lucide-react';

interface QuizControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
  onReset: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  hasAnsweredCurrent: boolean;
  hasAnsweredAll: boolean;
  isHomework?: boolean;
}

const QuizControls: React.FC<QuizControlsProps> = ({ 
  onPrevious, 
  onNext, 
  onFinish, 
  onReset, 
  isFirstQuestion, 
  isLastQuestion, 
  hasAnsweredCurrent, 
  hasAnsweredAll,
  isHomework = false
}) => {
  return (
    <div className="mt-6 flex justify-between items-center flex-wrap gap-3">
      <Button
        variant="ghost"
        onClick={onPrevious}
        disabled={isFirstQuestion}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>
      
      <div className="flex items-center gap-3">
        {!isHomework && (
          <Button
            variant="outline"
            onClick={onReset}
          >
            <RefreshCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        )}
        
        {isLastQuestion && hasAnsweredAll ? (
          <Button
            onClick={onFinish}
            className="bg-green-600 hover:bg-green-700"
          >
            <Check className="h-4 w-4 mr-2" />
            Finish {isHomework ? 'Homework' : 'Quiz'}
          </Button>
        ) : (
          <Button
            onClick={onNext}
            disabled={!hasAnsweredCurrent}
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizControls;
