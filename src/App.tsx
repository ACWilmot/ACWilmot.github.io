
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizContext';
import { ProfileProvider } from './context/ProfileContext';
import IndexPage from './pages/Index';
import AboutPage from './pages/AboutPage';
import QuestionsPage from './pages/QuestionsPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TeacherLoginPage from './pages/TeacherLoginPage';
import TeacherRegisterPage from './pages/TeacherRegisterPage';
import TeacherDashboardPage from './pages/TeacherDashboardPage';
import ProgressPage from './pages/ProgressPage';
import AdminPage from './pages/AdminPage';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProfileProvider>
          <QuizProvider>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/questions" element={<QuestionsPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/teacher-login" element={<TeacherLoginPage />} />
              <Route path="/teacher/login" element={<TeacherLoginPage />} />
              <Route path="/teacher-register" element={<TeacherRegisterPage />} />
              <Route path="/teacher/register" element={<TeacherRegisterPage />} />
              <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />
              {/* Remove the old redundant route that might be causing confusion */}
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster position="bottom-right" richColors />
          </QuizProvider>
        </ProfileProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
