
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { createTestClass, setupTestStudentTeacherRelationship } from '@/utils/testSetupUtils';
import { AlertCircle, Users, School, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCreateTestClass = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      await createTestClass();
      setSuccess('Example class with 10 students created successfully');
    } catch (err) {
      console.error('Error creating test class:', err);
      setError('Failed to create test class. See console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleSetupRelationship = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      await setupTestStudentTeacherRelationship();
      setSuccess('Added Student1 to Teacher1\'s class');
    } catch (err) {
      console.error('Error setting up test relationship:', err);
      setError('Failed to set up relationship. See console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container max-w-5xl px-4 py-16 md:py-24">
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Admin Tools</h1>
          <p className="text-muted-foreground max-w-2xl">Tools for setting up and managing test data for the SmartPrep application</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200 text-green-800">
            <AlertTitle className="font-medium">Success</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="border-b pb-3">
              <CardTitle className="flex items-center text-xl">
                <School className="h-5 w-5 mr-2 text-primary" />
                Create Test Class
              </CardTitle>
              <CardDescription>
                Create an example class with 10 student accounts for demonstration
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-sm space-y-3">
                <p className="font-medium">This will create:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-muted-foreground">
                  <li>A new class called "Example Class"</li>
                  <li>10 student accounts with logins student1@exampleclass.com through student10@exampleclass.com</li>
                  <li>Each student with the password "password"</li>
                  <li>Sample progress data for each student</li>
                  <li>All students enrolled in the class</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-amber-800 mt-4">
                  <p className="text-sm font-medium">Note: You must have a teacher account (teacher@example.com) already created before using this.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button 
                onClick={handleCreateTestClass} 
                disabled={loading}
                className="w-full"
              >
                <School className="mr-2 h-4 w-4" />
                Create Example Class
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="border-b pb-3">
              <CardTitle className="flex items-center text-xl">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Setup Test Relationship
              </CardTitle>
              <CardDescription>
                Add Student1 to Teacher1's class for testing
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm mb-4">
                This will add the student with email <span className="font-medium">student@example.com</span> to the class list of the teacher
                with email <span className="font-medium">teacher@example.com</span>.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-blue-800 mt-2">
                <p className="text-sm">After setup, you'll be able to view student progress from the teacher dashboard.</p>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
              <Button 
                onClick={handleSetupRelationship} 
                disabled={loading}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Users className="mr-2 h-4 w-4" />
                Setup Relationship
              </Button>
              <Button 
                onClick={() => navigate('/teacher-login')}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Go to Teacher Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
