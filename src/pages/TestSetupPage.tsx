
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Check, AlertTriangle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const TestSetupPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const createTestAccounts = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      // Create teacher account
      const teacherEmail = 'teacher@testclass.com';
      const password = 'password';
      
      // Check if teacher already exists
      const { data: teacherCheck } = await supabase.auth.signInWithPassword({
        email: teacherEmail,
        password
      });
      
      let teacherId;
      
      if (!teacherCheck.user) {
        // Teacher doesn't exist, create the account
        const { data: teacherData, error: teacherError } = await supabase.auth.signUp({
          email: teacherEmail,
          password,
          options: {
            data: {
              name: 'Test Teacher',
              role: 'teacher'
            }
          }
        });
        
        if (teacherError) {
          throw new Error(`Failed to create teacher account: ${teacherError.message}`);
        }
        
        teacherId = teacherData.user?.id;
      } else {
        teacherId = teacherCheck.user.id;
      }
      
      // Create student accounts
      for (let i = 1; i <= 10; i++) {
        const studentEmail = `student${i}@testclass.com`;
        
        // Check if student already exists
        const { data: studentCheck } = await supabase.auth.signInWithPassword({
          email: studentEmail,
          password
        });
        
        if (!studentCheck.user) {
          // Student doesn't exist, create the account
          await supabase.auth.signUp({
            email: studentEmail,
            password,
            options: {
              data: {
                name: `Test Student ${i}`,
                role: 'student'
              }
            }
          });
        }
      }
      
      setSuccess('Test accounts created successfully');
    } catch (err: any) {
      console.error('Error creating test accounts:', err);
      setError(err.message || 'Failed to create test accounts');
    } finally {
      setLoading(false);
    }
  };

  const createTestClass = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      // First, sign in as teacher
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: 'teacher@testclass.com',
        password: 'password'
      });
      
      if (signInError || !signInData.user) {
        throw new Error('Could not sign in as teacher. Create test accounts first.');
      }
      
      // Create a test class
      const { data: classData, error: classError } = await supabase
        .from('classes')
        .insert([
          {
            name: 'Test Class',
            description: 'A test class with 10 students',
            teacher_id: signInData.user.id,
          }
        ])
        .select()
        .single();
      
      if (classError) {
        throw new Error(`Failed to create test class: ${classError.message}`);
      }
      
      // Get student accounts
      const studentEnrollments = [];
      
      for (let i = 1; i <= 10; i++) {
        const studentEmail = `student${i}@testclass.com`;
        
        const { data: userData } = await supabase
          .from('profiles')
          .select('id')
          .eq('email', studentEmail)
          .single();
          
        if (userData) {
          studentEnrollments.push({
            class_id: classData.id,
            student_id: userData.id
          });
        }
      }
      
      // Enroll students in the class
      if (studentEnrollments.length > 0) {
        const { error: enrollError } = await supabase
          .from('class_enrollments')
          .insert(studentEnrollments);
        
        if (enrollError) {
          throw new Error(`Failed to enroll students: ${enrollError.message}`);
        }
      }
      
      // Create a test homework assignment
      const { error: homeworkError } = await supabase
        .from('homework_assignments')
        .insert([
          {
            class_id: classData.id,
            title: 'Sample Mathematics Homework',
            description: 'Complete these practice questions',
            subject: 'maths',
            difficulty: 'easy',
            question_count: 10
          }
        ]);
        
      if (homeworkError) {
        throw new Error(`Failed to create homework: ${homeworkError.message}`);
      }
      
      setSuccess(`Test class created successfully with code: ${classData.class_code}`);
      
      // Sign out
      await supabase.auth.signOut();
      
    } catch (err: any) {
      console.error('Error creating test class:', err);
      setError(err.message || 'Failed to create test class');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container max-w-4xl pt-32 pb-16">
        <h1 className="text-3xl font-bold mb-8">Test Setup</h1>
        
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200 text-green-800">
            <Check className="h-4 w-4" />
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Create Test Accounts</CardTitle>
              <CardDescription>Create teacher and student accounts for testing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This will create:</p>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>One teacher account (teacher@testclass.com)</li>
                <li>Ten student accounts (student1@testclass.com through student10@testclass.com)</li>
                <li>All accounts have the password "password"</li>
              </ul>
              <Button onClick={createTestAccounts} disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                Create Test Accounts
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Create Test Class</CardTitle>
              <CardDescription>Create a class with all test students enrolled</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This will create:</p>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>A "Test Class" owned by the test teacher</li>
                <li>Enroll all ten test students in the class</li>
                <li>Create a sample homework assignment</li>
              </ul>
              <Button onClick={createTestClass} disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                Create Test Class
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TestSetupPage;
