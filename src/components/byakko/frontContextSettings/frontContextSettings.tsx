'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Auth from '@/components/auth';

import styles from './frontContextSettings.module.css';

const LOCALES_LIST = ['fr', 'en'];

const setCookie = (cname: string, cvalue: any, exdays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

export const FrontContextSettings = () => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const handleToggle = (event: any) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );

    setDarkTheme(initialColorValue === 'dark');
  }, []);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('atora-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('atora-theme', 'light');
      }
    }
  }, [darkTheme]);

  const onLocaleChange = (e: any) => {
    const locale = e.target.value;
    setCookie('NEXT_LOCALE', locale, 365 * 3);
    // router.push(`${pathname}${query}`, { locale: 'en' });
  };

  return (
    <div className={styles.container}>
      <Auth />
    </div>
  );
};
