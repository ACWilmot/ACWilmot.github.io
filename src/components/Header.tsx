
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, LogIn, UserPlus, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import UserProfile from './UserProfile';
import DonateButton from './DonateButton';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userRole } = useAuth();

  return (
    <header className="w-full py-3 px-4 md:px-6 flex items-center justify-between glass fixed top-0 z-50 animate-slide-down">
      <div 
        className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]" 
        onClick={() => navigate('/')}
      >
        <Book className="h-5 w-5 md:h-6 md:w-6 text-primary" />
        <span className="text-lg md:text-xl font-display font-medium tracking-tight">SmartPrep</span>
      </div>
      
      <nav className="hidden md:flex items-center justify-center flex-1 mx-6">
        <div className="flex items-center gap-4 md:gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/quiz">Practice</NavLink>
          {isAuthenticated && userRole === 'student' && <NavLink href="/progress">My Progress</NavLink>}
          {isAuthenticated && userRole === 'teacher' && <NavLink href="/teacher/dashboard">Dashboard</NavLink>}
          {isAuthenticated && <NavLink href="/admin">Admin</NavLink>}
          <NavLink href="/questions">Questions</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
      </nav>

      <div className="flex items-center gap-2">
        <DonateButton />
        {isAuthenticated ? (
          <UserProfile />
        ) : (
          <div className="flex items-center gap-1 md:gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')} className="hidden sm:flex">
              <LogIn className="h-4 w-4 mr-2" />
              <span>Sign In</span>
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigate('/register')} className="hidden md:flex">
              <UserPlus className="h-4 w-4 mr-2" />
              <span>Register</span>
            </Button>
            
            <Button variant="ghost" size="sm" onClick={() => navigate('/teacher/login')}>
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline ml-1.5">Teacher</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate(href)}
      className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </button>
  );
};

export default Header;
