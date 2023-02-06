import Image from 'next/image';

import { Experience } from './experience';
import { TechItem } from './techItem';

import styles from './experienceItem.module.css';
// import styles from './page.module.css';

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
        {experience.isSvg ? (
          <Logo />
        ) : (
          <Image
            src={experience.logo}
            alt={`logo ${experience.company}`}
            width={75}
          />
        )}

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
          <div key={project.title} className={styles.experience_project}>
            <div>
              <div>{project.title}</div>
              <div>{project.role}</div>
              <div>{project.description}</div>
            </div>
            <div className={styles.experience_stack}>
              {project.stack.map((tech) => (
                <TechItem key={tech} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
