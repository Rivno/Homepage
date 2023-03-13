import preview from '../../../../public/challenges/100.png';

import { Card } from './card';

import styles from './cards.module.css';

const Cards = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Card
        title={'Leaf - Non Profit Environmental'}
        price={49}
        description={'Clean Environmental Bootstrap 4 Theme'}
        image={{ posX: -240, posY: -245 }}
      />
      <Card
        title={'Spaces - Coworking Real Estate'}
        price={49}
        description={'Corporate Coworking Bootstrap 4 Theme'}
        image={{ posX: -629, posY: -245 }}
      />
      <Card
        title={'Pixel Pro - Bootstrap 4 UI KIT'}
        price={59}
        description={'Premium Bootstrap 4 UI Kit with Sass & Gulp'}
        image={{ posX: -1017, posY: -245 }}
      />
      <Card
        title={'Windows 95 \nUI Kit'}
        price={0}
        description={'Retro and nostalgic Windows 95 UI Kit'}
        image={{ posX: -435, posY: -628 }}
      />
      <Card
        title={'Pixel Lite - Free Bootstrap \n4 UI KIT'}
        price={0}
        description={'Free and clean Bootstrap 4 UI Kit'}
        image={{ posX: -822, posY: -628 }}
      />
    </div>
  </div>
);

export const challenge = {
  Component: Cards,
  number: 20230210,
  preview,
  title: 'Cards',
};
