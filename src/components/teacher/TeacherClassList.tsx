
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { FolderPlus, Loader2, School, Users } from 'lucide-react';
import { useTeacher } from '@/context/TeacherContext';

const TeacherClassList: React.FC = () => {
  const [className, setClassName] = useState('');
  const [classDescription, setClassDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  
  const { 
    classes, 
    selectedClass, 
    setSelectedClass, 
    createClass, 
    refreshClasses, 
    isLoading 
  } = useTeacher();

  const handleCreateClass = async () => {
    if (!className.trim()) return;
    
    setIsCreating(true);
    try {
      await createClass(className, classDescription || undefined);
      setClassName('');
      setClassDescription('');
    } finally {
      setIsCreating(false);
    }
  };

  const handleRefresh = () => {
    refreshClasses();
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create New Class</CardTitle>
          <CardDescription>Create a new class to manage your students</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              placeholder="Class Name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              disabled={isCreating}
            />
          </div>
          <div>
            <Input
              placeholder="Class Description (optional)"
              value={classDescription}
              onChange={(e) => setClassDescription(e.target.value)}
              disabled={isCreating}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreateClass} disabled={isCreating || !className.trim()}>
            {isCreating ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <FolderPlus className="h-4 w-4 mr-2" />
                Create Class
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Your Classes</CardTitle>
            <CardDescription>Select a class to view and manage its students</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Refresh"}
          </Button>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-8 flex flex-col items-center">
              <Loader2 className="h-8 w-8 animate-spin mb-3" />
              <p>Loading your classes...</p>
            </div>
          ) : classes.length === 0 ? (
            <div className="text-center py-8">
              <p>No classes created yet.</p>
              <p className="text-muted-foreground text-sm mt-2">Create a class above to get started</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Description</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((classItem) => (
                  <TableRow key={classItem.id}>
                    <TableCell className="font-medium">{classItem.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{classItem.description || '-'}</TableCell>
                    <TableCell className="font-mono">{classItem.class_code}</TableCell>
                    <TableCell>{classItem.student_count || 0}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setSelectedClass(classItem)}
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherClassList;
