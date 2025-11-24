import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import IndexPage from './pages/index';
import ThemeProvider from './components/theme/ThemeProvider';
import './assets/sass/resume.scss';

const storedTheme = localStorage.getItem('theme') || 'light';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider storedTheme={storedTheme}>
        <IndexPage />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
