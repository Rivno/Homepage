import { Clock } from '@/components/clock';
import { ContentRSS } from '@/components/contentRSS';
import { CurrentDay } from '@/components/currentDay';
import { Hero } from '@/components/hero';

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
