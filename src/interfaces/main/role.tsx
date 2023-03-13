import styles from './role.module.css';

export function Role() {
  return (
    <div
      className={styles.roles}
      data-scroll
      data-scroll-animate="fade"
      data-scroll-show
    >
      <div>
        <div className={styles.role}>Developer Expert</div>
        <ul className={styles.tasks}>
          <li>{'Adding features and fixing issues'}</li>
          <li>{'Implementing pixel perfect UI'}</li>
          <li>{'Writing unit test'}</li>
          <li>{'Giving advice on UI/UX'}</li>
        </ul>
      </div>
      <div className={styles.separator} />
      <div>
        <div className={styles.role}>Tech lead</div>
        <ul className={styles.tasks}>
          <li>{"Helping team's members grow their technical skill"}</li>
          <li>{"Unblocking team's members work"}</li>
          <li>{"Developing tasks too hard for team's members"}</li>
          <li>{'Reviewing code'}</li>
          <li>{'Optimizing stack / code'}</li>
        </ul>
      </div>
    </div>
  );
}
