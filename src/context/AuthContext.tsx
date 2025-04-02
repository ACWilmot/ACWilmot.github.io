import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from "@/components/ui/use-toast"

// Define the types
export type UserType = 'student' | 'teacher';

export interface Assignment {
  id: string;
  subject: string;
  title: string;
  description?: string;
  dueDate?: string;
  createdAt: string;
}

export interface ClassData {
  id: string;
  name: string;
  teacherId: string;
  students: string[];
  assignments: Assignment[];
}

export interface Progress {
  correct: number;
  completed: number;
}

export interface StudentData {
  id: string;
  name: string;
  classId: string;
  progress: {
    maths: Progress;
    english: Progress;
    verbal: Progress;
    nonVerbal: Progress;
  };
  assignmentAttempts?: {
    assignmentId: string;
    score: number;
    totalQuestions: number;
    completedAt: string;
  }[];
}

interface AuthContextType {
  user: any | null;
  userType: UserType | null;
  isAuthenticated: boolean;
  login: (userType: UserType) => void;
  logout: () => void;
  getClassesByTeacher: () => ClassData[];
  getClassById: (classId: string) => ClassData | undefined;
  createClass: (className: string) => Promise<boolean>;
  addStudentToClass: (studentName: string, classId: string) => Promise<boolean>;
  getStudentsByClass: (classId: string) => StudentData[];
  assignExercise: (classId: string, assignment: Omit<Assignment, 'id' | 'createdAt'>) => Promise<boolean>;
  updateProgress: (subject: string, totalQuestions: number, score: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [classes, setClasses] = useState<ClassData[]>(() => {
    const storedClasses = localStorage.getItem('classes');
    return storedClasses ? JSON.parse(storedClasses) : [];
  });
  const [students, setStudents] = useState<StudentData[]>(() => {
    const storedStudents = localStorage.getItem('students');
    return storedStudents ? JSON.parse(storedStudents) : [];
  });
  const { toast } = useToast()

  useEffect(() => {
    // Load authentication state from localStorage
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      setUser(authData.user);
      setUserType(authData.userType);
      setIsAuthenticated(authData.isAuthenticated);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('classes', JSON.stringify(classes));
  }, [classes]);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const login = (type: UserType) => {
    const newUser = { id: uuidv4(), name: type === 'teacher' ? 'Teacher User' : 'Student User' };
    setUser(newUser);
    setUserType(type);
    setIsAuthenticated(true);

    // Save authentication state to localStorage
    localStorage.setItem('auth', JSON.stringify({
      user: newUser,
      userType: type,
      isAuthenticated: true,
    }));
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
    setIsAuthenticated(false);

    // Clear authentication state from localStorage
    localStorage.removeItem('auth');
  };

  const getClassesByTeacher = () => {
    // For simplicity, return all classes. In a real app, filter by teacher ID.
    return classes;
  };
  
  const getClassById = (classId: string) => {
    return classes.find(c => c.id === classId);
  };

  const createClass = async (className: string) => {
    try {
      const newClass: ClassData = {
        id: uuidv4(),
        teacherId: user.id, // Assuming the user is the teacher
        name: className,
        students: [],
        assignments: [],
      };
      setClasses(prevClasses => [...prevClasses, newClass]);
      toast({
        title: "Success",
        description: "Class created successfully",
      })
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create class",
      })
      return false;
    }
  };

  const addStudentToClass = async (studentName: string, classId: string) => {
    try {
      const newStudent: StudentData = {
        id: uuidv4(),
        name: studentName,
        classId: classId,
        progress: {
          maths: { correct: 0, completed: 0 },
          english: { correct: 0, completed: 0 },
          verbal: { correct: 0, completed: 0 },
          nonVerbal: { correct: 0, completed: 0 },
        },
      };
      setStudents(prevStudents => [...prevStudents, newStudent]);

      // Update the class with the new student
      setClasses(prevClasses => {
        return prevClasses.map(cls => {
          if (cls.id === classId) {
            return { ...cls, students: [...cls.students, newStudent.id] };
          }
          return cls;
        });
      });
      toast({
        title: "Success",
        description: "Student added successfully",
      })
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add student",
      })
      return false;
    }
  };

  const getStudentsByClass = (classId: string) => {
    return students.filter(student => student.classId === classId);
  };

  const assignExercise = async (classId: string, assignment: Omit<Assignment, 'id' | 'createdAt'>) => {
    try {
      const newAssignment: Assignment = {
        id: uuidv4(),
        ...assignment,
        createdAt: new Date().toISOString(),
      };

      setClasses(prevClasses => {
        return prevClasses.map(cls => {
          if (cls.id === classId) {
            return { ...cls, assignments: [...cls.assignments, newAssignment] };
          }
          return cls;
        });
      });
      toast({
        title: "Success",
        description: "Assignment assigned successfully",
      })
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to assign assignment",
      })
      return false;
    }
  };

  const updateProgress = (subject: string, totalQuestions: number, score: number) => {
    setStudents(prevStudents => {
      return prevStudents.map(student => {
        // Only update the student if they are the current user
        if (student.id === user?.id) {
          const updatedProgress = { ...student.progress };
          updatedProgress[subject] = {
            correct: updatedProgress[subject].correct + score,
            completed: updatedProgress[subject].completed + totalQuestions,
          };
          return { ...student, progress: updatedProgress };
        }
        return student;
      });
    });
  };

  const value = {
    user,
    userType,
    isAuthenticated,
    login,
    logout,
    getClassesByTeacher,
    getClassById,
    createClass,
    addStudentToClass,
    getStudentsByClass,
    assignExercise,
    updateProgress,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
