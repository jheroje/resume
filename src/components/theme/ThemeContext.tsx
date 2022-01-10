import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Theme, { Themes, ThemeProps } from './Theme';

const getStoredTheme = (): ThemeProps => {
  const storedTheme = localStorage.getItem('theme') as Theme;

  const theme = Object.values(Theme).includes(storedTheme)
    ? storedTheme
    : Theme.LIGHT;

  return Themes[theme];
};

const ThemeContext = createContext({
  theme: Themes.light,
  toggleTheme: () => undefined,
});

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getStoredTheme());

  const toggleTheme = () => {
    const { next } = theme;

    setTheme(Themes[next]);
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
