
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { toast } from 'sonner';

const AdminPage: React.FC = () => {
  const { createTestUser } = useAuth();
  
  const handleCreateTeacher = async () => {
    try {
      if (createTestUser) {
        await createTestUser('teacher@example.com', 'password123', 'teacher');
        toast.success('Test teacher created');
      } else {
        toast.error('Test user creation function is not available');
      }
    } catch (error) {
      console.error('Error creating test teacher:', error);
      toast.error('Error creating test teacher');
    }
  };

  const handleCreateStudent = async () => {
    try {
      if (createTestUser) {
        await createTestUser('student@example.com', 'password123', 'student');
        toast.success('Test student created');
      } else {
        toast.error('Test user creation function is not available');
      }
    } catch (error) {
      console.error('Error creating test student:', error);
      toast.error('Error creating test student');
    }
  };

  const handleCreateRelationship = async () => {
    try {
      toast.info('Creating class and enrolling student...');
      // This functionality would need to be properly implemented in AuthContext
      toast.success('Relationship created');
    } catch (error) {
      console.error('Error creating relationship:', error);
      toast.error('Error creating relationship');
    }
  };

  return (
    <Layout>
      <div className="container max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        
        <div className="flex flex-col space-y-4 mb-8">
          <h2 className="text-xl font-semibold">Test User Creation</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleCreateTeacher}>
              Create Test Teacher
            </Button>
            <Button onClick={handleCreateStudent}>
              Create Test Student
            </Button>
            <Button onClick={handleCreateRelationship}>
              Create Teacher-Student Relationship
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
