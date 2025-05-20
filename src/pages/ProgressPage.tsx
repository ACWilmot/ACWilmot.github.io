import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProfile } from '@/context/ProfileContext';
import { Layout } from '@/components/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import TimesTablesProgress from '@/components/TimesTablesProgress';
import YearProgress from '@/components/YearProgress';
import { Subject } from '@/types/questionTypes';

const ProgressPage = () => {
  const { user, isAuthenticated } = useAuth();
  const { profile, isLoading } = useProfile();
  const [activeTab, setActiveTab] = useState<string>('overview');

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading || !profile) {
    return (
      <Layout>
        <div className="container mx-auto py-20 px-4">
          <div className="animate-pulse">
            <div className="h-14 bg-gray-200 rounded w-1/3 mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="h-2 bg-gray-200 rounded w-full mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Calculate total stats
  const totalCompleted = Object.values(profile.progress).reduce(
    (sum, subject) => sum + subject.completed,
    0
  );
  
  const totalCorrect = Object.values(profile.progress).reduce(
    (sum, subject) => sum + subject.correct,
    0
  );
  
  const accuracy = totalCompleted > 0 
    ? Math.round((totalCorrect / totalCompleted) * 100) 
    : 0;

  // Determine the subject with the most questions completed
  let bestSubject = '';
  let bestSubjectCount = 0;

  Object.entries(profile.progress).forEach(([subject, data]) => {
    if (data.completed > bestSubjectCount) {
      bestSubject = subject;
      bestSubjectCount = data.completed;
    }
  });

  const formatSubjectName = (subject: string): string => {
    switch (subject) {
      case 'maths': return 'Maths';
      case 'english': return 'English';
      case 'verbal': return 'Verbal Reasoning';
      case 'history': return 'History';
      case 'geography': return 'Geography';
      case 'religiousEd': return 'Religious Education';
      case 'timesTables': return 'Times Tables';
      default: return subject;
    }
  };

  // Include all subjects except timesTables in the subjects array
  const subjects = Object.keys(profile.progress).filter(subject => subject !== 'timesTables') as Subject[];

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">My Progress</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:w-[400px] mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{totalCompleted}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{accuracy}%</p>
                  <Progress value={accuracy} className="h-2 mt-2" />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Best Subject</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {bestSubjectCount > 0 ? formatSubjectName(bestSubject) : 'None yet'}
                  </p>
                  {bestSubjectCount > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {bestSubjectCount} questions completed
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map(subject => (
                <Card key={subject} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle>{formatSubjectName(subject)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Questions Completed</span>
                      <span className="font-medium">{profile.progress[subject].completed}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Correct Answers</span>
                      <span className="font-medium">{profile.progress[subject].correct}</span>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Accuracy</span>
                        <span className="text-sm font-medium">
                          {profile.progress[subject].completed > 0 
                            ? Math.round((profile.progress[subject].correct / profile.progress[subject].completed) * 100) 
                            : 0}%
                        </span>
                      </div>
                      <Progress 
                        value={profile.progress[subject].completed > 0 
                          ? (profile.progress[subject].correct / profile.progress[subject].completed) * 100 
                          : 0} 
                        className="h-2" 
                      />
                    </div>
                    
                    {profile.progress[subject].lastAttempted && (
                      <p className="text-xs text-muted-foreground mt-4">
                        Last attempted: {new Date(profile.progress[subject].lastAttempted).toLocaleDateString()}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {profile.timesTablesProgress && (
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">Times Tables Progress</h2>
                <TimesTablesProgress 
                  progress={profile.timesTablesProgress} 
                />
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="subjects" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map(subject => (
                <YearProgress 
                  key={subject}
                  subject={subject}
                  progress={profile.progress[subject]}
                />
              ))}
            </div>
            
            {profile.timesTablesProgress && (
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">Times Tables Progress</h2>
                <TimesTablesProgress 
                  progress={profile.timesTablesProgress} 
                />
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProgressPage;
