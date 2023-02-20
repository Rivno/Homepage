import { challenges } from '@/challenges';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Title } from '@/components/byakko/title';
import { Content } from '@/components/content';

import styles from './page.module.css';

export default function Challenge({
  params,
}: {
  params: { challenge: string };
}) {
  const { Component } = challenges[params.challenge] || {};

  return (
    <>
      <Title>{`Challenge - ${params.challenge}`}</Title>
      <Breadcrumbs items={[{ label: 'Challenges', path: '/challenge' }]} />
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
