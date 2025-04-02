
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { Users } from 'lucide-react';
import ClassesManagement from '@/components/teacher/ClassesManagement';
import ClassStudentsManagement from '@/components/teacher/ClassStudentsManagement';

const TeacherDashboardPage = () => {
  const navigate = useNavigate();
  const { 
    isAuthenticated, 
    userRole, 
    user, 
    getClasses, 
    createClass, 
    addStudentToClass, 
    removeStudentFromClass, 
    getClassStudents 
  } = useAuth();
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  // Redirect if not authenticated or not a teacher
  React.useEffect(() => {
    if (!isAuthenticated || userRole !== 'teacher') {
      navigate('/teacher/login');
    }
  }, [isAuthenticated, userRole, navigate]);

  const handleClassSelect = (classId: string) => {
    setSelectedClassId(classId);
  };

  const handleBack = () => {
    setSelectedClassId(null);
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
              {selectedClassId 
                ? "Manage students and monitor progress in this class" 
                : "Create and manage your classes"}
            </p>
          </div>
        </div>

        {selectedClassId ? (
          <ClassStudentsManagement
            classId={selectedClassId}
            getClassStudents={getClassStudents}
            addStudentToClass={addStudentToClass}
            removeStudentFromClass={removeStudentFromClass}
            onBack={handleBack}
          />
        ) : (
          <ClassesManagement
            getClasses={getClasses}
            createClass={createClass}
            onClassSelect={handleClassSelect}
          />
        )}
      </div>
    </Layout>
  );
};

export default TeacherDashboardPage;
