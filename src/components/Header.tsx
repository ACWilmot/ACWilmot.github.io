
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import UserProfile from './UserProfile';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between glass fixed top-0 z-50 animate-slide-down">
      <div 
        className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]" 
        onClick={() => navigate('/')}
      >
        <Book className="h-6 w-6 text-primary" />
        <span className="text-xl font-display font-medium tracking-tight">SmartPrep</span>
      </div>
      
      {/* Center the navigation items */}
      <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
        <div className="flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/quiz">Practice</NavLink>
          {isAuthenticated && <NavLink href="/progress">My Progress</NavLink>}
          <NavLink href="/about">About</NavLink>
        </div>
      </nav>

      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <UserProfile />
        ) : (
          <>
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
              <LogIn className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigate('/register')}>
              <UserPlus className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Register</span>
            </Button>
          </>
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
