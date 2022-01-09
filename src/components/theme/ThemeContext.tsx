import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const getThemeIcon = (dark: boolean) => (dark ? '🌖' : '🌘');
const getThemeString = (dark: boolean) => (dark ? 'dark' : 'light');

const ThemeContext = createContext({
  darkTheme: false,
  toggleDarkTheme: () => undefined,
  getThemeIcon,
  getThemeString,
});

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('theme') === getThemeString(true)
  );

  const toggleDarkTheme = () => {
    const toggle = !darkTheme;

    setDarkTheme(toggle);
    localStorage.setItem('theme', getThemeString(toggle));
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleDarkTheme,
        getThemeIcon,
        getThemeString,
      }}
    >
      <div data-theme={getThemeString(darkTheme)}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
