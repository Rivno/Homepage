import { AuthContext } from '@/components/auth/authContext';
import { Footer } from '@/components/homepage/footer';
import { Navbar } from '@/components/homepage/navbar';
import { ReactQuery } from '@/components/reactQuery';

import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  title: 'RIVNO HOMEPAGE',
  description: 'RIVNO HOMEPAGE',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthContext>
          <ReactQuery>
            <Navbar />
            <div className={styles.main_content}>
              <main>{children}</main>
              <Footer />
            </div>
          </ReactQuery>
        </AuthContext>
      </body>
    </html>
  );
}
