
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Calculator, Brain, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Subject } from '@/context/QuizContext';

interface SubjectCardProps {
  subject: Subject;
  name: string;
  description: string;
  onClick: () => void;
  className?: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  name,
  description,
  onClick,
  className,
}) => {
  const getSubjectIcon = () => {
    switch (subject) {
      case 'maths':
        return <Calculator className="h-6 w-6" />;
      case 'english':
        return <PenTool className="h-6 w-6" />;
      case 'verbal':
        return <Book className="h-6 w-6" />;
      case 'non-verbal':
        return <Brain className="h-6 w-6" />;
      default:
        return <Book className="h-6 w-6" />;
    }
  };

  const getSubjectColor = () => {
    switch (subject) {
      case 'maths':
        return 'bg-blue-50 text-blue-500 border-blue-100';
      case 'english':
        return 'bg-indigo-50 text-indigo-500 border-indigo-100';
      case 'verbal':
        return 'bg-purple-50 text-purple-500 border-purple-100';
      case 'non-verbal':
        return 'bg-pink-50 text-pink-500 border-pink-100';
      default:
        return 'bg-blue-50 text-blue-500 border-blue-100';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)' }}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 flex flex-col glass cursor-pointer transition-all",
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        "absolute top-0 left-0 h-1 w-full",
        subject === 'maths' ? 'bg-blue-500' :
        subject === 'english' ? 'bg-indigo-500' :
        subject === 'verbal' ? 'bg-purple-500' :
        'bg-pink-500'
      )} />
      
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
        getSubjectColor()
      )}>
        {getSubjectIcon()}
      </div>
      
      <h3 className="text-lg font-display font-semibold mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{description}</p>
      
      <motion.div 
        className="mt-4 text-sm font-medium text-primary flex items-center"
        whileHover={{ x: 5 }}
      >
        Start practicing
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default SubjectCard;
