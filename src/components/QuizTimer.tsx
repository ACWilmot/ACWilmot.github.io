
import React, { useState, useEffect } from 'react';
import { Clock, Timer } from 'lucide-react';
import { formatTime } from '@/utils/timeUtils';

interface QuizTimerProps {
  startTime: number | null;
  timeLimit: number | null; // Time limit in seconds
  remainingTime: number | null; // Remaining time in seconds
  className?: string;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ startTime, timeLimit, remainingTime, className }) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  
  useEffect(() => {
    if (!startTime) return;
    
    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [startTime]);
  
  if (!startTime) return null;
  
  // Show countdown timer if time limit is set
  if (timeLimit && remainingTime !== null) {
    // Format differently if less than 60 seconds left
    if (remainingTime < 60) {
      return (
        <div className={`flex items-center gap-1.5 text-sm font-medium ${remainingTime < 30 ? 'text-red-500' : ''} ${className || ''}`}>
          <Timer className={`h-4 w-4 ${remainingTime < 30 ? 'text-red-500' : 'text-muted-foreground'}`} />
          <span>{remainingTime} seconds</span>
        </div>
      );
    }
    
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedCountdown = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    return (
      <div className={`flex items-center gap-1.5 text-sm font-medium ${remainingTime < 60 ? 'text-red-500' : ''} ${className || ''}`}>
        <Timer className={`h-4 w-4 ${remainingTime < 60 ? 'text-red-500' : 'text-muted-foreground'}`} />
        <span>{formattedCountdown}</span>
      </div>
    );
  }
  
  // Show elapsed time if no time limit
  const formattedTime = formatTime(elapsedTime);
  
  return (
    <div className={`flex items-center gap-1.5 text-sm ${className || ''}`}>
      <Clock className="h-4 w-4 text-muted-foreground" />
      <span>{formattedTime}</span>
    </div>
  );
};

export default QuizTimer;
