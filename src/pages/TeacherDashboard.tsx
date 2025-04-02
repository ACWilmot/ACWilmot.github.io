import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '@/components/Header';
import { useAuth, ClassData, Assignment } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import AssignmentAttempts from '@/components/AssignmentAttempts';
import { AlertCircle, BarChart2, Book, Calendar, CheckCircle, Clock, PlusCircle, School, Send, User, UserPlus, Users } from 'lucide-react';

const newClassSchema = z.object({
  className: z.string().min(2, {
    message: 'Class name must be at least 2 characters',
  }),
});

const newStudentSchema = z.object({
  studentName: z.string().min(2, {
    message: 'Student name must be at least 2 characters',
  }),
  classId: z.string().min(1, {
    message: 'Please select a class',
  }),
  password: z.string().optional(),
});

const newAssignmentSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters',
  }),
  description: z.string().optional(),
  subject: z.enum(['maths', 'english', 'verbal', 'nonVerbal'], {
    required_error: 'Please select a subject',
  }),
  dueDate: z.string().optional(),
  classId: z.string().min(1, {
    message: 'Please select a class',
  }),
});

const TeacherDashboard = () => {
  const { 
    user, isAuthenticated, userType, getClassesByTeacher, 
    createClass, addStudentToClass, getStudentsByClass, 
    assignExercise
  } = useAuth();
  const navigate = useNavigate();
  
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [students, setStudents] = useState<any[]>([]);
  const [isAddingClass, setIsAddingClass] = useState(false);
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [isAssigningExercise, setIsAssigningExercise] = useState(false);

  const classForm = useForm<z.infer<typeof newClassSchema>>({
    resolver: zodResolver(newClassSchema),
    defaultValues: {
      className: '',
    },
  });

  const studentForm = useForm<z.infer<typeof newStudentSchema>>({
    resolver: zodResolver(newStudentSchema),
    defaultValues: {
      studentName: '',
      classId: '',
    },
  });

  const assignmentForm = useForm<z.infer<typeof newAssignmentSchema>>({
    resolver: zodResolver(newAssignmentSchema),
    defaultValues: {
      title: '',
      description: '',
      subject: 'maths',
      classId: '',
    },
  });

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (userType !== 'teacher') {
      navigate('/');
      return;
    }
    
    loadClasses();
  }, [isAuthenticated, userType, navigate]);

  const loadClasses = () => {
    const teacherClasses = getClassesByTeacher();
    setClasses(teacherClasses);
    
    if (teacherClasses.length > 0 && !selectedClass) {
      setSelectedClass(teacherClasses[0].id);
      loadStudents(teacherClasses[0].id);
    }
  };

  const loadStudents = (classId: string) => {
    const classStudents = getStudentsByClass(classId);
    setStudents(classStudents);
  };

  const handleClassChange = (classId: string) => {
    setSelectedClass(classId);
    loadStudents(classId);
  };

  const handleCreateClass = async (data: z.infer<typeof newClassSchema>) => {
    const success = await createClass(data.className);
    if (success) {
      loadClasses();
      setIsAddingClass(false);
      classForm.reset();
    }
  };

  const handleAddStudent = async (data: z.infer<typeof newStudentSchema>) => {
    const password = data.password || "password";
    const success = await addStudentToClass(data.studentName, data.classId, password);
    if (success) {
      if (data.classId === selectedClass) {
        loadStudents(data.classId);
      }
      setIsAddingStudent(false);
      studentForm.reset();
    }
  };

  const handleCreateAssignment = async (data: z.infer<typeof newAssignmentSchema>) => {
    const { title, description, subject, dueDate, classId } = data;
    
    const assignment = {
      subject,
      title,
      description,
      dueDate
    };
    
    const success = await assignExercise(classId, assignment);
    if (success) {
      loadClasses();
      setIsAssigningExercise(false);
      assignmentForm.reset();
    }
  };

  const calculateClassStats = (classId: string) => {
    const classStudents = getStudentsByClass(classId);
    
    if (classStudents.length === 0) {
      return { 
        mathsAvg: 0, 
        englishAvg: 0, 
        verbalAvg: 0, 
        nonVerbalAvg: 0,
        totalStudents: 0,
        activeStudents: 0
      };
    }
    
    let mathsTotal = 0;
    let englishTotal = 0;
    let verbalTotal = 0;
    let nonVerbalTotal = 0;
    let activeCount = 0;
    
    classStudents.forEach(student => {
      const { progress } = student;
      
      const mathsAccuracy = progress.maths.completed > 0 
        ? (progress.maths.correct / progress.maths.completed) * 100 
        : 0;
        
      const englishAccuracy = progress.english.completed > 0 
        ? (progress.english.correct / progress.english.completed) * 100 
        : 0;
        
      const verbalAccuracy = progress.verbal.completed > 0 
        ? (progress.verbal.correct / progress.verbal.completed) * 100 
        : 0;
        
      const nonVerbalAccuracy = progress.nonVerbal.completed > 0 
        ? (progress.nonVerbal.correct / progress.nonVerbal.completed) * 100 
        : 0;
      
      mathsTotal += mathsAccuracy;
      englishTotal += englishAccuracy;
      verbalTotal += verbalAccuracy;
      nonVerbalTotal += nonVerbalAccuracy;
      
      if (
        progress.maths.completed > 0 ||
        progress.english.completed > 0 ||
        progress.verbal.completed > 0 ||
        progress.nonVerbal.completed > 0
      ) {
        activeCount++;
      }
    });
    
    return {
      mathsAvg: Math.round(mathsTotal / classStudents.length),
      englishAvg: Math.round(englishTotal / classStudents.length),
      verbalAvg: Math.round(verbalTotal / classStudents.length),
      nonVerbalAvg: Math.round(nonVerbalTotal / classStudents.length),
      totalStudents: classStudents.length,
      activeStudents: activeCount
    };
  };

  const getAssignments = (classId: string | null): Assignment[] => {
    if (!classId) return [];
    
    const targetClass = classes.find(c => c.id === classId);
    return targetClass ? targetClass.assignments : [];
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 pt-20 pb-16 mx-auto">
        <div className="mb-8 pt-6">
          <h1 className="text-3xl font-display font-bold flex items-center gap-2">
            <School className="h-6 w-6 text-primary" />
            Teacher Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your classes, students, and assignments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">My Classes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {classes.length > 0 ? (
                  <div className="space-y-2">
                    {classes.map((classItem) => (
                      <Button
                        key={classItem.id}
                        variant={selectedClass === classItem.id ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => handleClassChange(classItem.id)}
                      >
                        <School className="mr-2 h-4 w-4" />
                        {classItem.name}
                        <span className="ml-auto bg-muted text-muted-foreground rounded-full px-2 py-1 text-xs">
                          {classItem.students.length}
                        </span>
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">No classes yet</p>
                )}

                <Dialog open={isAddingClass} onOpenChange={setIsAddingClass}>
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="outline">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add New Class
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Class</DialogTitle>
                      <DialogDescription>
                        Add a new class to your dashboard
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...classForm}>
                      <form onSubmit={classForm.handleSubmit(handleCreateClass)} className="space-y-4">
                        <FormField
                          control={classForm.control}
                          name="className"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Class Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter class name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit">Create Class</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Dialog open={isAddingStudent} onOpenChange={setIsAddingStudent}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Student
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Student</DialogTitle>
                      <DialogDescription>
                        Add a new student to a class
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...studentForm}>
                      <form onSubmit={studentForm.handleSubmit(handleAddStudent)} className="space-y-4">
                        <FormField
                          control={studentForm.control}
                          name="studentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Student Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter student name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={studentForm.control}
                          name="classId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Class</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a class" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {classes.map((classItem) => (
                                    <SelectItem key={classItem.id} value={classItem.id}>
                                      {classItem.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={studentForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input 
                                  type="password" 
                                  placeholder="Enter student password" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                              <FormDescription>
                                Leave blank to use default password.
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit">Add Student</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>

                <Dialog open={isAssigningExercise} onOpenChange={setIsAssigningExercise}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <Book className="mr-2 h-4 w-4" />
                      Assign Exercise
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Assign New Exercise</DialogTitle>
                      <DialogDescription>
                        Create a new exercise for your students
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...assignmentForm}>
                      <form onSubmit={assignmentForm.handleSubmit(handleCreateAssignment)} className="space-y-4">
                        <FormField
                          control={assignmentForm.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Title</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter exercise title" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={assignmentForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description (optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Enter exercise description" 
                                  className="resize-none" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={assignmentForm.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="maths">Mathematics</SelectItem>
                                  <SelectItem value="english">English</SelectItem>
                                  <SelectItem value="verbal">Verbal Reasoning</SelectItem>
                                  <SelectItem value="nonVerbal">Non-verbal Reasoning</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={assignmentForm.control}
                          name="dueDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Due Date (optional)</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={assignmentForm.control}
                          name="classId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Class</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a class" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {classes.map((classItem) => (
                                    <SelectItem key={classItem.id} value={classItem.id}>
                                      {classItem.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit">Assign Exercise</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/progress')}>
                  <BarChart2 className="mr-2 h-4 w-4" />
                  View My Progress
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            {selectedClass ? (
              <Tabs defaultValue="overview">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="assignments">Assignments</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  {(() => {
                    const stats = calculateClassStats(selectedClass);
                    const currentClass = classes.find(c => c.id === selectedClass);
                    
                    return (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Class Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Class Name:</span>
                                  <span className="font-medium">{currentClass?.name}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Total Students:</span>
                                  <span className="font-medium">{stats.totalStudents}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Active Students:</span>
                                  <span className="font-medium">{stats.activeStudents}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Assignments:</span>
                                  <span className="font-medium">{getAssignments(selectedClass).length}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Current Assignments</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              {getAssignments(selectedClass).length > 0 ? (
                                getAssignments(selectedClass).slice(0, 3).map((assignment) => (
                                  <div key={assignment.id} className="flex justify-between items-center py-2 border-b last:border-0">
                                    <div>
                                      <div className="font-medium">{assignment.title}</div>
                                      <div className="text-xs text-muted-foreground capitalize">{assignment.subject}</div>
                                    </div>
                                    {assignment.dueDate && (
                                      <div className="flex items-center text-xs">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {new Date(assignment.dueDate).toLocaleDateString()}
                                      </div>
                                    )}
                                  </div>
                                ))
                              ) : (
                                <p className="text-muted-foreground text-center py-2">No assignments yet</p>
                              )}
                            </CardContent>
                          </Card>
                        </div>

                        <Card>
                          <CardHeader>
                            <CardTitle>Class Performance</CardTitle>
                            <CardDescription>Average accuracy across all subjects</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Mathematics</span>
                                  <span>{stats.mathsAvg}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-primary"
                                    style={{ width: `${stats.mathsAvg}%` }}
                                  />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>English</span>
                                  <span>{stats.englishAvg}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-green-500"
                                    style={{ width: `${stats.englishAvg}%` }}
                                  />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Verbal Reasoning</span>
                                  <span>{stats.verbalAvg}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-amber-500"
                                    style={{ width: `${stats.verbalAvg}%` }}
                                  />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Non-verbal Reasoning</span>
                                  <span>{stats.nonVerbalAvg}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-blue-500"
                                    style={{ width: `${stats.nonVerbalAvg}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })()}
                </TabsContent>

                <TabsContent value="students">
                  <Card>
                    <CardHeader>
                      <CardTitle>Students List</CardTitle>
                      <CardDescription>
                        {students.length} students in {classes.find(c => c.id === selectedClass)?.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Student</TableHead>
                            <TableHead>Maths</TableHead>
                            <TableHead>English</TableHead>
                            <TableHead>Verbal</TableHead>
                            <TableHead>Non-verbal</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {students.length > 0 ? (
                            students.map((student) => {
                              const mathsAccuracy = student.progress.maths.completed > 0 
                                ? Math.round((student.progress.maths.correct / student.progress.maths.completed) * 100)
                                : 0;
                                
                              const englishAccuracy = student.progress.english.completed > 0 
                                ? Math.round((student.progress.english.correct / student.progress.english.completed) * 100)
                                : 0;
                                
                              const verbalAccuracy = student.progress.verbal.completed > 0 
                                ? Math.round((student.progress.verbal.correct / student.progress.verbal.completed) * 100)
                                : 0;
                                
                              const nonVerbalAccuracy = student.progress.nonVerbal.completed > 0 
                                ? Math.round((student.progress.nonVerbal.correct / student.progress.nonVerbal.completed) * 100)
                                : 0;
                              
                              return (
                                <TableRow key={student.id}>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center mr-2">
                                        <User className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <div className="font-medium">{student.name}</div>
                                        <div className="text-xs text-muted-foreground">
                                          {student.progress.maths.completed + 
                                            student.progress.english.completed + 
                                            student.progress.verbal.completed + 
                                            student.progress.nonVerbal.completed} exercises completed
                                        </div>
                                      </div>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <span className={`mr-2 ${mathsAccuracy >= 70 ? 'text-green-500' : mathsAccuracy >= 40 ? 'text-amber-500' : 'text-red-500'}`}>
                                        {mathsAccuracy}%
                                      </span>
                                      <span className="text-xs text-muted-foreground">
                                        ({student.progress.maths.correct}/{student.progress.maths.completed})
                                      </span>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <span className={`mr-2 ${englishAccuracy >= 70 ? 'text-green-500' : englishAccuracy >= 40 ? 'text-amber-500' : 'text-red-500'}`}>
                                        {englishAccuracy}%
                                      </span>
                                      <span className="text-xs text-muted-foreground">
                                        ({student.progress.english.correct}/{student.progress.english.completed})
                                      </span>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <span className={`mr-2 ${verbalAccuracy >= 70 ? 'text-green-500' : verbalAccuracy >= 40 ? 'text-amber-500' : 'text-red-500'}`}>
                                        {verbalAccuracy}%
                                      </span>
                                      <span className="text-xs text-muted-foreground">
                                        ({student.progress.verbal.correct}/{student.progress.verbal.completed})
                                      </span>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <span className={`mr-2 ${nonVerbalAccuracy >= 70 ? 'text-green-500' : nonVerbalAccuracy >= 40 ? 'text-amber-500' : 'text-red-500'}`}>
                                        {nonVerbalAccuracy}%
                                      </span>
                                      <span className="text-xs text-muted-foreground">
                                        ({student.progress.nonVerbal.correct}/{student.progress.nonVerbal.completed})
                                      </span>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              );
                            })
                          ) : (
                            <TableRow>
                              <TableCell colSpan={5} className="text-center py-6">
                                <div className="flex flex-col items-center">
                                  <AlertCircle className="h-8 w-8 text-muted-foreground mb-2" />
                                  <p className="text-muted-foreground">No students in this class yet</p>
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="mt-2"
                                    onClick={() => setIsAddingStudent(true)}
                                  >
                                    <UserPlus className="h-4 w-4 mr-2" />
                                    Add Student
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" onClick={() => setIsAddingStudent(true)} className="ml-auto">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add Student
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="assignments">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Assignments</CardTitle>
                          <CardDescription>
                            Exercises assigned to {classes.find(c => c.id === selectedClass)?.name}
                          </CardDescription>
                        </div>
                        <Button onClick={() => setIsAssigningExercise(true)}>
                          <PlusCircle className="h-4 w-4 mr-2" />
                          New Assignment
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {getAssignments(selectedClass).length > 0 ? (
                        <div className="space-y-4">
                          {getAssignments(selectedClass).map((assignment) => (
                            <Card key={assignment.id}>
                              <CardContent className="p-4">
                                <div className="flex flex-col space-y-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="font-medium text-lg">{assignment.title}</h3>
                                      
                                      <div className="flex flex-wrap items-center mt-1 gap-4">
                                        <div className="flex items-center">
                                          <Book className="h-4 w-4 mr-1 text-muted-foreground" />
                                          <span className="text-sm capitalize">{assignment.subject}</span>
                                        </div>
                                        
                                        {assignment.dueDate && (
                                          <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                            <span className="text-sm">{new Date(assignment.dueDate).toLocaleDateString()}</span>
                                          </div>
                                        )}
                                        
                                        <div className="flex items-center">
                                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                          <span className="text-sm">
                                            {new Date(assignment.createdAt).toLocaleDateString()}
                                          </span>
                                        </div>
                                      </div>
                                      
                                      {assignment.description && (
                                        <p className="text-muted-foreground mt-2">
                                          {assignment.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div className="pt-2 border-t">
                                    <AssignmentAttempts 
                                      classId={selectedClass} 
                                      assignmentId={assignment.id} 
                                    />
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="flex flex-col items-center">
                            <Book className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="font-medium text-lg mb-2">No Assignments Yet</h3>
                            <p className="text-muted-foreground mb-4">
                              Create your first assignment for this class
                            </p>
                            <Button onClick={() => setIsAssigningExercise(true)}>
                              <PlusCircle className="h-4 w-4 mr-2" />
                              Create Assignment
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed rounded-lg">
                <School className="h-12 w-12 text-muted-foreground mb-4" />
                <h2 className="text-2xl font-medium mb-2">No Classes Yet</h2>
                <p className="text-muted-foreground mb-4 text-center">
                  Create your first class to get started
                </p>
                <Button onClick={() => setIsAddingClass(true)}>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Class
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;
