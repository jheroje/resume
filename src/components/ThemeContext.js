import React, { useState } from 'react';

const ThemeContext = React.createContext({
  darkTheme: false,
  toggleDarkTheme: () => {},
});

export const ThemeProvider = (props) => {
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
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
