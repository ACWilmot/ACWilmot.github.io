
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Student } from '@/types/userTypes';
import TeacherDashboardStats from './TeacherDashboardStats';
import StudentsList from './StudentsList';
import AddStudentForm from './AddStudentForm';
import WorksheetUploader from './WorksheetUploader';
import WorksheetList from './WorksheetList';
import { toast } from 'sonner';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';

// Define the props for WorksheetUploader component
interface WorksheetUploaderProps {
  classId?: string;
  inQuiz?: boolean;
  onUploadComplete?: () => Promise<void>;
}

interface ClassStudentsManagementProps {
  classId: string;
  getClassStudents: (classId: string) => Promise<Student[]>;
  addStudentToClass: (classId: string, studentEmail: string) => Promise<boolean>;
  removeStudentFromClass: (classId: string, studentId: string) => Promise<boolean>;
  onBack: () => void;
}

const ClassStudentsManagement: React.FC<ClassStudentsManagementProps> = ({
  classId,
  getClassStudents,
  addStudentToClass,
  removeStudentFromClass,
  onBack
}) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [worksheets, setWorksheets] = useState<any[]>([]);
  const [loadingWorksheets, setLoadingWorksheets] = useState(true);

  useEffect(() => {
    console.log("ClassStudentsManagement mounted with classId:", classId);
    if (classId) {
      fetchStudents();
    } else {
      console.error("No classId provided to ClassStudentsManagement");
      setLoading(false);
      setError("Class ID is missing. Please go back and try again.");
    }
  }, [classId]);

  const fetchStudents = async () => {
    console.log("Fetching students for class:", classId);
    setLoading(true);
    setError(null);
    
    try {
      const studentsList = await getClassStudents(classId);
      console.log("Students fetched:", studentsList);
      setStudents(studentsList || []);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError("Failed to load students. Please try refreshing the page.");
      toast.error("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  const fetchWorksheets = async () => {
    try {
      const { data, error } = await supabase
        .from('worksheet_uploads')
        .select('*')
        .eq('class_id', classId)
        .order('uploaded_at', { ascending: false });

      if (error) throw error;
      setWorksheets(data || []);
    } catch (error) {
      console.error('Error fetching worksheets:', error);
      toast.error('Failed to load worksheets');
    } finally {
      setLoadingWorksheets(false);
    }
  };

  useEffect(() => {
    if (classId) {
      fetchWorksheets();
    }
  }, [classId]);

  const handleAddStudent = async (email: string) => {
    if (!email || !email.trim()) {
      toast.error("Please enter a valid email address");
      return false;
    }
    
    console.log("Adding student with email:", email, "to class:", classId);
    try {
      const success = await addStudentToClass(classId, email.trim());
      if (success) {
        console.log("Student added successfully, refreshing student list");
        toast.success("Student added to class successfully");
        await fetchStudents();
      }
      return success;
    } catch (error) {
      console.error("Error adding student:", error);
      toast.error("Failed to add student to class");
      return false;
    }
  };

  const handleRemoveStudent = async (studentId: string) => {
    console.log("Removing student with ID:", studentId, "from class:", classId);
    const confirmed = window.confirm("Are you sure you want to remove this student from the class?");
    if (confirmed) {
      try {
        const success = await removeStudentFromClass(classId, studentId);
        if (success) {
          console.log("Student removed successfully, refreshing student list");
          toast.success("Student removed from class");
          await fetchStudents();
        }
      } catch (error) {
        console.error("Error removing student:", error);
        toast.error("Failed to remove student from class");
      }
    }
  };

  const handleRefreshStudents = () => {
    fetchStudents();
  };

  return (
    <div className="space-y-8">
      <Button variant="outline" onClick={onBack} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Classes
      </Button>

      {error ? (
        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="h-4 w-4 mr-2" />
          <AlertDescription>{error}</AlertDescription>
          <Button variant="outline" size="sm" className="ml-auto" onClick={handleRefreshStudents}>
            Retry
          </Button>
        </Alert>
      ) : null}

      <TeacherDashboardStats students={students} loading={loading} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AddStudentForm onAddStudent={handleAddStudent} classId={classId} />
        <WorksheetUploader classId={classId} onUploadComplete={fetchWorksheets} />
      </div>

      <WorksheetList worksheets={worksheets} loading={loadingWorksheets} />

      <Card>
        <CardHeader>
          <CardTitle>Class Students</CardTitle>
          <div className="flex items-center border rounded-md px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <Input 
              className="border-0 p-0 shadow-none focus-visible:ring-0" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <StudentsList 
            students={students} 
            loading={loading} 
            searchTerm={searchTerm}
            onRemoveStudent={handleRemoveStudent}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassStudentsManagement;
