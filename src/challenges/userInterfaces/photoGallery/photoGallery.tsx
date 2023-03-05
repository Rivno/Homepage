import Image from 'next/image';

import preview from '../../../../public/challenges/119.png';
import { imagesSrc } from '../images';

import { SearchInput } from './searchInput';

import styles from './photoGallery.module.css';

const images = [
  {
    title: 'Great wave of Kanagawa',
    src: imagesSrc[0],
    like: 9,
    share: 5,
  },
  {
    title: 'Golden Gate',
    src: imagesSrc[1],
    like: 9,
    share: 5,
  },
  {
    title: 'Pow is life',
    src: imagesSrc[2],
    like: 9,
    share: 5,
  },
  {
    title: 'Kinkaku-ji',
    src: imagesSrc[3],
    like: 9,
    share: 5,
  },
  {
    title: 'Haifa white tigers',
    src: imagesSrc[4],
    like: 9,
    share: 5,
  },
  {
    title: 'Total solar eclipse',
    src: imagesSrc[5],
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
