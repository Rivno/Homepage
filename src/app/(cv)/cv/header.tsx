import Image from 'next/image';

import logoMcps from '../../../../public/cv/certif/mcps.png';
import LogoGithub from '../../../../public/cv/companies/github.svg';
import LogoLinkedin from '../../../../public/cv/companies/linkedin.svg';
import FlagEn from '../../../../public/cv/lang/en.svg';
import FlagFr from '../../../../public/cv/lang/fr.svg';
import qrCodeGithub from '../../../../public/cv/qrcode/github.png';
import qrCodeLinkedin from '../../../../public/cv/qrcode/linkedin.png';
import LogoCar from '../../../../public/cv/transport/car.svg';
import LogoDiver from '../../../../public/cv/transport/diver.svg';
import LogoMoto from '../../../../public/cv/transport/moto.svg';
import LogoSnowboarder from '../../../../public/cv/transport/snowboarder.svg';

import { TechItem } from './techItem';

import styles from './header.module.css';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.qrcode}>
      <div className={styles.qr_title}>
        <LogoLinkedin className={styles.icon} />
        Linkedin
      </div>
      <Image
        src={qrCodeLinkedin}
        alt="qrcode linkedin"
        width={150}
        unoptimized
      />
    </div>
    <div className={styles.info}>
      <div className={styles.fullname}>
        <div className={styles.name}>ALLAN</div>
        <div className={styles.lastname}>BIENNE</div>
      </div>
      <div className={styles.transport}>
        <LogoCar className={styles.icon} />
        <LogoMoto className={styles.icon} />
        <LogoSnowboarder className={styles.icon} />
        <LogoDiver className={styles.icon} />
      </div>
    </div>
    <div className={styles.tech}>
      <TechItem tech="ReactJS" />
      <TechItem tech="NodeJS" />
      <TechItem tech="Typescript" />
      <TechItem tech="Rust" />
      <TechItem tech="NextJS" />
      <TechItem tech="C#" />
      <div className={styles.col_span_2}>
        <Image
          src={logoMcps}
          alt="logo mcps"
          className={styles.logo_mcps}
          width={60}
          unoptimized
        />
        <span>- 10657589</span>
      </div>
      <div className={styles.language}>
        <FlagFr className={styles.icon} />
        <FlagEn className={styles.icon} />
      </div>
    </div>
    <div className={styles.qrcode}>
      <div className={styles.qr_title}>
        Github
        <LogoGithub className={styles.icon} />
      </div>
      <Image src={qrCodeGithub} alt="qrcode github" width={150} unoptimized />
    </div>
  </div>
);
