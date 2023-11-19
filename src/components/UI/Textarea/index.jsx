import clsx from 'clsx';
import { useId } from 'react';
import Label from '../Label';
import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

const Textarea = ({
  classNameRoot,
  classNameTextarea,
  id,
  label,
  helperText,
  name,
  placeholder,
  disabled,
  ariaLabel,
  isValid,
  required,
  showError,
  errorMessage,
  register,
  controlName,
  ...rest
}) => {
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
        <Label id={`${name}-textarea-label-id`} htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {helperText && (
        <div className={styles.helperNode} id={helperTextId}>
          <p>{helperText}</p>
        </div>
      )}
      <div className={styles.control}>
        <textarea
          id={htmlFor}
          className={clsx(styles.textarea, classNameTextarea)}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
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

Textarea.propTypes = {
  classNameRoot: PropTypes.string,
  classNameTextarea: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  isValid: PropTypes.bool,
  required: PropTypes.bool,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  register: PropTypes.func.isRequired,
  controlName: PropTypes.string.isRequired,
};

export default Textarea;
