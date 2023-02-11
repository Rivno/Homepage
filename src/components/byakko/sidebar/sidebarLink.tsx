import Link from 'next/link';

import styles from './sidebar.module.css';

export const SidebarLink = ({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: string | null;
  children: React.ReactNode;
}) => (
  <Link
    className={styles.link}
    href={href}
    {...(href === currentPath ? { 'aria-current': 'page' } : {})}
  >
    {children}
  </Link>
);
