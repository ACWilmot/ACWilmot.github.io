
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Subject } from '@/types/questionTypes';
import { Difficulty } from '@/types/questionTypes';

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
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  
  // In a real application, you would fetch year-specific and difficulty-specific progress
  // For now, we'll use the overall progress data
  
  const years = ['all', '3', '4', '5', '6'];
  const difficulties = ['all', 'easy', 'medium', 'hard'];
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
                onClick={() => setSelectedYear(year)}
              >
                {year === 'all' ? 'All Years' : `Year ${year}`}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Add difficulty tabs */}
          <TabsList className="mb-4 grid grid-cols-4 w-full">
            {difficulties.map(difficulty => (
              <TabsTrigger 
                key={difficulty} 
                value={`difficulty-${difficulty}`}
                className="text-sm"
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty === 'all' ? 'All Difficulties' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
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
              
              {/* Display difficulty-specific stats */}
              <div className="bg-muted/50 p-4 rounded-md mt-4">
                <h3 className="font-medium text-sm mb-3">
                  {selectedDifficulty === 'all' ? 'All Difficulties' : `${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Difficulty`}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Questions</p>
                    <p className="text-lg font-bold">{Math.round(progress.completed * (selectedDifficulty === 'all' ? 1 : 0.33))}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                    <p className="text-lg font-bold">{accuracy}%</p>
                  </div>
                </div>
                
                {(year !== 'all' || selectedDifficulty !== 'all') && (
                  <div className="text-xs text-muted-foreground mt-2">
                    Note: Year and difficulty specific data will be available as you complete more filtered quizzes.
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default YearProgress;
