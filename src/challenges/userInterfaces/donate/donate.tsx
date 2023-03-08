import preview from '../../../../public/challenges/126.png';

import { DonateFormClient } from './donateFormClient';

import styles from './donate.module.css';

function Donate() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>Help us do more</h1>
          <p>
            {`We'll get right to the point: we're asking you to support us. We're
            a nonprofit that relies on support from people like you. If everyone
            reading this gives 10€ monthly, we can thrives forr years.`}
          </p>
        </div>
        <DonateFormClient />
      </div>
    </div>
  );
}

export const challenge = {
  Component: Donate,
  number: 126,
  preview,
  title: 'Donate',
};
