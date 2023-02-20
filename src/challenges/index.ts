import { CHALLENGE, CHALLENGE_MODULE } from './type';
import * as challengeComponents from './userInterfaces';

export const challenges: Record<string, CHALLENGE> = {};

for (const component in challengeComponents) {
  const challenge = (challengeComponents as unknown as CHALLENGE_MODULE)[
    component
  ];
  challenges[component] = challenge;
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
