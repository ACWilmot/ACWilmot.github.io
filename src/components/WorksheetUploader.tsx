
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileType, X, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Subject, Difficulty } from '@/types/questionTypes';

const formSchema = z.object({
  title: z.string().min(3, {
    message: 'Worksheet title must be at least 3 characters.',
  }),
  subject: z.enum(['maths', 'english', 'verbal', 'all', 'timesTables'] as const),
  difficulty: z.enum(['easy', 'medium', 'hard', 'all'] as const),
  description: z.string().optional(),
  file: z.instanceof(File).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const WorksheetUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      subject: 'maths',
      difficulty: 'medium',
      description: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      form.setValue('file', selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    form.setValue('file', undefined);
  };

  const onSubmit = async (values: FormValues) => {
    setIsUploading(true);
    setUploadStatus('idle');
    setErrorMessage('');

    try {
      // Create a FormData object to send the file and form values
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('subject', values.subject);
      formData.append('difficulty', values.difficulty);
      
      if (values.description) {
        formData.append('description', values.description);
      }
      
      if (file) {
        formData.append('file', file);
      }

      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate a successful response
      console.log('Worksheet uploaded:', values);
      setUploadStatus('success');
      form.reset();
      setFile(null);
    } catch (error) {
      console.error('Error uploading worksheet:', error);
      setUploadStatus('error');
      setErrorMessage('Failed to upload worksheet. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Worksheet</CardTitle>
        <CardDescription>
          Create a new worksheet to practice with
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Worksheet Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter worksheet title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be displayed when selecting worksheets.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="maths">Mathematics</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="verbal">Verbal Reasoning</SelectItem>
                        <SelectItem value="timesTables">Times Tables</SelectItem>
                        <SelectItem value="all">Mixed Subjects</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="difficulty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Difficulty Level</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                        <SelectItem value="all">Mixed Difficulty</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter a brief description of this worksheet" 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="file"
              render={() => (
                <FormItem>
                  <FormLabel>Upload PDF Worksheet</FormLabel>
                  <FormControl>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                      {!file ? (
                        <>
                          <Upload className="h-10 w-10 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-500 mb-2">
                            Drag and drop your file here, or click to browse
                          </p>
                          <Input
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            id="file-upload"
                            onChange={handleFileChange}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => document.getElementById('file-upload')?.click()}
                          >
                            Select File
                          </Button>
                        </>
                      ) : (
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <FileType className="h-8 w-8 text-primary mr-2" />
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={removeFile}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload a PDF file containing the worksheet (max 10MB)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {uploadStatus === 'success' && (
              <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Success!</AlertTitle>
                <AlertDescription className="text-green-700">
                  Your worksheet has been uploaded successfully.
                </AlertDescription>
              </Alert>
            )}
            
            {uploadStatus === 'error' && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {errorMessage || 'Something went wrong. Please try again.'}
                </AlertDescription>
              </Alert>
            )}
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload Worksheet'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WorksheetUploader;
