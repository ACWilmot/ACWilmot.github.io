
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DonateButton = () => {
  const handleDonateClick = () => {
    // PayPal donation link with the specified email
    window.open('https://www.paypal.com/donate?business=Andrewwilmot2%40hotmail.co.uk&item_name=Support+SmartPrep&currency_code=GBP', '_blank');
  };

  return (
    <Button 
      onClick={handleDonateClick}
      variant="outline" 
      size="sm"
      className="bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary"
    >
      <Heart className="h-4 w-4 mr-2" />
      <span className="hidden sm:inline">Donate</span>
    </Button>
  );
};

export default DonateButton;
