import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/resume.scss';
import ThemeProvider from './components/theme/ThemeProvider';
import IndexPage from './pages/index';

const storedTheme = localStorage.getItem('theme') || 'light';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider storedTheme={storedTheme}>
      <IndexPage />
    </ThemeProvider>
  </React.StrictMode>
);
