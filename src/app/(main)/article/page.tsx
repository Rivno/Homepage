import Link from 'next/link';

import { Code } from '@/components/code';
import { Title } from '@/components/title';

import { articles } from './[slug]/articles';

import styles from './page.module.css';

export const metadata = {
  title: 'Articles',
  description: 'List of blog articles',
};

export default function Article() {
  const slugs = Object.keys(articles);

  return (
    <>
      <Title>Articles</Title>
      <h2 className={styles.building}>SECTION UNDER CONSTRUCTION</h2>
      <div className={styles.content}>
        {slugs.map((slug) => {
          const { meta } = articles[slug];
          return (
            <Link key={slug} href={`/article/${slug}`}>
              {meta.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
