import { challenges } from '@/challenges';
import {
  ChallengeCard,
  ChallengeCardList,
} from '@/components/byakko/challenge';
import { Title } from '@/components/byakko/title';

import styles from './page.module.css';

export default function Category() {
  const challengesKeys = Object.keys(challenges);
  const sortChallenges = challengesKeys
    .sort((a, b) => {
      if (challenges[a].number < challenges[b].number) {
        return 1;
      }
      if (challenges[a].number > challenges[b].number) {
        return -1;
      }

      return 0;
    })
    .map((key) => ({
      key,
      challenge: challenges[key],
    }));

  return (
    <>
      <Title>Challenges</Title>

      <div className={styles.content}>
        <ChallengeCardList>
          {sortChallenges.map((challenge) => (
            <ChallengeCard key={challenge.key} challenge={challenge} />
          ))}
        </ChallengeCardList>
      </div>
    </>
  );
}
