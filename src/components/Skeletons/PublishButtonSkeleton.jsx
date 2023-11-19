import clsx from 'clsx';
import Skeleton from '../UI/Skeleton';
import styles from './Skeletons.module.css';

const PublishButtonSkeleton = ({ classes }) => (
  <Skeleton classes={clsx(styles.publishButtonSkeleton, classes)} height={48} />
);

export default PublishButtonSkeleton;
