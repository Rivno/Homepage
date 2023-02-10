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
  return (
    <>
      <Hero>
        <div>Challenge - {params.category}</div>
      </Hero>
      <Breadcrumbs items={[{ label: 'Challenges', path: '/challenge' }]} />
      <Content>
        <ul>
          {Object.keys(CATEGORIES[params.category].challenges).map((key) => (
            <li key={key}>
              <Link href={`/challenge/${params.category}/${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </Content>
    </>
  );
}
