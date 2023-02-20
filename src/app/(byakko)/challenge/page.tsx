import Image from 'next/image';
import Link from 'next/link';

import { challenges } from '@/challenges';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Title } from '@/components/byakko/title';

import styles from './page.module.css';

export default function Category() {
  const challengesKeys = Object.keys(challenges);
  const sortChallenges = challengesKeys.sort((a, b) => {
    if (challenges[a].number < challenges[b].number) {
      return 1;
    }
    if (challenges[a].number > challenges[b].number) {
      return -1;
    }

    return 0;
  });

  return (
    <>
      <Title>Challenges</Title>
      <div className={styles.cards}>
        {sortChallenges.map((key) => (
          <Link key={key} href={`/challenge/${key}`} className={styles.card}>
            <span className={styles.inner}>
              <Image
                src={challenges[key].preview}
                alt={`preview ${challenges[key].title}`}
                placeholder="blur"
                width={400}
                height={225}
              />
              <span>{challenges[key].title}</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
