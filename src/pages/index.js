import React, { useState } from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import ThemeButton from '../components/ThemeButton';

const browser = typeof window !== 'undefined';

const IndexPage = () => {
  const [darkTheme, setDarkTheme] = useState(
    browser && localStorage.getItem('theme') === 'dark'
  );

  const toggleDarkTheme = () => {
    const toggle = !darkTheme;

    setDarkTheme(toggle);
    localStorage.setItem('theme', toggle ? 'dark' : 'light');
  };

  return (
    browser && ( // defer rendering to the browser to prevent hard refresh messing with themes
      <Layout>
        <ThemeButton darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
        <Sidebar darkTheme={darkTheme} />
        <Main darkTheme={darkTheme} />
      </Layout>
    )
  );
};

export default IndexPage;
