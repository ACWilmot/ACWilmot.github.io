
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "@/context/QuizContext";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TeacherLoginPage from "./pages/TeacherLoginPage";
import TeacherRegisterPage from "./pages/TeacherRegisterPage";
import TeacherDashboardPage from "./pages/TeacherDashboardPage";
import ProgressPage from "./pages/ProgressPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import QuestionsPage from "./pages/QuestionsPage";
import ViteRefresh from "@/components/ViteRefresh";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <QuizProvider>
            <ViteRefresh />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/questions" element={<QuestionsPage />} />
              <Route path="/teacher/login" element={<TeacherLoginPage />} />
              <Route path="/teacher/register" element={<TeacherRegisterPage />} />
              <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </QuizProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
