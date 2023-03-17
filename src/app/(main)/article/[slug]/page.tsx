import { notFound } from 'next/navigation';

import { articles } from './articles';

import styles from './page.module.css';

export default async function Page({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  const { Component, meta } = article;

  return (
    <div className={styles.content}>
      <Component />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = Object.keys(articles);

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { meta } = articles[params.slug] || {};

  return {
    title: meta?.title,
  };
}
