
import React, { useState, useEffect, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useQuiz } from '@/context/QuizContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { format, subDays } from 'date-fns';
import TimesTablesProgress from '@/components/TimesTablesProgress';
import SubjectYearProgress from '@/components/SubjectYearProgress';
import { useSubscription } from '@/context/SubscriptionContext';
import { Lock, Crown, AlertCircle } from 'lucide-react';

const ProgressPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isSubscribed } = useSubscription();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const renderContent = () => {
    if (!isSubscribed) {
      return (
        <div className="mt-8">
          <Alert variant="default">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Premium Feature</AlertTitle>
            <AlertDescription className="flex flex-col gap-2">
              <p>Progress tracking is only available for Premium accounts.</p>
              <Button 
                variant="outline" 
                className="w-fit" 
                onClick={() => navigate('/profile?tab=subscription')}
              >
                Upgrade to Premium
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      );
    }
    
    return (
      <>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="subjects">By Subject</TabsTrigger>
            <TabsTrigger value="timestables">Times Tables</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your practice activity for the last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    {/* Recent activity chart would go here */}
                    <div className="flex items-center justify-center h-full">
                      <p className="text-muted-foreground">Not enough data to display yet.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Accuracy by Subject</CardTitle>
                  <CardDescription>Your performance across different subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    {/* Subject accuracy chart would go here */}
                    <div className="flex items-center justify-center h-full">
                      <p className="text-muted-foreground">Complete more tests to see your accuracy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="subjects">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Progress</CardTitle>
                  <CardDescription>Your performance by subject and year level</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-8">
                    <SubjectYearProgress 
                      subject="maths"
                      title="Mathematics"
                    />
                    <SubjectYearProgress 
                      subject="english"
                      title="English"
                    />
                    <SubjectYearProgress 
                      subject="verbal"
                      title="Verbal Reasoning"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="timestables">
            <Card>
              <CardHeader>
                <CardTitle>Times Tables Progress</CardTitle>
                <CardDescription>Your multiplication tables proficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <TimesTablesProgress />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Progress</h1>
            <p className="text-muted-foreground">
              Track your practice results and improvements
            </p>
          </div>
          
          <Badge 
            variant={isSubscribed ? "default" : "outline"}
            className="flex gap-1.5 items-center"
          >
            {isSubscribed ? (
              <>
                <Crown className="h-3.5 w-3.5" /> 
                Premium
              </>
            ) : (
              <>
                <Lock className="h-3.5 w-3.5" /> 
                Free
              </>
            )}
          </Badge>
        </div>
        
        {renderContent()}
      </div>
    </Layout>
  );
};

export default ProgressPage;
