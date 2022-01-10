import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Theme, { ThemeData, ThemeProps } from './Theme';

const getStoredTheme = (): ThemeProps => {
  const storedTheme = localStorage.getItem('theme') as Theme;

  const theme = Object.values(Theme).includes(storedTheme)
    ? storedTheme
    : Theme.LIGHT;

  return ThemeData[theme];
};

const ThemeContext = createContext({
  theme: ThemeData.light,
  toggleTheme: () => undefined,
});

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getStoredTheme());

  const toggleTheme = () => {
    const { next } = theme;

    setTheme(ThemeData[next]);
    localStorage.setItem('theme', next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div data-theme={theme.current}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
