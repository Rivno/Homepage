'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

import SvgDoubleArrow from '@/icons/double_arrow.svg';
import SvgHome from '@/icons/home.svg';
import SvgMail from '@/icons/mail.svg';
import SvgNews from '@/icons/news.svg';
import SvgPhysics from '@/icons/physics.svg';

import { SidebarLink } from './sidebarLink';

import styles from './sidebar.module.css';

export const Sidebar = () => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const onExpandedClick = () => setIsExpanded((v) => !v);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  return (
    <div
      className={styles.container}
      ref={wrapperRef}
      aria-expanded={isExpanded}
    >
      <div className={styles.content}>
        <SidebarLink href="/" currentPath={pathname}>
          <span>Home</span>
          <SvgHome />
        </SidebarLink>
        <SidebarLink href="/challenge" currentPath={pathname}>
          <span>Challenge</span>
          <SvgPhysics />
        </SidebarLink>
        <SidebarLink href="/article" currentPath={pathname}>
          <span>Articles</span>
          <SvgNews />
        </SidebarLink>
        <SidebarLink href="/contact" currentPath={pathname}>
          <span>Contact</span>
          <SvgMail />
        </SidebarLink>
      </div>
      <button className={styles.expanded_button} onClick={onExpandedClick}>
        <SvgDoubleArrow />
      </button>
    </div>
  );
};
