
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProfile } from '@/context/ProfileContext';
import { useSubscription } from '@/context/SubscriptionContext';
import { useStudent } from '@/context/StudentContext';
import { useProgressActions } from '@/hooks/useProgressActions';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart2, RefreshCcw, Lock } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, 
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimesTablesProgress from '@/components/TimesTablesProgress';
import SubjectYearProgress from '@/components/SubjectYearProgress';

interface DifficultyProgress {
  easy: { completed: number; correct: number; accuracy: number };
  medium: { completed: number; correct: number; accuracy: number };
  hard: { completed: number; correct: number; accuracy: number };
  all: { completed: number; correct: number; accuracy: number };
}

interface YearProgressData {
  all: DifficultyProgress;
  "3": DifficultyProgress;
  "4": DifficultyProgress;
  "5": DifficultyProgress;
  "6": DifficultyProgress;
}

const ProgressPage = () => {
  const { isAuthenticated, user } = useAuth();
  const { profile, isLoading: profileLoading } = useProfile();
  const { isSubscribed } = useSubscription();
  const { selectedStudentId, selectedStudent, studentProgress, isLoadingStudentProgress } = useStudent();
  const { resetSubjectProgress } = useProgressActions(profile, updateProfile => {
    if (profile && updateProfile) {
      return updateProfile;
    }
    return null;
  });
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("subjects");
  const [subjectYearProgress, setSubjectYearProgress] = useState<Record<string, YearProgressData>>({});

  console.log("ProgressPage rendering with auth status:", isAuthenticated);
  console.log("ProgressPage rendering with user:", user);
  console.log("ProgressPage rendering with profile:", profile);
  console.log("Selected student:", selectedStudent);
  console.log("Student progress:", studentProgress);

  // Get the appropriate progress data based on whether a student is selected
  const getProgressData = () => {
    if (selectedStudentId && studentProgress) {
      // Convert student progress to the format expected by the UI
      const convertedProgress: Record<string, any> = {};
      Object.keys(studentProgress).forEach(subject => {
        const subjectData = studentProgress[subject];
        convertedProgress[subject] = subjectData.progress;
      });
      return convertedProgress;
    }
    return profile?.progress || {};
  };

  const getTimesTablesProgress = () => {
    if (selectedStudentId && studentProgress?.timesTables) {
      return studentProgress.timesTables.times_tables_progress || [];
    }
    return profile?.timesTablesProgress || [];
  };

  const progressData = getProgressData();
  const timesTablesProgressData = getTimesTablesProgress();

  // Redirect if not authenticated or not subscribed
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("User not authenticated, redirecting to login");
      navigate('/login');
      return;
    }

    if (isAuthenticated && !isSubscribed) {
      console.log("User not subscribed, redirecting to profile");
      navigate('/profile?tab=subscription');
      return;
    }

    // Ensure profile loading is complete
    if (!profileLoading && !isLoadingStudentProgress) {
      setLoading(false);
      if (!profile) {
        setError("Failed to load user profile data. Please try logging in again.");
      } else {
        setError(null);
        
        // Calculate year progress stats for each subject
        const subjects = Object.keys(progressData).filter(subject => subject !== 'timesTables');
        const mockYearProgress: Record<string, YearProgressData> = {};
        
        subjects.forEach(subject => {
          const subjectData = progressData[subject];
          if (!subjectData) return;
          
          const total = subjectData.completed || 0;
          const totalCorrect = subjectData.correct || 0;
          
          // Create mock progress data for each year
          mockYearProgress[subject] = {
            "all": {
              easy: {
                completed: Math.floor(total * 0.4),
                correct: Math.floor(totalCorrect * 0.45),
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.4),
                correct: Math.floor(totalCorrect * 0.4),
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.2),
                correct: Math.floor(totalCorrect * 0.15),
                accuracy: 0
              },
              all: {
                completed: total,
                correct: totalCorrect,
                accuracy: 0
              }
            },
            "3": {
              easy: {
                completed: Math.floor(total * 0.25 * 0.5),
                correct: Math.floor(totalCorrect * 0.25 * 0.6),
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.25 * 0.4),
                correct: Math.floor(totalCorrect * 0.25 * 0.5),
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.25 * 0.1),
                correct: Math.floor(totalCorrect * 0.25 * 0.3),
                accuracy: 0
              },
              all: {
                completed: Math.floor(total * 0.25),
                correct: Math.floor(totalCorrect * 0.25),
                accuracy: 0
              }
            },
            "4": {
              easy: {
                completed: Math.floor(total * 0.3 * 0.4),
                correct: Math.floor(totalCorrect * 0.3 * 0.5),
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.3 * 0.4),
                correct: Math.floor(totalCorrect * 0.3 * 0.4),
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.3 * 0.2),
                correct: Math.floor(totalCorrect * 0.3 * 0.3),
                accuracy: 0
              },
              all: {
                completed: Math.floor(total * 0.3),
                correct: Math.floor(totalCorrect * 0.3),
                accuracy: 0
              }
            },
            "5": {
              easy: {
                completed: Math.floor(total * 0.25 * 0.3),
                correct: Math.floor(totalCorrect * 0.25 * 0.45),
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.25 * 0.5),
                correct: Math.floor(totalCorrect * 0.25 * 0.4),
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.25 * 0.2),
                correct: Math.floor(totalCorrect * 0.25 * 0.2),
                accuracy: 0
              },
              all: {
                completed: Math.floor(total * 0.25),
                correct: Math.floor(totalCorrect * 0.25),
                accuracy: 0
              }
            },
            "6": {
              easy: {
                completed: Math.floor(total * 0.2 * 0.2),
                correct: Math.floor(totalCorrect * 0.2 * 0.4),
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.2 * 0.5),
                correct: Math.floor(totalCorrect * 0.2 * 0.35),
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.2 * 0.3),
                correct: Math.floor(totalCorrect * 0.2 * 0.25),
                accuracy: 0
              },
              all: {
                completed: Math.floor(total * 0.2),
                correct: Math.floor(totalCorrect * 0.2),
                accuracy: 0
              }
            }
          };

          // Calculate accuracy for each year progress
          Object.keys(mockYearProgress[subject]).forEach(year => {
            Object.keys(mockYearProgress[subject][year as keyof YearProgressData]).forEach(difficulty => {
              const diffData = mockYearProgress[subject][year as keyof YearProgressData][difficulty as keyof DifficultyProgress];
              diffData.accuracy = diffData.completed > 0
                ? Math.round((diffData.correct / diffData.completed) * 100)
                : 0;
            });
          });
        });
        
        setSubjectYearProgress(mockYearProgress);
      }
    }
  }, [isAuthenticated, isSubscribed, navigate, profile, profileLoading, selectedStudentId, studentProgress, isLoadingStudentProgress, progressData]);

  if (loading || profileLoading || (selectedStudentId && isLoadingStudentProgress)) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 container px-4 pt-32 pb-16 max-w-5xl mx-auto">
          <div className="text-center">Loading progress data...</div>
        </main>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 container px-4 pt-32 pb-16 max-w-5xl mx-auto">
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error || "Failed to load profile data. Please try logging in again."}
            </AlertDescription>
          </Alert>
          <Button onClick={() => navigate('/login')}>Return to Login</Button>
        </main>
      </div>
    );
  }

  // Include all subjects except timesTables in the subjects array
  const subjects = Object.keys(progressData).filter(subject => subject !== 'timesTables');

  const getPageTitle = () => {
    if (selectedStudent) {
      return `${selectedStudent.name}'s Progress`;
    }
    return "My Progress";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 pt-32 pb-16 max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate('/')}
            className="h-9 w-9 rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <div>
            <h1 className="text-3xl font-display font-bold flex items-center gap-2">
              <BarChart2 className="h-6 w-6 text-primary" />
              {getPageTitle()}
            </h1>
            <p className="text-muted-foreground">
              {selectedStudent 
                ? `Track ${selectedStudent.name}'s performance across different subjects`
                : "Track your cumulative performance across different subjects"
              }
            </p>
          </div>
        </div>

        {!isSubscribed ? (
          <Card className="p-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-muted-foreground" />
            </div>
            <CardTitle className="mb-2">Premium Feature</CardTitle>
            <CardDescription className="mb-6">
              Progress tracking is only available with a premium subscription
            </CardDescription>
            <Button onClick={() => navigate('/profile?tab=subscription')}>
              Upgrade to Premium
            </Button>
          </Card>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="subjects" className="flex-1">Main Subjects</TabsTrigger>
              <TabsTrigger value="timesTables" className="flex-1">Times Tables</TabsTrigger>
            </TabsList>
            
            <TabsContent value="subjects" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {subjects.map(subject => {
                  const subjectData = progressData[subject];
                  if (!subjectData) {
                    console.error(`Missing data for subject: ${subject}`);
                    return null;
                  }
                    
                  return (
                    <Card key={subject} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="capitalize">{subject}</CardTitle>
                        <CardDescription>
                          Last attempted: {subjectData.lastAttempted || 'Never'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <SubjectYearProgress 
                          subject={subject} 
                          yearProgress={subjectYearProgress[subject]} 
                        />

                        <div className="mt-4 flex items-center gap-2">
                          <Button 
                            className="flex-1" 
                            onClick={() => navigate('/quiz', { state: { subject }})}
                            variant="outline"
                          >
                            Practice {subject}
                          </Button>
                          
                          {!selectedStudentId && (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                                  <RefreshCcw className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Reset {subject} progress?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will reset your cumulative progress for {subject}. All completed quizzes and statistics for this subject will be erased.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => resetSubjectProgress(subject)}>
                                    Reset
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="timesTables">
              <TimesTablesProgress />
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
};

export default ProgressPage;
