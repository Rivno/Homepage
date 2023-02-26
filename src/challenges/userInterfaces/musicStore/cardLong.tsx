import Image from 'next/image';

import { Stars } from './stars';
import { CARD_LONG } from './types';

import styles from './card.module.css';

export function CardLong({
  card: { title, image, rating, price, description },
}: {
  card: CARD_LONG;
}) {
  return (
    <div className={styles.card_long}>
      <Image
        src={image}
        alt={`cover ${title}`}
        width={150}
        height={150}
        unoptimized
      />
      <div className={styles.inner}>
        <div className={styles.meta}>
          <Stars rating={rating} />
          <div>{`${price} €`}</div>
        </div>
        <div>{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
}
