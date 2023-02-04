import Image from 'next/image';
import React from 'react';

import qrCodeGithubb from '../../../../public/cv/qrcode/github.png';
import qrCodeLinkedin from '../../../../public/cv/qrcode/linkedin.png';

import { experience } from './experience';
import { ExperienceItem } from './experienceItem';

import styles from './page.module.css';

const PageBreak = () => <div className={styles.page_break} />;

const Separator = () => <div className={styles.separator} />;

const Header = () => (
  <div className={styles.header}>
    <div>
      <div>Linkedin</div>
      <Image src={qrCodeLinkedin} alt="qrcode linkedin" width={150} />
    </div>
    <div>
      <div>ALLAN</div>
      <div>BIENNE</div>
    </div>
    <div>
      <div>ReactJS</div>
      <div>Typescript</div>
      <div>NextJS</div>
      <div>NodeJS</div>
      <div>Rust</div>
      <div>C#</div>
      <div>MCPS - 10657589</div>
    </div>
    <div>
      <div>Github</div>
      <Image src={qrCodeGithubb} alt="qrcode github" width={150} />
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
            {pageListXP.map((xp) => (
              <ExperienceItem key={xp.title} experience={xp} />
            ))}
          </div>
          <div className={styles.page_footer}>
            <span>ReactJS - Typescript - NextJS - NodeJS - Rust</span>
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
        <div>
          <div>31/01/1986</div>
          <div>IUT 2007</div>
          <div>SUPINFO 2010</div>
          <div>C#, Javascript, CSS</div>
          <div>ReactJS, NodeJS</div>
          <div>Rust</div>
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
