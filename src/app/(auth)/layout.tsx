import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  title: 'Signin - ATORA',
  description: 'Signin - ATORA',
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
        <div className={styles.main_content}>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
