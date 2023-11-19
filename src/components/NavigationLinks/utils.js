import { NAVIGATION_LINKS } from '@/constants/navigation';

export const filterNavigationLinks = (isAuthenticated) =>
  NAVIGATION_LINKS.filter(
    ({ requireAuthorization, showAuthorizedUser }) =>
      (!requireAuthorization && showAuthorizedUser) ||
      (!requireAuthorization && !showAuthorizedUser && !isAuthenticated) ||
      (requireAuthorization && showAuthorizedUser && isAuthenticated),
  );

export const isLogoutLink = (href, name) => href === '/' && name === 'Logout';

export const createNavigationLinkId = (name, isResponsiveMenu) =>
  `${name}-navigation-link-${isResponsiveMenu ? 'responsive' : 'navbar'}`;
