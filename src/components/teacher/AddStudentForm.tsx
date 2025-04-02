
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

interface AddStudentFormProps {
  onAddStudent: (email: string) => Promise<boolean>;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent }) => {
  const [studentEmailInput, setStudentEmailInput] = useState('');

  const handleAddStudent = async () => {
    if (!studentEmailInput.trim()) return;

    const success = await onAddStudent(studentEmailInput.trim());
    if (success) {
      setStudentEmailInput('');
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Add Student</CardTitle>
        <CardDescription>Enter a student's email to add them to your class</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input 
            placeholder="Student Email" 
            value={studentEmailInput} 
            onChange={(e) => setStudentEmailInput(e.target.value)}
          />
          <Button onClick={handleAddStudent}>
            <UserPlus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddStudentForm;
