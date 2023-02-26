import classNames from 'classnames';
import React from 'react';

import { AdditionalPage } from './additionalPage';
import { experience } from './experience';
import { ExperienceItem } from './experienceItem';
import { Header } from './header';
import { Journey } from './journey';
import { PrintToPdf } from './print';
import { Roles } from './roles';

import styles from './page.module.css';

const PageBreak = () => (
  <div className={classNames(styles.page_break, 'pagebreak')} />
);

const Separator = () => <div className={styles.separator} />;

export const metadata = {
  title: 'CV - ATORA',
  description: 'CV - ATORA',
  icons: {
    icon: '/favicon.ico',
  },
};

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
    const isLastPage = page === nbPages;
    pages.push(
      <React.Fragment key={page}>
        <PageBreak />
        <AdditionalPage
          pageListXP={pageListXP}
          nbXP={experience.length}
          itemPerPage={itemPerPage}
          nbPages={nbPages}
          page={page}
          isLastPage={isLastPage}
        />
      </React.Fragment>
    );
  }

  return (
    <>
      <div id="document-cv" className={styles.container}>
        <div className={classNames(styles.page, styles.main_page)}>
          <Header />
          <Roles />
          <Journey />
          <div className={styles.now}>NOW</div>
          <div className={styles.page_content}>
            <div className={styles.arrow_container}>
              <div className={styles.arrow_top} />
              <div />
            </div>
            <div>
              <ExperienceItem experience={lastXp} />
              <ExperienceItem experience={previousXP} />
            </div>

            <div className={styles.arrow_container}>
              <div />
              <div className={styles.arrow_bottom} />
            </div>
          </div>
        </div>
        {pages}
      </div>

      <PrintToPdf id="document-cv" />
    </>
  );
}
