import Image from 'next/image';

import { Experience } from './experience';
import { TechItem } from './techItem';

import styles from './page.module.css';

export const ExperienceItem = ({
  experience,
  isLast = false,
}: {
  experience: Experience;
  isLast?: boolean;
}) => (
  <div className={styles.experience}>
    <div className={styles.experience_logo}>
      <div>{experience.company}</div>
      <Image
        src={experience.logo}
        alt={`logo ${experience.company}`}
        width={75}
      />
      <div>
        {experience.dateStart.toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'short',
        })}
      </div>
      {experience.dateEnd ? (
        <div>
          {experience.dateEnd.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'short',
          })}
        </div>
      ) : null}
      <div className={styles.experience_last}>{isLast ? 'END' : null}</div>
    </div>
    <div className={styles.experience_content}>
      <div>
        <div>{experience.title}</div>
        <div>{experience.role}</div>
        <div>{experience.description}</div>
      </div>
      <div className={styles.experience_stack}>
        {experience.stack.map((tech) => (
          <TechItem key={tech} tech={tech} />
        ))}
      </div>
    </div>
  </div>
);
