'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';
import ThemeContext from './context';
import { THEMES } from '@/constants/index';
import { getStoredTheme, setToStorageTheme } from './utils';

const ThemeProvider = ({ children }) => {
  const { DARK, LIGHT } = THEMES;
  const storedTheme = useMemo(() => getStoredTheme(), []);
  const [theme, setTheme] = useState(storedTheme);
  const [mounted, setMounted] = useState(false);
  const isDark = theme === DARK;
  const themeContext = useMemo(
    () => ({
      theme,
      isDark,
      changeTheme: () => {
        setTheme(isDark ? LIGHT : DARK);
      },
    }),
    [theme],
  );

  const changeDocumentThemePreferences = useCallback(() => {
    const $htmlTag = document.querySelector('html');

    if ($htmlTag) {
      $htmlTag.setAttribute('data-theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    changeDocumentThemePreferences();
    setToStorageTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={themeContext}>{mounted && children}</ThemeContext.Provider>;
};

export default ThemeProvider;
