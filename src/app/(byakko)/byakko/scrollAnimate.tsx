'use client';

import { useEffect, useMemo } from 'react';

import styles from './scrollAnimate.module.css';

export function ScrollAnimate({
  children,
  twoWays = false,
}: {
  children: React.ReactNode | React.ReactNode[];
  twoWays?: boolean;
}) {
  const observer = useMemo(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    return new IntersectionObserver((entries) => {
      for (let index = 0; index < entries.length; index += 1) {
        const entry = entries[index];
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-scroll-show', 'true');
        } else if (twoWays) {
          entry.target.removeAttribute('data-scroll-show');
        }
      }
    });
  }, []);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('[data-scroll="true"]');

    for (let index = 0; index < hiddenElements.length; index += 1) {
      const element = hiddenElements[index];
      observer?.observe(element);
    }

    return () => {
      for (let index = 0; index < hiddenElements.length; index += 1) {
        const element = hiddenElements[index];
        observer?.unobserve(element);
      }
    };
  }, []);

  return <div className={styles.scroll_animate}>{children}</div>;
}
