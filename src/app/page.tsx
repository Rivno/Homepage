import { Content } from '@/components/content';
import { Hero } from '@/components/hero';

import { Clock } from './clock';

export default function Home() {
  return (
    <>
      <Hero>
        <div>
          Hi, Rivno <Clock />
        </div>
        <div>
          {new Date().toLocaleDateString(undefined, {
            weekday: 'short',
            day: 'numeric',
            month: 'long',
          })}
        </div>
      </Hero>
      <Content />
    </>
  );
}
