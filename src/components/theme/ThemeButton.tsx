import React, { useContext } from 'react';
import { ThemeInfo } from './Theme';
import ThemeContext from './ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button type="button" className="dark-theme-button" onClick={toggleTheme}>
      Toggle dark theme {ThemeInfo[theme].icon}
    </button>
  );
};

export default ThemeButton;
