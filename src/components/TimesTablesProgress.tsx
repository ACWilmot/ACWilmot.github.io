
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { TimesTableProgress } from '@/types/userTypes';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import TimesTablesChart from './TimesTablesChart';
import { getDefaultTimesTablesProgress } from '@/utils/progressUtils';

const TimesTablesProgress: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // If no times tables progress data exists yet, create a default structure
  const timesTablesProgress = user?.timesTablesProgress || getDefaultTimesTablesProgress();

  // Calculate progress percentages and recent accuracy
  const progressData = timesTablesProgress.map(table => {
    const totalAccuracy = table.attempts > 0 ? Math.round((table.correct / table.attempts) * 100) : 0;
    
    // Calculate recent accuracy (last 10 attempts)
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

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold">Times Tables Progress</h2>
        <Button 
          onClick={() => navigate('/quiz', { state: { subject: 'timesTables' } })}
          variant="default"
          className="flex items-center gap-1.5"
        >
          Practice Now
          <ChevronRight className="h-4 w-4" />
        </Button>
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
            You haven't practiced any times tables yet. Start a practice session to track your progress!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default TimesTablesProgress;
