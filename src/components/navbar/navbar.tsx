import Link from 'next/link';
import { lazy, Suspense } from 'react';

// // @ts-expect-error
// const Auth = lazy(() => import('../auth'));
import Auth from '../auth';

import styles from './navbar.module.css';

export const Navbar = () => (
  <header className={styles.container}>
    <div className="navbar-header">
      <Link href="/" className="navbar-brand">
        Homepage
      </Link>
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
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Auth />
          {/* </Suspense> */}
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
);
