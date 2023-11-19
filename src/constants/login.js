import { createUID, isEnvVariableTrue } from '@/utils/index';

export const LOGIN_OPTIONS = [
  {
    id: createUID(),
    label: 'Sign in with Google',
    title: 'Sign in with Google',
    method: 'google',
    available: isEnvVariableTrue(process.env.NEXT_PUBLIC_GOOGLE_AUTH),
  },
  {
    id: createUID(),
    label: 'Sign in with Apple',
    title: 'Sign in with Apple',
    method: 'apple',
    available: isEnvVariableTrue(process.env.NEXT_PUBLIC_APPLE_AUTH),
  },
  {
    id: createUID(),
    label: 'Sign in with Github',
    title: 'Sign in with Github',
    method: 'github',
    available: isEnvVariableTrue(process.env.NEXT_PUBLIC_GITHUB_AUTH),
  },
  {
    id: createUID(),
    label: 'Sign in with Facebook',
    title: 'Sign in with Facebook',
    method: 'facebook',
    available: isEnvVariableTrue(process.env.NEXT_PUBLIC_FACEBOOK_AUTH),
  },
];
