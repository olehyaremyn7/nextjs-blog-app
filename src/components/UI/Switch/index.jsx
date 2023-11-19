'use client';

import PropTypes from 'prop-types';
import { SWITCH_NAVIGATION_KEYS } from './data';

const Switch = ({ className, children, onClick, onKeyDown, checked, ariaLabel, ...rest }) => {
  const handleKeyDown = (event) => {
    const { key } = event;

    if (SWITCH_NAVIGATION_KEYS.includes(key)) {
      event.preventDefault();
      onKeyDown();
    }
  };

  return (
    <div
      role="switch"
      className={className}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-checked={checked}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </div>
  );
};

Switch.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  checked: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
};

export default Switch;
