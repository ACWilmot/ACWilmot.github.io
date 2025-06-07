import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MoreVertical, Pencil, Copy, Trash2, Save, X, Filter } from 'lucide-react';
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
import { Subject, VerbalType } from '@/types/questionTypes';

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
  verbalType?: string | null;
};

interface QuestionBrowserPageProps {
  supabaseClient: SupabaseClient;
}

const verbalTypeLabels: Record<VerbalType, string> = {
  insertLetter: 'Insert a Letter',
  twoOddOnes: 'Two Odd Ones Out',
  relatedWords: 'Related Words',
  closestMeaning: 'Closest Meaning',
  hiddenWord: 'Hidden Word',
  missingWord: 'Missing Word',
  lettersNumbers: 'Letters for Numbers',
  moveLetter: 'Move a Letter',
  letterSeries: 'Letter Series',
  wordConnections: 'Word Connections',
  numberSeries: 'Number Series',
  compoundWords: 'Compound Words',
  makeWord: 'Make a Word',
  letterConnections: 'Letter Connections',
  readingInfo: 'Reading Information',
  oppositeMeaning: 'Opposite Meaning',
  completeSum: 'Complete the Sum',
  relatedNumbers: 'Related Numbers',
  wordNumberCodes: 'Word-Number Codes',
  completeWord: 'Complete the Word',
  sameMeaning: 'Same Meaning',
};

const QuestionBrowserPage: React.FC<QuestionBrowserPageProps> = ({ supabaseClient }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Filters
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [verbalTypeFilter, setVerbalTypeFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [searchText, setSearchText] = useState('');
  
  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Question>>({});

  const { data: questionsData, isLoading, error } = useQuery({
    queryKey: ['questions'],
    queryFn: async () => {
      try {
        const { data, error } = await supabaseClient
          .from('questions')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        console.log('Raw question data from database:', data);
        
        const mappedQuestions: Question[] = data.map(q => ({
          id: q.id,
          subject: q.subject,
          text: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          correctAnswer: q.correct_answer,
          difficulty: q.difficulty,
          year: q.year || null,
          imageUrl: q.image_url || null,
          explanation: q.explanation || '',
          timesTable: q.times_table || null,
          optionImages: q.option_images ? q.option_images : null,
          userId: q.user_id,
          verbalType: q.verbal_type || null,
        }));
        
        console.log('Mapped questions:', mappedQuestions);
        console.log('Verbal questions:', mappedQuestions.filter(q => q.subject === 'verbal'));
        
        return mappedQuestions;
      } catch (err) {
        console.error('Error fetching questions:', err);
        throw err;
      }
    }
  });

  const questions: Question[] = questionsData || [];

  // Filter questions based on current filters
  const filteredQuestions = questions.filter(question => {
    if (subjectFilter !== 'all' && question.subject !== subjectFilter) return false;
    if (difficultyFilter !== 'all' && question.difficulty !== difficultyFilter) return false;
    if (verbalTypeFilter !== 'all' && question.verbalType !== verbalTypeFilter) return false;
    if (searchText && !question.text.toLowerCase().includes(searchText.toLowerCase())) return false;
    return true;
  });

  // Get unique verbal types from questions
  const verbalTypes = [...new Set(questions
    .filter(q => q.subject === 'verbal' && q.verbalType)
    .map(q => q.verbalType))]
    .filter(Boolean) as string[];

  console.log('Available verbal types:', verbalTypes);

  const startEdit = (question: Question) => {
    setEditingId(question.id);
    setEditForm({
      text: question.text,
      explanation: question.explanation,
      correctAnswer: question.correctAnswer,
      options: [...question.options],
      difficulty: question.difficulty,
      subject: question.subject,
      verbalType: question.verbalType,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = async () => {
    if (!editingId) return;

    try {
      const { error } = await supabaseClient
        .from('questions')
        .update({
          text: editForm.text,
          explanation: editForm.explanation,
          correct_answer: editForm.correctAnswer,
          options: editForm.options,
          difficulty: editForm.difficulty,
          subject: editForm.subject,
          verbal_type: editForm.verbalType,
        })
        .eq('id', editingId);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['questions'] });
      setEditingId(null);
      setEditForm({});
      
      toast({
        title: "Success",
        description: "Question updated successfully.",
      });
    } catch (err) {
      console.error('Error updating question:', err);
      toast({
        title: "Error",
        description: "Failed to update question.",
        variant: "destructive",
      });
    }
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
            verbal_type: question.verbalType,
          },
        ])
        .select();

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['questions'] });
      toast({
        title: "Success",
        description: "Question duplicated successfully.",
      });
    } catch (err) {
      console.error('Error duplicating question:', err);
      toast({
        title: "Error",
        description: "Failed to duplicate question.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (questionId: string) => {
    try {
      const { error } = await supabaseClient
        .from('questions')
        .delete()
        .eq('id', questionId);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['questions'] });
      toast({
        title: "Success",
        description: "Question deleted successfully.",
      });
    } catch (err) {
      console.error('Error deleting question:', err);
      toast({
        title: "Error",
        description: "Failed to delete question.",
        variant: "destructive",
      });
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
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Question Browser</h1>
        <Button onClick={() => navigate('/questions')}>Create New Question</Button>
      </div>

      {/* Filters */}
      <div className="bg-card p-4 rounded-lg border space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4" />
          <h3 className="font-medium">Filters</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Subject</label>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All subjects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="maths">Maths</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="verbal">Verbal</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="geography">Geography</SelectItem>
                <SelectItem value="religiousEd">Religious Ed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Difficulty</label>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All difficulties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {subjectFilter === 'verbal' && (
            <div>
              <label className="text-sm font-medium mb-2 block">Verbal Type</label>
              <Select value={verbalTypeFilter} onValueChange={setVerbalTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All verbal types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Verbal Types</SelectItem>
                  {verbalTypes.length > 0 ? (
                    verbalTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {verbalTypeLabels[type as VerbalType] || type}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="no-types" disabled>No verbal types found</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <label className="text-sm font-medium mb-2 block">Search</label>
            <Input
              placeholder="Search question text..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Debug info */}
      {subjectFilter === 'verbal' && (
        <div className="bg-muted p-3 rounded text-sm">
          <strong>Debug:</strong> Found {verbalTypes.length} verbal types: {verbalTypes.join(', ') || 'none'}
        </div>
      )}

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredQuestions.length} of {questions.length} questions
      </div>

      {/* Questions table */}
      {filteredQuestions.length > 0 ? (
        <div className="rounded-md border">
          <Table>
            <TableCaption>A list of your questions.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Subject</TableHead>
                <TableHead>Question Text</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuestions.map((question) => (
                <TableRow key={question.id}>
                  <TableCell className="font-medium">
                    {editingId === question.id ? (
                      <Select
                        value={editForm.subject}
                        onValueChange={(value) => setEditForm(prev => ({ ...prev, subject: value }))}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maths">Maths</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="verbal">Verbal</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="geography">Geography</SelectItem>
                          <SelectItem value="religiousEd">Religious Ed</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="space-y-1">
                        <div>{question.subject}</div>
                        {question.subject === 'verbal' && question.verbalType && (
                          <div className="text-xs text-muted-foreground">
                            {verbalTypeLabels[question.verbalType as VerbalType] || question.verbalType}
                          </div>
                        )}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === question.id ? (
                      <Textarea
                        value={editForm.text}
                        onChange={(e) => setEditForm(prev => ({ ...prev, text: e.target.value }))}
                        className="min-h-[60px]"
                      />
                    ) : (
                      <div className="max-w-md">
                        {question.text.length > 100 ? `${question.text.substring(0, 100)}...` : question.text}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === question.id ? (
                      <Select
                        value={editForm.difficulty}
                        onValueChange={(value) => setEditForm(prev => ({ ...prev, difficulty: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Badge variant="secondary">{question.difficulty}</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === question.id && editForm.subject === 'verbal' ? (
                      <Select
                        value={editForm.verbalType || ''}
                        onValueChange={(value) => setEditForm(prev => ({ ...prev, verbalType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(verbalTypeLabels).map(([key, label]) => (
                            <SelectItem key={key} value={key}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      question.verbalType ? (
                        <Badge variant="outline">
                          {verbalTypeLabels[question.verbalType as VerbalType] || question.verbalType}
                        </Badge>
                      ) : (
                        question.subject === 'verbal' ? (
                          <span className="text-muted-foreground text-sm">No type set</span>
                        ) : null
                      )
                    )}
                  </TableCell>
                  <TableCell>{question.year}</TableCell>
                  <TableCell className="text-right">
                    {editingId === question.id ? (
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" onClick={saveEdit}>
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={cancelEdit}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => startEdit(question)}>
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
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p>No questions found matching your filters.</p>
      )}
    </div>
  );
};

export default QuestionBrowserPage;
