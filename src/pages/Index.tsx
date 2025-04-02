
import React from 'react';
import Header from '@/components/Header';
import SubjectCard from '@/components/SubjectCard';
import AssignmentsList from '@/components/AssignmentsList';
import { Book, Calculator, FileText, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Subject } from '@/context/QuizContext';

const subjectsData = [
  {
    name: "Mathematics",
    description: "Practice your numerical and mathematical skills",
    icon: <Calculator className="h-5 w-5 text-primary" />,
    subject: "maths" as Subject
  },
  {
    name: "English",
    description: "Improve your comprehension and grammar",
    icon: <Book className="h-5 w-5 text-green-600" />,
    subject: "english" as Subject
  },
  {
    name: "Verbal Reasoning",
    description: "Enhance your logic and verbal reasoning skills",
    icon: <PenTool className="h-5 w-5 text-amber-600" />,
    subject: "verbal" as Subject
  },
  {
    name: "Non-verbal Reasoning",
    description: "Develop your spatial awareness and pattern recognition",
    icon: <FileText className="h-5 w-5 text-blue-600" />,
    subject: "nonVerbal" as Subject
  }
];

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userType } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 pt-32 pb-16 max-w-5xl mx-auto">
        {/* Teacher redirect notice */}
        {isAuthenticated && userType === 'teacher' && (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-lg flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl font-medium text-blue-700">Teacher Account Detected</h2>
              <p className="text-blue-600">Go to your teacher dashboard to manage classes and students.</p>
            </div>
            <Button onClick={() => navigate('/teacher-dashboard')}>
              Go to Dashboard
            </Button>
          </div>
        )}
        
        {/* Student assignments */}
        <AssignmentsList />
        
        <h1 className="text-3xl font-display font-bold mb-2">Practice Subjects</h1>
        <p className="text-muted-foreground mb-8">
          Choose a subject to start practicing for the 11+ exam
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjectsData.map((subject, index) => (
            <SubjectCard 
              key={index}
              subject={subject.subject}
              name={subject.name}
              description={subject.description}
              icon={subject.icon}
              onClick={() => navigate('/quiz', { state: { preSelectedSubject: subject.subject } })}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
