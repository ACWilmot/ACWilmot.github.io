
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { Subject } from '@/context/QuizContext';

interface Worksheet {
  id: string;
  name: string;
  uploaded_at: string;
  status: string;
  total_questions: number;
  correct_answers: number;
  file_path: string;
}

interface WorksheetListProps {
  subject?: Subject | null;
  limit?: number;
}

const WorksheetList: React.FC<WorksheetListProps> = ({ subject, limit = 5 }) => {
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchWorksheets = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        let query = supabase
          .from('worksheet_uploads')
          .select('*')
          .eq('user_id', user.id)
          .eq('status', 'marked')
          .order('uploaded_at', { ascending: false })
          .limit(limit);
          
        if (subject) {
          // Note: In a real implementation, you would store the subject in the worksheet_uploads table
          // For now, we'll just simulate this by searching for the subject in the file path
          query = query.ilike('file_path', `%${subject}%`);
        }
          
        const { data, error } = await query;
        
        if (error) throw error;
        setWorksheets(data || []);
      } catch (error) {
        console.error('Error fetching worksheets:', error);
        toast.error('Failed to load worksheets');
      } finally {
        setLoading(false);
      }
    };
    
    fetchWorksheets();
  }, [user, subject, limit]);

  const handleDownload = async (filePath: string, fileName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('worksheets')
        .download(filePath);

      if (error) throw error;

      const url = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      link.remove();
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download worksheet');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Recent Worksheets
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-4">Loading worksheets...</div>
        ) : worksheets.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            No completed worksheets found
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {worksheets.map((worksheet) => (
                <TableRow key={worksheet.id}>
                  <TableCell className="font-medium">{worksheet.name}</TableCell>
                  <TableCell>
                    {new Date(worksheet.uploaded_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {worksheet.correct_answers}/{worksheet.total_questions}
                    {' '}
                    <span className="text-muted-foreground text-sm">
                      ({Math.round((worksheet.correct_answers / Math.max(worksheet.total_questions, 1)) * 100)}%)
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownload(worksheet.file_path, worksheet.name)}
                    >
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default WorksheetList;
