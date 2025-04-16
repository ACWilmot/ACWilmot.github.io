import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Loader2, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';

interface WorksheetUploaderProps {
  classId?: string;
  onUploadComplete?: () => void;
  inQuiz?: boolean;
}

const WorksheetUploader: React.FC<WorksheetUploaderProps> = ({ 
  classId, 
  onUploadComplete,
  inQuiz = false 
}) => {
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const { questions, selectedSubject, selectedDifficulty } = useQuiz();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('pdf')) {
      toast.error('Please upload a PDF file');
      return;
    }

    try {
      setUploading(true);

      // Upload to storage bucket
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('Not authenticated');

      const filePath = `${userData.user.id}/${classId || 'practice'}/${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from('worksheets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Create database record
      const dbRecord = {
        user_id: userData.user.id,
        name: file.name,
        file_path: filePath,
        status: 'processing'
      };
      
      if (classId) {
        dbRecord.class_id = classId;
      }

      const { error: dbError } = await supabase
        .from('worksheet_uploads')
        .insert(dbRecord);

      if (dbError) throw dbError;

      // Simulate PDF processing and marking
      if (inQuiz) {
        await processAndMarkWorksheet(filePath, userData.user.id);
      }

      toast.success('Worksheet uploaded successfully');
      
      if (inQuiz) {
        navigate('/results');
      } else if (onUploadComplete) {
        onUploadComplete();
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload worksheet');
    } finally {
      setUploading(false);
    }
  };

  // Simulate PDF processing and marking based on the current quiz questions
  const processAndMarkWorksheet = async (filePath: string, userId: string) => {
    try {
      // Get the upload ID
      const { data: uploadData, error: uploadError } = await supabase
        .from('worksheet_uploads')
        .select('id')
        .eq('file_path', filePath)
        .single();

      if (uploadError) throw uploadError;

      // In a real implementation, you would:
      // 1. Extract text from the PDF
      // 2. Use OCR to identify answers
      // 3. Match answers to questions
      
      // For this demo, we'll simulate marking with random correct answers
      // In a production app, you might use a service like AWS Textract or Google Cloud Vision
      const totalQuestions = questions.length;
      const correctAnswers = Math.floor(Math.random() * (totalQuestions + 1)); // Random score

      // Update the worksheet upload record with the results
      const { error: updateError } = await supabase
        .from('worksheet_uploads')
        .update({
          status: 'marked',
          marked_at: new Date().toISOString(),
          total_questions: totalQuestions,
          correct_answers: correctAnswers
        })
        .eq('id', uploadData.id);

      if (updateError) throw updateError;

      // Update user progress
      if (selectedSubject) {
        const { data: progressData, error: progressError } = await supabase
          .from('profiles')
          .select('progress')
          .eq('id', userId)
          .single();

        if (progressError) throw progressError;

        const progress = progressData?.progress || {};
        const subject = selectedSubject;
        const lastAttempted = new Date().toISOString().split('T')[0];
        
        // Create new progress by adding the marked worksheet results
        const newProgress = {
          ...progress,
          [subject]: {
            completed: ((progress[subject] && progress[subject].completed) || 0) + totalQuestions,
            correct: ((progress[subject] && progress[subject].correct) || 0) + correctAnswers,
            lastAttempted
          }
        };

        const { error: updateProgressError } = await supabase
          .from('profiles')
          .update({ progress: newProgress })
          .eq('id', userId);

        if (updateProgressError) throw updateProgressError;
      }

      toast.success('Worksheet marked successfully!');
    } catch (error) {
      console.error('Marking error:', error);
      toast.error('Failed to process worksheet');
    }
  };

  return (
    <Card className={inQuiz ? "border-primary/30" : ""}>
      <CardHeader className={inQuiz ? "pb-2" : ""}>
        <CardTitle>Upload Worksheet</CardTitle>
        <CardDescription>
          {inQuiz 
            ? "Upload your completed worksheet for immediate marking" 
            : "Upload completed worksheets in PDF format for marking"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center w-full">
          <label className={`flex flex-col items-center justify-center w-full ${inQuiz ? 'h-24' : 'h-32'} border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50`}>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {uploading ? (
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              ) : (
                <>
                  <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PDF files only</p>
                </>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf"
              onChange={handleFileUpload}
              disabled={uploading}
            />
          </label>
        </div>
        {inQuiz && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Uploading will automatically mark your worksheet and take you to the results page</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WorksheetUploader;
