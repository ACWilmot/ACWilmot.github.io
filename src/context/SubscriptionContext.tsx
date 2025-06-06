import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionState {
  isSubscribed: boolean;
  subscriptionTier: string | null;
  subscriptionEnd: string | null;
  isLoading: boolean;
  isCheckoutLoading: boolean;
  isPortalLoading: boolean;
  lastChecked: Date | null;
}

interface SubscriptionContextType {
  isSubscribed: boolean;
  subscriptionTier: string | null;
  subscriptionEnd: string | null;
  isLoading: boolean;
  isTutor: boolean;
  checkSubscription: () => Promise<void>;
  createCheckoutSession: (tier?: 'premium' | 'tutor') => Promise<void>;
  openCustomerPortal: () => Promise<void>;
  isCheckoutLoading: boolean;
  isPortalLoading: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  const [state, setState] = useState<SubscriptionState>({
    isSubscribed: false,
    subscriptionTier: null,
    subscriptionEnd: null,
    isLoading: false,
    isCheckoutLoading: false,
    isPortalLoading: false,
    lastChecked: null,
  });

  // Check subscription status when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      checkSubscription();
    } else {
      // Reset state if not authenticated
      setState({
        isSubscribed: false,
        subscriptionTier: null,
        subscriptionEnd: null,
        isLoading: false,
        isCheckoutLoading: false,
        isPortalLoading: false,
        lastChecked: null,
      });
    }
  }, [isAuthenticated]);

  // Function to check subscription status
  const checkSubscription = async (): Promise<void> => {
    if (!isAuthenticated || !user) return;

    try {
      setState(prev => ({ ...prev, isLoading: true }));
      console.log("Checking subscription status...");

      const { data, error } = await supabase.functions.invoke('check-subscription');

      if (error) {
        console.error("Error checking subscription:", error);
        toast({
          title: "Error",
          description: "Failed to check subscription status",
          variant: "destructive",
        });
        return;
      }

      console.log("Subscription check response:", data);
      
      setState(prev => ({
        ...prev,
        isSubscribed: data.subscribed || false,
        subscriptionTier: data.subscription_tier || null,
        subscriptionEnd: data.subscription_end || null,
        isLoading: false,
        lastChecked: new Date(),
      }));

      if (data.subscribed) {
        toast({
          title: "Subscription Active",
          description: `You have an active ${data.subscription_tier} subscription`,
        });
      }
    } catch (error) {
      console.error("Error checking subscription:", error);
      toast({
        title: "Error",
        description: "Failed to check subscription status",
        variant: "destructive",
      });
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  // Function to create checkout session
  const createCheckoutSession = async (tier: 'premium' | 'tutor' = 'premium'): Promise<void> => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to subscribe",
        variant: "destructive",
      });
      return;
    }

    try {
      setState(prev => ({ ...prev, isCheckoutLoading: true }));
      console.log("Creating checkout session for tier:", tier);

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { tier }
      });

      if (error) {
        console.error("Error creating checkout session:", error);
        toast({
          title: "Error",
          description: "Failed to create checkout session",
          variant: "destructive",
        });
        return;
      }

      if (!data.url) {
        console.error("No checkout URL returned");
        toast({
          title: "Error",
          description: "Failed to create checkout session",
          variant: "destructive",
        });
        return;
      }

      console.log("Checkout session created:", data);
      
      // Open Stripe checkout in current tab
      window.location.href = data.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast({
        title: "Error",
        description: "Failed to create checkout session",
        variant: "destructive",
      });
    } finally {
      setState(prev => ({ ...prev, isCheckoutLoading: false }));
    }
  };

  // Function to open customer portal
  const openCustomerPortal = async (): Promise<void> => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to manage your subscription",
        variant: "destructive",
      });
      return;
    }

    try {
      setState(prev => ({ ...prev, isPortalLoading: true }));
      console.log("Opening customer portal...");

      const { data, error } = await supabase.functions.invoke('customer-portal');

      if (error) {
        console.error("Error opening customer portal:", error);
        toast({
          title: "Error",
          description: "Failed to open customer portal",
          variant: "destructive",
        });
        return;
      }

      if (!data.url) {
        console.error("No portal URL returned");
        toast({
          title: "Error", 
          description: "Failed to open customer portal",
          variant: "destructive",
        });
        return;
      }

      console.log("Customer portal session created:", data);
      
      // Open Stripe customer portal in current tab
      window.location.href = data.url;
    } catch (error) {
      console.error("Error opening customer portal:", error);
      toast({
        title: "Error",
        description: "Failed to open customer portal",
        variant: "destructive",
      });
    } finally {
      setState(prev => ({ ...prev, isPortalLoading: false }));
    }
  };

  const isTutor = state.subscriptionTier === 'tutor';

  return (
    <SubscriptionContext.Provider 
      value={{
        isSubscribed: state.isSubscribed,
        subscriptionTier: state.subscriptionTier,
        subscriptionEnd: state.subscriptionEnd,
        isLoading: state.isLoading,
        isTutor,
        checkSubscription,
        createCheckoutSession,
        openCustomerPortal,
        isCheckoutLoading: state.isCheckoutLoading,
        isPortalLoading: state.isPortalLoading,
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
