
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart2, RefreshCcw } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

const ProgressPage = () => {
  const { user, isAuthenticated, resetProgress } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null;
  }

  const subjects = Object.keys(user.progress);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 pt-32 pb-16 max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
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
                Track your performance across different subjects
              </p>
            </div>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Reset Progress
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will reset your progress for all subjects. All completed quizzes and statistics will be erased.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={resetProgress}>
                  Reset Progress
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {subjects.map(subject => {
            const subjectData = user.progress[subject];
            const accuracy = subjectData.completed > 0 
              ? Math.round((subjectData.correct / subjectData.completed) * 100) 
              : 0;
              
            return (
              <Card key={subject} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="capitalize">{subject}</CardTitle>
                  <CardDescription>
                    Last attempted: {subjectData.lastAttempted}
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
                      <div className="text-xs text-muted-foreground">Completed</div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="text-2xl font-bold">{subjectData.correct}</div>
                      <div className="text-xs text-muted-foreground">Correct</div>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-4" 
                    onClick={() => navigate('/quiz')}
                    variant="outline"
                  >
                    Practice {subject}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ProgressPage;
