
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Question, Subject, Difficulty } from '@/types/questionTypes';
import sampleQuestions from '@/data/sampleQuestions';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const QuestionBrowserPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Collect all questions
    let allQuestions: Question[] = [];
    if (selectedSubject === 'all') {
      Object.values(sampleQuestions).forEach(subjectQuestions => {
        allQuestions = [...allQuestions, ...subjectQuestions];
      });
    } else {
      allQuestions = [...sampleQuestions[selectedSubject as Subject]];
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      allQuestions = allQuestions.filter(q => q.difficulty === selectedDifficulty);
    }

    // Filter by year
    if (selectedYear) {
      allQuestions = allQuestions.filter(q => q.year === selectedYear || !q.year);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      allQuestions = allQuestions.filter(q => 
        q.text.toLowerCase().includes(query) || 
        q.explanation?.toLowerCase().includes(query) ||
        q.options.some(option => option.toLowerCase().includes(query))
      );
    }

    setQuestions(allQuestions);
  }, [selectedSubject, selectedDifficulty, selectedYear, searchQuery]);

  const toggleQuestionExpand = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const totalQuestions = Object.values(sampleQuestions).reduce(
    (total, subjectQuestions) => total + subjectQuestions.length,
    0
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Question Browser</h1>
        <p className="text-muted-foreground mb-8">
          Browse all {totalQuestions} questions in our database. Filter by subject, difficulty, and year.
        </p>

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
                onChange={(e) => setSearchQuery(e.target.value)}
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
            Showing {questions.length} questions
          </h2>

          {questions.length === 0 ? (
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
                        <div className="flex gap-2 items-center mb-1">
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
