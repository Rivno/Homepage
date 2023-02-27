import preview from '../../../../public/challenges/117.png';

import { Content } from './content';
import { Header } from './header';
import { Sidebar } from './sidebar';

import styles from './notesApp.module.css';

const NotesApp = () => (
  <div className={styles.container}>
    <div className={styles.app}>
      <Header />
      <div className={styles.inner_app}>
        <Sidebar />
        <Content />
      </div>
    </div>
  </div>
);

export const challenge = {
  Component: NotesApp,
  number: 117,
  preview,
  title: 'Notes App',
};
