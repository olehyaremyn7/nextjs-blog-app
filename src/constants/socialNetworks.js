import { createUID } from '@/utils/index';

export const SOCIAL_NETWORKS = [
  {
    id: createUID(),
    src: '/facebook.png',
    alt: 'facebook logo icon',
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    label: 'Visit Facebook profile',
  },
  {
    id: createUID(),
    src: '/instagram.png',
    alt: 'instagram logo icon',
    title: 'Instagram',
    link: 'https://www.instagram.com/',
    label: 'Visit Instagram profile',
  },
  {
    id: createUID(),
    src: '/tiktok.png',
    alt: 'tiktok logo icon',
    title: 'Tiktok',
    link: 'https://www.tiktok.com',
    label: 'Visit Tiktok profile',
  },
  {
    id: createUID(),
    src: '/youtube.png',
    alt: 'youtube logo icon',
    title: 'YouTube',
    link: 'https://www.youtube.com/',
    label: 'Visit YouTube channel',
  },
];
