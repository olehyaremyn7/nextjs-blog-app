'use client';

import dynamic from 'next/dynamic';
import Skeleton from '@/components/UI/Skeleton';
import Page from '@/components/UI/Page';
import Title from '@/components/UI/Title';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';

const Button = dynamic(() => import('@/components/UI/Button'), {
  loading: () => <Skeleton animation="wave" variant="rounded" height={48} width={86} />,
});

const NotFound = () => {
  const router = useRouter();

  const handleBackHomeButtonClick = () => {
    router.push('/');
  };

  const handleSupportButtonClick = () => {
    router.push('/contact');
  };

  return (
    <Page classes={styles.notFoundWrapper}>
      <div className={styles.notFound}>
        <div className={styles.notFoundInfo}>
          <Title text="Oops! Page not found" forceFocus />
          <p>
            We can not find the page you are looking for. Please check out the contact page and contact support or head
            back to home.
          </p>
          <div className={styles.notFoundAction}>
            <Button
              text="Support"
              title="Contact us"
              ariaLabel="Contact support team"
              onClick={handleSupportButtonClick}
            />
            <Button
              text="Home"
              title="Home"
              color="accent"
              ariaLabel="Back to home page"
              onClick={handleBackHomeButtonClick}
            />
          </div>
        </div>
        <div className={styles.notFoundImage}>
          <span>404</span>
        </div>
      </div>
    </Page>
  );
};

export default NotFound;
