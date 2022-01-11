import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Themes } from './Theme';
import ThemeContext from './ThemeContext';

type ThemeProviderProps = {
  storedTheme: string;
  children: JSX.Element | JSX.Element[];
};

const ThemeProvider = ({ storedTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(Themes.light);

  useEffect(() => {
    setTheme(storedTheme ? Themes[storedTheme] : Themes.light);
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
  storedTheme: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
