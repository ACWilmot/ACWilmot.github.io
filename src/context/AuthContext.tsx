
  // New function to create a demo class with 30 students
  const createDemoClass = async () => {
    try {
      // Create a new demo class
      const demoClassId = uuidv4();
      const demoClass: ClassData = {
        id: demoClassId,
        teacherId: user?.id || 'demo-teacher',
        name: 'Demo Class',
        students: [],
        assignments: [],
      };
      
      // Create 30 students and add them to the class
      const newStudents: StudentData[] = [];
      const studentIds: string[] = [];
      
      for (let i = 1; i <= 30; i++) {
        const studentId = uuidv4();
        studentIds.push(studentId);
        
        const newStudent: StudentData = {
          id: studentId,
          name: `Student${i}`,
          classId: demoClassId,
          progress: {
            maths: { correct: 0, completed: 0 },
            english: { correct: 0, completed: 0 },
            verbal: { correct: 0, completed: 0 },
            nonVerbal: { correct: 0, completed: 0 },
          },
        };
        newStudents.push(newStudent);
      }
      
      // Update the class with all student IDs
      demoClass.students = studentIds;
      
      // Update state
      setClasses(prevClasses => [...prevClasses, demoClass]);
      setStudents(prevStudents => [...prevStudents, ...newStudents]);
      
      // Update localStorage
      localStorage.setItem('classes', JSON.stringify([...classes, demoClass]));
      localStorage.setItem('students', JSON.stringify([...students, ...newStudents]));
      
      toast({
        title: "Success",
        description: "Demo class with 30 students created successfully",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create demo class",
      });
      return false;
    }
  };
