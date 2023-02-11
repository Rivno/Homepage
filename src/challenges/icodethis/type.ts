export type CHALLENGE = {
  number: number;
  Component: () => JSX.Element;
};

export type CHALLENGE_MODULE = {
  [x: string]: CHALLENGE;
};
