import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthorizationProvider from '@/context/authorization/index';
import ThemeProvider from '@/context/theme/index';
import { getPageTitle } from '@/utils/index';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: getPageTitle(),
  description: 'The best blog app!',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <AuthorizationProvider>
        <ThemeProvider>
          <section className="container">
            <div className="wrapper">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </section>
        </ThemeProvider>
      </AuthorizationProvider>
    </body>
  </html>
);

export default RootLayout;
