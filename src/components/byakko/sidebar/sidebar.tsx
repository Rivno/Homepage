'use client';

import { usePathname } from 'next/navigation';

import { SidebarLink } from './sidebarLink';

import styles from './sidebar.module.css';

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SidebarLink href="/" currentPath={pathname}>
          Home
        </SidebarLink>
        <SidebarLink href="/steps" currentPath={pathname}>
          Steps
        </SidebarLink>
        <SidebarLink href="/article" currentPath={pathname}>
          Article
        </SidebarLink>
        <SidebarLink href="/design" currentPath={pathname}>
          Design
        </SidebarLink>
        <SidebarLink href="/stack" currentPath={pathname}>
          Stack
        </SidebarLink>
        <SidebarLink href="/about-me" currentPath={pathname}>
          About me
        </SidebarLink>
        <SidebarLink href="/contact" currentPath={pathname}>
          Contact
        </SidebarLink>
      </div>
    </div>
  );
};
