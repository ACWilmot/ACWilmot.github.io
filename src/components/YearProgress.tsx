
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Subject } from '@/types/questionTypes';

interface YearProgressProps {
  subject: Subject;
  progress: {
    completed: number;
    correct: number;
    lastAttempted: string | null;
  };
}

const YearProgress: React.FC<YearProgressProps> = ({ subject, progress }) => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  
  // In a real application, you would fetch year-specific progress
  // For now, we'll use the overall progress data
  
  const years = ['all', '3', '4', '5', '6'];
  const accuracy = progress.completed > 0 ? Math.round((progress.correct / progress.completed) * 100) : 0;
  
  const getSubjectDisplayName = (subject: Subject): string => {
    switch (subject) {
      case 'maths': return 'Maths';
      case 'english': return 'English';
      case 'verbal': return 'Verbal Reasoning';
      case 'history': return 'History';
      case 'geography': return 'Geography';
      case 'religiousEd': return 'Religious Ed';
      default: return subject;
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{getSubjectDisplayName(subject)}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4 grid grid-cols-5 w-full">
            {years.map(year => (
              <TabsTrigger 
                key={year} 
                value={year}
                className="text-sm"
              >
                {year === 'all' ? 'All Years' : `Year ${year}`}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {years.map(year => (
            <TabsContent key={year} value={year} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Questions Completed</p>
                  <p className="text-2xl font-bold">{progress.completed}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                  <p className="text-2xl font-bold">{accuracy}%</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Progress</p>
                <Progress value={accuracy} className="h-2 mt-1" />
              </div>
              
              {progress.lastAttempted && (
                <p className="text-xs text-muted-foreground mt-2">
                  Last attempted: {new Date(progress.lastAttempted).toLocaleDateString()}
                </p>
              )}
              
              {year !== 'all' && (
                <div className="bg-muted p-3 rounded-md mt-3">
                  <p className="text-sm">
                    Note: Year-specific data will be available as you complete more quizzes
                    with the year level filter applied.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default YearProgress;
