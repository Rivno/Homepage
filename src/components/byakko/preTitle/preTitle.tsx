import styles from './preTitle.module.css';

export const PreTitle = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={styles.container} {...props}>
    {children}
  </div>
);
