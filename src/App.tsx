import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import HomePage from '@/routes/HomePage';
import AuthenticationLayout from '@/layouts/AuthenticationLayout';
import SignInPage from '@/routes/SignInPage';
import SignUpPage from '@/routes/SignUpPage';
import ProtectedLayout from './layouts/ProtectedLayout';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />} >
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication routes */}
        <Route element={<AuthenticationLayout />} >
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route element={<ProtectedLayout>
          <MainLayout  />
        </ProtectedLayout>} >

        
        </Route>
      </Routes>
    </Router>
  )
}

export default App