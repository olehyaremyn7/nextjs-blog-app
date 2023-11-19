import Skeleton from '../UI/Skeleton';
import styles from './Skeletons.module.css';

const UserInfoSkeleton = () => (
  <div className={styles.userInfoWrapper}>
    <Skeleton sx={{ marginBottom: 0 }} variant="circular" width={50} height={50} />
    <div className={styles.userInfo}>
      <Skeleton sx={{ marginBottom: 0 }} variant="text" height={25} />
      <Skeleton sx={{ marginBottom: 0 }} variant="text" height={15} />
    </div>
  </div>
);

export default UserInfoSkeleton;
