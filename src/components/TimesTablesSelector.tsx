
import React from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface TimesTablesSelectorProps {
  selectedTables: number[];
  onChange: (tables: number[]) => void;
  className?: string;
}

const TimesTablesSelector: React.FC<TimesTablesSelectorProps> = ({ 
  selectedTables, 
  onChange,
  className
}) => {
  const allTables = Array.from({ length: 12 }, (_, i) => i + 1);
  
  const handleToggleTable = (table: number) => {
    if (selectedTables.includes(table)) {
      onChange(selectedTables.filter(t => t !== table));
    } else {
      onChange([...selectedTables, table].sort((a, b) => a - b));
    }
  };
  
  const handleSelectAll = () => {
    onChange(allTables);
  };
  
  const handleClearAll = () => {
    onChange([]);
  };
  
  return (
    <Card className={`p-4 ${className || ''}`}>
      <div className="mb-3 flex justify-between items-center">
        <h3 className="text-sm font-medium">Select Times Tables</h3>
        <div className="flex gap-2 text-xs">
          <button 
            type="button" 
            className="text-primary hover:underline"
            onClick={handleSelectAll}
          >
            Select All
          </button>
          <span>|</span>
          <button 
            type="button" 
            className="text-primary hover:underline"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {allTables.map(table => (
          <div key={table} className="flex items-center space-x-2">
            <Checkbox 
              id={`table-${table}`} 
              checked={selectedTables.includes(table)}
              onCheckedChange={() => handleToggleTable(table)}
            />
            <Label 
              htmlFor={`table-${table}`}
              className="text-sm cursor-pointer"
            >
              {table}× Table
            </Label>
          </div>
        ))}
      </div>
      
      {selectedTables.length === 0 && (
        <p className="text-xs text-destructive mt-2">Please select at least one times table</p>
      )}
    </Card>
  );
};

export default TimesTablesSelector;
