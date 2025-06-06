
import React from 'react';
import { CheckCircle, XCircle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Question, Difficulty, VerbalType } from '@/types/questionTypes';

interface QuestionCardProps {
  question: Question;
  userAnswer: string | undefined;
  onAnswer: (answer: string) => void;
  showExplanation: boolean;
}

const verbalTypeLabels: Record<VerbalType, string> = {
  insertLetter: 'Insert a Letter',
  twoOddOnes: 'Two Odd Ones Out',
  relatedWords: 'Related Words',
  closestMeaning: 'Closest Meaning',
  hiddenWord: 'Hidden Word',
  missingWord: 'Missing Word',
  lettersNumbers: 'Letters for Numbers',
  moveLetter: 'Move a Letter',
  letterSeries: 'Letter Series',
  wordConnections: 'Word Connections',
  numberSeries: 'Number Series',
  compoundWords: 'Compound Words',
  makeWord: 'Make a Word',
  letterConnections: 'Letter Connections',
  readingInfo: 'Reading Information',
  oppositeMeaning: 'Opposite Meaning',
  completeSum: 'Complete the Sum',
  relatedNumbers: 'Related Numbers',
  wordNumberCodes: 'Word-Number Codes',
  completeWord: 'Complete the Word',
  sameMeaning: 'Same Meaning',
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userAnswer,
  onAnswer,
  showExplanation
}) => {
  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/10 text-green-600';
      case 'medium': return 'bg-amber-500/10 text-amber-600';
      case 'hard': return 'bg-rose-500/10 text-rose-600';
      default: return 'bg-primary/10 text-primary';
    }
  };

  const getDifficultyIcon = (difficulty: Difficulty) => {
    return (
      <Shield className="h-3 w-3 mr-1" />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto glass rounded-2xl p-8"
    >
      <div className="flex items-start gap-2 mb-6 flex-wrap">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
          {question.subject.charAt(0).toUpperCase() + question.subject.slice(1)}
        </span>
        <span className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
          {getDifficultyIcon(question.difficulty)}
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </span>
        {question.subject === 'verbal' && question.verbalType && (
          <span className="bg-purple-500/10 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
            {verbalTypeLabels[question.verbalType]}
          </span>
        )}
      </div>
      
      <h2 className="text-xl font-display mb-6">{question.text}</h2>
      
      {/* Display question image if available */}
      {question.imageUrl && (
        <div className="mb-6">
          <img 
            src={question.imageUrl} 
            alt={`Visual for question ${question.id}`} 
            className="mx-auto rounded-md max-h-64 object-contain"
          />
        </div>
      )}
      
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <Option
            key={index}
            option={option}
            index={index}
            isSelected={userAnswer === option}
            isCorrect={question.correctAnswer === option}
            showCorrectness={!!userAnswer}
            onSelect={() => onAnswer(option)}
            imageUrl={question.optionImages?.[index]}
          />
        ))}
      </div>
      
      <AnimatePresence>
        {userAnswer && showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-muted p-4 rounded-lg border"
          >
            <p className="text-sm">
              <span className="font-medium">Explanation: </span>
              {question.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface OptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showCorrectness: boolean;
  onSelect: () => void;
  imageUrl?: string;
}

const Option: React.FC<OptionProps> = ({
  option,
  index,
  isSelected,
  isCorrect,
  showCorrectness,
  onSelect,
  imageUrl
}) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  return (
    <motion.button
      whileHover={{ scale: showCorrectness ? 1 : 1.01 }}
      whileTap={{ scale: showCorrectness ? 1 : 0.99 }}
      onClick={showCorrectness ? undefined : onSelect}
      disabled={showCorrectness}
      className={cn(
        "w-full p-4 rounded-lg border flex items-center gap-3 text-left transition-all",
        isSelected && !showCorrectness && "border-primary/50 bg-primary/5",
        isSelected && showCorrectness && isCorrect && "border-green-500/50 bg-green-50",
        isSelected && showCorrectness && !isCorrect && "border-red-500/50 bg-red-50",
        !isSelected && showCorrectness && isCorrect && "border-green-500/50 bg-green-50",
        !isSelected && !showCorrectness && "hover:border-primary/50 hover:bg-primary/5",
      )}
    >
      <span className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm",
        isSelected && !showCorrectness && "bg-primary/10 text-primary",
        isSelected && showCorrectness && isCorrect && "bg-green-100 text-green-600",
        isSelected && showCorrectness && !isCorrect && "bg-red-100 text-red-600",
        !isSelected && showCorrectness && isCorrect && "bg-green-100 text-green-600",
        !isSelected && !showCorrectness && "bg-secondary text-muted-foreground",
      )}>
        {letters[index]}
      </span>
      
      <div className="flex-grow flex flex-col">
        <span className={cn(
          "flex-grow",
          isSelected && showCorrectness && !isCorrect && "text-red-600",
          !isSelected && showCorrectness && isCorrect && "text-green-600"
        )}>
          {option}
        </span>
        
        {/* Display option image if available */}
        {imageUrl && (
          <div className="mt-2">
            <img 
              src={imageUrl} 
              alt={`Option ${letters[index]}`} 
              className="rounded-md max-h-32 object-contain"
            />
          </div>
        )}
      </div>
      
      {showCorrectness && (
        <>
          {isCorrect ? (
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          ) : (
            isSelected && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          )}
        </>
      )}
    </motion.button>
  );
};

interface OptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showCorrectness: boolean;
  onSelect: () => void;
  imageUrl?: string;
}

export default QuestionCard;
