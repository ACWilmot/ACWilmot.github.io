
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { Users, AlertTriangle, Loader2 } from 'lucide-react';
import ClassesManagement from '@/components/teacher/ClassesManagement';
import ClassStudentsManagement from '@/components/teacher/ClassStudentsManagement';
import { Alert, AlertDescription } from "@/components/ui/alert";

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
  const [authChecking, setAuthChecking] = useState(true);

  // Redirect if not authenticated or not a teacher
  useEffect(() => {
    // Add a small delay to ensure auth state is properly checked
    const timer = setTimeout(() => {
      console.log("Teacher Dashboard auth check:", { isAuthenticated, userRole, userId: user?.id });
      
      if (!isAuthenticated) {
        console.log("User not authenticated, redirecting to login");
        navigate('/teacher-login');
      } else if (userRole !== 'teacher') {
        console.log("User is not a teacher, redirecting to home");
        navigate('/');
      }
      
      setAuthChecking(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isAuthenticated, userRole, navigate, user]);

  const handleClassSelect = (classId: string) => {
    console.log("Selected class:", classId);
    setSelectedClassId(classId);
  };

  const handleBack = () => {
    setSelectedClassId(null);
  };

  if (authChecking) {
    return (
      <Layout>
        <div className="container pt-32 pb-16 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p>Checking authentication...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated || userRole !== 'teacher') {
    return (
      <Layout>
        <div className="container pt-32 pb-16">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You must be logged in as a teacher to access this page.
            </AlertDescription>
          </Alert>
        </div>
      </Layout>
    );
  }

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
            {user && (
              <p className="text-sm text-muted-foreground mt-1">
                Logged in as: {user.name} (ID: {user.id.slice(0, 8)}...)
              </p>
            )}
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
