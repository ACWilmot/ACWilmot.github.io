
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import UserProgressPage from './pages/UserProgressPage';
import QuestionsPage from './pages/QuestionsPage';
import AdminPage from './pages/AdminPage';
import { AuthProvider } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from './components/ui/sonner';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProfileProvider>
          <QuizProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/progress" element={<UserProgressPage />} />
              <Route path="/questions" element={<QuestionsPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </QuizProvider>
        </ProfileProvider>
      </AuthProvider>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;
