import Skeleton from '@/components/UI/Skeleton';
import styles from './Skeletons.module.css';

const PhotoGallerySkeleton = () => (
  <div className={styles.gallery}>
    <Skeleton classes={styles.galleryItem} count={11} variant="rectangular" height="100%" />
  </div>
);

export default PhotoGallerySkeleton;
