import classNames from 'classnames';

import styles from './content.module.css';

export const Content = ({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) => <div className={classNames(styles.container, className)}>{children}</div>;
