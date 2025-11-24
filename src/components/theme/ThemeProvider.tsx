import { useEffect, useState } from 'react';
import { Themes } from './Theme';
import ThemeContext from './ThemeContext';

type ThemeProviderProps = {
  storedTheme: string;
  children: React.ReactNode;
};

const ThemeProvider = ({ storedTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(
    storedTheme ? Themes[storedTheme] : Themes.light
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.current);
  }, [theme]);

  const toggleTheme = () => {
    const { next } = theme;

    setTheme(Themes[next]);
    localStorage.setItem('theme', next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
