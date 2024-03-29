import Link from 'next/link';
import { useCallback, useState } from 'react';

import { clickStopBubbling } from '@/helpers/event';
import { RSS_ITEM } from '@/helpers/feedReader';

import styles from './feedRSS.module.css';

export const FeedItem = ({ item }: { item: RSS_ITEM }) => {
  const [isExpand, setIsExpand] = useState(false);
  const onExpand = useCallback(() => {
    setIsExpand((val) => !val);
  }, []);

  return (
    <div className={styles.item}>
      <div
        className={styles.item_header}
        onClick={onExpand}
        aria-expanded={isExpand}
      >
        <Link
          href={item.link}
          title={item.title}
          onClick={clickStopBubbling}
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
        </Link>
      </div>
      <div className={styles.item_content}>
        <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
      </div>
    </div>
  );
};
