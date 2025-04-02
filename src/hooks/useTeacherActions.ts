
import { useClassManagement } from './useClassManagement';
import { Profile } from '@/types/userTypes';
import { useStudentManagement } from './useStudentManagement';

export const useTeacherActions = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  // Use the class management hook
  const classManagement = useClassManagement(user, setUser);
  
  // Use the student management hook for any additional student-related actions not tied to classes
  const studentManagement = useStudentManagement(user, setUser);

  return {
    ...classManagement,
    ...studentManagement
  };
};
