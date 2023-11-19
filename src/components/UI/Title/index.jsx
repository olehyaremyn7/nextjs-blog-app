'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = ({ children, tag, text, classes, forceFocus = false, capitalize = false, ...rest }) => {
  const headingRef = useRef(null);
  const Heading = tag || 'h1';

  useEffect(() => {
    const { current: $headingEl } = headingRef;

    if (forceFocus && $headingEl) {
      $headingEl.setAttribute('tabindex', '-1');
      $headingEl.focus();
    }
  }, [headingRef, forceFocus]);

  return (
    <Heading
      ref={($el) => {
        headingRef.current = $el;
      }}
      className={clsx(classes, capitalize && styles.capitalize)}
      {...rest}
    >
      {text && text}
      {children && children}
    </Heading>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  text: PropTypes.string,
  tag: PropTypes.string,
  classes: PropTypes.string,
  forceFocus: PropTypes.bool,
  capitalize: PropTypes.bool,
};

export default Title;
