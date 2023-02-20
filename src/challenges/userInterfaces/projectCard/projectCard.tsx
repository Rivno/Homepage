import Image from 'next/image';

import preview from '../../../../public/challenges/109.png';
import { profiles } from '../images';

import { Actions } from './actions';

import styles from './projectCard.module.css';

function ProjectCard() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div>
            <h2>Tacitis eros morbi sapien sit nec ac</h2>
            <div>Created on 11.02.2016</div>
            <Actions />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum
            nobis, debitis voluptas consectetur, ipsa voluptatum aliquam itaque
            aperiam incidunt esse neque praesentium dicta at repellat vero
            tenetur numquam reiciendis.
          </p>
          <div className={styles.progress}>
            <span>Tasks</span>
            <span
              className={styles.progressBar}
              style={{ '--progress': '43%' } as React.CSSProperties}
            ></span>
            <span>43%</span>
          </div>
          <div className={styles.profiles}>
            <Image
              alt="persona 1"
              src={profiles[0]}
              width={75}
              height={75}
              unoptimized
            />
            <Image
              alt="persona 2"
              src={profiles[1]}
              width={75}
              height={75}
              unoptimized
            />
            <Image
              alt="persona 3"
              src={profiles[2]}
              width={75}
              height={75}
              unoptimized
            />
            <Image
              alt="persona 4"
              src={profiles[3]}
              width={75}
              height={75}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const challenge = {
  Component: ProjectCard,
  number: 109,
  preview,
  title: 'Project Card',
};
