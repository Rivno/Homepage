import Link from 'next/link';
import { useRef } from 'react';

import styles from './sidebar.module.css';

export const SidebarLink = ({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: string | null;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const onClick = () => {
    ref.current?.blur();
  };

  let isCurrentPath = false;

  if (
    (href === '/' && currentPath === '/') ||
    (href !== '/' && currentPath?.startsWith(href))
  ) {
    isCurrentPath = true;
  }

  return (
    <Link
      className={styles.link}
      href={href}
      ref={ref}
      onClick={onClick}
      {...(isCurrentPath ? { 'aria-current': 'page' } : {})}
    >
      {children}
    </Link>
  );
};
