import NextAuth from 'next-auth';
import authorizationConfig from '@/config/authorization';

const handler = NextAuth(authorizationConfig);

export { handler as GET, handler as POST };
