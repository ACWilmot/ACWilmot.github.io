
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { createTestClass, setupTestStudentTeacherRelationship } from '@/utils/testSetupUtils';
import { AlertCircle, Users, School } from 'lucide-react';
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
      <div className="container max-w-4xl px-4 py-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Tools</h1>
          <p className="text-muted-foreground">Tools for setting up and managing test data</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Test Class</CardTitle>
              <CardDescription>
                Create an example class with 10 student accounts for demonstration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                This will create:
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>A new class called "Example Class"</li>
                  <li>10 student accounts with logins student1@exampleclass.com through student10@exampleclass.com</li>
                  <li>Each student with the password "password"</li>
                  <li>Sample progress data for each student</li>
                  <li>All students enrolled in the class</li>
                </ul>
              </p>
              <p className="text-sm text-amber-600 mb-4">
                Note: You must have a teacher account (teacher@example.com) already created before using this.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleCreateTestClass} 
                disabled={loading}
                className="w-full sm:w-auto"
              >
                <School className="mr-2 h-4 w-4" />
                Create Example Class
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Setup Test Student-Teacher Relationship</CardTitle>
              <CardDescription>
                Add Student1 to Teacher1's class for testing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                This will add the student with email student@example.com to the class list of the teacher
                with email teacher@example.com.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-stretch sm:items-center">
              <Button 
                onClick={handleSetupRelationship} 
                disabled={loading}
                variant="outline"
              >
                <Users className="mr-2 h-4 w-4" />
                Setup Relationship
              </Button>
              <Button 
                onClick={() => navigate('/teacher-login')}
                variant="secondary"
              >
                Go to Teacher Login
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
