/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import Layout from './src/components/Layout';
import { ThemeProvider } from './src/components/theme/ThemeContext';

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export const wrapPageElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
