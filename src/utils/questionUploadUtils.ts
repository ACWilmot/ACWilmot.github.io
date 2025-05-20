
import { supabase } from '@/integrations/supabase/client';
import { Question } from '@/types/questionTypes';
import sampleQuestions from '@/data/sampleQuestions';
import mathsQuestions from '@/data/questions/maths';
import englishQuestions from '@/data/questions/english';
import verbalQuestions from '@/data/questions/verbal';
import historyQuestions from '@/data/questions/history';
import geographyQuestions from '@/data/questions/geography';
import religiousEdQuestions from '@/data/questions/religiousEd';

/**
 * Uploads a batch of questions to the Supabase database
 * @param questions The array of questions to upload
 * @param onProgress Optional callback to report progress
 * @returns A promise with the result of the upload operation
 */
export const uploadQuestionBatch = async (
  questions: Question[],
  onProgress?: (current: number, total: number) => void
): Promise<{ success: boolean; uploaded: number; errors: number; message: string }> => {
  let uploadedCount = 0;
  let errorCount = 0;
  const batchSize = 50; // Upload in batches to avoid timeouts
  
  try {
    // Process questions in batches
    for (let i = 0; i < questions.length; i += batchSize) {
      const batch = questions.slice(i, i + batchSize);
      
      // Transform questions to match the database schema
      const transformedBatch = batch.map(question => ({
        id: question.id,
        subject: question.subject,
        text: question.text,
        options: question.options,
        correct_answer: question.correctAnswer,
        explanation: question.explanation,
        difficulty: question.difficulty,
        image_url: question.imageUrl,
        option_images: question.optionImages || null,
        year: question.year || null,
        times_table: question.timesTable || null
      }));
      
      // Upload batch to Supabase with upsert (will update if exists, insert if not)
      const { error, count } = await supabase
        .from('questions')
        .upsert(transformedBatch, { 
          onConflict: 'id',
          ignoreDuplicates: false
        });
      
      if (error) {
        console.error('Error uploading question batch:', error);
        errorCount += batch.length;
      } else {
        uploadedCount += count || batch.length;
      }
      
      // Report progress if callback provided
      if (onProgress) {
        onProgress(i + batch.length, questions.length);
      }
    }
    
    return {
      success: errorCount === 0,
      uploaded: uploadedCount,
      errors: errorCount,
      message: errorCount === 0 
        ? `Successfully uploaded ${uploadedCount} questions` 
        : `Uploaded ${uploadedCount} questions with ${errorCount} errors`
    };
  } catch (error) {
    console.error('Error in batch upload process:', error);
    return {
      success: false,
      uploaded: uploadedCount,
      errors: questions.length - uploadedCount,
      message: `Upload process failed: ${(error as Error).message}`
    };
  }
};

/**
 * Gets all available questions from the local data files
 */
export const getAllLocalQuestions = (): Question[] => {
  const allQuestions = [
    ...mathsQuestions,
    ...englishQuestions,
    ...verbalQuestions,
    ...historyQuestions,
    ...geographyQuestions,
    ...religiousEdQuestions
  ];
  
  // Remove any duplicates based on ID
  const uniqueQuestions = allQuestions.reduce((acc, question) => {
    if (!acc.some(q => q.id === question.id)) {
      acc.push(question);
    }
    return acc;
  }, [] as Question[]);
  
  return uniqueQuestions;
};
