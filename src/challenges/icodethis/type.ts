import { StaticImageData } from 'next/image';

export type CHALLENGE = {
  number: number;
  title: string;
  preview: StaticImageData;
  Component: () => JSX.Element;
};

export type CHALLENGE_MODULE = {
  [x: string]: CHALLENGE;
};
