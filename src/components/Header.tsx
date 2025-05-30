
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useStudent } from '@/context/StudentContext';
import { useSubscription } from '@/context/SubscriptionContext';
import UserProfile from './UserProfile';
import DonateButton from './DonateButton';
import { DarkModeToggle } from './DarkModeToggle';
import StudentSelector from './StudentSelector';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { isTutor } = useSubscription();
  const { selectedStudentId, setSelectedStudentId } = useStudent();

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-background/80 backdrop-blur-lg border-b shadow-sm fixed top-0 z-50">
      <div 
        className="flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
        onClick={() => navigate('/')}
      >
        <Book className="h-6 w-6 text-primary" />
        <span className="text-xl font-display font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          SmartPrep
        </span>
      </div>
      
      <nav className="flex items-center justify-center flex-1 mx-8">
        <div className="flex items-center gap-1">
          {[
            { label: 'Home', path: '/' },
            ...(isAuthenticated ? [{ label: 'My Progress', path: '/progress' }] : []),
            ...(isAuthenticated && isTutor ? [{ label: 'Students', path: '/students' }] : []),
            { label: 'Questions', path: '/questions' },
            { label: 'About', path: '/about' },
          ].map((item) => (
            <NavLink key={item.path} href={item.path}>{item.label}</NavLink>
          ))}
        </div>
      </nav>

      <div className="flex items-center gap-4">
        {isAuthenticated && isTutor && (
          <StudentSelector
            selectedStudentId={selectedStudentId}
            onStudentChange={setSelectedStudentId}
          />
        )}
        
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <DonateButton />
          {isAuthenticated ? (
            <UserProfile />
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate('/login')} className="hidden sm:flex">
                <LogIn className="h-4 w-4 mr-2" />
                <span>Sign In</span>
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('/register')} className="hidden md:flex">
                <UserPlus className="h-4 w-4 mr-2" />
                <span>Register</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate(href)}
      className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-primary/5"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/0 group-hover:bg-primary/100 transition-all duration-300" />
    </button>
  );
};

export default Header;
