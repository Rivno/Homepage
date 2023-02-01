import { FeedRSS } from '../feedRSS';

import styles from './content.module.css';

export const Content = () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <FeedRSS url="https://www.dragonball-multiverse.com/flux.rss.php?lang=fr" />
    </div>
    <div className={styles.column}>
      <FeedRSS url="https://www.jeuxvideo.com/rss/rss.xml" />
      <FeedRSS url="https://www.gamekult.com/feed.xml" />
      <FeedRSS url="https://www.gamespot.com/feeds/news/" />
    </div>
    <div className={styles.column}>
      <FeedRSS url="https://www.theverge.com/rss/index.xml" />
      <FeedRSS url="https://www.lemonde.fr/rss/une.xml" />
      <FeedRSS url="http://rss.cnn.com/rss/edition_world.rss" />
    </div>
  </div>
);
