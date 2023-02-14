import styles from './layout.module.css';
import '../globals.css';

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
