import { SOCIAL_NETWORKS } from './socialNetworks';
import { createUID } from '@/utils/index';

export const NAVIGATION_LINKS = [
  {
    id: createUID(),
    href: '/',
    label: 'Go to the Home page',
    name: 'Home',
    requireAuthorization: false,
    showAuthorizedUser: true,
  },
  {
    id: createUID(),
    href: '/contact',
    label: 'Navigate to the Contact page',
    name: 'Contact',
    requireAuthorization: false,
    showAuthorizedUser: true,
  },
  {
    id: createUID(),
    href: '/about',
    label: 'Visit the About Us page',
    name: 'About',
    requireAuthorization: false,
    showAuthorizedUser: true,
  },
  {
    id: createUID(),
    href: '/faq',
    label: 'Explore Frequently Asked Questions',
    name: 'FAQ',
    requireAuthorization: false,
    showAuthorizedUser: true,
  },
  {
    id: createUID(),
    href: '/login',
    label: 'Navigate to Login page',
    name: 'Login',
    requireAuthorization: false,
    showAuthorizedUser: false,
  },
  {
    id: createUID(),
    href: '/write',
    label: 'Navigate to Create article page',
    name: 'Write',
    requireAuthorization: true,
    showAuthorizedUser: true,
  },
  {
    id: createUID(),
    href: '/',
    label: 'Logout',
    name: 'Logout',
    requireAuthorization: true,
    showAuthorizedUser: true,
  },
];

export const FOOTER_LINKS = [
  {
    id: createUID(),
    title: 'Links',
    links: [...NAVIGATION_LINKS]
      .filter(({ requireAuthorization, showAuthorizedUser }) => !requireAuthorization && showAuthorizedUser)
      .toSpliced(1, 0, {
        id: createUID(),
        href: '/',
        label: 'Go to the Blog page',
        name: 'Blog',
      }),
  },
  {
    id: createUID(),
    title: 'Tags',
    links: [
      {
        id: createUID(),
        href: '/',
        label: 'Follow Style tag',
        name: 'Style',
      },
      {
        id: createUID(),
        href: '/',
        label: 'Follow Fashion tag',
        name: 'Fashion',
      },
      {
        id: createUID(),
        href: '/',
        label: 'Follow Coding tag',
        name: 'Coding',
      },
      {
        id: createUID(),
        href: '/',
        label: 'Follow Travel tag',
        name: 'Travel',
      },
      {
        id: createUID(),
        href: '/',
        label: 'Follow Politic tag',
        name: 'Politic',
      },
    ],
  },
  {
    id: createUID(),
    title: 'Social',
    links: SOCIAL_NETWORKS.map(({ title: name, link: href }) => ({
      href,
      name,
      id: createUID(),
      label: `Follow us in ${name}`,
    })),
  },
];
