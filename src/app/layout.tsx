import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ReactQuery } from '@/components/reactQuery';

import './globals.css';
import styles from './layout.module.css';

export default function RootLayout({
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
        <ReactQuery>
          <Navbar />
          <div className={styles.main_content}>
            <main>{children}</main>
            <Footer />
          </div>
        </ReactQuery>
      </body>
    </html>
  );
}
