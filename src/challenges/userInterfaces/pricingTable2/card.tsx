import styles from './card.module.css';

export const Card = ({
  card: { title, priceYearly, priceMonthly, description },
  payingType,
}: any) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    <div className={styles.price}>
      <div>
        {payingType === 'monthly'
          ? `$${priceMonthly} per month`
          : `$${priceYearly / 12} per month`}
      </div>
      <div>
        {payingType === 'monthly'
          ? 'Billed monthly'
          : `Billed yearly: $${priceYearly}`}
      </div>
    </div>
    <div className={styles.description}>{description}</div>
    <button className={styles.button}>Get Started</button>
  </div>
);
