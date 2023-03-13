import preview from '../../../../public/challenges/105.png';

import { ColorGeneratorClient } from './colorGeneratorClient';

const ColorGenerator = () => {
  return <ColorGeneratorClient />;
};

export const challenge = {
  Component: ColorGenerator,
  number: 20230215,
  preview,
  title: 'Color Generator',
};
