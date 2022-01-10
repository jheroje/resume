import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

enum Theme {
  LIGHT = 'light',
  NAVY = 'navy',
  DARK = 'dark',
}

export const ThemeOptions = {
  [Theme.LIGHT]: {
    next: Theme.NAVY,
    icon: '🌘',
  },
  [Theme.NAVY]: {
    next: Theme.DARK,
    icon: '🌗',
  },
  [Theme.DARK]: {
    next: Theme.LIGHT,
    icon: '🌖',
  },
};

const getStoredTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme') as Theme;

  return Object.values(Theme).includes(storedTheme) ? storedTheme : Theme.LIGHT;
};

const ThemeContext = createContext({
  theme: Theme.LIGHT,
  toggleTheme: () => undefined,
});

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getStoredTheme());

  const toggleTheme = () => {
    const nextTheme = ThemeOptions[theme]?.next;

    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
