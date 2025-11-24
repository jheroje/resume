import { useContext } from 'react';
import ThemeContext from './theme/ThemeContext';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <meta name="theme-color" content={theme.colors.primary} />
      <div className="main-body">{children}</div>
    </>
  );
};

export default Layout;
