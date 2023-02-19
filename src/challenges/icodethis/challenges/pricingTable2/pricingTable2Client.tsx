'use client';
import classNames from 'classnames';
import { useState } from 'react';

import { Card } from './card';

import styles from './pricingTable2.module.css';

const cards = [
  {
    title: 'Starter',
    priceYearly: 107.88,
    priceMonthly: 9.99,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate, recusandae architecto optio alias',
  },
  {
    title: 'Professional',
    priceYearly: 263.88,
    priceMonthly: 24.99,
    description:
      'Dolorem, adipisci, tempore a expedita quam ad eum itaque. Deserunt eaque a nihil numquam magni quam',
  },
];

export function PricingTable2Client() {
  const [payingType, setPayingType] = useState('monthly');

  const onOptionChange = (e: any) => {
    setPayingType(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Choose your plan</h1>
          <div className={styles.switch}>
            <input
              id="toggle-on"
              className={classNames(styles.toggle, styles.toggle_left)}
              name="payingType"
              value="monthly"
              type="radio"
              checked={payingType === 'monthly'}
              onChange={onOptionChange}
            />
            <label htmlFor="toggle-on" className={styles.btn}>
              Monthly
            </label>
            <input
              id="toggle-off"
              className={classNames(styles.toggle, styles.toggle_right)}
              name="payingType"
              value="yearly"
              type="radio"
              checked={payingType === 'yearly'}
              onChange={onOptionChange}
            />
            <label htmlFor="toggle-off" className={styles.btn}>
              Yearly
            </label>
          </div>
        </div>
        <div className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.title} card={card} payingType={payingType} />
          ))}
        </div>
      </div>
    </div>
  );
}
