import Image from 'next/image';

import logoIUT from '../../../../public/cv/school/iut.png';
import logoSupinfo from '../../../../public/cv/school/supinfo.png';

import { TechItem } from './techItem';

import styles from './page.module.css';

export const Journey = () => (
  <div className={styles.journey}>
    <div>31/01/1986</div>
    <div>IUT 2007</div>
    <Image src={logoIUT} alt="logo IUT" width={75} />
    <div>SUPINFO 2010</div>
    <Image src={logoSupinfo} alt="logo supinfo" width={75} />
    <div>
      <TechItem tech="C#" /> - <TechItem tech="Javascript" /> -{' '}
      <TechItem tech="CSS" />
    </div>
    <div>
      <TechItem tech="ReactJS" /> - <TechItem tech="NodeJS" />
    </div>
    <div>
      <TechItem tech="Rust" />
    </div>
  </div>
);
