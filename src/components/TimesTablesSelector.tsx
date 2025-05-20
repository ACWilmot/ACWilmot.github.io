import React from 'react';
import { Button } from '@/components/ui/button';

interface TimesTablesSelectorProps {
  selectedTables: number[];
  onChange: (tables: number[]) => void;
  onStartQuiz: () => void;
}

const TimesTablesSelector = ({ 
  selectedTables, 
  onChange,
  onStartQuiz 
}: TimesTablesSelectorProps) => {
  const tables = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const toggleTable = (table: number) => {
    if (selectedTables.includes(table)) {
      onChange(selectedTables.filter(t => t !== table));
    } else {
      onChange([...selectedTables, table]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {tables.map(table => (
          <Button
            key={table}
            variant={selectedTables.includes(table) ? "default" : "outline"}
            onClick={() => toggleTable(table)}
          >
            {table}
          </Button>
        ))}
      </div>
      
      <Button 
        onClick={onStartQuiz} 
        disabled={selectedTables.length === 0}
        className="mt-6"
      >
        Start Practice
      </Button>
    </div>
  );
};

export default TimesTablesSelector;
