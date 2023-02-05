import Image from 'next/image';
import React from 'react';

import logoGithub from '../../../../public/cv/companies/github.svg';
import logoLinkedin from '../../../../public/cv/companies/linkedin.svg';
import flagEn from '../../../../public/cv/lang/en.svg';
import flagFr from '../../../../public/cv/lang/fr.svg';
import qrCodeGithub from '../../../../public/cv/qrcode/github.png';
import qrCodeLinkedin from '../../../../public/cv/qrcode/linkedin.png';
import logoIUT from '../../../../public/cv/school/iut.png';
import logoSupinfo from '../../../../public/cv/school/supinfo.png';
import logoCar from '../../../../public/cv/transport/car.svg';
import logoDiver from '../../../../public/cv/transport/diver.svg';
import logoMoto from '../../../../public/cv/transport/moto.svg';
import logoSnowboarder from '../../../../public/cv/transport/snowboarder.svg';

import { experience } from './experience';
import { ExperienceItem } from './experienceItem';
import { TechItem } from './techItem';

import styles from './page.module.css';

const PageBreak = () => <div className={styles.page_break} />;

const Separator = () => <div className={styles.separator} />;

const Header = () => (
  <div className={styles.header}>
    <div>
      <div>
        <Image src={logoLinkedin} alt="logo linkedin" width={24} />
        Linkedin
      </div>
      <Image src={qrCodeLinkedin} alt="qrcode linkedin" width={150} />
    </div>
    <div>
      <div>ALLAN</div>
      <div>BIENNE</div>
      <div>
        <Image src={logoCar} alt="logo car" width={24} />
        <Image src={logoMoto} alt="logo moto" width={24} />
        <Image src={logoSnowboarder} alt="logo snowboarder" width={24} />
        <Image src={logoDiver} alt="logo diver" width={24} />
      </div>
      <div>
        <Image src={flagFr} alt="flag fr" width={24} /> -{' '}
        <Image src={flagEn} alt="flag en" width={24} />
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
        <Image src={logoGithub} alt="logo github" width={24} />
      </div>
      <Image src={qrCodeGithub} alt="qrcode github" width={150} />
    </div>
  </div>
);

export default function CV() {
  const [lastXp, previousXP, ...listXP] = experience;
  const itemPerPage = 4;
  const nbPages = Math.ceil(listXP.length / itemPerPage);

  const pages = [];
  for (let page = 1; page <= nbPages; page++) {
    const pageListXP = listXP.slice(
      (page - 1) * itemPerPage,
      (page - 1) * itemPerPage + itemPerPage
    );
    pages.push(
      <React.Fragment key={page}>
        <PageBreak />
        <div className={styles.page}>
          <div className={styles.page_header}>
            ALLAN BIENNE - TECH LEAD / DEVELOPER EXPERT
          </div>
          <div>
            {pageListXP.map((xp, i) => (
              <ExperienceItem
                key={xp.title}
                experience={xp}
                isLast={
                  (page - 1) * itemPerPage + i + 2 === experience.length - 1
                }
              />
            ))}
          </div>
          <div className={styles.page_footer}>
            <span>
              <TechItem tech="ReactJS" /> - <TechItem tech="Typescript" /> -{' '}
              <TechItem tech="NextJS" /> - <TechItem tech="NodeJS" /> -{' '}
              <TechItem tech="Rust" /> - <TechItem tech="C#" />
            </span>
            <span className={styles.page_counter}>
              {page + 1}/{nbPages + 1}
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <Header />
        <Separator />
        <div className={styles.roles}>
          <div>
            <div>Developer Expert</div>
            <div>- task</div>
            <div>- task</div>
            <div>- task</div>
            <div>- task</div>
            <div>- task</div>
          </div>
          <div>
            <div>Tech lead</div>
            <div>- task</div>
            <div>- task</div>
            <div>- task</div>
            <div>- task</div>
            <div>- task</div>
          </div>
        </div>
        <Separator />
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
        <Separator />
        <div className={styles.now}>NOW</div>
        <Separator />
        <ExperienceItem experience={lastXp} />
        <ExperienceItem experience={previousXP} />
      </div>
      {pages}
    </div>
  );
}
