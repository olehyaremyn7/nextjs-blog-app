import Skeleton from '@/components/UI/Skeleton';
import styles from './Faq.module.css';

const Loading = () => (
  <>
    <Skeleton variant="heading" height={120} />
    <Skeleton sx={{ marginTop: '-1rem', marginBottom: '2rem' }} variant="heading" height={100} />
    <ul className={styles.skeletonQuestions}>
      <Skeleton classes={styles.skeletonQuestion} count={20} variant="rectangular" height={44} />
    </ul>
  </>
);

export default Loading;
