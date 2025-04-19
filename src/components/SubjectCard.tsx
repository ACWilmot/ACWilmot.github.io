
import React from 'react';
import { cn } from '@/lib/utils';
import { Subject } from '@/context/QuizContext';

interface SubjectCardProps {
  subject: Subject;
  description: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  description,
  icon,
  isSelected,
  onClick,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-4 rounded-xl border border-border transition-all duration-200 flex flex-col items-start text-left h-full",
        isSelected
          ? "bg-primary/10 border-primary"  // Slightly darker shade for selected state
          : "hover:bg-primary/5 hover:border-primary/40",
        className
      )}
    >
      <div className={cn(
        "p-2 rounded-md mb-3",
        isSelected
          ? "bg-primary/20 text-primary"  // Increased opacity for icon background
          : "bg-muted text-muted-foreground"
      )}>
        {icon}
      </div>
      <h3 className="font-medium mb-1 capitalize">{subject}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </button>
  );
};

export default SubjectCard;
