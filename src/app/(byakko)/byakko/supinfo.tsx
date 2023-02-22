import Image from 'next/image';

import supinfo from '../../../../public/supinfo.png';

import styles from './page.module.css';

export function Supinfo() {
  return (
    <div className={styles.block4} data-scroll data-scroll-animate="fade">
      <p data-scroll>
        After that I continue my studies in the school of computer science
        engineering Supinfo, for a three years cursus giving me access to Master
        2 diploma. There I learn more about development (mainly in C#, then Java
        and Lisp), network with cisco, admin sys (Windows, Linux and MacOS),
        Bussines application (BO) and the most important task of engineering,
        solving problems. During theses 3 years I did several internship working
        with C# Winform, ASP.net MVC, PHP, Java, Javascript, HTML and CSS
      </p>
      <Image src={supinfo} alt="supinfo" />
    </div>
  );
}
