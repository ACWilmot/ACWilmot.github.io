
import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { formatTime } from '@/utils/timeUtils';

interface QuizTimerProps {
  startTime: number | null;
  questionStartTime: number | null;
  className?: string;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ startTime, questionStartTime, className }) => {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [questionTime, setQuestionTime] = useState<number>(0);
  
  useEffect(() => {
    if (!startTime) return;
    
    const interval = setInterval(() => {
      setTotalTime(Date.now() - startTime);
      if (questionStartTime) {
        setQuestionTime(Date.now() - questionStartTime);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [startTime, questionStartTime]);
  
  if (!startTime) return null;
  
  return (
    <div className={`flex flex-col gap-1 ${className || ''}`}>
      <div className="flex items-center gap-1.5 text-sm">
        <Timer className="h-4 w-4 text-muted-foreground" />
        <span>Total: {formatTime(totalTime)}</span>
      </div>
      {questionStartTime && (
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Timer className="h-4 w-4" />
          <span>Question: {formatTime(questionTime)}</span>
        </div>
      )}
    </div>
  );
};

export default QuizTimer;
