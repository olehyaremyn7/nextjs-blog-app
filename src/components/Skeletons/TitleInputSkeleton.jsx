import clsx from 'clsx';
import Skeleton from '../UI/Skeleton';
import styles from './Skeletons.module.css';

const TitleInputSkeleton = ({ classes }) => (
  <Skeleton classes={clsx(styles.titleInputSkeleton, classes)} sx={{ marginBottom: '2rem' }} />
);

export default TitleInputSkeleton;
