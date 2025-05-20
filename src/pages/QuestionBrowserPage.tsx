
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, Loader2, Upload, Database } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Question, Subject, Difficulty } from '@/types/questionTypes';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { uploadQuestionBatch, getAllLocalQuestions } from '@/utils/questionUploadUtils';
import { Progress } from '@/components/ui/progress';

const QuestionBrowserPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  // Fetch questions from Supabase
  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        // Start building the query
        let query = supabase
          .from('questions')
          .select('*');

        // Apply subject filter
        if (selectedSubject !== 'all') {
          query = query.eq('subject', selectedSubject);
        }

        // Apply difficulty filter
        if (selectedDifficulty !== 'all') {
          query = query.eq('difficulty', selectedDifficulty);
        }

        // Apply year filter
        if (selectedYear) {
          query = query.eq('year', selectedYear);
        }

        // Apply search query filter (using text search across multiple columns)
        if (searchQuery) {
          query = query.or(
            `text.ilike.%${searchQuery}%,explanation.ilike.%${searchQuery}%`
          );
        }

        // Execute the query
        const { data, error } = await query;

        if (error) {
          throw error;
        }

        // Count total questions in database (for display)
        const { count, error: countError } = await supabase
          .from('questions')
          .select('*', { count: 'exact', head: true });

        if (countError) {
          console.error('Error counting questions:', countError);
        } else {
          setTotalCount(count || 0);
        }

        // Update state with fetched questions
        if (data) {
          const mappedQuestions = data.map(q => ({
            id: q.id,
            subject: q.subject as Subject, 
            text: q.text,
            options: Array.isArray(q.options) ? q.options.map(opt => String(opt)) : [], // Convert all options to strings
            correctAnswer: q.correct_answer,
            explanation: q.explanation || '',
            difficulty: q.difficulty as Difficulty,
            imageUrl: q.image_url,
            optionImages: q.option_images,
            year: q.year,
            timesTable: q.times_table
          }));
          setQuestions(mappedQuestions);
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
        toast({
          title: "Error fetching questions",
          description: "There was a problem loading the questions.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [selectedSubject, selectedDifficulty, selectedYear, searchQuery, toast]);

  const toggleQuestionExpand = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Handle search input with debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle uploading all questions to Supabase
  const handleUploadAllQuestions = async () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      // Get all questions from local data files
      const allQuestions = getAllLocalQuestions();
      
      toast({
        title: "Starting upload",
        description: `Preparing to upload ${allQuestions.length} questions to the database...`,
      });
      
      // Upload questions in batches with progress tracking
      const result = await uploadQuestionBatch(
        allQuestions,
        (current, total) => {
          const progressPercent = Math.round((current / total) * 100);
          setUploadProgress(progressPercent);
        }
      );
      
      // Show result toast
      toast({
        title: result.success ? "Upload Complete" : "Upload Finished with Errors",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      });
      
      // Refresh the questions list
      if (result.uploaded > 0) {
        setIsLoading(true);
        // Re-fetch questions to update the list
        const query = supabase.from('questions').select('*');
        // Apply existing filters if any
        if (selectedSubject !== 'all') {
          query.eq('subject', selectedSubject);
        }
        if (selectedDifficulty !== 'all') {
          query.eq('difficulty', selectedDifficulty);
        }
        if (selectedYear) {
          query.eq('year', selectedYear);
        }
        if (searchQuery) {
          query.or(`text.ilike.%${searchQuery}%,explanation.ilike.%${searchQuery}%`);
        }
        
        const { data, error } = await query;
        
        if (error) {
          throw error;
        }
        
        if (data) {
          const mappedQuestions = data.map(q => ({
            id: q.id,
            subject: q.subject as Subject,
            text: q.text,
            options: Array.isArray(q.options) ? q.options.map(opt => String(opt)) : [], // Convert all options to strings
            correctAnswer: q.correct_answer,
            explanation: q.explanation || '',
            difficulty: q.difficulty as Difficulty,
            imageUrl: q.image_url,
            optionImages: q.option_images,
            year: q.year,
            timesTable: q.times_table
          }));
          setQuestions(mappedQuestions);
        }
      }
    } catch (error) {
      console.error('Error uploading questions:', error);
      toast({
        title: "Upload Failed",
        description: `An error occurred during upload: ${(error as Error).message}`,
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-3xl font-bold">Question Browser</h1>
          <Button 
            onClick={handleUploadAllQuestions} 
            disabled={isUploading} 
            className="mt-4 md:mt-0"
            variant="outline"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Database className="mr-2 h-4 w-4" />
                Upload All Questions
              </>
            )}
          </Button>
        </div>
        
        <p className="text-muted-foreground mb-8">
          Browse all {totalCount} questions in our database. Filter by subject, difficulty, and year.
        </p>

        {isUploading && (
          <div className="mb-8">
            <p className="text-sm font-medium mb-2">Upload Progress</p>
            <Progress value={uploadProgress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1 text-right">{uploadProgress}% Complete</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div>
            <label className="text-sm font-medium mb-1 block">Subject</label>
            <Select 
              value={selectedSubject} 
              onValueChange={(value) => setSelectedSubject(value as Subject | 'all')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="maths">Maths</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="verbal">Verbal</SelectItem>
                <SelectItem value="timesTables">Times Tables</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="geography">Geography</SelectItem>
                <SelectItem value="religiousEd">Religious Ed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Difficulty</label>
            <Select 
              value={selectedDifficulty} 
              onValueChange={(value) => setSelectedDifficulty(value as Difficulty | 'all')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Year Level</label>
            <Select 
              value={selectedYear?.toString() || "null"} 
              onValueChange={(value) => setSelectedYear(value === "null" ? null : parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="null">All Years</SelectItem>
                <SelectItem value="3">Year 3</SelectItem>
                <SelectItem value="4">Year 4</SelectItem>
                <SelectItem value="5">Year 5</SelectItem>
                <SelectItem value="6">Year 6</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Search</label>
            <div className="flex gap-2">
              <Input
                placeholder="Search questions..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full"
              />
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">
            {isLoading ? 'Loading questions...' : `Showing ${questions.length} questions`}
          </h2>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : questions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground">No questions match your filters.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {questions.map((question) => (
                <Card key={question.id} className="overflow-hidden">
                  <Collapsible 
                    open={expandedQuestions[question.id]} 
                    onOpenChange={() => toggleQuestionExpand(question.id)}
                  >
                    <CardHeader className="px-6 py-4 bg-muted/50 flex flex-row items-center justify-between cursor-pointer"
                      onClick={() => toggleQuestionExpand(question.id)}
                    >
                      <div>
                        <div className="flex gap-2 items-center flex-wrap mb-1">
                          <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">
                            {question.subject.charAt(0).toUpperCase() + question.subject.slice(1)}
                          </span>
                          <span className="text-xs px-2 py-1 bg-muted rounded-full">
                            {question.difficulty}
                          </span>
                          {question.year && (
                            <span className="text-xs px-2 py-1 bg-muted rounded-full">
                              Year {question.year}
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-base">{question.text}</CardTitle>
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedQuestions[question.id] ? 'rotate-180' : ''}`} />
                        </Button>
                      </CollapsibleTrigger>
                    </CardHeader>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-4">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium mb-2">Options:</h3>
                            <ul className="space-y-2 ml-4">
                              {question.options.map((option, index) => (
                                <li key={index} className={`pl-4 border-l-2 ${option === question.correctAnswer ? 'border-green-500 font-medium' : 'border-muted'}`}>
                                  {option}
                                  {option === question.correctAnswer && (
                                    <span className="ml-2 text-xs text-green-600">(Correct Answer)</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {question.explanation && (
                            <>
                              <Separator />
                              <div>
                                <h3 className="font-medium mb-2">Explanation:</h3>
                                <p className="text-muted-foreground">{question.explanation}</p>
                              </div>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default QuestionBrowserPage;
