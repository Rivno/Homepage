import styles from './grid.module.css';

export const Grid = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={styles.container} {...props}>
    {children}
  </div>
);
