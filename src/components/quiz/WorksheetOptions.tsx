
import React from 'react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import PrintableWorksheet from '@/components/PrintableWorksheet';
import { Subject } from '@/context/QuizContext';

interface WorksheetOptionsProps {
  currentQuestion: number;
  totalQuestions: number;
  showWorksheetOption: boolean;
  setShowWorksheetOption: (show: boolean) => void;
  questions: any[];
  subject: Subject | null;
  difficulty: string;
}

const WorksheetOptions: React.FC<WorksheetOptionsProps> = ({
  currentQuestion,
  totalQuestions,
  showWorksheetOption,
  setShowWorksheetOption,
  questions,
  subject,
  difficulty,
}) => {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <ProgressBar 
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          className="md:max-w-sm"
        />
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowWorksheetOption(!showWorksheetOption)}
          className="flex items-center gap-1.5 ml-2"
        >
          <Printer className="h-4 w-4" />
          {showWorksheetOption ? 'Hide Worksheet Options' : 'Print Worksheet'}
        </Button>
      </div>
      
      {showWorksheetOption && (
        <div className="mb-8">
          <PrintableWorksheet 
            questions={questions}
            subject={subject}
            difficulty={difficulty}
          />
        </div>
      )}
    </div>
  );
};

export default WorksheetOptions;
