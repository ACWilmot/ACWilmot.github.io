
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { StudentProfile } from '@/types/userTypes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Plus, User } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface StudentSelectorProps {
  selectedStudentId: string | null;
  onStudentChange: (studentId: string | null) => void;
}

const StudentSelector: React.FC<StudentSelectorProps> = ({
  selectedStudentId,
  onStudentChange,
}) => {
  const { user } = useAuth();
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    if (user?.role === 'tutor') {
      fetchStudents();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase
        .from('student_profiles')
        .select('*')
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

  const createStudent = async () => {
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
      setIsDialogOpen(false);
      toast.success(`Student "${data.name}" created successfully`);
    } catch (error) {
      console.error('Error creating student:', error);
      toast.error('Failed to create student');
    } finally {
      setIsCreating(false);
    }
  };

  if (user?.role !== 'tutor') {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    );
  }

  const selectedStudent = students.find(s => s.id === selectedStudentId);

  return (
    <div className="flex items-center gap-2">
      <User className="h-4 w-4 text-muted-foreground" />
      <Select value={selectedStudentId || ''} onValueChange={onStudentChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select student">
            {selectedStudent ? selectedStudent.name : 'My Progress'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">My Progress</SelectItem>
          {students.map((student) => (
            <SelectItem key={student.id} value={student.id}>
              {student.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="student-name">Student Name</Label>
              <Input
                id="student-name"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="Enter student name"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    createStudent();
                  }
                }}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setIsDialogOpen(false);
                  setNewStudentName('');
                }}
              >
                Cancel
              </Button>
              <Button onClick={createStudent} disabled={isCreating}>
                {isCreating ? 'Creating...' : 'Create Student'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentSelector;
