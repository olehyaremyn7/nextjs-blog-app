import Skeleton from '@/components/UI/Skeleton';
import styles from './Contact.module.css';

const ContactBlocksSkeleton = () => (
  <div className={styles.contactBlocksSkeleton}>
    <Skeleton count={3} variant="rounded" height={320} />
  </div>
);

const Loading = () => (
  <>
    <Skeleton variant="heading" height={120} />
    <Skeleton sx={{ marginTop: '-1rem' }} variant="heading" height={80} />
    <ContactBlocksSkeleton />
    <Skeleton sx={{ marginTop: '1.5rem' }} variant="heading" height={80} />
    <Skeleton sx={{ marginBottom: '3rem' }} variant="text" height={80} />
    <ContactBlocksSkeleton />
    <Skeleton sx={{ marginTop: '1.5rem' }} variant="heading" height={80} />
    <Skeleton variant="text" height={50} />
  </>
);

export default Loading;
