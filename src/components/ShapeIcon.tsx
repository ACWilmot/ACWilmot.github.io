
import React from 'react';

interface ShapeIconProps {
  className?: string;
}

const ShapeIcon: React.FC<ShapeIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="3 6 21 6 21 18 3 18 3 6" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
    </svg>
  );
};

export default ShapeIcon;
