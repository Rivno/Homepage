import Image from 'next/image';
import Link from 'next/link';

import { CHALLENGE } from '@/challenges/type';

import styles from './card.module.css';

export function ChallengeCard({
  challenge: { key, challenge },
}: {
  challenge: { key: string; challenge: CHALLENGE };
}) {
  return (
    <Link href={`/challenge/${key}`} className={styles.card}>
      <span className={styles.inner}>
        <Image
          src={challenge.preview}
          alt={`preview ${challenge.title}`}
          placeholder="blur"
          width={400}
          height={225}
        />
        <span>{challenge.title}</span>
      </span>
    </Link>
  );
}
