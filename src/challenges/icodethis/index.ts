import * as challengeComponents from './challenges';
import { CHALLENGE, CHALLENGE_MODULE } from './type';

export const challenges: Record<string, CHALLENGE> = {};

for (const compoment in challengeComponents) {
  challenges[compoment] = {
    number: (challengeComponents as unknown as CHALLENGE_MODULE)[compoment]
      .number,
    Component: (challengeComponents as unknown as CHALLENGE_MODULE)[compoment]
      .Component,
  };
}

// 99 song card
// 98 search
// 97 newsletter
// 96 music player
// 95 mega menu
// 94 followers
// 93 faq
// 92 blog header
// 91 app card
// 90 app list
