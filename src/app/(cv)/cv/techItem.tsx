import Image from 'next/image';

import { getTechLogo } from './technology';

export const TechItem = ({ tech }: { tech: string }) => {
  const logo = getTechLogo(tech);
  return (
    <span key={tech}>
      {tech}
      {logo ? <Image src={logo} alt={`logo ${tech}`} width={24} /> : null}
    </span>
  );
};
