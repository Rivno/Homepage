import { Clock } from '@/components/clock';
import { Content } from '@/components/content';
import { Hero } from '@/components/hero';

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
