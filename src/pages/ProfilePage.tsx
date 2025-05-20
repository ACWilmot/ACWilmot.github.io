
import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import { useSubscription } from '@/context/SubscriptionContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, User, Settings, LogOut, Crown, Loader2, Calendar, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { isSubscribed, subscriptionTier, subscriptionEnd, isLoading, refreshSubscription, createCheckoutSession, openCustomerPortal } = useSubscription();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
      return;
    }
    
    // Handle checkout success/cancel URL parameters
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('checkout_success') === 'true') {
      toast.success('Subscription checkout completed successfully!');
      refreshSubscription();
      navigate('/profile', { replace: true });
    } else if (searchParams.get('checkout_cancel') === 'true') {
      toast.info('Subscription checkout was canceled');
      navigate('/profile', { replace: true });
    }
  }, [user, location, navigate]);

  const handleSubscribe = async () => {
    const checkoutUrl = await createCheckoutSession();
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  const handleManageSubscription = async () => {
    const portalUrl = await openCustomerPortal();
    if (portalUrl) {
      window.location.href = portalUrl;
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  const initials = user.name.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your account and subscription
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary text-xl">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                    <div className="mt-2">
                      <Badge 
                        variant={isSubscribed ? "default" : "outline"}
                        className="flex gap-1 items-center"
                      >
                        {isSubscribed ? (
                          <>
                            <Crown className="h-3 w-3" /> 
                            Premium
                          </>
                        ) : (
                          <>Free</>
                        )}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    onClick={() => navigate('/profile')}
                  >
                    <User className="mr-2 h-4 w-4" /> Account
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    onClick={() => navigate('/profile?tab=subscription')}
                  >
                    <CreditCard className="mr-2 h-4 w-4" /> Subscription
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-destructive hover:text-destructive" 
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="account" className="flex-1">Account</TabsTrigger>
                <TabsTrigger value="subscription" className="flex-1">Subscription</TabsTrigger>
              </TabsList>
              
              <TabsContent value="account" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Details</CardTitle>
                    <CardDescription>
                      Your account information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Name</p>
                        <p>{user.name}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Email</p>
                        <p>{user.email}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Account Type</p>
                        <p className="flex items-center gap-2">
                          {subscriptionTier === 'premium' ? (
                            <>
                              <Crown className="h-4 w-4 text-primary" />
                              Premium Account
                            </>
                          ) : (
                            'Free Account'
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="subscription" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Status</CardTitle>
                    <CardDescription>
                      Manage your subscription plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {isLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    ) : (
                      <div>
                        <div className="space-y-4 mb-8">
                          <div className="p-4 bg-muted/40 rounded-lg">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant={isSubscribed ? "default" : "outline"}>
                                {isSubscribed ? 'Active' : 'Inactive'}
                              </Badge>
                              <span className="font-semibold">
                                {subscriptionTier === 'premium' ? 'Premium' : 'Free'} Plan
                              </span>
                            </div>
                            
                            {subscriptionEnd && (
                              <div className="flex items-center text-sm text-muted-foreground gap-1">
                                <Calendar className="h-4 w-4" /> 
                                Renews on {format(subscriptionEnd, 'PPP')}
                              </div>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className={`border ${subscriptionTier === 'free' ? 'border-primary' : ''}`}>
                              <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                  Free
                                  {subscriptionTier === 'free' && <Badge variant="outline">Current</Badge>}
                                </CardTitle>
                                <CardDescription>Limited access</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                  <li>Combined test with all subjects</li>
                                  <li>All difficulties and year levels</li>
                                  <li>Limited to 10 questions per quiz</li>
                                  <li>Basic results tracking</li>
                                </ul>
                              </CardContent>
                              <CardFooter>
                                <p className="text-2xl font-bold">£0<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                              </CardFooter>
                            </Card>
                            
                            <Card className={`border ${subscriptionTier === 'premium' ? 'border-primary' : ''}`}>
                              <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                  Premium
                                  {subscriptionTier === 'premium' && <Badge>Current</Badge>}
                                </CardTitle>
                                <CardDescription>Full access</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                  <li>Access to all subjects individually</li>
                                  <li>Unlimited questions per quiz</li>
                                  <li>Filter by difficulty and year level</li>
                                  <li>Comprehensive progress tracking</li>
                                  <li>Detailed results and explanations</li>
                                </ul>
                              </CardContent>
                              <CardFooter>
                                <p className="text-2xl font-bold">£9.99<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                              </CardFooter>
                            </Card>
                          </div>
                        </div>
                        
                        {isSubscribed ? (
                          <Button onClick={handleManageSubscription} className="w-full">
                            Manage Subscription
                          </Button>
                        ) : (
                          <Button onClick={handleSubscribe} className="w-full">
                            Upgrade to Premium
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
