import React from 'react';

const ThemeButton = ({ darkTheme, toggleDarkTheme }) => (
  <button
    type="button"
    className={`dark-theme-button ${darkTheme ? 'dark-theme' : ''}`}
    onClick={toggleDarkTheme}
  >
    Toggle dark theme {darkTheme ? '🌖' : '🌘'}
  </button>
);

export default ThemeButton;
