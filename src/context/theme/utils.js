import { STORED_THEME_KEY, THEMES } from '@/constants/index';
import { isBrowserWindowExist, storage } from '@/utils/index';

export const isSystemThemeDark = () =>
  isBrowserWindowExist() ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;

export const getStoredTheme = () => {
  if (!isBrowserWindowExist()) {
    return;
  }

  const { LIGHT, DARK } = THEMES;
  const savedTheme = storage(STORED_THEME_KEY);

  if (!savedTheme && isSystemThemeDark()) {
    return DARK;
  }

  return savedTheme ?? LIGHT;
};

export const setToStorageTheme = (theme) => {
  storage(STORED_THEME_KEY, theme);
};
