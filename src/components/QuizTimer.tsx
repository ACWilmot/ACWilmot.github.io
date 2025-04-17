
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { formatTime } from '@/utils/timeUtils';

interface QuizTimerProps {
  startTime: number | null;
  className?: string;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ startTime, className }) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  
  useEffect(() => {
    if (!startTime) return;
    
    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [startTime]);
  
  if (!startTime) return null;
  
  const formattedTime = formatTime(elapsedTime);
  
  return (
    <div className={`flex items-center gap-1.5 text-sm ${className || ''}`}>
      <Clock className="h-4 w-4 text-muted-foreground" />
      <span>{formattedTime}</span>
    </div>
  );
};

export default QuizTimer;
