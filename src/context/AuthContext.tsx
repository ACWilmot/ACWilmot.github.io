
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
  progress: {
    [subject: string]: {
      completed: number;
      correct: number;
      lastAttempted: string;
    }
  }
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (data: RegisterData) => Promise<boolean>;
  updateProgress: (subject: string, completed: number, correct: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local storage keys
const USER_STORAGE_KEY = 'quiz_app_user';
const USERS_STORAGE_KEY = 'quiz_app_users';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Load user from localStorage on initial render
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

  // Initialize users in localStorage if not present
  useEffect(() => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (!storedUsers) {
      // Initialize with empty users object
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify({}));
    }
  }, []);

  const register = async (data: RegisterData): Promise<boolean> => {
    const { name, email, password } = data;

    // Get existing users
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : {};

    // Check if email already exists
    if (users[email]) {
      toast.error("Email already registered");
      return false;
    }

    // Create new user
    const newUser: User = {
      id: `user_${Date.now()}`,
      name,
      email,
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

    // Add to users
    users[email] = {
      name,
      password,
      userData: newUser
    };

    // Save to localStorage
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    toast.success("Registration successful");
    return true;
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Get users from localStorage
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : {};

    // Check if user exists and password matches
    if (users[email] && users[email].password === password) {
      const userData = users[email].userData;
      setUser(userData);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
      toast.success("Logged in successfully");
      return true;
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

    // Update user data in users list
    if (user.email) {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        if (users[user.email]) {
          users[user.email].userData = updatedUser;
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
        }
      }
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      register,
      updateProgress
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
