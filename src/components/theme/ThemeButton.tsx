import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeButton = () => {
  const { darkTheme, toggleDarkTheme, getThemeIcon } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="dark-theme-button"
      onClick={toggleDarkTheme}
    >
      Toggle dark theme {getThemeIcon(darkTheme)}
    </button>
  );
};

export default ThemeButton;
