import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/Auth_context.jsx';
import { PortfolioProvider } from './contexts/Portfolio_context.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PortfolioProvider>
          <App />
        </PortfolioProvider>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
