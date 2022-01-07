import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import ThemeButton from '../components/theme/ThemeButton';
import { ThemeProvider } from '../components/theme/ThemeContext';

const browser = typeof window !== 'undefined';

const IndexPage = () => {
  return browser ? ( // defer theme rendering to the browser to prevent hard refresh messing
    <ThemeProvider>
      <Layout>
        <ThemeButton />
        <Sidebar />
        <Main />
      </Layout>
    </ThemeProvider>
  ) : null;
};

export default IndexPage;
