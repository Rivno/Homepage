import Image from 'next/image';

import preview from '../../../../public/challenges/20230315.png';
import { profilesIllustration } from '../images';

import { WebinarForm } from './webinarForm';

import styles from './webinarSignup.module.css';

function WebinarSignup() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <div className={styles.date}>March 17, 2021 12:00</div>
          <h1>The help of Augmented Reality and Holograms.</h1>
          <p>
            {`Use Augmented Reality to keep student engaged and provided detailed explanations of models and course material.
            In a 3D, AR lab, students can pinch, zoom and rotate equipment related to the course, for a fully immersive learning experience.`}
          </p>
          <WebinarForm />
        </div>
        <div>
          <div>
            <h3>Share</h3>
            <div className={styles.shares}>
              <svg fill="currentColor" viewBox="0 0 1920 1920">
                <path
                  d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                  fillRule="evenodd"
                />
              </svg>
              <svg fill="currentColor" viewBox="0 0 1920 1920">
                <path
                  d="M1643.825 518.606c-14.457 11.294-22.588 28.8-21.685 47.096.565 16.377 1.017 32.753 1.017 49.355 0 530.372-373.497 1079.153-998.513 1079.153-122.203 0-242.598-24.282-355.765-71.153 136.433-22.588 266.428-82.447 374.965-173.816 17.957-15.247 24.62-39.868 16.828-62.005-7.793-22.136-28.574-37.157-52.179-37.722-105.374-2.146-200.81-62.682-256.376-157.214 38.06-1.13 79.059-7.116 109.779-16.038 24.847-7.228 41.562-30.381 40.771-56.132-.903-25.863-19.2-47.774-44.499-53.308-112.15-24.282-194.71-116.781-222.607-243.84 32.076 6.438 62.344 8.47 79.06 8.922 24.62 2.711 47.322-14.456 55.453-38.06 8.02-23.492-.226-49.582-20.442-64.151-78.042-56.245-161.619-161.167-161.619-286.42 0-30.832 3.84-61.326 11.181-90.804 195.163 217.186 461.478 348.31 743.83 363.558 18.975 1.016 34.674-6.438 46.08-19.765 11.408-13.327 15.926-31.398 12.312-48.565-5.648-25.637-8.471-52.178-8.471-79.058 0-188.951 141.063-342.664 314.428-342.664 87.19 0 168.283 37.835 228.141 106.73 13.327 15.36 34.334 22.475 54.212 18.183 28.687-6.099 56.922-13.779 84.706-23.153-16.49 16.715-34.673 31.624-54.438 44.386-22.25 14.343-31.51 42.014-22.475 66.861s34.56 39.868 60.31 36.593c14.683-1.92 29.252-4.179 43.709-7.002-18.297 17.731-37.497 34.447-57.713 50.033m261.685-199.68c-16.716-18.636-43.596-23.83-66.41-13.214-4.066 1.92-8.132 3.84-12.31 5.76 17.054-30.269 30.946-62.683 40.997-96.678 6.777-22.588-1.242-46.984-20.103-61.214-18.974-14.118-44.5-15.247-64.49-2.485-58.277 37.384-120.96 64.828-186.466 82.108-78.268-76.8-181.948-120.17-289.355-120.17-235.595 0-427.37 204.424-427.37 455.606 0 9.487.227 18.974.791 28.348C626 564.008 390.517 424.977 226.64 208.469c-11.52-15.247-30.155-23.04-49.242-22.136-19.2 1.468-36.367 12.536-45.516 29.477-37.157 68.894-56.809 147.614-56.809 227.464 0 86.626 28.687 165.007 70.25 230.739-19.426 9.035-32.98 28.574-32.98 51.388v5.195c0 139.821 49.808 261.91 133.497 344.47-9.035 2.937-17.28 8.246-23.943 15.36a56.566 56.566 0 0 0-12.537 54.326c40.772 136.997 137.788 242.145 258.41 289.807-122.88 69.571-268.688 97.129-404.443 80.753-26.541-3.953-50.485 11.858-59.633 36.028-9.261 24.282-.677 51.84 20.781 66.522 179.69 123.784 387.276 189.29 600.17 189.29 695.717 0 1111.454-606.156 1111.454-1192.095 0-8.583-.113-17.054-.339-25.524 68.555-57.149 127.51-125.365 175.737-203.069 13.214-21.345 10.842-48.903-5.986-67.538"
                  fillRule="evenodd"
                />
              </svg>
              <svg fill="currentColor" viewBox="-143 145 512 512">
                <g>
                  <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z    M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z" />
                  <rect x="-8.5" y="348.4" width="49.9" height="159.7" />
                  <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1   c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z" />
                  <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7   C45.1,284.9,33.8,273,15.4,273z" />
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.profiles}>
            <h2>GUEST</h2>

            <div className={styles.profile}>
              <Image
                alt={`profile picture anngram`}
                src={profilesIllustration[6]}
                width={75}
                height={75}
                unoptimized
              />
              <div>
                <div className={styles.name}>Debbie Grayson</div>
                <div className={styles.pseudo}>@House - Head of Education</div>
              </div>
            </div>

            <div className={styles.profile}>
              <Image
                alt={`profile picture anngram`}
                src={profilesIllustration[9]}
                width={75}
                height={75}
                unoptimized
              />
              <div>
                <div className={styles.name}>Amanda</div>
                <div className={styles.pseudo}>@Monster Girl - Web</div>
              </div>
            </div>

            <div className={styles.profile}>
              <Image
                alt={`profile picture anngram`}
                src={profilesIllustration[3]}
                width={75}
                height={75}
                unoptimized
              />
              <div>
                <div className={styles.name}>Cecil Stedman</div>
                <div className={styles.pseudo}>@State - Cofounder</div>
              </div>
            </div>
          </div>
          <div className={styles.profiles}>
            <h2>HOSTED BY</h2>
            <div className={styles.profile}>
              <Image
                alt={`profile picture anngram`}
                src={profilesIllustration[5]}
                width={75}
                height={75}
                unoptimized
              />
              <div>
                <div className={styles.name}>{'Rudolph "Rudy" Connors'}</div>
                <div className={styles.pseudo}>@Robot - Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const challenge = {
  Component: WebinarSignup,
  number: 20230315,
  preview,
  title: 'Webinar Signup',
};
