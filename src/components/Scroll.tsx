import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

type ScrollType = {
  type: string;
  element: string;
  offset?: number;
  timeout?: number;
  children: JSX.Element;
};

const Scroll = ({ type, element, offset, timeout, children }: ScrollType) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleClick = (e: Event) => {
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

  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e);
    }
  };

  const scrollTo = (element: Element, offSet = 0, timeout = null) => {
    const elemPos: number =
      element?.getBoundingClientRect().top + window.pageYOffset ?? 0;

    const opts: ScrollToOptions = {
      top: elemPos + offSet,
      left: 0,
      behavior: 'smooth',
    };

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

  return React.cloneElement(children, elementProps);
};

Scroll.propTypes = {
  type: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  offset: PropTypes.number,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Scroll;
