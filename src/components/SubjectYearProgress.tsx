
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from '@/components/ui/progress';
import { Separator } from "@/components/ui/separator";

interface DifficultyData {
  completed: number;
  correct: number;
  accuracy: number;
}

interface DifficultyProgress {
  easy: DifficultyData;
  medium: DifficultyData;
  hard: DifficultyData;
  all: DifficultyData;
}

interface YearProgressData {
  all: DifficultyProgress;
  "3": DifficultyProgress;
  "4": DifficultyProgress;
  "5": DifficultyProgress;
  "6": DifficultyProgress;
}

interface SubjectYearProgressProps {
  subject: string;
  yearProgress?: YearProgressData;
}

const SubjectYearProgress: React.FC<SubjectYearProgressProps> = ({ subject, yearProgress }) => {
  const [activeYearTab, setActiveYearTab] = useState<string>("all");

  if (!yearProgress) return <div>No progress data available</div>;

  const renderYearData = (year: string) => {
    const data = yearProgress[year as keyof YearProgressData];
    if (!data) return <div>No data for this year</div>;

    return (
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Overall Accuracy</span>
            <span>{data.all.accuracy}%</span>
          </div>
          <Progress value={data.all.accuracy} className="h-2" />
        </div>
        
        <Separator className="my-3" />
        
        <div className="text-sm font-medium mb-2">Accuracy by Difficulty</div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Easy</span>
            <span>{data.easy.accuracy}%</span>
          </div>
          <Progress 
            value={data.easy.accuracy} 
            className="h-2 bg-emerald-100 dark:bg-emerald-950" 
          />
          <div className="text-xs text-muted-foreground mt-1">
            {data.easy.correct} / {data.easy.completed} correct
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Medium</span>
            <span>{data.medium.accuracy}%</span>
          </div>
          <Progress 
            value={data.medium.accuracy} 
            className="h-2 bg-amber-100 dark:bg-amber-950" 
          />
          <div className="text-xs text-muted-foreground mt-1">
            {data.medium.correct} / {data.medium.completed} correct
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Hard</span>
            <span>{data.hard.accuracy}%</span>
          </div>
          <Progress 
            value={data.hard.accuracy} 
            className="h-2 bg-rose-100 dark:bg-rose-950" 
          />
          <div className="text-xs text-muted-foreground mt-1">
            {data.hard.correct} / {data.hard.completed} correct
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          <div className="border rounded-lg p-3">
            <div className="text-2xl font-bold">{data.all.completed}</div>
            <div className="text-xs text-muted-foreground">Total Questions</div>
          </div>
          <div className="border rounded-lg p-3">
            <div className="text-2xl font-bold">{data.all.correct}</div>
            <div className="text-xs text-muted-foreground">Correct Answers</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Tabs value={activeYearTab} onValueChange={setActiveYearTab} className="mt-2">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">All Years</TabsTrigger>
          <TabsTrigger value="3" className="flex-1">Year 3</TabsTrigger>
          <TabsTrigger value="4" className="flex-1">Year 4</TabsTrigger>
          <TabsTrigger value="5" className="flex-1">Year 5</TabsTrigger>
          <TabsTrigger value="6" className="flex-1">Year 6</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-3">
          {renderYearData("all")}
        </TabsContent>
        <TabsContent value="3" className="mt-3">
          {renderYearData("3")}
        </TabsContent>
        <TabsContent value="4" className="mt-3">
          {renderYearData("4")}
        </TabsContent>
        <TabsContent value="5" className="mt-3">
          {renderYearData("5")}
        </TabsContent>
        <TabsContent value="6" className="mt-3">
          {renderYearData("6")}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SubjectYearProgress;
