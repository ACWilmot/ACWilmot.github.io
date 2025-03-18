
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between glass fixed top-0 z-50 animate-slide-down">
      <div 
        className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]" 
        onClick={() => navigate('/')}
      >
        <Book className="h-6 w-6 text-primary" />
        <span className="text-xl font-display font-medium tracking-tight">SmartPrep</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/quiz">Practice</NavLink>
      </nav>
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
