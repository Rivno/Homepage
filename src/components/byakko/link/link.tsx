import styles from './link.module.css';

export const Link = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={styles.container} {...props}>
    {children}
  </a>
);
