import classNames from 'classnames';
import React from 'react';

import { SkeletonProps } from './skeleton.types';

import styles from './skeleton.module.css';

export const Skeleton = ({ width = '100%', className }: SkeletonProps) => (
  <span className={classNames(styles.skeleton, className)} style={{ width }} />
);

export const SkeletonSquare = ({ className, ...props }: SkeletonProps) => (
  <Skeleton
    className={classNames(styles.skeletonSquare, className)}
    {...props}
  />
);

export const SkeletonCircle = ({ className, ...props }: SkeletonProps) => (
  <SkeletonSquare
    className={classNames(styles.skeletonCircle, className)}
    {...props}
  />
);
