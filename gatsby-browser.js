/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import Layout from './src/components/Layout';
import ThemeProvider from './src/components/theme/ThemeProvider';

export const wrapRootElement = ({ element }) => {
  const storedTheme = localStorage.getItem('theme');

  return <ThemeProvider storedTheme={storedTheme}>{element}</ThemeProvider>;
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
