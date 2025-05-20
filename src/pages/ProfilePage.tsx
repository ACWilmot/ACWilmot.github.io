
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Loader2, CreditCard, UserRound, Settings2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import { format } from 'date-fns';

const ProfilePage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { 
    isSubscribed, 
    subscriptionTier, 
    subscriptionEnd, 
    isLoading: subscriptionLoading,
    checkSubscription,
    createCheckoutSession,
    openCustomerPortal,
    isCheckoutLoading,
    isPortalLoading
  } = useSubscription();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("account");
  
  // Handle query params for checkout success/failure
  useEffect(() => {
    const checkoutSuccess = searchParams.get('checkoutSuccess');
    const checkoutCanceled = searchParams.get('checkoutCanceled');
    
    if (checkoutSuccess === 'true') {
      toast.success('Thank you for subscribing!');
      checkSubscription(); // Refresh subscription status
      setActiveTab('subscription');
      
      // Clean up URL
      navigate('/profile', { replace: true });
    } else if (checkoutCanceled === 'true') {
      toast.info('Subscription checkout was canceled');
      
      // Clean up URL
      navigate('/profile', { replace: true });
    }
  }, [searchParams, navigate]);

  // Redirect if not authenticated
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    try {
      return format(new Date(dateString), 'PPP'); // e.g., "Apr 29, 2023"
    } catch (error) {
      return 'Invalid date';
    }
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user?.name) return '?';
    return user.name.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 container px-4 pt-32 pb-16 max-w-5xl mx-auto">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p>Loading profile...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 pt-32 pb-16 max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate('/')}
            className="h-9 w-9 rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <div>
            <h1 className="text-3xl font-display font-bold flex items-center gap-2">
              <UserRound className="h-6 w-6 text-primary" />
              Profile
            </h1>
            <p className="text-muted-foreground">
              Manage your account and subscription
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="account" className="flex-1">Account</TabsTrigger>
            <TabsTrigger value="subscription" className="flex-1">Subscription</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>View and manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-primary/10 text-primary text-xl">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <div className="mt-1">
                      <Badge variant={isSubscribed ? "default" : "outline"} className="mt-1">
                        {isSubscribed ? `${subscriptionTier} Plan` : 'Free Plan'}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Account Role</h4>
                  <p className="text-sm capitalize">{user.role || 'student'}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setActiveTab('subscription')}>
                  Manage Subscription
                </Button>
                <Button variant="destructive" onClick={logout}>
                  Logout
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="subscription" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Subscription</CardTitle>
                    <CardDescription>Manage your subscription status</CardDescription>
                  </div>
                  {subscriptionLoading && (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-sm font-medium">Current Plan</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant={isSubscribed ? "default" : "outline"}>
                        {isSubscribed ? `${subscriptionTier || 'Premium'}` : 'Free'}
                      </Badge>
                      {isSubscribed && (
                        <p className="text-sm text-muted-foreground">
                          Renews on {formatDate(subscriptionEnd)}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {isSubscribed ? (
                    <>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Premium Features</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Individual subject selection</li>
                          <li>Difficulty level selection</li>
                          <li>Times tables practice</li>
                          <li>Progress tracking</li>
                          <li>Unlimited practice questions</li>
                        </ul>
                      </div>
                      <Button
                        className="w-full"
                        onClick={openCustomerPortal}
                        disabled={isPortalLoading}
                      >
                        {isPortalLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Opening Portal...
                          </>
                        ) : (
                          <>
                            <Settings2 className="h-4 w-4 mr-2" />
                            Manage Subscription
                          </>
                        )}
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Free Plan Limitations</h4>
                        <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                          <li>Combined test with all subjects only</li>
                          <li>Limited to 10 questions per practice</li>
                          <li>No progress tracking</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Upgrade to Premium</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Individual subject selection</li>
                          <li>Difficulty level selection</li>
                          <li>Times tables practice</li>
                          <li>Progress tracking</li>
                          <li>Unlimited practice questions</li>
                        </ul>
                      </div>
                      <Button
                        className="w-full"
                        onClick={createCheckoutSession}
                        disabled={isCheckoutLoading}
                      >
                        {isCheckoutLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <CreditCard className="h-4 w-4 mr-2" />
                            Subscribe Now - $14.99/month
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Secure payment processing via Stripe
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ProfilePage;
