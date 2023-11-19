import Skeleton from '@/components/UI/Skeleton';
import PhotoGallerySkeleton from '@/components/Skeletons/PhotoGallerySkeleton';
import styles from './About.module.css';

const ImageBlocks = () => (
  <div className={styles.photos}>
    <Skeleton classes={styles.imageContainer} count={3} variant="rounded" height={375} width={300} />
  </div>
);

const PhotoGalleryBlock = () => (
  <>
    <Skeleton sx={{ marginTop: '1.5rem' }} variant="heading" height={80} />
    <Skeleton variant="text" height={30} />
    <Skeleton sx={{ marginBottom: '2rem' }} variant="text" height={30} />
    <PhotoGallerySkeleton />
  </>
);

const Loading = () => (
  <>
    <Skeleton variant="heading" height={120} />
    <Skeleton sx={{ marginTop: '-1rem' }} variant="heading" height={120} />
    <ImageBlocks />
    <Skeleton sx={{ marginTop: '1rem' }} variant="heading" height={80} />
    <Skeleton sx={{ marginBottom: '2rem' }} variant="text" height={150} />
    <Skeleton count={2} variant="text" height={30} />
    <Skeleton sx={{ marginBottom: '2rem' }} variant="text" height={30} />
    <ImageBlocks />
    <Skeleton sx={{ marginTop: '1.5rem' }} variant="heading" height={80} />
    <Skeleton count={2} variant="text" height={30} />
    <Skeleton sx={{ marginBottom: '2rem' }} variant="text" height={30} />
    <Skeleton sx={{ marginTop: '1.5rem' }} variant="heading" height={80} />
    <div className={styles.coreValues}>
      <Skeleton classes={styles.coreValue} count={5} variant="rounded" height={300} width={300} />
    </div>
    <Skeleton sx={{ marginTop: '1.5rem' }} variant="heading" height={80} />
    <Skeleton sx={{ marginBottom: '2rem' }} variant="text" height={30} />
    <div className={styles.features}>
      <Skeleton classes={styles.feature} count={5} variant="rounded" height={80} />
    </div>
    <PhotoGalleryBlock />
    <PhotoGalleryBlock />
    <Skeleton sx={{ marginTop: '1.5rem' }} variant="heading" height={80} />
    <Skeleton count={2} variant="text" height={30} />
    <div className={styles.feedbacks}>
      <Skeleton classes={styles.feedback} count={4} variant="rounded" height={150} />
    </div>
  </>
);

export default Loading;
