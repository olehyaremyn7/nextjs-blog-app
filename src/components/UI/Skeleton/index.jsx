import clsx from 'clsx';
import { Fragment } from 'react';
import { createUID, range } from '@/utils/index';
import PropTypes from 'prop-types';
import styles from './Skeleton.module.css';

const Skeleton = ({ animation = 'pulse', variant = 'text', classes, component, height, width, count, sx }) => {
  const Tag = component || 'span';
  const Skeleton = (
    <Tag
      className={clsx(styles.root, classes, styles[variant], styles[animation], !animation && styles.noAnimation)}
      style={{ width, height, ...sx }}
      aria-live="polite"
      aria-busy
    />
  );

  if (count) {
    return range(0, count).map((i) => <Fragment key={`skeleton-${variant}-${i}-${createUID()}`}>{Skeleton}</Fragment>);
  }

  return Skeleton;
};

Skeleton.propTypes = {
  animation: PropTypes.oneOf(['pulse', 'wave']),
  variant: PropTypes.oneOf(['heading', 'text', 'circular', 'rectangular', 'rounded']),
  classes: PropTypes.string,
  component: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  count: PropTypes.number,
  sx: PropTypes.any,
};

export default Skeleton;
