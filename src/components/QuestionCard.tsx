
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Question } from '@/types/questionTypes';

interface QuestionCardProps {
  question: Question;
  userAnswer: string | undefined;
  onAnswer: (answer: string) => void;
  showExplanation: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userAnswer,
  onAnswer,
  showExplanation
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto glass rounded-2xl p-8"
    >
      <div className="flex items-start gap-2 mb-6">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
          {question.subject.charAt(0).toUpperCase() + question.subject.slice(1)}
        </span>
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
        {Array.isArray(question.options) ? (
          // Handle array options
          question.options.map((option, index) => {
            const optionKey = String.fromCharCode(65 + index); // A, B, C, D...
            return (
              <Option
                key={index}
                option={option}
                optionKey={optionKey}
                index={index}
                isSelected={userAnswer === optionKey}
                isCorrect={question.correctAnswer === optionKey}
                showCorrectness={!!userAnswer}
                onSelect={() => onAnswer(optionKey)}
                imageUrl={question.optionImages?.[index]}
              />
            );
          })
        ) : (
          // Handle object options (A, B, C, D format)
          Object.entries(question.options).map(([key, value], index) => (
            <Option
              key={key}
              option={value}
              optionKey={key}
              index={index}
              isSelected={userAnswer === key}
              isCorrect={question.correctAnswer === key}
              showCorrectness={!!userAnswer}
              onSelect={() => onAnswer(key)}
              imageUrl={question.optionImages?.[index]}
            />
          ))
        )}
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
  optionKey: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showCorrectness: boolean;
  onSelect: () => void;
  imageUrl?: string;
}

const Option: React.FC<OptionProps> = ({
  option,
  optionKey,
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
        {optionKey}
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
              alt={`Option ${optionKey}`} 
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

export default QuestionCard;
