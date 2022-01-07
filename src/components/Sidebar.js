import React, { useContext, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import config from '../../config';
import Scroll from './Scroll';
import ThemeContext from './theme/ThemeContext';

const TABS = [
  { content: 'About', href: 'about' },
  { content: 'Experience', href: 'experience' },
  { content: 'Education', href: 'education' },
  { content: 'Skills', href: 'skills' },
];

const Sidebar = () => {
  const { darkTheme } = useContext(ThemeContext);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const { firstName, lastName } = config;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-primary fixed-top ${
        darkTheme ? 'dark-theme' : ''
      }`}
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">
          {firstName} {lastName}
        </span>
      </a>
      <button
        className={`navbar-toggler navbar-toggler-right ${
          isCollapsed ? 'collapsed' : ''
        }`}
        type="button"
        data-toggle="collapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
        id="navbarSupportedContent"
      >
        <Scrollspy
          items={TABS.map(({ href }) => href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {TABS.map(({ href, content }) => (
            <li className="nav-item" key={href}>
              <Scroll type="id" element={href}>
                <a className="nav-link" href={`#${href}`}>
                  {content}
                </a>
              </Scroll>
            </li>
          ))}
        </Scrollspy>
      </div>
    </nav>
  );
};

export default Sidebar;
