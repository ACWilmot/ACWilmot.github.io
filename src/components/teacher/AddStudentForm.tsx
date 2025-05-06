
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserPlus, AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AddStudentFormProps {
  onAddStudent: (email: string) => Promise<boolean>;
  classId: string;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent, classId }) => {
  const [studentEmailInput, setStudentEmailInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!studentEmailInput.trim()) {
      setError("Please enter a student email address");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      console.log(`Attempting to add student ${studentEmailInput} to class ${classId}`);
      const success = await onAddStudent(studentEmailInput.trim());
      
      if (success) {
        setStudentEmailInput('');
      }
    } catch (err) {
      console.error("Error adding student:", err);
      setError("Failed to add student. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Add Student to Class</CardTitle>
        <CardDescription>
          Enter a student's email to add them to this class. 
          Note: If the student is already in another class, they will be moved to this class.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleAddStudent} className="flex gap-2">
          <Input 
            placeholder="Student Email" 
            value={studentEmailInput} 
            onChange={(e) => setStudentEmailInput(e.target.value)}
            disabled={isSubmitting}
          />
          <Button 
            type="submit"
            disabled={isSubmitting || !studentEmailInput.trim()}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Adding...
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4 mr-2" />
                Add
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddStudentForm;
