import Image from 'next/image';

import preview from '../../../../public/challenges/115.png';
import { forest } from '../images';

import { CountdownClock } from './CountdownClock';

import styles from './countdown.module.css';

function Countdown() {
  const date = new Date();
  const countDate = new Date(date.setMonth(date.getMonth() + 3));

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <h1>Until new beginnings</h1>
          <CountdownClock date={countDate.toUTCString()} />
          <Image
            width={800}
            height={354}
            src={forest[0]}
            alt="forest"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export const challenge = {
  Component: Countdown,
  number: 115,
  preview,
  title: 'Countdown',
};
