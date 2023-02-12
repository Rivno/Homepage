import Link from 'next/link';

import { CATEGORIES, CATEGORIES_TYPE } from '@/challenges';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Content } from '@/components/content';
import { Hero } from '@/components/hero';

export default function Category({
  params,
}: {
  params: { category: CATEGORIES_TYPE };
}) {
  const { challenges } = CATEGORIES[params.category];
  const challengesKeys = Object.keys(challenges);
  const sortChallenges = challengesKeys.sort((a, b) => {
    if (challenges[a].number < challenges[b].number) {
      return 1;
    }
    if (challenges[a].number > challenges[b].number) {
      return -1;
    }

    return 0;
  });

  return (
    <>
      <Hero>
        <div>Challenge - {params.category}</div>
      </Hero>
      <Breadcrumbs items={[{ label: 'Challenges', path: '/challenge' }]} />
      <Content>
        <ul>
          {sortChallenges.map((key) => (
            <li key={key}>
              <Link href={`/challenge/${params.category}/${key}`}>
                {challenges[key].number} - {key}
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </>
  );
}

export async function generateStaticParams() {
  const categories = Object.keys(CATEGORIES);

  return categories.map((category) => ({
    category,
  }));
}
