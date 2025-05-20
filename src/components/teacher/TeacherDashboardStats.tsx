
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface TeacherDashboardStatsProps {
  loading: boolean;
}

const TeacherDashboardStats: React.FC<TeacherDashboardStatsProps> = ({ 
  loading 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Total Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">0</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Subjects Covered</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">4</div>
          <div className="text-sm text-muted-foreground">Maths, English, Verbal, Non-Verbal</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Average Accuracy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">-</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboardStats;
