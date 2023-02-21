import { challenges } from '@/challenges';
import {
  ChallengeCard,
  ChallengeCardList,
} from '@/components/byakko/challenge';
import { Description } from '@/components/byakko/description';
import { PreTitle } from '@/components/byakko/preTitle';
import { Title } from '@/components/byakko/title';

import styles from './page.module.css';

export default function Home() {
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
    <>
      <PreTitle>Allan Bienne</PreTitle>
      <Title className={styles.title}>Fullstack Developer</Title>

      <Description>
        Dev expert / Tech lead on ReactJS - NodeJS - .net C#
      </Description>

      <p>Discover some of my latest UI challenges</p>
      <ChallengeCardList>
        {sortChallenges.map((challenge) => (
          <ChallengeCard key={challenge.key} challenge={challenge} />
        ))}
      </ChallengeCardList>

      <div className={styles.block1}>My roles</div>

      <div className={styles.block2}>Early life up to before IUT</div>
      <div className={styles.block3}>IUT and start dev</div>
      <div className={styles.block4}>SUPINFO and engineering</div>

      <div>all xp</div>
      <div>SODEXO</div>
      <div>SEWAN</div>
      <div>IZIWORK</div>
      <div>MEETIC</div>
      <div>KERING</div>
      <div>WYND</div>
      <div>BNP</div>
      <div>DIGITAS</div>
      <div>MNT</div>
      <div>AXA</div>
      <div>C2S</div>
      <div>ESSILOR</div>
      <div>DCUBE</div>
      <div>IORGA</div>
      <div>STORE FACTORY</div>
      <div>LOGICA</div>
    </>
  );
}
