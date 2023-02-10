import Link from 'next/link';

import styles from './breadcrumbs.module.css';

export const Breadcrumbs = ({
  items,
}: {
  items: { label: string; path: string }[];
}) => (
  <ul className={styles.container}>
    {items.map((item) => (
      <li key={item.path}>
        <Link href={item.path}>{item.label}</Link>
      </li>
    ))}
  </ul>
);
