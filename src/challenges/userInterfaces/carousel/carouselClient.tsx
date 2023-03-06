'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { ButtonNav } from './buttonNav';
import { CAROUSEL_IMAGE } from './types';

import styles from './carousel.module.css';

export function CarouselClient({ items }: { items: CAROUSEL_IMAGE[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.carousel}>
      <ButtonNav direction="left" panel={carouselRef} />
      <div className={styles.carousel_panel}>
        <div className={styles.gallery} ref={carouselRef}>
          {items.map((image) => (
            <div className={styles.gallery_item} key={image.title}>
              <Image
                src={image.src}
                alt={image.title}
                width={250}
                height={200}
                unoptimized
              />
              <div className={styles.gallery_item_info}>
                <h3>{image.title}</h3>
                <div>
                  {new Date(image.date).toLocaleString('en-GB', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ButtonNav panel={carouselRef} max={items.length} />
    </div>
  );
}
