
import { useClassManagement } from './useClassManagement';
import { Profile } from '@/types/userTypes';
import { useStudentManagement } from './useStudentManagement';

export const useTeacherActions = (user: Profile | null, setUser: (user: Profile | null) => void) => {
  // Use the class management hook
  const classManagement = useClassManagement();
  
  // Use the student management hook for general student operations
  const studentManagement = useStudentManagement(user, setUser);

  return {
    // Class management actions
    classes: classManagement.classes,
    loading: classManagement.loading,
    insertClasses: classManagement.insertClasses,
    deleteClass: classManagement.deleteClass,
    
    // Student management actions
    getStudents: studentManagement.getStudents,
    getStudentClass: studentManagement.getStudentClass
  };
};
