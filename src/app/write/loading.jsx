import Page from '@/components/UI/Page';
import Skeleton from '@/components/UI/Skeleton';
import PublishButtonSkeleton from '@/components/Skeletons/PublishButtonSkeleton';
import SelectCategorySkeleton from '@/components/Skeletons/SelectCategorySkeleton';
import TitleInputSkeleton from '@/components/Skeletons/TitleInputSkeleton';
import styles from './WritePage.module.css';

const Loading = () => (
  <Page classes={styles.root}>
    <div className={styles.headerSkeleton}>
      <SelectCategorySkeleton />
      <PublishButtonSkeleton />
    </div>
    <TitleInputSkeleton />
    <Skeleton variant="circular" height={55} width={55} />
    <Skeleton sx={{ marginBottom: 0 }} height={700} />
  </Page>
);

export default Loading;
