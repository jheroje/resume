import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import config from '../../config';
import Scroll from './Scroll';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const { firstName, lastName, tabs } = config;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <span className="navbar-brand">
        <Scroll type="class" element="main-body">
          <a className="d-block d-lg-none" href="#top">
            {firstName} {lastName}
          </a>
        </Scroll>
      </span>

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
          items={tabs.map(({ href }) => href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {tabs.map(({ href, content }) => (
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
