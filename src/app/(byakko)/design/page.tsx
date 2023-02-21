import { Title } from '@/components/byakko/title';

import { DesignClient } from './designClient';

import styles from './page.module.css';

export default function Design() {
  return (
    <div className={styles.container}>
      <Title>Design</Title>

      <div className={styles.content}>
        <DesignClient />
      </div>
    </div>
  );
}
