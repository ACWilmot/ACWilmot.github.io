
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
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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
  worksheets: Worksheet[];
  loading: boolean;
}

const WorksheetList: React.FC<WorksheetListProps> = ({ worksheets, loading }) => {
  const handleDownload = async (filePath: string, fileName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('worksheets')
        .download(filePath);

      if (error) throw error;

      // Create a download link
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
        <CardTitle>Uploaded Worksheets</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-4">Loading worksheets...</div>
        ) : worksheets.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            No worksheets uploaded yet
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {worksheets.map((worksheet) => (
                <TableRow key={worksheet.id}>
                  <TableCell>{worksheet.name}</TableCell>
                  <TableCell>
                    {new Date(worksheet.uploaded_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="capitalize">{worksheet.status}</TableCell>
                  <TableCell>
                    {worksheet.total_questions > 0
                      ? `${worksheet.correct_answers}/${worksheet.total_questions}`
                      : '-'}
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
