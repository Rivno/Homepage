import classNames from 'classnames';

import styles from './skeleton.module.css';

export const Skeleton = ({ className }: { className: string }) => (
  <div className={classNames(styles.container, className)} />
);

export const SkeletonCheckbbox = () => <Skeleton className={styles.checkbox} />;
