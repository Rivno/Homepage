import { StaticImageData } from 'next/image';

export type CHALLENGE = {
  number: number;
  preview: StaticImageData;
  Component: () => JSX.Element;
};

export type CHALLENGE_MODULE = {
  [x: string]: CHALLENGE;
};
