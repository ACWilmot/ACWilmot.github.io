
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserPlus, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AddStudentFormProps {
  onAddStudent: (email: string) => Promise<boolean>;
  classId: string;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent, classId }) => {
  const [studentEmailInput, setStudentEmailInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddStudent = async () => {
    if (!studentEmailInput.trim()) {
      setError("Please enter a student email address");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      const success = await onAddStudent(studentEmailInput.trim());
      if (success) {
        setStudentEmailInput('');
      }
    } catch (err) {
      setError("Failed to add student. Please try again.");
      console.error("Error adding student:", err);
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
        <div className="flex gap-2">
          <Input 
            placeholder="Student Email" 
            value={studentEmailInput} 
            onChange={(e) => setStudentEmailInput(e.target.value)}
            disabled={isSubmitting}
          />
          <Button 
            onClick={handleAddStudent} 
            disabled={isSubmitting || !studentEmailInput.trim()}
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                Adding...
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4 mr-2" />
                Add
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddStudentForm;
