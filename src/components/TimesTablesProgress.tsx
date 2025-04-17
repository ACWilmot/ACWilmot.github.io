
import React, { useState } from 'react';
import { ChevronRight, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { TimesTableProgress } from '@/types/userTypes';
import { useProfile } from '@/context/ProfileContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import TimesTablesChart from './TimesTablesChart';
import { getDefaultTimesTablesProgress } from '@/utils/progressUtils';
import { useProgressActions } from '@/hooks/useProgressActions';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

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
  const { updateTimesTablesProgress } = useProgressActions(profile, updateProfile);
  const [demoMode, setDemoMode] = useState(false);
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  
  console.log("TimesTablesProgress rendering with profile data:", profile);
  console.log("Profile loading state:", isLoading);
  
  // Get times tables progress with a fallback to default data
  const timesTablesProgress = profile?.timesTablesProgress || getDefaultTimesTablesProgress();
  
  console.log("Using times tables progress:", timesTablesProgress);

  const loadDemoData = async () => {
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
        toast.error("Failed to load demo data");
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
    return <div className="mt-6">Loading times tables progress...</div>;
  }

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
        <h2 className="text-2xl font-display font-bold">Times Tables Progress</h2>
        <div className="flex gap-2">
          {!hasAnyAttempts && (
            <Button 
              onClick={loadDemoData}
              variant="outline"
              className="flex items-center gap-1.5"
              disabled={isLoading}
            >
              <BarChart2 className="h-4 w-4" />
              {isLoading ? "Loading..." : "Load Demo Data"}
            </Button>
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

      {hasAnyAttempts && <TimesTablesChart progressData={timesTablesProgress} />}

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
                      <span>Recent Accuracy (last {data.recentAttempts || 0} attempts)</span>
                      <span className="font-medium">
                        {data.recentAttempts > 0 ? `${data.recentAccuracy}%` : "N/A"}
                      </span>
                    </div>
                    <Progress 
                      value={data.recentAttempts > 0 ? data.recentAccuracy : 0} 
                      className={`h-2 ${data.recentAttempts === 0 ? "bg-muted" : ""}`} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Alert className="bg-muted/50">
          <AlertDescription>
            {demoMode ? "Loading demo data..." : "You haven't practiced any times tables yet. Start a practice session to track your progress!"}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default TimesTablesProgress;
