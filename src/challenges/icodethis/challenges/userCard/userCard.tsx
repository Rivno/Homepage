import Image from 'next/image';

import preview from '../../../../../public/challenges/102.png';

import styles from './userCard.module.css';

const user = {
  name: 'David Grant',
  role: '3D Artist',
  image:
    'https://m.media-amazon.com/images/M/MV5BMjA0NjY3NjI4MV5BMl5BanBnXkFtZTgwNTM4OTg5NDE@._V1_UX140_CR0,0,140,209_AL_.jpg',
  rating: 4.7,
  reviews: 4447,
  students: 478,
  description:
    'David Grant has been making video games for a living for more than 14 years as a Designer, Producer, Creative Director, and Executive Producer, creating games for console, mobile, PC and Facebook.',
};

const UserCard = () => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <Image alt={user.name} src={user.image} width={75} height={75} />
      <div className={styles.identity}>
        <h2>{user.name}</h2>
        <div>{user.role}</div>
      </div>
      <div className={styles.indicator}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920">
            <path
              d="M1306.181 1110.407c-28.461 20.781-40.32 57.261-29.477 91.03l166.136 511.398-435.05-316.122c-28.686-20.781-67.086-20.781-95.66 0l-435.05 316.122 166.25-511.623c10.842-33.544-1.017-70.024-29.591-90.805L178.577 794.285h537.825c35.351 0 66.523-22.701 77.365-56.245l166.25-511.51 166.136 511.397a81.155 81.155 0 0 0 77.365 56.358h537.939l-435.276 316.122Zm609.77-372.819c-10.956-33.656-42.014-56.244-77.365-56.244h-612.141l-189.064-582.1C1026.426 65.589 995.367 43 960.017 43c-35.351 0-66.523 22.588-77.365 56.245L693.475 681.344H81.335c-35.351 0-66.41 22.588-77.366 56.244-10.842 33.657 1.017 70.137 29.591 90.918l495.247 359.718-189.29 582.211c-10.842 33.657 1.017 70.137 29.704 90.918 14.23 10.39 31.059 15.586 47.661 15.586 16.829 0 33.657-5.195 47.887-15.699l495.248-359.718 495.02 359.718c28.575 20.894 67.088 20.894 95.775.113 28.574-20.781 40.433-57.261 29.59-91.03l-189.289-582.1 495.247-359.717c28.687-20.781 40.546-57.261 29.59-90.918Z"
              fill="currentColor"
            />
          </svg>
          <span>{user.rating} Rating</span>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 28 28">
            <path
              d="M 16 3 C 15.375 3 14.753906 3.210938 14.21875 3.59375 L 12.5625 4.75 L 10.65625 5 L 10.625 5 L 10.59375 5.03125 C 9.320313 5.316406 8.316406 6.320313 8.03125 7.59375 L 8 7.625 L 8 7.65625 L 7.75 9.59375 L 6.59375 11.09375 L 6.5625 11.125 L 6.5625 11.15625 C 5.863281 12.273438 5.832031 13.714844 6.59375 14.78125 L 7.78125 16.4375 L 8.09375 18.15625 L 4.875 23.0625 L 3.84375 24.59375 L 8.625 24.59375 L 9.78125 27.28125 L 10.5 29 L 11.53125 27.4375 L 14.6875 22.6875 C 15.535156 23.035156 16.492188 23.066406 17.3125 22.6875 L 20.46875 27.4375 L 21.5 29 L 22.21875 27.28125 L 23.375 24.59375 L 28.15625 24.59375 L 27.125 23.0625 L 24 18.3125 L 24.25 16.4375 L 25.40625 14.78125 L 25.4375 14.75 L 25.4375 14.71875 C 26.136719 13.601563 26.167969 12.191406 25.40625 11.125 L 24.25 9.46875 L 23.875 7.59375 L 23.90625 7.59375 C 23.902344 7.570313 23.878906 7.554688 23.875 7.53125 C 23.695313 6.222656 22.660156 5.160156 21.34375 5 L 21.3125 5 L 19.4375 4.75 L 17.78125 3.59375 C 17.246094 3.210938 16.625 3 16 3 Z M 16 5.03125 C 16.230469 5.03125 16.457031 5.101563 16.625 5.21875 L 18.40625 6.5 L 18.625 6.65625 L 18.875 6.6875 L 21.0625 7 L 21.09375 7 C 21.542969 7.050781 21.855469 7.363281 21.90625 7.8125 L 21.90625 7.875 L 22.3125 10.09375 L 22.34375 10.3125 L 22.5 10.5 L 23.78125 12.28125 C 24.019531 12.613281 24.050781 13.175781 23.75 13.65625 L 22.34375 15.625 L 22.3125 15.875 L 22 18.0625 L 22 18.09375 C 21.980469 18.257813 21.925781 18.410156 21.84375 18.53125 L 21.78125 18.5625 L 21.78125 18.59375 C 21.636719 18.765625 21.4375 18.878906 21.1875 18.90625 L 21.125 18.90625 L 18.84375 19.3125 L 18.59375 19.34375 L 18.40625 19.5 L 16.625 20.78125 C 16.292969 21.019531 15.699219 21.050781 15.21875 20.75 L 13.59375 19.5 L 13.40625 19.34375 L 13.125 19.3125 L 10.9375 19 L 10.90625 19 C 10.597656 18.964844 10.359375 18.804688 10.21875 18.5625 C 10.15625 18.453125 10.109375 18.324219 10.09375 18.1875 L 10.09375 18.125 L 9.6875 15.84375 L 9.65625 15.59375 L 9.5 15.40625 L 8.21875 13.625 C 7.980469 13.292969 7.949219 12.699219 8.25 12.21875 L 9.5 10.59375 L 9.65625 10.40625 L 9.6875 10.125 L 9.96875 8.03125 C 9.972656 8.015625 9.996094 8.015625 10 8 C 10.125 7.511719 10.511719 7.125 11 7 C 11.015625 6.996094 11.015625 6.972656 11.03125 6.96875 L 13.125 6.6875 L 13.375 6.65625 L 13.59375 6.5 L 15.375 5.21875 C 15.542969 5.101563 15.769531 5.03125 16 5.03125 Z M 22.90625 20.25 L 24.4375 22.59375 L 22.03125 22.59375 L 21.78125 23.21875 L 21.09375 24.8125 L 18.96875 21.5625 L 19.4375 21.21875 L 21.40625 20.875 L 21.40625 20.90625 C 21.429688 20.902344 21.445313 20.878906 21.46875 20.875 C 22.007813 20.800781 22.496094 20.574219 22.90625 20.25 Z M 9.09375 20.28125 C 9.519531 20.664063 10.0625 20.929688 10.65625 21 C 10.667969 21 10.675781 21 10.6875 21 L 12.59375 21.25 L 13.03125 21.59375 L 10.90625 24.8125 L 10.21875 23.21875 L 9.96875 22.59375 L 7.5625 22.59375 Z"
              fill="currentColor"
            />
          </svg>
          <span>{user.reviews.toLocaleString()} Reviews</span>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z"
              fill="currentColor"
            />
          </svg>
          <span>{user.students.toLocaleString()} Students</span>
        </div>
      </div>
      <p>{user.description}</p>
      <button className={styles.button}>Show more</button>
    </div>
  </div>
);

export const challenge = { Component: UserCard, number: 102, preview };
