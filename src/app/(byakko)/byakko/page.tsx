import Link from 'next/link';

import { experience } from '@/app/(cv)/cv/experience';
import { Description } from '@/components/byakko/description';
import { PreTitle } from '@/components/byakko/preTitle';
import { Title } from '@/components/byakko/title';

import { Challenge } from './challenge';
import { Early } from './early';
import { Iut } from './iut';
import { Role } from './role';
import { Supinfo } from './supinfo';

import styles from './page.module.css';

export default function Home() {
  // const observer = new IntersectionObserver((entries) => {
  //   for (let index = 0; index < entries.length; index += 1) {
  //     const entry = entries[index];
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('show');
  //     } else {
  //       entry.target.classList.remove('show');
  //     }
  //   }
  // });

  // const hiddenElements = document.querySelectorAll('.hidden');

  // for (let index = 0; index < hiddenElements.length; index += 1) {
  //   const element = hiddenElements[index];
  //   observer.observe(element);
  // }

  // .hidden {
  //   opacity: 0;
  //   filter: blur(5px);
  //   transform: translateX(-100%);
  //   transition: all 1s;
  // }

  // @media(prefers-reduced-motion) {
  //   .hidden {
  //     transition: none;
  //   }
  // }

  // .show {
  //   opacity: 1;
  //   filter: blur(0);
  //   transform: translateX(0);
  // }

  // .hidden:nth-child(x) {
  //   transition-delay: 200ms; // and more and more
  // }

  return (
    <>
      <PreTitle>Allan Bienne</PreTitle>
      <Title className={styles.title}>Fullstack Developer</Title>

      <Description>
        Dev expert / Tech lead on ReactJS - NodeJS - .net C#
      </Description>

      <p>
        {
          "The current technologies I'm interested at are ReactJS, NextJS and Rust"
        }
      </p>

      <Challenge />

      <Role />
      <Early />
      <Iut />
      <Supinfo />

      <p>
        Since then I work fulltime as a developer, first with C# and Javascript,
        then with ReactJS, NodeJS and Typescript. Below is the list of all my
        previous experiences.
      </p>
      {experience.map((xp) => (
        <div key={xp.company} className={styles.experience}>
          <div>
            <div className={styles.company}>{xp.company.toUpperCase()}</div>
            <div className={styles.experience_content}>
              {xp.projects.map((project) => (
                <div key={`${xp.company}-${project.title}`}>
                  {project.description}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div>
        <Link href="/cv">Access to my CV</Link>
      </div>
      <div>
        <Link href="/contact">Contact me</Link>
      </div>
    </>
  );
}
