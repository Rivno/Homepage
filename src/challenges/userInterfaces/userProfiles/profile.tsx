import Image from 'next/image';

import { Actions } from './actions';

import styles from './profile.module.css';

export const Profile = ({
  name,
  projects,
  prototypes,
  image,
}: {
  name: string;
  image: string;
  projects: number;
  prototypes: number;
}) => (
  <div className={styles.container}>
    <Actions />
    <Image
      src={image}
      alt={`image for ${name}`}
      width={75}
      height={75}
      unoptimized
    />
    <h2>{name}</h2>
    <div className={styles.indicators}>
      <div>
        <span>{projects}</span>
        <span>Projects</span>
      </div>
      <div>
        <span>{prototypes}</span>
        <span>Prototypes</span>
      </div>
    </div>
  </div>
);
