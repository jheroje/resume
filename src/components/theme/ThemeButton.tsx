import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeButton = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={`dark-theme-button ${darkTheme ? 'dark-theme' : ''}`}
      onClick={toggleDarkTheme}
    >
      Toggle dark theme {darkTheme ? '🌖' : '🌘'}
    </button>
  );
};

export default ThemeButton;
