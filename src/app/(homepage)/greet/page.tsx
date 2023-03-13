import { Clock } from '@/components/homepage/clock';
import { ContentRSS } from '@/components/homepage/contentRSS';
import { CurrentDay } from '@/components/homepage/currentDay';
import { Hero } from '@/components/homepage/hero';

export default function Home() {
  return (
    <>
      <Hero>
        <div>
          Hi, Rivno <Clock />
        </div>
        <CurrentDay />
      </Hero>
      <ContentRSS />
    </>
  );
}
