
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { Book, AlertTriangle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TeacherProvider } from '@/context/TeacherContext';
import StudentHomeworkList from '@/components/student/StudentHomeworkList';
import StudentClassCode from '@/components/teacher/StudentClassCode';

const StudentDashboardPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userRole } = useAuth();
  const [authChecking, setAuthChecking] = useState(true);

  // Redirect if not authenticated or not a student
  useEffect(() => {
    // Add a small delay to ensure auth state is properly checked
    const timer = setTimeout(() => {
      console.log("Student Dashboard auth check:", { isAuthenticated, userRole });
      
      if (!isAuthenticated) {
        console.log("User not authenticated, redirecting to login");
        navigate('/login');
      } else if (userRole !== 'student') {
        console.log("User is not a student, redirecting to home");
        navigate('/');
      }
      
      setAuthChecking(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isAuthenticated, userRole, navigate]);

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

  if (!isAuthenticated || userRole !== 'student') {
    return (
      <Layout>
        <div className="container pt-32 pb-16">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You must be logged in as a student to access this page.
            </AlertDescription>
          </Alert>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold flex items-center gap-2">
                <Book className="h-6 w-6 text-primary" />
                Student Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                View your homework assignments and join classes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <TeacherProvider>
                <StudentHomeworkList />
              </TeacherProvider>
            </div>
            <div className="md:col-span-1">
              <TeacherProvider>
                <StudentClassCode />
              </TeacherProvider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboardPage;
