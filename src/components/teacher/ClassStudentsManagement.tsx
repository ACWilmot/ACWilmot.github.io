
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Search, ArrowLeft, UserPlus, UserMinus } from 'lucide-react';
import { Student } from '@/types/userTypes';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TeacherDashboardStats from './TeacherDashboardStats';

interface ClassStudentsManagementProps {
  classId: string;
  getClassStudents: (classId: string) => Promise<Student[]>;
  addStudentToClass: (classId: string, studentEmail: string) => Promise<boolean>;
  removeStudentFromClass: (classId: string, studentId: string) => Promise<boolean>;
  onBack: () => void;
}

const ClassStudentsManagement: React.FC<ClassStudentsManagementProps> = ({
  classId,
  getClassStudents,
  addStudentToClass,
  removeStudentFromClass,
  onBack
}) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [studentEmail, setStudentEmail] = useState('');

  useEffect(() => {
    fetchStudents();
  }, [classId]);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const studentsList = await getClassStudents(classId);
      setStudents(studentsList || []);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async () => {
    if (!studentEmail.trim()) return;

    const success = await addStudentToClass(classId, studentEmail.trim());
    if (success) {
      setStudentEmail('');
      await fetchStudents();
    }
  };

  const handleRemoveStudent = async (studentId: string) => {
    const confirmed = window.confirm("Are you sure you want to remove this student from the class?");
    if (confirmed) {
      const success = await removeStudentFromClass(classId, studentId);
      if (success) {
        await fetchStudents();
      }
    }
  };

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

  return (
    <div className="space-y-8">
      <Button variant="outline" onClick={onBack} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Classes
      </Button>

      <TeacherDashboardStats students={students} loading={loading} />

      <Card>
        <CardHeader>
          <CardTitle>Add Student to Class</CardTitle>
          <CardDescription>Enter a student's email to add them to this class</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input 
              placeholder="Student Email" 
              value={studentEmail} 
              onChange={(e) => setStudentEmail(e.target.value)}
            />
            <Button onClick={handleAddStudent}>
              <UserPlus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Class Students</CardTitle>
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
              <p>No students added to this class yet.</p>
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
                          onClick={() => handleRemoveStudent(student.id)}
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
    </div>
  );
};

export default ClassStudentsManagement;
