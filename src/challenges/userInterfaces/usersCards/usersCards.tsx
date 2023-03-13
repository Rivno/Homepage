import Image from 'next/image';

import preview from '../../../../public/challenges/101.png';

import styles from './usersCards.module.css';

const UsersCards = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.images}>
        <Image
          alt="persona 1"
          src="https://m.media-amazon.com/images/M/MV5BNmQ5NGQwZWMtYzlmMy00YTE0LThlZjEtNTM5MTkzNjI0MzNkXkEyXkFqcGdeQXVyMzM3NDM0MA@@._V1_UX140_CR0,0,140,209_AL_.jpg"
          width={75}
          height={75}
        />
        <Image
          alt="persona 2"
          src="https://m.media-amazon.com/images/M/MV5BMjA0NjY3NjI4MV5BMl5BanBnXkFtZTgwNTM4OTg5NDE@._V1_UX140_CR0,0,140,209_AL_.jpg"
          width={75}
          height={75}
        />
        <Image
          alt="persona 3"
          src="https://m.media-amazon.com/images/M/MV5BMGNlYTVlYTMtMjRhMC00YjY5LTkwMzMtZDE4MWQzMzgwYmUzXkEyXkFqcGdeQXVyMjI0OTExNzk@._V1_UY209_CR15,0,140,209_AL_.jpg"
          width={75}
          height={75}
        />
        <Image
          alt="persona 4"
          src="https://m.media-amazon.com/images/M/MV5BMzQ0NDg0MjQ3NV5BMl5BanBnXkFtZTgwOTI5OTAwODE@._V1_UY209_CR8,0,140,209_AL_.jpg"
          width={75}
          height={75}
        />
        <Image
          alt="persona 5"
          src="https://m.media-amazon.com/images/M/MV5BMTYzMjY2ODkxMV5BMl5BanBnXkFtZTgwMjQxMDA5MTE@._V1_UX140_CR0,0,140,209_AL_.jpg"
          width={75}
          height={75}
        />
      </div>
      <div className={styles.content}>
        <h2>Looking for more inspiration ?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          officia ex dolor dolore facere dolorum magnam impedit quae nihil
        </p>
      </div>
      <button className={styles.button}>see featured creatives</button>
    </div>
  </div>
);

export const challenge = {
  Component: UsersCards,
  number: 20230211,
  preview,
  title: 'Users Cards',
};
