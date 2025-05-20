
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import { Question, Difficulty, Subject } from '@/types/questionTypes';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';

const QuestionBrowserPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { isSubscribed } = useSubscription();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/login');
      return;
    }

    // Redirect non-premium users
    if (!isSubscribed) {
      toast.error("This feature requires a premium subscription");
      navigate('/profile?tab=subscription');
      return;
    }
    
    fetchQuestions();
  }, [isAuthenticated, isSubscribed, navigate]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);
        
      if (error) {
        throw error;
      }
      
      if (data) {
        // Transform the data to ensure optionImages is always a string array
        const formattedQuestions: Question[] = data.map(q => ({
          ...q,
          optionImages: Array.isArray(q.optionImages) 
            ? q.optionImages.map(img => typeof img === 'string' ? img : '') 
            : []
        }));
        
        setQuestions(formattedQuestions);
        setFilteredQuestions(formattedQuestions);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      toast.error('Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Apply filters whenever searchQuery or activeTab changes
    let filtered = [...questions];
    
    // Apply subject filter
    if (activeTab !== 'all') {
      filtered = filtered.filter(q => q.subject.toLowerCase() === activeTab.toLowerCase());
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(q => 
        q.text.toLowerCase().includes(query) || 
        q.explanation?.toLowerCase().includes(query) ||
        q.subject.toLowerCase().includes(query)
      );
    }
    
    setFilteredQuestions(filtered);
  }, [searchQuery, activeTab, questions]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 container px-4 pt-24 pb-16 max-w-7xl mx-auto flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="h-10 w-10 animate-spin mx-auto text-primary" />
            <h2 className="text-2xl font-medium">Loading questions...</h2>
          </div>
        </main>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Question Browser</h1>
          <p className="text-muted-foreground">Browse and search through all available questions</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="maths">Maths</TabsTrigger>
                <TabsTrigger value="english">English</TabsTrigger>
                <TabsTrigger value="verbal">Verbal</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="geography">Geography</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="w-full md:w-auto">
              <Input
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-[300px]"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {filteredQuestions.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground">No questions found. Try adjusting your search criteria.</p>
                </CardContent>
              </Card>
            ) : (
              filteredQuestions.map((question) => (
                <Card key={question.id} className="overflow-hidden transition-shadow hover:shadow-md">
                  <CardHeader className="bg-muted/30">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                            {question.subject}
                          </span>
                          <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full font-medium">
                            {question.difficulty}
                          </span>
                          {question.year && (
                            <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                              Year {question.year}
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-base">{question.text}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    <div className="mb-4">
                      <Label className="text-sm font-medium text-muted-foreground mb-2 block">Options:</Label>
                      <ul className="space-y-1.5 ml-5 list-disc text-sm">
                        {question.options.map((option, i) => (
                          <li key={i} className={option === question.correctAnswer ? "font-medium text-green-600 dark:text-green-500" : ""}>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {question.explanation && (
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground mb-2 block">Explanation:</Label>
                        <p className="text-sm">{question.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuestionBrowserPage;
