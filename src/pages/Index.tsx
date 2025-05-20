import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import SubjectCard from '@/components/SubjectCard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';
import { 
  Calculator, 
  BookOpen, 
   моз, 
  BrainCircuit, 
  Clock, 
  Map, 
  Cross,
  Lock
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { isSubscribed } = useSubscription();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    navigate('/questions');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Practice Tests</h1>
            <p className="text-muted-foreground">
              Choose a subject to start your practice
            </p>
          </div>
          {isSubscribed && (
            <Badge variant="outline">Premium</Badge>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SubjectCard
            title="Maths"
            description="Number, algebra, geometry"
            onClick={() => handleSubjectSelect('maths')}
            isPremium={true}
            locked={!isSubscribed}
          />
          <SubjectCard
            title="English"
            description="Reading, writing, grammar"
            onClick={() => handleSubjectSelect('english')}
            isPremium={true}
            locked={!isSubscribed}
          />
          <SubjectCard
            title="Verbal Reasoning"
            description="Logic, pattern recognition"
            onClick={() => handleSubjectSelect('verbal')}
            isPremium={true}
            locked={!isSubscribed}
          />
           <SubjectCard
            title="Times Tables"
            description="Practice multiplication tables"
            onClick={() => handleSubjectSelect('timesTables')}
            isPremium={true}
            locked={!isSubscribed}
          />
          <SubjectCard
            title="History"
            description="Key historical events"
            onClick={() => handleSubjectSelect('history')}
             isPremium={true}
            locked={!isSubscribed}
          />
          <SubjectCard
            title="Geography"
            description="Maps, countries, climate"
            onClick={() => handleSubjectSelect('geography')}
            isPremium={true}
            locked={!isSubscribed}
          />
          <SubjectCard
            title="Religious Education"
            description="Different faiths and beliefs"
            onClick={() => handleSubjectSelect('religiousEd')}
            isPremium={true}
            locked={!isSubscribed}
          />
          <SubjectCard
            title="Combined Test"
            description="Mixed subjects for practice"
            onClick={() => handleSubjectSelect('all')}
            isPremium={false}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
