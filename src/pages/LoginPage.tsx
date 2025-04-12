
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Key, LogIn, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  rememberMe: z.boolean().optional(),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authAttempted, setAuthAttempted] = useState(false);
  const [loginStartTime, setLoginStartTime] = useState<number | null>(null);
  
  // Safely access auth context with retry mechanism
  const [authContext, setAuthContext] = useState<any>(null);
  const [authRetries, setAuthRetries] = useState(0);
  
  useEffect(() => {
    try {
      const auth = useAuth();
      setAuthContext(auth);
    } catch (error) {
      console.error("Error accessing auth context:", error);
      if (authRetries < 5) {
        setTimeout(() => {
          setAuthRetries(prev => prev + 1);
        }, 500);
      }
    }
  }, [authRetries]);
  
  const auth = authContext;

  // Handle timeout for login process
  useEffect(() => {
    if (loginStartTime && loading) {
      const timeoutId = setTimeout(() => {
        if (loading) {
          setLoading(false);
          setAuthError("Login is taking longer than expected. Please try again.");
          toast.error("Login timeout. Please try again.");
        }
      }, 10000); // 10 second timeout
      
      return () => clearTimeout(timeoutId);
    }
  }, [loginStartTime, loading]);

  // Redirect if already authenticated
  useEffect(() => {
    if (auth?.isAuthenticated) {
      console.log("User is authenticated, redirecting to home");
      navigate('/');
    }
  }, [auth?.isAuthenticated, navigate]);

  // Check for auth changes after login attempt
  useEffect(() => {
    if (authAttempted && auth?.isAuthenticated) {
      toast.success("Logged in successfully!");
      navigate('/');
    }
  }, [authAttempted, auth?.isAuthenticated, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      setAuthError(null);
      setLoginStartTime(Date.now());
      console.log("Attempting login with:", values.email);
      
      // Check if auth context is available
      if (!auth || !auth.login) {
        setAuthError("Authentication system is not available. Please try again later.");
        setLoading(false);
        return;
      }

      const success = await auth.login(values.email, values.password);
      setAuthAttempted(true);
      
      if (!success) {
        setAuthError("Invalid email or password. Please check your credentials and try again.");
        setLoading(false);
      }
      
      // Note: Don't set loading to false on success as the redirect will happen
    } catch (error) {
      console.error("Login error:", error);
      setAuthError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  }

  // If we can't access auth after several retries, show error
  if (authRetries >= 5 && !auth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Authentication System Error</h2>
          <p className="mb-4">We're having trouble initializing the authentication system. This might be due to browser privacy settings or network issues.</p>
          <Button onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            {authError && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{authError}</AlertDescription>
              </Alert>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input className="pl-10" placeholder="name@example.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input className="pl-10" type="password" placeholder="Enter your password" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center space-x-2">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Remember me</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                      Signing in...
                    </span>
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign In
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="underline text-primary hover:text-primary/90">
                Sign up
              </Link>
            </div>
            
            <div className="text-xs text-center text-muted-foreground">
              Having trouble logging in? Try using a non-incognito window or clearing your cookies.
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default LoginPage;
