
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { Users } from 'lucide-react';
import { Student } from '@/types/userTypes';
import TeacherDashboardStats from '@/components/teacher/TeacherDashboardStats';
import AddStudentForm from '@/components/teacher/AddStudentForm';
import StudentsTable from '@/components/teacher/StudentsTable';

const TeacherDashboardPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userRole, addStudent, getStudents } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

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

  const handleAddStudent = async (studentEmail: string) => {
    const success = await addStudent(studentEmail);
    if (success) {
      // Refresh student list
      const updatedStudents = await getStudents();
      setStudents(updatedStudents);
    }
    return success;
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

        <TeacherDashboardStats students={students} loading={loading} />
        <AddStudentForm onAddStudent={handleAddStudent} />
        <StudentsTable students={students} loading={loading} />
      </div>
    </Layout>
  );
};

export default TeacherDashboardPage;
