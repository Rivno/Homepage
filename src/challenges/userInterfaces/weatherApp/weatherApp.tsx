import Image from 'next/image';

import preview from '../../../../public/challenges/112.png';

import { weatherType } from './weatherType';

import styles from './weatherApp.module.css';

const days = [
  {
    day: 'Sunday',
    temp: 20,
    type: 'cloudy',
  },
  {
    day: 'Monday',
    temp: 25,
    type: 'cloudy',
  },
  {
    day: 'Tuesday',
    temp: 19,
    type: 'storm',
  },
  {
    day: 'Wednesday',
    temp: 18,
    type: 'rain',
  },
  {
    day: 'Thursday',
    temp: 20,
    type: 'cloudy',
  },
];

function WeatherApp() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.location}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Tokyo_Tower_and_Tokyo_Sky_Tree_2011_January.jpg"
            alt="Tokyo"
            width={390}
            height={338}
            unoptimized
          />
          <div className={styles.selector}>Tokyo</div>
          <div className={styles.current_temp}>
            <div>23°</div>
            <div>Cloudy</div>
          </div>
          <div>
            <span className={styles.dots2}>
              <span className={styles.dot2} />
              <span className={styles.dot2} />
              <span className={styles.dot2} data-current />
              <span className={styles.dot2} />
            </span>
          </div>
        </div>
        <div className={styles.days}>
          {days.map((day) => (
            <div key={day.day}>
              <span>{day.day}</span>
              <div>
                <span>{day.temp}°</span>
                <span>{weatherType[day.type]}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.button}>
            <span className={styles.plus_sign} />
            Add Location
          </button>
        </div>

        <div className={styles.status_bar}>
          <div>
            <span className={styles.dots}>
              <span className={styles.dot} data-fill />
              <span className={styles.dot} data-fill />
              <span className={styles.dot} data-fill />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </span>
            <span>5G</span>
            <svg viewBox="0 0 20 20">
              <path
                d="M8.763 13.58a1.75 1.75 0 1 1 2.473 2.477 1.75 1.75 0 0 1-2.473-2.478v.001zM3.4 10.825c3.64-3.64 9.56-3.64 13.2 0l-1.65 1.65a7.007 7.007 0 0 0-9.9 0l-1.65-1.65zm-3.3-3.3c5.46-5.459 14.34-5.459 19.8 0l-1.65 1.65c-4.55-4.55-11.95-4.55-16.5 0L.1 7.526v-.001z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.clock}>13:37</div>
          <div>
            <span className={styles.battery}>63%</span>
            <svg viewBox="2 2 20 20">
              <path d="M24,0V24H0V0Z" fill="none" />
              <path
                d="M13,7H3.34A1.34,1.34,0,0,0,2,8.33v7.33A1.34,1.34,0,0,0,3.33,17H13Z"
                fill="currentColor"
              />
              <path
                d="M20,10V8.33A1.34,1.34,0,0,0,18.67,7H13V17h5.67A1.34,1.34,0,0,0,20,15.67V14h2V10Z"
                fillOpacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export const challenge = {
  Component: WeatherApp,
  number: 20230222,
  preview,
  title: 'Weather App',
};
