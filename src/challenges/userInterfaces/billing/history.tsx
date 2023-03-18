'use client';

import { useState } from 'react';

import styles from './billing.module.css';

const billingHistory = [
  {
    id: '102947',
    date: 'Oct. 21 2022',
    type: 'Pro Annual',
  },
  {
    id: '102917',
    date: 'Oct. 10 2022',
    type: 'Pro Portfolio',
  },
  {
    id: '100947',
    date: 'Mar. 08 2022',
    type: 'Sponsored Post',
  },
  {
    id: '92947',
    date: 'Jan. 31 2022',
    type: 'Sponsored Post',
  },
  {
    id: '82947',
    date: 'Oct. 21 2021',
    type: 'Pro Annual',
  },
  {
    id: '62947',
    date: 'Aug. 11 2021',
    type: 'Sponsored Post',
  },
];

export function History() {
  const [nbItems, setNbItems] = useState(4);
  const onLoadMore = () => {
    setNbItems(6);
  };

  return (
    <div className={styles.history}>
      <div>
        <div>Date</div>
        <div>Type</div>
        <div>Receipt</div>
      </div>
      {billingHistory.slice(0, nbItems).map((billing) => (
        <div key={billing.id}>
          <div>{billing.date}</div>
          <div>{billing.type}</div>
          <button>Download</button>
        </div>
      ))}
      {nbItems < billingHistory.length ? (
        <button className={styles.btn_load_more} onClick={onLoadMore}>
          Load more
        </button>
      ) : null}
    </div>
  );
}
