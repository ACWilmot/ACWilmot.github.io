
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubjectCardProps {
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
  isPremium?: boolean;
  locked?: boolean;
}

const SubjectCard = ({ 
  title, 
  description, 
  onClick, 
  className,
  isPremium = false,
  locked = false
}: SubjectCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all hover:shadow-md border", 
      className,
      locked ? "opacity-75" : "",
      isPremium ? "bg-gradient-to-b from-background to-background/95" : ""
    )}>
      <CardContent className="p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-1.5">
              {title}
              {locked && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
            </h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-muted/30 border-t flex justify-between">
        <Button 
          variant={isPremium && !locked ? "default" : "outline"}
          size="sm" 
          onClick={onClick}
          disabled={locked}
          className={isPremium && !locked ? "text-primary-foreground" : ""}
        >
          Start Test
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
