import Skeleton from '../UI/Skeleton';
import styles from './Skeletons.module.css';

const MENU_SKELETON = [
  {
    count: 3,
    variant: 'rounded',
    height: 70,
  },
  {
    count: 0,
    variant: 'rectangular',
    height: 120,
  },
  {
    count: 4,
    variant: 'rounded',
    height: 90,
  },
];

const MenuSkeleton = () => (
  <div className={styles.menu}>
    {MENU_SKELETON.map((skeletonProps, index) => (
      <div key={`menu-skeleton-${index}`} className={styles.menuContent}>
        <Skeleton sx={{ marginBottom: '1rem' }} variant="heading" height={110} />
        <Skeleton {...skeletonProps} />
      </div>
    ))}
  </div>
);

export default MenuSkeleton;
