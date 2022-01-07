import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import ThemeButton from '../components/theme/ThemeButton';
import { ThemeProvider } from '../components/theme/ThemeContext';

const IndexPage = () => {
  return (
    <Layout>
      <ThemeProvider>
        <ThemeButton />
        <Sidebar />
        <Main />
      </ThemeProvider>
    </Layout>
  );
};

export default IndexPage;
