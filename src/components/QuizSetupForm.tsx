
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface QuizSetupFormProps {
  subject: string;
  setSubject: (value: string) => void;
  difficulty: string;
  setDifficulty: (value: string) => void;
  numQuestions: number;
  setNumQuestions: (value: number) => void;
  timePerQuestion: number;
  setTimePerQuestion: (value: number) => void;
  onStartQuiz: () => void;
  isAssignment: boolean;
  isSubjectLocked: boolean;
}

export default function QuizSetupForm({
  subject,
  setSubject,
  difficulty,
  setDifficulty,
  numQuestions,
  setNumQuestions,
  timePerQuestion,
  setTimePerQuestion,
  onStartQuiz,
  isAssignment,
  isSubjectLocked
}: QuizSetupFormProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <Select 
              value={subject} 
              onValueChange={(value) => setSubject(value)}
              disabled={isSubjectLocked}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maths">Mathematics</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="verbal">Verbal Reasoning</SelectItem>
                <SelectItem value="nonVerbal">Non-verbal Reasoning</SelectItem>
              </SelectContent>
            </Select>
            {isSubjectLocked && (
              <p className="text-xs text-muted-foreground">Subject selected from your assignment</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Difficulty</label>
            <Select value={difficulty} onValueChange={(value) => setDifficulty(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Number of Questions</label>
            <Select 
              value={numQuestions.toString()} 
              onValueChange={(value) => setNumQuestions(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Questions</SelectItem>
                <SelectItem value="10">10 Questions</SelectItem>
                <SelectItem value="15">15 Questions</SelectItem>
                <SelectItem value="20">20 Questions</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Time per Question</label>
            <Select 
              value={timePerQuestion.toString()} 
              onValueChange={(value) => setTimePerQuestion(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 seconds</SelectItem>
                <SelectItem value="60">60 seconds</SelectItem>
                <SelectItem value="90">90 seconds</SelectItem>
                <SelectItem value="120">120 seconds</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button className="w-full" onClick={onStartQuiz}>
            {isAssignment ? "Start Assignment" : "Start Quiz"}
          </Button>
        </div>
      </div>
      
      <div className="bg-muted/40 p-6 rounded-lg border shadow-sm">
        <h3 className="text-lg font-medium mb-4">Quiz Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subject:</span>
            <span className="font-medium capitalize">{
              subject === "nonVerbal" ? "Non-verbal Reasoning" : 
              subject === "maths" ? "Mathematics" : 
              subject === "verbal" ? "Verbal Reasoning" : "English"
            }</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Difficulty:</span>
            <span className="font-medium capitalize">{difficulty}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Questions:</span>
            <span className="font-medium">{numQuestions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Time per question:</span>
            <span className="font-medium">{timePerQuestion} seconds</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total time:</span>
            <span className="font-medium">{formatTime(numQuestions * timePerQuestion)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
