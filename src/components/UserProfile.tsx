
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { LogOut, User, BarChart, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSubscription } from '@/context/SubscriptionContext';
import { Badge } from '@/components/ui/badge';

const UserProfile = () => {
  const { user, logout } = useAuth();
  const { isSubscribed } = useSubscription();
  const navigate = useNavigate();

  if (!user) return null;

  const initials = user.name.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Avatar className="h-8 w-8 border border-primary/20">
            <AvatarFallback className="bg-primary/10 text-primary text-sm">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden md:block">{user.name}</span>
          {isSubscribed && (
            <Badge className="ml-1 text-xs py-0 h-5" variant="secondary">Premium</Badge>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/profile')} className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/profile?tab=subscription')} className="cursor-pointer">
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Subscription</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/progress')} className="cursor-pointer">
          <BarChart className="mr-2 h-4 w-4" />
          <span>My Progress</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
