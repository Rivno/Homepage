import preview from '../../../../public/challenges/103.png';
import { profiles } from '../images';

import { Profile } from './profile';

import styles from './userProfiles.module.css';

const users = [
  {
    name: 'Jay Reese',
    image: profiles[4],
    projects: 2,
    prototypes: 6,
  },
  {
    name: 'Carlos Ramos',
    image: profiles[1],
    projects: 3,
    prototypes: 4,
  },
  {
    name: 'Eugenia Grant',
    image: profiles[3],
    projects: 7,
    prototypes: 13,
  },
  {
    name: 'Lelia Marshall',
    image: profiles[2],
    projects: 6,
    prototypes: 24,
  },
  {
    name: 'Olivia Campbell',
    image: profiles[0],
    projects: 2,
    prototypes: 16,
  },
  {
    name: 'Bernice Alvarado',
    image: profiles[5],
    projects: 2,
    prototypes: 5,
  },
];

const UserProfiles = () => (
  <div className={styles.container}>
    <div className={styles.profiles}>
      {users.map((user) => (
        <Profile
          key={user.name}
          name={user.name}
          projects={user.projects}
          prototypes={user.prototypes}
          image={user.image}
        />
      ))}
    </div>
  </div>
);

export const challenge = {
  Component: UserProfiles,
  number: 20230213,
  preview,
  title: 'User Profiles',
};
