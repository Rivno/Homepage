import Image from 'next/image';

import logoIUT from '../../../../public/cv/school/iut.png';
import LogoPacifier from '../../../../public/cv/school/pacifier.svg';
import logoSupinfo from '../../../../public/cv/school/supinfo.png';

import { TechItem } from './techItem';

import styles from './page.module.css';

export const Journey = () => (
  <div className={styles.journey}>
    <div className={styles.path}>
      <div className={styles.path_content}>
        <div className={styles.start}>31/01/1986</div>
        <LogoPacifier className={styles.big_svg} />
        <div className={styles.iut_start}>2005</div>
        <Image src={logoIUT} alt="logo IUT" width={75} className={styles.iut} />
        <div className={styles.supinfo_start}>2007</div>
        <Image
          src={logoSupinfo}
          alt="logo supinfo"
          width={75}
          className={styles.supinfo}
        />
        <div className={styles.pro_start}>2010</div>
        <div className={styles.tech_1}>
          <TechItem tech="C#" />
          <TechItem tech="Javascript" />
          <TechItem tech="CSS" />
        </div>
        <div className={styles.pro_step_1}>2015</div>
        <div className={styles.tech_2}>
          <TechItem tech="ReactJS" />
          <TechItem tech="NodeJS" />
        </div>
        <div className={styles.pro_step_2}>2022</div>
        <div className={styles.tech_3}>
          <TechItem tech="Rust" />
        </div>
      </div>
    </div>

    <div className={styles.arrow_container}>
      <div />
      <div className={styles.arrow_bottom} />
    </div>
  </div>
);
