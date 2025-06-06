
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { VerbalQuestionType } from '@/types/questionTypes';

interface VerbalTypesSelectorProps {
  selectedTypes: VerbalQuestionType[];
  onTypesChange: (types: VerbalQuestionType[]) => void;
  className?: string;
}

// Mapping of verbal types to their descriptions
const verbalTypeDescriptions: Record<VerbalQuestionType, { title: string; description: string }> = {
  insertLetter: { title: 'TYPE 1: Insert a Letter', description: 'Same letter fits into both sets of brackets' },
  twoOddOnes: { title: 'TYPE 2: Two Odd Ones Out', description: 'Find two words that do NOT go with the other three' },
  relatedWords: { title: 'TYPE 3: Related Words', description: 'Work out a different code for each question' },
  closestMeaning: { title: 'TYPE 4: Closest Meaning', description: 'Find two words that are closest in meaning' },
  hiddenWord: { title: 'TYPE 5: Hidden Word', description: 'Find a four letter word hidden between two words' },
  missingWord: { title: 'TYPE 6: Missing Word', description: 'Find three consecutive letters that make a word' },
  lettersForNumbers: { title: 'TYPE 7: Letters for Numbers', description: 'Letters stand for numbers, solve the sum' },
  moveALetter: { title: 'TYPE 8: Move a Letter', description: 'Move one letter to make two new words' },
  letterSeries: { title: 'TYPE 9: Letter Series', description: 'Continue the letter series' },
  wordConnections: { title: 'TYPE 10: Word Connections', description: 'Complete the sentence connections' },
  numberSeries: { title: 'TYPE 11: Number Series', description: 'Continue the number sequence' },
  compoundWords: { title: 'TYPE 12: Compound Words', description: 'Make a correctly spelt compound word' },
  makeAWord: { title: 'TYPE 13: Make a Word', description: 'Complete the second group like the first' },
  letterConnections: { title: 'TYPE 14: Letter Connections', description: 'Find letters that complete the connection' },
  readingInformation: { title: 'TYPE 15: Reading Information', description: 'Read and analyze given information' },
  oppositeMeaning: { title: 'TYPE 16: Opposite Meaning', description: 'Find words with opposite meanings' },
  completeTheSum: { title: 'TYPE 17: Complete the Sum', description: 'Find the number to complete the sum' },
  relatedNumbers: { title: 'TYPE 18: Related Numbers', description: 'Numbers in groups are related the same way' },
  wordNumberCodes: { title: 'TYPE 19: Word-Number Codes', description: 'Work out codes for words and numbers' },
  completeTheWord: { title: 'TYPE 20: Complete the Word', description: 'Complete word pairs in the same way' },
  sameMeaning: { title: 'TYPE 21: Same Meaning', description: 'One word goes with both pairs of words' }
};

const VerbalTypesSelector: React.FC<VerbalTypesSelectorProps> = ({
  selectedTypes,
  onTypesChange,
  className = ''
}) => {
  const handleTypeToggle = (type: VerbalQuestionType, checked: boolean) => {
    if (checked) {
      onTypesChange([...selectedTypes, type]);
    } else {
      onTypesChange(selectedTypes.filter(t => t !== type));
    }
  };

  const handleSelectAll = () => {
    if (selectedTypes.length === Object.keys(verbalTypeDescriptions).length) {
      onTypesChange([]);
    } else {
      onTypesChange(Object.keys(verbalTypeDescriptions) as VerbalQuestionType[]);
    }
  };

  const allSelected = selectedTypes.length === Object.keys(verbalTypeDescriptions).length;

  return (
    <div className={`glass rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Verbal Reasoning Question Types</h3>
        <button
          onClick={handleSelectAll}
          className="text-sm text-primary hover:underline"
        >
          {allSelected ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {Object.entries(verbalTypeDescriptions).map(([type, { title, description }]) => (
          <div key={type} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-secondary/20">
            <Checkbox
              id={type}
              checked={selectedTypes.includes(type as VerbalQuestionType)}
              onCheckedChange={(checked) => 
                handleTypeToggle(type as VerbalQuestionType, checked as boolean)
              }
              className="mt-1"
            />
            <div className="flex-1 min-w-0">
              <label 
                htmlFor={type} 
                className="text-sm font-medium cursor-pointer block"
              >
                {title}
              </label>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground">
        {selectedTypes.length} of {Object.keys(verbalTypeDescriptions).length} types selected
      </div>
    </div>
  );
};

export default VerbalTypesSelector;
