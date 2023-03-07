import preview from '../../../../public/challenges/125.png';

import { ChatboxClient } from './chatboxClient';

import styles from './chatbox.module.css';

function Chatbox() {
  return (
    <div className={styles.container}>
      <ChatboxClient />
    </div>
  );
}

export const challenge = {
  Component: Chatbox,
  number: 125,
  preview,
  title: 'Chatbox',
};
