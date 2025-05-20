
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Question, Subject, Difficulty } from '@/types/questionTypes';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import YearSelector from '@/components/YearSelector';

const QuestionsPage = () => {
  const { user } = useAuth();
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [explanation, setExplanation] = useState('');
  const [subject, setSubject] = useState<Subject>('maths');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [year, setYear] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation
      if (!questionText.trim()) {
        toast.error('Please enter a question');
        return;
      }

      if (options.some(option => !option.trim())) {
        toast.error('All options must be filled');
        return;
      }

      if (!correctAnswer) {
        toast.error('Please select a correct answer');
        return;
      }

      // Create new question
      const newQuestion: Question = {
        id: uuidv4(),
        subject,
        text: questionText,
        options,
        correctAnswer,
        explanation,
        difficulty,
        year
      };

      console.log('New Question Created:', newQuestion);

      // Save to Supabase
      const { error } = await supabase
        .from('questions')
        .insert({
          id: newQuestion.id,
          subject: newQuestion.subject,
          text: newQuestion.text,
          options: newQuestion.options,
          correct_answer: newQuestion.correctAnswer,
          explanation: newQuestion.explanation,
          difficulty: newQuestion.difficulty,
          year: newQuestion.year,
          user_id: user?.id
        });

      if (error) {
        console.error('Error saving question:', error);
        toast.error('Failed to save question: ' + error.message);
        return;
      }

      // Reset form
      setQuestionText('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
      setExplanation('');
      
      toast.success('Question created successfully!');
    } catch (error) {
      console.error('Error in question submission:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Create a New Question</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">
              Question
              <Textarea 
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Enter your question here"
                className="mt-1 w-full"
                rows={3}
              />
            </label>
          </div>
          
          <div>
            <label className="block mb-2">Options</label>
            <div className="space-y-2">
              {options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="correctAnswer"
                    value={option}
                    checked={correctAnswer === option}
                    onChange={() => setCorrectAnswer(option)}
                    className="mr-2"
                    disabled={!option.trim()}
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="flex-1 px-3 py-2 border rounded"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">Select the radio button for the correct answer</p>
          </div>
          
          <div>
            <label className="block mb-2">
              Explanation
              <Textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Explain why the correct answer is correct"
                className="mt-1 w-full"
                rows={3}
              />
            </label>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block mb-2">
                Subject
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value as Subject)}
                  className="mt-1 block w-full px-3 py-2 border rounded"
                >
                  <option value="maths">Maths</option>
                  <option value="english">English</option>
                  <option value="verbal">Verbal</option>
                  <option value="history">History</option>
                  <option value="geography">Geography</option>
                  <option value="religiousEd">Religious Ed</option>
                </select>
              </label>
            </div>
            
            <div>
              <label className="block mb-2">
                Difficulty
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                  className="mt-1 block w-full px-3 py-2 border rounded"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
            </div>
            
            <div className="w-full">
              <label className="block mb-2">Year Level</label>
              <YearSelector
                selectedYear={year}
                onChange={setYear}
                className="mt-1"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Question'}
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default QuestionsPage;
