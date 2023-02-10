import Link from 'next/link';

import { CATEGORIES } from '@/challenges';
import { Content } from '@/components/content';
import { Hero } from '@/components/hero';

export default function Challenge() {
  return (
    <>
      <Hero>
        <div>Challenge</div>
      </Hero>
      <Content>
        <ul>
          {Object.keys(CATEGORIES).map((key) => (
            <li key={key}>
              <Link href={`/challenge/${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </Content>
    </>
  );
}
