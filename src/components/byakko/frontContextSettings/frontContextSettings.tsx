'use client';

import Link from 'next/link';
import { useState } from 'react';

import Auth from '@/components/auth';
import SvgSettings from '@/icons/settings.svg';

import LogoGithub from '../../../../public/cv/companies/github.svg';
import LogoLinkedin from '../../../../public/cv/companies/linkedin.svg';

import styles from './frontContextSettings.module.css';

export const FrontContextSettings = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onExpandedClick = () => setIsExpanded((v) => !v);

  return (
    <div className={styles.container} aria-expanded={isExpanded}>
      {/* <button className={styles.expanded_button} onClick={onExpandedClick}>
        <SvgSettings />
      </button> */}
      <Link
        href="https://www.linkedin.com/in/allanbienne/"
        target="_blank"
        rel="noreferrer"
        className={styles.linkedin}
      >
        <LogoLinkedin />
      </Link>

      <Link
        href="https://github.com/Rivno"
        target="_blank"
        rel="noreferrer"
        className={styles.github}
      >
        <LogoGithub />
      </Link>
      <Auth />
    </div>
  );
};
