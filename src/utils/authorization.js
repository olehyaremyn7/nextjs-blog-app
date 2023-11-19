import { getServerSession } from 'next-auth';
import authorizationConfig from '@/config/authorization';

export const getAuthSession = () => getServerSession(authorizationConfig);

export const isLoading = (status) => status === 'loading';

export const isAuthenticated = (status) => status === 'authenticated';

export const isUnAuthenticated = (status) => status === 'unauthenticated';
