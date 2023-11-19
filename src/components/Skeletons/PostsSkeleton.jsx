import Skeleton from '../UI/Skeleton';
import PostSkeleton from './PostSkeleton';
import { range } from '@/utils/index';
import styles from './Skeletons.module.css';

const PostsSkeleton = () => (
  <div className={styles.posts}>
    {range(0, 3).map((i) => (
      <PostSkeleton key={`post-skeleton-${i}`} />
    ))}
    <div className={styles.pagination}>
      <Skeleton variant="rounded" count={2} height={60} width={120} />
    </div>
  </div>
);

export default PostsSkeleton;
