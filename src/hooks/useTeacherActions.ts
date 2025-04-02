
import { useClassManagement } from './useClassManagement';
import { Profile } from '@/types/userTypes';

export const useTeacherActions = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  // Use the class management hook
  const classManagement = useClassManagement(user, setUser);

  return {
    ...classManagement
  };
};
