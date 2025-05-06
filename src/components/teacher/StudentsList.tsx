
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { UserX, Loader2 } from 'lucide-react';
import { Student } from '@/types/userTypes';
import { StudentWithProgress } from '@/types/teacherTypes';

interface StudentsListProps {
  students: Student[] | StudentWithProgress[];
  loading?: boolean;
  onRemoveStudent: (studentId: string) => Promise<void | boolean>;
  onRefresh?: () => void;
  searchTerm?: string;
}

const StudentsList: React.FC<StudentsListProps> = ({
  students,
  loading = false,
  onRemoveStudent,
  onRefresh,
  searchTerm = '',
}) => {
  const filteredStudents = searchTerm
    ? students.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (s.email && s.email.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : students;

  const handleRemoveClick = async (studentId: string) => {
    await onRemoveStudent(studentId);
    if (onRefresh) onRefresh();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="text-center py-8">
        <p>No students found in this class.</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredStudents.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>{student.email || 'No email'}</TableCell>
            <TableCell className="text-right">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveClick(student.id)}
              >
                <UserX className="h-4 w-4 text-destructive" />
                <span className="sr-only">Remove student</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentsList;
