
import { useStudentManagement } from './useStudentManagement';
import { Profile } from '@/types/userTypes';

export const useTeacherActions = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  // Use the new student management hook
  const studentManagement = useStudentManagement(user, setUser);

  return {
    ...studentManagement
  };
};
