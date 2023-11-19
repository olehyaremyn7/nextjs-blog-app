import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './CategoryChip.module.css';

const CategoryChip = ({ classes, category, isMenu = false }) => (
  <span className={clsx(styles.root, styles[category], { [styles.menu]: isMenu, [styles.post]: !isMenu }, classes)}>
    {category}
  </span>
);

CategoryChip.propTypes = {
  classes: PropTypes.string,
  category: PropTypes.string.isRequired,
  isMenu: PropTypes.bool,
};

export default CategoryChip;
