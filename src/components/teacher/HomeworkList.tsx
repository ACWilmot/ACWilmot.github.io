
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Check, X, BookOpen } from 'lucide-react';
import { useTeacher } from '@/context/TeacherContext';
import { HomeworkWithAttempts } from '@/types/teacherTypes';
import { format } from 'date-fns';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomeworkList: React.FC = () => {
  const { homeworks, resetHomeworkAttempt, isLoading } = useTeacher();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Homework Assignments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">Loading homework assignments...</div>
        </CardContent>
      </Card>
    );
  }

  if (!homeworks.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Homework Assignments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p>No homework assignments created yet.</p>
            <p className="text-muted-foreground text-sm mt-2">Create a homework assignment to get started</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Get subject display name
  const getSubjectName = (subject: string) => {
    const subjects: Record<string, string> = {
      maths: 'Mathematics',
      english: 'English',
      verbal: 'Verbal Reasoning',
      nonVerbal: 'Non-verbal Reasoning'
    };
    return subjects[subject] || subject;
  };

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'No due date';
    return format(new Date(dateString), 'MMM d, yyyy');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Homework Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {homeworks.map((homework) => (
            <AccordionItem key={homework.id} value={homework.id}>
              <AccordionTrigger className="py-4">
                <div className="flex flex-col items-start w-full">
                  <div className="flex justify-between w-full">
                    <h3 className="font-semibold text-left">{homework.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant={homework.completion_rate === 100 ? "secondary" : "secondary"}>
                        {homework.completion_rate.toFixed(0)}% Complete
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                    <span>{getSubjectName(homework.subject)}</span>
                    <span>•</span>
                    <span className="capitalize">{homework.difficulty}</span>
                    <span>•</span>
                    <span>{homework.question_count} questions</span>
                    <span>•</span>
                    <span>Due: {formatDate(homework.due_date)}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="py-2">
                  {homework.description && (
                    <p className="text-muted-foreground mb-4">{homework.description}</p>
                  )}
                  
                  <h4 className="font-medium mb-2">Student Attempts</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Completed</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {homework.attempts.map((attempt) => (
                        <TableRow key={attempt.id}>
                          <TableCell>{attempt.student_id}</TableCell>
                          <TableCell>
                            {attempt.completed ? (
                              <Badge variant="secondary" className="flex gap-1 items-center">
                                <Check className="h-3 w-3" />
                                Completed
                              </Badge>
                            ) : (
                              <Badge variant="secondary" className="flex gap-1 items-center">
                                <X className="h-3 w-3" />
                                Not Started
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {attempt.completed ? (
                              attempt.score ? `${attempt.score}%` : 'N/A'
                            ) : '—'}
                          </TableCell>
                          <TableCell>
                            {attempt.completed_at ? 
                              format(new Date(attempt.completed_at), 'MMM d, yyyy') : 
                              '—'
                            }
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm"
                              disabled={!attempt.completed}
                              onClick={() => resetHomeworkAttempt(attempt.id)}
                            >
                              Reset
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default HomeworkList;
