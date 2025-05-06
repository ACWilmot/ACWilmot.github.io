
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, School } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTeacher } from '@/context/TeacherContext';
import StudentsList from './StudentsList';
import AddStudentForm from './AddStudentForm';
import HomeworkList from './HomeworkList';
import CreateHomeworkForm from './CreateHomeworkForm';

const ClassDashboard: React.FC = () => {
  const { 
    selectedClass, 
    setSelectedClass,
    students,
    refreshStudents,
    enrollStudent,
    removeStudent,
    isLoading
  } = useTeacher();
  
  const [activeTab, setActiveTab] = useState('students');

  if (!selectedClass) return null;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <School className="h-6 w-6 text-primary" />
            {selectedClass.name}
          </h1>
          <p className="text-muted-foreground">
            Class Code: <span className="font-mono font-medium">{selectedClass.class_code}</span>
            {selectedClass.description && ` • ${selectedClass.description}`}
          </p>
        </div>
        <Button variant="outline" onClick={() => setSelectedClass(null)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Classes
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 w-full max-w-md mb-4">
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="homework">Homework</TabsTrigger>
        </TabsList>
        
        <TabsContent value="students">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <AddStudentForm onAddStudent={enrollStudent} />
            </div>
            <div className="lg:col-span-2">
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              ) : (
                <StudentsList 
                  students={students} 
                  onRemoveStudent={removeStudent}
                  onRefresh={refreshStudents}
                />
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="homework">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <CreateHomeworkForm />
            </div>
            <div className="lg:col-span-2">
              <HomeworkList />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClassDashboard;
