import Image from 'next/image';

import preview from '../../../../../public/challenges/99.png';

import { PlayButton } from './playButton';

import styles from './songCard.module.css';

const SongCard = () => {
  return (
    <div id="song-card" className={styles.container}>
      <Image
        alt="song art"
        src="https://i.scdn.co/image/ab67616d00001e027a910ed50c45df3713b5de71"
        unoptimized
        width={100}
        height={100}
      />
      <div>
        <h2>Albin Lee Meldau</h2>
        <p>The Weight is Gone - The Purgatory Sessions</p>
      </div>
      <PlayButton containerId="song-card" />
    </div>
  );
};

export const challenge = { Component: SongCard, number: 99, preview };
