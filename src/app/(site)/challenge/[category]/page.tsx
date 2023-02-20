import Image from 'next/image';
import Link from 'next/link';

import { CATEGORIES, CATEGORIES_TYPE } from '@/challenges';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Hero } from '@/components/hero';

import styles from './page.module.css';

export default function Category({
  params,
}: {
  params: { category: CATEGORIES_TYPE };
}) {
  const { challenges } = CATEGORIES[params.category] || { challenges: {} };
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
      <Hero>
        <div>Challenge - {params.category}</div>
      </Hero>
      <Breadcrumbs items={[{ label: 'Challenges', path: '/challenge' }]} />
      <div className={styles.cards}>
        {sortChallenges.map((key) => (
          <Link
            key={key}
            href={`/challenge/${params.category}/${key}`}
            className={styles.card}
          >
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
