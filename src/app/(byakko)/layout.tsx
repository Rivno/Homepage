/* eslint-disable @next/next/no-sync-scripts */
import { AuthContext } from '@/components/auth/authContext';
import { Footer } from '@/components/byakko/footer';
import { FrontContextSettings } from '@/components/byakko/frontContextSettings';
import { Sidebar } from '@/components/byakko/sidebar';

import { DetectMobile } from './detectMobile';

import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  title: 'ATORA',
  description: 'Allan Bienne Freelance ReactJS / NodeJS',
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
      <head>{/* <script src="/scripts/theme-mode.js" /> */}</head>
      <body>
        <AuthContext>
          <div className={styles.container}>
            <main>{children}</main>

            <Footer />

            <Sidebar />

            <FrontContextSettings />
          </div>

          <DetectMobile />
        </AuthContext>
      </body>
    </html>
  );
}
