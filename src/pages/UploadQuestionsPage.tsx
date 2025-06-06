
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { uploadQuestionBatch, getAllLocalQuestions } from '@/utils/questionUploadUtils';
import { useAuth } from '@/context/AuthContext';

const UploadQuestionsPage = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadStats, setUploadStats] = useState<{
    total: number;
    uploaded: number;
    errors: number;
  } | null>(null);
  const { user } = useAuth();

  const handleUploadQuestions = async () => {
    if (!user) {
      toast.error('You must be logged in to upload questions');
      return;
    }

    setIsUploading(true);
    setProgress(0);
    setUploadStats(null);

    try {
      const allQuestions = getAllLocalQuestions();
      console.log(`Found ${allQuestions.length} local questions to upload`);

      const result = await uploadQuestionBatch(
        allQuestions,
        (current, total) => {
          const progressPercent = (current / total) * 100;
          setProgress(progressPercent);
        }
      );

      setUploadStats({
        total: allQuestions.length,
        uploaded: result.uploaded,
        errors: result.errors
      });

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error uploading questions:', error);
      toast.error('Failed to upload questions');
    } finally {
      setIsUploading(false);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Upload Questions</CardTitle>
            <CardDescription>
              You must be logged in to upload questions to the database.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Upload Questions to Database</CardTitle>
          <CardDescription>
            Upload all local questions (including the new verbal reasoning questions) to the Supabase database.
            This will make them available for quizzes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isUploading && !uploadStats && (
            <Button onClick={handleUploadQuestions} className="w-full">
              Upload All Questions
            </Button>
          )}

          {isUploading && (
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                Uploading questions... {Math.round(progress)}%
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}

          {uploadStats && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Upload Complete</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{uploadStats.total}</div>
                  <div className="text-muted-foreground">Total Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{uploadStats.uploaded}</div>
                  <div className="text-muted-foreground">Uploaded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{uploadStats.errors}</div>
                  <div className="text-muted-foreground">Errors</div>
                </div>
              </div>
              <Button 
                onClick={() => {
                  setUploadStats(null);
                  setProgress(0);
                }} 
                variant="outline" 
                className="w-full"
              >
                Reset
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadQuestionsPage;
