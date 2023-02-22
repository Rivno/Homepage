import Image from 'next/image';

import iut from '../../../../public/iut_velizy.png';

import styles from './page.module.css';

export function Iut() {
  return (
    <div
      className={styles.block3}
      data-scroll
      data-scroll-animate="fade"
      data-scroll-show
    >
      <p data-scroll data-scroll-animate="right" data-scroll-show>
        After the end of the common school cursus, I start my studies in
        computer science in the technical university of Velizy, for 2 years to
        get a License 2 level diploma. I got the opportunity there to start
        learning about algorithmic (in pseudo code), programmation (ASM x86, C,
        C++ and php) and admin sys (Windows and Linux). This period end with a 3
        months internship where I will use my first development language in a
        professional environment, COBOL.
      </p>
      <Image src={iut} alt="iut velizy" />
    </div>
  );
}
