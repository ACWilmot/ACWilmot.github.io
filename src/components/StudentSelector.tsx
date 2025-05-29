
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
import { User } from 'lucide-react';
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
  const [tutorName, setTutorName] = useState<string>('');

  useEffect(() => {
    fetchStudents();
    fetchTutorName();
  }, [user]);

  const fetchTutorName = async () => {
    if (!user?.id) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching tutor name:', error);
        return;
      }

      setTutorName(data?.name || user.email || 'My Progress');
    } catch (error) {
      console.error('Error fetching tutor name:', error);
    }
  };

  const fetchStudents = async () => {
    if (!user?.id) {
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('student_profiles')
        .select('*')
        .eq('tutor_id', user.id)
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

  const handleValueChange = (value: string) => {
    if (value === 'tutor-progress') {
      onStudentChange(null);
    } else {
      onStudentChange(value);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    );
  }

  const selectedStudent = students.find(s => s.id === selectedStudentId);
  const selectValue = selectedStudentId || 'tutor-progress';

  return (
    <div className="flex items-center gap-2">
      <User className="h-4 w-4 text-muted-foreground" />
      <Select value={selectValue} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select student">
            {selectedStudent ? selectedStudent.name : <span className="font-bold">{tutorName}</span>}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tutor-progress">
            <span className="font-bold">{tutorName}</span>
          </SelectItem>
          {students.map((student) => (
            <SelectItem key={student.id} value={student.id}>
              {student.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StudentSelector;
