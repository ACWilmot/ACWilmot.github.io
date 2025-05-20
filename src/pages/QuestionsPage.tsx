
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Question, Subject, Difficulty } from '@/types/questionTypes';
import { v4 as uuidv4 } from 'uuid';

const QuestionsPage = () => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [explanation, setExplanation] = useState('');
  const [subject, setSubject] = useState<Subject>('maths');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!questionText.trim()) {
      alert('Please enter a question');
      return;
    }

    if (options.some(option => !option.trim())) {
      alert('All options must be filled');
      return;
    }

    if (!correctAnswer) {
      alert('Please select a correct answer');
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
      difficulty
    };

    console.log('New Question Created:', newQuestion);

    // Reset form
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
    setExplanation('');

    alert('Question created successfully!');
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
          </div>
          
          <Button type="submit" className="w-full md:w-auto">Create Question</Button>
        </form>
      </div>
    </Layout>
  );
};

export default QuestionsPage;
