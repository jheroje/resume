/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import Layout from './src/components/Layout';
import ThemeProvider from './src/components/theme/ThemeProvider';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
