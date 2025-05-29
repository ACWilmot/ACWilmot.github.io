import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Loader2, CreditCard, UserRound, Settings2, ArrowLeft, Mail, Lock, Key, Check } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { Separator } from '@/components/ui/separator';

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
  const [isPasswordResetLoading, setIsPasswordResetLoading] = useState(false);
  
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

    // If tab parameter is present, set active tab
    const tabParam = searchParams.get('tab');
    if (tabParam && ['account', 'subscription', 'security'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams, navigate]);

  // Redirect if not authenticated
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Function to send password reset email
  const handlePasswordReset = async () => {
    if (!user?.email) return;
    
    try {
      setIsPasswordResetLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
        redirectTo: `${window.location.origin}/profile?tab=security`,
      });
      
      if (error) {
        throw error;
      }
      
      toast.success('Password reset email has been sent to your inbox');
    } catch (error) {
      console.error('Password reset error:', error);
      toast.error('Failed to send password reset email');
    } finally {
      setIsPasswordResetLoading(false);
    }
  };

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

  // Handle premium subscription checkout
  const handlePremiumCheckout = async () => {
    await createCheckoutSession('premium');
  };

  // Handle tutor subscription checkout  
  const handleTutorCheckout = async () => {
    await createCheckoutSession('tutor');
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
              My Account
            </h1>
            <p className="text-muted-foreground">
              Manage your personal details and subscription
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <div className="border-b">
            <div className="container max-w-5xl mx-auto">
              <TabsList className="w-full -mb-px">
                <TabsTrigger value="account" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="subscription" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Subscription
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Security
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <div className="container max-w-5xl mx-auto mt-6 space-y-6">
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                  <CardDescription>View and update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarFallback className="bg-primary/10 text-primary text-xl">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-medium">{user.name}</h3>
                      <p className="text-muted-foreground">{user.email}</p>
                      <div className="mt-2">
                        <Badge variant={isSubscribed ? "default" : "outline"} className="mt-1">
                          {isSubscribed ? `${subscriptionTier} Plan` : 'Free Plan'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={user.name} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={user.email} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Account Role</Label>
                      <Input id="role" value={user.role || 'parent'} readOnly className="capitalize" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plan">Current Plan</Label>
                      <Input id="plan" value={isSubscribed ? `${subscriptionTier}` : 'Free'} readOnly />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-3 justify-between">
                  <Button variant="outline" onClick={() => navigate('/profile?tab=security')}>
                    <Lock className="h-4 w-4 mr-2" />
                    Security Settings
                  </Button>
                  <Button variant="destructive" onClick={logout}>
                    Sign Out
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="subscription" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Free Plan Card */}
                <Card className={`overflow-hidden ${!isSubscribed ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex justify-between items-center">
                      <span>Free Plan</span>
                      {!isSubscribed && <Badge variant="default">Current</Badge>}
                    </CardTitle>
                    <div className="text-3xl font-bold">$0.00<span className="text-base font-normal text-muted-foreground">/month</span></div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-6 text-muted-foreground">Basic access to practice questions with limitations.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Combined test with all subjects</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Limited to 10 questions per practice</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Basic results summary</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {isSubscribed ? (
                      <Button variant="outline" className="w-full" disabled>Free Features</Button>
                    ) : (
                      <Button variant="outline" className="w-full" disabled>Current Plan</Button>
                    )}
                  </CardFooter>
                </Card>

                {/* Premium Plan Card */}
                <Card className={`overflow-hidden ${isSubscribed && subscriptionTier === 'premium' ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="bg-primary/10">
                    <CardTitle className="flex justify-between items-center">
                      <span>Premium Plan</span>
                      {isSubscribed && subscriptionTier === 'premium' && <Badge variant="default">Current</Badge>}
                    </CardTitle>
                    <div className="text-3xl font-bold">$4.99<span className="text-base font-normal text-muted-foreground">/month</span></div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-6 text-muted-foreground">Full access to all features and premium content.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>All free plan features</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Individual subject selection</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Difficulty level selection</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Times tables practice</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Progress tracking</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Unlimited practice questions</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {isSubscribed && subscriptionTier === 'premium' ? (
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
                    ) : (
                      <Button 
                        className="w-full"
                        onClick={handlePremiumCheckout}
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
                            {isSubscribed ? 'Switch to Premium' : 'Subscribe Now'}
                          </>
                        )}
                      </Button>
                    )}
                  </CardFooter>
                </Card>

                {/* Tutor Plan Card */}
                <Card className={`overflow-hidden ${isSubscribed && subscriptionTier === 'tutor' ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                    <CardTitle className="flex justify-between items-center">
                      <span>Tutor Plan</span>
                      {isSubscribed && subscriptionTier === 'tutor' && <Badge variant="default">Current</Badge>}
                    </CardTitle>
                    <div className="text-3xl font-bold">$19.99<span className="text-base font-normal text-muted-foreground">/month</span></div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-6 text-muted-foreground">Perfect for tutors managing multiple students.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>All premium features</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Create student sub-profiles</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Switch between student accounts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Track individual student progress</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-1" />
                        <span>Unlimited students</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {isSubscribed && subscriptionTier === 'tutor' ? (
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
                    ) : (
                      <Button 
                        className="w-full"
                        onClick={handleTutorCheckout}
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
                            {isSubscribed ? 'Upgrade to Tutor' : 'Subscribe Now'}
                          </>
                        )}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>

              {isSubscribed && (
                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Details</CardTitle>
                    <CardDescription>Information about your current subscription</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label className="text-sm text-muted-foreground">Status</Label>
                        <p className="font-medium">Active</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Plan</Label>
                        <p className="font-medium capitalize">{subscriptionTier}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Next billing date</Label>
                        <p className="font-medium">{formatDate(subscriptionEnd)}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Price</Label>
                        <p className="font-medium">
                          {subscriptionTier === 'tutor' ? '$19.99/month' : '$4.99/month'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
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
                        "Manage Payment Method"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Password Management</h3>
                    <p className="text-muted-foreground text-sm">Change your account password for better security</p>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      variant="outline"
                      onClick={handlePasswordReset}
                      disabled={isPasswordResetLoading}
                      className="w-full sm:w-auto"
                    >
                      {isPasswordResetLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Key className="h-4 w-4 mr-2" />
                          Send Password Reset Email
                        </>
                      )}
                    </Button>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We'll send a password reset link to your email address: {user.email}
                    </p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="text-lg font-medium">Account Information</h3>
                    <p className="text-muted-foreground text-sm mb-4">Your secure account details</p>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label className="text-sm text-muted-foreground">Email Address</Label>
                        <p className="font-medium">{user.email}</p>
                        <p className="text-xs text-muted-foreground mt-1">Used for login and notifications</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Last Sign In</Label>
                        <p className="font-medium">Today</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => navigate('/profile?tab=account')}>
                    Back to Profile
                  </Button>
                  <Button variant="destructive" onClick={logout}>
                    Sign Out
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default ProfilePage;
