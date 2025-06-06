
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProfileProvider } from "./context/ProfileContext";
import { StudentProvider } from "./context/StudentContext";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import { QuizProvider } from "./context/QuizContext";
import { supabase } from "./integrations/supabase/client";
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import ProgressPage from "./pages/ProgressPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import StudentsPage from "./pages/StudentsPage";
import QuestionsPage from "./pages/QuestionsPage";
import QuestionBrowserPage from "./pages/QuestionBrowserPage";
import UploadQuestionsPage from "./pages/UploadQuestionsPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <AuthProvider>
            <ProfileProvider>
              <StudentProvider>
                <SubscriptionProvider>
                  <QuizProvider>
                    <Layout>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/quiz" element={<QuizPage />} />
                        <Route path="/results" element={<ResultsPage />} />
                        <Route path="/progress" element={<ProgressPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/students" element={<StudentsPage />} />
                        <Route path="/questions" element={<QuestionsPage />} />
                        <Route path="/question-browser" element={<QuestionBrowserPage supabaseClient={supabase} />} />
                        <Route path="/upload-questions" element={<UploadQuestionsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Layout>
                  </QuizProvider>
                </SubscriptionProvider>
              </StudentProvider>
            </ProfileProvider>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
