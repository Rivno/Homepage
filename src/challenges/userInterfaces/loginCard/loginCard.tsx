import Image from 'next/image';

import preview from '../../../../public/challenges/127.png';
import { landscape } from '../images';

import styles from './loginCard.module.css';

function LoginCard() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <div>
            <h1>Log in</h1>
            <p>
              Log in to your account to upload or download pictures, videos or
              musics.
            </p>
          </div>
          <div>
            <input type="text" placeholder="Enter you email address" />
            <div className={styles.login_actions}>
              <a>Forgot password?</a>
              <button>
                <span>Next</span>
                <svg viewBox="6 6 12 12" fill="none">
                  <path
                    d="M17 12L7 12M17 12L13 16M17 12L13 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.auth_providers}>
            <div>Or log in with</div>
            <div>
              <button>
                <svg
                  viewBox="0 0 36 36"
                  fill="url(#jsc_s_c)"
                  height="40"
                  width="40"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      x2="50%"
                      y1="97.0782153%"
                      y2="0%"
                      id="jsc_s_c"
                    >
                      <stop offset="0%" stopColor="#0062E0"></stop>
                      <stop offset="100%" stopColor="#19AFFF"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                  <path
                    d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                    fill="white"
                  ></path>
                </svg>
                <span>Facebook</span>
              </button>
              <button>
                <svg viewBox="-0.5 0 48 48">
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        ></path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Google</span>
              </button>
            </div>
          </div>
          <div className={styles.sign_up}>
            <span>
              {`Don't have an account yet?`} <a>Sign up</a>
            </span>
          </div>
        </div>
        <Image
          src={landscape[1]}
          alt="log in art"
          width={400}
          height={700}
          unoptimized
        />
        <button className={styles.btn_close} />
      </div>
    </div>
  );
}

export const challenge = {
  Component: LoginCard,
  number: 127,
  preview,
  title: 'Login Card',
};
