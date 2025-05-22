
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Plus } from 'lucide-react';
import { Subject } from '@/types/questionTypes';

const WorksheetOptions: React.FC<{
  subject: Subject;
  onStartWorksheet: (worksheetId: string) => void;
}> = ({ subject, onStartWorksheet }) => {
  const [activeTab, setActiveTab] = useState('practice');
  
  const demoWorksheets = [
    {
      id: 'ws1',
      title: 'Addition and Subtraction',
      subject: 'maths',
      questions: 10,
      description: 'Practice basic addition and subtraction skills.',
    },
    {
      id: 'ws2',
      title: 'Multiplication Tables',
      subject: 'maths',
      questions: 15,
      description: 'Test your knowledge of multiplication tables 1-12.',
    },
    {
      id: 'ws3',
      title: 'Reading Comprehension',
      subject: 'english',
      questions: 8,
      description: 'Answer questions about short reading passages.',
    },
    {
      id: 'ws4',
      title: 'Word Puzzles',
      subject: 'verbal',
      questions: 12,
      description: 'Solve various verbal reasoning puzzles.',
    }
  ].filter(ws => ws.subject === subject || subject === 'all');

  return (
    <div className="w-full">
      <div className="space-y-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {demoWorksheets.length > 0 ? (
            demoWorksheets.map(worksheet => (
              <div 
                key={worksheet.id}
                className="border rounded-lg p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer"
                onClick={() => onStartWorksheet(worksheet.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">{worksheet.title}</h3>
                    <p className="text-sm text-muted-foreground">{worksheet.questions} questions</p>
                  </div>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm mt-2">{worksheet.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-8">
              <p className="text-muted-foreground">No worksheets available for this subject yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorksheetOptions;
