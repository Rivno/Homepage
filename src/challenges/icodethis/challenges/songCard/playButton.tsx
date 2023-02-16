'use client';

import { useEffect, useRef, useState } from 'react';

import styles from './songCard.module.css';

export const PlayButton = ({ containerId }: { containerId: string }) => {
  const ref = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);
  };

  const setPercentage = (val: number) => {
    ref.current?.style.setProperty('--fill', `${val}%`);
  };

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isPlaying) {
      let val = 0;
      const interval = setInterval(() => {
        val += 10;

        if (val > 100) {
          setPercentage(0);
          clearInterval(interval);
          setIsPlaying(false);
          return;
        }

        setPercentage(val);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  useEffect(() => {
    // @ts-ignore
    ref.current = document.getElementById(containerId);
  }, [containerId]);

  return <button className={styles.btn_circle} onClick={play} />;
};
