import Image from 'next/image';

import { profiles } from '../images';

import styles from './billing.module.css';
export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <Image
          alt={`current user profile picture`}
          src={profiles[1]}
          width={75}
          height={75}
          unoptimized
        />
        <div>
          <div className={styles.name}>Ildiko Gaspar</div>
          <div className={styles.pseudo}>@igaspar</div>
        </div>
      </div>
      <div className={styles.navigation}>
        <a>
          <svg fill="currentColor" viewBox="0 0 56 56">
            <path d="M 46.8672 9.2617 C 44.4766 6.8711 41.1016 6.4961 37.1172 6.4961 L 18.8360 6.4961 C 14.8985 6.4961 11.5235 6.8711 9.1329 9.2617 C 6.7422 11.6523 6.3907 15.0039 6.3907 18.9180 L 6.3907 37.0118 C 6.3907 41.0195 6.7422 44.3477 9.1329 46.7383 C 11.5235 49.1289 14.8985 49.5039 18.9063 49.5039 L 37.1172 49.5039 C 41.1016 49.5039 44.4766 49.1289 46.8672 46.7383 C 49.2580 44.3477 49.6093 41.0195 49.6093 37.0118 L 49.6093 18.9883 C 49.6093 14.9805 49.2580 11.6289 46.8672 9.2617 Z M 45.8360 18.3320 L 45.8360 37.6445 C 45.8360 40.0820 45.5313 42.5664 44.1251 43.9961 C 42.6953 45.4024 40.1641 45.7305 37.7500 45.7305 L 18.2500 45.7305 C 15.8360 45.7305 13.3048 45.4024 11.8985 43.9961 C 10.4688 42.5664 10.1641 40.0820 10.1641 37.6445 L 10.1641 18.4023 C 10.1641 15.9414 10.4688 13.4102 11.8751 12.0039 C 13.3048 10.5742 15.8594 10.2696 18.3204 10.2696 L 37.7500 10.2696 C 40.1641 10.2696 42.6953 10.5977 44.1251 12.0039 C 45.5313 13.4336 45.8360 15.9180 45.8360 18.3320 Z" />
          </svg>
          <span>General</span>
        </a>
        <a>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M15 9C16.8856 9 17.8284 9 18.4142 9.58579C19 10.1716 19 11.1144 19 13L19 15L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L12 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 15L5 13C5 11.1144 5 10.1716 5.58579 9.58579C6.17157 9 7.11438 9 9 9L12 9L15 9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Password</span>
        </a>
        <a>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289M3.29289 5.29289L10.5858 12.5857C11.3668 13.3668 12.6332 13.3668 13.4142 12.5857L20.7071 5.29289"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Invitations</span>
        </a>
        <a aria-current="page">
          <svg fill="currentColor" viewBox="0 0 1024 1024">
            <path d="M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z" />
            <path d="M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z" />
            <path d="M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z" />
          </svg>
          <span>Billing</span>
        </a>
        <a>
          <svg viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_429_11069)">
              <path
                d="M4 4H6V6H4V4Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H6V20H4V18Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 4H20V6H18V4Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 11H20V13H18V11Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11H13V13H11V11Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 11H6V13H4V11Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 4H13V6H11V4Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 18H13V20H11V18Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 18H20V20H18V18Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_429_11069">
                <rect width="24" height="24" fill="none" />
              </clipPath>
            </defs>
          </svg>
          <span>App</span>
        </a>
      </div>
      <a>
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Log out</span>
      </a>
    </div>
  );
}
