import * as challengeComponents from './challenges';

export type CHALLENGE = {
  Component: () => JSX.Element;
};

export const challenges: Record<string, CHALLENGE> = {};

for (const compoment in challengeComponents) {
  console.log(compoment);
  challenges[compoment] = {
    Component: (challengeComponents as Record<string, () => JSX.Element>)[
      compoment
    ],
  };
}
