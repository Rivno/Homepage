import Link from 'next/link';

import { Title } from '@/components/title';

import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Contact information',
};

const following = [
  {
    name: 'Kevin Powell',
    description: 'CSS Evangelist',
    twitter: 'https://twitter.com/KevinJPowell',
    youtube: '',
  },
  {
    name: 'Jack Harrington',
    twitter: '',
    youtube: '',
  },
  {
    name: 'ThePrimeagen',
    twitter: '',
    youtube: '',
  },
  {
    name: 'Web dev simplified',
    youtube: '',
  },
  {
    name: 'NextJS',
    twitter: '',
  },
];

export default function Contact() {
  return (
    <>
      <Title dontSplit>We can work together</Title>
      <div className={styles.container}>
        <div>
          You can find me on{' '}
          <Link
            href="https://www.linkedin.com/in/allanbienne/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </Link>
        </div>
        <div className={styles.choice}>or</div>
        <div>
          <a
            className={styles.contact}
            href={`mailto:abienne@gmail.com?subject=${encodeURI(
              "Let's work together"
            )}`}
          >
            CONTACT ME
          </a>
        </div>
        <div className={styles.choice}>finally</div>
        <div>
          You can find my cv <Link href="/cv">here</Link>
        </div>
      </div>
    </>
  );
}
