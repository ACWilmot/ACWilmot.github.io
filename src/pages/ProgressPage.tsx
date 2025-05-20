
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProfile } from '@/context/ProfileContext';
import { useProgressActions } from '@/hooks/useProgressActions';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart2, RefreshCcw } from 'lucide-react';
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
  console.log("Profile loading state:", profileLoading);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("User not authenticated, redirecting to login");
      navigate('/login');
      return;
    }

    // Ensure profile loading is complete
    if (!profileLoading) {
      setLoading(false);
      if (!profile) {
        setError("Failed to load user profile data. Please try logging in again.");
      } else {
        setError(null);
        
        // Calculate year progress stats for each subject
        // This is mocked data since we don't have actual year data stored
        const subjects = Object.keys(profile.progress).filter(subject => subject !== 'timesTables');
        const mockYearProgress: Record<string, YearProgressData> = {};
        
        subjects.forEach(subject => {
          const subjectData = profile.progress[subject];
          if (!subjectData) return;
          
          const total = subjectData.completed || 0;
          const totalCorrect = subjectData.correct || 0;
          
          // Create mock progress data for each year
          mockYearProgress[subject] = {
            "all": {
              easy: {
                completed: Math.floor(total * 0.4), // 40% of questions are easy
                correct: Math.floor(totalCorrect * 0.45), // slightly better performance on easy questions
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.4), // 40% of questions are medium
                correct: Math.floor(totalCorrect * 0.4), // average performance on medium questions
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.2), // 20% of questions are hard
                correct: Math.floor(totalCorrect * 0.15), // worse performance on hard questions
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
                completed: Math.floor(total * 0.25 * 0.5), // 25% of questions from year 3, 50% are easy
                correct: Math.floor(totalCorrect * 0.25 * 0.6), // 60% accuracy on year 3 easy
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.25 * 0.4), // 25% of questions from year 3, 40% are medium
                correct: Math.floor(totalCorrect * 0.25 * 0.5), // 50% accuracy on year 3 medium
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.25 * 0.1), // 25% of questions from year 3, 10% are hard
                correct: Math.floor(totalCorrect * 0.25 * 0.3), // 30% accuracy on year 3 hard
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
                completed: Math.floor(total * 0.3 * 0.4), // 30% of questions from year 4, 40% are easy
                correct: Math.floor(totalCorrect * 0.3 * 0.5), // 50% accuracy on year 4 easy
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.3 * 0.4), // 30% of questions from year 4, 40% are medium
                correct: Math.floor(totalCorrect * 0.3 * 0.4), // 40% accuracy on year 4 medium
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.3 * 0.2), // 30% of questions from year 4, 20% are hard
                correct: Math.floor(totalCorrect * 0.3 * 0.3), // 30% accuracy on year 4 hard
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
                completed: Math.floor(total * 0.25 * 0.3), // 25% of questions from year 5, 30% are easy
                correct: Math.floor(totalCorrect * 0.25 * 0.45), // 45% accuracy on year 5 easy
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.25 * 0.5), // 25% of questions from year 5, 50% are medium
                correct: Math.floor(totalCorrect * 0.25 * 0.4), // 40% accuracy on year 5 medium
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.25 * 0.2), // 25% of questions from year 5, 20% are hard
                correct: Math.floor(totalCorrect * 0.25 * 0.2), // 20% accuracy on year 5 hard
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
                completed: Math.floor(total * 0.2 * 0.2), // 20% of questions from year 6, 20% are easy
                correct: Math.floor(totalCorrect * 0.2 * 0.4), // 40% accuracy on year 6 easy
                accuracy: 0
              },
              medium: {
                completed: Math.floor(total * 0.2 * 0.5), // 20% of questions from year 6, 50% are medium
                correct: Math.floor(totalCorrect * 0.2 * 0.35), // 35% accuracy on year 6 medium
                accuracy: 0
              },
              hard: {
                completed: Math.floor(total * 0.2 * 0.3), // 20% of questions from year 6, 30% are hard
                correct: Math.floor(totalCorrect * 0.2 * 0.25), // 25% accuracy on year 6 hard
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
  }, [isAuthenticated, navigate, profile, profileLoading]);

  if (loading || profileLoading) {
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
  const subjects = Object.keys(profile.progress).filter(subject => subject !== 'timesTables');

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
              My Progress
            </h1>
            <p className="text-muted-foreground">
              Track your cumulative performance across different subjects
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="subjects" className="flex-1">Main Subjects</TabsTrigger>
            <TabsTrigger value="timesTables" className="flex-1">Times Tables</TabsTrigger>
          </TabsList>
          
          <TabsContent value="subjects" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {subjects.map(subject => {
                const subjectData = profile.progress[subject];
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
      </main>
    </div>
  );
};

export default ProgressPage;
