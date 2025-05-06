
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { UserMinus, Search, RefreshCcw } from 'lucide-react';
import { StudentWithProgress } from '@/types/teacherTypes';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StudentsListProps {
  students: StudentWithProgress[];
  onRemoveStudent: (studentId: string) => Promise<boolean>;
  onRefresh: () => Promise<void>;
}

const StudentsList: React.FC<StudentsListProps> = ({ 
  students, 
  onRemoveStudent,
  onRefresh
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Filter students based on search term
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (student.email && student.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Calculate progress for a student
  const calculateProgress = (student: StudentWithProgress) => {
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
  const getLastActivity = (student: StudentWithProgress) => {
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

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefresh();
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Class Students</CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCcw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
        <div className="flex items-center border rounded-md px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground mr-2" />
          <Input 
            className="border-0 p-0 shadow-none focus-visible:ring-0" 
            placeholder="Search students..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        {students.length === 0 ? (
          <div className="text-center py-8">
            <p>No students added to this class yet.</p>
            <p className="text-muted-foreground text-sm mt-2">Add students using their email address to track their progress</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Accuracy</TableHead>
                <TableHead className="hidden md:table-cell">Completed</TableHead>
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
                    <TableCell>{student.email || '-'}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={overallAccuracy} className="h-2 w-16" />
                        <span>{overallAccuracy}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{totalCompleted}</TableCell>
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
        )}
      </CardContent>
    </Card>
  );
};

export default StudentsList;
