import { cloneElement, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

type ScrollType = {
  type: string;
  element: string;
  offset?: number;
  timeout?: number;
  children: React.ReactElement;
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

  const scrollTo = (element: Element, offSet = 0, timeout: number | null | undefined = null) => {
    const elemPos: number =
      (element?.getBoundingClientRect().top ?? 0) + window.pageYOffset;

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

  return cloneElement(children, elementProps);
};



export default Scroll;
