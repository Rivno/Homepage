export const MAP_URL: Record<FEED_URL_TYPE, string> = {
  DBM: 'https://www.dragonball-multiverse.com/flux.rss.php?lang=fr',
  JVC: 'https://www.jeuxvideo.com/rss/rss.xml',
  GK: 'https://www.gamekult.com/feed.xml',
  GSPOT: 'https://www.gamespot.com/feeds/news/',
  TVERGE: 'https://www.theverge.com/rss/index.xml',
  MONDE: 'https://www.lemonde.fr/rss/une.xml',
  CNN: 'http://rss.cnn.com/rss/edition_world.rss',
} as const;

export const FEED_URL = {
  DBM: 'DBM',
  JVC: 'JVC',
  GK: 'GK',
  GSPOT: 'GSPOT',
  TVERGE: 'TVERGE',
  MONDE: 'MONDE',
  CNN: 'CNN',
} as const;

export type FEED_URL_TYPE = keyof typeof FEED_URL;
