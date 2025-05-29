
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';
import { supabase } from '@/integrations/supabase/client';
import { StudentProfile } from '@/types/userTypes';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, User, Trash2, AlertCircle, Users } from 'lucide-react';
import { toast } from 'sonner';
import { Navigate } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const StudentsPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { isTutor } = useSubscription();
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  // Redirect if not authenticated or not a tutor
  if (!isAuthenticated || !isTutor) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase
        .from('student_profiles')
        .select('*')
        .eq('tutor_id', user?.id)
        .order('name');

      if (error) {
        console.error('Error fetching students:', error);
        toast.error('Failed to load students');
        return;
      }

      setStudents(data || []);
    } catch (error) {
      console.error('Error fetching students:', error);
      toast.error('Failed to load students');
    } finally {
      setIsLoading(false);
    }
  };

  const createStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newStudentName.trim()) {
      toast.error('Student name is required');
      return;
    }

    setIsCreating(true);
    try {
      const { data, error } = await supabase
        .from('student_profiles')
        .insert({
          name: newStudentName.trim(),
          tutor_id: user?.id,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating student:', error);
        toast.error('Failed to create student');
        return;
      }

      setStudents([...students, data]);
      setNewStudentName('');
      toast.success(`Student "${data.name}" created successfully`);
    } catch (error) {
      console.error('Error creating student:', error);
      toast.error('Failed to create student');
    } finally {
      setIsCreating(false);
    }
  };

  const deleteStudent = async (studentId: string, studentName: string) => {
    try {
      const { error } = await supabase
        .from('student_profiles')
        .delete()
        .eq('id', studentId)
        .eq('tutor_id', user?.id);

      if (error) {
        console.error('Error deleting student:', error);
        toast.error('Failed to delete student');
        return;
      }

      setStudents(students.filter(s => s.id !== studentId));
      toast.success(`Student "${studentName}" deleted successfully`);
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error('Failed to delete student');
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading students...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Student Management</h1>
          <p className="text-muted-foreground">
            Create and manage student sub-accounts. You can switch between students using the selector in the top navigation.
          </p>
        </div>

        {/* Create Student Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Student
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={createStudent} className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="student-name">Student Name</Label>
                <Input
                  id="student-name"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  placeholder="Enter student name"
                  disabled={isCreating}
                />
              </div>
              <div className="flex items-end">
                <Button type="submit" disabled={isCreating || !newStudentName.trim()}>
                  {isCreating ? 'Creating...' : 'Create Student'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Students List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Your Students ({students.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {students.length === 0 ? (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  No students created yet. Add your first student using the form above.
                </AlertDescription>
              </Alert>
            ) : (
              <div className="space-y-4">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Created {new Date(student.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Student</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{student.name}"? This action cannot be undone and will remove all their progress data.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteStudent(student.id, student.name)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default StudentsPage;
