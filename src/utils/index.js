import { BLOG_NAME } from '@/constants/index';

export const createUID = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substring(2);

  return head + tail;
};

export const isJSON = (str) => {
  try {
    JSON.parse(str);
  } catch {
    return false;
  }

  return true;
};

export const isBrowserWindowExist = () => typeof window !== 'undefined';

export const storage = (key, data = null) => {
  if (!isBrowserWindowExist()) {
    return;
  }

  if (!data) {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      return isJSON(storedData) ? JSON.parse(storedData) : storedData;
    }
  }

  localStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
};

export const range = (begin, endExclusive, step = 1) =>
  Array.from({ length: (endExclusive - begin) / step }, (_, index) => begin + index * step);

export const delay = (ms = 0) => new Promise((resolve) => setTimeout(() => resolve(), ms));

export const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const getPageTitle = (subtitle = null) =>
  subtitle ? `${capitalizeFirstLetter(BLOG_NAME)} - ${subtitle}` : BLOG_NAME;

export const isEnvVariableTrue = (booleanEnvVar) => /true/.test(booleanEnvVar);

export const getEnv = (envOption) => process.env[envOption];

export const isProduction = () => getEnv('NODE_ENV') === 'production';

export const getLastArrayElementIndex = (arr) => arr.length - 1;

export const isArrayEmpty = (arr) => !!(Array.isArray(arr) && arr.length);

export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
