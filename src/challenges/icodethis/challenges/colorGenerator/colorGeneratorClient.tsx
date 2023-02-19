'use client';

import { useCallback, useEffect, useState } from 'react';

import { Card } from './card';

import styles from './colorGenerator.module.css';

const genRanHex = (size: number) =>
  '#' +
  [...Array(size)]
    .map(() =>
      Math.floor(Math.random() * 16)
        .toString(16)
        .toUpperCase()
    )
    .join('');

export const ColorGeneratorClient = () => {
  const [colors, setColors] = useState([
    '#EEEDF0',
    '#A1B5C1',
    '#F9ACA7',
    '#68747D',
    '#CF365F',
  ]);
  const [showAlert, setShowAlert] = useState(false);
  const [copyData, setCopyData] = useState({ type: -1, value: '' });

  const generateNewPalette = () => {
    setColors([...Array(5)].map(() => genRanHex(6)));
  };

  const copyColor = (color: string) => () => copy(color);

  const copy = useCallback(
    (toCopy?: string) => {
      if (toCopy) {
        navigator.clipboard.writeText(toCopy);
        setCopyData({ type: 1, value: toCopy });
        return;
      }

      const value = JSON.stringify(colors);
      navigator.clipboard.writeText(value);
      setCopyData({ type: 0, value: value });
    },
    [colors]
  );

  const onKeyPress = useCallback(
    (event: any) => {
      if (event.key == ' ' || event.code == 'Space' || event.keyCode == 32) {
        generateNewPalette();
        return;
      }

      if (event.key == 'c' || event.keyCode == 67) {
        copy();
        return;
      }
    },
    [copy]
  );

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
  }, [onKeyPress]);

  return (
    <div className={styles.container}>
      <p className={styles.clipboard_alert} aria-hidden={!showAlert}>
        <span>{copyData.type === 0 ? 'Palette' : 'Color'} </span>
        <span className={styles.value}>{copyData.value}</span>
        <span> Copied to you clipboard</span>
      </p>
      <h1>Color palette generator</h1>
      <div className={styles.colors}>
        {colors.map((color) => (
          <Card key={color} color={color} onClick={copyColor(color)} />
        ))}
      </div>
      <div className={styles.generator}>
        <button className={styles.button} onClick={generateNewPalette}>
          Generate palette
        </button>
        <p>{'Or just press "Spacebar" to generate new palettes.'}</p>
      </div>
      <p className={styles.instructions}>
        {'Click to copy individual color • Press "C" to copy palette'}
      </p>
    </div>
  );
};
