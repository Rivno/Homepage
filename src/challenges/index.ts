import { StaticImageData } from 'next/image';

import previewICodeThis from '../../public/challenges/user_interface.png';

import { challenges as iCodeThisChallenges } from './icodethis';
import { CHALLENGE } from './icodethis/type';

export type CATEGORY = {
  challenges: Record<string, CHALLENGE>;
  preview: StaticImageData;
  title: string;
};

export const CATEGORIES: Record<string, CATEGORY> = {
  iCodeThis: {
    challenges: iCodeThisChallenges,
    preview: previewICodeThis,
    title: 'User Interface',
  },
};

export type CATEGORIES_TYPE = keyof typeof CATEGORIES;
