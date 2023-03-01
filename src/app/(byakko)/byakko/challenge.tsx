import Link from 'next/link';

import { challenges } from '@/challenges';
import {
  ChallengeCard,
  ChallengeCardList,
} from '@/components/byakko/challenge';

import styles from './challenge.module.css';

export function Challenge() {
  const challengesKeys = Object.keys(challenges);
  const sortChallenges = challengesKeys
    .sort((a, b) => {
      if (challenges[a].showcase && !challenges[b].showcase) {
        return -1;
      }

      if (!challenges[a].showcase && challenges[b].showcase) {
        return 1;
      }

      if (challenges[a].number < challenges[b].number) {
        return 1;
      }
      if (challenges[a].number > challenges[b].number) {
        return -1;
      }

      return 0;
    })
    .slice(0, 3)
    .map((key) => ({
      key,
      challenge: challenges[key],
    }));

  return (
    <div className={styles.container}>
      <p>Discover some of my latest UI challenges</p>
      <ChallengeCardList>
        {sortChallenges.map((challenge) => (
          <ChallengeCard key={challenge.key} challenge={challenge} />
        ))}
      </ChallengeCardList>
      <div>
        <Link href="challenge" className={styles.more}>
          <span className={styles.inner}>
            <span>See more</span>
            <div className={styles.icon}>
              <div>
                <span>&#8594;</span>
              </div>
            </div>
          </span>
        </Link>
      </div>
    </div>
  );
}
