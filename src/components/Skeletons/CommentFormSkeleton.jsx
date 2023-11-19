import Skeleton from '../UI/Skeleton';
import styles from './Skeletons.module.css';

const CommentFormSkeleton = () => (
  <div className={styles.commentForm}>
    <Skeleton animation="wave" sx={{ marginBottom: 0 }} variant="text" height={25} />
    <Skeleton animation="wave" sx={{ marginBottom: 0 }} variant="text" height={20} />
    <Skeleton animation="wave" sx={{ marginBottom: 0 }} variant="rounded" height={80} />
    <Skeleton animation="wave" sx={{ marginBottom: 0 }} variant="rounded" height={48} width={82} />
  </div>
);

export default CommentFormSkeleton;
