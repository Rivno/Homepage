import Image from 'next/image';

import { Stars } from './stars';
import { CARD } from './types';

import styles from './card.module.css';

export function CardShort({
  card: { title, image, rating, price },
}: {
  card: CARD;
}) {
  return (
    <div className={styles.card_short}>
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
      </div>
    </div>
  );
}
