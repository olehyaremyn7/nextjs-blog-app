import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './FabButton.module.css';

const FabButton = ({
  classes,
  color = 'primary',
  text,
  title,
  disabled,
  tooltip,
  ariaLabel,
  onClick,
  imageSrc,
  alt,
  width = 26,
  height = 26,
  ...rest
}) => (
  <button
    type="button"
    className={clsx(styles.root, styles[color], classes)}
    title={title}
    disabled={disabled}
    onClick={onClick}
    aria-label={ariaLabel}
    aria-disabled={disabled}
    {...rest}
  >
    {text && !imageSrc && text}
    {imageSrc && !text && (
      <figure>
        <Image src={imageSrc} alt={alt ? alt : `${title} image`} width={width} height={height} />
      </figure>
    )}
    {tooltip && <span>{tooltip}</span>}
  </button>
);

FabButton.propTypes = {
  classes: PropTypes.string,
  color: PropTypes.oneOf(['primary']),
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default FabButton;
