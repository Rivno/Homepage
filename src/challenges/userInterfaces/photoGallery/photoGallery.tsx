import Image from 'next/image';

import preview from '../../../../public/challenges/119.png';

import { SearchInput } from './searchInput';

import styles from './photoGallery.module.css';

const images = [
  {
    title: 'Great wave of Kanagawa',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/1920px-Great_Wave_off_Kanagawa2.jpg',
    like: 9,
    share: 5,
  },
  {
    title: 'Golden Gate',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Golden_Gate_1.jpg/1920px-Golden_Gate_1.jpg',
    like: 9,
    share: 5,
  },
  {
    title: 'Pow is life',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Snowboard_pow.jpg/1920px-Snowboard_pow.jpg',
    like: 9,
    share: 5,
  },
  {
    title: 'Kinkaku-ji',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kinkaku3402CBcropped.jpg/1920px-Kinkaku3402CBcropped.jpg',
    like: 9,
    share: 5,
  },
  {
    title: 'Haifa white tigers',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Haifa_White_Tigers-9129-13.jpg/1920px-Haifa_White_Tigers-9129-13.jpg',
    like: 9,
    share: 5,
  },
  {
    title: 'Total solar eclipse',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/2017_Total_Solar_Eclipse_%2835909952653%29.jpg/1920px-2017_Total_Solar_Eclipse_%2835909952653%29.jpg',
    like: 9,
    share: 5,
  },
];

const PhotoGallery = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.navbar}>
        <a>Vectors</a>
        <a>Illustrations</a>
        <a aria-current="page">images</a>
        <a>Icons</a>
      </div>
      <div className={styles.actions}>
        <SearchInput />
        <button className={styles.btn_upload}>Upoad</button>
      </div>

      <div className={styles.gallery}>
        {images.map((image) => (
          <div className={styles.gallery_item} key={image.title}>
            <Image
              src={image.src}
              alt={image.title}
              width={250}
              height={200}
              unoptimized
            />
            <div className={styles.gallery_item_info}>
              <div>
                <div>{image.title}</div>
                <div>
                  <div>{`${image.like} likes`}</div>
                  <span>•</span>
                  <div>{`${image.share} shares`}</div>
                </div>
              </div>
              <div>
                <svg viewBox="2 2 20 20" fill="none">
                  <path
                    d="M18 13V21L12 15L6 21V17M18 8V6C18 4.89543 17.1046 4 16 4H8C6.89543 4 6 4.89543 6 6V13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const challenge = {
  Component: PhotoGallery,
  number: 119,
  preview,
  title: 'Photo Gallery',
};
