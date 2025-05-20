import React from 'react';
import { useQuery } from 'react-query';
import { SupabaseClient } from '@supabase/supabase-js';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical, Pencil, Copy, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from 'lucide-react';

// Define the Question type
export type Question = {
  id: string;
  subject: string;
  text: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
  year: number | null;
  imageUrl: string | null;
  explanation: string;
  timesTable: number | null;
  optionImages: string[] | null;
  userId: string;
};

interface QuestionBrowserPageProps {
  supabaseClient: SupabaseClient;
}

const QuestionBrowserPage: React.FC<QuestionBrowserPageProps> = ({ supabaseClient }) => {
  const navigate = useNavigate();
  const { toast } = useToast()

  // Inside the component, update the data fetching logic to correctly map database fields
  const { data: questionsData, isLoading, error } = useQuery({
    queryKey: ['questions'],
    queryFn: async () => {
      try {
        const { data, error } = await supabaseClient
          .from('questions')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        // Map database fields to our Question type
        const mappedQuestions: Question[] = data.map(q => ({
          id: q.id,
          subject: q.subject,
          text: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          correctAnswer: q.correct_answer, // Map correct_answer to correctAnswer
          difficulty: q.difficulty,
          year: q.year || null,
          imageUrl: q.image_url || null,
          explanation: q.explanation || '',
          timesTable: q.times_table || null,
          optionImages: q.option_images ? q.option_images : null, // Map option_images to optionImages
          userId: q.user_id
        }));
        
        return mappedQuestions;
      } catch (err) {
        console.error('Error fetching questions:', err);
        throw err;
      }
    }
  });

  const questions: Question[] = questionsData || [];

  const handleEdit = (questionId: string) => {
    navigate(`/edit-question/${questionId}`);
  };

  const handleDuplicate = async (question: Question) => {
    try {
      const { data, error } = await supabaseClient
        .from('questions')
        .insert([
          {
            subject: question.subject,
            text: question.text,
            options: question.options,
            correct_answer: question.correctAnswer,
            difficulty: question.difficulty,
            year: question.year,
            image_url: question.imageUrl,
            explanation: question.explanation,
            times_table: question.timesTable,
            option_images: question.optionImages,
            user_id: question.userId,
          },
        ])
        .select();

      if (error) {
        console.error('Error duplicating question:', error);
        toast({
          title: "Error",
          description: "Failed to duplicate question.",
          variant: "destructive",
        })
      } else {
        console.log('Question duplicated successfully:', data);
        toast({
          title: "Success",
          description: "Question duplicated successfully.",
        })
      }
    } catch (err) {
      console.error('Unexpected error duplicating question:', err);
      toast({
        title: "Error",
        description: "Unexpected error duplicating question.",
        variant: "destructive",
      })
    }
  };

  const handleDelete = async (questionId: string) => {
    try {
      const { error } = await supabaseClient
        .from('questions')
        .delete()
        .eq('id', questionId);

      if (error) {
        console.error('Error deleting question:', error);
        toast({
          title: "Error",
          description: "Failed to delete question.",
          variant: "destructive",
        })
      } else {
        console.log('Question deleted successfully');
        toast({
          title: "Success",
          description: "Question deleted successfully.",
        })
      }
    } catch (err) {
      console.error('Unexpected error deleting question:', err);
      toast({
        title: "Error",
        description: "Unexpected error deleting question.",
        variant: "destructive",
      })
    }
  };

  if (isLoading) {
    return <Alert variant="default">
      <Info className="h-4 w-4" />
      <AlertTitle>Loading</AlertTitle>
      <AlertDescription>
        Fetching questions...
      </AlertDescription>
    </Alert>;
  }

  if (error) {
    return <Alert variant="destructive">
      <Info className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Failed to fetch questions. Please try again.
      </AlertDescription>
    </Alert>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Question Browser</h1>
      <div className="mb-4">
        <Button onClick={() => navigate('/create-question')}>Create New Question</Button>
      </div>
      {questions.length > 0 ? (
        <div className="rounded-md border">
          <Table>
            <TableCaption>A list of your questions.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Subject</TableHead>
                <TableHead>Question Text</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((question) => (
                <TableRow key={question.id}>
                  <TableCell className="font-medium">{question.subject}</TableCell>
                  <TableCell>{question.text.substring(0, 100)}...</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{question.difficulty}</Badge>
                  </TableCell>
                  <TableCell>{question.year}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEdit(question.id)}>
                          <Pencil className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDuplicate(question)}>
                          <Copy className="mr-2 h-4 w-4" /> Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDelete(question.id)}>
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
};

export default QuestionBrowserPage;
