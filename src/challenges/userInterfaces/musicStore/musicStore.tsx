import Image from 'next/image';

import preview from '../../../../public/challenges/116.png';
import { musics } from '../images';

import { CardLong } from './cardLong';
import { CardShort } from './cardShort';
import { SearchInput } from './searchInput';

import styles from './musicStore.module.css';

const exploreList = [
  {
    title: 'I loved yesterday',
    image: musics[0],
    rating: 4,
    price: 15,
  },
  {
    title: 'Now is the time!',
    image: musics[1],
    rating: 3,
    price: 15,
  },
  {
    title: 'Omega Rhythm',
    image: musics[2],
    rating: 5,
    price: 18,
  },
  {
    title: 'Niche Syndrome',
    image: musics[3],
    rating: 4,
    price: 18,
  },
];

const topList = [
  {
    title: 'Aftermath',
    image: musics[4],
    rating: 4,
    price: 18,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor quas quod numquam a officiis sequi voluptas fugiat nobis dolorum excepturi quos consequuntur incidunt mollitia quaerat, unde quae fugit perferendis.',
  },
  {
    title: 'Fortunate Son',
    image: musics[5],
    rating: 3,
    price: 15,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor quas quod numquam a officiis sequi voluptas fugiat nobis dolorum excepturi quos consequuntur incidunt mollitia quaerat, unde quae fugit perferendis.',
  },
  {
    title: 'Wagner',
    image: musics[6],
    rating: 5,
    price: 15,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor quas quod numquam a officiis sequi voluptas fugiat nobis dolorum excepturi quos consequuntur incidunt mollitia quaerat, unde quae fugit perferendis.',
  },
];

const recommendedList = [
  {
    title: "The Warrior's Code",
    image: musics[7],
    rating: 4,
    price: 18,
  },
  {
    title: 'The Empire Strikes First',
    image: musics[8],
    rating: 3,
    price: 18,
  },
  {
    title: 'The Collection',
    image: musics[9],
    rating: 5,
    price: 15,
  },
  {
    title: "L'aventurier",
    image: musics[10],
    rating: 4,
    price: 15,
  },
  {
    title: 'Discovery',
    image: musics[11],
    rating: 4,
    price: 18,
  },
  {
    title: 'Black Holes and Revelations',
    image: musics[12],
    rating: 5,
    price: 18,
  },
];

function MusicStore() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <div>Music</div>
          <SearchInput />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.explore}>
            <Image
              alt="expore art"
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/Future_Music_Festival_2013_%288541725920%29.jpg"
              width={1024}
              height={300}
              unoptimized
            />
            <div className={styles.explore_desc}>
              <div>Explore</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, at.
              </div>
              <button className={styles.button}>Read More</button>
            </div>
            <div>
              {exploreList.map((music) => (
                <CardShort key={music.title} card={music} />
              ))}
            </div>
          </div>
          <div className={styles.top}>
            <div>Top 3</div>
            <div>
              {topList.map((music) => (
                <CardLong key={music.title} card={music} />
              ))}
            </div>
          </div>
          <div className={styles.recommended}>
            <div>Recommended for you</div>
            <div>
              {recommendedList.map((music) => (
                <CardShort key={music.title} card={music} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter
            id="cherry-icecream"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="linearRGB"
          >
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
      1 0 0 0 0
      1 0 0 0 0
      0 0 0 1 0"
              in="SourceGraphic"
              result="colormatrix"
            />
            <feComponentTransfer in="colormatrix" result="componentTransfer">
              <feFuncR type="table" tableValues="0.84 1" />
              <feFuncG type="table" tableValues="0.05 0.94" />
              <feFuncB type="table" tableValues="0.37 0.61" />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
            <feBlend
              mode="normal"
              in="componentTransfer"
              in2="SourceGraphic"
              result="blend"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export const challenge = {
  Component: MusicStore,
  number: 116,
  preview,
  showcase: true,
  title: 'Music Store',
};
