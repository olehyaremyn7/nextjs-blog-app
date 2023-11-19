'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Skeleton from '@/components/UI/Skeleton';
import Page from '@/components/UI/Page';
import Title from '@/components/UI/Title';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';

const Button = dynamic(() => import('@/components/UI/Button'), {
  loading: () => <Skeleton animation="wave" variant="rounded" height={48} width={86} />,
});

const Error = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleBackHomeButtonClick = () => {
    router.push('/');
  };

  return (
    <Page classes={styles.errorWrapper}>
      <div className={styles.error}>
        <Title text="Oops! Something wrong here..." forceFocus />
        <p>We are sorry, but it seems like there is been an error. Please try again later or head back to home.</p>
        <div className={styles.errorAction}>
          <Button text="Try again" title="Try again" ariaLabel="Try to load page again" onClick={reset} />
          <Button
            text="Home"
            title="Home"
            color="accent"
            ariaLabel="Back to home page"
            onClick={handleBackHomeButtonClick}
          />
        </div>
      </div>
    </Page>
  );
};

export default Error;
