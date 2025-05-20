import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useQuiz } from '@/context/QuizContext';
import { Question } from '@/types/questionTypes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
  answer1: z.string().min(1, {
    message: "Answer 1 must be at least 1 character.",
  }),
  answer2: z.string().min(1, {
    message: "Answer 2 must be at least 1 character.",
  }),
  answer3: z.string().min(1, {
    message: "Answer 3 must be at least 1 character.",
  }),
  answer4: z.string().min(1, {
    message: "Answer 4 must be at least 1 character.",
  }),
  correctAnswer: z.enum(['1', '2', '3', '4']),
  subject: z.enum(['maths', 'english', 'verbal', 'nonVerbal', 'timesTables']),
  difficulty: z.enum(['easy', 'medium', 'hard', 'all']),
  topic: z.string().optional(),
  image: z.string().optional(),
  worksheet: z.string().optional(),
  explanation: z.string().optional(),
  isPublished: z.boolean().default(false).optional(),
})

const QuestionsPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('list');
  const { addQuestion } = useQuiz();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      correctAnswer: "1",
      subject: "maths",
      difficulty: "medium",
      topic: "",
      image: "",
      worksheet: "",
      explanation: "",
      isPublished: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const newQuestion = {
        question: values.question,
        answers: [
          values.answer1,
          values.answer2,
          values.answer3,
          values.answer4,
        ],
        correctAnswer: parseInt(values.correctAnswer),
        subject: values.subject,
        difficulty: values.difficulty,
        topic: values.topic,
        image: values.image,
        worksheet: values.worksheet,
        explanation: values.explanation,
        isPublished: values.isPublished || false,
      };

      addQuestion(newQuestion);
      toast.success("Question added successfully!");
      form.reset();
      setActiveTab('list');
    } catch (error: any) {
      console.error("Error adding question:", error);
      toast.error(error?.message || "Failed to add question");
    }
  };

  return (
    <Layout>
      <div className="container max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-8">Questions</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list">Question List</TabsTrigger>
            <TabsTrigger value="add">Add Question</TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="space-y-4 mt-6">
            {loading && <p>Loading questions...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {questions.length === 0 && !loading && (
              <p>No questions available. Add some questions!</p>
            )}
            {questions.length > 0 && (
              <ul>
                {questions.map((question) => (
                  <li key={question.question} className="border rounded-md p-4">
                    {question.question}
                  </li>
                ))}
              </ul>
            )}
          </TabsContent>

          <TabsContent value="add" className="space-y-6 mt-6">
            <div className="container max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold mb-4">Add New Question</h1>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Question</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter the question" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="answer1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Answer 1</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter answer 1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="answer2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Answer 2</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter answer 2" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="answer3"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Answer 3</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter answer 3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="answer4"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Answer 4</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter answer 4" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="correctAnswer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correct Answer</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select correct answer" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Answer 1</SelectItem>
                            <SelectItem value="2">Answer 2</SelectItem>
                            <SelectItem value="3">Answer 3</SelectItem>
                            <SelectItem value="4">Answer 4</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="maths">Maths</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="verbal">Verbal Reasoning</SelectItem>
                              <SelectItem value="nonVerbal">Non-Verbal Reasoning</SelectItem>
                              <SelectItem value="timesTables">Times Tables</SelectItem>
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
                          <FormLabel>Difficulty</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select difficulty" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="easy">Easy</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="hard">Hard</SelectItem>
                              <SelectItem value="all">All</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Topic (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter topic" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter image URL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="worksheet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Worksheet (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter worksheet name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="explanation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Explanation (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter explanation"
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
                    name="isPublished"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Published</FormLabel>
                          <FormDescription>
                            Publish this question to make it available for quizzes.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Add Question</Button>
                </form>
              </Form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default QuestionsPage;
