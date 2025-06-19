import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import HomePage from '@/pages/HomePage';
import PropertyDetail from '@/pages/PropertyDetail';
import AuthPage from '@/pages/AuthPage';
import NotFound from '@/pages/NotFound';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/contexts/AuthContext';
import { SearchProvider } from '@/contexts/SearchContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} data-id="pfuwqz65c" data-path="src/App.tsx">
      <TooltipProvider data-id="h3bd15rmd" data-path="src/App.tsx">
        <AuthProvider data-id="hv0qgkwoy" data-path="src/App.tsx">
          <SearchProvider data-id="ic9nfpluf" data-path="src/App.tsx">
            <Router data-id="6c5enmtac" data-path="src/App.tsx">
              <div className="min-h-screen bg-gray-50" data-id="pyhysw2cp" data-path="src/App.tsx">
                <Navbar data-id="uye2zt9d6" data-path="src/App.tsx" />
                <Routes data-id="nvxhy15f5" data-path="src/App.tsx">
                  <Route path="/" element={<HomePage data-id="jfks9086o" data-path="src/App.tsx" />} data-id="ev6rpzazb" data-path="src/App.tsx" />
                  <Route path="/property/:id" element={<PropertyDetail data-id="zg497pi34" data-path="src/App.tsx" />} data-id="38i9hr1tg" data-path="src/App.tsx" />
                  <Route path="/auth" element={<AuthPage data-id="9vsflsmgb" data-path="src/App.tsx" />} data-id="31g1ku04y" data-path="src/App.tsx" />
                  <Route path="*" element={<NotFound data-id="e3ro40c8g" data-path="src/App.tsx" />} data-id="c9f3fsxgj" data-path="src/App.tsx" />
                </Routes>
                <Toaster data-id="lyo32w5gx" data-path="src/App.tsx" />
              </div>
            </Router>
          </SearchProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>);

}

export default App;