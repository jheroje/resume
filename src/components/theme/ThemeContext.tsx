import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Theme, { Themes, ThemeProps } from './Theme';

const getStoredTheme = (): ThemeProps => {
  const storedTheme =
    typeof window !== 'undefined' && (localStorage.getItem('theme') as Theme);

  return storedTheme && Object.values(Theme).includes(storedTheme)
    ? Themes[storedTheme]
    : Themes.light;
};

const ThemeContext = createContext({
  theme: Themes.light,
  toggleTheme: () => undefined,
});

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(Themes.light);

  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

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
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
