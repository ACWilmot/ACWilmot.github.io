
interface TimesTableProgress {
  table: number;
  attempts: number;
  correct: number;
  recentAttempts: Array<{
    correct: boolean;
    timestamp: string;
  }>;
  averageTime: number;
  _type: "TimesTableProgress";
}

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
  },
  timesTables: {
    completed: 0,
    correct: 0,
    lastAttempted: null
  },
  history: {
    completed: 0,
    correct: 0,
    lastAttempted: null
  },
  geography: {
    completed: 0,
    correct: 0,
    lastAttempted: null
  },
  religiousEd: {
    completed: 0,
    correct: 0,
    lastAttempted: null
  }
};

// Helper function to get a fresh copy of the reset subjects
export const getResetSubjects = () => {
  return JSON.parse(JSON.stringify(resetSubjects));
};

// Helper to generate default times tables progress array
export function getDefaultTimesTablesProgress(): TimesTableProgress[] {
  return Array.from({ length: 12 }, (_, i) => ({
    table: i + 1,
    attempts: 0,
    correct: 0,
    recentAttempts: [],
    averageTime: 0,
    _type: "TimesTableProgress"
  }));
}
