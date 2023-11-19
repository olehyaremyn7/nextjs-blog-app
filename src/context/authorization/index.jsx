'use client';

import { SessionProvider } from 'next-auth/react';

const AuthorizationProvider = ({ children }) => <SessionProvider>{children}</SessionProvider>;

export default AuthorizationProvider;
