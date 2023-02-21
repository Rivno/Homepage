/* eslint-disable @next/next/no-sync-scripts */
import { AuthContext } from '@/components/auth/authContext';
import { Footer } from '@/components/byakko/footer';
import { FrontContextSettings } from '@/components/byakko/frontContextSettings';
import { Sidebar } from '@/components/byakko/sidebar';

import './globals.css';
import styles from './layout.module.css';

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
        </AuthContext>
      </body>
    </html>
  );
}
