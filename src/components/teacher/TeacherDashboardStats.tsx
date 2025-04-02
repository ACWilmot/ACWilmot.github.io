
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Student } from '@/types/userTypes';
import { useAuth } from '@/context/AuthContext';

interface TeacherDashboardStatsProps {
  students: Student[];
  loading: boolean;
}

const TeacherDashboardStats: React.FC<TeacherDashboardStatsProps> = ({ 
  students, 
  loading 
}) => {
  const { user } = useAuth();
  
  // Calculate average accuracy
  const calculateAverageAccuracy = () => {
    if (!students || students.length === 0) return '-';
    
    let totalAccuracy = 0;
    let studentsWithProgress = 0;
    
    students.forEach(student => {
      const studentProgress = calculateStudentProgress(student);
      if (studentProgress.totalCompleted > 0) {
        totalAccuracy += studentProgress.overallAccuracy;
        studentsWithProgress++;
      }
    });
    
    if (studentsWithProgress === 0) return '-';
    
    const average = Math.round(totalAccuracy / studentsWithProgress);
    return `${average}%`;
  };
  
  // Calculate progress for a student
  const calculateStudentProgress = (student: Student) => {
    let totalCompleted = 0;
    let totalCorrect = 0;

    if (student && student.progress) {
      for (const subject in student.progress) {
        const subjectProgress = student.progress[subject];
        if (subjectProgress) {
          totalCompleted += subjectProgress.completed || 0;
          totalCorrect += subjectProgress.correct || 0;
        }
      }
    }

    const overallAccuracy = totalCompleted > 0 
      ? Math.round((totalCorrect / totalCompleted) * 100) 
      : 0;

    return {
      totalCompleted,
      totalCorrect,
      overallAccuracy
    };
  };

  // Get actual student count, including both fetched students and IDs in the user object
  const getStudentCount = () => {
    if (user?.students && user.role === 'teacher') {
      // Filter to count only valid UUIDs
      const validStudentIds = user.students.filter(id => 
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
      );
      return validStudentIds.length;
    }
    return 0;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Total Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{getStudentCount()}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Subjects Covered</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">4</div>
          <div className="text-sm text-muted-foreground">Maths, English, Verbal, Non-Verbal</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Average Accuracy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{calculateAverageAccuracy()}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboardStats;
