import { challenges as iCodeThisChallenges } from './icodethis';

export const CATEGORIES = {
  iCodeThis: {
    challenges: iCodeThisChallenges,
  },
} as const;

export type CATEGORIES_TYPE = keyof typeof CATEGORIES;
