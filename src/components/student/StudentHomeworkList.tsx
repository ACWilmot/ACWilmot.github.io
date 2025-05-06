
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, BookOpen, Check, X, ArrowRight } from 'lucide-react';
import { useTeacher } from '@/context/TeacherContext';
import { HomeworkWithAttempts } from '@/types/teacherTypes';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const StudentHomeworkList: React.FC = () => {
  const { getStudentHomeworks } = useTeacher();
  const [homeworks, setHomeworks] = useState<HomeworkWithAttempts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHomeworks();
  }, []);

  const fetchHomeworks = async () => {
    setIsLoading(true);
    try {
      const data = await getStudentHomeworks();
      setHomeworks(data);
    } catch (error) {
      console.error('Error fetching homework:', error);
    } finally {
      setIsLoading(false);
    }
  };

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

  const startHomework = (homeworkId: string) => {
    navigate(`/homework/${homeworkId}`);
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Assigned Homework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!homeworks.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Assigned Homework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p>No homework assignments have been assigned to you yet.</p>
            <p className="text-muted-foreground text-sm mt-2">When a teacher assigns you homework, it will appear here</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assigned Homework</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {homeworks.map((homework) => {
            const attempt = homework.attempts[0]; // Student will only have one attempt per homework
            const isCompleted = attempt?.completed;
            
            return (
              <div 
                key={homework.id} 
                className="p-4 border rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold">{homework.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {getSubjectName(homework.subject)} • {homework.difficulty.charAt(0).toUpperCase() + homework.difficulty.slice(1)} • {homework.question_count} questions
                  </p>
                  {homework.due_date && (
                    <p className="text-sm">
                      Due: {formatDate(homework.due_date)}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:flex-row gap-2 items-center">
                  {isCompleted ? (
                    <>
                      <Badge variant="outline" className="flex gap-2 items-center px-3 py-1">
                        <Check className="h-4 w-4 text-green-500" />
                        Completed
                      </Badge>
                      {attempt.score !== null && (
                        <Badge variant="secondary" className="px-3 py-1">
                          Score: {attempt.score}%
                        </Badge>
                      )}
                    </>
                  ) : attempt?.reset_at ? (
                    <div className="flex gap-2">
                      <Badge variant="outline" className="flex gap-2 items-center px-3 py-1">
                        <X className="h-4 w-4 text-red-500" />
                        Reset by teacher
                      </Badge>
                      <Button onClick={() => startHomework(homework.id)}>
                        Start
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => startHomework(homework.id)}>
                      Start
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentHomeworkList;
