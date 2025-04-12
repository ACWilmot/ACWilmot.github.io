
import React from 'react';
import { Shield, CircleOff } from 'lucide-react';
import { Difficulty } from '@/types/questionTypes';
import { cn } from '@/lib/utils';

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty | 'all';
  onChange: (difficulty: Difficulty | 'all') => void;
  className?: string;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ 
  selectedDifficulty, 
  onChange,
  className
}) => {
  const difficulties: Array<{ value: Difficulty | 'all', label: string, color: string, iconColor: string }> = [
    { 
      value: 'all', 
      label: 'All Levels', 
      color: 'bg-primary/5 hover:bg-primary/10 text-primary',
      iconColor: 'text-primary'
    },
    { 
      value: 'easy', 
      label: 'Easy', 
      color: 'bg-green-500/5 hover:bg-green-500/10 text-green-600', 
      iconColor: 'text-green-500'
    },
    { 
      value: 'medium', 
      label: 'Medium', 
      color: 'bg-amber-500/5 hover:bg-amber-500/10 text-amber-600', 
      iconColor: 'text-amber-500'
    },
    { 
      value: 'hard', 
      label: 'Hard', 
      color: 'bg-rose-500/5 hover:bg-rose-500/10 text-rose-600', 
      iconColor: 'text-rose-500'
    }
  ];

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {difficulties.map(difficulty => (
        <button
          key={difficulty.value}
          onClick={() => onChange(difficulty.value)}
          className={cn(
            "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5",
            difficulty.color,
            selectedDifficulty === difficulty.value ? 'ring-2 ring-offset-1 ring-offset-background ring-primary/20' : ''
          )}
        >
          {difficulty.value === 'all' ? (
            <CircleOff className={cn("h-4 w-4", difficulty.iconColor)} />
          ) : (
            <Shield className={cn("h-4 w-4", difficulty.iconColor)} />
          )}
          {difficulty.label}
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
