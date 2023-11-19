import clsx from 'clsx';
import { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

const Label = ({ id, htmlFor, className, required, isHidden, children, ...rest }) => {
  const labelledbyId = useId();

  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className={clsx(styles.root, className, isHidden && 'visually-hidden')}
      aria-labelledby={labelledbyId}
      aria-hidden={isHidden ? isHidden : null}
      {...rest}
    >
      {children}
      {required && (
        <>
          <span aria-hidden>*</span>
          <span className="visually-hidden">(required)</span>
          <span id={labelledbyId} hidden>
            {children}
          </span>
        </>
      )}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  isHidden: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
};

export default Label;
