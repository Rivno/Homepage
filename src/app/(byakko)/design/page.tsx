import Image from 'next/image';

import { Title } from '@/components/byakko/title';

import eva01 from '../../../../public/eva01.png';

import { DesignClient } from './designClient';

import styles from './page.module.css';

export default function Design() {
  return (
    <div className={styles.container}>
      <Title>Design</Title>
      <div className={styles.center}>
        <div className={styles.content}>
          <DesignClient />
        </div>

        <Image src={eva01} alt="eva01" className={styles.eva} />
      </div>
    </div>
  );
}
