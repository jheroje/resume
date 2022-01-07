import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const ThemeContext = createContext({
  darkTheme: false,
  toggleDarkTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const toggleDarkTheme = () => {
    const toggle = !darkTheme;

    setDarkTheme(toggle);
    localStorage.setItem('theme', toggle ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
