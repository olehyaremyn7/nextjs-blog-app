import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children,
  classes,
  type = 'button',
  color = 'primary',
  text,
  title,
  disabled,
  ariaLabel,
  onClick,
  ...rest
}) => (
  <button
    type={type}
    className={clsx(styles.root, styles[color], classes)}
    title={title}
    disabled={disabled}
    onClick={onClick}
    aria-label={ariaLabel}
    aria-disabled={disabled}
    {...rest}
  >
    {text && text}
    {children && children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  classes: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  color: PropTypes.oneOf(['primary', 'accent', 'warn']),
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
