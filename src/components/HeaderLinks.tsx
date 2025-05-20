
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';

export const HeaderLinks = () => {
  return (
    <>
      <NavLink 
        to="/progress" 
        className={({ isActive }) => 
          `px-3 py-2 rounded-md transition ${
            isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
          }`
        }
      >
        Progress
      </NavLink>
      <NavLink 
        to="/browse" 
        className={({ isActive }) => 
          `px-3 py-2 rounded-md transition flex items-center gap-1 ${
            isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
          }`
        }
      >
        <Search className="h-4 w-4" />
        Browse Questions
      </NavLink>
    </>
  );
};
