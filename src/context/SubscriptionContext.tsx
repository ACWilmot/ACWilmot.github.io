
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';

export type SubscriptionTier = 'free' | 'premium';

interface SubscriptionContextType {
  isSubscribed: boolean;
  subscriptionTier: SubscriptionTier;
  subscriptionEnd: Date | null;
  isLoading: boolean;
  refreshSubscription: () => Promise<void>;
  createCheckoutSession: () => Promise<string | null>;
  openCustomerPortal: () => Promise<string | null>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [subscriptionTier, setSubscriptionTier] = useState<SubscriptionTier>('free');
  const [subscriptionEnd, setSubscriptionEnd] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshSubscription = async () => {
    if (!isAuthenticated || !user) {
      setIsSubscribed(false);
      setSubscriptionTier('free');
      setSubscriptionEnd(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      console.log("Refreshing subscription status...");
      
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) {
        throw error;
      }
      
      console.log("Subscription data:", data);
      setIsSubscribed(data.subscribed || false);
      setSubscriptionTier(data.subscription_tier || 'free');
      setSubscriptionEnd(data.subscription_end ? new Date(data.subscription_end) : null);
    } catch (error) {
      console.error('Error checking subscription:', error);
      toast.error("Error checking subscription status");
      setIsSubscribed(false);
      setSubscriptionTier('free');
    } finally {
      setIsLoading(false);
    }
  };

  const createCheckoutSession = async (): Promise<string | null> => {
    try {
      toast.info("Preparing checkout...");
      console.log("Creating checkout session...");
      
      const { data, error } = await supabase.functions.invoke('create-checkout');
      
      if (error) {
        console.error('Error creating checkout session:', error);
        toast.error("Failed to create checkout session");
        return null;
      }
      
      console.log("Checkout data returned:", data);
      
      if (data?.url) {
        return data.url;
      } else {
        console.error('No URL returned from checkout session');
        toast.error("Unexpected response from server");
        return null;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast.error("Failed to create checkout session");
      return null;
    }
  };

  const openCustomerPortal = async (): Promise<string | null> => {
    try {
      toast.info("Opening customer portal...");
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) {
        console.error('Error opening customer portal:', error);
        toast.error("Failed to open customer portal");
        return null;
      }
      
      if (data?.url) {
        return data.url;
      } else {
        toast.error("Unexpected response from server");
        return null;
      }
    } catch (error) {
      console.error('Error opening customer portal:', error);
      toast.error("Failed to open customer portal");
      return null;
    }
  };

  // Check subscription status whenever auth state changes
  useEffect(() => {
    if (isAuthenticated) {
      refreshSubscription();
    } else {
      setIsSubscribed(false);
      setSubscriptionTier('free');
      setSubscriptionEnd(null);
      setIsLoading(false);
    }
  }, [isAuthenticated, user?.id]);

  return (
    <SubscriptionContext.Provider
      value={{
        isSubscribed,
        subscriptionTier,
        subscriptionEnd,
        isLoading,
        refreshSubscription,
        createCheckoutSession,
        openCustomerPortal
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = (): SubscriptionContextType => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};
