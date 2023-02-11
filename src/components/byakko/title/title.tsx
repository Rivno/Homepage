import classNames from 'classnames';

import styles from './title.module.css';

export const Title = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={classNames(styles.container, className)} {...props}>
    {children}
  </h1>
);
