import classNames from 'classnames';

import styles from './profile.module.css';

export function ProfileAdd() {
  return (
    <div className={classNames(styles.profile, styles.add)} tabIndex={0}>
      <div className={styles.icon}>
        <div>
          <span className={styles.plus_sign} />
        </div>
      </div>
      <div>Add user</div>
    </div>
  );
}
