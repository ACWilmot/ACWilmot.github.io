
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserPlus, AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AddStudentFormProps {
  onAddStudent: (email: string) => Promise<boolean>;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent }) => {
  const [studentEmail, setStudentEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!studentEmail.trim()) {
      setError("Please enter a student email address");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      const success = await onAddStudent(studentEmail.trim());
      
      if (success) {
        setStudentEmail('');
      }
    } catch (err) {
      console.error("Error adding student:", err);
      setError("Failed to add student. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Student to Class</CardTitle>
        <CardDescription>
          Enter a student's email to add them to this class
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleAddStudent} className="space-y-4">
          <Input 
            placeholder="Student Email" 
            value={studentEmail} 
            onChange={(e) => setStudentEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <Button 
            type="submit"
            disabled={isSubmitting || !studentEmail.trim()}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Adding...
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4 mr-2" />
                Add Student
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddStudentForm;
