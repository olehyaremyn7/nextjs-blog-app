import clsx from 'clsx';
import Title from '../Title';
import PropTypes from 'prop-types';
import styles from './Page.module.css';

const Page = ({ id, children, title = '', classes, forceFocus = false, capitalize = false, ...rest }) => (
  <section id={id} className={clsx(styles.root, classes)} {...rest}>
    {title && <Title text={title} classes={styles.title} forceFocus={forceFocus} capitalize={capitalize} />}
    {children}
  </section>
);

Page.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string,
  classes: PropTypes.string,
  forceFocus: PropTypes.bool,
  capitalize: PropTypes.bool,
};

export default Page;
