'use client';

import clsx from 'clsx';
import { memo, useMemo, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NavigationLink from '../NavigationLink';
import { createNavigationLinkId, filterNavigationLinks, isLogoutLink } from './utils';
import { getLastArrayElementIndex } from '@/utils/index';
import PropTypes from 'prop-types';
import styles from './NavigationLinks.module.css';

const NavigationLinks = ({
  classes,
  isOpen,
  isAuthenticated,
  isResponsiveMenu = false,
  isNavigationLinksHidden = false,
  onLogout,
  onCloseResponsiveMenu,
}) => {
  const pathname = usePathname();
  const navigationLinks = useMemo(() => filterNavigationLinks(isAuthenticated), [isAuthenticated]);

  const handleEditorKeyDownCapture = useCallback(
    (event) => {
      if (!isResponsiveMenu) {
        return;
      }

      const { key, target, shiftKey } = event;
      const {
        dataset: { lastNavigationLink, prevNavigationLink },
      } = target;

      if (key === 'Tab' && /true/.test(lastNavigationLink)) {
        event.preventDefault();
        event.stopPropagation();

        document.getElementById(shiftKey ? prevNavigationLink : 'burger-switch').focus();
      }
    },
    [isResponsiveMenu],
  );

  return (
    <ul
      className={clsx(
        {
          [styles.root]: !isResponsiveMenu,
          [styles.rootResponsive]: isResponsiveMenu,
          [styles.open]: isOpen,
        },
        classes,
      )}
    >
      {navigationLinks.map(({ id, href, label, name }, index) => {
        const isLogout = isLogoutLink(href, name);

        return (
          <NavigationLink
            key={id}
            id={createNavigationLinkId(name, isResponsiveMenu)}
            className={styles.link}
            href={href}
            title={name}
            ariaLabel={label}
            isActive={pathname === href && !isLogout}
            isHidden={isNavigationLinksHidden}
            prevLink={
              isResponsiveMenu ? createNavigationLinkId(navigationLinks.at(index - 1).name, isResponsiveMenu) : null
            }
            isLastLink={isResponsiveMenu ? index === getLastArrayElementIndex(navigationLinks) : null}
            onClick={isLogout ? onLogout : onCloseResponsiveMenu}
            onKeyDownCapture={handleEditorKeyDownCapture}
          />
        );
      })}
    </ul>
  );
};

NavigationLinks.propsTypes = {
  classes: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isResponsiveMenu: PropTypes.bool,
  isNavigationLinksHidden: PropTypes.bool,
  onLogout: PropTypes.func,
  onCloseResponsiveMenu: PropTypes.func,
};

export default memo(NavigationLinks);
