
import React from 'react';
import { List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const QuizProgress: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-16 text-center">
      <Button 
        variant="outline" 
        onClick={() => navigate('/results')}
        className="flex items-center gap-2 mx-auto"
      >
        <List className="h-4 w-4" />
        View Progress
      </Button>
    </div>
  );
};

export default QuizProgress;
