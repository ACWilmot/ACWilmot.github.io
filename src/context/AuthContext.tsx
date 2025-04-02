
import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from "@/components/ui/use-toast";

// Define types
export type UserType = 'student' | 'teacher';

export interface StudentProgress {
  correct: number;
  completed: number;
  lastAttempted?: string;
}

export interface UserProgress {
  maths: StudentProgress;
  english: StudentProgress;
  verbal: StudentProgress;
  nonVerbal: StudentProgress;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  password?: string;
  progress?: UserProgress;
}

export interface Assignment {
  id: string;
  title: string;
  description?: string;
  subject: 'maths' | 'english' | 'verbal' | 'nonVerbal';
  dueDate?: string;
  createdAt: string;
}

export interface AssignmentAttempt {
  assignmentId: string;
  completed: boolean;
  score?: number;
  total?: number;
  date: string;
}

export interface StudentData {
  id: string;
  name: string;
  password: string;
  classId: string;
  progress: UserProgress;
  assignmentAttempts: AssignmentAttempt[];
}

export interface ClassData {
  id: string;
  teacherId: string;
  name: string;
  students: string[]; // Student IDs
  assignments: Assignment[];
}

interface AuthContextType {
  user: User | null;
  userType: UserType | null;
  isAuthenticated: boolean;
  login: (type: UserType) => boolean;
  logout: () => void;
  register: (userData: { name: string; email?: string; password?: string; userType: UserType }) => Promise<boolean>;
  getClassesByTeacher: () => ClassData[];
  getClassById: (classId: string) => ClassData | undefined;
  createClass: (className: string) => Promise<boolean>;
  addStudentToClass: (studentName: string, classId: string, password: string) => Promise<boolean>;
  getStudentsByClass: (classId: string) => StudentData[];
  assignExercise: (classId: string, assignment: Omit<Assignment, 'id' | 'createdAt'>) => Promise<boolean>;
  updateProgress: (subject: keyof UserProgress, totalQuestions: number, score: number) => void;
  resetSubjectProgress: (subject: keyof UserProgress) => void;
  getAssignmentsForStudent: () => Assignment[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a demo class with 30 students
const demoClassId = uuidv4();
const demoClass: ClassData = {
  id: demoClassId,
  teacherId: "teacher-demo",
  name: "Demo Class",
  students: [],
  assignments: []
};

const demoStudents: StudentData[] = Array.from({ length: 30 }, (_, i) => ({
  id: `student-${i+1}`,
  name: `Student${i+1}`,
  password: "password", 
  classId: demoClassId,
  progress: {
    maths: { correct: 0, completed: 0 },
    english: { correct: 0, completed: 0 },
    verbal: { correct: 0, completed: 0 },
    nonVerbal: { correct: 0, completed: 0 }
  },
  assignmentAttempts: []
}));

// Update demoClass.students with the student IDs
demoClass.students = demoStudents.map(student => student.id);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [classes, setClasses] = useState<ClassData[]>(() => {
    const storedClasses = localStorage.getItem('classes');
    if (storedClasses) {
      const parsedClasses = JSON.parse(storedClasses);
      // Check if demo class already exists
      if (!parsedClasses.some((c: ClassData) => c.name === "Demo Class")) {
        return [...parsedClasses, demoClass];
      }
      return parsedClasses;
    }
    return [demoClass];
  });
  const [students, setStudents] = useState<StudentData[]>(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      const parsedStudents = JSON.parse(storedStudents);
      // Check if demo students already exist
      if (!parsedStudents.some((s: StudentData) => s.name === "Student1")) {
        return [...parsedStudents, ...demoStudents];
      }
      return parsedStudents;
    }
    return demoStudents;
  });

  const { toast } = useToast();

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
    const newUser = {
      id: uuidv4(),
      name: type === 'teacher' ? 'Teacher User' : 'Student User'
    };
    setUser(newUser);
    setUserType(type);
    setIsAuthenticated(true);

    // Save authentication state to localStorage
    localStorage.setItem('auth', JSON.stringify({
      user: newUser,
      userType: type,
      isAuthenticated: true
    }));

    return true; // Return true to indicate successful login
  };

  const register = async (userData: { name: string; email?: string; password?: string; userType: UserType }): Promise<boolean> => {
    try {
      // In a real app, we would register the user with a backend
      // For now, just set the user state as if they've logged in
      const newUser: User = {
        id: uuidv4(),
        name: userData.name,
        email: userData.email,
        password: userData.password
      };

      setUser(newUser);
      setUserType(userData.userType);
      setIsAuthenticated(true);

      // Save authentication state to localStorage
      localStorage.setItem('auth', JSON.stringify({
        user: newUser,
        userType: userData.userType,
        isAuthenticated: true
      }));

      toast({
        title: "Success",
        description: "Account created successfully"
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account"
      });
      return false;
    }
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

  const createClass = async (className: string): Promise<boolean> => {
    try {
      const newClass: ClassData = {
        id: uuidv4(),
        teacherId: user?.id || '',
        name: className,
        students: [],
        assignments: []
      };

      setClasses(prevClasses => [...prevClasses, newClass]);
      
      toast({
        title: "Success",
        description: "Class created successfully"
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create class"
      });
      return false;
    }
  };

  const addStudentToClass = async (studentName: string, classId: string, password: string): Promise<boolean> => {
    try {
      const newStudent: StudentData = {
        id: uuidv4(),
        name: studentName,
        password: password,
        classId: classId,
        progress: {
          maths: { correct: 0, completed: 0 },
          english: { correct: 0, completed: 0 },
          verbal: { correct: 0, completed: 0 },
          nonVerbal: { correct: 0, completed: 0 }
        },
        assignmentAttempts: []
      };

      setStudents(prevStudents => [...prevStudents, newStudent]);

      // Update the class with the new student
      setClasses(prevClasses => {
        return prevClasses.map(cls => {
          if (cls.id === classId) {
            return {
              ...cls,
              students: [...cls.students, newStudent.id]
            };
          }
          return cls;
        });
      });

      toast({
        title: "Success",
        description: "Student added successfully"
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add student"
      });
      return false;
    }
  };

  const getStudentsByClass = (classId: string) => {
    return students.filter(student => student.classId === classId);
  };

  const assignExercise = async (
    classId: string, 
    assignment: Omit<Assignment, 'id' | 'createdAt'>
  ): Promise<boolean> => {
    try {
      const newAssignment: Assignment = {
        id: uuidv4(),
        ...assignment,
        createdAt: new Date().toISOString()
      };

      setClasses(prevClasses => {
        return prevClasses.map(cls => {
          if (cls.id === classId) {
            return {
              ...cls,
              assignments: [...cls.assignments, newAssignment]
            };
          }
          return cls;
        });
      });

      toast({
        title: "Success",
        description: "Assignment assigned successfully"
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to assign assignment"
      });
      return false;
    }
  };

  const getAssignmentsForStudent = () => {
    if (!user || userType !== 'student') return [];
    
    // Find all classes where this student is a member
    const userClasses = classes.filter(cls => 
      cls.students.includes(user.id)
    );
    
    // Get all assignments from those classes
    const assignments: Assignment[] = [];
    userClasses.forEach(cls => {
      assignments.push(...cls.assignments);
    });
    
    return assignments;
  };

  const updateProgress = (subject: keyof UserProgress, totalQuestions: number, score: number) => {
    setUser(prevUser => {
      if (!prevUser || !prevUser.progress) {
        const newProgress: UserProgress = {
          maths: { correct: 0, completed: 0 },
          english: { correct: 0, completed: 0 },
          verbal: { correct: 0, completed: 0 },
          nonVerbal: { correct: 0, completed: 0 }
        };
        newProgress[subject] = {
          correct: score,
          completed: totalQuestions,
          lastAttempted: new Date().toLocaleDateString()
        };
        return {
          ...prevUser,
          progress: newProgress
        };
      }

      const updatedProgress = { ...prevUser.progress };
      updatedProgress[subject] = {
        correct: (updatedProgress[subject]?.correct || 0) + score,
        completed: (updatedProgress[subject]?.completed || 0) + totalQuestions,
        lastAttempted: new Date().toLocaleDateString()
      };

      return {
        ...prevUser,
        progress: updatedProgress
      };
    });

    // Update localStorage after state update
    setTimeout(() => {
      if (user) {
        localStorage.setItem('auth', JSON.stringify({
          user,
          userType,
          isAuthenticated
        }));
      }
    }, 0);
  };

  const resetSubjectProgress = (subject: keyof UserProgress) => {
    setUser(prevUser => {
      if (!prevUser || !prevUser.progress) return prevUser;

      const updatedProgress = { ...prevUser.progress };
      updatedProgress[subject] = {
        correct: 0,
        completed: 0,
        lastAttempted: undefined
      };

      return {
        ...prevUser,
        progress: updatedProgress
      };
    });

    // Update localStorage after state update
    setTimeout(() => {
      if (user) {
        localStorage.setItem('auth', JSON.stringify({
          user,
          userType,
          isAuthenticated
        }));
      }
    }, 0);

    toast({
      title: "Success",
      description: `Progress for ${subject} has been reset`
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
    resetSubjectProgress,
    getAssignmentsForStudent,
    register
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
