
import React, { useState } from 'react';
import { ChevronRight, BarChart2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { TimesTableProgress } from '@/types/userTypes';
import { useProfile } from '@/context/ProfileContext';
import { useStudent } from '@/context/StudentContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { useProgressActions } from '@/hooks/useProgressActions';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

// Add this helper function here since we removed it from progressUtils.ts
const getDefaultTimesTablesProgress = (): TimesTableProgress[] => {
  return Array.from({ length: 12 }, (_, i) => ({
    table: i + 1,
    attempts: 0,
    correct: 0,
    recentAttempts: [],
    _type: "TimesTableProgress"
  }));
};

const generateDemoData = (): TimesTableProgress[] => {
  return Array.from({ length: 12 }, (_, i) => {
    const table = i + 1;
    const attempts = Math.floor(Math.random() * 50) + 10; // Between 10-60 attempts
    const correct = Math.floor(Math.random() * attempts); // Random number of correct answers
    
    const recentAttempts = Array.from({ length: 10 }, () => ({
      correct: Math.random() > 0.3, // 70% chance of being correct
      timestamp: new Date(Date.now() - Math.random() * 604800000).toISOString() // Within last week
    }));
    
    return {
      table,
      attempts,
      correct,
      recentAttempts
    };
  });
};

const TimesTablesProgress: React.FC = () => {
  const navigate = useNavigate();
  const { profile, updateProfile, isLoading } = useProfile();
  const { selectedStudentId, selectedStudent, studentProgress } = useStudent();
  const { resetSubjectProgress } = useProgressActions(profile, updateProfile);
  const [demoMode, setDemoMode] = useState(false);
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  
  console.log("TimesTablesProgress rendering with profile data:", profile);
  console.log("TimesTablesProgress rendering with student data:", selectedStudent, studentProgress);
  console.log("Profile loading state:", isLoading);
  
  // Get the appropriate times tables progress based on whether a student is selected
  const getTimesTablesProgress = (): TimesTableProgress[] => {
    if (selectedStudentId && studentProgress?.timesTables) {
      console.log("Using student times tables progress:", studentProgress.timesTables.times_tables_progress);
      return studentProgress.timesTables.times_tables_progress || getDefaultTimesTablesProgress();
    }
    console.log("Using tutor times tables progress:", profile?.timesTablesProgress);
    return profile?.timesTablesProgress || getDefaultTimesTablesProgress();
  };
  
  const timesTablesProgress = getTimesTablesProgress();
  
  console.log("Using times tables progress:", timesTablesProgress);

  const loadDemoData = async () => {
    if (selectedStudentId) {
      toast.error("Cannot load demo data for student accounts");
      return;
    }

    if (!profile) {
      toast.error("Please log in to load demo data");
      return;
    }
    
    setIsLoadingDemo(true);
    try {
      const demoData = generateDemoData();
      
      console.log("Loading demo data:", demoData);
      
      const jsonCompatibleData = demoData.map(item => ({
        table: item.table,
        attempts: item.attempts,
        correct: item.correct,
        recentAttempts: item.recentAttempts.map(attempt => ({
          correct: attempt.correct,
          timestamp: attempt.timestamp
        })),
        _type: "TimesTableProgress"
      }));
      
      const { error } = await supabase
        .from('profiles')
        .update({
          timesTablesProgress: jsonCompatibleData
        })
        .eq('id', profile.id);
        
      if (error) {
        console.error("Error saving demo data:", error);
        toast.error(`Failed to load demo data: ${error.message}`);
        setIsLoadingDemo(false);
        return;
      }
      
      if (updateProfile) {
        await updateProfile({ timesTablesProgress: demoData });
      } else {
        console.error("updateProfile function is not available");
        toast.error("Could not update local state with demo data");
      }
      
      setDemoMode(true);
      toast.success("Demo data loaded successfully");
    } catch (error) {
      console.error("Error loading demo data:", error);
      toast.error("Failed to load demo data");
    } finally {
      setIsLoadingDemo(false);
    }
  };

  const clearTimesTablesProgress = () => {
    if (selectedStudentId) {
      toast.error("Cannot clear progress for student accounts from this interface");
      return;
    }

    if (!profile) {
      toast.error("Please log in to reset progress");
      return;
    }
    
    resetSubjectProgress('timesTables');
  };

  const progressData = timesTablesProgress.map(table => {
    const totalAccuracy = table.attempts > 0 ? Math.round((table.correct / table.attempts) * 100) : 0;
    
    const recentAttempts = table.recentAttempts || [];
    const recentTotal = recentAttempts.length;
    const recentCorrect = recentAttempts.filter(attempt => attempt.correct).length;
    const recentAccuracy = recentTotal > 0 ? Math.round((recentCorrect / recentTotal) * 100) : 0;
    
    return {
      table: table.table,
      totalAccuracy,
      recentAccuracy,
      attempts: table.attempts,
      recentAttempts: recentTotal
    };
  });

  const hasAnyAttempts = progressData.some(data => data.attempts > 0);
  
  console.log("Has any attempts:", hasAnyAttempts);
  console.log("Progress data processed:", progressData);

  if (isLoading) {
    return <div className="mt-6 p-4 text-center">Loading times tables progress...</div>;
  }

  const getPageTitle = () => {
    if (selectedStudent) {
      return `${selectedStudent.name}'s Times Tables Progress`;
    }
    return "Times Tables Progress";
  };

  const getPageDescription = () => {
    if (selectedStudent) {
      return `Track ${selectedStudent.name}'s times tables performance`;
    }
    return "Track your times tables performance";
  };

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
        <div>
          <h2 className="text-2xl font-display font-bold">{getPageTitle()}</h2>
          <p className="text-sm text-muted-foreground">{getPageDescription()}</p>
        </div>
        <div className="flex gap-2">
          {!hasAnyAttempts && !selectedStudentId && (
            <Button 
              onClick={loadDemoData}
              variant="outline"
              className="flex items-center gap-1.5"
              disabled={isLoadingDemo}
            >
              <BarChart2 className="h-4 w-4" />
              {isLoadingDemo ? "Loading..." : "Load Demo Data"}
            </Button>
          )}
          
          {hasAnyAttempts && !selectedStudentId && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-1.5 text-destructive hover:text-destructive hover:bg-destructive/10"
                  disabled={isLoading}
                >
                  <Trash2 className="h-4 w-4" />
                  Clear Progress
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear times tables progress?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will reset all your times tables progress. All completed questions and statistics will be erased.
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={clearTimesTablesProgress}>
                    Clear Progress
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          
          <Button 
            onClick={() => navigate('/quiz', { state: { subject: 'timesTables' } })}
            variant="default"
            className="flex items-center gap-1.5"
          >
            <ChevronRight className="h-4 w-4" />
            Practice Now
          </Button>
        </div>
      </div>

      {hasAnyAttempts ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {progressData.map((data) => (
            <Card key={`table-${data.table}`} className={data.attempts === 0 ? "opacity-60" : ""}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{data.table}× Times Table</CardTitle>
                <CardDescription>
                  {data.attempts === 0 
                    ? "No attempts yet" 
                    : `${data.attempts} questions attempted`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Accuracy</span>
                      <span className="font-medium">{data.totalAccuracy}%</span>
                    </div>
                    <Progress value={data.totalAccuracy} className="h-2" />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Recent Accuracy</span>
                      <span className="font-medium">
                        {data.recentAttempts > 0 ? `${data.recentAccuracy}%` : "N/A"}
                      </span>
                    </div>
                    <Progress 
                      value={data.recentAttempts > 0 ? data.recentAccuracy : 0} 
                      className={`h-2 ${data.recentAttempts === 0 ? "bg-muted" : ""}`} 
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div className="border rounded-lg p-3">
                      <div className="text-2xl font-bold">{data.attempts}</div>
                      <div className="text-xs text-muted-foreground">Total Questions</div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="text-2xl font-bold">{Math.round(data.totalAccuracy / 100 * data.attempts)}</div>
                      <div className="text-xs text-muted-foreground">Correct Answers</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Alert className="bg-muted/50">
          <AlertDescription>
            {selectedStudent 
              ? `${selectedStudent.name} hasn't practiced any times tables yet. Start a practice session to track their progress!`
              : (demoMode ? "Loading demo data..." : "You haven't practiced any times tables yet. Start a practice session to track your progress!")
            }
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default TimesTablesProgress;
