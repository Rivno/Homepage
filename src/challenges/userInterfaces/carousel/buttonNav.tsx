'use client';

import classNames from 'classnames';
import { RefObject } from 'react';

import styles from './carousel.module.css';

const MOVE_BY = 265;
const ITEMS_SHOWN = 3;

export function ButtonNav({
  direction = 'right',
  panel,
  max = 0,
}: {
  direction?: 'left' | 'right';
  panel: RefObject<HTMLDivElement>;
  max?: number;
}) {
  const onClick = () => {
    if (panel.current) {
      const left = panel.current?.style.left.slice(0, -2);
      const leftVal = parseInt(left);

      if (Number.isNaN(leftVal) || leftVal === 0) {
        if (direction === 'right') {
          panel.current.style.left = `${-1 * MOVE_BY}px`;
        }

        return;
      }

      if (direction === 'left') {
        panel.current.style.left = `${leftVal + MOVE_BY}px`;
        return;
      }

      if (direction === 'right') {
        if (leftVal > -1 * (max - ITEMS_SHOWN) * MOVE_BY) {
          panel.current.style.left = `${leftVal - MOVE_BY}px`;
        }
      }
    }
  };

  return (
    <button className={styles.btn_nav} onClick={onClick}>
      <svg
        viewBox="4 4 16 16"
        className={classNames({
          [styles.nav_right]: direction === 'right',
          [styles.nav_left]: direction === 'left',
        })}
        fill="none"
      >
        <path
          d="M9 18L14.7874 12.2126V12.2126C14.9048 12.0952 14.9048 11.9048 14.7874 11.7874V11.7874L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
