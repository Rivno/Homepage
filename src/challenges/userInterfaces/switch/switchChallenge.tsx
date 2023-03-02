import preview from '../../../../public/challenges/120.png';

import { Switch } from './switch';

import styles from './switch.module.css';

function SwitchChallenge() {
  return (
    <div className={styles.container}>
      <Switch />
    </div>
  );
}

export const challenge = {
  Component: SwitchChallenge,
  number: 120,
  preview,
  title: 'Switch',
};
