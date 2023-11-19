import Page from '@/components/UI/Page';
import Skeleton from '@/components/UI/Skeleton';
import PostsSkeleton from '@/components/Skeletons/PostsSkeleton';
import MenuSkeleton from '@/components/Skeletons/MenuSkeleton';
import styles from './HomePage.module.css';

const Loading = () => (
  <Page>
    <Skeleton variant="heading" height={200} />
    <div className={styles.introSkeleton}>
      <div className={styles.introSkeletonImage}>
        <Skeleton variant="rectangular" height={500} width={580} />
      </div>
      <div>
        <Skeleton variant="heading" height={130} />
        <Skeleton variant="text" count={5} height={25} />
        <Skeleton sx={{ marginTop: '1.5rem' }} variant="rounded" height={60} width={150} />
      </div>
    </div>
    <Skeleton variant="heading" height={100} width={400} />
    <div className={styles.categoriesSkeleton}>
      <Skeleton variant="rounded" count={6} height="100%" />
    </div>
    <Skeleton sx={{ marginTop: '2rem' }} variant="heading" height={100} width={400} />
    <section className="content">
      <PostsSkeleton />
      <MenuSkeleton />
    </section>
  </Page>
);

export default Loading;
