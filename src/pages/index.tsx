import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import ThemeButton from '../components/theme/ThemeButton';
import { ThemeProvider } from '../components/theme/ThemeContext';

const browser = typeof window !== 'undefined';

const IndexPage = () => {
  return (
    <Layout>
      {browser ? ( // defer theme rendering to the browser to prevent hard refresh messing
        <ThemeProvider>
          <ThemeButton />
          <Sidebar />
          <Main />
        </ThemeProvider>
      ) : null}
    </Layout>
  );
};

export default IndexPage;
