
import React, { useState } from 'react';
import { useAuth, ClassData } from '@/context/AuthContext';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, User, Clock, CheckCircle, XCircle } from 'lucide-react';

interface AssignmentAttemptsProps {
  classId: string;
  assignmentId: string;
}

const AssignmentAttempts = ({ classId, assignmentId }: AssignmentAttemptsProps) => {
  const { getClassById, getStudentsByClass } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const classData = getClassById(classId);
  if (!classData) return null;
  
  const assignment = classData.assignments.find(a => a.id === assignmentId);
  if (!assignment) return null;

  const students = getStudentsByClass(classId);
  
  // Get attempts for this assignment
  const attempts = students.filter(student => {
    // Check if student has attempted this assignment
    if (!student.assignmentAttempts) return false;
    return student.assignmentAttempts.some(attempt => attempt.assignmentId === assignmentId);
  });

  const getStudentAttempt = (studentId: string) => {
    const student = students.find(s => s.id === studentId);
    if (!student || !student.assignmentAttempts) return null;
    
    return student.assignmentAttempts.find(attempt => attempt.assignmentId === assignmentId);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center w-full justify-between p-2 hover:bg-muted/50 rounded-md"
        >
          <div className="flex items-center">
            <span className="font-medium">Student Attempts</span>
            <Badge variant="outline" className="ml-2">
              {attempts.length}/{students.length}
            </Badge>
          </div>
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="mt-2">
        {attempts.length > 0 ? (
          <div className="space-y-2">
            {students.map(student => {
              const attempt = getStudentAttempt(student.id);
              
              if (!attempt) {
                return (
                  <Card key={student.id} className="p-3 bg-muted/30">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{student.name}</span>
                      <span className="text-sm text-muted-foreground ml-auto">No attempt</span>
                    </div>
                  </Card>
                );
              }
              
              const percentage = attempt.score > 0 ? 
                Math.round((attempt.score / attempt.total) * 100) : 0;
                
              let statusColor = "text-amber-500";
              if (percentage >= 70) statusColor = "text-green-600";
              else if (percentage < 40) statusColor = "text-red-600";
              
              return (
                <Card key={student.id} className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span className="font-medium">{student.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">
                          {new Date(attempt.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="flex items-center">
                        {percentage >= 50 ? (
                          <CheckCircle className={`h-4 w-4 mr-1 ${statusColor}`} />
                        ) : (
                          <XCircle className={`h-4 w-4 mr-1 ${statusColor}`} />
                        )}
                        <span className={`font-medium ${statusColor}`}>
                          {percentage}% ({attempt.score}/{attempt.total})
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center p-4 text-muted-foreground">
            No students have attempted this assignment yet
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AssignmentAttempts;
