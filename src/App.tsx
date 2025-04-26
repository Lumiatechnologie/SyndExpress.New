import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RegisterConfirmationPage from './pages/RegisterConfirmationPage';
import AccountPendingPage from './pages/AccountPendingPage';
import DashboardPage from './pages/DashboardPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // In a real app, you would check if the user is authenticated
  // and redirect to login if not
  const isAuthenticated = true; // This would come from your auth context
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/confirmation" element={<RegisterConfirmationPage />} />
        <Route path="/account-pending" element={<AccountPendingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        
        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;