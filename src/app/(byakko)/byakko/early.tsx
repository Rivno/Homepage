import Image from 'next/image';

import normandy from '../../../../public/normandy.jpeg';

import styles from './page.module.css';

export function Early() {
  return (
    <div
      className={styles.block2}
      data-scroll
      data-scroll-animate="fade"
      data-scroll-show
    >
      <p data-scroll data-scroll-show>
        Devoloper of 37 years, with 13 years of expertise. I grew up in a small
        town of Normandy in France, where I pick the love for mathematics and
        science in school. Always near a tennis ball, video game console or
        computer, I start my passion for the digital world early.
      </p>
      <Image src={normandy} alt="normandy plaine" />
    </div>
  );
}
