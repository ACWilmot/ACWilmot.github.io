
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { Users, AlertTriangle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TeacherProvider, useTeacher } from '@/context/TeacherContext';
import TeacherClassList from '@/components/teacher/TeacherClassList';
import ClassDashboard from '@/components/teacher/ClassDashboard';

const TeacherDashboardContent = () => {
  const { selectedClass } = useTeacher();
  
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Teacher Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            {selectedClass 
              ? "Manage students and monitor progress in this class" 
              : "Create and manage your classes"}
          </p>
        </div>
      </div>

      {selectedClass ? (
        <ClassDashboard />
      ) : (
        <TeacherClassList />
      )}
    </div>
  );
};

const TeacherDashboardPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userRole } = useAuth();
  const [authChecking, setAuthChecking] = useState(true);

  // Redirect if not authenticated or not a teacher
  useEffect(() => {
    // Add a small delay to ensure auth state is properly checked
    const timer = setTimeout(() => {
      console.log("Teacher Dashboard auth check:", { isAuthenticated, userRole });
      
      if (!isAuthenticated) {
        console.log("User not authenticated, redirecting to login");
        navigate('/login');
      } else if (userRole !== 'teacher') {
        console.log("User is not a teacher, redirecting to home");
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
      <div className="container pt-32 pb-16">
        <TeacherProvider>
          <TeacherDashboardContent />
        </TeacherProvider>
      </div>
    </Layout>
  );
};

export default TeacherDashboardPage;
