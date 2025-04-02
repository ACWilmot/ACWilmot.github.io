
import React, { useState, useEffect } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp, User, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import type { Assignment, AssignmentAttempt } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

interface AssignmentAttemptsProps {
  assignmentId: string;
  className?: string;
}

export default function AssignmentAttempts({ assignmentId, className }: AssignmentAttemptsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [attempts, setAttempts] = useState<AssignmentAttempt[]>([]);
  const { getAssignmentAttempts } = useAuth();

  useEffect(() => {
    if (isOpen) {
      // Only fetch attempts when the collapsible is opened
      const fetchedAttempts = getAssignmentAttempts(assignmentId);
      setAttempts(fetchedAttempts);
    }
  }, [assignmentId, isOpen, getAssignmentAttempts]);

  // If there are no attempts, don't render anything
  if (!attempts || attempts.length === 0) {
    return (
      <div className={cn("text-sm text-muted-foreground mt-2", className)}>
        No attempts yet
      </div>
    );
  }

  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={setIsOpen}
      className={cn("w-full border rounded-md mt-2", className)}
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-muted/50">
        <div className="flex items-center">
          <span className="font-medium">
            Student Attempts ({attempts.length})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {isOpen ? "Hide" : "Show"} Details
          </span>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="p-2 space-y-2">
        {attempts.map((attempt) => (
          <Card key={attempt.id} className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-muted rounded-full p-1">
                  <User className="h-4 w-4" />
                </div>
                <span className="font-medium">{attempt.studentName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span 
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    attempt.correct / attempt.totalQuestions >= 0.7 
                      ? "bg-green-100 text-green-800" 
                      : attempt.correct / attempt.totalQuestions >= 0.4 
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  )}
                >
                  {Math.round((attempt.correct / (attempt.totalQuestions || 1)) * 100)}%
                </span>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>{attempt.correct} correct</span>
              </div>
              <div className="flex items-center gap-1">
                <XCircle className="h-3 w-3 text-red-500" />
                <span>{attempt.completed - attempt.correct} incorrect</span>
              </div>
              <div className="ml-auto">
                {new Date(attempt.date).toLocaleDateString()}
              </div>
            </div>
            
            <div className="mt-2 w-full bg-muted rounded-full h-1.5">
              <div
                className="bg-primary h-1.5 rounded-full"
                style={{ width: `${(attempt.correct / (attempt.totalQuestions || 1)) * 100}%` }}
              />
            </div>
          </Card>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
