import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { experience } from '@/app/(cv)/cv/experience';
import { Description } from '@/components/byakko/description';
import { PreTitle } from '@/components/byakko/preTitle';
import { Title } from '@/components/byakko/title';

import { Challenge } from './challenge';
import { Early } from './early';
import { Iut } from './iut';
import { Role } from './role';
import { ScrollAnimate } from './scrollAnimate';
import { Supinfo } from './supinfo';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <ScrollAnimate>
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

        <p className={styles.block5} data-scroll data-scroll-animate="fade">
          Since then I work fulltime as a developer, first with C# and
          Javascript, then with ReactJS, NodeJS and Typescript. Below is the
          list of all my previous experiences.
        </p>
        {experience.map((xp, i) => {
          const Logo = xp.logo as any;
          return (
            <div
              key={xp.company}
              className={styles.experience}
              data-scroll
              data-scroll-animate="fade"
            >
              <div
                data-scroll
                {...(i % 2 === 1 ? { 'data-scroll-animate': 'right' } : {})}
              >
                <div className={styles.company}>{xp.company.toUpperCase()}</div>
                <div className={styles.company}>{xp.description}</div>
                <div className={styles.experience_content}>
                  {xp.projects.map((project, j) => (
                    <div
                      key={`${xp.company}-${project.title}`}
                      className={styles.project}
                      data-scroll
                      data-scroll-order={j}
                      {...(i % 2 === 1
                        ? { 'data-scroll-animate': 'right' }
                        : {})}
                    >
                      <div>{project.title}</div>
                      <div>{project.role}</div>
                      <div>{project.teamSize}</div>
                      <div>{project.description}</div>
                      <div>{project.stack.join(' - ')}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                data-scroll
                {...(i % 2 === 1 ? {} : { 'data-scroll-animate': 'right' })}
              >
                {xp.isSvg ? (
                  <Logo />
                ) : (
                  <div
                    className={classNames(styles.experience_image, {
                      [styles.white_bg]: xp.shouldAddBGAlt ?? xp.shouldAddBG,
                    })}
                  >
                    <Image
                      src={xp.logoAlt ?? xp.logo}
                      alt={`logo ${xp.company}`}
                      width={75}
                      unoptimized
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div>
          <Link href="/cv">Access to my CV</Link>
        </div>
        <div>
          <Link href="/contact">Contact me</Link>
        </div>
      </ScrollAnimate>
    </>
  );
}
