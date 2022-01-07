import React, { createContext, useState } from 'react';

const ThemeContext = createContext({
  darkTheme: false,
  toggleDarkTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
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

export default ThemeContext;
