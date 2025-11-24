import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import '../assets/sass/resume.scss';
import config from '../config';
import ThemeContext from './theme/ThemeContext';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name="description" content="Resume" />
        <meta name="keywords" content="site, web" />
        <meta name="theme-color" content={theme.colors.primary} />
        <html lang="en" />
      </Helmet>

      <div className="main-body" data-theme={theme.current}>
        {children}
      </div>
    </>
  );
};



export default Layout;
