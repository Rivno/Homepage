import { FEED_URL } from '@/helpers/feedConstant';

import { FeedRSS } from '../feedRSS';

import styles from './contentRSS.module.css';

export const ContentRSS = () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <FeedRSS url={FEED_URL.DBM} />
    </div>
    <div className={styles.column}>
      <FeedRSS url={FEED_URL.JVC} />
      <FeedRSS url={FEED_URL.GK} />
      <FeedRSS url={FEED_URL.GSPOT} />
    </div>
    <div className={styles.column}>
      <FeedRSS url={FEED_URL.TVERGE} />
      <FeedRSS url={FEED_URL.MONDE} />
      <FeedRSS url={FEED_URL.CNN} />
    </div>
  </div>
);
