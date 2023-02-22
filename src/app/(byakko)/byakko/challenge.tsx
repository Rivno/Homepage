import { challenges } from '@/challenges';
import {
  ChallengeCard,
  ChallengeCardList,
} from '@/components/byakko/challenge';

export function Challenge() {
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
    .slice(0, 3)
    .map((key) => ({
      key,
      challenge: challenges[key],
    }));

  return (
    <div>
      <p>Discover some of my latest UI challenges</p>
      <ChallengeCardList>
        {sortChallenges.map((challenge) => (
          <ChallengeCard key={challenge.key} challenge={challenge} />
        ))}
      </ChallengeCardList>
    </div>
  );
}
