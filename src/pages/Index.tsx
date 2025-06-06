
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { Button } from '@/components/ui/button';
import DifficultySelector from '@/components/DifficultySelector';
import { YearSelector } from '@/components/YearSelector';
import { TimesTablesSelector } from '@/components/TimesTablesSelector';
import Header from '@/components/Header';
import VerbalTypesSelector from '@/components/VerbalTypesSelector';

const Index = () => {
  const {
    selectedSubject,
    selectedDifficulty,
    selectedYear,
    questionCount,
    selectedTimesTables,
    selectedVerbalTypes,
    setSelectedSubject,
    setSelectedDifficulty,
    setSelectedYear,
    setQuestionCount,
    setSelectedTimesTables,
    setSelectedVerbalTypes,
    setTimeLimit,
    startQuiz,
    shouldShowYearSelector,
    shouldShowVerbalTypesSelector,
  } = useQuiz();

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
  };

  const handleStartQuiz = () => {
    if (selectedSubject) {
      startQuiz(selectedSubject);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ace Your Exams with Interactive Quizzes
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Personalized learning experiences tailored to your needs.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Subject Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-display font-semibold mb-6 text-center">Choose Your Subject</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleSubjectSelect('maths')}>
              <h3 className="text-lg font-semibold mb-2">Maths</h3>
              <p className="text-sm text-muted-foreground">Sharpen your mathematical skills.</p>
            </div>
            <div className="glass rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleSubjectSelect('english')}>
              <h3 className="text-lg font-semibold mb-2">English</h3>
              <p className="text-sm text-muted-foreground">Improve your language and comprehension.</p>
            </div>
            <div className="glass rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleSubjectSelect('verbal')}>
              <h3 className="text-lg font-semibold mb-2">Verbal Reasoning</h3>
              <p className="text-sm text-muted-foreground">Enhance your critical thinking.</p>
            </div>
            <div className="glass rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleSubjectSelect('timesTables')}>
              <h3 className="text-lg font-semibold mb-2">Times Tables</h3>
              <p className="text-sm text-muted-foreground">Master your multiplication skills.</p>
            </div>
            <div className="glass rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleSubjectSelect('history')}>
              <h3 className="text-lg font-semibold mb-2">History</h3>
              <p className="text-sm text-muted-foreground">Test your knowledge of historical events.</p>
            </div>
            <div className="glass rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleSubjectSelect('geography')}>
              <h3 className="text-lg font-semibold mb-2">Geography</h3>
              <p className="text-sm text-muted-foreground">Explore the world and its regions.</p>
            </div>
            <div className="glass rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleSubjectSelect('religiousEd')}>
              <h3 className="text-lg font-semibold mb-2">Religious Education</h3>
              <p className="text-sm text-muted-foreground">Learn about different religions and beliefs.</p>
            </div>
            <div className="glass rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleSubjectSelect('all')}>
              <h3 className="text-lg font-semibold mb-2">All Subjects</h3>
              <p className="text-sm text-muted-foreground">Practice questions from all available subjects.</p>
            </div>
          </div>
        </div>

        {/* Configuration Section */}
        {selectedSubject && (
          <div className="space-y-6 mb-8">
            {/* Difficulty Selector */}
            <DifficultySelector 
              selectedDifficulty={selectedDifficulty}
              onChange={setSelectedDifficulty}
            />

            {/* Year Selector */}
            {shouldShowYearSelector(selectedSubject) && (
              <YearSelector 
                selectedYear={selectedYear}
                onYearChange={setSelectedYear}
              />
            )}

            {/* Times Tables Selector */}
            {selectedSubject === 'timesTables' && (
              <TimesTablesSelector 
                selectedTables={selectedTimesTables}
                onTablesChange={setSelectedTimesTables}
              />
            )}

            {/* Verbal Types Selector */}
            {shouldShowVerbalTypesSelector(selectedSubject) && (
              <VerbalTypesSelector 
                selectedTypes={selectedVerbalTypes}
                onTypesChange={setSelectedVerbalTypes}
              />
            )}

            {/* Quiz Settings */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Quiz Settings</h3>
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="questionCount" className="block text-sm font-medium text-gray-700">
                  Number of Questions:
                </label>
                <select
                  id="questionCount"
                  className="mt-1 block w-auto rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                >
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="timeLimit" className="block text-sm font-medium text-gray-700">
                  Time Limit (seconds):
                </label>
                <select
                  id="timeLimit"
                  className="mt-1 block w-auto rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  onChange={(e) => setTimeLimit(Number(e.target.value))}
                >
                  <option value="">No Limit</option>
                  <option>60</option>
                  <option>120</option>
                  <option>300</option>
                  <option>600</option>
                </select>
              </div>
            </div>

            {/* Start Quiz Button */}
            <div className="text-center">
              <Button 
                onClick={handleStartQuiz}
                size="lg"
                className="px-8 py-3 text-lg font-semibold"
                disabled={
                  selectedSubject === 'timesTables' 
                    ? selectedTimesTables.length === 0 
                    : selectedSubject === 'verbal' 
                      ? selectedVerbalTypes.length === 0
                      : false
                }
              >
                Start Quiz
              </Button>
              {selectedSubject === 'timesTables' && selectedTimesTables.length === 0 && (
                <p className="text-sm text-muted-foreground mt-2">
                  Please select at least one times table to start the quiz.
                </p>
              )}
              {selectedSubject === 'verbal' && selectedVerbalTypes.length === 0 && (
                <p className="text-sm text-muted-foreground mt-2">
                  Please select at least one verbal reasoning type to start the quiz.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Personalized Quizzes</h3>
            <p className="text-sm text-muted-foreground">
              Tailor your learning experience by selecting specific subjects and difficulty levels.
            </p>
          </div>
          <div className="glass rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Track Your Progress</h3>
            <p className="text-sm text-muted-foreground">
              Monitor your performance and identify areas for improvement with detailed progress reports.
            </p>
          </div>
          <div className="glass rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Interactive Learning</h3>
            <p className="text-sm text-muted-foreground">
              Engage with dynamic quizzes that adapt to your learning style and pace.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground">
          <p>&copy; 2024 Quiz App. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
