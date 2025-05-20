
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import SubjectCard from '@/components/SubjectCard';
import DifficultySelector from '@/components/DifficultySelector';
import YearSelector from '@/components/YearSelector';
import { useQuiz } from '@/context/QuizContext';
import { useNavigate } from 'react-router-dom';
import TimesTablesSelector from '@/components/TimesTablesSelector';
import { useSubscription } from '@/context/SubscriptionContext';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuestionsPage = () => {
  const {
    setSelectedSubject, 
    setSelectedDifficulty, 
    setSelectedYear, 
    startQuiz, 
    setSelectedTimesTables,
    selectedDifficulty, 
    selectedYear,
    selectedTimesTables
  } = useQuiz();
  
  const [showTimesTables, setShowTimesTables] = useState(false);
  const navigate = useNavigate();
  const { subscriptionTier, isLoading } = useSubscription();
  const isPremium = subscriptionTier === 'premium';

  const handleSubjectSelect = (subject: string) => {
    if (!isPremium && subject !== 'all') {
      // Free users can only access the combined test
      return;
    }
    
    if (subject === 'timesTables') {
      setShowTimesTables(true);
    } else {
      setShowTimesTables(false);
      setSelectedSubject(subject as any);
      startQuiz(subject as any);
      navigate('/quiz');
    }
  };

  const handleTimesTablesStart = () => {
    setSelectedSubject('timesTables' as any);
    startQuiz('timesTables' as any);
    navigate('/quiz');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Practice Tests</h1>
        <p className="text-muted-foreground mb-8">
          Select a subject to start practicing
        </p>

        {!isPremium && (
          <Alert className="mb-8 bg-muted/50">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Free Account Limitations</AlertTitle>
            <AlertDescription className="flex flex-col gap-2">
              <p>Free accounts can only access the combined test with 10 questions.</p>
              <Button 
                variant="outline" 
                className="w-fit" 
                onClick={() => navigate('/profile?tab=subscription')}
              >
                Upgrade to Premium
              </Button>
            </AlertDescription>
          </Alert>
        )}
        
        {!showTimesTables && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <SubjectCard 
                title="Combined Test" 
                description="Mixed subjects for practice" 
                onClick={() => handleSubjectSelect('all')}
                isPremium={false}
              />
              <SubjectCard 
                title="Maths" 
                description="Number, algebra, geometry" 
                onClick={() => handleSubjectSelect('maths')}
                isPremium={true}
                locked={!isPremium}
              />
              <SubjectCard 
                title="English" 
                description="Reading, writing, grammar" 
                onClick={() => handleSubjectSelect('english')} 
                isPremium={true}
                locked={!isPremium}
              />
              <SubjectCard 
                title="Verbal Reasoning" 
                description="Logic, pattern recognition" 
                onClick={() => handleSubjectSelect('verbal')} 
                isPremium={true}
                locked={!isPremium}
              />
              <SubjectCard 
                title="Times Tables" 
                description="Practice multiplication tables" 
                onClick={() => handleSubjectSelect('timesTables')} 
                isPremium={true}
                locked={!isPremium}
              />
              <SubjectCard 
                title="History" 
                description="Key historical events" 
                onClick={() => handleSubjectSelect('history')} 
                isPremium={true}
                locked={!isPremium}
              />
              <SubjectCard 
                title="Geography" 
                description="Maps, countries, climate" 
                onClick={() => handleSubjectSelect('geography')} 
                isPremium={true}
                locked={!isPremium}
              />
              <SubjectCard 
                title="Religious Education" 
                description="Different faiths and beliefs" 
                onClick={() => handleSubjectSelect('religiousEd')} 
                isPremium={true}
                locked={!isPremium}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DifficultySelector 
                onChange={(difficulty) => setSelectedDifficulty(difficulty)} 
                disabled={!isPremium} 
              />
              <YearSelector 
                onChange={(year) => setSelectedYear(year)} 
                disabled={!isPremium} 
              />
            </div>
          </>
        )}

        {showTimesTables && (
          <TimesTablesSelector 
            selectedTables={selectedTimesTables}
            onChange={setSelectedTimesTables}
            onStart={handleTimesTablesStart}
          />
        )}
      </div>
    </Layout>
  );
};

export default QuestionsPage;
