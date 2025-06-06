
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { VerbalType } from '@/types/questionTypes';

interface VerbalTypesSelectorProps {
  selectedTypes: VerbalType[];
  onChange: (types: VerbalType[]) => void;
  className?: string;
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

const VerbalTypesSelector: React.FC<VerbalTypesSelectorProps> = ({
  selectedTypes,
  onChange,
  className = "",
}) => {
  const handleTypeToggle = (type: VerbalType) => {
    if (selectedTypes.includes(type)) {
      onChange(selectedTypes.filter(t => t !== type));
    } else {
      onChange([...selectedTypes, type]);
    }
  };

  const handleSelectAll = () => {
    if (selectedTypes.length === Object.keys(verbalTypeLabels).length) {
      onChange([]);
    } else {
      onChange(Object.keys(verbalTypeLabels) as VerbalType[]);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Select Verbal Reasoning Types</h3>
        <button
          onClick={handleSelectAll}
          className="text-sm text-primary hover:underline"
        >
          {selectedTypes.length === Object.keys(verbalTypeLabels).length ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.entries(verbalTypeLabels).map(([type, label]) => (
          <div key={type} className="flex items-center space-x-2">
            <Checkbox
              id={type}
              checked={selectedTypes.includes(type as VerbalType)}
              onCheckedChange={() => handleTypeToggle(type as VerbalType)}
            />
            <label
              htmlFor={type}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-muted-foreground">
        {selectedTypes.length} of {Object.keys(verbalTypeLabels).length} types selected
      </p>
    </div>
  );
};

export default VerbalTypesSelector;
