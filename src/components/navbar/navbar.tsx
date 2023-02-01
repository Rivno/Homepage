import Link from 'next/link';

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
      </ul>
      <ul style={{ marginRight: 0 }} className="nav navbar-nav navbar-right">
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
);
