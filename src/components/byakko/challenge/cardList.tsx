import styles from './cardList.module.css';

export function ChallengeCardList({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <div className={styles.cards}>{children}</div>;
}
