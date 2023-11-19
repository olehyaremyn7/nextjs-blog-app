import Page from '@/components/UI/Page';
import Skeleton from '@/components/UI/Skeleton';
import styles from './LoginPage.module.css';

const Loading = () => (
  <Page classes={styles.root}>
    <div className={styles.wrapper}>
      <Skeleton classes={styles.titleSkeleton} variant="heading" />
      <div className={styles.authButtonsSkeleton}>
        <Skeleton classes={styles.authButtonSkeleton} count={4} variant="rounded" />
      </div>
    </div>
  </Page>
);

export default Loading;
