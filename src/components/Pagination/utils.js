import { POST_PER_PAGE } from '@/constants/index';

export const isPrev = (page) => POST_PER_PAGE * (page - 1) > 0;

export const isNext = (page, count) => POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

export const isPrevButton = (paginationButton) => paginationButton === 'prev';
