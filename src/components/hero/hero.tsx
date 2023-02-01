import React from 'react';

import styles from './hero.module.css';

export const Hero = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => <div className={styles.container}>{children}</div>;
