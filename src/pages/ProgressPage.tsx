import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProfile } from '@/context/ProfileContext';
import { useProgressActions } from '@/hooks/useProgressActions';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart2, RefreshCcw } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, 
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimesTablesProgress from '@/components/TimesTablesProgress';

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
                
                const accuracy = subjectData.completed > 0 
                  ? Math.round((subjectData.correct / subjectData.completed) * 100) 
                  : 0;
                  
                return (
                  <Card key={subject} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="capitalize">{subject}</CardTitle>
                      <CardDescription>
                        Last attempted: {subjectData.lastAttempted || 'Never'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Accuracy</span>
                          <span>{accuracy}%</span>
                        </div>
                        <Progress value={accuracy} className="h-2" />
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                        <div className="border rounded-lg p-3">
                          <div className="text-2xl font-bold">{subjectData.completed}</div>
                          <div className="text-xs text-muted-foreground">Total Questions</div>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="text-2xl font-bold">{subjectData.correct}</div>
                          <div className="text-xs text-muted-foreground">Correct Answers</div>
                        </div>
                      </div>

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
