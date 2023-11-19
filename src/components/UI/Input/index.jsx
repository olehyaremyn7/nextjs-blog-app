'use client';

import clsx from 'clsx';
import { useId, useEffect } from 'react';
import Label from '../Label';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({
  classNameRoot,
  classNameControl,
  classNameInput,
  id,
  label,
  helperText,
  name,
  placeholder,
  disabled,
  ariaLabel,
  isValid,
  required,
  readOnly,
  showError,
  errorMessage,
  type = 'text',
  isLabelHidden,
  isHelperTextHidden,
  register,
  controlName,
  shouldFocus = false,
  setFocus,
  ...rest
}) => {
  const htmlForId = useId();
  const helperTextId = useId();
  const errorMessageId = useId();
  const htmlFor = id ?? htmlForId;
  const describedBy = [];

  useEffect(() => {
    if (shouldFocus) {
      setFocus(controlName);
    }
  }, [shouldFocus]);

  if (helperText) {
    describedBy.push(helperTextId);
  }

  if (showError) {
    describedBy.push(errorMessageId);
  }

  return (
    <div className={clsx(styles.root, classNameRoot, isValid && styles.invalid)}>
      {label && (
        <Label id={`${name}-input-label-id`} htmlFor={htmlFor} required={required} isHidden={isLabelHidden}>
          {label}
        </Label>
      )}
      {helperText && (
        <div
          id={helperTextId}
          className={clsx(styles.helperNode, isHelperTextHidden && 'visually-hidden')}
          aria-hidden={isHelperTextHidden ? isHelperTextHidden : null}
        >
          <p>{helperText}</p>
        </div>
      )}
      <div
        className={clsx(styles.control, classNameControl, { [styles.noLabel]: isLabelHidden && isHelperTextHidden })}
      >
        <input
          id={htmlFor}
          type={type}
          className={clsx(styles.input, classNameInput)}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={isValid}
          aria-required={required}
          aria-label={ariaLabel}
          {...(describedBy.length && {
            'aria-describedby': describedBy.join(' '),
          })}
          {...(showError && {
            'aria-errormessage': errorMessageId,
          })}
          {...register(controlName, { ...(required && { required: `${label} is required` }) })}
          {...rest}
        />
      </div>
      {showError && (
        <p id={errorMessageId} className={styles.error}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  classNameRoot: PropTypes.string,
  classNameControl: PropTypes.string,
  classNameInput: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  isValid: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
  isLabelHidden: PropTypes.bool,
  isHelperTextHidden: PropTypes.bool,
  register: PropTypes.func.isRequired,
  controlName: PropTypes.string.isRequired,
  shouldFocus: PropTypes.bool,
  setFocus: PropTypes.func,
};

export default Input;
