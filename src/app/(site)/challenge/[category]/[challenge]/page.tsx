import { CATEGORIES, CATEGORIES_TYPE } from '@/challenges';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Content } from '@/components/content';
import { Hero } from '@/components/hero';

import styles from './page.module.css';

export default function Challenge({
  params,
}: {
  params: { category: CATEGORIES_TYPE; challenge: string };
}) {
  const { Component } =
    CATEGORIES[params.category]?.challenges[params.challenge] || {};

  return (
    <>
      <Hero>
        <div>
          Challenge - {params.category} - {params.challenge}
        </div>
      </Hero>
      <Breadcrumbs
        items={[
          { label: 'Challenges', path: '/challenge' },
          {
            label: CATEGORIES[params.category]?.title,
            path: `/challenge/${params.category}`,
          },
        ]}
      />
      <Content className={styles.challenge_content}>
        {Component ? <Component /> : null}
      </Content>
    </>
  );
}

export async function generateStaticParams({ params: { category } }: any) {
  const challenges = Object.keys(
    CATEGORIES[category as CATEGORIES_TYPE].challenges
  );

  return challenges.map((challenge) => ({
    challenge,
  }));
}
