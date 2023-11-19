import clsx from 'clsx';
import Skeleton from '../UI/Skeleton';
import styles from './Skeletons.module.css';

const SelectCategorySkeleton = ({ classes }) => (
  <Skeleton classes={clsx(styles.selectCategorySkeleton, classes)} height={46} />
);

export default SelectCategorySkeleton;
