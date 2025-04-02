import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Calendar, Clock, ExternalLink } from 'lucide-react';
import { useAuth, Assignment } from '@/context/AuthContext';

const AssignmentsList = () => {
  const { getAssignmentsForStudent, userType } = useAuth();
  const navigate = useNavigate();
  
  // Only show for students
  if (userType !== 'student') {
    return null;
  }
  
  const assignments = getAssignmentsForStudent();
  
  if (assignments.length === 0) {
    return null;
  }
  
  // Get today's date in string format
  const today = new Date().toISOString().split('T')[0];
  
  // Sort assignments: upcoming (with due dates) first, then others
  const sortedAssignments = [...assignments].sort((a, b) => {
    // If both have due dates, sort by date
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    // If only one has a due date, it comes first
    if (a.dueDate) return -1;
    if (b.dueDate) return 1;
    // Otherwise, sort by creation date
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-display font-bold flex items-center">
          <Book className="h-5 w-5 mr-2 text-primary" />
          Your Assignments
        </h2>
      </div>
      
      <div className="grid gap-4">
        {sortedAssignments.map((assignment) => (
          <AssignmentCard 
            key={assignment.id} 
            assignment={assignment} 
            isUrgent={assignment.dueDate && assignment.dueDate <= today}
            onStartPractice={() => navigate('/quiz', { 
              state: { preSelectedSubject: assignment.subject }
            })}
          />
        ))}
      </div>
    </div>
  );
};

interface AssignmentCardProps {
  assignment: Assignment;
  isUrgent: boolean;
  onStartPractice: () => void;
}

const AssignmentCard = ({ assignment, isUrgent, onStartPractice }: AssignmentCardProps) => {
  const getSubjectName = (subject: string) => {
    switch(subject) {
      case 'maths': return 'Mathematics';
      case 'english': return 'English';
      case 'verbal': return 'Verbal Reasoning';
      case 'nonVerbal': return 'Non-verbal Reasoning';
      default: return subject;
    }
  };
  
  return (
    <Card className={`overflow-hidden border ${isUrgent ? 'border-red-400' : ''}`}>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-medium text-lg">{assignment.title}</h3>
            
            <div className="flex flex-wrap items-center mt-1 gap-3">
              <div className="flex items-center">
                <Book className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm">{getSubjectName(assignment.subject)}</span>
              </div>
              
              {assignment.dueDate && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className={`text-sm ${isUrgent ? 'text-red-500 font-medium' : ''}`}>
                    {isUrgent ? 'Due today!' : `Due: ${new Date(assignment.dueDate).toLocaleDateString()}`}
                  </span>
                </div>
              )}
            </div>
            
            {assignment.description && (
              <p className="text-muted-foreground text-sm mt-2">
                {assignment.description}
              </p>
            )}
          </div>
          
          <Button onClick={onStartPractice} className="mt-2 sm:mt-0 sm:w-auto w-full">
            Start Practice
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentsList;
