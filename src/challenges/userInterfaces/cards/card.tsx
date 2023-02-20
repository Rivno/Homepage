import Image from 'next/image';

import imageCards from '../../../../public/challenges/cards.png';

import styles from './card.module.css';

const Title = ({ price, children }: { price: number; children: string }) => (
  <div className={styles.title}>
    <h2>{children}</h2>
    <span>{price > 0 ? `$${price}` : 'Free'}</span>
  </div>
);

export const Card = ({
  title,
  description,
  price,
  image: { posX, posY },
}: {
  title: string;
  description: string;
  price: number;
  image: {
    posX: number;
    posY: number;
  };
}) => (
  <div className={styles.container} tabIndex={0}>
    <Image
      src={imageCards}
      alt={`image for ${title}`}
      style={{
        objectPosition: `${posX}px ${posY}px`,
      }}
      unoptimized
    />
    <div className={styles.content}>
      <Title price={price}>{title}</Title>
      <div>{description}</div>
    </div>
  </div>
);
