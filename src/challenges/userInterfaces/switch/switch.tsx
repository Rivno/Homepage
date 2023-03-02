'use client';

import { useState } from 'react';

import styles from './switch.module.css';

export function Switch({ initialValue = true }: { initialValue?: boolean }) {
  const [value, setValue] = useState(initialValue);

  const onOptionChange = (e: any) => {
    setValue((val) => !val);
  };

  return (
    <input
      className={styles.switch}
      name="switch"
      type="checkbox"
      checked={value}
      onChange={onOptionChange}
    />
  );
}
