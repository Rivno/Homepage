import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { experience } from '@/app/(cv)/cv/experience';
import { TechItem } from '@/app/(cv)/cv/techItem';
import { Description } from '@/components/byakko/description';
import { PreTitle } from '@/components/byakko/preTitle';
import { Title } from '@/components/byakko/title';

import FlagEn from '../../../public/cv/lang/en.svg';
import FlagFr from '../../../public/cv/lang/fr.svg';
import LogoPeople from '../../../public/cv/school/people.svg';

import { Challenge } from './byakko/challenge';
import { Early } from './byakko/early';
import { Iut } from './byakko/iut';
import { Role } from './byakko/role';
import { ScrollAnimate } from './byakko/scrollAnimate';
import { Supinfo } from './byakko/supinfo';

import styles from './byakko/page.module.css';

export default function Home() {
  return (
    <>
      <ScrollAnimate>
        <PreTitle>Allan Bienne</PreTitle>
        <Title className={styles.main_title}>Fullstack Developer</Title>

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
                <div className={styles.description}>{xp.description}</div>
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
                      <div className={styles.title}>{project.title}</div>
                      <div className={styles.info}>
                        <span className={styles.role}>{project.role}</span>
                        <span className={styles.separator_dot}>•</span>
                        <span className={styles.team_size}>
                          <LogoPeople className={styles.icon} />
                          <span>{project.teamSize}</span>
                        </span>
                        <span className={styles.separator_dot}>•</span>
                        {project.language === 'en' ? (
                          <FlagEn className={styles.icon} />
                        ) : (
                          <FlagFr className={styles.icon} />
                        )}
                      </div>
                      <div className={styles.description}>
                        {project.descriptionAlt ?? project.description}
                      </div>
                      <div className={styles.stacks}>
                        {project.stack.map((tech) => (
                          <TechItem key={tech} tech={tech} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={styles.logo}
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
        <div className={styles.contact_block}>
          <Link className={styles.contact} href="/contact">
            Contact me
          </Link>
        </div>
      </ScrollAnimate>
    </>
  );
}
