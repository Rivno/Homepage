import axios from 'axios';
import Parser from 'rss-parser';

export type RSS_ITEM = {
  title: string;
  link: string;
  content: string;
  contentSnippet: string;
};

export type RSS_RESULT = {
  title: string;
  description?: string;
  items: RSS_ITEM[];
};

export const readFeed = async (feedUrl: string) => {
  try {
    const params = new URLSearchParams({ url: feedUrl });
    const result = await axios.get('/api/readFeed', {
      params,
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return (await new Parser().parseString(result.data.data)) as RSS_RESULT;
  } catch (error) {
    console.error(`Error reading feed - ${feedUrl} :`, error);
    return null;
  }
};
