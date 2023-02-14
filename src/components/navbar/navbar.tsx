import Link from 'next/link';
import { lazy, Suspense } from 'react';

// @ts-expect-error
const Auth = lazy(() => import('../auth'));

import styles from './navbar.module.css';

export const Navbar = () => (
  <header className={styles.container}>
    {/* <header className="navbar navbar-inverse navbar-fixed-top"> */}
    <div className="navbar-header">
      <a href="/" className="navbar-brand">
        Homepage
      </a>
    </div>
    <div className={styles.content}>
      <ul className="nav navbar-nav">
        <li>
          <Link href="http://www.gmail.com/" target="_blank" rel="noreferrer">
            Gmail
          </Link>
        </li>
        <li>
          <Link href="/challenge">Challenge</Link>
        </li>
      </ul>
      <ul style={{ marginRight: 0 }} className="nav navbar-nav navbar-right">
        <li>
          <Suspense fallback={<div>Loading...</div>}>
            <Auth />
          </Suspense>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
);
