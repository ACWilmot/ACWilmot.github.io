
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentQuestion, 
  totalQuestions,
  className 
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  const formattedProgress = Math.round(progress);
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between text-xs text-muted-foreground mb-1">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{formattedProgress}% Complete</span>
      </div>
      
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
