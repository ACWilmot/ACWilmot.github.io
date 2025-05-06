
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, BookOpen } from 'lucide-react';
import { useTeacher } from '@/context/TeacherContext';

const CreateHomeworkForm: React.FC = () => {
  const { createHomework } = useTeacher();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('maths');
  const [difficulty, setDifficulty] = useState('easy');
  const [questionCount, setQuestionCount] = useState(10);
  const [dueDate, setDueDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title) return;
    
    setIsSubmitting(true);
    try {
      await createHomework({
        title,
        description: description || null,
        subject,
        difficulty,
        question_count: questionCount,
        due_date: dueDate || null
      });
      
      // Reset form
      setTitle('');
      setDescription('');
      setSubject('maths');
      setDifficulty('easy');
      setQuestionCount(10);
      setDueDate('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assign Homework</CardTitle>
        <CardDescription>
          Create a new homework assignment for this class
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <Input
              id="title"
              placeholder="Homework Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description (Optional)
            </label>
            <Textarea
              id="description"
              placeholder="Instructions for this homework"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isSubmitting}
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Select value={subject} onValueChange={setSubject} disabled={isSubmitting}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maths">Mathematics</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="verbal">Verbal Reasoning</SelectItem>
                  <SelectItem value="nonVerbal">Non-verbal Reasoning</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="difficulty" className="block text-sm font-medium mb-1">
                Difficulty
              </label>
              <Select value={difficulty} onValueChange={setDifficulty} disabled={isSubmitting}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="questionCount" className="block text-sm font-medium mb-1">
                Number of Questions
              </label>
              <Input
                id="questionCount"
                type="number"
                min={1}
                max={50}
                value={questionCount}
                onChange={(e) => setQuestionCount(parseInt(e.target.value, 10))}
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium mb-1">
                Due Date (Optional)
              </label>
              <Input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting || !title.trim()}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <BookOpen className="h-4 w-4 mr-2" />
                Assign Homework
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateHomeworkForm;
