import { getTechLogo } from './technology';

import styles from './techItem.module.css';

export const TechItem = ({ tech }: { tech: string }) => {
  const Logo = getTechLogo(tech);
  return (
    <span key={tech} className={styles.container}>
      {tech}
      {Logo ? <Logo className={styles.icon} /> : null}
    </span>
  );
};
