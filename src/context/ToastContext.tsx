
import React, { createContext, useContext } from 'react';
import { toast, Toaster } from 'sonner';

interface ToastContextType {
  toast: typeof toast;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ToastContext.Provider value={{ toast }}>
      <Toaster position="top-right" richColors />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    return { toast }; // Fallback to just returning toast
  }
  return context;
};
