import styles from './card.module.css';

const priorityLabel = ['Resolved', 'Monitoring', 'Investigating'];

export function Card({ incident: { title, date, status, description } }: any) {
  return (
    <div className={styles.card} tabIndex={0}>
      <div className={styles.date}>{date}</div>
      <div className={styles.title}>
        <h2>{title}</h2>
        <span className={styles.tag} data-status={status}>
          {priorityLabel[status]}
        </span>
      </div>
      <p>{description}</p>
      <button className={styles.button}>
        <span>Full report</span>
      </button>
    </div>
  );
}
