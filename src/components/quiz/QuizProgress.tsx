
import React, { useState } from 'react';
import { List, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Question } from '@/types/questionTypes';
import ProgressBar from '@/components/ProgressBar';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answers: Record<string, string>;
  questions: Question[];
}

const QuizProgress: React.FC<QuizProgressProps> = ({ 
  currentQuestion,
  totalQuestions,
  answers,
  questions
}) => {
  const [open, setOpen] = useState(false);
  
  // Calculate stats
  const answeredQuestions = Object.keys(answers).length;
  const unansweredQuestions = totalQuestions - answeredQuestions;
  const percentage = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;
  
  // Calculate correct answers
  const correctCount = questions.filter(q => answers[q.id] === q.correctAnswer).length;
  
  return (
    <div className="mt-12 text-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 mx-auto"
          >
            <List className="h-4 w-4" />
            View Progress
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display mb-2">Quiz Progress</DialogTitle>
            <DialogDescription>
              Your progress in the current quiz
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <ProgressBar 
              currentQuestion={currentQuestion} 
              totalQuestions={totalQuestions} 
            />
            
            <div className="grid grid-cols-3 gap-3 text-center">
              <Card className="p-3">
                <p className="text-xl font-display font-bold">{answeredQuestions}</p>
                <p className="text-xs text-muted-foreground">Answered</p>
              </Card>
              <Card className="p-3">
                <p className="text-xl font-display font-bold">{correctCount}</p>
                <p className="text-xs text-muted-foreground">Correct</p>
              </Card>
              <Card className="p-3">
                <p className="text-xl font-display font-bold">{unansweredQuestions}</p>
                <p className="text-xs text-muted-foreground">Remaining</p>
              </Card>
            </div>
            
            {answeredQuestions > 0 && (
              <div className="space-y-2">
                <h3 className="font-medium text-sm">Answered Questions:</h3>
                <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
                  {questions.map((question, index) => {
                    if (!answers[question.id]) return null;
                    
                    const isCorrect = answers[question.id] === question.correctAnswer;
                    
                    return (
                      <Card key={question.id} className="flex items-center p-3 text-left text-sm">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                          isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {isCorrect ? (
                            <Check className="h-3 w-3" />
                          ) : (
                            <X className="h-3 w-3" />
                          )}
                        </div>
                        <p className="line-clamp-1">{index + 1}. {question.text}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
            
            <div className="pt-2 text-center">
              <DialogClose asChild>
                <Button variant="outline">Continue Quiz</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuizProgress;
