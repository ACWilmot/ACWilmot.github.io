
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import QuestionsPage from './pages/QuestionsPage';
import { AuthProvider } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';
import { Toaster } from './components/ui/sonner';
import { QuizProvider } from './context/QuizContext';
import Index from './pages/Index';
import ProgressPage from './pages/ProgressPage';
import ResultsPage from './pages/ResultsPage';
import QuestionBrowserPage from './pages/QuestionBrowserPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <QuizProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/questions" element={<QuestionsPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/browse" element={<QuestionBrowserPage />} />
            </Routes>
          </QuizProvider>
        </ProfileProvider>
        <Toaster position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
