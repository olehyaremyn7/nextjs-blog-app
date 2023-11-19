'use client';

import clsx from 'clsx';
import { memo } from 'react';
import dynamic from 'next/dynamic';
import CommentFormSkeleton from '../Skeletons/CommentFormSkeleton';
import Link from 'next/link';
import Loader from '../UI/Loader';
import { useSession } from 'next-auth/react';
import { isAuthenticated as checkIsAuthenticated, isLoading } from '@/utils/authorization';
import PropTypes from 'prop-types';
import styles from './Comments.module.css';

const CommentForm = dynamic(() => import('../CommentForm'), {
  loading: () => <CommentFormSkeleton />,
});

const Comments = ({ postSlug, isComments, children }) => {
  const { status } = useSession();
  const isAuthenticated = checkIsAuthenticated(status);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Comments</h2>
      <div className={clsx(styles.comments, !isAuthenticated && !isComments && [styles.noData, styles.noDataComments])}>
        {!isLoading(status) ? (
          <>
            {isAuthenticated ? (
              <CommentForm postSlug={postSlug} />
            ) : (
              <p className={clsx(styles.noComments, isComments && styles.noData)}>
                Please{' '}
                <Link
                  href="/login"
                  className={styles.loginLink}
                  aria-label="Follow this link to log in and leave a comment"
                >
                  login
                </Link>{' '}
                to leave a comment
              </p>
            )}
          </>
        ) : (
          <Loader isWrapper wrapperClasses={styles.loading} />
        )}
        {isComments ? (
          children
        ) : (
          <p className={clsx(styles.noComments, isAuthenticated && styles.noData)}>
            No comments have been added to this article yet
          </p>
        )}
      </div>
    </section>
  );
};

Comments.propTypes = {
  postSlug: PropTypes.string.isRequired,
  isComments: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(Comments);
