import Image from 'next/image';

import preview from '../../../../public/challenges/121.png';
import { musics } from '../images';

import styles from './topCharts.module.css';

const tops = [
  {
    title: 'My Generation',
    image: musics[0],
    artist: 'Yui',
    count: 2_089_766,
  },
  {
    title: 'Tei! Tei! Tei!',
    image: musics[1],
    artist: 'Polysics',
    count: 1_864_874,
  },
  {
    title: 'Omega Rhythm',
    image: musics[2],
    artist: 'Uplift Spice',
    count: 1_543_642,
  },
  {
    title: 'Shake it down',
    image: musics[3],
    artist: 'One Ok Rock',
    count: 1_543_640,
  },
  {
    title: 'Knight of Cydonia',
    image: musics[12],
    artist: 'Muse',
    count: 1_143_684,
  },
  {
    title: 'Aerodynamic',
    image: musics[11],
    artist: 'Daft Punk',
    count: 903_669,
  },
  {
    title: "L'aventurier",
    image: musics[10],
    artist: 'Indochine',
    count: 900_568,
  },
  {
    title: "I'm shipping up to boston",
    image: musics[7],
    artist: 'Dropkick Murphys',
    count: 740_746,
  },
  {
    title: 'Sinister Rouge',
    image: musics[8],
    artist: 'Bad Religion',
    count: 729_766,
  },
  {
    title: 'The Sound of Silence',
    image: musics[9],
    artist: 'Simon & Garfunkel',
    count: 689_766,
  },
];

function TopCharts() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <svg className={styles.arrow} viewBox="6 6 12 12">
            <path
              d="M7 12L17 12M7 12L11 8M7 12L11 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h1>TOP 10 MOST LISTENED SONGS</h1>
            <span>in the past week</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          {tops.map((top, i) => (
            <div key={top.title} className={styles.top_item}>
              <div>{i + 1}</div>
              <Image
                src={top.image}
                alt={`cover ${top.title}`}
                width={100}
                height={100}
                unoptimized
              />
              <div>
                <div>{top.title}</div>
                <div>{top.artist}</div>
              </div>
              <div>{top.count.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const challenge = {
  Component: TopCharts,
  number: 121,
  preview,
  title: 'Top Charts',
};
