import Skeleton from '../UI/Skeleton';
import styles from './Skeletons.module.css';

const PostSkeleton = () => (
  <div className={styles.post}>
    <div className={styles.postImage}>
      <Skeleton variant="rectangular" height={400} width={400} />
    </div>
    <div>
      <Skeleton variant="heading" height={90} />
      <Skeleton variant="text" count={4} height={20} />
      <Skeleton sx={{ marginTop: '1.5rem' }} variant="text" height={50} width={120} />
    </div>
  </div>
);

export default PostSkeleton;
