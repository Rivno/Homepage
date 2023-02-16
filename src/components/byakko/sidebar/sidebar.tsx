'use client';

import { usePathname } from 'next/navigation';

import { SidebarLink } from './sidebarLink';

import styles from './sidebar.module.css';

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <SidebarLink href="/" currentPath={pathname}>
        Home
      </SidebarLink>
      <SidebarLink href="/challenge" currentPath={pathname}>
        Challenge
      </SidebarLink>
      <SidebarLink href="/article" currentPath={pathname}>
        Articles
      </SidebarLink>
      <SidebarLink href="/design" currentPath={pathname}>
        Palette
      </SidebarLink>
      <SidebarLink href="/cv" currentPath={pathname}>
        CV
      </SidebarLink>
      <SidebarLink href="/contact" currentPath={pathname}>
        Contact
      </SidebarLink>
    </div>
  );
};
