'use client';

import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { FEED_URL_TYPE } from '@/helpers/feedContanst';
import { readFeed } from '@/helpers/feedReader';

import { FeedItem } from './feedItem';

import styles from './feedRSS.module.css';

export const FeedRSS = ({ url }: { url: FEED_URL_TYPE }) => {
  const {
    isLoading,
    isError,
    data: feed,
    error,
  } = useQuery(url, () => readFeed(url), {
    staleTime: 1000 * 60 * 15,
    refetchInterval: 1000 * 60 * 15,
  });

  const items = useMemo(() => {
    if (feed?.items) {
      return feed?.items.slice(0, 5);
    }

    return [];
  }, [feed]);

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{feed?.title}</h2>
      </div>
      <div className={styles.content}>
        {feed?.items.slice(0, 5).map((item) => (
          <FeedItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};
