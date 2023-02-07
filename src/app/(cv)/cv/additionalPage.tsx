import { Experience } from './experience';
import { ExperienceItem } from './experienceItem';
import { TechItem } from './techItem';

import styles from './page.module.css';

type AdditionalPageProps = {
  pageListXP: Experience[];
  nbXP: number;
  page: number;
  itemPerPage: number;
  isLastPage: boolean;
  nbPages: number;
};

export const AdditionalPage = ({
  pageListXP,
  nbXP,
  page,
  itemPerPage,
  isLastPage,
  nbPages,
}: AdditionalPageProps) => (
  <div className={styles.page}>
    <div className={styles.page_header}>
      ALLAN BIENNE - TECH LEAD / DEVELOPER EXPERT
    </div>
    <div className={styles.page_content}>
      <div className={styles.arrow_container}>
        <div className={styles.arrow_top} />
        <div />
      </div>
      <div>
        {pageListXP.map((xp, i) => (
          <ExperienceItem
            key={xp.company}
            experience={xp}
            isLast={(page - 1) * itemPerPage + i + 2 === nbXP - 1}
          />
        ))}
      </div>
      {isLastPage ? null : (
        <div className={styles.arrow_container}>
          <div />
          <div className={styles.arrow_bottom} />
        </div>
      )}
    </div>
    <div className={styles.page_footer}>
      <TechItem tech="ReactJS" />
      <span> - </span>
      <TechItem tech="Typescript" />
      <span> - </span>
      <TechItem tech="NextJS" />
      <span> - </span>
      <TechItem tech="NodeJS" />
      <span> - </span>
      <TechItem tech="Rust" />
      <span> - </span>
      <TechItem tech="C#" />
      <span className={styles.page_counter}>
        {page + 1}/{nbPages + 1}
      </span>
    </div>
  </div>
);
