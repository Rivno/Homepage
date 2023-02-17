import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={1}
    >
      <span>By</span>
    </a>
  </footer>
);
