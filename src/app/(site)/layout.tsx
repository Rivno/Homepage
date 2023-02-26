import { AuthContext } from '@/components/auth/authContext';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ReactQuery } from '@/components/reactQuery';

import styles from './layout.module.css';
import '../globals.css';

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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
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
