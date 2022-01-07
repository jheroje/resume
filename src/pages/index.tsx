import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import ThemeButton from '../components/theme/ThemeButton';

const IndexPage = () => {
  return (
    <>
      <ThemeButton />
      <Sidebar />
      <Main />
    </>
  );
};

export default IndexPage;
