import { createContext } from 'react';
import { Themes } from './Theme';

const ThemeContext = createContext({
  theme: Themes.light,
  toggleTheme: () => {},
});

export default ThemeContext;
