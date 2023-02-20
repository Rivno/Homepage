import Image from 'next/image';
import Link from 'next/link';

import { CATEGORIES } from '@/challenges';
import { Content } from '@/components/content';
import { Hero } from '@/components/hero';

import styles from './page.module.css';

export default function Challenge() {
  return (
    <>
      <Hero>
        <div>Challenge</div>
      </Hero>
      <div className={styles.cards}>
        {Object.keys(CATEGORIES).map((key) => (
          <Link key={key} href={`/challenge/${key}`} className={styles.card}>
            <span className={styles.inner}>
              <Image
                src={CATEGORIES[key].preview}
                alt={`preview ${CATEGORIES[key].title}`}
                placeholder="blur"
                width={400}
                height={225}
              />
              <span>{CATEGORIES[key].title}</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
