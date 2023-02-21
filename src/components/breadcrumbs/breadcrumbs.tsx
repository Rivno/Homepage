import Link from 'next/link';

import styles from './breadcrumbs.module.css';

export const Breadcrumbs = ({
  items,
}: {
  items: { label: string; path?: string }[];
}) => (
  <ul className={styles.container}>
    {items.map((item) => {
      if (item.path) {
        return (
          <li key={item.path}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        );
      }

      return <li key={item.label}>{item.label}</li>;
    })}
  </ul>
);
