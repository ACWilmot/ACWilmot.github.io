
export const resetSubjects = {
  maths: {
    completed: 0,
    correct: 0,
    lastAttempted: null
  },
  english: {
    completed: 0,
    correct: 0,
    lastAttempted: null
  },
  verbal: {
    completed: 0,
    correct: 0,
    lastAttempted: null
  }
};

// Helper function to get a fresh copy of the reset subjects
export const getResetSubjects = () => {
  return JSON.parse(JSON.stringify(resetSubjects));
};
