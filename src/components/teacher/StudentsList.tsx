
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { UserMinus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Student } from '@/types/userTypes';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StudentsListProps {
  students: Student[];
  loading: boolean;
  searchTerm: string;
  onRemoveStudent: (studentId: string) => Promise<void>;
}

const StudentsList: React.FC<StudentsListProps> = ({ 
  students, 
  loading, 
  searchTerm,
  onRemoveStudent 
}) => {
  // Filter students based on search term
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate progress for a student
  const calculateProgress = (student: Student) => {
    let totalCompleted = 0;
    let totalCorrect = 0;

    if (student.progress) {
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

  // Find the most recent activity date for a student
  const getLastActivity = (student: Student) => {
    let lastActivity = null;
    if (student.progress) {
      for (const subject in student.progress) {
        const date = student.progress[subject]?.lastAttempted;
        if (date && (!lastActivity || date > lastActivity)) {
          lastActivity = date;
        }
      }
    }
    return lastActivity ? new Date(lastActivity).toLocaleDateString() : 'Never';
  };

  if (loading) {
    return <div className="text-center py-8">Loading students data...</div>;
  }

  if (!students || students.length === 0) {
    return (
      <div className="text-center py-8">
        <p>No students added to this class yet.</p>
        <p className="text-muted-foreground text-sm mt-2">Add students using their email address to track their progress</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Accuracy</TableHead>
          <TableHead className="hidden md:table-cell">Completed</TableHead>
          <TableHead className="hidden md:table-cell">Correct</TableHead>
          <TableHead>Last Activity</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredStudents.map((student) => {
          const { totalCompleted, totalCorrect, overallAccuracy } = calculateProgress(student);
          const lastActivity = getLastActivity(student);
          
          return (
            <TableRow key={student.id}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={overallAccuracy} className="h-2 w-16" />
                  <span>{overallAccuracy}%</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{totalCompleted}</TableCell>
              <TableCell className="hidden md:table-cell">{totalCorrect}</TableCell>
              <TableCell>{lastActivity}</TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onRemoveStudent(student.id)}
                >
                  <UserMinus className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default StudentsList;
