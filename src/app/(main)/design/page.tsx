import Image from 'next/image';

import { Title } from '@/components/title';

import eva01 from '../../../../public/eva01.png';

import { DesignClient } from './designClient';

import styles from './page.module.css';

export const metadata = {
  title: 'Design',
  description: 'Color palette use on this website',
};

export default function Design() {
  return (
    <div className={styles.container}>
      <Title>Design</Title>
      <p>
        The colors palette use on this website are taken from the coolest mech
        design made to this day, the <span>EVA 01</span> from{' '}
        <span>Neon Genesis Evangelion</span>.
      </p>
      <div className={styles.center}>
        <div className={styles.content}>
          <DesignClient />
        </div>

        <Image src={eva01} alt="eva01" className={styles.eva} />
      </div>
    </div>
  );
}
