import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import ThemeButton from '../components/theme/ThemeButton';
import { ThemeProvider } from '../components/theme/ThemeContext';

const browser = typeof window !== 'undefined';

const IndexPage = () => {
  return browser ? ( // defer rendering to the browser to prevent hard refresh messing with themes
    <Layout>
      <ThemeProvider>
        <ThemeButton />
        <Sidebar />
        <Main />
      </ThemeProvider>
    </Layout>
  ) : null;
};

export default IndexPage;
