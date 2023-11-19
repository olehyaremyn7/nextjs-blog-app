'use client';

import clsx from 'clsx';
import { useId } from 'react';
import Label from '../Label';
import Image from 'next/image';
import useTheme from '@/hooks/useTheme';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

const Select = ({
  classNameRoot,
  classNameControl,
  classNameSelect,
  id,
  label,
  helperText,
  name,
  placeholder,
  options,
  disabled,
  readOnly,
  ariaLabel,
  isValid,
  required,
  showError,
  errorMessage,
  isLabelHidden,
  isHelperTextHidden,
  register,
  controlName,
  ...rest
}) => {
  const { isDark } = useTheme();
  const htmlForId = useId();
  const helperTextId = useId();
  const errorMessageId = useId();
  const htmlFor = id ?? htmlForId;
  const describedBy = [];

  if (helperText) {
    describedBy.push(helperTextId);
  }

  if (showError) {
    describedBy.push(errorMessageId);
  }

  return (
    <div className={clsx(styles.root, classNameRoot, isValid && styles.invalid)}>
      {label && (
        <Label id={`${name}-select-label-id`} htmlFor={htmlFor} required={required} isHidden={isLabelHidden}>
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
        <select
          id={htmlFor}
          className={clsx(styles.select, classNameSelect)}
          name={name}
          disabled={disabled}
          aria-invalid={isValid}
          aria-required={required}
          readOnly={readOnly}
          aria-label={ariaLabel}
          {...(describedBy.length && {
            'aria-describedby': describedBy.join(' '),
          })}
          {...(showError && {
            'aria-errormessage': errorMessageId,
          })}
          {...register(controlName, { ...(required && { required: `${label} is required` }) })}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(({ id, value, label, disabled }) => (
            <option key={id ? id : `select-${label}-option`} value={value} disabled={disabled}>
              {label}
            </option>
          ))}
        </select>
        <figure className={styles.icon}>
          <Image src={`/arrow-down-${isDark ? 'light' : 'dark'}.png`} alt="select arrow icon" width={16} height={16} />
        </figure>
      </div>
      {showError && (
        <p id={errorMessageId} className={styles.error}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

Select.propTypes = {
  classNameRoot: PropTypes.string,
  classNameControl: PropTypes.string,
  classNameSelect: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  ariaLabel: PropTypes.string,
  isValid: PropTypes.bool,
  required: PropTypes.bool,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  isLabelHidden: PropTypes.bool,
  isHelperTextHidden: PropTypes.bool,
  register: PropTypes.func.isRequired,
  controlName: PropTypes.string.isRequired,
};

export default Select;
