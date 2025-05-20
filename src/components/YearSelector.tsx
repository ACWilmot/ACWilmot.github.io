
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

interface YearSelectorProps {
  selectedYear: number | null;
  onChange: (year: number | null) => void;
  className?: string;
}

const YearSelector: React.FC<YearSelectorProps> = ({ selectedYear, onChange, className = '' }) => {
  const yearOptions = [null, 3, 4, 5, 6];
  const yearLabels = ['All', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];
  
  const selectedIndex = selectedYear ? yearOptions.indexOf(selectedYear) : 0;

  const handleSliderChange = (values: number[]) => {
    const index = Math.round(values[0]);
    onChange(yearOptions[index] || null);
  };

  return (
    <div className={`w-full max-w-xl mx-auto ${className}`}>
      <div className="space-y-4">
        <div>
          <Label className="text-center block text-lg font-medium mb-2">
            Year Group: {yearLabels[selectedIndex]}
          </Label>
          <Slider
            defaultValue={[selectedIndex]}
            max={yearOptions.length - 1}
            step={1}
            onValueChange={handleSliderChange}
            value={[selectedIndex]}
            className="w-full"
          />
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground pt-1 px-1">
          {yearLabels.map((label, i) => (
            <span 
              key={i} 
              className="cursor-pointer px-2"
              onClick={() => onChange(yearOptions[i])}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearSelector;
