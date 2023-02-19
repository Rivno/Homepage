import preview from '../../../../../public/challenges/107.png';

import { Task } from './task';

import styles from './kanban.module.css';

const tasks = [
  {
    title: 'Prepare structural documentation',
    date: '18 Dec. 2017',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
    priority: 1,
    tags: ['Development', 'Architecture'],
    membersCount: 3,
    commentsCount: 17,
  },
  {
    title: 'Update requirements list',
    date: '18 Dec. 2017',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Bosch_logo.png',
    priority: 2,
    tags: ['Development', 'Management'],
    membersCount: 2,
    commentsCount: 8,
  },
  {
    title: 'New UI for dashboard',
    date: '18 Dec. 2017',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Bosch_logo.png',
    priority: 3,
    tags: ['Development', 'Architecture'],
    membersCount: 7,
    commentsCount: 7,
  },
  {
    title: 'Initial landing page concepts',
    date: '18 Dec. 2017',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adidas_isologo.svg/langfr-2560px-Adidas_isologo.svg.png',
    priority: 3,
    tags: ['Development', 'Architecture'],
    membersCount: 4,
    commentsCount: 2,
  },
];

function Kanban() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>In progress</h2>
        <div className={styles.tasks}>
          {tasks.map((task) => (
            <Task key={task.title} task={task} />
          ))}
        </div>
        <button className={styles.button}>
          <span className={styles.plus_sign} />
          Add new card
        </button>
      </div>
    </div>
  );
}

export const challenge = { Component: Kanban, number: 107, preview };
