import preview from '../../../../public/challenges/111.png';
import { profilesIllustration } from '../images';

import { Profile } from './profile';
import { ProfileAdd } from './profileAdd';

import styles from './userSelect.module.css';

const profiles = [
  {
    name: 'tika-m',
    image: profilesIllustration[0],
  },
  {
    name: 'garlic-naan',
    image: profilesIllustration[2],
  },
];

function UserSelect() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Who is playing now ?</h1>
        <div className={styles.profiles}>
          {profiles.map((profile) => (
            <Profile key={profile.name} profile={profile} />
          ))}
          <ProfileAdd />
        </div>
        <button className={styles.button}>Manage user</button>
      </div>
    </div>
  );
}

export const challenge = {
  Component: UserSelect,
  number: 111,
  preview,
  title: 'User Select',
};
