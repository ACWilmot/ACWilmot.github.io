
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Search, BarChart2 } from 'lucide-react';
import { Student } from '@/types/userTypes';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StudentsTableProps {
  students: Student[];
  loading: boolean;
}

const StudentsTable: React.FC<StudentsTableProps> = ({ students, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate progress for a student
  const calculateProgress = (student: Student) => {
    // Initialize with default values in case progress data is missing
    let totalCompleted = 0;
    let totalCorrect = 0;

    // Check if progress exists
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

  console.log("StudentsTable received students:", students);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart2 className="h-5 w-5" />
          Class Progress
        </CardTitle>
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
        {loading ? (
          <div className="text-center py-8">Loading students data...</div>
        ) : !students || students.length === 0 ? (
          <div className="text-center py-8">
            <p>No students added to your class yet.</p>
            <p className="text-muted-foreground text-sm mt-2">Add students using their email address to track their progress</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Accuracy</TableHead>
                <TableHead className="hidden md:table-cell">Completed</TableHead>
                <TableHead className="hidden md:table-cell">Correct</TableHead>
                <TableHead>Last Activity</TableHead>
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

export default StudentsTable;
