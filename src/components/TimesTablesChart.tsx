
import React from 'react';
import { 
  Bar, 
  BarChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TimesTableProgress } from '@/types/userTypes';
import { ChartContainer } from './ui/chart';

interface TimesTablesChartProps {
  progressData: TimesTableProgress[];
}

const TimesTablesChart: React.FC<TimesTablesChartProps> = ({ progressData }) => {
  // Transform data for chart use
  const chartData = progressData.map(table => {
    const accuracy = table.attempts > 0 ? (table.correct / table.attempts) * 100 : 0;
    
    // Calculate recent accuracy (last 10)
    const recentAttempts = table.recentAttempts || [];
    const recentCorrect = recentAttempts.filter(a => a.correct).length;
    const recentAccuracy = recentAttempts.length > 0 
      ? (recentCorrect / recentAttempts.length) * 100 
      : 0;
    
    return {
      name: `${table.table}×`,
      overall: Math.round(accuracy),
      recent: Math.round(recentAccuracy),
      attempted: table.attempts > 0
    };
  });

  // Filter to only show tables that have been attempted
  const attemptedData = chartData.filter(data => data.attempted);

  const chartConfig = {
    overall: { 
      label: "Overall Accuracy",
      theme: {
        light: "hsl(var(--primary))",
        dark: "hsl(var(--primary))"
      }
    },
    recent: { 
      label: "Recent Accuracy",
      theme: {
        light: "hsl(var(--secondary))",
        dark: "hsl(var(--secondary))"
      }
    }
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Accuracy Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        {attemptedData.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No progress data available yet
          </div>
        ) : (
          <div className="h-80 mt-4">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={attemptedData} 
                  margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="overall" fill="var(--color-overall)" name="Overall Accuracy" />
                  <Bar dataKey="recent" fill="var(--color-recent)" name="Recent Accuracy" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimesTablesChart;
