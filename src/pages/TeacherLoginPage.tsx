
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Mail, Key, LogIn, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  rememberMe: z.boolean().optional(),
});

const TeacherLoginPage = () => {
  const navigate = useNavigate();
  const { teacherLogin, isAuthenticated, userRole, user } = useAuth();
  
  // Add debugging console log
  React.useEffect(() => {
    console.log("Current auth state in TeacherLoginPage:", { isAuthenticated, userRole, userId: user?.id });
  }, [isAuthenticated, userRole, user]);

  // Redirect if already authenticated as a teacher
  React.useEffect(() => {
    if (isAuthenticated && userRole === 'teacher') {
      console.log("Teacher authenticated, redirecting to dashboard");
      navigate('/teacher/dashboard');
    }
  }, [isAuthenticated, userRole, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Attempting teacher login with:", values.email);
    const success = await teacherLogin(values.email, values.password);
    
    if (success) {
      console.log("Teacher login successful, redirecting");
      // Redirect to teacher dashboard after login
      setTimeout(() => {
        navigate('/teacher/dashboard');
      }, 1000);
    } else {
      console.log("Teacher login failed");
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-2">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Teacher Login</CardTitle>
            <CardDescription className="text-center">
              Sign in to access your teacher dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                          <Input className="pl-10" placeholder="teacher@example.com" {...field} />
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

                <Button type="submit" className="w-full" size="lg">
                  <LogIn className="mr-2 h-4 w-4" />
                  Teacher Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground mt-2">
              Not a teacher?{" "}
              <Link to="/login" className="underline text-primary hover:text-primary/90">
                Student login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default TeacherLoginPage;
