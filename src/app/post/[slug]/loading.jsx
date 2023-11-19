import Page from '@/components/UI/Page';
import Skeleton from '@/components/UI/Skeleton';
import UserInfoSkeleton from '@/components/Skeletons/UserInfoSkeleton';
import MenuSkeleton from '@/components/Skeletons/MenuSkeleton';
import CommentFormSkeleton from '@/components/Skeletons/CommentFormSkeleton';
import { range } from '@/utils/index';
import styles from './PostPage.module.css';

const Loading = () => (
  <Page>
    <div className={styles.infoContainer}>
      <div className={styles.textContainerSkeleton}>
        <Skeleton sx={{ marginTop: '-3rem', marginBottom: '-3rem' }} variant="heading" height={250} />
        <UserInfoSkeleton />
      </div>
      <Skeleton classes={styles.imageContainer} variant="rectangular" height={350} width={350} />
    </div>
    <div className={styles.content}>
      <div className={styles.post}>
        <Skeleton variant="text" height={300} />
        <div className={styles.commentsSkeleton}>
          <Skeleton sx={{ marginTop: '-2rem', marginBottom: 0 }} variant="heading" height={80} />
          <CommentFormSkeleton />
          {range(0, 6).map((i) => (
            <div key={`comment-skeleton-${i}`}>
              <UserInfoSkeleton />
              <Skeleton sx={{ marginTop: '2rem' }} variant="text" height={80} />
            </div>
          ))}
        </div>
      </div>
      <MenuSkeleton />
    </div>
  </Page>
);

export default Loading;
