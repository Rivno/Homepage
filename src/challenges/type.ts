import { StaticImageData } from 'next/image';

export type CHALLENGE = {
  number: number;
  title: string;
  preview: StaticImageData;
  showcase?: boolean;
  Component: () => JSX.Element;
};

export type CHALLENGE_MODULE = {
  [x: string]: CHALLENGE;
};
