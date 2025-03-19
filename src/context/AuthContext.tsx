
import React, { createContext, useContext, useState, ReactNode } from 'react';
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

// Demo user data
const demoUser = {
  id: '1',
  name: 'Wilmot',
  email: 'wilmot@example.com',
  progress: {
    maths: {
      completed: 5,
      correct: 3,
      lastAttempted: '2023-06-15'
    },
    english: {
      completed: 7,
      correct: 5, 
      lastAttempted: '2023-06-20'
    }
  }
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProgress: (subject: string, completed: number, correct: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // For demo purposes, just check against hardcoded credentials
    if (email === 'wilmot@example.com' && password === 'Password') {
      setUser(demoUser);
      toast.success("Logged in successfully");
      return true;
    } else {
      toast.error("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    toast.info("Logged out successfully");
  };

  const updateProgress = (subject: string, completed: number, correct: number) => {
    if (!user) return;

    setUser(prevUser => {
      if (!prevUser) return null;

      return {
        ...prevUser,
        progress: {
          ...prevUser.progress,
          [subject]: {
            completed,
            correct,
            lastAttempted: new Date().toISOString().split('T')[0]
          }
        }
      };
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
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
