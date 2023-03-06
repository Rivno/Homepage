import preview from '../../../../public/challenges/124.png';
import { imagesSrc } from '../images';

import { CarouselClient } from './carouselClient';
import { CAROUSEL_IMAGE } from './types';

import styles from './carousel.module.css';

const images: CAROUSEL_IMAGE[] = [
  {
    title: 'Great wave of Kanagawa',
    src: imagesSrc[0],
    date: '10/24/2022',
  },
  {
    title: 'Golden Gate',
    src: imagesSrc[1],
    date: '10/16/2022',
  },
  {
    title: 'Pow is life',
    src: imagesSrc[2],
    date: '09/09/2022',
  },
  {
    title: 'Kinkaku-ji',
    src: imagesSrc[3],
    date: '07/13/2022',
  },
  {
    title: 'Haifa white tigers',
    src: imagesSrc[4],
    date: '05/24/2022',
  },
  {
    title: 'Total solar eclipse',
    src: imagesSrc[5],
    date: '01/31/2022',
  },
];

function Carousel() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.navbar}>
          <a aria-current="page">All</a>
          <a>Photography</a>
          <a>Fashion</a>
          <a>Sculpture</a>
        </div>

        <CarouselClient items={images} />

        <button className={styles.btn}>View more</button>
      </div>
    </div>
  );
}

export const challenge = {
  Component: Carousel,
  number: 124,
  preview,
  title: 'Carousel',
};
