/* eslint-disable @next/next/no-sync-scripts */
import { Footer } from '@/components/byakko/footer';
import { FrontContextSettings } from '@/components/byakko/frontContextSettings';
import { Sidebar } from '@/components/byakko/sidebar';

import './globals.css';
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="/scripts/theme-mode.js" />
      </head>
      <body>
        <div className={styles.container}>
          <Sidebar />

          <FrontContextSettings />

          <div className={styles.scroll_content}>
            <main>{children}</main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}