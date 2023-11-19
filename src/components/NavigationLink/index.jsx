'use client';

import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './NavigationLink.module.css';

const NavigationLink = ({
  className,
  href,
  title,
  ariaLabel,
  isActive,
  isHidden = false,
  prevLink = null,
  isLastLink = null,
  onClick,
  onKeyDownCapture,
  ...rest
}) => (
  <li className={styles.root}>
    <Link
      href={href}
      className={clsx(styles.link, className, isActive && styles.active)}
      tabIndex={isHidden ? -1 : null}
      aria-label={ariaLabel}
      aria-hidden={isHidden}
      onClick={onClick}
      onKeyDownCapture={onKeyDownCapture}
      data-active={isActive}
      data-prev-navigation-link={prevLink}
      data-last-navigation-link={isLastLink}
      {...rest}
    >
      {title}
    </Link>
  </li>
);

NavigationLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isHidden: PropTypes.bool,
  prevLink: PropTypes.string,
  isLastLink: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyDownCapture: PropTypes.func,
};

export default NavigationLink;
