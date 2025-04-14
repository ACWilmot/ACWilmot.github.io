
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ArrowLeft, UserPlus } from 'lucide-react';
import { Student } from '@/types/userTypes';
import TeacherDashboardStats from './TeacherDashboardStats';
import StudentsList from './StudentsList';
import AddStudentForm from './AddStudentForm';

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

  useEffect(() => {
    console.log("ClassStudentsManagement mounted with classId:", classId);
    fetchStudents();
  }, [classId]);

  const fetchStudents = async () => {
    console.log("Fetching students for class:", classId);
    setLoading(true);
    try {
      const studentsList = await getClassStudents(classId);
      console.log("Students fetched:", studentsList);
      setStudents(studentsList || []);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (email: string) => {
    console.log("Adding student with email:", email);
    const success = await addStudentToClass(classId, email);
    if (success) {
      console.log("Student added successfully, refreshing student list");
      await fetchStudents();
    }
    return success;
  };

  const handleRemoveStudent = async (studentId: string) => {
    console.log("Removing student with ID:", studentId);
    const confirmed = window.confirm("Are you sure you want to remove this student from the class?");
    if (confirmed) {
      const success = await removeStudentFromClass(classId, studentId);
      if (success) {
        console.log("Student removed successfully, refreshing student list");
        await fetchStudents();
      }
    }
  };

  return (
    <div className="space-y-8">
      <Button variant="outline" onClick={onBack} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Classes
      </Button>

      <TeacherDashboardStats students={students} loading={loading} />

      <AddStudentForm onAddStudent={handleAddStudent} />

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
          <StudentsList 
            students={students} 
            loading={loading} 
            searchTerm={searchTerm}
            onRemoveStudent={handleRemoveStudent}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassStudentsManagement;
