
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Student } from '@/types/userTypes';
import { Progress } from '@/components/ui/progress';
import { Search, UserPlus, Users, BarChart2 } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TeacherDashboardPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userRole, user, getStudents, addStudent } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [studentEmailInput, setStudentEmailInput] = useState('');

  useEffect(() => {
    if (!isAuthenticated || userRole !== 'teacher') {
      navigate('/teacher/login');
      return;
    }

    const fetchStudents = async () => {
      const studentsList = await getStudents();
      setStudents(studentsList);
      setLoading(false);
    };

    fetchStudents();
  }, [isAuthenticated, userRole, navigate, getStudents]);

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = async () => {
    if (!studentEmailInput.trim()) return;

    const success = await addStudent(studentEmailInput.trim());
    if (success) {
      setStudentEmailInput('');
      // Refresh student list
      const updatedStudents = await getStudents();
      setStudents(updatedStudents);
    }
  };

  const calculateProgress = (student: Student) => {
    let totalCompleted = 0;
    let totalCorrect = 0;
    let subjectCount = 0;

    for (const subject in student.progress) {
      totalCompleted += student.progress[subject].completed;
      totalCorrect += student.progress[subject].correct;
      subjectCount++;
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

  return (
    <Layout>
      <div className="container pt-32 pb-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Teacher Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitor your students' progress and performance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{students.length}</div>
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
              {!loading && students.length > 0 ? (
                <div className="text-3xl font-bold">
                  {Math.round(
                    students.reduce((sum, student) => {
                      return sum + calculateProgress(student).overallAccuracy;
                    }, 0) / students.length
                  )}%
                </div>
              ) : (
                <div className="text-3xl font-bold">-</div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add Student</CardTitle>
            <CardDescription>Enter a student's email to add them to your class</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input 
                placeholder="Student Email" 
                value={studentEmailInput} 
                onChange={(e) => setStudentEmailInput(e.target.value)}
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
            ) : !students.length ? (
              <div className="text-center py-8">
                <p>No students added to your class yet.</p>
                <p className="text-muted-foreground text-sm mt-2">Add students using their Supabase ID to track their progress</p>
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
                    
                    // Find the most recent activity date
                    let lastActivity = null;
                    for (const subject in student.progress) {
                      const date = student.progress[subject].lastAttempted;
                      if (date && (!lastActivity || date > lastActivity)) {
                        lastActivity = date;
                      }
                    }
                    
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
                        <TableCell>{lastActivity || 'Never'}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TeacherDashboardPage;
