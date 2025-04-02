import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from "sonner";
import type { AssignmentAttempt } from '@/types/questionTypes';

export type UserType = 'student' | 'teacher';

type User = {
  id: string;
  name: string;
  email: string | null;
  userType: UserType;
  progress: {
    [subject: string]: {
      completed: number;
      correct: number;
      lastAttempted: string;
    }
  }
  classId?: string; // For students
  assignmentAttempts?: AssignmentAttempt[]; // For students
};

type RegisterData = {
  name: string;
  email?: string;
  password: string;
  userType: UserType;
  classId?: string;
};

export type ClassData = {
  id: string;
  name: string;
  teacherId: string;
  students: string[]; // Array of student IDs
  assignments: Assignment[];
};

export type Assignment = {
  id: string;
  subject: string;
  title: string;
  description?: string;
  dueDate?: string;
  createdAt: string;
};

export type { AssignmentAttempt };

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  userType: UserType | null;
  login: (nameOrEmail: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (data: RegisterData) => Promise<boolean>;
  updateProgress: (subject: string, completed: number, correct: number) => void;
  resetProgress: () => void;
  resetSubjectProgress: (subject: string) => void;
  getStudentsByTeacher: () => User[];
  getClassesByTeacher: () => ClassData[];
  createClass: (className: string) => Promise<boolean>;
  addStudentToClass: (studentName: string, classId: string, password: string) => Promise<boolean>;
  getStudentsByClass: (classId: string) => User[];
  assignExercise: (classId: string, assignment: Omit<Assignment, 'id' | 'createdAt'>) => Promise<boolean>;
  getAssignmentsForStudent: () => Assignment[];
  getAssignmentsByClass: (classId: string) => Assignment[];
  recordAssignmentAttempt: (assignmentId: string, completed: number, correct: number, totalQuestions: number) => void;
  getAssignmentAttempts: (assignmentId: string) => AssignmentAttempt[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_STORAGE_KEY = 'quiz_app_user';
const USERS_STORAGE_KEY = 'quiz_app_users';
const CLASSES_STORAGE_KEY = 'quiz_app_classes';

const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (!storedUsers) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify({}));
    }
    
    const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
    if (!storedClasses) {
      localStorage.setItem(CLASSES_STORAGE_KEY, JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    createDemoAccounts();
  }, []);

  const createDemoAccounts = async () => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : {};
    
    if (users['teacher@demo.com']) {
      return;
    }
    
    try {
      const hashedPassword = await hashPassword('password');
      const teacherId = `user_${Date.now()}`;
      
      const teacherUser: User = {
        id: teacherId,
        name: 'Demo Teacher',
        email: 'teacher@demo.com',
        userType: 'teacher',
        progress: {
          maths: { completed: 0, correct: 0, lastAttempted: new Date().toISOString().split('T')[0] },
          english: { completed: 0, correct: 0, lastAttempted: new Date().toISOString().split('T')[0] },
          verbal: { completed: 0, correct: 0, lastAttempted: new Date().toISOString().split('T')[0] },
          nonVerbal: { completed: 0, correct: 0, lastAttempted: new Date().toISOString().split('T')[0] }
        }
      };
      
      users['teacher@demo.com'] = {
        name: 'Demo Teacher',
        password: hashedPassword,
        userData: teacherUser
      };
      
      const classId = `class_${Date.now()}`;
      const classData: ClassData = {
        id: classId,
        name: 'Demo Class',
        teacherId,
        students: [],
        assignments: [
          {
            id: `assign_${Date.now()}`,
            subject: 'maths',
            title: 'Math Practice 1',
            description: 'Complete basic arithmetic exercises',
            createdAt: new Date().toISOString()
          }
        ]
      };
      
      const studentIds: string[] = [];
      for (let i = 1; i <= 30; i++) {
        const studentName = `Student${i}`;
        const studentId = `user_student${i}_${Date.now() + i}`;
        studentIds.push(studentId);
        
        const studentUser: User = {
          id: studentId,
          name: studentName,
          email: null,
          userType: 'student',
          classId,
          progress: {
            maths: { 
              completed: Math.floor(Math.random() * 20),
              correct: Math.floor(Math.random() * 15), 
              lastAttempted: new Date().toISOString().split('T')[0] 
            },
            english: { 
              completed: Math.floor(Math.random() * 20),
              correct: Math.floor(Math.random() * 15), 
              lastAttempted: new Date().toISOString().split('T')[0] 
            },
            verbal: { 
              completed: Math.floor(Math.random() * 20),
              correct: Math.floor(Math.random() * 15), 
              lastAttempted: new Date().toISOString().split('T')[0] 
            },
            nonVerbal: { 
              completed: Math.floor(Math.random() * 20),
              correct: Math.floor(Math.random() * 15), 
              lastAttempted: new Date().toISOString().split('T')[0] 
            }
          }
        };
        
        users[studentName] = {
          name: studentName,
          password: hashedPassword,
          userData: studentUser
        };
      }
      
      classData.students = studentIds;
      
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      localStorage.setItem(CLASSES_STORAGE_KEY, JSON.stringify([classData]));
    } catch (error) {
      console.error("Error creating demo accounts:", error);
    }
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    const { name, email, password, userType, classId } = data;

    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : {};

    const userKey = email || name;
    if (users[userKey]) {
      toast.error(email ? "Email already registered" : "Username already taken");
      return false;
    }

    try {
      const hashedPassword = await hashPassword(password);

      const newUser: User = {
        id: `user_${Date.now()}`,
        name,
        email: email || null,
        userType,
        classId,
        progress: {
          maths: {
            completed: 0,
            correct: 0,
            lastAttempted: new Date().toISOString().split('T')[0]
          },
          english: {
            completed: 0,
            correct: 0,
            lastAttempted: new Date().toISOString().split('T')[0]
          },
          verbal: {
            completed: 0,
            correct: 0,
            lastAttempted: new Date().toISOString().split('T')[0]
          },
          nonVerbal: {
            completed: 0,
            correct: 0,
            lastAttempted: new Date().toISOString().split('T')[0]
          }
        }
      };

      users[userKey] = {
        name,
        password: hashedPassword,
        userData: newUser
      };

      if (userType === 'student' && classId) {
        const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
        const classes = storedClasses ? JSON.parse(storedClasses) : [];
        
        const classIndex = classes.findIndex((c: ClassData) => c.id === classId);
        if (classIndex !== -1) {
          classes[classIndex].students.push(newUser.id);
          localStorage.setItem(CLASSES_STORAGE_KEY, JSON.stringify(classes));
        }
      }

      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      
      toast.success("Registration successful");
      return true;
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed");
      return false;
    }
  };

  const login = async (nameOrEmail: string, password: string): Promise<boolean> => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : {};

    if (users[nameOrEmail]) {
      try {
        const hashedPassword = await hashPassword(password);
        
        if (users[nameOrEmail].password === hashedPassword) {
          const userData = users[nameOrEmail].userData;
          setUser(userData);
          localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
          toast.success("Logged in successfully");
          return true;
        } else {
          toast.error("Invalid credentials");
          return false;
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Login failed");
        return false;
      }
    } else {
      toast.error("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    toast.info("Logged out successfully");
  };

  const updateProgress = (subject: string, completed: number, correct: number) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      progress: {
        ...user.progress,
        [subject]: {
          completed,
          correct,
          lastAttempted: new Date().toISOString().split('T')[0]
        }
      }
    };

    setUser(updatedUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));

    const userKey = user.email || user.name;
    if (userKey) {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        if (users[userKey]) {
          users[userKey].userData = updatedUser;
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
        }
      }
    }
  };

  const resetProgress = () => {
    if (!user) return;

    const resetSubjects = {
      maths: {
        completed: 0,
        correct: 0,
        lastAttempted: new Date().toISOString().split('T')[0]
      },
      english: {
        completed: 0,
        correct: 0,
        lastAttempted: new Date().toISOString().split('T')[0]
      },
      verbal: {
        completed: 0,
        correct: 0,
        lastAttempted: new Date().toISOString().split('T')[0]
      },
      nonVerbal: {
        completed: 0,
        correct: 0,
        lastAttempted: new Date().toISOString().split('T')[0]
      }
    };

    const updatedUser = {
      ...user,
      progress: resetSubjects
    };

    setUser(updatedUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));

    const userKey = user.email || user.name;
    if (userKey) {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        if (users[userKey]) {
          users[userKey].userData = updatedUser;
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
        }
      }
    }

    toast.success("Progress reset successfully");
  };

  const resetSubjectProgress = (subject: string) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      progress: {
        ...user.progress,
        [subject]: {
          completed: 0,
          correct: 0,
          lastAttempted: new Date().toISOString().split('T')[0]
        }
      }
    };

    setUser(updatedUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));

    const userKey = user.email || user.name;
    if (userKey) {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        if (users[userKey]) {
          users[userKey].userData = updatedUser;
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
        }
      }
    }

    toast.success(`${subject} progress reset successfully`);
  };

  const getStudentsByTeacher = (): User[] => {
    if (!user || user.userType !== 'teacher') return [];
    
    const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
    if (!storedClasses) return [];
    
    const classes = JSON.parse(storedClasses);
    const teacherClasses = classes.filter((c: ClassData) => c.teacherId === user.id);
    
    const studentIds = teacherClasses.flatMap((c: ClassData) => c.students);
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (!storedUsers) return [];
    
    const users = JSON.parse(storedUsers);
    const students: User[] = [];
    
    Object.values(users).forEach((userData: any) => {
      if (studentIds.includes(userData.userData.id)) {
        students.push(userData.userData);
      }
    });
    
    return students;
  };
  
  const getClassesByTeacher = (): ClassData[] => {
    if (!user || user.userType !== 'teacher') return [];
    
    const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
    if (!storedClasses) return [];
    
    const classes = JSON.parse(storedClasses);
    return classes.filter((c: ClassData) => c.teacherId === user.id);
  };
  
  const createClass = async (className: string): Promise<boolean> => {
    if (!user || user.userType !== 'teacher') return false;
    
    try {
      const newClass: ClassData = {
        id: `class_${Date.now()}`,
        name: className,
        teacherId: user.id,
        students: [],
        assignments: []
      };
      
      const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
      const classes = storedClasses ? JSON.parse(storedClasses) : [];
      
      classes.push(newClass);
      localStorage.setItem(CLASSES_STORAGE_KEY, JSON.stringify(classes));
      
      toast.success("Class created successfully");
      return true;
    } catch (error) {
      console.error("Error creating class:", error);
      toast.error("Failed to create class");
      return false;
    }
  };
  
  const addStudentToClass = async (studentName: string, classId: string, password: string): Promise<boolean> => {
    if (!user || user.userType !== 'teacher') return false;
    
    try {
      const hashedPassword = await hashPassword(password);
      
      const studentId = `user_${Date.now()}`;
      const studentUser: User = {
        id: studentId,
        name: studentName,
        email: null,
        userType: 'student',
        classId,
        progress: {
          maths: { completed: 0, correct: 0, lastAttempted: new Date().toISOString().split('T')[0] },
          english: { completed: 0, correct: 0, lastAttempted: new Date().toISOString().split('T')[0] },
          verbal: { completed: 0, correct: 0, lastAttempted: new Date().toISOString().split('T')[0] },
          nonVerbal: { completed: 0, correct: 0, lastAttempted: new Date().toISOString().split('T')[0] }
        }
      };
      
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      const users = storedUsers ? JSON.parse(storedUsers) : {};
      
      if (users[studentName]) {
        toast.error("Student name already exists");
        return false;
      }
      
      users[studentName] = {
        name: studentName,
        password: hashedPassword,
        userData: studentUser
      };
      
      const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
      if (!storedClasses) return false;
      
      const classes = JSON.parse(storedClasses);
      const classIndex = classes.findIndex((c: ClassData) => c.id === classId);
      
      if (classIndex === -1) {
        toast.error("Class not found");
        return false;
      }
      
      classes[classIndex].students.push(studentId);
      
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      localStorage.setItem(CLASSES_STORAGE_KEY, JSON.stringify(classes));
      
      toast.success(`Student ${studentName} added successfully`);
      return true;
    } catch (error) {
      console.error("Error adding student:", error);
      toast.error("Failed to add student");
      return false;
    }
  };
  
  const getStudentsByClass = (classId: string): User[] => {
    if (!user || user.userType !== 'teacher') return [];
    
    const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
    if (!storedClasses) return [];
    
    const classes = JSON.parse(storedClasses);
    const targetClass = classes.find((c: ClassData) => c.id === classId);
    
    if (!targetClass) return [];
    
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (!storedUsers) return [];
    
    const users = JSON.parse(storedUsers);
    const students: User[] = [];
    
    Object.values(users).forEach((userData: any) => {
      if (targetClass.students.includes(userData.userData.id)) {
        students.push(userData.userData);
      }
    });
    
    return students;
  };
  
  const assignExercise = async (classId: string, assignment: Omit<Assignment, 'id' | 'createdAt'>): Promise<boolean> => {
    if (!user || user.userType !== 'teacher') return false;
    
    try {
      const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
      if (!storedClasses) return false;
      
      const classes = JSON.parse(storedClasses);
      const classIndex = classes.findIndex((c: ClassData) => c.id === classId);
      
      if (classIndex === -1) {
        toast.error("Class not found");
        return false;
      }
      
      const newAssignment: Assignment = {
        ...assignment,
        id: `assign_${Date.now()}`,
        createdAt: new Date().toISOString()
      };
      
      classes[classIndex].assignments.push(newAssignment);
      localStorage.setItem(CLASSES_STORAGE_KEY, JSON.stringify(classes));
      
      toast.success("Assignment created successfully");
      return true;
    } catch (error) {
      console.error("Error creating assignment:", error);
      toast.error("Failed to create assignment");
      return false;
    }
  };
  
  const getAssignmentsForStudent = (): Assignment[] => {
    if (!user || user.userType !== 'student' || !user.classId) return [];
    
    const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
    if (!storedClasses) return [];
    
    const classes = JSON.parse(storedClasses);
    const studentClass = classes.find((c: ClassData) => c.id === user.classId);
    
    if (!studentClass) return [];
    
    return studentClass.assignments;
  };
  
  const getAssignmentsByClass = (classId: string): Assignment[] => {
    const storedClasses = localStorage.getItem(CLASSES_STORAGE_KEY);
    if (!storedClasses) return [];
    
    const classes = JSON.parse(storedClasses);
    const targetClass = classes.find((c: ClassData) => c.id === classId);
    
    if (!targetClass) return [];
    
    return targetClass.assignments;
  };

  const recordAssignmentAttempt = (assignmentId: string, completed: number, correct: number, totalQuestions: number) => {
    if (!user || user.userType !== 'student') return;

    const attempt: AssignmentAttempt = {
      id: `attempt_${Date.now()}`,
      studentId: user.id,
      studentName: user.name,
      assignmentId,
      completed,
      correct,
      date: new Date().toISOString(),
      totalQuestions
    };

    const updatedUser = {
      ...user,
      assignmentAttempts: [...(user.assignmentAttempts || []), attempt]
    };

    setUser(updatedUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));

    const userKey = user.email || user.name;
    if (userKey) {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        if (users[userKey]) {
          users[userKey].userData = updatedUser;
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
        }
      }
    }

    toast.success("Assignment progress recorded");
  };

  const getAssignmentAttempts = (assignmentId: string): AssignmentAttempt[] => {
    if (!user || user.userType !== 'teacher') {
      return [];
    }

    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (!storedUsers) return [];
    
    const users = JSON.parse(storedUsers);
    const attempts: AssignmentAttempt[] = [];
    
    Object.values(users).forEach((userData: any) => {
      const userAttempts = userData.userData.assignmentAttempts || [];
      const matchingAttempts = userAttempts.filter(
        (attempt: AssignmentAttempt) => attempt.assignmentId === assignmentId
      );
      attempts.push(...matchingAttempts);
    });
    
    return attempts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      userType: user?.userType || null,
      login,
      logout,
      register,
      updateProgress,
      resetProgress,
      resetSubjectProgress,
      getStudentsByTeacher,
      getClassesByTeacher,
      createClass,
      addStudentToClass,
      getStudentsByClass,
      assignExercise,
      getAssignmentsForStudent,
      getAssignmentsByClass,
      recordAssignmentAttempt,
      getAssignmentAttempts
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
