import classNames from 'classnames';

import { Skeleton } from '../skeleton';

import styles from './feedRSS.module.css';

export const SkeletonFeedRSS = () => (
  <div className={classNames(styles.container, styles.skeleton)}>
    <div className={styles.header}>
      <h2>
        <Skeleton width="75%" />
      </h2>
    </div>
    <div className={styles.content}>
      <div className={styles.item}>
        <div className={styles.item_header}>
          <Skeleton width="60%" />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.item_header}>
          <Skeleton width="90%" />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.item_header}>
          <Skeleton width="75%" />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.item_header}>
          <Skeleton width="60%" />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.item_header}>
          <Skeleton width="75%" />
        </div>
      </div>
    </div>
  </div>
);
