'use client';

import clsx from 'clsx';
import { memo } from 'react';
import dynamic from 'next/dynamic';
import Skeleton from '../UI/Skeleton';
import Loader from '@/components/UI/Loader';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { isLoading, isAuthenticated } from '@/utils/authorization';
import { LOGIN_OPTIONS } from '@/constants/login';
import styles from './Authorization.module.css';

const Button = dynamic(() => import('@/components/UI/Button'), {
  loading: () => (
    <Skeleton classes={styles.authButton} sx={{ marginBottom: 0 }} animation="wave" variant="rounded" height="100%" />
  ),
});

const Authorization = () => {
  const { status } = useSession();
  const router = useRouter();

  if (isAuthenticated(status)) {
    router.push('/');
  }

  const handleLoginButtonClick = ({ target: { dataset } }) => {
    const { authMethod } = dataset;

    signIn(authMethod);
  };

  return (
    <ul className={styles.root}>
      {!isLoading(status) ? (
        LOGIN_OPTIONS.map(({ id, method, title, label, available }) => (
          <li key={`login-method-button-${id}`}>
            <Button
              text={title}
              classes={clsx(styles.authButton, styles[method])}
              onClick={handleLoginButtonClick}
              ariaLabel={label}
              title={label}
              disabled={!available}
              data-auth-method={method}
            />
          </li>
        ))
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default memo(Authorization);
