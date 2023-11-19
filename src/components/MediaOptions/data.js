import { createUID } from '@/utils/index';

export const MEDIA_OPTIONS = [
  {
    id: createUID(),
    className: 'uploadImage',
    iconSrc: '/image.png',
    alt: 'image media option image',
    title: 'Upload image',
    ariaLabel: 'Upload image',
    accept: 'image/*',
    isLoading: false,
    disabled: false,
  },
  {
    id: createUID(),
    className: 'uploadVideo',
    iconSrc: '/video.png',
    alt: 'video media option image',
    title: 'Upload video',
    ariaLabel: 'Upload video',
    accept: 'video/*',
    isLoading: false,
    disabled: false,
  },
  {
    id: createUID(),
    className: 'uploadExternal',
    iconSrc: '/external.png',
    alt: 'external media option image',
    title: 'Upload external',
    ariaLabel: 'Upload external',
    accept: '.pdf,.doc,.docx',
    isLoading: false,
    disabled: false,
  },
];
