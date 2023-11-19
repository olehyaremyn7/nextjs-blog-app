'use client';

import clsx from 'clsx';
import { useState, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import Skeleton from '../UI/Skeleton';
import SocialNetworks from '../SocialNetworks';
import ThemeToggle from '../ThemeToggle';
import { useSession, signOut } from 'next-auth/react';
import { BLOG_NAME } from '@/constants/index';
import { range } from '@/utils/index';
import { isAuthenticated as checkIsAuthenticated } from '@/utils/authorization';
import styles from './Navbar.module.css';

const NavigationLinks = dynamic(() => import('@/components/NavigationLinks'), {
  loading: () => (
    <Skeleton classes={styles.navigationLinksSkeleton} variant="rectangular" animation="wave" height={25} />
  ),
});
const Switch = dynamic(() => import('@/components/UI/Switch'), {
  loading: () => <Skeleton classes={styles.burger} variant="rectangular" animation="wave" />,
});

const Navbar = () => {
  const { status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = checkIsAuthenticated(status);

  const handleBurgerSwitchClick = () => {
    setIsOpen((prevState) => !prevState);

    document.body.classList.toggle('lock-scroll');
  };

  const handleLogout = useCallback(() => {
    signOut();
  }, []);

  const handleCloseResponsiveMenu = useCallback(() => {
    if (isOpen) {
      handleBurgerSwitchClick();
    }
  }, [isOpen]);

  return (
    <header className={styles.root}>
      <SocialNetworks classes={styles.socialNetworks} />
      <span className={styles.logo}>{BLOG_NAME}</span>
      <nav className={styles.navigation}>
        <ThemeToggle classes={styles.themeToggle} />
        <NavigationLinks isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Switch
          id="burger-switch"
          className={styles.burger}
          onClick={handleBurgerSwitchClick}
          onKeyDown={handleBurgerSwitchClick}
          checked={isOpen}
          ariaLabel={`${isOpen ? 'Close' : 'Open'} navigation menu`}
        >
          {range(0, 3).map((i) => (
            <span
              key={`burger-line-${i + 1}`}
              className={clsx(styles.line, styles[`line-${i + 1}`], isOpen && styles.isClosed)}
              aria-hidden
            />
          ))}
        </Switch>
      </nav>
      <div className={clsx(styles.responsiveMenu, isOpen && styles.active)}>
        {range(0, 5).map((i) => (
          <div
            key={`menu-effect-block-${i + 1}`}
            className={clsx(styles.effectBlock, styles[`effectBlock-${i + 1}`])}
          />
        ))}
        <NavigationLinks
          isOpen={isOpen}
          isNavigationLinksHidden={!isOpen}
          isAuthenticated={isAuthenticated}
          isResponsiveMenu
          onLogout={handleLogout}
          onCloseResponsiveMenu={handleCloseResponsiveMenu}
        />
      </div>
    </header>
  );
};

export default memo(Navbar);
