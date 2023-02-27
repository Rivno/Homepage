import styles from './notesApp.module.css';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <span>4 Notes</span>
        <button className={styles.btn_add_note}>
          <span />
        </button>
      </div>
      <div className={styles.list_note}>
        <button>
          <div>Intro</div>
          <div>31/01/1986</div>
        </button>
        <button>
          <div>Chapter 1</div>
          <div>25/06/1998</div>
        </button>
        <button aria-selected>
          <div>Chapter 2</div>
          <div>29/04/2010</div>
        </button>
        <button>
          <div>Chapter 3</div>
          <div>31/01/2023</div>
        </button>
      </div>
    </div>
  );
}
