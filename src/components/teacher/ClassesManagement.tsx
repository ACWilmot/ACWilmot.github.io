
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
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
import { FolderPlus, Users, Loader2 } from 'lucide-react';

interface ClassesManagementProps {
  getClasses: () => Promise<any[]>;
  createClass: (name: string, description?: string) => Promise<string | null>;
  onClassSelect: (classId: string) => void;
}

const ClassesManagement: React.FC<ClassesManagementProps> = ({ 
  getClasses, 
  createClass,
  onClassSelect
}) => {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [className, setClassName] = useState('');
  const [classDescription, setClassDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    setLoading(true);
    setError(null);
    try {
      const classesList = await getClasses();
      setClasses(classesList);
    } catch (error) {
      console.error("Error fetching classes:", error);
      setError("Failed to load classes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateClass = async () => {
    if (!className.trim()) return;

    setIsCreating(true);
    try {
      const classId = await createClass(className, classDescription);
      if (classId) {
        setClassName('');
        setClassDescription('');
        await fetchClasses();
      }
    } finally {
      setIsCreating(false);
    }
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
        <CardHeader>
          <CardTitle>Your Classes</CardTitle>
          <CardDescription>Select a class to view and manage its students</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="text-center py-4 text-red-500">
              {error}
              <Button variant="outline" size="sm" className="ml-2" onClick={fetchClasses}>
                Try Again
              </Button>
            </div>
          )}
          
          {loading ? (
            <div className="text-center py-8 flex flex-col items-center">
              <Loader2 className="h-6 w-6 animate-spin mb-2" />
              <p>Loading classes...</p>
            </div>
          ) : classes.length === 0 ? (
            <div className="text-center py-8">
              <p>No classes created yet.</p>
              <p className="text-muted-foreground text-sm mt-2">Create a class to get started</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Description</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((classItem) => (
                  <TableRow key={classItem.id}>
                    <TableCell className="font-medium">{classItem.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{classItem.description || '-'}</TableCell>
                    <TableCell>{classItem.student_count}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => onClassSelect(classItem.id)}
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

export default ClassesManagement;
