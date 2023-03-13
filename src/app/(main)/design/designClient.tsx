'use client';

import { useEffect, useState } from 'react';

import { Card } from './card';

import styles from './page.module.css';

const colors = [
  '#fdf2d3',
  '#f7ba2b',
  '#cd793c',
  '#dcfee4',
  '#a2d959',
  '#427659',
  '#e2f5f8',
  '#a4b3df',
  '#526dad',
  '#fad7fe',
  '#a979c8',
  '#622f6a',
];

export const DesignClient = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [copyData, setCopyData] = useState({ type: -1, value: '' });

  const copyColor = (color: string) => () => copy(color);

  const copy = (toCopy?: string) => {
    if (toCopy) {
      navigator.clipboard.writeText(toCopy);
      setCopyData({ type: 1, value: toCopy });
      return;
    }

    const value = JSON.stringify(colors);
    navigator.clipboard.writeText(value);
    setCopyData({ type: 0, value: value });
  };

  const onKeyPress = (event: any) => {
    if (event.key == 'c' || event.keyCode == 67) {
      copy();
      return;
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (copyData.type !== -1) {
      setShowAlert(true);
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 1000 * 4);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [copyData]);

  useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
    return () => {
      document.removeEventListener('keypress', onKeyPress);
    };
  }, []);

  return (
    <>
      <p className={styles.clipboard_alert} aria-hidden={!showAlert}>
        <span>{copyData.type === 0 ? 'Palette' : 'Color'} </span>
        <span className={styles.value}>
          {copyData.type === 0 ? '' : copyData.value}
        </span>
        <span> Copied to you clipboard</span>
      </p>
      <div className={styles.colors}>
        {colors.map((color) => (
          <Card key={color} color={color} onClick={copyColor(color)} />
        ))}
      </div>
      <div className={styles.instructions}>
        <p className={styles.inner}>
          {'Click to copy individual color • Press "C" to copy palette'}
        </p>
      </div>
    </>
  );
};
