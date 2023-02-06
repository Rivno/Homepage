import Image from 'next/image';

import logoGithub from '../../../../public/cv/companies/github.svg';
import logoLinkedin from '../../../../public/cv/companies/linkedin.svg';
import flagEn from '../../../../public/cv/lang/en.svg';
import flagFr from '../../../../public/cv/lang/fr.svg';
import qrCodeGithub from '../../../../public/cv/qrcode/github.png';
import qrCodeLinkedin from '../../../../public/cv/qrcode/linkedin.png';
import logoCar from '../../../../public/cv/transport/car.svg';
import logoDiver from '../../../../public/cv/transport/diver.svg';
import logoMoto from '../../../../public/cv/transport/moto.svg';
import logoSnowboarder from '../../../../public/cv/transport/snowboarder.svg';

import { TechItem } from './techItem';

import styles from './page.module.css';
export const Header = () => (
  <div className={styles.header}>
    <div>
      <div>
        {/* <Image src={logoLinkedin} alt="logo linkedin" width={24} /> */}
        Linkedin
      </div>
      <Image src={qrCodeLinkedin} alt="qrcode linkedin" width={150} />
    </div>
    <div>
      <div>ALLAN</div>
      <div>BIENNE</div>
      <div>
        {/* <Image src={logoCar} alt="logo car" width={24} />
        <Image src={logoMoto} alt="logo moto" width={24} />
        <Image src={logoSnowboarder} alt="logo snowboarder" width={24} />
        <Image src={logoDiver} alt="logo diver" width={24} /> */}
      </div>
      <div>
        {/* <Image src={flagFr} alt="flag fr" width={24} /> -{' '}
        <Image src={flagEn} alt="flag en" width={24} /> */}
      </div>
    </div>
    <div>
      <div>
        <TechItem tech="ReactJS" />
      </div>
      <div>
        <TechItem tech="Typescript" />
      </div>
      <div>
        <TechItem tech="NextJS" />
      </div>
      <div>
        <TechItem tech="NodeJS" />
      </div>
      <div>
        <TechItem tech="Rust" />
      </div>
      <div>
        <TechItem tech="C#" />
      </div>
      <div>MCPS - 10657589</div>
    </div>
    <div>
      <div>
        Github
        {/* <Image src={logoGithub} alt="logo github" width={24} /> */}
      </div>
      <Image src={qrCodeGithub} alt="qrcode github" width={150} />
    </div>
  </div>
);
