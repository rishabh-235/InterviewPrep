import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import HomePage from "@/routes/HomePage";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SignInPage from "@/routes/SignInPage";
import SignUpPage from "@/routes/SignUpPage";
import ProtectedLayout from "./layouts/ProtectedLayout";
import MainLayout from "./layouts/MainLayout";
import { GeneratePage } from "./components/GeneratePage";
import Dashboard from "./routes/Dashboard";
import CreateEditPage from "./routes/CreateEditPage";
import MockLoadPage from "./routes/MockLoadPage";
import MockInterviewPage from "./routes/MockInterviewPage";
import { Feedback } from "./routes/FeedBack";

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication routes */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedLayout>
              <MainLayout />
            </ProtectedLayout>
          }
        >
          <Route path="/generate" element={<GeneratePage />}>
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
