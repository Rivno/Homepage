import { challenges } from '@/challenges';
import { Breadcrumbs } from '@/components/breadcrumbs';

import styles from './page.module.css';

export default function Challenge({
  params,
}: {
  params: { challenge: string };
}) {
  const { Component } = challenges[params.challenge] || {};

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Challenges', path: '/challenge' },
          { label: challenges[params.challenge].title },
        ]}
      />
      <div className={styles.content}>{Component ? <Component /> : null}</div>
    </>
  );
}

export async function generateStaticParams() {
  const challengesKeys = Object.keys(challenges);

  return challengesKeys.map((challenge) => ({
    challenge,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { challenge: string };
}) {
  const { title, number } = challenges[params.challenge] || {};
  return {
    title: title,
    description: `Challenge for ${title}`,
    openGraph: {
      title: title,
      description: `Challenge for ${title}`,
      siteName: 'Atora',
      images: [
        {
          url: `${process.env.NEXTAUTH_URL}/challenges/${number}.png`,
          width: 800,
          height: 450,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
  };
}
