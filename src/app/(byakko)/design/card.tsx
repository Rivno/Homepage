import styles from './card.module.css';

export const Card = ({
  color,
  onClick,
}: {
  color: string;
  onClick: () => void;
}) => (
  <div className={styles.container} tabIndex={0} onClick={onClick}>
    <div style={{ backgroundColor: color }}></div>
    <div>{color}</div>
  </div>
);
