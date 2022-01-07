import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import '../assets/sass/resume.scss';
import ThemeContext from './theme/ThemeContext';

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
  const { darkTheme, getThemeString } = useContext(ThemeContext);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Resume' },
              { name: 'keywords', content: 'site, web' },
            ]}
          >
            <html lang="en" />
          </Helmet>

          <div className="main-body" data-theme={getThemeString(darkTheme)}>
            {children}
          </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
