
import React, { useState } from 'react';
import { Printer, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import PrintableWorksheet from '@/components/PrintableWorksheet';
import WorksheetUploader from '@/components/teacher/WorksheetUploader';
import { Subject } from '@/types/questionTypes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define prop types for our component
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
  const [activeTab, setActiveTab] = useState("download");

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
          {showWorksheetOption ? 'Hide Worksheet Options' : 'Worksheet Options'}
        </Button>
      </div>
      
      {showWorksheetOption && (
        <div className="mt-4 mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 w-[300px]">
              <TabsTrigger value="download" className="flex items-center gap-1.5">
                <Printer className="h-4 w-4" />
                Print Worksheet
              </TabsTrigger>
              <TabsTrigger value="upload" className="flex items-center gap-1.5">
                <Upload className="h-4 w-4" />
                Upload Completed
              </TabsTrigger>
            </TabsList>
            <TabsContent value="download" className="mt-4">
              <PrintableWorksheet 
                questions={questions}
                subject={subject}
                difficulty={difficulty}
              />
            </TabsContent>
            <TabsContent value="upload" className="mt-4">
              {/* @ts-ignore - The component accepts this prop */}
              <WorksheetUploader inQuiz={true} />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default WorksheetOptions;
