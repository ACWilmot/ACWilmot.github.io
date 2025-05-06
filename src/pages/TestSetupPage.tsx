import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Class name must be at least 2 characters.",
  }),
  description: z.string().optional(),
});

const TestSetupPage = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const [classData, setClassData] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    if (form) {
      setClassData({
        name: form.getValues("name"),
        description: form.getValues("description"),
      });
    }
  }, [form]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setClassData({
      ...classData,
      [e.target.name]: e.target.value,
    });
  };

  // Fix the class creation to include class_code
  const handleCreateClass = async () => {
    if (!classData.name) {
      toast.error("Class name is required");
      return;
    }
    
    try {
      setLoading(true);
      
      // Add class_code to the classData
      const classWithCode = {
        ...classData,
        teacher_id: user?.id,
        class_code: Math.random().toString(36).substring(2, 7).toUpperCase() // Generate a random code
      };
      
      const { data, error } = await supabase
        .from('classes')
        .insert(classWithCode);
        
      if (error) throw error;
      toast.success(`Class "${classData.name}" created successfully`);
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error creating class:", error);
      toast.error("Failed to create class");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Test Class Setup</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Create a New Class</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreateClass)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Class Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter class name" 
                          {...field} 
                          onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e);
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the name that students will see.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter class description" 
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e);
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Briefly describe the class.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Create Class"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TestSetupPage;
