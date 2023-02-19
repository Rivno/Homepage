import { Description } from '@/components/byakko/description';
import { PreTitle } from '@/components/byakko/preTitle';
import { Title } from '@/components/byakko/title';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <PreTitle>Allan Bienne</PreTitle>
      <Title className={styles.title}>Fullstack Developer</Title>

      <Description>
        Dev expert / Tech lead on ReactJS - NodeJS - .net C#
      </Description>

      <div>Early life up to before IUT</div>
      <div>IUT and start dev</div>
      <div>SUPINFO and engineering</div>

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
