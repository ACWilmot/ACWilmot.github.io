
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from "@/components/theme-provider";
import { ProfileProvider } from './context/ProfileContext';
import { QuizProvider } from './context/QuizContext';

import IndexPage from './pages/IndexPage';
import QuestionsPage from './pages/QuestionsPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import ProgressPage from './pages/ProgressPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFound from './pages/NotFound';
import TeacherLoginPage from './pages/TeacherLoginPage';
import TeacherRegisterPage from './pages/TeacherRegisterPage';
import AdminPage from './pages/AdminPage';
import { TeacherProvider } from './context/TeacherContext';
import StudentDashboardPage from './pages/StudentDashboardPage';
import TeacherDashboardPage from './pages/TeacherDashboardPage';
import HomeworkPage from './pages/HomeworkPage';
import TestSetupPage from './pages/TestSetupPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <QuizProvider>
            <TeacherProvider>
              <ToastProvider>
                <ThemeProvider attribute="class" defaultTheme="light">
                  <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/questions" element={<QuestionsPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/results" element={<ResultsPage />} />
                    <Route path="/progress" element={<ProgressPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/teacher-login" element={<TeacherLoginPage />} />
                    <Route path="/teacher-register" element={<TeacherRegisterPage />} />
                    <Route path="/teacher-dashboard" element={<TeacherDashboardPage />} />
                    <Route path="/student-dashboard" element={<StudentDashboardPage />} />
                    <Route path="/homework/:homeworkId" element={<HomeworkPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/test-setup" element={<TestSetupPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ThemeProvider>
              </ToastProvider>
            </TeacherProvider>
          </QuizProvider>
        </ProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
