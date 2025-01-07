import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './Router/AppRouter';
import AuthProvider from './Provider/AuthProvider';
import { ThemeProvider } from './Components/ThemeContext';
// import AuthProvider from './Provider/AuthProvider'; // Import the AuthProvider


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </ThemeProvider>
  </StrictMode>,
);