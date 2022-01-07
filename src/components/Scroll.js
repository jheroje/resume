import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

const Scroll = ({ type, element, offset, timeout, children }) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (type && element) {
      const elem =
        type === 'id'
          ? document.getElementById(element)
          : document.getElementsByClassName(element)[0];

      elem
        ? scrollTo(elem, offset, timeout)
        : console.log(`Element not found: ${element}`);
    }
  };

  const handleKeyboard = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e);
    }
  };

  const scrollTo = (element, offSet = 0, timeout = null) => {
    const elemPos =
      element?.getBoundingClientRect().top + window.pageYOffset ?? 0;

    const opts = { top: elemPos + offSet, left: 0, behavior: 'smooth' };

    if (timeout) {
      setTimeout(() => {
        window.scroll(opts);
      }, timeout);
    } else {
      window.scroll(opts);
    }
  };

  const elementProps = {
    role: 'button',
    tabIndex: 0,
    onClick: handleClick,
    onKeyDown: handleKeyboard,
  };

  return (
    <>
      {typeof children === 'object' ? (
        React.cloneElement(children, elementProps)
      ) : (
        <span {...elementProps}>{children}</span>
      )}
    </>
  );
};

Scroll.propTypes = {
  type: PropTypes.string,
  element: PropTypes.string,
  offset: PropTypes.number,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Scroll;
