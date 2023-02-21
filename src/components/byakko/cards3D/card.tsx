import styles from './card.module.css';

export const Card = ({
  href,
  title,
  children,
  ...props
}: { title: string; children: React.ReactNode | React.ReactNode[] } & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'className' | 'children'
>) => (
  <a className={styles.container} href={href} {...props}>
    <h2>{title}</h2>
    <div>{children}</div>
  </a>
);
