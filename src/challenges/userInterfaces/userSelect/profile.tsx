import Image from 'next/image';

import styles from './profile.module.css';

export function Profile({ profile: { name, image } }: any) {
  return (
    <div className={styles.profile} tabIndex={0}>
      <Image
        alt={`profile picture ${name}`}
        src={image}
        width={75}
        height={75}
        unoptimized
      />
      <div>{name}</div>
    </div>
  );
}
