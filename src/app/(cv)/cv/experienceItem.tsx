import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import FlagEn from '../../../../public/cv/lang/en.svg';
import FlagFr from '../../../../public/cv/lang/fr.svg';
import LogoPeople from '../../../../public/cv/school/people.svg';

import { Experience } from './experience';
import { TechItem } from './techItem';

import styles from './experienceItem.module.css';

export const ExperienceItem = ({
  experience,
  isLast = false,
}: {
  experience: Experience;
  isLast?: boolean;
}) => {
  const Logo = experience.logo as any;
  return (
    <div className={styles.experience} data-islast={isLast}>
      <div className={styles.experience_logo}>
        <div className={styles.company}>{experience.company.toUpperCase()}</div>
        <div
          className={classNames({ [styles.white_bg]: experience.shouldAddBG })}
        >
          {experience.isSvg ? (
            <Logo />
          ) : (
            <Image
              src={experience.logo}
              alt={`logo ${experience.company}`}
              width={75}
              unoptimized
            />
          )}
        </div>

        <div className={styles.date}>
          {experience.dateStart.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'short',
          })}
        </div>
        {experience.dateEnd ? (
          <div className={styles.date}>
            {experience.dateEnd.toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
            })}
          </div>
        ) : null}
        <div className={styles.experience_last}>{isLast ? 'END' : null}</div>
      </div>
      <div className={styles.experience_content}>
        {experience.projects.map((project) => (
          <React.Fragment key={project.title}>
            <div className={styles.experience_project}>
              <div className={styles.project_description}>
                <div className={styles.project_title}>{project.title}</div>
                <div className={styles.project_info}>
                  <span className={styles.project_role}>{project.role}</span>
                  <span>-</span>
                  <span className={styles.team_size}>
                    <LogoPeople className={styles.icon} />
                    <span>{project.teamSize}</span>
                  </span>
                  <span>-</span>
                  {project.language === 'en' ? (
                    <FlagEn className={styles.icon} />
                  ) : (
                    <FlagFr className={styles.icon} />
                  )}
                </div>
                <div>{project.description}</div>
              </div>
              <div className={styles.experience_stack}>
                {project.stack.map((tech) => (
                  <TechItem key={tech} tech={tech} />
                ))}
              </div>
            </div>
            <div className={styles.separator} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
