
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Question, Subject, Difficulty, VerbalType } from '@/types/questionTypes';
import { v4 as uuidv4 } from 'uuid';
import YearSelector from '@/components/YearSelector';
import VerbalTypesSelector from '@/components/VerbalTypesSelector';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const QuestionsPage = () => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [explanation, setExplanation] = useState('');
  const [subject, setSubject] = useState<Subject>('maths');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [year, setYear] = useState<number | null>(null);
  const [verbalType, setVerbalType] = useState<VerbalType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubjectChange = (newSubject: Subject) => {
    setSubject(newSubject);
    // Reset verbal type when switching away from verbal
    if (newSubject !== 'verbal') {
      setVerbalType(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!questionText.trim()) {
      toast({
        title: "Missing question",
        description: "Please enter a question",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (options.some(option => !option.trim())) {
      toast({
        title: "Incomplete options",
        description: "All options must be filled",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!correctAnswer) {
      toast({
        title: "Missing answer",
        description: "Please select a correct answer",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Validate verbal type selection for verbal questions
    if (subject === 'verbal' && !verbalType) {
      toast({
        title: "Missing verbal type",
        description: "Please select a verbal reasoning type",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare the data for submission
      const questionData = {
        subject: subject,
        text: questionText,
        options: options,
        correct_answer: correctAnswer,
        explanation: explanation,
        difficulty: difficulty,
        year: year,
        verbal_type: subject === 'verbal' ? verbalType : null,
      };

      // Save to Supabase
      const { data, error } = await supabase
        .from('questions')
        .insert([questionData])
        .select();

      if (error) {
        throw error;
      }

      // Reset form
      setQuestionText('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
      setExplanation('');
      setVerbalType(null);

      toast({
        title: "Question created",
        description: "Question has been successfully added to the database.",
        variant: "default"
      });
    } catch (error) {
      console.error('Error creating question:', error);
      toast({
        title: "Error creating question",
        description: "There was a problem saving your question.",
        variant: "destructive"
      });
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
                  onChange={(e) => handleSubjectChange(e.target.value as Subject)}
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
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Year Group</label>
            <YearSelector 
              selectedYear={year}
              onChange={setYear}
            />
          </div>

          {subject === 'verbal' && (
            <div className="mb-4">
              <label className="block mb-2">Verbal Reasoning Type</label>
              <div className="p-4 border rounded-lg">
                <select
                  value={verbalType || ''}
                  onChange={(e) => setVerbalType(e.target.value as VerbalType || null)}
                  className="w-full px-3 py-2 border rounded"
                  required={subject === 'verbal'}
                >
                  <option value="">Select a verbal reasoning type...</option>
                  <option value="insertLetter">Insert a Letter</option>
                  <option value="twoOddOnes">Two Odd Ones Out</option>
                  <option value="relatedWords">Related Words</option>
                  <option value="closestMeaning">Closest Meaning</option>
                  <option value="hiddenWord">Hidden Word</option>
                  <option value="missingWord">Missing Word</option>
                  <option value="lettersNumbers">Letters for Numbers</option>
                  <option value="moveLetter">Move a Letter</option>
                  <option value="letterSeries">Letter Series</option>
                  <option value="wordConnections">Word Connections</option>
                  <option value="numberSeries">Number Series</option>
                  <option value="compoundWords">Compound Words</option>
                  <option value="makeWord">Make a Word</option>
                  <option value="letterConnections">Letter Connections</option>
                  <option value="readingInfo">Reading Information</option>
                  <option value="oppositeMeaning">Opposite Meaning</option>
                  <option value="completeSum">Complete the Sum</option>
                  <option value="relatedNumbers">Related Numbers</option>
                  <option value="wordNumberCodes">Word-Number Codes</option>
                  <option value="completeWord">Complete the Word</option>
                  <option value="sameMeaning">Same Meaning</option>
                </select>
                <p className="text-sm text-muted-foreground mt-2">
                  Select the specific type of verbal reasoning question
                </p>
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Question...' : 'Create Question'}
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default QuestionsPage;
