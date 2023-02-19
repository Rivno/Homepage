'use client';

import { useState } from 'react';

import Auth from '@/components/auth';
import SvgSettings from '@/icons/settings.svg';

import styles from './frontContextSettings.module.css';

export const FrontContextSettings = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onExpandedClick = () => setIsExpanded((v) => !v);

  return (
    <div className={styles.container} aria-expanded={isExpanded}>
      <button className={styles.expanded_button} onClick={onExpandedClick}>
        <SvgSettings />
      </button>
      <Auth />
    </div>
  );
};
