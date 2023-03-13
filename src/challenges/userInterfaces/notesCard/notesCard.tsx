import preview from '../../../../public/challenges/118.png';

import styles from './notesCard.module.css';

const notes = [
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aut a ipsam, suscipit laboriosam alias iusto ducimus magnam harum nisi reiciendis dolores quasi!',
  },

  {
    content:
      'Cum molestias soluta tempore sint officia, ipsum fugit, hic veniam expedita natus corrupti, eaque nobis consectetur.',
  },

  {
    content:
      'Vitae libero dicta quisquam illo aliquid adipisci quos iure voluptatibus sapiente ut reprehenderit unde ab quasi nihil, aut iusto assumenda est!',
  },
];

const NotesCard = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      {notes.map((note, i) => (
        <div key={`note-${i}`} className={styles.card}>
          <div className={styles.header}>
            <div>
              <button className={styles.more_actions}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </button>
              <button className={styles.btn_add}>
                <span />
              </button>
              <button className={styles.btn_cog}>
                <svg viewBox="1 1 18 18">
                  <path
                    d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 0 0-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 1.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 0 0 .691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 0 0 1.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 0 0 .692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <button className={styles.btn_close}>
              <span />
            </button>
          </div>
          <div className={styles.card_content}>{note.content}</div>
          <div className={styles.card_cta}>
            <button className={styles.btn_save}>SAVE</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const challenge = {
  Component: NotesCard,
  number: 20230228,
  preview,
  title: 'Notes Card',
};
