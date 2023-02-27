import { SearchInput } from './searchInput';

import styles from './notesApp.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_actions}>
        <button className={styles.btn_close}>
          <span />
        </button>
        <button className={styles.btn_reduce}>
          <span />
        </button>
        <button className={styles.btn_full}>
          <span />
        </button>
      </div>
      <div className={styles.app_title}>
        <svg viewBox="2 2 60 60">
          <path
            d="M56.009,51.832l0,4.2l-33.652,-0.026l4.709,-4.174l28.943,0Z"
            fill="currentColor"
          />
          <path
            d="M48.453,8.119c1.65,0 2.506,0.129 4.753,2.011c2.294,1.922 2.707,3.42 2.803,5.088c0.102,1.795 -0.504,3.975 -2.188,5.681l-31.961,31.961c-0.52,0.475 -0.63,0.449 -0.977,0.553l-10.226,2.556c-1.472,0.299 -2.854,-1.049 -2.55,-2.549l2.557,-10.226c0.1,-0.334 0.133,-0.517 0.553,-0.977c10.696,-10.696 21.195,-21.593 32.09,-32.087c1.421,-1.335 3.497,-2.011 5.146,-2.011Zm0,4.143c-0.86,0.016 -1.698,0.371 -2.311,0.976l-31.54,31.541l-1.566,6.261l6.262,-1.565c10.544,-10.544 21.419,-20.768 31.63,-31.634c1.674,-1.825 0.444,-5.453 -2.306,-5.577c-0.056,-0.002 -0.112,-0.003 -0.169,-0.002Z"
            fill="currentColor"
          />
        </svg>
        <span>Chapter 2</span>
      </div>
      <SearchInput />
    </div>
  );
}
