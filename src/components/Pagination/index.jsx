'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';
import Skeleton from '../UI/Skeleton';
import { useRouter } from 'next/navigation';
import { isPrevButton, isPrev, isNext } from './utils';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Button = dynamic(() => import('@/components/UI/Button'), {
  loading: () => <Skeleton animation="wave" variant="rounded" height={48} width={82} />,
});

const Pagination = ({ page, count, cat = '' }) => {
  const router = useRouter();
  const hasPrev = !isPrev(page);
  const hasNext = !isNext(page, count);

  const handlePaginationButtonClick = ({ target: { dataset } }) => {
    const { paginationButton } = dataset;
    const nextPage = isPrevButton(paginationButton) ? page - 1 : page + 1;

    router.push(
      `?${new URLSearchParams({
        cat,
        page: nextPage,
      })}`,
    );
  };

  return (
    <div className={styles.root}>
      <Button
        text="Previous"
        title="Previous page"
        disabled={hasPrev}
        ariaLabel="Previous page"
        onClick={handlePaginationButtonClick}
        data-pagination-button="prev"
      />
      <Button
        text="Next"
        title="Next page"
        disabled={hasNext}
        ariaLabel="Next page"
        onClick={handlePaginationButtonClick}
        data-pagination-button="next"
      />
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  cat: PropTypes.string,
};

export default memo(Pagination);
