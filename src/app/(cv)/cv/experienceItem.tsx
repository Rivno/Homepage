import Image from 'next/image';

import { Experience } from './experience';

import styles from './page.module.css';

export const ExperienceItem = ({ experience }: { experience: Experience }) => (
  <div className={styles.experience}>
    <div className={styles.experience_logo}>
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
    </div>
    <div className={styles.experience_content}>
      <div>
        <div>{experience.title}</div>
        <div>{experience.role}</div>
        <div>{experience.description}</div>
      </div>
      <div className={styles.experience_stack}>
        {experience.stack.join(' - ')}
      </div>
    </div>
  </div>
);
