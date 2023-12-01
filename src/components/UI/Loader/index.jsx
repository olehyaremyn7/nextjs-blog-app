'use client';

import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';
import { range } from '@/utils/index';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

const Loader = ({ isWrapper = false, wrapperClasses, color = 'primary', classes }) => {
  const timeoutRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsHidden((prevState) => !prevState);
    }, 500);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const Template = (
    <div role="alert" className={clsx(styles.root, styles[color], classes)} aria-live="assertive">
      {range(0, 3).map((i) => (
        <div key={`loader-dot-${i}`} className={styles.dot} />
      ))}
      <span className="visually-hidden" aria-hidden={isHidden}>
        Loading
      </span>
    </div>
  );

  return isWrapper ? <div className={wrapperClasses}>{Template}</div> : Template;
};

Loader.propTypes = {
  classes: PropTypes.string,
  isWrapper: PropTypes.bool,
  wrapperClasses: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'accent', 'warn']),
};

export default Loader;
